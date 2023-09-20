import { View, Text } from "react-native";
import { useState, useEffect } from "react";
import { AppButton } from "components";

export default function Timer({
  minutes = 0,
  seconds = 0,
  setMinutes,
  setSeconds,
  setPlaying,
}) {
  // Function to format the timer value as "MM:SS"
  const formatTime = (minutes, seconds) => {
    const formattedMinutes = minutes.toString().padStart(2, "0");
    const formattedSeconds = seconds.toString().padStart(2, "0");
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  useEffect(() => {
    let timer;
    let _seconds = parseInt(seconds);
    let _minutes = parseInt(minutes);
    if (_minutes > 0 || _seconds > 0) {
      timer = setInterval(() => {
        if (_seconds > 0) {
          setSeconds(_seconds - 1);
        } else if (_minutes > 0) {
          setMinutes(_minutes - 1);
          setSeconds(59);
        }
      }, 1000);
    }

    // Clear the timer when it reaches 0
    if (_minutes === 0 && _seconds === 0) {
      clearInterval(timer);
      setPlaying(false);
      setMinutes("");
      setSeconds("");
    }

    // Cleanup the timer when the component unmounts
    return () => clearInterval(timer);
  }, [minutes, seconds]);

  const handleStopButton = () => {
    setPlaying(false);
  };

  return (
    <View className="flex-1 py-7 px-5">
      <View className="flex-1 flex items-center justify-center">
        <Text className="font-Medium text-grey-900 text-8xl mb-3">
          {formatTime(minutes, seconds)}
        </Text>
        <Text className="font-Regular text-gray-300 text-5xl">Work</Text>
      </View>
      <View className="flex flex-row gap-x-2">
        <View className="!flex-1">
          <AppButton
            label="Stop"
            className="!bg-secondary-700"
            onPress={handleStopButton}
          />
        </View>
        <View className="!flex-1">
          <AppButton label="Pause" />
        </View>
      </View>
    </View>
  );
}
