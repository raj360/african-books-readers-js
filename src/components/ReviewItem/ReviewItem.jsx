import React from 'react';
import { Rating } from 'react-native-ratings';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './ReviewItem.styles';

function Review({ route }) {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Image style={styles.image} source={require('assets/images/presignup-one.png')} />

        <View style={{ paddingTop: 10 }}>
          <Text style={styles.title}>A Girl is a body of lies</Text>
          <Text style={styles.author}>Jeniffer Nansubuga</Text>
          <View style={styles.rating} pointerEvents="none">
            <Rating
              style={{ alignSelf: 'flex-start', paddingTop: 2 }}
              ratingCount={5}
              imageSize={10}
              count={4}
            />
            <Text style={styles.reviews}>248</Text>
            <Text style={styles.reviews}>Reviews</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default Review;
