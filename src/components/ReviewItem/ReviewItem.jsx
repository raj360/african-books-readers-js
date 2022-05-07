import React from 'react';
import { Rating } from 'react-native-ratings';
import { View, Image, TouchableOpacity } from 'react-native';
import Text from 'components/Text';
import styles from './ReviewItem.styles';

function Review({ title, author, rating, reviews, imageUrl }) {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Image style={styles.image} source={imageUrl} />

        <View style={{ paddingTop: 10 }}>
          <Text numberOfLines={1} style={styles.title}>
            {title}
          </Text>
          <Text numberOfLines={1} style={styles.author}>
            {author}
          </Text>
          <View style={styles.rating} pointerEvents="none">
            <Rating
              style={{
                alignSelf: 'flex-start',
                paddingTop: 2,
                paddingRight: 5,
              }}
              ratingCount={5}
              startingValue={rating}
              imageSize={10}
            />
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
                paddingHorizontal: 7,
                justifyContent: 'space-between',
                alignSelf: 'flex-end',
              }}
            >
              <Text style={styles.reviews}>{reviews}</Text>
              <Text style={styles.reviews}>Reviews</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default Review;
