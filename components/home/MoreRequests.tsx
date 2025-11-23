import { YStack, Text } from "tamagui";
import MoreRequestsCard from "./MoreRequestsCard";

export default function MoreRequests() {
    return (
        <YStack
            width={"90%"}
            gap={15}
        >
            <Text
                color={"$color.gray900"}
                fontFamily={"$heading"}
                fontWeight={"$4"}
                fontSize={"$5"}
            >Mais Pedidos</Text>
            <YStack
                gap={10}
            >
                <MoreRequestsCard />
                <MoreRequestsCard />
            </YStack>
        </YStack>
    );
}