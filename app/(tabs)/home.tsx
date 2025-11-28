import { ScrollView, Stack, YStack } from "tamagui";
import Header from "@/components/shared/Header";
import SubHeader from "@/components/home/SubHeader";
import Categories from "@/components/home/Categories";
import Promotions from "@/components/home/Promotions"
import MoreRequests from "@/components/home/MoreRequests";

export default function Home() {
  return (
    <ScrollView>
      <Stack pb={20}>
        <Header />
        <YStack
          justifyContent={"center"}
          alignItems={"center"}
          gap={25}
        >
          <SubHeader />
          <Categories />
          <Promotions />
          <MoreRequests />
        </YStack>
      </Stack>
    </ScrollView>
  );
}