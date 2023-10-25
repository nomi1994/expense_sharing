import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Appbar = ({
  title,
  onMenuPress,
  onProfilePress,
  onNotificationPress,
}) => {
  return (
    <View style={styles.appBar}>
      <TouchableOpacity style={styles.menuButton} onPress={onMenuPress}>
        <Ionicons name="menu-outline" size={24} color="#000000" />
      </TouchableOpacity>
      <Text style={styles.appTitle}>{title}</Text>
      <TouchableOpacity style={styles.profileButton} onPress={onProfilePress}>
        <Ionicons name="person-outline" size={24} color="#000000" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.notificationButton}
        onPress={onNotificationPress}>
        <Ionicons name="notifications-outline" size={24} color="#000000" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  appBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    height: 56,
    backgroundColor: "#ffffff",
    elevation: 2,
    marginBottom: 16,
  },
  menuButton: {
    marginRight: 8,
  },
  appTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  profileButton: {
    marginLeft: 8,
  },
  notificationButton: {
    marginLeft: 8,
  },
});

export default Appbar;
