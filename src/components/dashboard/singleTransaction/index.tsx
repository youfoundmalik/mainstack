import './index.scss';
import { Box } from '@chakra-ui/react';
import { rgba } from 'utils/stylesformatter/rgba';
import { CgArrowTopRight } from 'react-icons/cg';
// import { CgArrowBottomLeft } from "react-icons/cg";

const SingleTransaction = () => {
  return (
    <div className='single-transaction flex items-center justify-between w-full'>
      <div className='details flex items-center gap-4'>
        <Box
          bg={rgba('#ff0000', 0.1)}
          borderRadius='50%'
          className='icon w-12 h-12 flex items-center justify-center'
        >
          <CgArrowTopRight size='23px' color={'#ff0000'} />
        </Box>
        <div className='desc-status flex flex-col items-start gap-2'>
          <h4 className='desc'>Psychology of Money </h4>
          <p className='status'>Roy Cash Successful</p>
        </div>
      </div>
      <div className='amount-date flex flex-col items-end gap-1'>
        <h4 className='amount'>USD 600</h4>
        <p className='date'>Apr 03,2022</p>
      </div>
    </div>
  );
};

export default SingleTransaction;
