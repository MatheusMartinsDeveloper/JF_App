import { Text, View, Image } from "react-native";
import LoginForm from "../components/auth/login_form";

export default function Index() {
  return (
    <View className="flex flex-col items-center gap-7 bg-lightGray w-full h-full">
      <View className="relative bg-red rounded-b-[40%] w-full h-1/3 z-0"></View>
      <View className="absolute top-10 justify-center items-center bg-white rounded-full w-20 h-20">
        <Image 
          className="!w-10 !h-10" 
          resizeMode="contain" 
          source={require("../assets/images/hamburguer.png")} 
        />
      </View>
      <View className="absolute top-36 flex-col items-center gap-5 w-full z-50">
        <Text className="text-white text-4xl font-poppinsRegular font-black">JF Lanches</Text>
        <Text className="text-white text-base font-robotoRegular font-extralight">Sabor que conquista!</Text>
      </View>
      <LoginForm />
    </View>
  );
}