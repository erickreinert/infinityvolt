import { View, Text, TextInput } from "react-native";
import React from "react";

interface Props {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  label?: string,
  onPress?: () => void
  editable?: boolean,
  email?: boolean
  password?: boolean
  number?: boolean
}

export default function Input({ onChange, placeholder, value, label, onPress, editable, email, number, password }: Props) {
  const keyboardType = email ? "email-address" : number ? "numeric" : "default";
  const secureTextEntry = password || false;

  return (
    <View>
      {label && <Text style={{color: "#fff", fontWeight: 500, marginBottom: 6, fontSize: 16}}>{label}</Text>}
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChange}
        editable={editable}
        onPressIn={onPress}
        placeholderTextColor="#fff"
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        style={{
          borderWidth: 1,
          borderColor: "#fff",
          borderRadius: 8,
          color: "#fff",
          fontSize: 18,
          paddingHorizontal: 10,
        }}
      />
    </View>
  );
}
