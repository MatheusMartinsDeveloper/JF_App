import { ScrollView, Stack, YStack } from "tamagui";
import Header from "@/components/shared/Header";
import Configs from "@/components/profile/Configs";
import LatestOrders from "@/components/profile/LatestOrders";

export default function Profile() {
    return (
        <ScrollView>
            <Stack pb={20}>
                <Header />
                <YStack
                    justify={"center"}
                    items={"center"}
                    gap={25}
                >
                    <LatestOrders />
                    <Configs />
                </YStack>
            </Stack>
        </ScrollView>
    );
}