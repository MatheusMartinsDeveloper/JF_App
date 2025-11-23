import { Stack, YStack } from "tamagui";
import Header from "@/components/shared/Header";
import SubHeader from "@/components/home/SubHeader";

export default function Home() {
  return (
    <Stack>
      <Header />
      <YStack
        justify={"center"}
        items={"center"}
      >
        <SubHeader />
      </YStack>
    </Stack>
  );
}