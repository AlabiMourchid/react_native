import { Stack } from "expo-router";
import { hide } from "expo-splash-screen";

export default function RootLayout() {
  return (
    <Stack >
      <Stack.Screen name="index" options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen name="login" options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen name="(tabs)"  options={{ headerShown: false }}></Stack.Screen>
    </Stack>
  );
}
