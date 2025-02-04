import { Link } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Props {
  title: string;
  variant?: "button" | "link";
  onClick?: () => void;
  href?: string;
}

export default function Button({
  title,
  onClick,
  variant = "button",
  href,
}: Props) {
  if (variant === "button" && onClick) {
    return (
      <TouchableOpacity onPress={onClick} style={styles.button}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    );
  } else if (variant === "link" && href) {
    return (
      <Link href={href} style={styles.link}>
        <Text style={styles.linkText}>{title}</Text>
      </Link>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#004aad",
    padding: 10,
    borderRadius: 12,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: 900,
    fontSize: 18,
  },
  link: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "#fff",
  },
  linkText: {
    color: "#fff",
    textDecorationLine: "underline",
    textAlign: "center",
    fontSize: 16
  }
});
