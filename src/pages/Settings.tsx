import { Card } from "@/1_components/ui/card";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { ToggleButton } from "@/1_components/ui/button/toggle-button";
import { useNavigate } from "react-router-dom";
import SolidButton from "@/1_components/ui/button/solid-button";

const Settings = () => {
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="p-4 pb-20 animate-fade-in">
      <h1 className="text-2xl font-bold mb-6">설정</h1>
      <Card className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sun className="h-4 w-4" />
            <span>다크 모드</span>
            <Moon className="h-4 w-4" />
          </div>
          <ToggleButton
            checked={theme === "dark"}
            onCheckedChange={toggleTheme}
            aria-label="Toggle dark mode"
          />
        </div>
      </Card>

      <Card className="p-6 mt-4">
        <SolidButton
          color="primary"
          size="40"
          onClick={() => navigate('/component-examples')}
          fullWidth
        >
          컴포넌트 예제 보기
        </SolidButton>
      </Card>
    </div>
  );
};

export default Settings;