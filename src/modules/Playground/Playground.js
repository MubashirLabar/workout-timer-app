import { useState, useEffect } from "react";
import { View } from "react-native";
import { activateKeepAwakeAsync, deactivateKeepAwake } from "expo-keep-awake";
import CreatePreset from "./CreatePreset";
import Timer from "./Timer";
import Prepare from "./Prepare";
import Rest from "./Rest";

function Playground() {
  const [sets, setSets] = useState("1");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  const [restSeconds, setRestSeconds] = useState("");
  const [restMinutes, setRestMinutes] = useState("");
  const [playing, setPlaying] = useState(false);
  const [preparing, setPreparing] = useState(false);
  const [isRest, setIsRest] = useState(false);
  const [totalCounter, setTotalCounter] = useState({
    minutes: "0",
    seconds: "0",
    restSeconds: "0",
    restMinutes: "0",
    steps: "1",
  });

  useEffect(() => {
    if (playing || isRest || preparing) {
      activateKeepAwakeAsync();
    } else {
      deactivateKeepAwake();
    }
  }, [playing, isRest, preparing]);

  const restartCounter = () => {
    setPlaying(true);
    setIsRest(false);
    setMinutes(totalCounter.minutes);
    setSeconds(totalCounter.seconds);
    setRestSeconds(totalCounter.restSeconds);
    setRestMinutes(totalCounter.restMinutes);
  };

  const restCounter = () => {
    setPlaying(false);
    setIsRest(false);
    setPreparing(false);
    setMinutes("");
    setSeconds("");
    setRestMinutes("");
    setRestSeconds("");
    setSets("");
    setTotalCounter({
      ...totalCounter,
      minutes: "0",
      seconds: "0",
      steps: "1",
    });
  };

  return (
    <View className="flex-1">
      {preparing ? (
        <Prepare setPreparing={setPreparing} setPlaying={setPlaying} />
      ) : isRest ? (
        <Rest
          setIsRest={setIsRest}
          seconds={restSeconds}
          setSeconds={setRestSeconds}
          minutes={restMinutes}
          setMinutes={setRestMinutes}
          setPlaying={setPlaying}
          totalCounter={totalCounter}
          restartCounter={restartCounter}
          sets={sets}
          setSets={setSets}
        />
      ) : playing ? (
        <Timer
          minutes={minutes}
          seconds={seconds}
          setMinutes={setMinutes}
          setSeconds={setSeconds}
          setPlaying={setPlaying}
          setIsRest={setIsRest}
          sets={sets}
          setSets={setSets}
          totalCounter={totalCounter}
          restCounter={restCounter}
          restSeconds={restSeconds}
          restMinutes={restMinutes}
          restartCounter={restartCounter}
        />
      ) : (
        <CreatePreset
          minutes={minutes}
          seconds={seconds}
          setMinutes={setMinutes}
          setSeconds={setSeconds}
          setPreparing={setPreparing}
          sets={sets}
          setSets={setSets}
          restSeconds={restSeconds}
          setRestSeconds={setRestSeconds}
          restMinutes={restMinutes}
          setRestMinutes={setRestMinutes}
          totalCounter={totalCounter}
          setTotalCounter={setTotalCounter}
        />
      )}
    </View>
  );
}

export default Playground;
