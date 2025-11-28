import { YStack, XStack, Text } from "tamagui";
import { Link } from "expo-router";
import LatestOrderCard from "./LatestOrderCard";

export default function LatestOrders() {
    return (
        <YStack
            gap={15}
            width={"90%"}
        >
            <XStack
                justifyContent={"space-between"}
                alignItems={"center"}
            >
                <Text
                    color={"$gray900"}
                    fontFamily={"$heading"}
                    fontWeight={"$4"}
                    fontSize={"$5"}
                >Pedidos Recentes</Text>
                <Link href={"/"} asChild>
                    <Text
                        color={"$primary"}
                        fontFamily={"$body"}
                        fontWeight={"$3"}
                    >Ver Mais</Text>
                </Link>   
            </XStack>
            <YStack
                gap={10}
            >
                <LatestOrderCard />
                <LatestOrderCard />
            </YStack>
        </YStack>
    )
}