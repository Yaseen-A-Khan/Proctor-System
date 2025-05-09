// import { Tabs } from 'expo-router';
// import React from 'react';
// import { Platform } from 'react-native';

// import { HapticTab } from '@/components/HapticTab';
// import { IconSymbol } from '@/components/ui/IconSymbol';
// import TabBarBackground from '@/components/ui/TabBarBackground';
// import { Colors } from '@/constants/Colors';
// import { useColorScheme } from '@/hooks/useColorScheme';

// export default function TabLayout() {
//   const colorScheme = useColorScheme();

//   return (
//     <Tabs
//       screenOptions={{
//         tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
//         headerShown: false,
//         tabBarButton: HapticTab,
//         tabBarBackground: TabBarBackground,
//         tabBarStyle: Platform.select({
//           ios: {
//             // Use a transparent background on iOS to show the blur effect
//             position: 'absolute',
//           },
//           default: {},
//         }),
//       }}>
//       <Tabs.Screen
//         name="index"
//         options={{
//           title: 'Home',
//           tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
//         }}
//       />
//       <Tabs.Screen
//         name="about"
//         options={{
//           title: 'About',
//           tabBarIcon: ({ color }) => <IconSymbol size={28} name="stop.fill" color={color} />,
//         }}
//       />
//       <Tabs.Screen
//         name="explore"
//         options={{
//           title: 'Explore',
//           tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
//         }}
//       />
//     </Tabs>
//   );
// }


import { useAuth } from '@/context/AuthContext';
import { FontAwesome } from '@expo/vector-icons';
import { Link, Stack } from 'expo-router';
import React from 'react';
import { Pressable, Text } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>

    <Stack
      screenOptions={{
        headerRight: SignOutButton
      }}>
      <Stack.Screen
        name="explore"
        options={{
          headerTitle: "My App",
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: "#fff",
          },
          headerTintColor: "#000",
        }}
        />
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Home",
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: "#fff",
          },
          headerTintColor: "#000",
        }}
        />
    </Stack>
    </GestureHandlerRootView>
  )
}

function SignOutButton() {
  const auth = useAuth();

  if (!auth) {
    return null;
  }
  const { signOut } = auth;

  return (
      <Link
          href="/login"
          onPress={(ev) => {
            ev.preventDefault();
            signOut();
          }}
          asChild
      >
        <Pressable
            style={{
              flexDirection: "row",
              display: "flex",
              alignItems: "center",
              paddingRight: 8,
            }}
        >
          <Text
              style={{
                fontWeight: "normal",
                paddingHorizontal: 8,
                fontSize: 16,
              }}
          >
            Sign Out
          </Text>
          <FontAwesome name="sign-out" size={24} color="black" />
        </Pressable>
      </Link>
  );
}