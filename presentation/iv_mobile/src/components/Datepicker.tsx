import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker"; // Importação do DateTimePicker

import moment from "moment";

interface Props {
  value: Date;
  label?: string;
  onChange: (value: Date) => void
}

export default function Datepicker({ value, label, onChange }: Props) {
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (selectedDate: Date | undefined) => {
    setShowDatePicker(false);
    if (selectedDate) {
      onChange(selectedDate);
    }
  };

  return (
    <View>
      {label && (
        <Text
          style={{
            color: "#fff",
            fontWeight: 500,
            marginBottom: 6,
            fontSize: 16,
          }}
        >
          {label}
        </Text>
      )}
      <TouchableOpacity
        onPress={() => setShowDatePicker(true)}
        style={{
          borderWidth: 1,
          borderColor: "#fff",
          borderRadius: 8,
          height: 48,
          justifyContent: "center",
          paddingHorizontal: 10,
        }}
      >
        <Text style={{ color: "#fff", fontSize: 18 }}>
          {moment(value).format("DD/MM/YYYY")}
        </Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={value}
          mode="date"
          display="default"
          onChange={(_, date) => handleDateChange(date)}
        />
      )}
    </View>
  );
}
