import { Card, Text, Image } from "tamagui";
import { Link } from "expo-router";
import { categoriesMap } from "@/constants/categories/CategoriesMap";

type CategoryKey = keyof typeof categoriesMap;

type CategoryProps = {
    image: CategoryKey,
    text: string,
    href: any
}

export default function Category({ image, text, href }: CategoryProps) {
    return (
        <Link href={href} asChild>
            <Card
                width={"50%"}
                p={15}
                elevation={5}
                shadowColor={"#000"}
                shadowOpacity={0.20}
            >
                <Image
                    source={categoriesMap[image]}
                    width={60}
                    height={60}
                    rounded={9999}
                />
                <Text
                    color={"$color.gray900"}
                    fontFamily={"$body"}
                    fontWeight={"$2"}
                >{text}</Text>
            </Card>
        </Link>
    );
}