import { useState } from "react";
import { Card } from "@/components/ui/card";
import { ToggleButton } from "@/components/ui/button/toggle-button";
import Chip from "@/components/ui/chip/chip";
import { IconBell } from "@/components/icons";

const Home = () => {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(true);
  const [isChecked3, setIsChecked3] = useState(false);
  const [isChecked4, setIsChecked4] = useState(true);
  const [isChecked5, setIsChecked5] = useState(false);
  const [isChecked6, setIsChecked6] = useState(true);

  // chip
  const [isChecked7, setIsChecked7] = useState(false);
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
              handleSizeType="small"
            />
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm font-medium">Medium Handle (20px):</span>
            <ToggleButton
              checked={isChecked5}
              onCheckedChange={setIsChecked5}
              handleSizeType="medium"
            />
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm font-medium">Large Handle (24px):</span>
            <ToggleButton
              checked={isChecked2}
              onCheckedChange={setIsChecked2}
              handleSizeType="large"
            />
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm font-medium">Disabled (16px):</span>
            <ToggleButton
              checked={isChecked3}
              onCheckedChange={setIsChecked3}
              handleSizeType="small"
              disabled
            />
          </div>


          <div className="flex items-center gap-4">
            <span className="text-sm font-medium">Disabled Checked (24px):</span>
            <ToggleButton
              checked={isChecked6}
              onCheckedChange={setIsChecked6}
              handleSizeType="medium"
              disabled
            />
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm font-medium">Disabled Checked (24px):</span>
            <ToggleButton
              checked={isChecked4}
              onCheckedChange={setIsChecked4}
              handleSizeType="large"
              disabled
            />
          </div>


        </div>
      </Card>

      <h1 className="text-2xl font-bold mt-6">Chip Examples</h1>

      <Card className="p-6 space-y-4">
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium">Chip (brand):</span>
          <Chip
            label="라벨"
            prefixIcon={<IconBell />}
            size="small"
            variant="brand"
            checked={isChecked7}
            onCheckedChange={setIsChecked7}
          />
          <Chip
            label="라벨"
            prefixIcon={<IconBell />}
            size="medium"
            variant="brand"
            checked={isChecked7}
            onCheckedChange={setIsChecked7}
          />
          <Chip
            label="라벨"
            prefixIcon={<IconBell />}
            size="large"
            variant="brand"
            checked={isChecked7}
            onCheckedChange={setIsChecked7}
          />
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium">Chip (brand-light):</span>
          <Chip
            label="라벨"
            prefixIcon={<IconBell />}
            size="small"
            variant="brand-light"
            checked={isChecked7}
            onCheckedChange={setIsChecked7}
          />
        </div>
      </Card>
    </div>
  );
};

export default Home;