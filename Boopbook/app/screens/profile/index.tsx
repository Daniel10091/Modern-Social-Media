import React from 'react';
import { Image, NativeModules, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { useColorScheme } from '@/components/useColorScheme.web';
import { DarkTheme, DefaultTheme } from '@react-navigation/native';
import { THEME_COLORS, THEME_SIZES } from '@/constants/Theme';
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function ProfileScreen( params: any ) {

  enum PostType {
    POSTS = 1,
    REELS = 2,
    TAGGED = 3,
  }

  const [ followers, setFollowers ]: any = React.useState(0);
  const [ following, setFollowing ]: any = React.useState(0);
  const [ postsCount, setPostsCount ]: any = React.useState(0);
  const [ reelsCount, setReelsCount ]: any = React.useState(0);
  const [ taggedCount, setTaggedCount ]: any = React.useState(0);
  const [ postType, setPostType ]: any = React.useState(PostType.POSTS);

  // const profile = params.profile;
  const profile = {
    code: 0,
  };
  
  const account = {
    code: 0,
    name: 'Daniel Aguiar',
    username: 'daniel_aguiar',
    avatar: require('../../../assets/images/account.jpeg'),
    bio: 'Software Engineer',
    stats: {
      followers: 823,
      following: 3067,
      posts: 20,
      reels: 6,
      tagged: 4,
    },
    stories: [
      {
        code: 1,
        avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg',
        username: 'felipe_starr',
        viewed: true,
      },
      {
        code: 2,
        avatar: 'https://www.georgetown.edu/wp-content/uploads/2022/02/Jkramerheadshot-scaled-e1645036825432-1050x1050-c-default.jpg',
        username: 'keren_rose',
        viewed: false,
      },
    ]
  }

  const posts = [
    {
      id: 1,
      description: 'This is a post description This is a post description',
      createdAt: '2021-09-01T12:00:00Z',
      image: 'https://miro.medium.com/v2/resize:fit:1000/1*Uwhgm0XeSVLwYErRAFWUwQ.jpeg',
      location: 'New York, NY',
      likes: 12,
      comments: [
      ],
      shares: [
      ],
    },
    {
      id: 2,
      description: 'This is a post description This is a post description',
      createdAt: '2021-09-01T12:00:00Z',
      image: 'https://static.visa2fly.com/blog/blog-production/world-most-beautiful-countries/world-most-beautiful-countries.jpeg',
      location: 'New York, NY',
      likes: 12,
      comments: [
        {
          id: 1,
          user: {
            id: 1,
            username: 'keren_rose',
            avatar: 'https://www.georgetown.edu/wp-content/uploads/2022/02/Jkramerheadshot-scaled-e1645036825432-1050x1050-c-default.jpg',
          },
          text: 'This is a comment',
          createdAt: '2021-09-01T12:00:00Z',
        },
        {
          id: 2,
          user: {
            id: 1,
            username: 'keren_rose',
            avatar: 'https://www.georgetown.edu/wp-content/uploads/2022/02/Jkramerheadshot-scaled-e1645036825432-1050x1050-c-default.jpg',
          },
          text: 'This is a comment',
          createdAt: '2021-09-01T12:00:00Z',
        }
      ],
      shares: [
        {
          id: 1,
          user: {
            id: 1,
            username: 'keren_rose',
            avatar: 'https://www.georgetown.edu/wp-content/uploads/2022/02/Jkramerheadshot-scaled-e1645036825432-1050x1050-c-default.jpg',
          },
          createdAt: '2021-09-01T12:00:00Z',
        },
      ],
    },
    {
      id: 3,
      description: 'This is a post description This is a post description',
      createdAt: '2021-09-01T12:00:00Z',
      image: 'https://taleoftravels.com/wp-content/uploads/2021/11/seigantoji-pagoda-japan-shutterstock_189118511_bdc0eb254a.jpeg',
      location: 'New York, NY',
      likes: 12,
      comments: [
        {
          id: 1,
          user: {
            id: 1,
            username: 'keren_rose',
            avatar: 'https://www.georgetown.edu/wp-content/uploads/2022/02/Jkramerheadshot-scaled-e1645036825432-1050x1050-c-default.jpg',
          },
          text: 'This is a comment',
          createdAt: '2021-09-01T12:00:00Z',
        },
      ],
      shares: [
      ],
    },
    {
      id: 4,
      description: 'This is a post description This is a post description',
      createdAt: '2021-09-01T12:00:00Z',
      image: 'https://miro.medium.com/v2/resize:fit:1024/0*_1lhb94ua8CnBfID.jpg',
      location: 'New York, NY',
      likes: 12,
      comments: [
        {
          id: 1,
          user: {
            id: 1,
            username: 'keren_rose',
            avatar: 'https://www.georgetown.edu/wp-content/uploads/2022/02/Jkramerheadshot-scaled-e1645036825432-1050x1050-c-default.jpg',
          },
          text: 'This is a comment',
          createdAt: '2021-09-01T12:00:00Z',
        },
      ],
      shares: [
      ],
    },
  ];

  const { StatusBarManager } = NativeModules;

  const [ STATUSBAR_HEIGHT, setSTATUSBAR_HEIGHT ] = React.useState(0);

  StatusBarManager.getHeight((statusBarHeight: any) => {
    setSTATUSBAR_HEIGHT(statusBarHeight.height);
  });

  React.useEffect(() => {
    setFollowers(account.stats.followers.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.'));
    setFollowing(account.stats.following.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.'));
    setPostsCount(account.stats.posts.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.'));
    setReelsCount(account.stats.reels.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.'));
    setTaggedCount(account.stats.tagged.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.'));
  }, [followers, following]);

  return (
    <View style={[style.container, {paddingTop: STATUSBAR_HEIGHT}]}>
      <ScrollView 
        style={{flex: 1, paddingTop: 10}} 
        showsVerticalScrollIndicator={false}
      >
        <View style={style.profile}>
          <View style={style.profileBackground}>
            <Image style={style.profileBackgroundImage} source={{uri: 'https://www.hercircle.in/hcm/EngageImage/1A13836D-9D17-43E7-A4BA-C7FC5EFA33FD/D/8CC6C08D-189C-45DE-A2A7-BB6E496B3338.jpg'}} />
          </View>
          <View style={style.profileContainer}>
            <View style={style.profileContent}>
              <View style={[style.profileInfoStats, {alignItems: 'flex-end'}]}>
                <View style={style.profileInfoStatsContent}>
                  <Text style={style.profileInfoStatsValue}>{followers}</Text>
                  <Text style={style.profileInfoStatsText}>followers</Text>
                </View>
              </View>

              <View style={style.profileInfo}>
                <View style={style.profileAvatar}>
                {
                  account.stories.length > 0 ? 
                    account.stories.filter((story: { viewed: boolean; }) => !story.viewed).length > 0 ? <LinearGradient
                      colors={[THEME_COLORS.indigo, THEME_COLORS.rose]}
                      style={style.profileAvatarBackground}
                      start={{ x: 1, y: 0 }}
                      end={{ x: 1, y: 1 }}
                    /> : 
                    <LinearGradient
                      colors={[THEME_COLORS.black, THEME_COLORS.black]}
                      style={style.profileAvatarBackground}
                      start={{ x: 1, y: 0 }}
                      end={{ x: 1, y: 1 }}
                    />
                  : ''
                }
                  <Image style={style.profileAvatarImage} source={account.avatar} />
                </View>
                <View style={style.profileInfoInfoContent}>
                  <Text style={style.profileInfoName}>{account.name}</Text>
                  <View style={style.profileInfoUsername}>
                    <Text style={style.profileInfoUsernameText}>@{account.username}</Text>
                  </View>
                </View>
              </View>
              
              <View style={[style.profileInfoStats, {alignItems: 'flex-start'}]}>
                <View style={style.profileInfoStatsContent}>
                  <Text style={style.profileInfoStatsValue}>{following}</Text>
                  <Text style={style.profileInfoStatsText}>following</Text>
                </View>
              </View>
            </View>
            <Text style={style.profileInfoBio}>{account.bio}</Text>
          </View>
          <View style={style.profileMenuOptions}>
            <TouchableOpacity
              style={style.profileMenuOption}
              activeOpacity={0.8}
            >
              <AntDesign name='setting' size={24} color={theme.colors.text} />
              {/* <Text style={style.profileMenuOptionText}>Profile</Text> */}
            </TouchableOpacity>
          </View>
            {
              profile.code === account.code ? (
                <View style={style.profileOptions}>
                  <TouchableOpacity
                    style={style.profileOption}
                    activeOpacity={0.8}
                  >
                    <Text style={style.profileOptionText}>Edit</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={style.profileOption}
                    activeOpacity={0.8}
                  >
                    <Text style={style.profileOptionText}>Share profile</Text>
                  </TouchableOpacity>
                </View>
              ) : (
                <View style={style.profileOptions}>
                  <TouchableOpacity
                    style={style.profileOption}
                    activeOpacity={0.8}
                  >
                    <LinearGradient 
                      colors={[THEME_COLORS.indigo, THEME_COLORS.rose]} 
                      style={style.profileOptionBackground} 
                      start={{ x: 1, y: 0 }} 
                      end={{ x: 1, y: 1 }}
                    />
                    <Text style={style.profileOptionText}>Follow</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={style.profileOption}
                    activeOpacity={0.8}
                  >
                    <Text style={style.profileOptionText}>Message</Text>
                  </TouchableOpacity>
                </View>
              )
            }
        </View>

        <View style={style.profileBody}>

          <View style={style.header}>
            <View style={style.headerContent}>
              <Text style={style.headerTitle}>Publications</Text>
              {/* <Text style={style.headerPostsValue}>({postsCount})</Text> */}
            </View>
            <View style={style.headerMenu}>
              <TouchableOpacity
                style={style.headerMenuItem}
                activeOpacity={0.8}
              >
                <AntDesign name='plus' size={24} color={theme.colors.text} />
              </TouchableOpacity>
              <TouchableOpacity
                style={style.headerMenuItem}
                activeOpacity={0.8}
              >
                <AntDesign name='bars' size={24} color={theme.colors.text} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={style.postsOptions}>
            <TouchableOpacity 
              style={style.postsOption}
              onPress={
                () => setPostType(PostType.POSTS)
              }
              activeOpacity={0.8}
            >
              <Text style={[style.postsOptionText, {
                color: postType === PostType.POSTS ? THEME_COLORS.rose : THEME_COLORS.gray,
              }]}>Posts</Text>
              <Text style={[style.postsOptionValue, {
                color: postType === PostType.POSTS ? THEME_COLORS.gray2 : THEME_COLORS.gray,
              }]}>({postsCount})</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={style.postsOption}
              onPress={
                () => setPostType(PostType.REELS)
              }
              activeOpacity={0.8}
            >
              <Text style={[style.postsOptionText, {
                color: postType === PostType.REELS ? THEME_COLORS.rose : THEME_COLORS.gray,
              }]}>Rells</Text>
              <Text style={[style.postsOptionValue, {
                color: postType === PostType.REELS ? THEME_COLORS.gray2 : THEME_COLORS.gray,
              }]}>({reelsCount})</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={style.postsOption}
              onPress={
                () => setPostType(PostType.TAGGED)
              }
              activeOpacity={0.8}
            >
              <Text style={[style.postsOptionText, {
                color: postType === PostType.TAGGED ? THEME_COLORS.rose : THEME_COLORS.gray,
              }]}>Tagged</Text>
              <Text style={[style.postsOptionValue, {
                color: postType === PostType.TAGGED ? THEME_COLORS.gray2 : THEME_COLORS.gray,
              }]}>({taggedCount})</Text>
            </TouchableOpacity>
          </View>

          <View style={style.postsContainer}>
            {
              postType === PostType.POSTS ? (
                posts.map((post: any, index: number) => {return <PostComponent key={post.id} data={post} postsQut={posts.length} index={index + 1} />;})
              ) : postType === PostType.REELS ? (
                <Text>Reels</Text>
              ) : (
                <Text>Tagged</Text>
              )
            }
          </View>

        </View>
      </ScrollView>
    </View>
  );
}

function PostComponent({ data, postsQut, index }: any) {

  function isOdd(num: number) {
    return num % 2;
  }

  return (
    <View style={[style.post, 
      // postsQut === 1 ? {width: '100%'} : postsQut === 2 ? {width: '50%'} : postsQut === 3 ? {width: '33.3333%'} : {width: '50%'}
      // postsQut === index ? isOdd(index) === 0 ? {width: '50%'} : {width: '100%'} : {width: '50%'}
    ]}>
      {/* <View style={style.postHeader}>
        <View style={style.postUser}>
          <View style={style.postUserAvatar}>
            <Image style={style.postUserAvatarImage} source={{uri: data.user.avatar}} />
          </View>
          <View style={style.postUserInfo}>
            <Text style={style.postUserName}>{data.user.username}</Text>
            <Text style={style.postUserLocation}>{data.location}</Text>
          </View>
        </View>
        <TouchableOpacity
          style={style.postOptionButton}
          activeOpacity={0.8}
        >
          <AntDesign name='ellipsis1' size={24} color={theme.colors.text} />
        </TouchableOpacity>
      </View> */}
      <View style={style.postContent}>
        <Image style={style.postImage} source={{uri: data.image}} />
      </View>
      {/* <View style={style.postFooter}>
        <View style={style.postFooterActions}>
          <TouchableOpacity
            style={style.postAction}
            activeOpacity={0.8}
          >
            <AntDesign name='hearto' size={24} color={theme.colors.text} />
          </TouchableOpacity>
          <TouchableOpacity
            style={style.postAction}
            activeOpacity={0.8}
          >
            <AntDesign name='message1' size={24} color={theme.colors.text} />
          </TouchableOpacity>
          <TouchableOpacity
            style={style.postAction}
            activeOpacity={0.8}
          >
            <AntDesign name='sharealt' size={24} color={theme.colors.text} />
          </TouchableOpacity>
        </View>
        <View style={style.postFooterStats}>
          <Text style={style.postLikes}>{data.likes} likes</Text>
          <Text style={style.postComments}>{data.comments.length} comments</Text>
        </View>
        <View style={style.postCommentsContainer}>
          {data.comments.map((comment: any) => {
            return (
              <View style={style.postComment} key={comment.id}>
                <View style={style.postCommentUser}>
                  <Image style={style.postCommentUserAvatar} source={{uri: comment.user.avatar}} />
                </View>
                <View style={style.postCommentContent}>
                  <Text style={style.postCommentText}>{comment.text}</Text>
                </View>
              </View>
            );
          })}
        </View>
      </View> */}
    </View>
  );
}

const colorScheme = useColorScheme();
const theme = colorScheme === 'light' ? DarkTheme : DefaultTheme;

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  profile: {
    position: 'relative',
    flex: 1,
  },
  profileBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 200,
    borderRadius: 15,
    overflow: 'hidden',
  },
  profileBackgroundImage: {
    width: '100%',
    height: '100%',
  },
  profileContainer: {
    marginTop: 154,
    alignItems: 'center',
    gap: 14,
  },
  profileContent: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    zIndex: 1,
  },
  profileInfoStats: {
    flex: 0.5,
    marginTop: 53,
  },
  profileInfoStatsContent: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 6,
  },
  profileInfoStatsValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.colors.text,
  },
  profileInfoStatsText: {
    fontSize: 16,
    color: theme.colors.text,
  },
  profileInfo: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  profileAvatar: {
    position: 'relative',
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  profileAvatarBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 20,
  },
  profileAvatarImage: {
    width: 100 - 8,
    height: 100 - 8,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: THEME_COLORS.dark,
  },
  profileInfoInfoContent: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 6,
    marginTop: 10,
  },
  profileInfoName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.colors.text,
  },
  profileInfoUsername: {
    paddingHorizontal: 10,
    paddingVertical: 2,
    backgroundColor: THEME_COLORS.black,
    borderRadius: 20,
  },
  profileInfoUsernameText: {
    fontSize: 16,
    color: THEME_COLORS.gray,
  },
  profileInfoBio: {
    fontSize: 16,
    color: theme.colors.text,
  },
  profileMenuOptions: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  profileMenuOption: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: THEME_COLORS.black,
  },
  profileOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    marginTop: 20,
    paddingHorizontal: 40,
  },
  profileOption: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    borderRadius: 20,
    backgroundColor: THEME_COLORS.black,
  },
  profileOptionBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 20,
  },
  profileOptionText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.colors.text,
  },

  profileBody: {
    flex: 1,
    paddingVertical: 30,
  },
  header: {
    paddingHorizontal: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // paddingVertical: 4,
    // borderTopWidth: 1,
    // borderBottomWidth: 1,
    // borderColor: THEME_COLORS.black,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    color: theme.colors.text,
  },
  headerPostsValue: {
    marginTop: 2,
    marginLeft: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: THEME_COLORS.gray,
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
    backgroundColor: THEME_COLORS.black,
  },

  postsOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    borderBottomWidth: 1,
    borderColor: THEME_COLORS.black,
  },
  postsOption: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 2,
    paddingVertical: 10,
    // backgroundColor: THEME_COLORS.black,
  },
  postsOptionText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.colors.text,
  },
  postsOptionValue: {
    fontSize: 12,
    color: THEME_COLORS.gray,
  },

  postsContainer: {
    flex: 1,
    flexDirection: 'row',
    flexShrink: 1,
    flexWrap: 'wrap',
    // paddingHorizontal: 15,
    marginTop: 2,
  },
  post: {
    width: '50%',
    height: 200,
    borderWidth: 0.5,
    borderColor: THEME_COLORS.dark,
  },
  postContent: {
    width: '100%',
    height: '100%',
    // borderRadius: 15,
    overflow: 'hidden',
  },
  postImage: {
    width: '100%',
    height: '100%',
  },

});
