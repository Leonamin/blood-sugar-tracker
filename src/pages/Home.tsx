import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import SolidButton from "@/components/ui/button/solid-button";
import { useState } from "react";
import IconAlertOctagon from "@/components/icons/IconAlertOctagon";

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
          <div className="inline-flex items-center gap-2">
            <SolidButton color="primary" size="40"
              prefixIcon={<IconAlertOctagon />}
              suffixIcon={<IconAlertOctagon />}

            >Primary Button</SolidButton>
          </div>
          <SolidButton color="secondary" size="40">Secondary Button</SolidButton>
          <SolidButton color="outline" size="40">Outline Button</SolidButton>
          <SolidButton color="error" size="40">Error Button</SolidButton>
          <SolidButton color="tertiary" size="40">Tertiary Button</SolidButton>
          <br></br>
          <SolidButton color="primary" size="40" disabled={true}>Primary Button</SolidButton>
          <SolidButton color="secondary" size="40" disabled={true}>Secondary Button</SolidButton>
          <SolidButton color="outline" size="40" disabled={true}>Outline Button</SolidButton>
          <SolidButton color="error" size="40" disabled={true}>Error Button</SolidButton>
          <SolidButton color="tertiary" size="40" disabled={true}>Tertiary Button</SolidButton>
        </div>
      </Card>
    </div>
  );
};

export default Home;