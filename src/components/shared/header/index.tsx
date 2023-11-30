import HeaderActions from './Actions';
import Navigation from './Navigation';
import './index.scss';
import logo from 'assets/mainstack.png';

const AppHeader = () => {
  return (
    <div className='app-header m-[20px] sticky top-0 py-[15px] px-[25px] box-border flex justify-between items-center h-[65px]'>
      <div className='app-logo w-[30px]'>
        <img className='w-full cursor-pointer' alt='MainStack' src={logo} />
      </div>
      <Navigation />
      <HeaderActions />
    </div>
  );
};

export default AppHeader;
