import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';

import { sharedQueriesProps } from 'utils/apis';
import { GeneralService } from '../services/general';
import { Transaction, TransactionData } from 'models/transaction';
import { transactionsActions } from 'store/reducers/transactions';

export const useFetchTransactions = () => {
  const dispatch = useDispatch();
  const { isLoading } = useQuery({
    queryFn: () => {
      return GeneralService.getTransactions();
    },
    queryKey: ['transactions'],
    onSuccess: (data) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      const res = data.map((r: Transaction) => new TransactionData(r));
      dispatch(transactionsActions.push(res));
    },
    ...sharedQueriesProps,
  });

  return isLoading;
};
