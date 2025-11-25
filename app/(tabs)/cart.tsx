import { ScrollView, Stack, YStack } from "tamagui";
import Header from "@/components/shared/Header";
import UserCart from "@/components/cart/UserCart";

export default function Cart() {
    return (
        <ScrollView>
            <Stack pb={20}>
                <Header />
                <YStack
                    justify={"center"}
                    items={"center"}
                    gap={25}
                >
                    <UserCart />
                </YStack>
            </Stack>
        </ScrollView>
    );
}