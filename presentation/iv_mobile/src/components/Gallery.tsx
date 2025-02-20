import React from "react";
import { ImageBackground, View } from "react-native";

interface Props {
  imageList: any[];
}

export default function Gallery({ imageList }: Props) {
  return (
    <View style={{width: "100%", height: 175}}>
      <ImageBackground
        source={imageList[0]}
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
        resizeMode="cover"
      ></ImageBackground>
    </View>
  );
}
