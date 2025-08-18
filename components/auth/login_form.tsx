import { useState } from "react";
import { View, Text, TextInput, Pressable, TouchableOpacity } from "react-native"
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";

export default function LoginForm() {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [isChecked, setIsChecked] = useState<boolean>(false);
    
    const changeVisible = () => {
        setIsVisible(!isVisible);
    }

    return (
        <View className="flex-col items-center gap-5 bg-white rounded-xl shadow-2xl p-10 w-11/12">
            <View>
                <Text className="text-black text-2xl font-poppinsRegular font-bold">Entrar</Text>
            </View>
            <View className="flex flex-col gap-5 w-full">
                <View className="space-y-1 w-full">
                    <Text className="text-black text-base font-robotoRegular font-normal">Email</Text>
                    <TextInput className="outline-none border-2 border-black rounded-lg p-4 w-full focus:border-red"></TextInput>
                </View>
                <View className="space-y-1 w-full">
                    <Text className="text-black text-base font-robotoRegular font-normal">Senha</Text>
                    <TextInput className="relative outline-none border-2 border-black rounded-lg p-4 w-full focus:border-red" secureTextEntry={!isVisible}></TextInput>
                    <TouchableOpacity className="absolute right-3 top-10" onPress={changeVisible}>
                        <Ionicons 
                            size={20}
                            name={isVisible ? `eye-off` : `eye`} 
                        />
                    </TouchableOpacity>
                </View>
                <View className="flex-row justify-between items-center">
                    <View className="flex-row justify-center items-center gap-2">
                        <Checkbox className="w-3.5 h-3.5" value={isChecked} onValueChange={setIsChecked} /> 
                        <Text className="text-sm font-robotoRegular font-normal">Lembrar-me</Text>
                    </View>
                    <Text className="text-sm text-red-500 font-robotoRegular font-normal">Esqueci a senha</Text>
                </View>
                <View className="flex items-center w-full">
                    <Link href={"/"} asChild>
                        <Pressable className="bg-red rounded-lg p-3 w-full">
                            <Text className="text-white text-base text-center font-poppinsRegular font-extrabold">    
                                Entrar
                            </Text>
                        </Pressable>
                    </Link>
                </View>
                <View className="flex-row justify-center items-center gap-2 w-full">
                    <Text className="text-base font-robotoRegular font-normal">Não tem conta?</Text>
                    <Link href={"/"} className="text-blue text-base font-robotoRegular font-bold">Cadastra-se</Link>
                </View>
            </View>
        </View>
    );
}