import { Card, View, Text, Image, ColorTokens } from "tamagui";
import { Link } from "expo-router";

type CategoriesMenuCardProps = {
    id: number,
    title: string,
    bgColor: ColorTokens | any;
    image: any,
    imageWidth?: number,
    imageHeight?: number,
}

export default function CategoriesMenuCard({ id, title, bgColor, image, imageWidth, imageHeight }: CategoriesMenuCardProps) {
    return (
        <Link href={`/menu/${id}`} asChild>
            <Card
                width={"48%"}
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
                    z={10}
                >{title}</Text>
                <View
                    style={{
                        position: "absolute",
                        right: 10,
                        bottom: 5
                    }}
                >
                    <Image
                        source={image}
                        width={imageWidth}
                        height={imageHeight}
                    />
                </View>
            </Card>
        </Link>
    );
}