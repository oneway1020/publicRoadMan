import React from 'react';
import {StyleSheet, useWindowDimensions, Image, Pressable} from 'react-native';
import {useNavigation, useNavigationState} from '@react-navigation/native';

function PostGirdItem({post}) {
  const dimensions = useWindowDimensions();
  const size = (dimensions.width - 3) / 3;
  const navigation = useNavigation();
  const routeNames = useNavigationState(state => state.routeNames);

  const onPress = () => {
    navigation.navigate('Post', {post});
    console.log(routeNames);
  };

  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        {
          opacity: pressed ? 0.6 : 1,
          width: size,
          height: size,
        },
        styles.block,
      ]}>
      <Image
        style={styles.image}
        source={{uri: post.photoURL}}
        resizeMethod="resize"
        resizeMode="cover"
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  block: {margin: 0.5},
  image: {
    backgroundColor: '#bdbdbd',
    width: '100%',
    height: '100%',
  },
});

export default PostGirdItem;
