import { View, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/Feather";

const AppCheckbox = ({ checked, onPress, label = "", style = "" }) => {
  return (
    <TouchableOpacity className={`flex flex-row ${style}`} onPress={onPress}>
      <View
        className={`h-6 w-6 rounded-full border-solid border-[2px] border-primary-700 flex items-center justify-center relative ${
          checked ? "bg-primary-700" : ""
        }`}
      >
        {checked && <Icon name="check" size={18} color="#fff" />}
      </View>
      {label && (
        <Text className="pl-3 text-[16px] text-black-700 leading-[21px]">
          {label}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default AppCheckbox;
