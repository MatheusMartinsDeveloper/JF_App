import { Card, XStack, YStack, Text, Image, Button } from "tamagui";
import { MinusCircle, PlusCircle, Trash2} from "@tamagui/lucide-icons";

export default function UserCartCard() {
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
                <XStack
                    alignItems={"center"}
                    gap={15}
                >
                    <Image 
                        source={require("../../assets/images/categories/card/snacks/snack_3.png")} 
                        width={60}
                        height={60}
                    />
                    <YStack 
                        gap={10}
                    >
                        <YStack>
                            <Text
                                color={"$gray900"}
                                fontFamily={"$heading"}
                                fontWeight={"$3"}
                            >X-Bacon Especial</Text>
                            <Text
                                color={"$gray500"}
                                fontFamily={"$body"}
                            >Obs: Sem cebola</Text>
                        </YStack>
                        <XStack
                            alignItems={"center"}
                            gap={15}
                        >
                            <Text
                                color={"$success"}
                                fontFamily={"$heading"}
                                fontWeight={"$4"}
                                fontSize={"$3"}
                            >R$ 18,90</Text>
                            <XStack
                                alignItems={"center"}
                                gap={5}
                            >
                                <Button 
                                    icon={MinusCircle}
                                    bg={"$gray100"}
                                    color={"$gray900"}
                                    borderRadius={"$round"}
                                    size={"$3"}
                                ></Button>
                                <Text
                                    color={"$gray900"}
                                    fontFamily={"$heading"}
                                    fontWeight={"$4"}
                                    fontSize={"$4"}
                                >2</Text>
                                <Button 
                                    icon={PlusCircle}
                                    bg={"$primary"}
                                    color={"$gray50"}
                                    borderRadius={"$round"}
                                    size={"$3"}
                                ></Button>
                            </XStack>
                        </XStack>
                    </YStack>
                </XStack>
                <XStack>
                    <Button 
                        icon={Trash2} 
                        color={"$primary"}
                        size={"$5"}
                    ></Button>
                </XStack>
            </XStack>
        </Card>
    );
}