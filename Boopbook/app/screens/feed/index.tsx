import { ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';

import PostComponent from '@/app/components/post';
import TimelineConponent from '../../components/timeline';

export default function FeedScreen() {
  
  const [ posts, setPosts ]: any = React.useState([]);

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
  ]

  const data = [
    {
      id: 1,
      user: {
        id: 1,
        name: 'Devin Smith',
        username: 'devin_smith',
        avatar: 'https://engineering.unl.edu/images/staff/Kayla-Person.jpg',
        hasStory: false,
      },
      description: 'This is a post description This is a post description',
      createdAt: '2021-09-01T12:00:00Z',
      image: 'https://www.babbelforbusiness.com/wp-content/uploads/2020/01/new-work-less-work-warum-die-30-stunden-woche-langst-uberfallig-ist2.jpeg',
    },
    {
      id: 2,
      user: {
        id: 2,
        name: 'Keren Rose',
        username: 'keren_rose',
        avatar: 'https://www.georgetown.edu/wp-content/uploads/2022/02/Jkramerheadshot-scaled-e1645036825432-1050x1050-c-default.jpg',
        hasStory: true,
      },
      description: 'This is a post description This is a post description',
      createdAt: '2021-09-01T12:00:00Z',
      image: 'https://www.henkel.de/resource/image/1617034/1x1/1600/1600/5a8c32e8fb146d89e9da44af44ec2f0/9F2701963C7456C71D343BD2A2739F24/spotlight-new-work-stage.webp',
    },
  ]

  return (
    <View style={style.container}>
      <ScrollView 
        style={{flex: 1}} 
        showsVerticalScrollIndicator={false}
      >
        <TimelineConponent />
        <View style={style.postsContainer}>
          {data.map(post => {return <PostComponent comments={comments} data={post} />;})}
        </View>
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  postsContainer: {
    flex: 1,
    paddingHorizontal: 15,
    marginTop: 30,
  },
});
