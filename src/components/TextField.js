import { TextInput } from "react-native";
import colors from "style/colors";

function TextField({ className, ...rest }) {
  return (
    <TextInput
      className={`w-full h-[50px] px-[24px] border-[1px] border-grey-400 rounded-[16px] font-Regular text-[16px] text-black-700 tracking-[-0.24px] leading-[18px] ${className}`}
      underlineColorAndroid="transparent"
      // placeholderTextColor={colors.grey[700]}
      includeFontPadding={false}
      autoCapitalize="none"
      autoCorrect={false}
      {...rest}
    />
  );
}

export default TextField;
