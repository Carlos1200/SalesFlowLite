import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useThemeColor } from "@/hooks/useThemeColor";
import { formatDistanceToNow } from "date-fns";
import { StyleSheet, View } from "react-native";

export type LeadCardProps = {
    name: string;
    company: string;
    contact: string;
    createdAt: string; // ISO date string
};

export const LeadCard = ({
    name,
    company,
    contact,
    createdAt,
}: LeadCardProps) => {
    const backgroundColor = useThemeColor({}, "backgroundSecondary");
    const secondaryTextColor = useThemeColor({}, "textSecondary");
    return (
        <ThemedView style={[styles.card, { backgroundColor }]}>
            <View>
                <ThemedText style={styles.name}>{name}</ThemedText>
                <ThemedText style={{ color: secondaryTextColor }}>
                    {company}
                </ThemedText>
                <ThemedText style={{ color: secondaryTextColor }}>
                    {contact}
                </ThemedText>
            </View>
            <View style={styles.dateContainer}>
                <ThemedText style={{ color: secondaryTextColor }}>
                    Created
                </ThemedText>
                <ThemedText style={{ color: secondaryTextColor }}>
                    {formatDistanceToNow(new Date(createdAt), {
                        addSuffix: true,
                    })}
                </ThemedText>
            </View>
        </ThemedView>
    );
};

const styles = StyleSheet.create({
    card: {
        padding: 15,
        margin: 20,
        justifyContent: "space-between",
        flexDirection: "row",
        borderRadius: 15,
    },
    name: {
        fontSize: 18,
        fontWeight: "bold",
    },
    dateContainer: {
        alignItems: "flex-end",
    },
});
