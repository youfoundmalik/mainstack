import './index.scss';
import { Button, ButtonGroup, Divider, IconButton } from '@chakra-ui/react';
import { AiOutlineDownload } from 'react-icons/ai';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import SingleTransaction from '../singleTransaction';

interface Props {
  onOpen: () => void;
}
const TransactionTable = ({ onOpen }: Props) => {
  return (
    <div className='transactions-breakdown flex flex-col w-full gap-5'>
      <div className='table-head flex items-center justify-between w-full'>
        <div className='table-heading flex flex-col items-start gap-1'>
          <h3 className='text-black'>24 Transactions</h3>
          <p className='text-grey'>Your transactions for the last 7 days</p>
        </div>
        <div className='table-actions w-fit flex items-center gap-3'>
          <Button
            rightIcon={<MdOutlineArrowDropDown className='mt-1' size='25px' />}
            onClick={onOpen}
            className='flex items-center gap-1 filter-btn'
          >
            <span>Filter</span>
            <span className='indicator'>3</span>
          </Button>
          <ButtonGroup isAttached variant='outline'>
            <Button borderRadius='50px'>Save</Button>
            <IconButton
              variant='solid'
              borderRadius='50px'
              aria-label='Add to friends'
              icon={<AiOutlineDownload />}
            />
          </ButtonGroup>
        </div>
      </div>
      <Divider />
      <div className='table-body mt-3 flex flex-col w-full gap-6'>
        <SingleTransaction />
        <SingleTransaction />
        <SingleTransaction />
      </div>
    </div>
  );
};

export default TransactionTable;
