import { YStack, Text } from "tamagui";
import Promotion from "./Promotion";

export default function Promotions() {
    return (
        <YStack
            width={"90%"}
            gap={15}
        >
            <Text
                color={"$gray900"}
                fontFamily={"$heading"}
                fontWeight={"$4"}
                fontSize={"$5"}
            >Promoções</Text>
            <YStack
                gap={10}
            >
                <Promotion />
                <Promotion />
            </YStack>
        </YStack>
    );
}