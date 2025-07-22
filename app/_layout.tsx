import { Stack } from 'expo-router';
import { StatusBar, View } from 'react-native';
import colors from '../constants/Colors';

export default function Layout() {
  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <StatusBar barStyle="dark-content" />
      <Stack screenOptions={{ headerShown: false }} />
    </View>
  );
}
