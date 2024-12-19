import { Link, useLocation } from "react-router-dom";
import { IconNavCalendar, IconNavCalendarFill, IconNavHome, IconNavHomeFill, IconNavSettings, IconNavSettingsFill, IconNavStatistics, IconNavStatisticsFill } from "./icons";

interface NavIconProps {
  selected: React.ReactNode;
  unselected: React.ReactNode;
}

interface NavItemProps {
  icon: NavIconProps;
  label: string;
  path: string;
}

const BottomNav = () => {
  const location = useLocation();

  const iconColorStyle = "color-fill-primary";

  // TODO: 국제화 적용하기
  const navItems: NavItemProps[] = [
    {
      icon: {
        selected: <IconNavHomeFill className={iconColorStyle} />,
        unselected: <IconNavHome className={iconColorStyle} />,
      }, label: "Home", path: "/"
    },
    {
      icon: {
        selected: <IconNavCalendarFill className={iconColorStyle} />,
        unselected: <IconNavCalendar className={iconColorStyle} />,
      }, label: "Calendar", path: "/calendar"
    },
    {
      icon: {
        selected: <IconNavStatisticsFill className={iconColorStyle} />,
        unselected: <IconNavStatistics className={iconColorStyle} />,
      }, label: "Stats", path: "/stats"
    },
    {
      icon: {
        selected: <IconNavSettingsFill className={iconColorStyle} />,
        unselected: <IconNavSettings className={iconColorStyle} />,
      }, label: "Settings", path: "/settings"
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 color-bg-inverse shadow-shadow2 py-1 px-4">
      <div className="flex justify-around items-center">
        {navItems.map(({ icon: Icon, label, path }) => {
          const isActive = location.pathname === path;
          return (
            <Link
              key={path}
              to={path}
              className={`flex flex-col items-center p-3 
                color-text-tertiary
                `}
            >
              {isActive ? Icon.selected : Icon.unselected}
              <span className="text-caption2r mt-1">{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;