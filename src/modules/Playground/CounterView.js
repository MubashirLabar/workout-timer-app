import { View, Text } from "react-native";

export default function CounterView({ sets = 0, timestamp, type, label }) {
  return (
    <View className="flex-1 flex items-center justify-center">
      {sets ? (
        <Text className="font-Medium text-grey-900 text-5xl mb-8">{sets}</Text>
      ) : null}
      <Text className="font-Medium text-grey-900 text-8xl mb-3">
        {timestamp}
      </Text>
      <Text
        className={`font-Medium text-5xl uppercase ${
          type === "work"
            ? "text-primary-700"
            : type === "rest"
            ? "text-green-700"
            : type === "prepare"
            ? "text-secondary-700"
            : "text-grey-900"
        }`}
      >
        {label}
      </Text>
    </View>
  );
}
