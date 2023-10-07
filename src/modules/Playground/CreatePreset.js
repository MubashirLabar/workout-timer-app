import { ScrollView, View } from "react-native";
import { AppText, TimerField, CounterField, AppButton } from "components";
import Toast from "react-native-toast-message";

function CreatePreset({
  minutes,
  setMinutes,
  seconds,
  setSeconds,
  setPreparing,
  sets,
  setSets,
  restSeconds,
  setRestSeconds,
  restMinutes,
  setRestMinutes,
  totalCounter,
  setTotalCounter,
}) {
  const labelStyle = "font-Medium text-grey-900 text-xl mb-3.5";

  const handleStartWork = () => {
    if (!minutes) {
      if (!seconds) {
        Toast.show({
          type: "error",
          text1: `Please enter your work time`,
        });
        return;
      }
    }
    if (!minutes) {
      setMinutes("0");
    }
    setPreparing(true);
    setTotalCounter({
      ...totalCounter,
      minutes: minutes,
      seconds: seconds,
      restSeconds: restSeconds,
      restMinutes: restMinutes,
      sets: sets,
    });
  };

  return (
    <View className="flex-1 px-5">
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <AppText className="font-Medium text-[36px] leading-10 text-grey-900 pt-7 mb-[42px]">
          Playground
        </AppText>
        <View className="flex-1 gap-y-12">
          <View className="items-center justify-center">
            <AppText className={labelStyle}>SET</AppText>
            <CounterField
              minutes={minutes}
              setMinutes={setMinutes}
              seconds={seconds}
              setSeconds={setSeconds}
              sets={sets}
              setSets={setSets}
            />
          </View>
          <View className="items-center justify-center">
            <AppText className={labelStyle}>WORK</AppText>
            <TimerField
              minutes={minutes}
              setMinutes={setMinutes}
              seconds={seconds}
              setSeconds={setSeconds}
            />
          </View>
          <View className="items-center justify-center">
            <AppText className={labelStyle}>REST</AppText>
            <TimerField
              minutes={restMinutes}
              setMinutes={setRestMinutes}
              seconds={restSeconds}
              setSeconds={setRestSeconds}
            />
          </View>
        </View>
      </ScrollView>

      <View className="w-full h-[80px] bg-white">
        <AppButton label="Start Work" onPress={handleStartWork} />
      </View>
    </View>
  );
}

export default CreatePreset;
