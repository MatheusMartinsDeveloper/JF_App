import { Tabs } from "expo-router";
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabsLayout() {
    return (
        <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: "#EF4444"}}>
            <Tabs.Screen 
                name="home"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color }) => <AntDesign name="home" color={color} size={20} />
                }}
            />
            <Tabs.Screen 
                name="menu"
                options={{
                    title: "Cardápio",
                    tabBarIcon: ({ color }) => <Ionicons name="restaurant-outline" color={color} size={20} />
                }}
            />
            <Tabs.Screen
                name="cart"
                options={{
                    title: "Carrinho",
                    tabBarIcon: ({ color }) => <AntDesign name="shoppingcart" color={color} size={20} />
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: "Perfil",
                    tabBarIcon: ({ color }) => <Ionicons name="person-circle-outline" color={color} size={20} />
                }}
            />
        </Tabs>
    );
}