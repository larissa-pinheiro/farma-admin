import {
  DotsThreeVerticalIcon
} from '@phosphor-icons/react';
import { useState } from 'react';
import FarmaAdminLogo from '../../assets/images/FarmaAdmin.png';
import { sidebarItems } from './SidebarData';
import SidebarItem from './SidebarItem';

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [fullyCollapsed, setFullyCollapsed] = useState(false);

  const toggleSidebar = () => {
    if (!collapsed) {
      setCollapsed(true);
      setTimeout(() => setFullyCollapsed(true), 300);
    } else {
      setFullyCollapsed(false);
      setCollapsed(false);
    }
  };

  return (
    <aside
      className={`flex flex-col min-h-screen z-10 bg-slate-50 text-white drop-shadow-md transition-all duration-300 ${collapsed ? 'w-20' : 'w-64'
        }`}
    >

      <div className="flex items-center justify-between px-4 py-[14.5px]">
        <div
          className={`flex items-center gap-2 transition-all duration-300 ${fullyCollapsed && 'justify-center w-full cursor-pointer'}`}
          onClick={() => {
            if (collapsed) {
              setCollapsed(false);
              setFullyCollapsed(false);
            }
          }}
        >
          <img
            src={FarmaAdminLogo}
            alt="Logo"
            className="rounded-full w-10 h-10 transition-all duration-300"
          />

          {!collapsed && (
            <h1 className="text-xl font-bold text-gray-600">
              Farma<span className="text-[#6ecfba]">Admin</span>
            </h1>
          )}
        </div>

        <button
          onClick={toggleSidebar}
          className="text-gray-600 hover:text-[#6ecfba] transition"
        >
          {
            !collapsed && <DotsThreeVerticalIcon size={24} />
          }

        </button>
      </div>

      <span className='shadow-md block h-[1px] bg-slate-500 mx-4' />

      <nav className="h-full flex flex-col gap-2 p-4 shadow-md z-10">
        {sidebarItems.map((item, index) => (
          <SidebarItem
            key={index}
            item={item}
            collapsed={collapsed}
            fullyCollapsed={fullyCollapsed}
          />
        ))}
      </nav>

    </aside>
  );
}
