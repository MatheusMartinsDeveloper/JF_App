import { XStack, Text, Button } from "tamagui";
import { Link } from "expo-router";
import { Plus } from "@tamagui/lucide-icons";

export default function AddItemCart() {
    return (
        <XStack
            width={"90%"}
        >
            <Link href={"/(tabs)/menu"} asChild>
                <Button 
                    icon={Plus}
                    width={"100%"}
                    size={"$5"}
                >
                    <Text
                        color={"$gray500"}
                        fontFamily={"$heading"}
                        fontWeight={"$4"}
                    >Adicionar mais itens</Text>
                </Button>
            </Link>
        </XStack>
    );
}