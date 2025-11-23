import { Stack, YStack } from "tamagui";
import Header from "@/components/shared/Header";
import SubHeader from "@/components/home/SubHeader";
import Categories from "@/components/home/Categories";

export default function Home() {
  return (
    <Stack>
      <Header />
      <YStack
        justify={"center"}
        items={"center"}
        gap={25}
      >
        <SubHeader />
        <Categories />
      </YStack>
    </Stack>
  );
}