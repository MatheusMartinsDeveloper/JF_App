import { YStack } from "tamagui";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/components/menu/Products/ProductsCard/Header";
import ProductDetailsCard from "@/components/menu/Products/ProductsCard/ProductDetailsCard";
import Footer from "@/components/menu/Products/ProductsCard/Footer";

export default function ProductDetails() {
    const { id } = useLocalSearchParams();

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <YStack flex={1} height={"100%"}>
                <Header />
                <ProductDetailsCard />
                <Footer />
            </YStack>
        </SafeAreaView>
    );
}