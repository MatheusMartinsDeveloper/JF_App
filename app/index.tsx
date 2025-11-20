import { YStack, Text, Image, Stack } from "tamagui";
import LoginCard from "@/components/auth/login_card";

export default function Login() {
    return (
        <YStack gap={50}>
            <YStack
                bg={"$primary"} 
                height={300} 
                borderBottomLeftRadius={120}
                borderBottomRightRadius={120}
                justify={"center"}
                items={"center"}
                gap={20}
            >
                <Image 
                    source={require("../assets/images/jf_logo.png")}
                    height={150}
                    width={150}
                    borderRadius={"$round"}
                    bg={"$background"}
                />
                <Text 
                    color={"$color.gray50"}
                    fontSize={24}
                    fontWeight={"$4"}
                    fontFamily={"$heading"}
                >
                    Sabor que Conquista
                </Text>
            </YStack>
            <Stack 
                justify={"center"} 
                items={"center"}
            >
                <LoginCard />       
            </Stack>
        </YStack>
    );
}