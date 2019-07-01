import React from "react";
import { StyleSheet, Dimensions, View } from "react-native";
import { AnimatedImage } from "./components/AnimatedImage";
import { AnimatedText } from "./components/AnimatedText";
import { onScroll } from "react-native-redash";

import Animated from "react-native-reanimated";

export const App = () => {
  const y = new Animated.Value(0);
  const [textHeight, setTextHeight] = React.useState(0);

  return (
    <>
      <View style={{ flexDirection: "column-reverse" }}>
        <AnimatedText y={y} setTextHeight={setTextHeight} />
        <AnimatedImage y={y} />
      </View>
      {textHeight ? (
        <Animated.ScrollView
          style={{ ...StyleSheet.absoluteFill, zIndex: 101 }}
          contentContainerStyle={{
            height: Dimensions.get("screen").height + textHeight
          }}
          scrollEventThrottle={16}
          onScroll={onScroll({ y })}
        />
      ) : null}
    </>
  );
};
