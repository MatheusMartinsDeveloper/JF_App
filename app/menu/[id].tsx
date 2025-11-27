import { YStack, Text } from "tamagui";
import { useLocalSearchParams } from "expo-router";
import { ProductsData } from "@/constants/categories/ProductsData";

export default function Category() {
    const { id } = useLocalSearchParams();
    const idToNumber = Number(id);

    const category = ProductsData.find(item => item.id === idToNumber);

    return (
        <YStack pt={"$5"}>
            <Text
                fontSize={"$5"}
            >{category?.title}</Text>
        </YStack>
    );
}