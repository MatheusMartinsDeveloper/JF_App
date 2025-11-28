import { XStack, Text, Image, Button } from "tamagui";
import { Search, ShoppingCart } from "@tamagui/lucide-icons";

export default function Header() {
    return (
        <XStack
            justifyContent={"space-between"}
            alignItems={"center"}
            pt={20}
            pl={20}
        >
            <XStack
                alignItems={"center"}
            >
                <Image
                    source={require("../../assets/images/jf_logo.png")}
                    width={60}
                    height={60}
                />
                <Text
                    color={"$gray900"}
                    fontFamily={"$heading"}
                    fontSize={"$3"}
                    fontWeight={"$4"}
                >JF Delivery</Text>
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