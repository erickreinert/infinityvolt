import BackButton from "@/src/components/BackButton";
import Comment from "@/src/components/Comment";
import commentList from "@/src/mocks/commentList";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function CommentsScreen() {
  return (
    <View style={{ padding: 12, gap: 12 }}>
      <BackButton />
      {commentList.map((c) => {
        return <Comment comment={c} key={c.id} />;
      })}
    </View>
  );
}
