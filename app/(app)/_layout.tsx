import { useAuth } from '@/context/AuthContext';
import { FontAwesome } from '@expo/vector-icons';
import { Link, Stack } from 'expo-router';
import React from 'react';
import { Pressable, Text } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>

    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Home",
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: "#000",
          },
          headerTintColor: "#fff",
          headerRight: SignOutButton
        }}
        
        />
        <Stack.Screen
          name="calendar"
          options={{
            headerTitle: "Calendar",
            headerTitleAlign: "center",
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: "#000",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="announcements"
          options={{
            headerTitle: "Announcements",
            headerTitleAlign: "center",
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: "#000",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="profile"
          options={{
            headerTitle: "Profile",
            headerTitleAlign: "center",
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: "#000",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="scoreboard"
          options={{
            headerTitle: "Scoreboard",
            headerTitleAlign: "center",
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: "#000",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="opportunities"
          options={{
            headerTitle: "Opportunities",
            headerTitleAlign: "center",
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: "#000",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="chat"
          options={{
            headerTitle: "Chat",
            headerTitleAlign: "center",
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: "#000",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="documents"
          options={{
            headerTitle: "Documents",
            headerTitleAlign: "center",
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: "#000",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="performance"
          options={{
            headerTitle: "Performance",
            headerTitleAlign: "center",
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: "#000",
            },
            headerTintColor: "#fff",
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
              backgroundColor: "gray",
              borderRadius: 8,
            }}
        >
          <Text
              style={{
                fontWeight: "normal",
                paddingHorizontal: 8,
                fontSize: 16,
                color: "#fff",
              }}
          >
            Sign Out
          </Text>
          <FontAwesome name="sign-out" size={24} color="white" />
        </Pressable>
      </Link>
  );
}