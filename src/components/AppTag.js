import { View, Text } from "react-native";

function AppTag({ label = "Status", type = "info", tagStyle }) {
  const tagBorderColor =
    type === "info"
      ? "border-primary-700"
      : type === "active"
      ? "border-primary-700"
      : type === "success" ||
        type === "completed" ||
        type === "accepted" ||
        type === "inprocess" ||
        type === "PAID"
      ? "border-success"
      : type === "error" || type === "canceled" || type === "UNPAID"
      ? "border-error"
      : "border-primary-700";

  const textColor =
    type === "info"
      ? "text-primary-700"
      : type === "active"
      ? "text-primary-700"
      : type === "success" ||
        type === "completed" ||
        type === "accepted" ||
        type === "inprocess" ||
        type === "PAID"
      ? "text-success"
      : type === "error" || type === "canceled" || type === "UNPAID"
      ? "text-error"
      : "text-primary-700";

  return (
    <View
      className={`py-[6px] px-[10px] rounded-[6px] flex justify-center items-center bg-transparent border-solid border-[1px] ${tagStyle} ${tagBorderColor}`}
    >
      <Text className={`font-SemiBold text-[13px] leading-[15px] ${textColor}`}>
        {label}
      </Text>
    </View>
  );
}

export default AppTag;
