import { Card, XStack, YStack, Text } from "tamagui";
import { Link } from "expo-router";
import { ChevronRight } from "@tamagui/lucide-icons";

type ConfigCardProps = {
    icon: React.ElementType,
    title: string,
    description: string
}

export default function ConfigCard({ icon: IconComponent, title, description }: ConfigCardProps) {
    return (
        <Link href={"/"} asChild>
            <Card
                p={15}
                elevation={5}
                shadowColor={"#000"}
                shadowOpacity={0.20}
            >
                <XStack
                    justify={"space-between"}
                    items={"center"}
                >
                    <XStack
                        items={"center"}
                        gap={10}
                    >
                        <IconComponent />
                        <YStack>
                            <Text
                                color={"$gray900"}
                                fontFamily={"$heading"}
                                fontWeight={"$3"}
                            >{title}</Text>
                            <Text
                                color={"$gray700"}
                                fontFamily={"$body"}
                            >{description}</Text>
                        </YStack>
                    </XStack>
                    <ChevronRight />
                </XStack>
            </Card>
        </Link>
    );
}