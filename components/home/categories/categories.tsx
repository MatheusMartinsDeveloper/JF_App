import { View, Text, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import CategoryCard from "./category_card";

export default function Categories() {
    return  (
        <View className="gap-5 pt-5 w-full">
            <View className="flex-row justify-between items-center w-full">
                <Text className="text-black text-base font-robotoRegular">Categorias</Text>
                <Link href={`/`} asChild>
                    <TouchableOpacity>
                        <Text className="text-black text-base font-robotoMedium">Ver Todas</Text>
                    </TouchableOpacity>
                </Link>
            </View>
            <View className="w-full">
                <CategoryCard />
            </View>
        </View>
    );
}