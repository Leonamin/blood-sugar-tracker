import { IconChevronLeft } from "@/1_components/icons"
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

interface AppBarProps {
  title: string;
  className?: string;
}

const AppBar = ({ title, className }: AppBarProps) => {
  const navigate = useNavigate();

  return (
    <div className={cn("flex justify-between items-center space-x-4 min-h-[56px]", 
      "absolute top-0 left-0 right-0",
    className)}>
      <button
        className="p-4"
        onClick={() => navigate(-1)}>
        <IconChevronLeft size={24} />
      </button>
      <div className="flex-1">
        <h1 className="text-body1sb text-center">{title}</h1>
      </div>
      {/* 56px placeholder */}
      <div className="w-[56px]"></div>
    </div>
  )
}

export default AppBar;