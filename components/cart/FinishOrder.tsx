import { Card, XStack, YStack, Text, Separator } from "tamagui";
import DeliveryButton from "./DeliveryButton";
import PaymentButton from "./PaymentButton";
import FinishOrderButton from "./FinishOrderButton";

export default function FinishOrder() {
    return (
        <YStack asChild>
            <Card
                width={"90%"}
                p={15}
                elevation={5}
                shadowColor={"#000"}
                shadowOpacity={0.20}
            >
                <Text
                    color={"$gray900"}
                    fontFamily={"$heading"}
                    fontWeight={"$4"}
                    fontSize={"$4"}
                >Resumo do Pedido</Text>
                <YStack
                    gap={10}
                >
                    <XStack
                        justifyContent={"space-between"}
                        alignItems={"center"}
                    >
                        <Text
                            color={"$gray500"}
                            fontFamily={"$body"}
                            fontSize={"$3"}
                        >Subtotal</Text>
                        <Text
                            color={"$success"}
                            fontFamily={"$heading"}
                            fontWeight={"$4"}
                            fontSize={"$3"}
                        >R$ 60,50</Text>
                    </XStack>
                    <XStack
                        justifyContent={"space-between"}
                        alignItems={"center"}
                    >
                        <Text
                            color={"$gray500"}
                            fontFamily={"$body"}
                            fontSize={"$3"}
                        >Taxa de entrega</Text>
                        <Text
                            color={"$success"}
                            fontFamily={"$heading"}
                            fontWeight={"$4"}
                            fontSize={"$3"}
                        >R$ 5,90</Text>
                    </XStack>
                    <Separator />
                    <XStack
                        justifyContent={"space-between"}
                        alignItems={"center"}
                    >
                        <Text
                            color={"$gray900"}
                            fontFamily={"$heading"}
                            fontWeight={"$4"}
                            fontSize={"$3"}
                        >Total</Text>
                        <Text
                            color={"$success"}
                            fontFamily={"$heading"}
                            fontWeight={"$4"}
                            fontSize={"$3"}
                        >R$ 66,40</Text>
                    </XStack>
                    <DeliveryButton />
                    <PaymentButton />
                </YStack>
                <FinishOrderButton />
            </Card>
            
        </YStack>
    );
}