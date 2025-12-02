import { XStack, YStack, Card, Text, Image } from "tamagui";
import { Link } from "expo-router";

export default function Promotion() {
    return (
        <Link href={"/home"} asChild>
            <Card
                p={15}
                elevation={5}
                shadowColor={"#000"}
                shadowOpacity={0.20}
            >
                <XStack 
                    gap={15}
                >
                    <Image
                        source={require("../../assets/images/categories/card/snacks/snack_1.png")}
                        width={60}
                        height={60}
                        borderRadius={"$round"}
                    />
                    <YStack 
                        gap={10}
                    >
                        <YStack>
                            <Text
                                color={"$color.gray900"}
                                fontFamily={"$heading"}
                                fontWeight={"$4"}
                                fontSize={"$2"}
                            >Combo Familia</Text>
                            <Text
                                width={"90%"}
                                color={"$color.gray700"}
                                fontFamily={"$body"}
                                fontWeight={"$1"}
                                numberOfLines={1}
                                ellipsizeMode="tail"
                            >2 Lanches + Batata + 2 Refrigerantes</Text>
                        </YStack>
                        <XStack
                            alignItems={"center"}
                            gap={10}
                        >
                            <Text
                                color={"$success"}
                                fontFamily={"$heading"}
                                fontWeight={"$3"}
                                fontSize={"$3"}
                            >R$ 45,90</Text>
                            <Text
                                color={"$color.gray500"}
                                fontFamily={"$body"}
                                textDecorationLine="line-through"
                            >R$ 55,90</Text>
                        </XStack>
                    </YStack>
                </XStack>
            </Card>
        </Link>
    );
}