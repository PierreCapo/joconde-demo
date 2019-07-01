import React from "react";
import { StyleSheet, View, ScrollView, Image } from "react-native";
import { AnimatedImage } from "./components/AnimatedImage";
import { AnimatedText } from "./components/AnimatedText";
import { onScroll } from "react-native-redash";

import Animated from "react-native-reanimated";

const { event, Value, add, interpolate, Extrapolate, multiply } = Animated;

export const App = () => {
  const y = new Animated.Value(0);

  const translateY = interpolate(y, {
    inputRange: [0, 200],
    outputRange: [0, -200],
    extrapolate: Extrapolate.CLAMP
  });
  return (
    <>
      <AnimatedImage y={y} />

      <AnimatedText y={y} />
      <Animated.ScrollView
        style={{ ...StyleSheet.absoluteFill }}
        contentContainerStyle={{ height: 2000 }}
        scrollEventThrottle={16}
        onScroll={onScroll({ y })}
      />
    </>
  );
};
