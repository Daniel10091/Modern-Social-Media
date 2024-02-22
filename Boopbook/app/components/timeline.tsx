import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { useColorScheme } from '@/components/useColorScheme.web';
import { THEME_COLORS, THEME_SIZES } from '@/constants/Theme';
import { AntDesign } from '@expo/vector-icons';
import { DarkTheme, DefaultTheme } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

export default function TimelineConponent( params: any ) {

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

  const stories = params.data;
  
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
            <AntDesign style={style.headerMenuItemIcon} name='bells' />
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
                {
                  account.stories.length > 0 ? 
                    account.stories.filter((story: { viewed: boolean; }) => !story.viewed).length > 0 ? <LinearGradient
                      colors={[THEME_COLORS.indigo, THEME_COLORS.rose]}
                      style={style.timelineBackground}
                      start={{ x: 1, y: 0 }}
                      end={{ x: 1, y: 1 }}
                    /> : 
                    <LinearGradient
                      colors={[THEME_COLORS.black, THEME_COLORS.black]}
                      style={style.timelineBackground}
                      start={{ x: 1, y: 0 }}
                      end={{ x: 1, y: 1 }}
                    />
                  : ''
                }
                {/* <LinearGradient 
                  colors={[THEME_COLORS.indigo, THEME_COLORS.rose]} 
                  style={style.timelineBackground} 
                  start={{ x: 1, y: 0 }} 
                  end={{ x: 1, y: 1 }}
                /> */}
                <View style={style.timelineAvatarContent}>
                  <Image style={style.timelineAvatar} source={account.avatar} />
                </View>
                <View style={style.timelineAddIconContent}>
                  <AntDesign style={style.timelineAddIcon} name='plus' />
                </View>
              </View>
              <View style={style.timelineUserNameContainer}>
                <Text style={[style.timelineUserName, style.timelineUserNamePrimary]} numberOfLines={1}>You story</Text>
              </View>
            </TouchableOpacity>

            {stories.filter((story: { code: number; }) => story.code !== account.code).map((story: { code: number; }) => <TimelineItem key={story.code} data={story} />)}

          </ScrollView>
        </View>
    </View>
  )
}

function TimelineItem( props: any ) {

  const story = props.data;
  
  return (
    <TouchableOpacity
      style={style.timeline}
      activeOpacity={0.8}
    >
      <View style={style.timelineContent}>
        {story.viewed ? '' : ''}
        <LinearGradient 
          colors={story.viewed ? [THEME_COLORS.black, THEME_COLORS.black] : [THEME_COLORS.indigo, THEME_COLORS.rose]} 
          style={style.timelineBackground} 
          start={{ x: 1, y: 0 }} 
          end={{ x: 1, y: 1 }}
        />
        <View style={style.timelineAvatarContent}>
          {/* <Image style={style.timelineAvatar} source={{uri: data.avatar}} /> */}
          <Image style={style.timelineAvatar} source={{
            uri: story.avatar
          }} 
          />
        </View>
      </View>
      <View style={style.timelineUserNameContainer}>
        <Text style={style.timelineUserName} numberOfLines={1}>{story.username}</Text>
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
