import {
  Box,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { BiMessageDetail } from 'react-icons/bi';
import { FiMenu } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';
import { IoBugOutline } from 'react-icons/io5';
import { CiReceipt, CiSettings } from 'react-icons/ci';
import { TfiGift } from 'react-icons/tfi';
import { GoGitMergeQueue } from 'react-icons/go';
import { PiSignOutFill, PiUserSwitchLight } from 'react-icons/pi';

const HeaderActions = () => {
  const { first_name, last_name, email } = useSelector(
    (state: RootState) => state.user.data
  );

  const initials = first_name?.slice(0, 1) + last_name?.slice(0, 1) || 'NA';
  const fullName = first_name ? first_name + ' ' + last_name : 'No User';

  return (
    <div className='app-header-actions-container flex items-center gap-[10px]'>
      <IconButton
        variant='ghost'
        aria-label='notifications'
        icon={
          <IoMdNotificationsOutline
            size='25px'
            className='text-grey app-header-actions-icon-btn'
          />
        }
      />
      <IconButton
        variant='ghost'
        aria-label='messages'
        icon={
          <BiMessageDetail
            size='25px'
            className='text-grey app-header-actions-icon-btn'
          />
        }
      />
      <Menu isLazy closeOnSelect={false}>
        <MenuButton as={Box} className='cursor-pointer custom-app-header-menu'>
          <div className='app-header-actions-user-toggle flex items-center gap-2 '>
            <div className='app-header-actions-user w-[35px] h-[35px] flex items-center justify-center'>
              <p className='text-white'>{initials}</p>
            </div>
            <FiMenu
              size='25px'
              className='text-grey hover:text-accent app-header-actions-icon-btn cursor-pointer'
            />
          </div>
        </MenuButton>
        <MenuList className='custom-header-menu-options flex flex-col gap-3'>
          <div className='flex items-center gap-2'>
            <div className='app-header-actions-user w-[40px] h-[40px] flex items-center justify-center'>
              <p className='text-white'>{initials}</p>
            </div>
            <div className='flex flex-col gap-0'>
              <h4 className='full-name text-black font-bold'>{fullName}</h4>
              <p className='email text-xs text-gray-500'>{email}</p>
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <MenuItem icon={<CiSettings size='25px' />}>Settings</MenuItem>
            <MenuItem icon={<CiReceipt size='25px' />}>
              Purchase History
            </MenuItem>
            <MenuItem icon={<TfiGift size='22px' />}>Refer and Earn</MenuItem>
            <MenuItem icon={<GoGitMergeQueue size='23px' />}>
              Integrations
            </MenuItem>
            <MenuItem icon={<IoBugOutline size='23px' />}>Report Bug</MenuItem>
            <MenuItem icon={<PiUserSwitchLight size='23px' />}>
              Switch Accounts
            </MenuItem>
            <MenuItem icon={<PiSignOutFill size='23px' />}>Sign Out</MenuItem>
          </div>
        </MenuList>
      </Menu>
    </div>
  );
};

export default HeaderActions;
