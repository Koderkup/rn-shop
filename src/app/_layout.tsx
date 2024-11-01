import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { HeaderTitle } from "../common/HeaderTitle";


const RootLayout = () => {
  
  return (
    <Stack>
      <Stack.Screen
        name="(shop)"
        options={{
          headerShown: false,
          headerTitle: () => <HeaderTitle title="Shop" />,
        }}
      />
      <Stack.Screen
        name="categories"
        options={{ headerShown: true, title: "Categories" }}
      />
      <Stack.Screen
        name="product"
        options={{ headerShown: true, title: "Product" }}
      />
      <Stack.Screen
        name="cart"
        options={{ presentation: "modal", title: "Shopping Cart" }}
      />
      <Stack.Screen name="auth" options={{ headerShown: true }} />
    </Stack>
  );
};

export default RootLayout;


