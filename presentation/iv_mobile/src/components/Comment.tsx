import { StyleSheet, Text, View } from "react-native";
import { CommentType } from "../mocks/commentList";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

interface Props {
  comment: CommentType;
}

export default function Comment({ comment }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.commentInfoContainer}>
        <View style={styles.userIcon}>
          <MaterialCommunityIcons name="account" size={30} color="white" />
        </View>
        <View
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={styles.userName}>{comment.user}</Text>
            <View style={{ flexDirection: "row", gap: 4 }}>
              <Text style={styles.vehicleBrand}>{comment.vehicle.brand}</Text>
              <Text style={styles.vehicleModel}>{comment.vehicle.model}</Text>
            </View>
          </View>
          <View style={{ alignItems: "flex-end" }}>
            <View style={styles.ratingContainer}>
              {Array.from({ length: 5 }).map((_, index) => (
                <MaterialCommunityIcons
                  key={index}
                  name={index < comment.rating ? "star" : "star-outline"}
                  size={24}
                  color="#fff"
                />
              ))}
            </View>
            <Text style={styles.vehicleModel}>
              {comment.date.toLocaleDateString("pt-br")}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.commentContainer}>
        <Text style={styles.commentText}>{comment.comment}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 8
  },
  commentInfoContainer: {
    flexDirection: "row",
    gap: 12,
    width: "100%",
    display: "flex",
  },
  userName: {
    color: "#fff",
    fontSize: 18,
    fontWeight: 900,
  },
  userIcon: {
    backgroundColor: "#222222",
    padding: 8,
    borderRadius: 100,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  vehicleBrand: {
    fontWeight: 900,
    color: "#ccc",
    fontSize: 14,
  },
  vehicleModel: {
    color: "#ccc",
    fontSize: 14,
  },
  ratingContainer: {
    flexDirection: "row",
  },
  commentContainer: {
    borderRadius: 8, 
    padding: 8,
    backgroundColor: "#222222",
  },
  commentText: {
    color: "#fff",
  },
});
