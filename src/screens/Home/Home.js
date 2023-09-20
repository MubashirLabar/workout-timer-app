import { useState } from "react";
import { View } from "react-native";
import CreatePreset from "./CreatePreset";
import Timer from "./Timer";

function HomeScreen() {
  const [playing, setPlaying] = useState(false);
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");

  return (
    <View className="flex-1">
      {playing ? (
        <Timer
          minutes={minutes}
          seconds={seconds}
          setMinutes={setMinutes}
          setSeconds={setSeconds}
          setPlaying={setPlaying}
        />
      ) : (
        <CreatePreset
          minutes={minutes}
          seconds={seconds}
          setMinutes={setMinutes}
          setSeconds={setSeconds}
          setPlaying={setPlaying}
        />
      )}
    </View>
  );
}

export default HomeScreen;
