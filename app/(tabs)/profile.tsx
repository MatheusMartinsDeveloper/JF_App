import { ScrollView, Stack, YStack } from "tamagui";
import Header from "@/components/shared/Header";
import Configs from "@/components/profile/Configs";

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
                    <Configs />
                </YStack>
            </Stack>
        </ScrollView>
    );
}