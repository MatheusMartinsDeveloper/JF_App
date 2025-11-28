import { ScrollView, Stack, YStack } from "tamagui";
import Header from "@/components/shared/Header";
import UserCart from "@/components/cart/UserCart";
import AddItemCart from "@/components/cart/AddItemCart";
import FinishOrder from "@/components/cart/FinishOrder";

export default function Cart() {
    return (
        <ScrollView>
            <Stack pb={20}>
                <Header />
                <YStack
                    justifyContent={"center"}
                    alignItems={"center"}
                    gap={25}
                >
                    <UserCart />
                    <AddItemCart />
                    <FinishOrder />
                </YStack>
            </Stack>
        </ScrollView>
    );
}