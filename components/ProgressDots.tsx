// components/ProgressDots.tsx
import Colors from "@/constants/Colors";
import { StyleSheet, View } from "react-native";

interface Props {
  total: number;
  current: number;
}

export default function ProgressDots({ total, current }: Props) {
  return (
    <View style={styles.container}>
      {Array.from({ length: total }, (_, index) => (
        <View
          key={index}
          style={[
            styles.dot,
            index === current - 1 ? styles.activeDot : styles.inactiveDot,
          ]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  activeDot: {
    backgroundColor: Colors.accent,
  },
  inactiveDot: {
    backgroundColor: "#ccc",
  },
});
