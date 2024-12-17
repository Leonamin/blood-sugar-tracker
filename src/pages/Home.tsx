import { useState } from "react";
import { Card } from "@/components/ui/card";
import { ToggleButton } from "@/components/ui/button/toggle-button";
import Chip from "@/components/ui/chip/chip";
import { IconChevronRight, IconChevronLeft, IconPlus, } from "@/components/icons";
import SolidButton from "@/components/ui/button/solid-button";
import Tag from "@/components/ui/tag/tag";
import { CheckBox } from "@/components/ui/button/check-box";
import TextButton from "@/components/ui/button/text-button";
import MultilineTextForm from "@/components/ui/form/multiline-text-form";
import GraphicIconDanger from "@/components/graphic-icons/GraphicIconDanger";
import GraphicIconInfo from "@/components/graphic-icons/GraphicIconInfo";
import GraphicIconSuccess from "@/components/graphic-icons/GraphicIconSuccess";
import GraphicIconWarning from "@/components/graphic-icons/GraphicIconWarning";
import CircleStepIndicator from "@/components/ui/indicator/circle-step-indicator";
import SemiCircleStepIndicator from "@/components/ui/indicator/semi-circle-step-indicator";
import Snackbar from "@/components/ui/overlay/snackbar/snackbar";
import Dialog, { DialogProvider, useDialog } from "@/components/ui/overlay/dialog/dialog";

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

  const [value, setValue] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleConfirm = () => {
    console.log('confirmed!');
  };

  // chip
  return (
    <div className="p-4 pb-20 animate-fade-in">

      <h1 className="text-2xl font-bold mb-6">Snackbar Examples</h1>
      <Card className="p-6 space-y-4">
        <div className="flex flex-col items-center gap-4">
          <Snackbar type="success" message="성공" description="성공 메시지" />
          <Snackbar type="warning" message="경고" description="경고 메시지" />
          <Snackbar type="error" message="에러" description="에러 메시지" />
          <Snackbar type="info" message="정보" description="정보 메시지" />
        </div>
      </Card>


      <h1 className="text-2xl font-bold mb-6">Semi Circle Step Indicator Examples</h1>
      <Card className="p-6 space-y-4">
        <div className="flex flex-col items-center gap-4">
          <SemiCircleStepIndicator step={1} />
          <SemiCircleStepIndicator step={2} />
          <SemiCircleStepIndicator step={3} />
          <SemiCircleStepIndicator step={4} />
        </div>
      </Card>

      <h1 className="text-2xl font-bold mb-6">Circle Step Indicator Examples</h1>
      <Card className="p-6 space-y-4">
        <div className="flex items-center gap-4">
          <CircleStepIndicator step={1} />
          <CircleStepIndicator step={2} />
          <CircleStepIndicator step={3} />
          <CircleStepIndicator step={4} />
        </div>
      </Card>

      <h1 className="text-2xl font-bold mb-6">Graphic Icon Examples</h1>
      <Card className="p-6 space-y-4">
        <div className="flex items-center gap-4">
          <GraphicIconInfo />
          <GraphicIconSuccess />
          <GraphicIconWarning />
          <GraphicIconDanger />
        </div>
      </Card>

      <h1 className="text-2xl font-bold mb-6">Multiline Text Form Examples</h1>
      <Card className="p-6 space-y-4">
        <MultilineTextForm
          value={value}
          handleChange={setValue}
          placeholder="입력해주세요"
          validator={(value) => value.length > 10}
          minLines={3}
          maxLines={5}
          errorMessage="에러 메시지"
        />
      </Card>

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

      <h1 className="text-2xl font-bold mb-6">Dialog Examples</h1>
      <Card className="p-6 space-y-4">
        <DialogProvider onConfirm={handleConfirm}>
          <DialogExample1 />
        </DialogProvider>
        <DialogProvider onConfirm={handleConfirm}>
          <DialogExample2 />
        </DialogProvider>
      </Card>
    </div>
  );
};

const DialogExample1 = () => {
  const { open } = useDialog();

  return (
    <div className="flex flex-col items-center gap-4">
      <SolidButton
        color="primary"
        size="40"
        onClick={open}
      >
        다이얼로그 열기(가로 배치)
      </SolidButton>

      <Dialog
        title="타이틀"
        description="설명 텍스트가 들어갑니다"
        className="max-w-[320px]"
      >
        <div className="flex flex-row w-full gap-2">
          <Dialog.Button label="취소" className="w-full" />
          <Dialog.Button label="확인" color="primary" className="w-full" 
            onClick={() => {
              alert('확인');
            }}
          />
        </div>
      </Dialog>
    </div>
  );
};

const DialogExample2 = () => {
  const { open } = useDialog();

  return (
    <div className="flex flex-col items-center gap-4">
      <SolidButton
        color="primary"
        size="40"
        onClick={open}
      >
        다이얼로그 열기(세로 배치)
      </SolidButton>

      <Dialog
        title="타이틀"
        description="설명 텍스트가 들어갑니다"
        className="max-w-[320px]"
      >
        <div className="flex flex-col gap-2">
          <Dialog.Button label="확인" color="primary" className="w-full" 
            onClick={() => {
              alert('확인');
            }}
          />
          <Dialog.Button label="취소" className="w-full" />
        </div>
      </Dialog>
    </div>
  );
};

export default Home;