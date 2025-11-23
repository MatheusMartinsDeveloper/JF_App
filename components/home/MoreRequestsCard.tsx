import { XStack, YStack, Card, Text, Image } from "tamagui";
import { Link } from "expo-router";
import { StarFull } from "@tamagui/lucide-icons";

export default function MoreRequestsCard() {
    return (
        <Link href={"/home"} asChild>
            <Card
                p={15}
                elevation={5}
                shadowColor={"#000"}
                shadowOpacity={0.20}
            >
                <XStack
                    gap={10}
                >
                    <Image
                        source={require("../../assets/images/categories/hamburguer_photo.png")}
                        width={60}
                        height={60}
                        rounded={"$round"}
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
                            >XBacon Especial</Text>
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
                            justify={"space-between"}
                            items={"center"}
                        >
                            <Text
                                color={"$color.gray900"}
                                fontFamily={"$heading"}
                                fontWeight={"$3"}
                                fontSize={"$3"}
                            >R$ 18,90</Text>
                            <XStack
                                justify={"center"}
                                items={"center"}
                                gap={3}
                            >
                                <StarFull color={"$primary"} />
                                <Text
                                    color={"$color.gray900"}
                                    fontFamily={"$heading"}
                                    fontWeight={"$4"}
                                >5</Text>
                            </XStack>
                        </XStack>
                    </YStack>
                </XStack>
            </Card>
        </Link>
    );
}