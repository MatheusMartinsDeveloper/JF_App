import { Stack, YStack, XStack, Card, Text, Label, Input, Checkbox, Button } from "tamagui";
import { Link } from "expo-router";
import { Pressable } from "react-native";

export default function LoginCard() {
    return (
        <Card 
            items={"center"}
            gap={10}
            width={"90%"}
            py={25}
            px={20}
        >
            <Stack>
                <Text
                    color={"$color.gray800"}
                    fontFamily={"$heading"}
                    fontSize={"$5"}
                    fontWeight={"$3"}
                    textTransform="uppercase"
                >Entrar</Text>
            </Stack>
            <YStack width={"100%"}>
                <YStack gap={15}>
                    <YStack>
                        <Label
                            htmlFor="email"
                            color={"$color.gray700"}
                            fontFamily={"$body"}
                            fontSize={"$3"}
                            fontWeight={"500"}    
                        >Email</Label>
                        <Input 
                            id="email"
                            width={"100%"}
                            borderColor={"$color.border"}
                            borderWidth={2}
                            py={23}
                            outline="none"
                            focusStyle={{
                                borderColor: "$primary"
                            }}
                        />
                    </YStack>
                    <YStack>
                        <Label 
                            htmlFor="password"
                            color={"$color.gray700"}
                            fontFamily={"$body"}
                            fontSize={"$3"}
                            fontWeight={"500"}
                        >Senha</Label>
                        <Input 
                            id="password"
                            width={"100%"}
                            borderColor={"$color.border"}
                            borderWidth={2}
                            py={23}
                            outline="none"
                            focusStyle={{
                                borderColor: "$primary"
                            }}
                        />
                    </YStack>
                </YStack>
                <XStack 
                    justify={"space-between"}
                    items={"center"}
                    width={"100%"}
                    py={5}
                >
                    <XStack
                        items={"center"}
                        gap={10}
                    >
                        <Checkbox id="remember" />
                        <Label 
                            htmlFor="remember"
                            color={"$gray900"}
                            fontFamily={"$body"}
                            fontSize={"$2"}   
                            fontWeight={"$1"} 
                        >Lembrar-me</Label>
                    </XStack>
                    <Link href={"/"} asChild>
                        <Button
                            color={"$primary"}
                            fontFamily={"$body"}
                            fontWeight={"$3"}
                            outline="none"
                        >Esquecei a senha</Button>
                    </Link>
                </XStack>
                <Stack>
                    <Link href={"/home"} asChild>
                        <Button                            
                            bg={"$primary"}
                            size={"$5"}
                        >
                            <Text
                                color={"$gray100"}
                                fontFamily={"$heading"}
                                fontWeight={"$3"}
                                textTransform="uppercase"
                            >
                                Entrar
                            </Text>
                        </Button>
                    </Link>
                </Stack>
                <XStack 
                    justify={"center"}
                    items={"center"}
                    gap={10}
                    pt={10}
                >
                    <Text
                        color={"$gray800"}
                        fontFamily={"$body"}
                    >
                        Não tem conta?
                    </Text>
                    <Text
                        color={"$primary"}
                        fontFamily={"$heading"}
                        fontWeight={"$3"}
                    >
                        Cadraste-se
                    </Text>
                </XStack>
            </YStack>
        </Card>
    );
}