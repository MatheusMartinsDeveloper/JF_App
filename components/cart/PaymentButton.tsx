import { Card, YStack, XStack, Text } from "tamagui";
import { Link } from "expo-router";

export default function DeliveryButton() {
    return (
        <Link href={"/"} asChild>
            <Card
                bg={"$gray50"}
                p={15}
                elevation={5}
                shadowColor={"#000"}
                shadowOpacity={0.20}
            >
                <XStack
                    justify={"space-between"}
                    items={"center"}
                >
                    <YStack>
                        <Text
                            color={"$gray900"}
                            fontFamily={"$heading"}
                            fontWeight={"$3"}
                        >Pagamento:</Text>
                        <Text
                            color={"$gray500"}
                            fontFamily={"$body"}
                        >Dinheiro</Text>
                    </YStack>
                    <Text
                        color={"$primary"}
                        fontFamily={"$heading"}
                        fontWeight={"$3"}
                    >Alterar</Text>
                </XStack>
            </Card>
        </Link>
    );
}