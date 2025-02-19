import { ImageBackground, View } from "react-native";

interface Props {
    imagePath: any
}

export default function Thumbnail({imagePath}: Props) {
  return (
    <View style={{width: 86, height: 86, borderRadius: 12, overflow: "hidden"}}>
      <ImageBackground
        source={imagePath}
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
