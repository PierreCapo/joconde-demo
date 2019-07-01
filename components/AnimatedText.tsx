import * as React from "react";
import { Image, Text, View } from "react-native";
import { LOREM } from "./constants";
import Animated from "react-native-reanimated";

const { interpolate, Extrapolate } = Animated;

export const AnimatedText = props => {
  const { y } = props;

  const translateY = interpolate(y, {
    inputRange: [0, 200, 400],
    outputRange: [0, 0, -200],
    extrapolate: Extrapolate.EXTEND
  });

  return (
    <Animated.View
      style={{
        padding: 16,
        transform: [{ translateY }]
      }}
    >
      <Text>
        start
        {LOREM}
        end
      </Text>
    </Animated.View>
  );
};
