import { XStack, Button } from "tamagui";
import { Link } from "expo-router";
import { ArrowLeft, Heart} from "@tamagui/lucide-icons";

export default function Header() {
    return (
        <XStack
            justifyContent="center"
            width={"100%"}
            position="absolute"
            top={15}
            zIndex={1}
        >
            <XStack
                justifyContent="space-between"
                alignItems="center"
                width={"90%"}
            >
                <Link href={"/"} asChild>
                    <Button 
                        icon={ArrowLeft}
                        color={"$color.primary"}
                        borderRadius={"$round"}
                        p={10}
                    ></Button>
                </Link>
                <Button 
                    icon={Heart}
                    color={"$color.primary"}
                    borderRadius={"$round"}
                    p={10}    
                ></Button>
            </XStack>
        </XStack>
    );
}