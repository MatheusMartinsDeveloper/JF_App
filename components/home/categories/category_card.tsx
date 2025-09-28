import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { categories } from "@/data";

export default function CategoryCard() {
    return (
        <FlatList 
            data={categories}
            keyExtractor={(item) => item.id}
            scrollEnabled={false}
            numColumns={2}
            renderItem={({ item }) => (
                <Link
                    className="flex-1 items-center bg-white rounded-md shadow-lg p-2.5"
                    href={`/`} 
                    asChild
                >
                    <TouchableOpacity className="items-center w-full">
                        <Image
                            className="rounded-full !w-14 !h-14"
                            source={item.image}
                        />
                        <Text 
                            className="text-black text-sm font-poppinsRegular"
                            numberOfLines={1} 
                            lineBreakMode="tail"
                        >
                            {item.name}
                        </Text>
                    </TouchableOpacity>
                </Link>
            )}
        />
    );
}