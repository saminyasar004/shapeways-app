import { AlignJustify } from 'lucide-react-native';
import {
  Button,
  DrawerLayoutAndroid,
  Image,
  RefreshControl,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import './global.css';
import { useCallback, useRef, useState } from 'react';
import NavigationPanel from 'components/common/NavigationPanel';

export default function App() {
  const drawer = useRef<DrawerLayoutAndroid>(null);

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <>
      {/* <ScreenContent title="Home" path="App.tsx"></ScreenContent>
      <StatusBar style="auto" /> */}

      <SafeAreaProvider>
        <DrawerLayoutAndroid
          ref={drawer}
          drawerWidth={300}
          drawerPosition="left"
          className="my-safe"
          renderNavigationView={NavigationPanel}>
          <View className="my-safe">
            {/* Header */}
            <View className="sticky top-0 z-50 flex h-auto w-full flex-row items-center bg-primary px-5 py-3 text-white">
              <View>
                <AlignJustify
                  size={24}
                  color={'white'}
                  onPress={() => drawer.current?.openDrawer()}
                />
              </View>

              <View className="flex-1 items-center">
                <Text className="text-lg font-medium text-white">Welcome!</Text>
              </View>

              <View className="h-12 w-12 rounded-full border border-white">
                <Image
                  source={require('./assets/favicon.png')}
                  className="h-12 w-12 rounded-full object-contain object-center" // A wide container
                  resizeMode="contain" // The image will fit inside without being distorted
                />
              </View>
            </View>

            {/* Body */}
            <ScrollView
              className="mb-20 h-auto w-full py-5"
              refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
              {Array.from({ length: 10 }).map((_, i) => (
                <View key={i} className="mx-auto my-2 w-[98%] rounded-lg bg-neutral-100 px-2 py-4">
                  <Text className="text-xl font-semibold">Home</Text>
                  <Text className="">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie, neque non
                  </Text>

                  <View className="py-6">
                    <Button title="Go Live" />
                  </View>
                </View>
              ))}
            </ScrollView>
          </View>
        </DrawerLayoutAndroid>
      </SafeAreaProvider>
    </>
  );
}
