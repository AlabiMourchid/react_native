import { router, Stack } from "expo-router";
import { hide } from "expo-splash-screen";
import { AuthProvider } from "./hooks/useAuth";
import { useEffect } from "react";
import { getStoredUser } from "./services/auth";

export default function RootLayout() {
  useEffect(() => {
        const loadUser = async () => {
          const storedUser = await getStoredUser();
          if (storedUser) {
            router.replace('/home')
          }
        };
        loadUser();
      }, []);
  return (
    <AuthProvider>
      <Stack >
            <Stack.Screen name="index" options={{headerShown: false}}></Stack.Screen>
            <Stack.Screen name="login" options={{headerShown: false}}></Stack.Screen>
            <Stack.Screen name="(tabs)"  options={{ headerShown: false }}></Stack.Screen>
          </Stack>
    </AuthProvider>
    
  );
}
