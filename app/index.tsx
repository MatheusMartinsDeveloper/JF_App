import { YStack, Text, Image, Stack } from "tamagui";
import LoginCard from "@/components/auth/LoginCard";

export default function Login() {
    return (
        <YStack gap={50}>
            <YStack
                bg={"$color.primary"}
                height={300} 
                borderBottomLeftRadius={120}
                borderBottomRightRadius={120}
                justifyContent={"center"}
                alignItems={"center"}
                gap={20}
            >
                <Stack
                    bg={"$color.background"}
                    borderRadius={"$round"}
                    p={15}
                >
                    <Image 
                        source={require("../assets/images/jf_logo.png")}
                        height={150}
                        width={150}
                    />
                </Stack>
                <Text 
                    color={"$gray50"}
                    fontSize={24}
                    fontWeight={"$4"}
                    fontFamily={"$heading"}
                >
                    Sabor que Conquista
                </Text>
            </YStack>
            <Stack 
                justifyContent={"center"} 
                alignItems={"center"}
            >
                <LoginCard />       
            </Stack>
        </YStack>
    );
}