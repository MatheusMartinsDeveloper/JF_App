import { YStack, XStack, Text, Button } from "tamagui";
import { useLocalSearchParams } from "expo-router";
import { ProductsData } from "@/constants/categories/ProductsData";
import { Link } from "expo-router";
import { ArrowLeft, Search, ShoppingCart } from "@tamagui/lucide-icons";

export default function Category() {
    const { id } = useLocalSearchParams();
    const idToNumber = Number(id);

    const category = ProductsData.find(item => item.id === idToNumber);

    return (
        <YStack p={20}>
            <XStack
                justify={"space-between"}
                items={"center"}
            >
                <Link href={"/(tabs)/menu"} asChild>
                    <Button 
                        icon={ArrowLeft}
                        borderTopLeftRadius={"$round"}
                        borderTopRightRadius={"$round"}
                        borderBottomLeftRadius={"$round"}
                        borderBottomRightRadius={"$round"} 
                        p={10}
                        color={"$primary"}
                    ></Button>
                </Link>
                <XStack
                    gap={15}
                >
                    <Button 
                        icon={Search}
                        borderTopLeftRadius={"$round"}
                        borderTopRightRadius={"$round"}
                        borderBottomLeftRadius={"$round"}
                        borderBottomRightRadius={"$round"}
                        p={10}
                    ></Button>
                    <Button 
                        icon={ShoppingCart}
                        borderTopLeftRadius={"$round"}
                        borderTopRightRadius={"$round"}
                        borderBottomLeftRadius={"$round"}
                        borderBottomRightRadius={"$round"}
                        p={10}     
                    ></Button>
                </XStack>
            </XStack>
        </YStack>
    );
}