import { View, Text, StyleSheet } from "react-native";
import React from "react";
import RNPickerSelect from "react-native-picker-select";

interface Props {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  label?: string;
  items: { label: string; value: string }[];
}

export default function SelectInput({ onChange, placeholder, value, label, items }: Props) {
  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.pickerContainer}>
        <RNPickerSelect
          onValueChange={onChange}
          items={items}
          placeholder={{ label: placeholder, value: null, disabled: true }}
          style={pickerSelectStyles}
          value={value}
          useNativeAndroidPickerStyle={false} // 🔥 Garante que o estilo personalizado seja aplicado
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    color: "#fff",
    fontWeight: "500",
    marginBottom: 6,
    fontSize: 16,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 8,
    height: 48,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
});

const pickerSelectStyles = {
  inputIOS: {
    fontSize: 18,
    color: "#fff",
    paddingVertical: 10,
  },
  inputAndroid: {
    fontSize: 18,
    color: "#fff",
    paddingVertical: 12, 
  },
  placeholder: {
    color: "#fff",
    fontSize: 18,
  },
};
