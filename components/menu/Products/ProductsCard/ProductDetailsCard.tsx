import { YStack, XStack, Text, Image, Button, TextArea } from "tamagui";
import { StarFull, AlarmClock } from "@tamagui/lucide-icons";

export default function ProductDetailsCard() {
    return (
        <YStack
            flex={1}
            gap={10}
            position="relative"
            zIndex={0}
        >
            <YStack
                height={230}
                justifyContent="center"
                alignItems="center"
                bg={"$color.primary"}
                borderBottomLeftRadius={"$4"}
                borderBottomRightRadius={"$4"}
            >
                <Image
                    source={require("../../../../assets/images/categories/card/snacks/snack_1.png")}
                    width={200}
                    height={200}
                />
            </YStack>
            <YStack
                gap={15}
                p={15}
            >
                <Text
                    color={"$color.gray900"}
                    fontFamily={"$heading"}
                    fontWeight={"$4"}
                    fontSize={"$4"}
                >X-Bacon</Text>
                <XStack
                    alignItems="center"
                    gap={15}
                >
                    <XStack
                        alignItems="center"
                    >
                        <Button 
                            icon={StarFull}
                            color={"$color.primary"}    
                        ></Button>
                        <Text
                            color={"$color.gray900"}
                            fontFamily={"$heading"}
                            fontWeight={"$4"}
                        >5</Text>
                    </XStack>
                    <XStack
                        alignItems="center"
                    >
                        <Button 
                            icon={AlarmClock}
                            color={"$color.primary"}
                        ></Button> 
                        <Text
                            color={"$color.gray900"}
                            fontFamily={"$heading"}
                            fontWeight={"$4"}
                        >20min</Text>   
                    </XStack>
                </XStack>
                <Text
                    color={"$color.gray500"}
                    fontFamily={"$body"}
                    fontWeight={"$2"}
                >Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Repellat nulla at assumenda non beatae cumque officia eligendi
                    , praesentium, illum eius adipisci laboriosam, animi veritatis aliquid corrupti magni ullam! Culpa, tempora!</Text>
                <YStack>
                    <Text
                        color={"$color.gray900"}
                        fontFamily={"$heading"}
                        fontWeight={"$4"}
                    >Obs:</Text>
                    <TextArea 
                        placeholder="Coloque suas observações aqui"
                        height={90}
                    />
                </YStack>
            </YStack>
        </YStack>
    );
}