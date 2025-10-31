import { View, Text, FlatList } from "react-native";
import PromotionCard from "./promotion_card";
import { promotions } from "@/data";

export default function Promotions() { 
    return (
        <View className="gap-5 mt-5">
            <View>
                <Text className="text-black text-xl font-poppinsMedium">Promoções</Text>
            </View>
            <FlatList
                data={promotions}
                keyExtractor={(item) => item.id}
                contentContainerClassName="gap-5"
                renderItem={({ item }) => (
                    <PromotionCard item={item} />
                )}
            />
        </View>
    );
}