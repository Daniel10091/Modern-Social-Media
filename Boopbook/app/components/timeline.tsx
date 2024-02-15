import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'

import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import { useColorScheme } from '@/components/useColorScheme.web';
import { DarkTheme, DefaultTheme } from '@react-navigation/native';
import { THEME_COLORS, THEME_SIZES } from '@/constants/Theme';

export default function TimelineConponent() {

  const id: number = 0;

  const users = [
    {
      code: 1,
      avatar: 'https://www.georgetown.edu/wp-content/uploads/2022/02/Jkramerheadshot-scaled-e1645036825432-1050x1050-c-default.jpg',
      username: 'keren_rose',
    },
    {
      code: 2,
      avatar: 'https://architecture.ou.edu/wp-content/uploads/2018/07/ANGELAPERSON-1447-300x300.jpg',
      username: 'scott_hill',
    },
    {
      code: 3,
      avatar: 'https://www.wilsoncenter.org/sites/default/files/media/images/person/james-person-1.jpg?ww401834',
      username: 'andrew_ross',
    },
    {
      code: 4,
      avatar: 'https://media.licdn.com/dms/image/D4E03AQHjhSvdWPms8A/profile-displayphoto-shrink_800_800/0/1686995323144?e=2147483647&v=beta&t=DViJCzGnEWwF1Jos89sN9hADIWBjZ2mkwDaHN_P-Dfc',
      username: 'arthur_wood',
    },
    {
      code: 5,
      avatar: 'https://schoolsweek.co.uk/wp-content/uploads/2023/09/Gillian-Keegan-feat-blue.jpg',
      username: 'sarah_ashcroft',
    },
    {
      code: 6,
      avatar: 'https://www.telegraph.co.uk/content/dam/royal-family/2022/11/28/TELEMMGLPICT000317879575_trans_NvBQzQNjv4BqA7N2CxnJWnYI3tCbVBgu9T0aesusvN1TE7a0ddd_esI.jpeg?imwidth=680',
      username: 'james_smith',
    },
    {
      code: 7,
      avatar: 'https://www.jordanharbinger.com/wp-content/uploads/2018/09/be-the-most-interesting-360x360.jpg',
      username: 'john_doe',
    },
    {
      code: 8,
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
      username: 'jane_doe',
    },
    {
      code: 9,
      avatar: 'https://t3.ftcdn.net/jpg/03/02/88/46/360_F_302884605_actpipOdPOQHDTnFtp4zg4RtlWzhOASp.jpg',
      username: 'gabriel_mart',
    },
    {
      code: 10,
      avatar: 'https://www.maklarsamfundet.se/sites/default/files/styles/large_w760/public/2019-11/nyhet_emil_cargill_ek.jpg?itok=uBdXw7Nq',
      username: 'robert_wood',
    },
  ];
  
  return (
    <View style={style.container}>

      {/* Header */}

      <View style={style.header}>
        <Text style={style.headerTitle}>Boopbook</Text>
        <View style={style.headerMenu}>
          <TouchableOpacity
            style={style.headerMenuItem}
            // onPress={() => navigation.navigate('LoginOrRegister')}
            activeOpacity={0.6}
          >
            <AntDesign style={style.headerMenuItemIcon} name='hearto' />
          </TouchableOpacity>
          <TouchableOpacity
            style={style.headerMenuItem}
            // onPress={() => navigation.navigate('LoginOrRegister')}
            activeOpacity={0.6}
          >
            <AntDesign style={style.headerMenuItemIcon} name='message1' />
            <View style={style.headerMenuItemBadge}></View>
          </TouchableOpacity>
        </View>
      </View>
      
      {/* Timeline */}

      <View style={style.timelineContainer}>
          <ScrollView 
            horizontal={true} 
            showsHorizontalScrollIndicator={false}
            style={style.timelineScrollContent} 
            contentContainerStyle={style.timelineContentContainer}
            // horizontalScrollIndicatorInsets={{ right: 1 }}
          >
            <TouchableOpacity 
              style={style.timeline} 
              // onPress={() => navigation.navigate('LoginOrRegister')} 
              activeOpacity={0.8}
            >
              <View style={style.timelineContent}>
                {/* <LinearGradient 
                  colors={[THEME_COLORS.indigo, THEME_COLORS.rose]} 
                  style={style.timelineBackground} 
                  start={{ x: 1, y: 0 }} 
                  end={{ x: 1, y: 1 }}
                /> */}
                <View style={style.timelineAvatarContent}>
                  <Image style={style.timelineAvatar} source={{
                    uri: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg'
                  }} />
                </View>
                <View style={style.timelineAddIconContent}>
                  <AntDesign style={style.timelineAddIcon} name='plus' />
                </View>
              </View>
              <View style={style.timelineUserNameContainer}>
                <Text style={[style.timelineUserName, style.timelineUserNamePrimary]} numberOfLines={1}>Seu story</Text>
              </View>
            </TouchableOpacity>

            {users.filter((user: { code: number; }) => user.code !== id).map((user: { code: number; }) => <TimelineItem key={user.code} data={user} />)}

          </ScrollView>
        </View>
    </View>
  )
}

function TimelineItem( props: any ) {

  const data = props.data;
  
  return (
    <TouchableOpacity
      style={style.timeline}
      activeOpacity={0.8}
    >
      <View style={style.timelineContent}>
        <LinearGradient 
          colors={[THEME_COLORS.indigo, THEME_COLORS.rose]} 
          style={style.timelineBackground} 
          start={{ x: 1, y: 0 }} 
          end={{ x: 1, y: 1 }}
        />
        <View style={style.timelineAvatarContent}>
          {/* <Image style={style.timelineAvatar} source={{uri: data.avatar}} /> */}
          <Image style={style.timelineAvatar} source={{
            uri: data.avatar
          }} 
          />
        </View>
      </View>
      <View style={style.timelineUserNameContainer}>
        <Text style={style.timelineUserName} numberOfLines={1}>{data.username}</Text>
      </View>
    </TouchableOpacity>
  )
}

const colorScheme = useColorScheme();
const theme = colorScheme === 'light' ? DarkTheme : DefaultTheme;

const style = StyleSheet.create({
  container: {
  },

  // Header

  header: {
    paddingHorizontal: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    color: THEME_COLORS.white,
  },
  headerMenu: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 10,
  },
  headerMenuItem: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: THEME_COLORS.dark,
  },
  headerMenuItemIcon: {
    fontSize: 24,
    color: THEME_COLORS.white,
  },
  headerMenuItemBadge: {
    position: 'absolute',
    top: 4,
    right: 4,
    width: 14,
    height: 14,
    backgroundColor: THEME_COLORS.rose,
    borderRadius: 50,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: THEME_COLORS.dark,
  },
  
  // Timeline
  
  timelineContainer: {
    marginTop: THEME_SIZES.timelineMarginTop,
  },
  timelineScrollContent: {
    
  },
  timelineContentContainer: {
    paddingHorizontal: THEME_SIZES.timelinePaddingHorizontal,
    paddingVertical: THEME_SIZES.timelinePaddingVertical,
  },

  timeline: {
    width: THEME_SIZES.timelineSize + 22,
    alignItems: 'center',
    borderRadius: THEME_SIZES.timelineRadius,
  },
  timelineContent: {
    width: THEME_SIZES.timelineSize,
    height: THEME_SIZES.timelineSize,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: THEME_SIZES.timelineRadius - 2,
  },
  timelineBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: THEME_SIZES.timelineSize,
    height: THEME_SIZES.timelineSize,
    borderRadius: THEME_SIZES.timelineRadius,
  },
  timelineAvatarContent: {
    width: THEME_SIZES.timelineSize - 6,
    height: THEME_SIZES.timelineSize - 6,
    backgroundColor: THEME_COLORS.black,
    borderRadius: THEME_SIZES.timelineRadius - 2,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: THEME_COLORS.dark,
  },
  timelineAvatar: {
    width: '100%',
    height: '100%',
    borderRadius: THEME_SIZES.timelineRadius - 4,
  },
  timelineAddIconContent: {
    position: 'absolute',
    right: THEME_SIZES.timelineAddPosition - 4,
    bottom: THEME_SIZES.timelineAddPosition - 4,
    width: THEME_SIZES.timelineAddSize + 8,
    height: THEME_SIZES.timelineAddSize + 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: THEME_COLORS.rose,
    borderRadius: THEME_SIZES.timelineAddIconRadius,
    borderWidth: 3,
    borderStyle: 'solid',
    borderColor: THEME_COLORS.dark,
  },
  timelineAddIcon: {
    fontSize: THEME_SIZES.timelineAddIconSize,
    color: THEME_COLORS.white,
  },
  timelineUserNameContainer: {
    alignItems: 'center',
    marginTop: THEME_SIZES.timelineUserNameMarginTop,
  },
  timelineUserName: {
    fontSize: THEME_SIZES.timelineFontSize,
    color: THEME_COLORS.white,
  },
  timelineUserNamePrimary: {
    color: THEME_COLORS.gray,
  },
});
