import * as React from "react";
import { Image } from "react-native";
import { IMAGE_HEIGHT } from "./constants";
import Animated from "react-native-reanimated";

const { Extrapolate, interpolate } = Animated;

export const AnimatedImage = props => {
  const { y } = props;

  const scale = interpolate(y, {
    inputRange: [0, 200],
    outputRange: [1, 0.75],
    extrapolate: Extrapolate.CLAMP
  });
  const blur = interpolate(y, {
    inputRange: [0, 200],
    outputRange: [0, 5],

    extrapolate: Extrapolate.CLAMP
  });

  const height = interpolate(y, {
    inputRange: [0, 200],
    outputRange: [IMAGE_HEIGHT, IMAGE_HEIGHT - 200],
    extrapolate: Extrapolate.CLAMP
  });
  return (
    <Animated.Image
      style={{
        height: height
      }}
      source={{
        uri:
          "https://d3apg4kltfbjjh.cloudfront.net/0158263e-700c-4ed0-9f9d-f1f09806f170/1561981654621/cover.jpeg"
      }}
      resizeMode={"cover"}
      blurRadius={blur}
      zIndex={100}
    />
  );
};
