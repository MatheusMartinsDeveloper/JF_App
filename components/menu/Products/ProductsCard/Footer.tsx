import { YStack, XStack, Text, Button } from "tamagui";
import { Minus, Plus, ShoppingCart } from "@tamagui/lucide-icons";

export default function Footer() {
    return (
        <YStack 
            bg={"$color.gray200"}
            width={"100%"}
            height={190}
            borderTopLeftRadius={"$4"}
            borderTopRightRadius={"$4"}
            justifyContent="space-between"
            alignItems="center"
            p={15}
        >
            <XStack
                width={"100%"}
                justifyContent="space-between"
                alignItems="center"
            >
                <Text
                    color={"$color.success"}
                    fontFamily={"$heading"}
                    fontWeight={"$4"}
                    fontSize={"$5"}
                >R$ 18.00</Text>
                <XStack
                    alignItems="center"
                    gap={10}
                    bg={"$color.gray600"}
                    py={5}
                    px={10}
                    borderRadius={"$round"}
                >
                    <Button 
                        icon={Minus}
                        bg={"$color.gray400"}
                        color={"$color.gray50"}
                        borderRadius={"$round"}
                        p={10}
                    ></Button>
                    <Text
                        color={"$color.gray50"}
                        fontFamily={"$heading"}
                        fontWeight={"$4"}
                        fontSize={"$4"}
                    >1</Text>
                    <Button 
                        icon={Plus}
                        bg={"$color.gray400"}
                        color={"$color.gray50"}
                        borderRadius={"$round"}
                        p={10}
                    ></Button>
                </XStack>
            </XStack>
            <Button 
                iconAfter={ShoppingCart}
                width={"100%"}
                bg={"$color.primary"}
                color={"$color.gray50"}
                size={"$5"}
            >
                <Text
                    color={"$color.gray50"}
                    fontFamily={"$heading"}
                    fontWeight={"$4"}
                    fontSize={"$3"}
                    textTransform="uppercase"
                >Add ao Carrinho</Text>
            </Button>
        </YStack>
    );
}