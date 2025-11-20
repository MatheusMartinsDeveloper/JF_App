import React from 'react';
import { Tabs } from 'expo-router';
import { Home, Utensils, ShoppingCart, CircleUser } from "@tamagui/lucide-icons";

export default function TabLayout() {
  return (
    <Tabs 
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#F15143",
        tabBarInactiveTintColor: "#222222"
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => ( <Home color={color as any} size={size} /> ),
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{
          title: 'Menu',
          tabBarIcon: ({ color, size }) => ( <Utensils color={color as any} size={size} /> )
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: 'Carrinho',
          tabBarIcon: ({ color, size }) => ( <ShoppingCart color={color as any} size={size} /> )
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color, size }) => ( <CircleUser color={color as any} size={size} /> )
        }}
      />
    </Tabs>
  );
}