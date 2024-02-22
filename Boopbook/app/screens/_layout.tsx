import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import React from 'react';

import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { useColorScheme } from '@/components/useColorScheme';

import { THEME_COLORS } from '@/constants/Theme';
import { AntDesign } from '@expo/vector-icons';
import { Image, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  
  const account = {
    code: 0,
    username: 'daniel_aguiar',
    avatar: require('../../assets/images/account.jpeg'),
    stories: [
      // {
      //   code: 1,
      //   avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg',
      //   username: 'felipe_starr',
      //   viewed: true,
      // },
      // {
      //   code: 2,
      //   avatar: 'https://www.georgetown.edu/wp-content/uploads/2022/02/Jkramerheadshot-scaled-e1645036825432-1050x1050-c-default.jpg',
      //   username: 'keren_rose',
      //   viewed: false,
      // },
    ]
  }

  return (
    <Tabs
      screenOptions={{
        // tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarActiveTintColor: THEME_COLORS.rose,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
        freezeOnBlur: useClientOnlyValue(false, false),
      }}>
      <Tabs.Screen
        name="feed/index"
        options={{
          headerShown: false,
          title: 'Feed',
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <AntDesign name="home" size={30} color={color} />,
        }}
      />
      <Tabs.Screen
        name="search/index"
        options={{
          headerShown: false,
          title: 'Search',
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <AntDesign name="search1" size={30} color={color} />,
        }}
      />
      <Tabs.Screen
        name="chat/index"
        options={{
          headerShown: false,
          title: 'Chat',
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <AntDesign name="message1" size={30} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile/index"
        options={{
          headerShown: false,
          title: 'Profile',
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => (
            <View style={{
              width: 34,
              height: 34,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: THEME_COLORS.rose,
              borderRadius: 12,
            }}>
              <LinearGradient
                colors={[THEME_COLORS.indigo, THEME_COLORS.rose]} 
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: 34,
                  height: 34,
                  borderRadius: 11,
                }} 
                start={{ x: 0, y: 0}} 
                end={{x: 1, y: 1}}
              />
              <View 
                style={{
                  width: 30,
                  height: 30,
                  backgroundColor: THEME_COLORS.dark,
                  borderRadius: 10,
                  overflow: 'hidden',
                  borderWidth: 1,
                  borderColor: THEME_COLORS.dark,
                }}
              >
                <Image 
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                  source={account.avatar} 
                />
              </View>
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
