import { useEffect, useState } from "react";
import { Audio } from "expo-av";

export default function SoundManager({ soundFile, playSound }) {
  const [soundObject, setSoundObject] = useState(null);

  useEffect(() => {
    async function loadSound() {
      const { sound } = await Audio.Sound.createAsync(soundFile);
      setSoundObject(sound);
    }

    loadSound();

    return () => {
      if (soundObject) {
        soundObject.unloadAsync();
      }
    };
  }, [soundFile]);

  useEffect(() => {
    if (playSound && soundObject) {
      soundObject.setPositionAsync(0);
      soundObject.playAsync();
    }
  }, [playSound, soundObject]);

  return null;
}
