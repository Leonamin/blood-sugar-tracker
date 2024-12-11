import { useState } from "react";
import { Card } from "@/components/ui/card";
import { ToggleButton } from "@/components/ui/button/toggle-button";
import Chip from "@/components/ui/chip/chip";
import { IconChevronRight, IconChevronLeft, IconPlus,  } from "@/components/icons";
import SolidButton from "@/components/ui/button/solid-button";
import Tag from "@/components/ui/tag/tag";
import { CheckBox } from "@/components/ui/button/check-box";
import TextButton from "@/components/ui/button/text-button";

const Home = () => {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(true);
  const [isChecked3, setIsChecked3] = useState(false);
  const [isChecked4, setIsChecked4] = useState(true);
  const [isChecked5, setIsChecked5] = useState(false);
  const [isChecked6, setIsChecked6] = useState(true);

  const [isChecked7, setIsChecked7] = useState(false);
  const [isChecked8, setIsChecked8] = useState(true);
  const [isChecked9, setIsChecked9] = useState(false);
  const [isChecked10, setIsChecked10] = useState(true);

  // chip
  return (
    <div className="p-4 pb-20 animate-fade-in">
      <h1 className="text-2xl font-bold mb-6">Text Button Examples</h1>
      <Card className="p-6 space-y-4">
        <div className="flex items-center gap-4">
          <TextButton
            label="버튼"
            prefixIcon={<IconChevronLeft />}
            suffixIcon={<IconChevronRight />}
            size="22px"
            onClick={() => {
              alert('clicked');
            }}
          />
          <TextButton
            label="버튼"
            prefixIcon={<IconChevronLeft />}
            suffixIcon={<IconChevronRight />}
            size="24px"
          />
          <TextButton
            label="버튼"
            prefixIcon={<IconChevronLeft />}
            suffixIcon={<IconChevronRight />}
            size="24px"
            isUnderline
          />
          <TextButton
            label="버튼"
            prefixIcon={<IconChevronLeft />}
            suffixIcon={<IconChevronRight />}
            size="26px"
          />
          <TextButton
            label="버튼"
            prefixIcon={<IconChevronLeft />}
            suffixIcon={<IconChevronRight />}
            size="26px"
            isDisabled
          />
        </div>
      </Card>
      <h1 className="text-2xl font-bold mb-6">CheckBox Examples</h1>
      <Card className="p-6 space-y-4">
        <div className="flex items-center gap-4">
          <CheckBox
            checked={isChecked8}
            onChanged={setIsChecked8}
            size="small"
          />
          <CheckBox
            checked={isChecked9}
            onChanged={setIsChecked9}
            size="medium"
          />
        </div>
      </Card>

      <h1 className="text-2xl font-bold mb-6">Solid Button Examples</h1>

      <Card className="p-6 space-y-4">
        <div className="flex items-center gap-4">
          <div className="inline-flex">
            <SolidButton
              color="primary"
              size="40"
              prefixIcon={<IconPlus />} 
            >버튼</SolidButton>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="inline-flex">
            <SolidButton
              color="secondary"
              size="40"
              prefixIcon={<IconPlus />} 
            >버튼</SolidButton>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="inline-flex">
            <SolidButton
              color="outline"
              size="40"
              prefixIcon={<IconPlus />} 
            >버튼</SolidButton>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="inline-flex">
            <SolidButton
              color="error"
              size="40"
              prefixIcon={<IconPlus />} 
            >버튼</SolidButton>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="inline-flex">
            <SolidButton
              color="tertiary"
              size="40"
              prefixIcon={<IconPlus />} 
            >버튼</SolidButton>
          </div>
        </div>
      </Card>


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
            prefixIcon={<IconPlus />}
            size="small"
            variant="brand"
            checked={isChecked7}
            onCheckedChange={setIsChecked7}
          />
          <Chip
            label="라벨"
            prefixIcon={<IconPlus />}
            size="medium"
            variant="brand"
            checked={isChecked7}
            onCheckedChange={setIsChecked7}
          />
          <Chip
            label="라벨"
            prefixIcon={<IconPlus />}
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
            prefixIcon={<IconPlus />}
            size="small"
            variant="brand-light"
            checked={isChecked7}
            onCheckedChange={setIsChecked7}
          />

          <div
            className="bg-indigo-50 hover:bg-indigo-100 cursor-pointer"
            style={{
              width: '100px',
              height: '100px',
            }}
          >

          </div>
        </div>

      </Card>

      <h1 className="text-2xl font-bold mt-6">Tag Examples</h1>

      <Card className="p-6 space-y-4">
        <div className="flex flex-col items-center gap-4">

          <Tag label="라벨"
            color="error"
          />
          <Tag label="라벨"
            prefixIcon={<IconPlus />}
            suffixIcon={<IconPlus />}
            color="error"
            variant="filled"
          />
          <Tag label="라벨"
            prefixIcon={<IconPlus />}
            suffixIcon={<IconPlus />}
            color="error"
            variant="solid"
          />
          <br />
          <Tag label="라벨"
            color="success"
          />
          <Tag label="라벨"
            prefixIcon={<IconPlus />}
            suffixIcon={<IconPlus />}
            color="success"
            variant="filled"
          />
          <Tag label="라벨"
            prefixIcon={<IconPlus />}
            suffixIcon={<IconPlus />}
            color="success"
            variant="solid"
          />
          <br />
          <Tag label="라벨"
            color="warning"
          />
          <Tag label="라벨"
            prefixIcon={<IconPlus />}
            suffixIcon={<IconPlus />}
            color="warning"
            variant="filled"
          />
          <Tag label="라벨"
            prefixIcon={<IconPlus />}
            suffixIcon={<IconPlus />}
            color="warning"
            variant="solid"
          />
          <br />
          <Tag label="라벨"
            color="info"
          />
          <Tag label="라벨"
            prefixIcon={<IconPlus />}
            suffixIcon={<IconPlus />}
            color="info"
            variant="filled"
          />
          <Tag label="라벨"
            prefixIcon={<IconPlus />}
            suffixIcon={<IconPlus />}
            color="info"
            variant="solid"
          />
          <br />
          <Tag label="라벨"
            color="black"
          />
          <Tag label="라벨"
            prefixIcon={<IconPlus />}
            suffixIcon={<IconPlus />}
            color="black"
            variant="filled"
          />
          <Tag label="라벨"
            prefixIcon={<IconPlus />}
            suffixIcon={<IconPlus />}
            color="black"
            variant="solid"
          />
          <br />
          <Tag label="라벨"
            color="orange"
          />
          <Tag label="라벨"
            prefixIcon={<IconPlus />}
            suffixIcon={<IconPlus />}
            color="orange"
            variant="filled"
          />
          <Tag label="라벨"
            prefixIcon={<IconPlus />}
            suffixIcon={<IconPlus />}
            color="orange"
            variant="solid"
          />

        </div>
      </Card>
    </div>
  );
};

export default Home;