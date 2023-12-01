import './index.scss';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { AxisOptions, Chart } from 'react-charts';

import { RootState } from 'store/store';

type TransactionsGraph = {
  date: Date;
  amount: number;
};

type Series = {
  label: string;
  data: TransactionsGraph[];
};

export default function LineGraph() {
  const transactions = useSelector(
    (state: RootState) => state.transactions.data
  );

  const refactoredTxn: TransactionsGraph[] = transactions.map((txn) => ({
    date: new Date(txn.date),
    amount: txn.amount,
  }));

  const data: Series[] = [
    {
      label: 'Amount',
      data: refactoredTxn as TransactionsGraph[],
    },
  ];

  const primaryAxis = useMemo(
    (): AxisOptions<TransactionsGraph> => ({ getValue: (datum) => datum.date }),
    []
  );

  const secondaryAxes = useMemo(
    (): AxisOptions<TransactionsGraph>[] => [
      { getValue: (datum) => datum.amount },
    ],
    []
  );

  return (
    <div className='graph-container h-[350px]'>
      {transactions.length > 0 ? (
        <Chart
          options={{
            data,
            primaryAxis,
            secondaryAxes,
            primaryCursor: false,
            defaultColors: ['#ff5403'],
          }}
        />
      ) : null}
    </div>
  );
}
