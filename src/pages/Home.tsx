import { useState } from "react";
import { Card } from "@/components/ui/card";
import { ToggleButton } from "@/components/ui/button/toggle-button";

const Home = () => {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(true);

  return (
    <div className="p-4 pb-20 animate-fade-in">
      <h1 className="text-2xl font-bold mb-6">Toggle Button Examples</h1>

      <Card className="p-6 space-y-4">
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium">Unchecked Toggle:</span>
            <ToggleButton 
              checked={isChecked1}
              onCheckedChange={setIsChecked1}
            />
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm font-medium">Checked Toggle:</span>
            <ToggleButton 
              checked={isChecked2}
              onCheckedChange={setIsChecked2}
            />
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm font-medium">Disabled Toggle:</span>
            <ToggleButton disabled />
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm font-medium">Disabled Checked Toggle:</span>
            <ToggleButton checked disabled />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Home;