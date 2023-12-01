import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDisclosure } from '@chakra-ui/react';

import TransactionFilter from './transactionFilter';
import { Transaction } from 'models/transaction';
import { RootState } from 'store/store';
import TransactionTable from './table';

const Transactions = () => {
  const transactions = useSelector(
    (state: RootState) => state.transactions.data
  );
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [count, setCount] = useState(0);
  const [filteredTxn, setFilteredTxn] = useState(transactions);

  const handleFilter = (arr: Transaction[], count: number) => {
    setFilteredTxn(arr);
    setCount(count);
  };

  return (
    <>
      <TransactionFilter
        allTransactions={transactions}
        setTransactions={handleFilter}
        isOpen={isOpen}
        onClose={onClose}
      />
      <TransactionTable count={count} data={filteredTxn} onOpen={onOpen} />
    </>
  );
};

export default Transactions;
