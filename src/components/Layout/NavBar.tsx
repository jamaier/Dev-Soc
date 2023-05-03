import { BsBellFill, BsHouseFill } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import { BiLogOut } from 'react-icons/bi';

import SidebarItem from '@/components/layout/SidebarItem';
import SidebarLogo from '@/components/layout/SidebarLogo';

const Sidebar = () => {
  const items = [
    {
      label: 'Home',
      href: '/',
      icon: BsHouseFill
    },
    {
      label: 'Notifications',
      href: '/notifications',
      icon: BsBellFill
    },
    {
      label: 'Profile',
      href: '/users/123',
      icon: FaUser
    }
  ];

  return (
    <div className="h-full col-span-1 pr-4 md:pr-6">
      <div className="flex flex-col items-end">
        <div className="space-y-2 lg:w-[230px]">
          <SidebarLogo />
          {items.map((item) => (
            <SidebarItem
              key={item.href}
              href={item.href}
              label={item.label}
              icon={item.icon}
            />
          ))}
          <div className='flex py-11'>
            <SidebarItem onClick={() => {}} icon={BiLogOut} label="logOut" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;