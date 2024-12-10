import { useState } from "react";
import { Card } from "@/components/ui/card";
import { ToggleButton } from "@/components/ui/button/toggle-button";

const Home = () => {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(true);
  const [isChecked3, setIsChecked3] = useState(false);
  const [isChecked4, setIsChecked4] = useState(true);

  return (
    <div className="p-4 pb-20 animate-fade-in">
      <h1 className="text-2xl font-bold mb-6">Toggle Button Examples</h1>

      <Card className="p-6 space-y-4">
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium">Small Handle (16px):</span>
            <ToggleButton 
              checked={isChecked1}
              onCheckedChange={setIsChecked1}
              handleSize={16}
            />
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm font-medium">Large Handle (24px):</span>
            <ToggleButton 
              checked={isChecked2}
              onCheckedChange={setIsChecked2}
              handleSize={24}
            />
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm font-medium">Disabled (16px):</span>
            <ToggleButton 
              checked={isChecked3}
              onCheckedChange={setIsChecked3}
              handleSize={16}
              disabled
            />
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm font-medium">Disabled Checked (24px):</span>
            <ToggleButton 
              checked={isChecked4}
              onCheckedChange={setIsChecked4}
              handleSize={24}
              disabled
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Home;