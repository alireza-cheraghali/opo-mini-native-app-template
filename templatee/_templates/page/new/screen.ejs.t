---
to: screens/<%= h.changeCase.pascalCase(name) %>.tsx
---
import React from "react";
import { Text, View } from "react-native";

const <%= h.changeCase.pascalCase(name) %> = () => {
  return (
    <View>
      <Text>
      <%= name%>
      </Text>
    </View>
  );
};

export default <%= h.changeCase.pascalCase(name) %>;



