import { Card, YStack, XStack, Text, Image, Button } from "tamagui";
import { LinearGradient } from "tamagui/linear-gradient";
import { Link, useLocalSearchParams } from "expo-router";
import { ProductsType } from "@/types/ProductsType";
import { Plus } from "@tamagui/lucide-icons";

export default function ProductCard({ id, image, name, price }: any) {
    return (
        <Link href={`/menu/details/${id}`} asChild>
            <Card
                width={"48%"}
                height={190}
                alignItems="center"
                py={10}
                position="relative"
                overflow="hidden"
            >
                <LinearGradient 
                    start={[0, 0]}
                    end={[0, 1]}
                    colors={["transparent", "rgba(0, 0, 0, 0.10)"]}
                    height={60}
                    width="100%"
                    position="absolute"
                    bottom={0}
                    left={0}
                />
                <YStack 
                    zIndex={1}
                    width={"80%"}
                    height={"100%"}
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <YStack width={"100%"} alignItems="center">
                        <Image
                            source={image}
                            width={100}
                            height={100}
                        />
                        <Text
                            color={"$color.gray900"}
                            fontFamily={"$heading"}
                            fontWeight={"$3"}
                        >{name}</Text>
                    </YStack>
                    <XStack
                        justifyContent="space-between"
                        alignItems="center"
                        width={"100%"}
                    >
                        <Text
                            color={"$color.success"}
                            fontFamily={"$heading"}
                            fontWeight={"$3"}
                            fontSize={"$3"}
                        >R$ {price}</Text>
                        <Button 
                            icon={Plus}
                            color={"$color.gray50"}
                            bg={"$color.primary"}
                            borderRadius={"$round"}
                            p={10}
                        ></Button>
                    </XStack>
                </YStack>
            </Card>
        </Link>
    );
}