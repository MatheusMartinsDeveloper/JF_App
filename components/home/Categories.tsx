import { YStack, XStack, Text } from "tamagui";
import Category from "./Category";

export default function Categories() {
    return (
        <YStack
            width={"90%"}
            gap={15}
        >
            <Text
                color={"$gray900"}
                fontFamily={"$heading"}
                fontWeight={"$4"}
                fontSize={"$5"}
            >Categorias</Text>
            <YStack
                gap={10}
            >
                <XStack
                    gap={10}
                >
                    <Category 
                        bgColor="$backgroundCard1"
                        image={"lanches"}
                        title="Lanches"
                        imageWidth={100}
                        imageHeight={100}
                    />
                    <Category 
                        bgColor="$backgroundCard2"
                        image={"porcoes"}
                        title="Porções"
                        imageWidth={100}
                        imageHeight={70}
                    />
                </XStack>
                <XStack
                    gap={10}
                >
                    <Category 
                        bgColor="$backgroundCard3"
                        image={"sobremesas"}
                        title="Sobremesas"
                        imageWidth={100}
                        imageHeight={70}
                    />
                    <Category 
                        bgColor="$backgroundCard4"
                        image={"refrigerantes"}
                        title="Bebidas"
                        imageWidth={100}
                        imageHeight={90}
                    />
                </XStack>
            </YStack>
        </YStack>
    );
}