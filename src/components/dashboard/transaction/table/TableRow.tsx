import './index.scss';
import { Box } from '@chakra-ui/react';
import { rgba } from 'utils/stylesformatter/rgba';
import { CgArrowTopRight } from 'react-icons/cg';
import { Transaction } from 'models/transaction';

interface Props {
  data: Transaction;
}
const SingleTransaction = ({ data }: Props) => {
  const isSuccessful = data.status === 'successful';
  return (
    <div className='single-transaction flex items-center justify-between w-full'>
      <div className='details flex items-center gap-4'>
        <Box
          bg={rgba(isSuccessful ? '#075132' : '#ff0000', 0.1)}
          borderRadius='50%'
          className='icon w-12 h-12 flex items-center justify-center'
        >
          <CgArrowTopRight
            size='23px'
            color={isSuccessful ? '#075132' : '#ff0000'}
            className={isSuccessful ? 'rotate-180' : ''}
          />
        </Box>
        <div className='desc-status flex flex-col items-start gap-2'>
          <h4 className='desc'>{data.metadata?.product_name || data.type}</h4>
          <p className={`status ${data.metadata?.name || data.status}`}>
            {data.metadata?.name || data.status}
          </p>
        </div>
      </div>
      <div className='amount-date flex flex-col items-end gap-1'>
        <h4 className='amount'>USD {data.amount}</h4>
        <p className='date'>{data.date}</p>
      </div>
    </div>
  );
};

export default SingleTransaction;
