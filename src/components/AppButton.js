import { Text, TouchableOpacity, ActivityIndicator } from "react-native";

const AppButton = ({
  label = "Button",
  isLoading,
  type = "primary",
  className,
  labelStyle,
  ...rest
}) => {
  const _style =
    type === "transparent"
      ? "bg-transparent border-0"
      : type === "hole"
      ? "bg-transparent"
      : "bg-primary-700";

  const _textStyle =
    type === "transparent"
      ? "text-black-700"
      : type === "hole"
      ? "text-primary-700"
      : "";

  return (
    <TouchableOpacity
      className={`w-full h-[58px] flex flex-row items-center justify-center py-[10px] border-[1px] border-primary-700 rounded-[16px] ${_style} ${className}`}
      disabled={isLoading}
      {...rest}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color="white" />
      ) : (
        <Text
          className={`font-SemiBold text-service-700 text-[16px] leading-[19px] tracking-[-0.24px] ${_textStyle} ${labelStyle}`}
        >
          {label}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default AppButton;
