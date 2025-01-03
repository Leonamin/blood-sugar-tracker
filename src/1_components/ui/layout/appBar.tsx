import { IconChevronLeft } from "@/1_components/icons"
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

interface AppBarProps {
  title: string;
  className?: string;
  actions?: React.ReactNode;
}

const AppBar = ({ title, className, actions }: AppBarProps) => {
  const navigate = useNavigate();

  return (
    <div className={cn("flex items-center min-h-[56px] relative",
      "absolute top-0 left-0 right-0",
      className)}>
      {/* back button container */}
      <div className="absolute left-0">
        <button
          className="p-4"
          onClick={() => navigate(-1)}>
          <IconChevronLeft size={24} />
        </button>
      </div>

      {/* title - centered regardless of other elements */}
      <div className="flex-1 flex justify-center">
        <h1 className="text-body1sb">{title}</h1>
      </div>

      {/* actions container */}
      <div className="absolute right-0">
        {actions}
      </div>
    </div>
  )
}

export default AppBar;