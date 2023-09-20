import { TouchableHighlight } from "react-native";
import AppText from "../AppText";
import colors from "style/colors";

function PickerWithSearchItem({ item, onPress }) {
  if (!item) {
    return null;
  }
  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor={colors.grey[50]}
      onPress={onPress}
      className="px-5 py-[14px] mb-1"
    >
      <AppText className="text-[18px] leading-[26px]">{item?.name}</AppText>
    </TouchableHighlight>
  );
}

export default PickerWithSearchItem;
