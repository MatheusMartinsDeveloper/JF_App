import { YStack, XStack, Text } from "tamagui";
import { CategoryType } from "@/types/CategoryType";
import ProductCard from "./ProductCard";

export default function Products({ category }: any) {
    const getProducts = category.products;

    return (
        <YStack
            width={"100%"}
            gap={15}
        >
            <Text
                color={"$color.gray900"}
                fontFamily={"$heading"}
                fontWeight={"$4"}
                fontSize={"$5"}
            >{category?.title}</Text>
            <YStack width={"100%"}>
                <XStack 
                    justifyContent={"space-between"} 
                    alignItems={"center"}
                    flexWrap="wrap"
                    rowGap={10}
                >
                    {
                        getProducts.map((item: any) => (
                            <ProductCard
                                key={item.id}
                                image={item.imageCard}
                                name={item.name}
                                price={item.price}
                            />
                        ))
                    }
                </XStack>
            </YStack>
        </YStack>
    );
}