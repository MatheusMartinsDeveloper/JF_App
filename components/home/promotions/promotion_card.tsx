import { Text, Image, TouchableOpacity, View, ImageSourcePropType } from "react-native";
import { Link } from "expo-router";

type PromotionItem = {
    id: string;
    name: string;
    menu: string;
    discount: string;
    price: string;
    image: ImageSourcePropType;
}

type PromotionItemProps = {
    item: PromotionItem
}

export default function PromotionCard({ item }: PromotionItemProps) {
    return (
        <Link
            asChild 
            href={"/"}  
            className="flex-1 flex-row justify-center items-center bg-white shadow-lg rounded-md p-5">
            <TouchableOpacity>
                <View className="flex-row items-center gap-5 w-full">
                    <View>
                        <Image 
                            className="!w-14 !h-14 rounded-full"
                            source={item.image}
                        />
                    </View>
                    <View className="gap-5">
                        <View className="w-10/12">
                            <Text className="text-black text-lg font-poppinsMedium">{item.name}</Text>
                            <Text className="text-black text-md font-robotoRegular truncate">{item.menu}</Text>
                        </View>
                        <View className="flex-row gap-5">
                            <Text className="text-black text-md font-poppinsSemiBold">{item.discount}</Text>
                            <Text className="text-gray text-md font-poppinsRegular line-through">{item.price}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </Link>
    );
}