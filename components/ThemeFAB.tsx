import { useThemeColor } from "@/hooks/useThemeColor";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity, ViewStyle } from "react-native";

type ThemeFABProps = {
    icon?: keyof typeof Ionicons.glyphMap;
    onPress: () => void;
    style?: ViewStyle;
    lightColor?: string;
    darkColor?: string;
};

export function ThemeFAB({
    icon = "add",
    onPress,
    style,
    lightColor,
    darkColor,
}: ThemeFABProps) {
    const backgroundColor = useThemeColor(
        { light: lightColor, dark: darkColor },
        "background"
    );
    const iconColor = useThemeColor({}, "text");

    return (
        <TouchableOpacity
            style={[styles.fab, { backgroundColor }, style]}
            onPress={onPress}
            activeOpacity={0.7}
        >
            <Ionicons name={icon} size={28} color={iconColor} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    fab: {
        position: "absolute",
        right: 24,
        bottom: 24,
        width: 56,
        height: 56,
        borderRadius: 28,
        alignItems: "center",
        justifyContent: "center",
        elevation: 4,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
});
