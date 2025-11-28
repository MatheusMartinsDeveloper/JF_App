import { ScrollView, Stack, YStack } from "tamagui";
import Header from "@/components/shared/Header";
import CategoriesMenu from "@/components/menu/CategoriesMenu";

export default function Menu() {
    return (
        <ScrollView>
            <Stack pb={20}>
                <Header />
                <YStack
                    justifyContent={"center"}
                    alignItems={"center"}
                    gap={25}
                >
                    <CategoriesMenu />
                </YStack>
            </Stack>
        </ScrollView>
    );
}