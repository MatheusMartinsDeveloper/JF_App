import { View, Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Header() {
    return (
        <View className="flex-row justify-between items-center pt-5 px-5 w-full">
            <View className="flex-row justify-start items-center gap-5 w-1/2">
                <View className="bg-red rounded-full p-2">
                    <Image 
                        className="!w-5 !h-5"
                        source={require("../../assets/images/hamburguer.png")}
                    />
                </View>
                <Text className="text-black text-xl font-poppinsRegular font-bold">JF Lanches</Text>
            </View>
            <View className="flex-row justify-end items-center gap-5 w-1/2">
                <Ionicons
                    name="search"
                    size={20}
                />
                <View>
                    <AntDesign 
                        name="shoppingcart"
                        size={20}
                    />
                </View>
            </View>
        </View>
    );
}