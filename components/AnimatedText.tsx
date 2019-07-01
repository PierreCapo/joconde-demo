import * as React from "react";
import { Text, View } from "react-native";
import { LOREM } from "./constants";
import Animated from "react-native-reanimated";
import { DIFF_IMAGE_HEIGHT } from "./constants";

const { interpolate, Extrapolate } = Animated;

export const AnimatedText = props => {
  const { y, setTextHeight } = props;

  const translateY = interpolate(y, {
    inputRange: [0, DIFF_IMAGE_HEIGHT, DIFF_IMAGE_HEIGHT + 100],
    outputRange: [0, 0, -100],
    extrapolate: Extrapolate.EXTEND
  });

  return (
    <Animated.View
      style={{
        padding: 16,
        transform: [{ translateY }]
      }}
    >
      <View
        onLayout={event => {
          setTextHeight(event.nativeEvent.layout.height);
        }}
      >
        <Text>
          start
          {LOREM}
          end
        </Text>
      </View>
    </Animated.View>
  );
};
