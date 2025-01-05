import BloodSugarModel from "@/0_model/model/bloodSugarModel";
import { BloodSugarCategory, BloodSugarCategoryUtils } from "@/0_model/types/bloodSugarCategory";
import { GlucoseLevel, GlucoseLevelUtils } from "@/0_model/types/glucoseLevel";
import { IconBlood, IconDotsHorizontal } from "@/1_components/icons";
import { DropdownData, DropdownList, DropdownProvider, IconDropdown } from "@/1_components/ui/dropdown/dropdown";
import CircleStepIndicator from "@/1_components/ui/indicator/circle-step-indicator";
import Tag from "@/1_components/ui/tag/tag";
import DateUtils from "@/7_utils/dateUtils";
import { cn } from "@/lib/utils";

interface BloodSugarRecordTileProps {
  bloodSugar: BloodSugarModel;
  onDelete?: () => void;
  onEdit?: () => void;
}

const MemoTile = ({ memo }: { memo: string }) => {
  return <p className="text-body2r color-bg-primary 
    color-text-primary rounded-8 px-2 py-1">
    {memo}
  </p>
}

const BloodSugarRecordTile = (
  { bloodSugar, onDelete, onEdit }: BloodSugarRecordTileProps
) => {
  const { value, unit, recordedAt, memo } = bloodSugar;

  const formattedRecordedAt = DateUtils.toFormattedHM(recordedAt);

  const glucoseLevel = BloodSugarCategoryUtils.getGlucoseLevel(bloodSugar.category, bloodSugar.value);
  const step = GlucoseLevelUtils.getIndicatorStep(glucoseLevel);
  const label = GlucoseLevelUtils.getLabel(glucoseLevel);
  const color = GlucoseLevelUtils.getColor(glucoseLevel);

  const categoryLabel = BloodSugarCategoryUtils.getLabel(bloodSugar.category);

  const dropdownData: DropdownData[] = [
    { label: "삭제", value: "delete" },
    { label: "수정", value: "edit" },
  ];

  const handleSelect = (data: DropdownData) => {
    if (data.value === "delete") {
      onDelete?.();
    } else if (data.value === "edit") {
      onEdit?.();
    }
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
        <DropdownProvider
          data={dropdownData}
          selectedData={null}
          onSelect={handleSelect}
        >
          <IconDropdown icon={<IconDotsHorizontal size={24} />} />
          <DropdownList
            data={dropdownData}
          />
        </DropdownProvider>
      </div>
      <span className="text-h4b color-text-primary text-left flex items-center">
        {value} <span className="text-body2r color-text-tertiary ml-1">{unit}</span>
      </span>
      {memo && <MemoTile memo={memo} />}
      <span className="text-caption1r color-text-tertiary">
        {formattedRecordedAt} · {categoryLabel}
      </span>
    </div>
  </div>;
};

export default BloodSugarRecordTile;
