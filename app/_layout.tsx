import '../tamagui-web.css';
import { Stack } from 'expo-router';
import { useFonts } from "expo-font";
import { TamaguiProvider } from 'tamagui';
import { tamaguiConfig } from '../tamagui.config';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function RootLayout() {
  const [loaded] = useFonts({
    Inter: require('../assets/fonts/Inter_28pt-Regular.ttf'),
    InterMedium: require('../assets/fonts/Inter_28pt-Medium.ttf'),
    InterSemiBold: require('../assets/fonts/Inter_28pt-SemiBold.ttf'),
    Poppins: require('../assets/fonts/Poppins-Regular.ttf'),
    PoppinsMedium: require('../assets/fonts/Poppins-Medium.ttf'),
    PoppinsSemiBold: require('../assets/fonts/Poppins-SemiBold.ttf')
  });

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <TamaguiProvider config={tamaguiConfig} defaultTheme='light'>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" options={{ headerShown: false }} />
        </Stack>
      </TamaguiProvider>
    </SafeAreaProvider>
  );
}