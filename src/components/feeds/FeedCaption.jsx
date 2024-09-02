import React, { useState } from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";

const FeedCaption = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.username}>
        {props.item.username}{" "}
        <Text
          numberOfLines={isExpanded ? undefined : 2}
          style={styles.caption}
        >
          {props.item.feed.caption}
        </Text>
        <TouchableOpacity
          style={styles.moreButton}
          onPress={handleToggleExpand}
        >
          <Text style={styles.moreText}>{isExpanded ? "less" : "more"}</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  username: {
    fontWeight: "bold",
  },
  caption: {
    fontWeight: "300",
  },
  moreButton: {
    alignItems: "center",
    backgroundColor: "pink",
    marginTop: 5, // Add some space between caption and "more" button
  },
  moreText: {
    textAlign: "center",
  },
});

export default FeedCaption;
