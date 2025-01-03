import BloodSugarModel from "@/0_model/model/bloodSugarModel";
import { BloodSugarCategory } from "@/0_model/types/bloodSugarCategory";
import { GlucoseLevel } from "@/0_model/types/glucoseLevel";
import { IndicatorStep } from "@/0_model/types/indicatorStep";
import { UnixTimestamp } from "@/0_model/types/unixtimestamp";
import { IconPlus } from "@/1_components/icons";
import TextButton from "@/1_components/ui/button/text-button";
import { MonthlyCalendar, MonthlyCalendarHeader, MonthlyCalendarProvider, MonthlyDayTileWithIndicator } from "@/1_components/ui/calendar/MonthlyCalendar";
import { useAppDispatch } from "@/3_hook/useAppDispatch";
import BloodSugarRecordTile from "@/6_view/home/0_components/BloodSugarRecordTile";
import { DateUtils } from "@/7_utils/dateUtils";
import { selectBloodSugarModelsAll, selectBloodSugarModelsByDate } from "@/8_store/bloodSugar/bloodSugarSelectors";
import { deleteBsRecordByUid } from "@/8_store/bloodSugar/bloodSugarSlice";
import { setSelectedDay, setFocusedDay } from "@/8_store/calendar/calendarSlice";
import { RootState } from "@/8_store/store";
import { cn } from "@/lib/utils";
import { useSelector } from "react-redux";

const Calendar = () => {
  const dispatch = useAppDispatch();
  const selectedDay = useSelector((state: RootState) => state.calendar.selectedDay);
  const focusedDay = useSelector((state: RootState) => state.calendar.focusedDay);

  const bloodSugars = useSelector((state: RootState) =>
    selectBloodSugarModelsAll(state)
  );

  const selectedDayBloodSugars = useSelector((state: RootState) =>
    selectBloodSugarModelsByDate(state, selectedDay)
  );

  // 로직

  function getBsRecord(date: Date): BloodSugarModel | null {
    const filteredRecords = bloodSugars.filter(record => DateUtils.isSameDay(
      UnixTimestamp.unixTimestampToDate(record.recordedAt),
      date
    ));

    if (filteredRecords.length === 0) {
      return null;
    }

    // 테스트

    const targetDate = UnixTimestamp.unixTimestampToDate(filteredRecords[0].recordedAt);

    const isSameDay = DateUtils.isSameDay(targetDate, date);

    console.log(date);
    console.log(targetDate);
    console.log(filteredRecords);
    console.log('두 날짜가 같음?',isSameDay);

    // 테스트 끝

    // 가장 마지막 기록 반환
    return filteredRecords.reduce((latest, current) =>
      current.recordedAt > latest.recordedAt ? current : latest
    );
  }

  function classifyBsIndicatorStep(record?: BloodSugarModel): IndicatorStep {
    if (!record) {
      return 0;
    }
    const level = BloodSugarCategory.getGlucoseLevel(BloodSugarCategory.Normal, record.value);
    const step = GlucoseLevel.getIndicatorStep(level);
    return step;
  }

  // UI 이벤트

  const changeSelectedDay = (day: Date) => {
    dispatch(setSelectedDay(day));
  }

  const changeFocusedDay = (day: Date) => {
    dispatch(setFocusedDay(day));
  }

  const handleDelete = (uid: string) => {
    dispatch(deleteBsRecordByUid(uid));
  }

  const handleEdit = (uid: string) => {
    // dispatch(editBsRecordByUid(uid));
  }

  const handleAdd = () => {
    // dispatch(addBsRecord());
  }

  return (
    <div className={cn(
      "flex flex-col",
      "items-center",
      "justify-start",
      "color-bg-primary",
      "min-h-screen",
      "overflow-y-auto",
      "bottom-nav-space"
    )}>
      <div
        className={cn(
          "w-full",
          "pb-4 rounded-b-24",
          "color-bg-inverse",
          "shadow-shadow4"
        )}
      >
        <MonthlyCalendarProvider
          selectedDay={selectedDay}
          focusedDay={focusedDay}
          setSelectedDay={changeSelectedDay}
          setFocusedDay={changeFocusedDay}
        >
          <MonthlyCalendarHeader className="p-4" />
          <MonthlyCalendar
            dayTileBuilder={
              (date: Date) =>
                <MonthlyDayTileWithIndicator
                  date={date}
                  dayTileRatioStyle="aspect-[1/1.2]"
                  // indicatorStep={1}
                  indicatorStep={classifyBsIndicatorStep(getBsRecord(date))}
                  hasMemo={false}
              />
            }
          />
        </MonthlyCalendarProvider>
      </div>
      <div className="w-full pt-6 px-4">
        <SectionBsRecordList
          bloodSugars={selectedDayBloodSugars}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          handleAdd={handleAdd}
        />
      </div>
    </div>
  );
};

const SectionBsRecordList = ({
  bloodSugars,
  handleDelete,
  handleEdit,
  handleAdd,
}: {
  bloodSugars: BloodSugarModel[];
  handleDelete: (uid: string) => void;
  handleEdit: (uid: string) => void;
  handleAdd: () => void;
}) => {

  const count = bloodSugars.length;

  const label = count > 0 ? `${count}개의 기록` : "기록 없음";

  return (
    <>
      {
        <div className="flex flex-col gap-2">
          <div className="flex flex-row justify-between">
            <span
              className="text-body1sb color-text-primary py-2">{label}</span>
            <TextButton
              label="기록 추가"
              size="24px"
              suffixIcon={<IconPlus />}
              onClick={() => {
                handleAdd();
              }}
            />
          </div>
          <ul>
            {bloodSugars.map((sugar) => (
              <li key={sugar.uid} className="pb-2">
                <BloodSugarRecordTile bloodSugar={sugar as BloodSugarModel}
                  bloodSugarCategory={BloodSugarCategory.Normal}
                  onDelete={() => {
                    handleDelete(sugar.uid);
                  }}
                  onEdit={() => {
                    handleEdit(sugar.uid);
                  }}
                />
              </li>
            ))}
          </ul>
        </div>
      }
    </>
  )
}

export default Calendar;
