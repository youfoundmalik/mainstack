import { Box, IconButton, Menu, MenuButton, MenuList } from '@chakra-ui/react';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { BiMessageDetail } from 'react-icons/bi';
import { FiMenu } from 'react-icons/fi';

const HeaderActions = () => {
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
              <p className='text-white'>OJ</p>
            </div>
            <FiMenu
              size='25px'
              className='text-grey hover:text-accent app-header-actions-icon-btn cursor-pointer'
            />
          </div>
        </MenuButton>
        <MenuList className='custom-header-menu-options'></MenuList>
      </Menu>
    </div>
  );
};

export default HeaderActions;
