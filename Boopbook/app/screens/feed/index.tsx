import React from 'react';
import { NativeModules, ScrollView, StyleSheet, View } from 'react-native';

import PostComponent from '@/app/components/post';
import TimelineConponent from '../../components/timeline';

export default function FeedScreen() {
  
  // const [ posts, setPosts ]: any = React.useState([]);

  const stories = [
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
    {
      code: 3,
      avatar: 'https://architecture.ou.edu/wp-content/uploads/2018/07/ANGELAPERSON-1447-300x300.jpg',
      username: 'scott_hill',
      viewed: false,
    },
    {
      code: 4,
      avatar: 'https://www.wilsoncenter.org/sites/default/files/media/images/person/james-person-1.jpg?ww401834',
      username: 'andrew_ross',
      viewed: false,
    },
    {
      code: 5,
      avatar: 'https://media.licdn.com/dms/image/D4E03AQHjhSvdWPms8A/profile-displayphoto-shrink_800_800/0/1686995323144?e=2147483647&v=beta&t=DViJCzGnEWwF1Jos89sN9hADIWBjZ2mkwDaHN_P-Dfc',
      username: 'arthur_wood',
      viewed: false,
    },
    {
      code: 6,
      avatar: 'https://schoolsweek.co.uk/wp-content/uploads/2023/09/Gillian-Keegan-feat-blue.jpg',
      username: 'sarah_ashcroft',
      viewed: false,
    },
    {
      code: 7,
      avatar: 'https://www.telegraph.co.uk/content/dam/royal-family/2022/11/28/TELEMMGLPICT000317879575_trans_NvBQzQNjv4BqA7N2CxnJWnYI3tCbVBgu9T0aesusvN1TE7a0ddd_esI.jpeg?imwidth=680',
      username: 'james_smith',
      viewed: false,
    },
    {
      code: 8,
      avatar: 'https://www.jordanharbinger.com/wp-content/uploads/2018/09/be-the-most-interesting-360x360.jpg',
      username: 'john_doe',
      viewed: false,
    },
    {
      code: 9,
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
      username: 'jane_doe',
      viewed: false,
    },
    {
      code: 10,
      avatar: 'https://t3.ftcdn.net/jpg/03/02/88/46/360_F_302884605_actpipOdPOQHDTnFtp4zg4RtlWzhOASp.jpg',
      username: 'gabriel_mart',
      viewed: false,
    },
    {
      code: 11,
      avatar: 'https://www.maklarsamfundet.se/sites/default/files/styles/large_w760/public/2019-11/nyhet_emil_cargill_ek.jpg?itok=uBdXw7Nq',
      username: 'robert_wood',
      viewed: false,
    },
  ];

  const posts = [
    {
      id: 1,
      user: {
        id: 1,
        username: 'devin_smith',
        avatar: 'https://engineering.unl.edu/images/staff/Kayla-Person.jpg',
        hasStory: false,
      },
      description: 'This is a post description This is a post description',
      createdAt: '2021-09-01T12:00:00Z',
      image: 'https://www.babbelforbusiness.com/wp-content/uploads/2020/01/new-work-less-work-warum-die-30-stunden-woche-langst-uberfallig-ist2.jpeg',
      comments: [
      ],
      shares: [
      ],
    },
    {
      id: 2,
      user: {
        id: 3,
        username: 'gabriel_mart',
        avatar: 'https://t3.ftcdn.net/jpg/03/02/88/46/360_F_302884605_actpipOdPOQHDTnFtp4zg4RtlWzhOASp.jpg',
        hasStory: true,
      },
      description: 'This is a post description This is a post description',
      createdAt: '2021-09-01T12:00:00Z',
      image: 'https://hips.hearstapps.com/hmg-prod/images/colors-of-italy-series-manarola-village-cinque-royalty-free-image-1622081263.jpg',
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
      user: {
        id: 2,
        username: 'keren_rose',
        avatar: 'https://www.georgetown.edu/wp-content/uploads/2022/02/Jkramerheadshot-scaled-e1645036825432-1050x1050-c-default.jpg',
        hasStory: true,
      },
      description: 'This is a post description This is a post description',
      createdAt: '2021-09-01T12:00:00Z',
      image: 'https://www.henkel.de/resource/image/1617034/1x1/1600/1600/5a8c32e8fb146d89e9da44af44ec2f0/9F2701963C7456C71D343BD2A2739F24/spotlight-new-work-stage.webp',
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

  const comments = [
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
  ];

  const { StatusBarManager } = NativeModules;

  const [ STATUSBAR_HEIGHT, setSTATUSBAR_HEIGHT ] = React.useState(0);

  StatusBarManager.getHeight((statusBarHeight: any) => {
    setSTATUSBAR_HEIGHT(statusBarHeight.height);
  });

  return (
    <View style={[style.container, {paddingTop: STATUSBAR_HEIGHT}]}>
      <ScrollView 
        style={{flex: 1, paddingTop: 10}} 
        showsVerticalScrollIndicator={false}
      >
        <TimelineConponent data={stories} />
        <View style={style.postsContainer}>
          {posts.map((post: any) => {return <PostComponent key={post.id} comments={comments} data={post} />;})}
        </View>
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  postsContainer: {
    flex: 1,
    paddingHorizontal: 15,
    marginTop: 30,
  },
});
