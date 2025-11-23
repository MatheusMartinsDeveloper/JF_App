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
                        href={"/home"}
                        image={"hamburguer"}
                        text="Lanches"
                    />
                    <Category 
                        href={"/home"}
                        image={"porcoes"}
                        text="Porções"
                    />
                </XStack>
                <XStack
                    gap={10}
                >
                    <Category 
                        href={"/home"}
                        image={"sobremesas"}
                        text="Sobremesas"
                    />
                    <Category 
                        href={"/home"}
                        image={"bebidas"}
                        text="Bebidas"
                    />
                </XStack>
            </YStack>
        </YStack>
    );
}