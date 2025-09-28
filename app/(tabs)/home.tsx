import { View } from "react-native";
import Header from "@/components/shared/header";
import SubHeader from "@/components/home/sub_header";
import Categories from "@/components/home/categories/categories";

export default function Home() {
    return (
        <View className="items-center bg-lightGray w-full">
            <Header />
            <View className="w-11/12">
                <SubHeader />
                <Categories />
            </View>
        </View>
    );
}