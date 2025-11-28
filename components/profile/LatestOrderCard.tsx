import { XStack, YStack, Card, Text } from "tamagui";
import { Link } from "expo-router";

export default function LatestOrderCard() {
    return (
        <Card
            p={15}
            elevation={5}
            shadowColor={"#000"}
            shadowOpacity={0.20}
        >
            <XStack
                justifyContent={"space-between"}
                alignItems={"center"}
            >
                <YStack
                    gap={5}
                >
                    <XStack
                        alignItems={"center"}
                        gap={10}
                    >
                        <Text
                            color={"$gray900"}
                            fontFamily={"$heading"}
                            fontWeight={"$3"}
                        >#1234</Text>
                        <XStack
                            bg={"$backgroundOpacitySuccess"}
                            borderTopLeftRadius={"$round"}
                            borderTopRightRadius={"$round"}
                            borderBottomLeftRadius={"$round"}
                            borderBottomRightRadius={"$round"}
                            px={15}
                            py={5}
                        >
                            <Text
                                color={"$success"}
                                fontFamily={"$body"}
                                fontWeight={"$1"}
                            >Entregue</Text>
                        </XStack>
                    </XStack>
                    <YStack>
                        <Text
                            color={"$gray500"}
                            fontFamily={"$body"}
                            fontWeight={"$2"}
                        >X-Bacon, Batata Rústica</Text>
                        <Text
                            color={"$gray500"}
                            fontFamily={"$body"}
                            fontWeight={"$2"}
                        >Hoje, 14:30</Text>
                    </YStack>
                </YStack>
                <YStack>
                    <Text
                        color={"$success"}
                        fontFamily={"$heading"}
                        fontWeight={"$4"}
                        fontSize={"$3"}
                    >R$ 31,80</Text>
                    <Link href={"/"} asChild>
                        <Text
                            color={"$primary"}
                            fontFamily={"$body"}
                        >Ver detalhes</Text>
                    </Link>
                </YStack>
            </XStack>
        </Card>
    );
}