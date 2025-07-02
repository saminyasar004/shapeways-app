import { Globe } from 'lucide-react-native';
import { useState } from 'react';
import { Pressable, Text, View, Modal, Alert, SafeAreaView } from 'react-native';
import Separator from './Separator';

export default function NavigationPanel() {
  //   const [languageModalVisible, setLanguageModalVisible] = useState(false);

  return (
    <View className="my-safe flex flex-1 items-start justify-start">
      {/* User section */}
      <View className="flex w-full flex-row items-center justify-center gap-3 p-5">
        <View className="h-12 w-12 rounded-full bg-neutral-300"></View>
        <View className="flex flex-1 flex-col gap-2">
          <Text className="font-medium">John Doe</Text>
          <Text className="text-sm text-blue-500">Switch to buyer</Text>
        </View>

        <SafeAreaView>
          <Modal
            animationType="slide"
            transparent={true}
            visible={false}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              //   setLanguageModalVisible(!languageModalVisible);
            }}>
            <View className="px-5">
              <View className="flex w-full flex-row items-center justify-center">
                <Text>Hello World!</Text>
              </View>
            </View>
          </Modal>
        </SafeAreaView>

        <Pressable
        // onPress={() => Alert.alert('Hello')}
        >
          <View className="flex flex-col items-center gap-1">
            <Globe size={24} color={'#999999'} />
            <Text className="text-gray-500">EN</Text>
          </View>
        </Pressable>
      </View>
      <Separator orientation="horizontal" />

      {/* Wallet section */}
      <View className="flex flex-row gap-3">
        <View className=""></View>
        <View className="flex-1"></View>
        <View></View>
      </View>
    </View>
  );
}
