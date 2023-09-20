import { View } from "react-native";
import { AppText, TimerField, AppButton } from "components";

function CreatePreset({
  setPlaying,
  minutes,
  setMinutes,
  seconds,
  setSeconds,
}) {
  const handleStartWork = () => {
    if (!minutes) {
      setMinutes("0");
    }
    setPlaying(true);
  };

  return (
    <View className="flex-1 py-7 px-5">
      <AppText className="font-Medium text-[32px] leading-9 text-grey-900 mb-10">
        Playground
      </AppText>
      <View className="flex-1">
        <View className="items-center justify-center">
          <AppText className="font-Medium text-grey-900 text-xl mb-6">
            Work
          </AppText>
          <TimerField
            minutes={minutes}
            setMinutes={setMinutes}
            seconds={seconds}
            setSeconds={setSeconds}
          />
        </View>
      </View>
      <View className="">
        <AppButton label="Start Work" onPress={handleStartWork} />
      </View>
    </View>
  );
}

export default CreatePreset;
