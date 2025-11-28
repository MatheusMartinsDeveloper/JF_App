import { Card, View, Text, Image, ColorTokens } from "tamagui";
import { Link } from "expo-router";
import { categoriesMap } from "@/constants/categories/CategoriesMap";

type CategoryKey = keyof typeof categoriesMap;

type CategoryProps = {
    bgColor: ColorTokens;
    title: string,
    image: CategoryKey,
    imageWidth: number,
    imageHeight: number
}

export default function Category({ bgColor, title, image, imageWidth, imageHeight }: CategoryProps) {
    return (
        <Link href={"/"} asChild>
                    <Card
                        width={"50%"}
                        height={125}
                        p={10}
                        elevation={5}
                        shadowColor={"#000"}
                        shadowOpacity={0.20}
                        overflow="hidden"
                        position="relative"
                        bg={bgColor}
                    >
                            <Text 
                                color={"$gray100"}
                                fontFamily={"$heading"}
                                fontWeight={"$3"}
                                zIndex={10}
                            >{title}</Text>
                            <View
                                style={{
                                    position: "absolute",
                                    right: 10,
                                    bottom: 5
                                }}
                            >
                                <Image
                                    source={categoriesMap[image]}
                                    width={imageWidth}
                                    height={imageHeight}
                                />
                            </View>
                    </Card>
                </Link>
    );
}