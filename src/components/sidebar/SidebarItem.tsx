import { CaretDownIcon } from "@phosphor-icons/react";
import { useState, type JSX } from "react";
import { Link, useLocation } from "react-router-dom";

interface SidebarItemProps {
  item: {
    title: string;
    href: string;
    icon: JSX.Element;
    submenu?: { title: string; href: string }[];
  };
  collapsed?: boolean;
  fullyCollapsed?: boolean;
}

export default function SidebarItem({ item, collapsed = false, fullyCollapsed = false }: SidebarItemProps) {
  const location = useLocation();
  const isActive = location.pathname === item.href || location.pathname.startsWith(item.href + "/");
  const [open, setOpen] = useState(isActive);

  return (
    <div>
      {item.submenu ? (
        <>
          <button
            onClick={() => setOpen(!open)}
            className={`w-full flex items-center gap-3 p-2 rounded transition-all duration-300
              ${fullyCollapsed ? "justify-center" : "justify-start"}
              ${isActive ? "bg-[#3b8b7d] text-white" : "text-gray-600 hover:text-white hover:bg-[#3b8b7d]"}
            `}
          >
            {item.icon}
            {!collapsed && <span>{item.title}</span>}
            {!collapsed && item.submenu && (
              <CaretDownIcon
                size={16}
                className={`ml-auto transition-transform ${open ? "rotate-180" : ""}`}
              />
            )}
          </button>

          {open && (
            <div className={`ml-8 mt-1 flex flex-col gap-1 ${collapsed ? "hidden" : "block"}`}>
              {item.submenu.map((subItem, index) => (
                <Link
                  to={subItem.href}
                  key={index}
                  className={`text-sm px-2 py-1 rounded transition-all
                    ${location.pathname === subItem.href
                      ? "text-[#3b8b7d] font-medium"
                      : "text-gray-600 hover:bg-[#5bbfaa1a]"}
                  `}
                >
                  {subItem.title}
                </Link>
              ))}
            </div>
          )}
        </>
      ) : (
        <Link
          to={item.href}
          className={`w-full flex items-center gap-3 p-2 rounded transition-all duration-300
            ${isActive ? "bg-[#3b8b7d] text-white" : "text-gray-600 hover:text-white hover:bg-[#3b8b7d]"}
            ${fullyCollapsed ? "justify-center" : "justify-start"}
          `}
        >
          {item.icon}
          {!collapsed && <span>{item.title}</span>}
        </Link>
      )}
    </div>
  );
}
