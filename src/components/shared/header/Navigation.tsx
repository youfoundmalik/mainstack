import './index.scss';
import { useState } from 'react';
import { IoHomeOutline } from 'react-icons/io5';
import { TfiBarChart } from 'react-icons/tfi';
import { LiaMoneyBillSolid } from 'react-icons/lia';
import { MdOutlinePeopleAlt } from 'react-icons/md';
import { RiAppsLine } from 'react-icons/ri';

const Navigation = () => {
  const [active, setActive] = useState(3);
  const links = [
    {
      id: 1,
      name: 'Home',
      icon: <IoHomeOutline size='15px' />,
    },
    {
      id: 2,
      name: 'Analytics',
      icon: <TfiBarChart size='15px' />,
    },
    {
      id: 3,
      name: 'Revenue',
      icon: <LiaMoneyBillSolid size='19px' />,
    },
    {
      id: 4,
      name: 'CRM',
      icon: <MdOutlinePeopleAlt size='18px' />,
    },
    {
      id: 5,
      name: 'Apps',
      icon: <RiAppsLine size='18px' />,
    },
  ];
  return (
    <div className='app-header-nav-container flex items-center gap-[25px]'>
      {links.map((link) => (
        <div
          key={link.id}
          className={`app-header-nav-link flex items-center gap-1 cursor-pointer ${
            link.id === active ? 'active' : ''
          }`}
          onClick={() => setActive(link.id)}
        >
          {link.icon}
          <span className='app-header-nav-link-text inline-block'>
            {link.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Navigation;
