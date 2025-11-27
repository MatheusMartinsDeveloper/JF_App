import { YStack, XStack, Text } from "tamagui";
import CategoriesMenuCard from "./CategoriesMenuCard";
import { ProductsData } from "@/constants/categories/ProductsData";

export default function CategoriesMenu() {
    return (
        <YStack
            width={"90%"}
            gap={15}
        >
            <Text
                color={"$gray900"}
                fontFamily={"$heading"}
                fontWeight={"$4"}
                fontSize={"$5"}
            >Categorias</Text>
            <XStack
                flexWrap="wrap"
                justify={"space-between"}
                gap={10}
            >
                {ProductsData.map(item => (
                    <CategoriesMenuCard 
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        bgColor={item.color}
                        image={item.image}
                        imageWidth={item.imageWidth}
                        imageHeight={item.imageHeight}
                    />
                ))}
            </XStack>
        </YStack>
    );
}