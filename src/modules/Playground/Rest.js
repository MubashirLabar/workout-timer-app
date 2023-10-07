import { View, Text } from "react-native";
import { useState, useEffect } from "react";
import { formatTime } from "utils/common";
import { SoundManager } from "components";
import CounterView from "./CounterView";

function Rest({
  seconds,
  setSeconds,
  minutes,
  setMinutes,
  restartCounter,
  totalCounter,
  sets,
  setSets,
}) {
  const [playSound, setPlaySound] = useState(false);

  useEffect(() => {
    let timer;
    let _seconds = parseInt(seconds);
    let _minutes = parseInt(minutes);
    let _sets = parseInt(sets);

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
    }

    // Clear the timer when it reaches 0
    if ((_minutes < 0 || isNaN(_minutes)) && _seconds === 0) {
      setSets((_sets - 1).toString());
      clearInterval(timer);
      restartCounter();
    }

    return () => {
      clearInterval(timer);
    };
  }, [minutes, seconds, setMinutes, setSeconds]);

  return (
    <View className="flex-1 py-7 px-5">
      <CounterView
        label="Rest"
        type="rest"
        sets={parseInt(totalCounter.sets) > 1 ? sets : 0}
        timestamp={formatTime(minutes, seconds)}
      />
      <SoundManager
        soundFile={require("../../assets/sounds/beep-1.wav")}
        playSound={playSound}
      />
    </View>
  );
}

export default Rest;
