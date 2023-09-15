import { View } from "react-native";
import { AppText, AppButton } from "components";
import Toast from "react-native-toast-message";

function LoginScreen() {
  const handleButton = () => {
    Toast.show({
      type: "error",
      text1: "Customized expo zeezsoft template",
    });
  };

  return (
    <View className="flex flex-1 justify-center items-center px-5">
      <AppText className="text-lg mb-6">Login Screen</AppText>
      <AppButton label="App Button" onPress={handleButton} />
    </View>
  );
}

export default LoginScreen;
