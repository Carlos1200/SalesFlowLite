import { useThemeColor } from "@/hooks/useThemeColor";
import {
    StyleProp,
    StyleSheet,
    Text,
    TextStyle,
    TouchableOpacity,
    type TouchableOpacityProps,
} from "react-native";

export type ThemeButtonProps = TouchableOpacityProps & {
    title: string;
    lightColor?: string;
    darkColor?: string;
    textLightColor?: string;
    textDarkColor?: string;
    textStyles?: StyleProp<TextStyle>;
    isSelected?: boolean;
};

export function ThemeButton({
    title,
    style,
    lightColor,
    darkColor,
    textLightColor,
    textDarkColor,
    textStyles,
    isSelected = false,
    ...rest
}: ThemeButtonProps) {
    const backgroundColor = useThemeColor(
        { light: lightColor, dark: darkColor },
        "backgroundSecondary"
    );
    const textColor = useThemeColor(
        { light: textLightColor, dark: textDarkColor },
        "textSecondary"
    );

    const textPrimaryColor = useThemeColor(
        { light: textLightColor, dark: textDarkColor },
        "text"
    );

    return (
        <TouchableOpacity
            style={[
                styles.button,
                {
                    backgroundColor: isSelected
                        ? "transparent"
                        : backgroundColor,
                },
                style,
            ]}
            {...rest}
        >
            <Text
                style={[
                    styles.text,
                    { color: isSelected ? textPrimaryColor : textColor },
                    textStyles,
                ]}
            >
                {title}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 16,
        fontWeight: "bold",
    },
});
