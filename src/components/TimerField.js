import { View, TextInput } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { AppText, Touchable } from "components";
import colors from "../style/colors";

export default function TimerField({
  minutes,
  setMinutes,
  seconds,
  setSeconds,
}) {
  const handleAddButton = () => {
    if (parseInt(seconds || 0) === 59) {
      setMinutes((parseInt(minutes || 0) + 1).toString().padStart(2, "0"));
      setSeconds("");
    } else {
      setSeconds((parseInt(seconds || 0) + 1).toString().padStart(2, "0"));
    }
  };

  const handleMinusButton = () => {
    if (!seconds && !minutes) {
      setSeconds("");
      setMinutes("");
    } else if (parseInt(seconds || 0) > 0) {
      setSeconds((parseInt(seconds || 0) - 1).toString().padStart(2, "0"));
    } else if (
      minutes &&
      parseInt(minutes || 0) > 0 &&
      parseInt(seconds || 0) <= 0
    ) {
      setSeconds("59");
      setMinutes((parseInt(minutes || 0) - 1).toString().padStart(2, "0"));
    }
  };

  const handleMinutesChange = (text) => {
    const sanitizedText = text.replace(/[^0-9]/g, "");
    setMinutes(sanitizedText);
  };

  const handleSecondsChange = (text) => {
    const sanitizedText = text.replace(/[^0-9]/g, "");
    setSeconds(sanitizedText);
  };

  return (
    <View className="w-full flex flex-row items-center">
      <Touchable
        className="h-10 w-10 items-center justify-center border-solid border-[1px] border-black-700 rounded-full"
        onPress={handleMinusButton}
      >
        <Icon name="minus" size={24} color={colors.black[700]} />
      </Touchable>
      <View className="flex-1 flex-row justify-center items-center">
        <TextInput
          keyboardType="numeric"
          placeholder="00"
          placeholderTextColor={colors.grey[900]}
          maxLength={2}
          onChangeText={handleMinutesChange}
          value={minutes}
          className="font-Medium text-grey-900 text-[32px] leading-9 tracking-[1px] h-[48px] w-[52px] text-center border-b-solid border-b-[1px] border-grey-400"
        />
        <AppText className="font-Bold h-[40px] text-3xl text-grey-900 mx-2.5">
          :
        </AppText>
        <TextInput
          keyboardType="numeric"
          placeholder="00"
          placeholderTextColor={colors.grey[900]}
          maxLength={2}
          onChangeText={handleSecondsChange}
          value={seconds}
          className="font-Medium text-grey-900 text-[32px] leading-9 tracking-[1px] h-[48px] w-[52px] text-center border-b-solid border-b-[1px] border-grey-400"
        />
      </View>

      <Touchable
        className="h-10 w-10 items-center justify-center border-solid border-[1px] border-black-700 rounded-full"
        onPress={handleAddButton}
      >
        <Icon name="plus" size={24} color={colors.black[700]} />
      </Touchable>
    </View>
  );
}
