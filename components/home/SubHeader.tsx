import { Text, XStack, YStack } from "tamagui";

export default function SubHeader() {
    return (
        <YStack
            justify={"center"}
            gap={10}
            width={"90%"}
            height={140}
            p={25}
            bg={"$primary"}
            borderBottomLeftRadius={"$4"}
            borderBottomRightRadius={"$4"}
        >
            <Text
                color={"$gray100"}
                fontFamily={"$heading"}
                fontWeight={"$4"}
                fontSize={"$5"}
            >Olá, João! 👋</Text>
            <Text
                color={"$gray100"}
                fontFamily={"$body"}
                fontWeight={"$1"}
            >O que você vai pedir hoje?</Text>
            <XStack
                gap={"$3"}
            >
                <XStack
                    bg={"$backgroundOpacity"}
                    borderTopLeftRadius={"$round"}
                    borderTopRightRadius={"$round"}
                    borderBottomLeftRadius={"$round"}
                    borderBottomRightRadius={"$round"}
                    px={15}
                    py={5}
                >
                    <Text
                        color={"$gray100"}
                        fontFamily={"$body"}
                        fontWeight={"$1"}
                        fontSize={"$2"}
                    >Entrega em 30min</Text>
                </XStack>
                <XStack
                    bg={"$backgroundOpacity"}
                    borderTopLeftRadius={"$round"}
                    borderTopRightRadius={"$round"}
                    borderBottomLeftRadius={"$round"}
                    borderBottomRightRadius={"$round"}
                    px={15}
                    py={5}
                >
                    <Text
                        color={"$gray100"}
                        fontFamily={"$body"}
                        fontWeight={"$1"}
                        fontSize={"$2"}
                    >Frete Grátis</Text>
                </XStack>
            </XStack>
        </YStack>
    )
}