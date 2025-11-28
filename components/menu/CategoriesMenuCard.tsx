import { Card, View, Text, Image } from "tamagui";
import { Link } from "expo-router";
import { CategoryType } from "@/types/CategoryType";

export default function CategoriesMenuCard({ id, title, color, image, imageWidth, imageHeight }: CategoryType) {
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
                bg={color}
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
                        source={image}
                        width={imageWidth}
                        height={imageHeight}
                    />
                </View>
            </Card>
        </Link>
    );
}