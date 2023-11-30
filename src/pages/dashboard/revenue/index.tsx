import './index.scss';
import { useDisclosure } from '@chakra-ui/react';

import TransactionFilter from 'components/dashboard/transactionFilter';
import SummaryBalance from 'components/dashboard/balanceSummary';
import DashboardLayout from 'components/layout/dashboardLayout';
import AppButton from 'components/shared/button';
import TransactionTable from 'components/dashboard/table';

const RevenuePage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const btnRef = useRef()
  return (
    <DashboardLayout className='revenue-page flex flex-col gap-[100px]'>
      <div className='revenue-summary'>
        <div className='graph-and-balance'>
          <div className='balance-summary flex flex-col items-start gap-2'>
            <p className='text-grey text-sm font-medium'>Available Balance</p>
            <div className='summary-balance flex  items-center gap-[65px]'>
              <h3 className='text-[28px] font-bold text-black'>
                USD 120,500.00
              </h3>
              <AppButton h='50px' colorScheme='blackAlpha' bg='#131316'>
                Withdraw
              </AppButton>
            </div>
          </div>
          <div className='graph-area'>graph</div>
        </div>
        <div className='other-summaries flex flex-col gap-[32px]'>
          <SummaryBalance title='Ledger Balance' figure='120,500.00' />
          <SummaryBalance title='Total Payout' figure='120,500.00' />
          <SummaryBalance title='Total Revenue' figure='120,500.00' />
          <SummaryBalance title='Pending Payout' figure='120,500.00' />
        </div>
      </div>
      <TransactionFilter isOpen={isOpen} onClose={onClose} />
      <TransactionTable onOpen={onOpen} />
    </DashboardLayout>
  );
};

export default RevenuePage;
