import { View, Text } from "react-native";

export default function SubHeader() {
    return (
        <View className="flex-col gap-2.5 bg-red rounded-b-2xl shadow-2xl p-5 w-full">
            <Text className="text-white text-3xl font-poppinsSemiBold">Olá, João! 👋</Text>
            <Text className="text-lightGray text-base font-robotoRegular">O que você vai pedir hoje?</Text>
            <View className="bg-[#F9FAFB50] rounded-full py-1.5 pl-2.5 w-2/3">
                <Text className="text-white text-base font-robotoRegular font-medium">⚡ Entrega em até 30min</Text>
            </View>
        </View>
    );
}