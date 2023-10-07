import { View, Text } from "react-native";
import { useState, useEffect } from "react";
import { AppButton, SoundManager } from "components";
import { formatTime } from "utils/common";
import CounterView from "./CounterView";

export default function Timer({
  minutes = 0,
  seconds = 0,
  setMinutes,
  setSeconds,
  setPlaying,
  sets,
  setSets,
  setIsRest,
  totalCounter,
  restCounter,
}) {
  const [isPaused, setIsPaused] = useState(false);
  const [playSound, setPlaySound] = useState(false);

  useEffect(() => {
    let timer;
    let _seconds = parseInt(seconds);
    let _minutes = parseInt(minutes);
    let _sets = parseInt(sets);

    if (!isPaused) {
      if (_minutes >= 0 || _seconds > 0) {
        timer = setInterval(() => {
          setPlaySound(false);
          if ((_minutes === 0 || isNaN(_minutes)) && _seconds <= 4) {
            setPlaySound(true);
          }

          if (_seconds > 0) {
            setSeconds((_seconds - 1).toString());
          } else if (_minutes >= 0) {
            setMinutes((_minutes - 1).toString());
            setSeconds(59);
          }
        }, 1000);
      } else if (_sets > 1) {
        // setSets((_sets - 1).toString());
        setIsRest(true);
        setPlaying(false);
      } else {
        restCounter();
      }
    }

    // Clear the timer when it reaches 0
    if (_minutes === 0 && _seconds === 0 && _sets === 1) {
      clearInterval(timer);
      restCounter();
    }

    return () => {
      clearInterval(timer);
    };
  }, [minutes, seconds, setMinutes, setSeconds, setPlaying, isPaused]);

  const handlePauseButton = () => {
    setIsPaused(!isPaused);
  };

  return (
    <View className="flex-1 py-7 px-5">
      <CounterView
        type="work"
        label={"Work"}
        sets={parseInt(totalCounter.sets) > 1 ? sets : 0}
        timestamp={formatTime(minutes, seconds)}
      />
      <View className="flex flex-row gap-x-2">
        <View className="!flex-1">
          <AppButton
            label="Stop"
            className="!bg-secondary-700"
            onPress={restCounter}
          />
        </View>
        <View className="!flex-1">
          <AppButton
            label={isPaused ? "Resume" : "Pause"}
            onPress={handlePauseButton}
          />
        </View>
      </View>
      <SoundManager
        soundFile={require("../../assets/sounds/beep-1.wav")}
        playSound={playSound}
      />
    </View>
  );
}
