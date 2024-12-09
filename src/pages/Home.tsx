import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import CustomButton from "@/components/ui/custom-button";
import { useState } from "react";

const Home = () => {
  const [bloodSugar, setBloodSugar] = useState("");

  return (
    <div className="p-4 pb-20 animate-fade-in">
      <h1 className="text-2xl font-bold mb-6">Blood Sugar Tracker</h1>
      
      <Card className="p-6 mb-6">
        <h2 className="text-lg font-semibold mb-4">Add New Reading</h2>
        <div className="space-y-4">
          <div>
            <label htmlFor="bloodSugar" className="block text-sm font-medium mb-2">
              Blood Sugar Level (mg/dL)
            </label>
            <Input
              id="bloodSugar"
              type="number"
              value={bloodSugar}
              onChange={(e) => setBloodSugar(e.target.value)}
              placeholder="Enter blood sugar level"
              className="w-full"
            />
          </div>
          <Button className="w-full">Save Reading</Button>
        </div>
      </Card>

      <Card className="p-6 space-y-4">
        <h2 className="text-lg font-semibold mb-4">Button Examples</h2>
        <div className="flex flex-col gap-4">
          <CustomButton color="primary" size="40">Primary Button</CustomButton>
          <CustomButton color="secondary" size="40">Secondary Button</CustomButton>
          <CustomButton color="outline" size="40">Outline Button</CustomButton>
          <CustomButton color="error" size="40">Error Button</CustomButton>
          <CustomButton color="tertiary" size="40">Tertiary Button</CustomButton>
        </div>
      </Card>
    </div>
  );
};

export default Home;