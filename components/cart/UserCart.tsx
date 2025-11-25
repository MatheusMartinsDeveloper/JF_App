import { YStack, Text } from "tamagui";
import UserCartCard from "./UserCartCard";

export default function UserCart() {
    return (
        <YStack
            gap={15}
            width={"90%"}
        >
            <YStack>
                <Text
                    color={"$gray900"}
                    fontFamily={"$heading"}
                    fontWeight={"$4"}
                    fontSize={"$5"}
                >Seu Carrinho</Text>
                <Text
                    color={"$gray600"}
                    fontFamily={"$body"}
                >3 items adicionados</Text>
            </YStack>
            <YStack
                gap={10}
            >
                <UserCartCard />
                <UserCartCard />
                <UserCartCard />
            </YStack>
        </YStack>
    );
}