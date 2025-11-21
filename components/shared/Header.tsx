import { XStack, Text, Image, Button } from "tamagui";
import { Search, ShoppingCart } from "@tamagui/lucide-icons";

export default function Header() {
    return (
        <XStack
            justify={"space-between"}
            items={"center"}
            pt={10}
        >
            <XStack
                items={"center"}
            >
                <Image
                    source={require("../../assets/images/jf_logo.png")}
                    width={70}
                    height={70}
                />
                <Text
                    color={"$gray900"}
                    fontFamily={"$heading"}
                    fontSize={"$3"}
                    fontWeight={"$4"}
                >JF Lanches</Text>
            </XStack>
            <XStack
                gap={15}
                pr={10}
            >
                <Button 
                    icon={Search}
                    borderTopLeftRadius={"$round"}
                    borderTopRightRadius={"$round"}
                    borderBottomLeftRadius={"$round"}
                    borderBottomRightRadius={"$round"} 
                    p={10}
                ></Button>
                <Button 
                    icon={ShoppingCart}
                    borderTopLeftRadius={"$round"}
                    borderTopRightRadius={"$round"}
                    borderBottomLeftRadius={"$round"}
                    borderBottomRightRadius={"$round"}
                    p={10} 
                ></Button>
            </XStack>
        </XStack>
    );
}