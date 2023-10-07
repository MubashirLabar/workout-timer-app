import { View, Text } from "react-native";
import { useState, useEffect } from "react";
import { formatTime } from "utils/common";
import { SoundManager } from "components";
import { PREPARE } from "../../config/environment";
import CounterView from "./CounterView";

export default function Prepare({ setPreparing, setPlaying }) {
  const [minutes, setMinutes] = useState("0");
  const [seconds, setSeconds] = useState(PREPARE);

  useEffect(() => {
    let timer;
    let _seconds = parseInt(seconds);
    let _minutes = parseInt(minutes);
    let currentTime = 0;

    if (_minutes > 0 || _seconds > 0) {
      timer = setInterval(() => {
        if (_seconds > 0) {
          setSeconds((_seconds - 1).toString());
        } else if (_minutes > 0) {
          setMinutes((_minutes - 1).toString());
          setSeconds(59);
        }
      }, 1000);
    }

    // Clear the timer when it reaches 0
    if (_minutes === 0 && _seconds === 0) {
      clearInterval(timer);
      setPreparing(false);
      setPlaying(true);
      setMinutes("");
      setSeconds("");
    }

    return () => {
      clearInterval(timer);
    };
  }, [minutes, seconds, setMinutes, setSeconds, setPlaying]);

  const playSound = async () => {};

  return (
    <View className="flex-1 py-7 px-5">
      <CounterView
        label={"Prepare"}
        type={"prepare"}
        timestamp={formatTime(minutes, seconds)}
      />
      <SoundManager
        soundFile={require("../../assets/sounds/beep-1.wav")}
        playSound={playSound}
      />
    </View>
  );
}
