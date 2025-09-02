import { useThemeColor } from "@/hooks/useThemeColor";
import { Ionicons } from "@expo/vector-icons";
import {
    StyleProp,
    StyleSheet,
    TextInput,
    type TextInputProps,
    View,
    ViewStyle,
} from "react-native";

export type ThemedTextInputProps = TextInputProps & {
    lightColor?: string;
    darkColor?: string;
    backgroundLightColor?: string;
    backgroundDarkColor?: string;
    isSearchBox?: boolean;
    searchContainerStyle?: StyleProp<ViewStyle>;
};

export function ThemedTextInput({
    style,
    searchContainerStyle,
    lightColor,
    darkColor,
    backgroundLightColor,
    backgroundDarkColor,
    isSearchBox = false,
    ...rest
}: ThemedTextInputProps) {
    const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");
    const backgroundColor = useThemeColor(
        { light: backgroundLightColor, dark: backgroundDarkColor },
        "backgroundSecondary"
    );
    const iconColor = useThemeColor(
        { light: backgroundLightColor, dark: backgroundDarkColor },
        "icon"
    );

    if (isSearchBox) {
        return (
            <View
                style={[
                    styles.searchContainer,
                    { backgroundColor },
                    searchContainerStyle,
                ]}
            >
                <Ionicons
                    name="search"
                    size={22}
                    style={[styles.icon, { color: iconColor }]}
                />
                <TextInput
                    style={[
                        styles.input,
                        { color, backgroundColor },
                        style,
                        {
                            flex: 1,
                            borderWidth: 0,
                            margin: 0,
                            paddingHorizontal: 0,
                        },
                    ]}
                    placeholderTextColor={color}
                    {...rest}
                />
            </View>
        );
    }

    return (
        <TextInput
            style={[styles.input, { color, backgroundColor }, style]}
            placeholderTextColor={color}
            {...rest}
        />
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderWidth: 0,
        margin: 20,
        paddingHorizontal: 10,
        borderRadius: 20,
    },
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 20,
        paddingHorizontal: 10,
        height: 40,
    },
    icon: {
        marginRight: 8,
    },
});
