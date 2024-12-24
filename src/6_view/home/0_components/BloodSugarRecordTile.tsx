import { BloodSugarModel } from "@/0_model/model/bloodSugarModel";
import { BloodSugarCategory } from "@/0_model/types/bloodSugarCategory";
import { GlucoseLevel } from "@/0_model/types/glucoseLevel";
import { IndicatorStep } from "@/0_model/types/indicatorStep";
import { unixTimestampToDate } from "@/0_model/types/unixtimestamp";
import { IconBlood, IconDotsHorizontal } from "@/1_components/icons";
import CircleStepIndicator from "@/1_components/ui/indicator/circle-step-indicator";
import Tag, { TagColorType } from "@/1_components/ui/tag/tag";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

interface BloodSugarRecordTileProps {
  bloodSugar: BloodSugarModel;
  bloodSugarCategory: BloodSugarCategory;
  onDelete?: () => void;
  onEdit?: () => void;
}

interface GlucoseLevelUiData {
  step: IndicatorStep;
  label: string;
  color: TagColorType;
}

const MemoTile = ({ memo }: { memo: string }) => {
  return <p className="text-body2r color-bg-primary 
    color-text-primary rounded-8 px-2 py-1">
    {memo}
  </p>
}

const BloodSugarRecordTile = (
  { bloodSugar, bloodSugarCategory, onDelete, onEdit }: BloodSugarRecordTileProps
) => {
  const { value, unit, recordedAt, memo } = bloodSugar;

  const formattedRecordedAt = format(unixTimestampToDate(recordedAt), 'HH:mm');

  const glucoseLevel = BloodSugarCategory.getGlucoseLevel(bloodSugarCategory, value);
  const step = GlucoseLevel.getIndicatorStep(glucoseLevel);
  const label = GlucoseLevel.getLabel(glucoseLevel);
  const color = GlucoseLevel.getColor(glucoseLevel);


  const handleMoreButtonClick = () => {
    console.log("more button clicked");
  }

  return <div
    className={cn(
      "flex items-start justify-between w-full",
      "color-bg-inverse rounded-24",
      "p-3 space-x-2"
    )}
  >
    <CircleStepIndicator step={step}>
      <IconBlood size={16} />
    </CircleStepIndicator>
    <div className="flex flex-1 flex-col space-y-1">
      <div className="flex items-start justify-between">
        <Tag
          label={label}
          color={color}
          size="small"
          variant="filled"
        />
        <button onClick={handleMoreButtonClick}>
          <IconDotsHorizontal size={24} />
        </button>
      </div>
      <span className="text-h4b color-text-primary text-left flex items-center">
        {value} <span className="text-body2r color-text-tertiary ml-1">{unit}</span>
      </span>
      {memo && <MemoTile memo={memo} />}
      <span className="text-caption1r color-text-tertiary">
        {formattedRecordedAt}
      </span>
    </div>
  </div>;
};

export default BloodSugarRecordTile;
