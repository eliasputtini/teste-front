import { Text, View, Line } from "./styles.js";
import React from "react";

function Title({ text }) {
  return (
    <View>
      <Line />
      <Text>{text}</Text>
    </View>
  );
}

export default Title;
