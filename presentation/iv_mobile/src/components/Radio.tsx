import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface Props {
  value: boolean;
  onChange: (value: boolean) => void;
}

export default function Radio({value, onChange}: Props) {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
      <TouchableOpacity onPress={() => onChange(true)}>
        <View style={{flexDirection: "row", alignItems: "center", gap: 8}}>
            <View style={{height: 20, width: 20, backgroundColor: value ? "#fff" : "transparent", borderRadius: 20, borderWidth: 1, borderColor: "#fff"}}></View>
          <Text style={{color: "#fff", fontSize: 18, fontWeight: 900}}>Sim</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onChange(false)}>
        <View style={{flexDirection: "row", alignItems: "center", gap: 8}}>
            <View style={{height: 20, width: 20, backgroundColor: !value ? "#fff" : "transparent", borderRadius: 20, borderWidth: 1, borderColor: "#fff"}}></View>
          <Text style={{color: "#fff", fontSize: 18, fontWeight: 900}}>Não</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
