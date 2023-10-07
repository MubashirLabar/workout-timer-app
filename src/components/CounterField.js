import { View, TextInput } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import Touchable from "./Touchable";
import colors from "../style/colors";

export default function CounterField({ sets, setSets }) {
  const handleAddButton = () => {
    setSets((parseInt(sets || 0) + 1).toString());
  };

  const handleMinusButton = () => {
    setSets((parseInt(sets || 0) - 1).toString());
  };

  const handleSetChange = (value) => {
    setSets(value);
  };

  return (
    <View className="w-full flex flex-row items-center">
      <Touchable
        className="h-11 w-11 items-center justify-center border-solid border-[1px] border-black-700 rounded-full"
        disabled={parseInt(sets) <= 1}
        onPress={handleMinusButton}
      >
        <Icon name="minus" size={26} color={colors.black[700]} />
      </Touchable>
      <View className="flex-1 flex-row justify-center items-center">
        <TextInput
          keyboardType="numeric"
          placeholder="00"
          placeholderTextColor={colors.grey[900]}
          maxLength={2}
          onChangeText={handleSetChange}
          value={sets}
          className="font-Medium text-grey-900 text-[32px] leading-9 tracking-[1px] h-[48px] w-[52px] text-center border-b-solid border-b-[1px] border-grey-400"
        />
      </View>

      <Touchable
        className="h-11 w-11 items-center justify-center border-solid border-[1px] border-black-700 rounded-full"
        onPress={handleAddButton}
      >
        <Icon name="plus" size={26} color={colors.black[700]} />
      </Touchable>
    </View>
  );
}
