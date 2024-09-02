import { View } from "react-native";

const ReusableHeader = (props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        backgroundColor: props.backgroundColor || "yellow",
        alignItems: "center",
        paddingVertical: props.paddingVertical || 0,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
        {props.leftSideComponent}
      </View>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
        {props.rightSideComponent}
      </View>
    </View>
  );
};

export default ReusableHeader;
