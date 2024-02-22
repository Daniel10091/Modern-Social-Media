import React from 'react'
import { View, Text, Image, Dimensions, TouchableOpacity, StyleSheet } from 'react-native'

import { useColorScheme } from '@/components/useColorScheme.web';
import { DarkTheme, DefaultTheme } from '@react-navigation/native';
import { THEME_COLORS, THEME_SIZES } from '@/constants/Theme';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';

export default function PostComponent( params: any ) {

  const [ users, setUsers ] = React.useState([]);
  const [ likedMenuVisible, setLikedMenuVisible ] = React.useState(false);
  const [ liked, setLiked ] = React.useState(false);
  const [ showDescription, setShowDescription ] = React.useState(true);
  const [ showComment, setShowComment ] = React.useState(false);

  const [ postContentWidth, setPostContentWidth ] = React.useState(0);
  const [ postContentHeight, setPostContentHeight ] = React.useState(0);

  const post = params.data;
  const comments = params.comments;

  const user = {
    id: 1,
    name: 'Robert Wood',
    username: 'robert_wood',
    avatar: 'https://www.maklarsamfundet.se/sites/default/files/styles/large_w760/public/2019-11/nyhet_emil_cargill_ek.jpg?itok=uBdXw7Nq',
  }

  const likeIcons = [
    {
      name: 'beating-heart',
      source: require('../../assets/icons/beating-heart.png')
    },
    {
      name: 'thumbs-up',
      source: require('../../assets/icons/thumbs-up.png')
    },
    {
      name: 'smiling-face',
      source: require('../../assets/icons/face-with-tears-of-joy.png')
    },
    {
      name: 'hushed-face',
      source: require('../../assets/icons/hushed-face.png')
    },
    {
      name: 'crying-face',
      source: require('../../assets/icons/crying-face.png')
    },
    {
      name: 'pouting-face',
      source: require('../../assets/icons/pouting-face.png')
    },
  ]

  React.useEffect(() => {
    
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error(error))

    Image.getSize(post.image, (width, height) => {
      setPostContentWidth(width);
      setPostContentHeight(height);
    });

  }, [post]);
  
  var backCount = 0;
  var backTimer: any = null;

  return (
    <View style={style.post}>
      <View style={style.postHeader}>
        <View style={style.postHeaderContent}>
          <View style={style.postHeaderColumn}>
            <TouchableOpacity 
              style={style.postHeaderUserAvatar}
              onPress={() => ''}
              activeOpacity={0.6}
            >
              {post.user.hasStory ? 
                <LinearGradient 
                  colors={[THEME_COLORS.indigo, THEME_COLORS.rose]} 
                  style={style.postHeaderUserAvatarBackground} 
                  start={{ x: 1, y: 0 }} 
                  end={{ x: 1, y: 1 }}
                />
               : ''}
              <Image 
                style={style.postUserAvatar} 
                source={{uri: post.user.avatar}} 
              />
            </TouchableOpacity>
          </View>
          <View style={[style.postHeaderColumn, {flex: 1}]}>
            <View style={style.postDetails}>
              <TouchableOpacity 
                style={style.postUserUsernameContent}
                onPress={() => ''}
                activeOpacity={0.6}
              >
                <Text style={style.postUserUsername}>{post.user.username}</Text>
              </TouchableOpacity>
              <View style={style.postOptions}>
                <TouchableOpacity 
                  style={style.postHeaderOptionButton} 
                  onPress={() => ''} 
                  activeOpacity={0.6}
                >
                  <Ionicons style={style.postHeaderOptionButtonIcon} name="ellipsis-horizontal" />
                </TouchableOpacity>
              </View>
            </View>
            <View style={style.postDescriptionContent}>
              <Text 
                style={[style.postDescriptionText, {
                  width: showDescription ? '100%' : '80%',
                }]} 
                // numberOfLines={showDescription ? null : 1} 
                // onPress={() => setShowDescription(!showDescription)}
              >{post.description}</Text>
            </View>
          </View>
        </View>
      </View>
      <TouchableOpacity 
        style={style.postContent}
        onPress={() => {
          backCount++;
          if (backCount == 2) {
            clearTimeout(backTimer)
            liked ? setLiked(false) : setLiked(true)
          } else {
            backTimer = setTimeout(() => {
              backCount = 0
            }, 300)
          }
        }}
        activeOpacity={1}
      >
        {/* <Image 
          style={[style.postImage, {
            height: postContentHeight * (Dimensions.get('window').width / postContentWidth),
          }]} 
          source={{uri: post.image}} 
        /> */}
      </TouchableOpacity>
      <View style={style.postFooter}>
        <View style={style.postOptionsMenu}>
          <TouchableOpacity 
            style={style.postOptionButton} 
            onPress={() => {
              // likedMenuVisible ? setLikedMenuVisible(false) : setLikedMenuVisible(true)
              liked ? setLiked(false) : setLiked(true)
            }} 
            activeOpacity={0.8}
          >
            {
              liked ?  
                // <Image style={style.postOptionButtonIconImg} source={liked} /> : 
                <Ionicons style={[style.postOptionButtonIcon, {color: THEME_COLORS.rose}]} name="heart" /> : 
                <Ionicons style={style.postOptionButtonIcon} name="heart-outline" />
            }
            {/* <Text style={style.postOptionButtonSpan}>{data.likes.length}</Text> */}
          </TouchableOpacity>

          {/* <View style={[style.menuLikeOptions, {
            opacity: likedMenuVisible ? '1' : '0',
          }]}>
            <BlurView intensity={80} tint="light" style={style.menuLikeOptionsBg} />
            <View style={style.menuLikeOptionsContent}>
              {likeIcons.map(item => 
                <TouchableOpacity 
                  key={item.name}
                  style={style.menuLikeButton} 
                  onPress={() => {
                    // if (liked === item.source) 
                    //   setLiked(null);
                    // else setLiked(item.source);
                    // setLikedMenuVisible(false);
                  }} 
                  activeOpacity={0.8}
                >
                  <Image style={style.menuLikeButtonIcon} source={item.source} />
                </TouchableOpacity>
              )}
            </View>
          </View> */}

          <TouchableOpacity 
            style={style.postOptionButton} 
            onPress={() => ''} 
            activeOpacity={0.8}
          >
            <Ionicons style={style.postOptionButtonIcon} name="chatbox-outline" />
            {post.comments.length > 0 ? <Text style={style.postOptionButtonText}>{post.comments.length}</Text> : ''}
          </TouchableOpacity>
          <TouchableOpacity 
            style={style.postOptionButton} 
            onPress={() => ''} 
            activeOpacity={0.8}
          >
            <Ionicons style={[style.postOptionButtonIcon, style.postOptionButtonIconShare]} name="paper-plane-outline" />
            {post.shares.length > 0 ? <Text style={style.postOptionButtonText}>{post.shares.length}</Text> : ''}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const colorScheme = useColorScheme();
const theme = colorScheme === 'light' ? DarkTheme : DefaultTheme;

const style = StyleSheet.create({
  post: {
    width: '100%',
    marginBottom: 20,
    backgroundColor: THEME_COLORS.dark,
    borderRadius: THEME_SIZES.FeedPostRadius,
  },
  postHeader: {
    // paddingHorizontal: THEME_SIZES.FeedPostHeaderPadding,
    // paddingVertical: THEME_SIZES.FeedPostHeaderPadding,
  },
  postHeaderContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  postHeaderColumn: {
    flexDirection: 'column',
  },
  postHeaderUserAvatar: {
    position: 'relative',
    width: THEME_SIZES.FeedPostUserAvatarSize,
    height: THEME_SIZES.FeedPostUserAvatarSize,
    borderRadius: THEME_SIZES.FeedPostUserAvatarSize / 4,
  },
  postHeaderUserAvatarBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: THEME_SIZES.FeedPostUserAvatarSize + 4,
    height: THEME_SIZES.FeedPostUserAvatarSize + 4,
    borderRadius: (THEME_SIZES.FeedPostUserAvatarSize / 4) + 4,
  },
  postUserAvatar: {
    width: THEME_SIZES.FeedPostUserAvatarSize,
    height: THEME_SIZES.FeedPostUserAvatarSize,
    top: 2,
    left: 2,
    borderRadius: (THEME_SIZES.FeedPostUserAvatarSize / 4) + 2,
    borderWidth: 2,
    borderColor: THEME_COLORS.dark,
  },
  postDetails: {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 14,
  },
  postUserName: {
    fontSize: THEME_SIZES.FeedPostUserNameSize,
    color: THEME_COLORS.white,
  },
  postUserUsernameContent: {
    position: 'relative',
  },
  postUserUsername: {
    fontSize: THEME_SIZES.FeedPostUserNameSize,
    color: THEME_COLORS.white,
  },
  postOptions: {
    position: 'absolute',
    top: -6,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  postHeaderOptionButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  postHeaderOptionButtonIcon: {
    fontSize: THEME_SIZES.FeedPostOptionButtonIconSize,
    color: THEME_COLORS.white,
  },
  postDescriptionContent: {
    marginTop: THEME_SIZES.FeedPostFooterPadding,
    marginLeft: 14,
  },
  postDescriptionText: {
    fontSize: THEME_SIZES.FeedPostDescriptionTextSize,
    color: THEME_COLORS.white,
  },
  postContent: {
    flex: 1,
    marginTop: 10,
    paddingLeft: THEME_SIZES.FeedPostUserAvatarSize + 14,
  },
  postImage: {
    width: '100%',
    resizeMode: 'cover',
    borderRadius: THEME_SIZES.FeedPostRadius,
  },
  postFooter: {
    paddingLeft: THEME_SIZES.FeedPostUserAvatarSize + 14,
    paddingTop: 10,
    paddingBottom: THEME_SIZES.FeedPostFooterPaddingBottom,
  },
  postOptionsMenu: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  postOptionButton: {
    minWidth: THEME_SIZES.FeedPostOptionButtonSize,
    height: THEME_SIZES.FeedPostOptionButtonSize,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: THEME_SIZES.FeedPostOptionButtonSpace,
    borderRadius: THEME_SIZES.FeedPostOptionButtonRadius,
  },
  postOptionButtonIcon: {
    fontSize: THEME_SIZES.FeedPostOptionButtonIconSize,
    color: THEME_COLORS.white,
  },
  postOptionButtonText: {
    marginLeft: 10,
    fontSize: 12,
    color: THEME_COLORS.white,
  },
  postOptionButtonIconImg: {
    width: '80%',
    height: '80%',
  },
  postOptionButtonIconShare: {
    fontSize: THEME_SIZES.FeedPostOptionButtonIconSize - 1,
  },
  postOptionButtonSpan: {
    marginLeft: 4,
    fontSize: 12,
    color: THEME_COLORS.white,
  },
  menuLikeOptions: {
    position: 'absolute',
    top: -60,
    left: 0,
    borderRadius: 50,
    zIndex: 100,
    overflow: 'hidden',
  },
  menuLikeOptionsBg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  menuLikeOptionsContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
  menuLikeButton: {
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuLikeButtonIcon: {
    width: '90%',
    height: '90%',
  },
});
