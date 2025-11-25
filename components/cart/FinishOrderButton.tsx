import { Text, Button } from "tamagui";
import { ArrowRightCircle } from "@tamagui/lucide-icons";

export default function FinishOrderButton() {
    return (
        <Button 
            iconAfter={ArrowRightCircle}
            color={"$gray100"}
            size={"$5"}
            bg={"$primary"}
            mt={20}
        >
            <Text
                color={"$gray100"}
                fontFamily={"$heading"}
                fontWeight={"$3"}
            >Finalizar Pedido</Text>
        </Button>
    );
}