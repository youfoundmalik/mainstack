import './index.scss';
import { useSelector } from 'react-redux';

import { useFetchTransactions } from 'hooks/useFetchTransactions';
import SummaryBalance from 'components/dashboard/balanceSummary';
import DashboardLayout from 'components/layout/dashboardLayout';
import Transactions from 'components/dashboard/transaction';
import { useFetchWallet } from 'hooks/useFetchWallet';
import AppButton from 'components/shared/button';
import { RootState } from 'store/store';
import LineGraph from 'components/dashboard/graph';

const RevenuePage = () => {
  const walletLoading = useFetchWallet();
  const txnLoading = useFetchTransactions();

  const wallet = useSelector((state: RootState) => state.wallet);

  return (
    <DashboardLayout className='revenue-page flex flex-col gap-[100px]'>
      {walletLoading ? (
        <></>
      ) : (
        <div className='revenue-summary'>
          <div className='graph-and-balance'>
            <div className='balance-summary flex mb-3 flex-col items-start gap-2'>
              <p className='text-grey text-sm font-medium'>Available Balance</p>
              <div className='summary-balance flex  items-center gap-[65px]'>
                <h3 className='text-[28px] font-bold text-black'>
                  USD {wallet.data.balance}
                </h3>
                <AppButton h='50px' colorScheme='blackAlpha' bg='#131316'>
                  Withdraw
                </AppButton>
              </div>
            </div>
            <LineGraph />
          </div>
          <div className='other-summaries flex flex-col gap-[32px]'>
            <SummaryBalance
              title='Ledger Balance'
              figure={wallet.data.ledger_balance}
            />
            <SummaryBalance
              title='Total Payout'
              figure={wallet.data.total_payout}
            />
            <SummaryBalance
              title='Total Revenue'
              figure={wallet.data.total_revenue}
            />
            <SummaryBalance
              title='Pending Payout'
              figure={wallet.data.pending_payout}
            />
          </div>
        </div>
      )}
      {txnLoading ? <></> : <Transactions />}
    </DashboardLayout>
  );
};

export default RevenuePage;
