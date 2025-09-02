import { ThemeButton } from "@/components/ThemeButton";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { ThemeFAB } from "@/components/ThemeFAB";
import { ThemedTextInput } from "@/components/ThemeTextInput";
import { LeadCard } from "@/components/ui/Leads/LeadCard";
import { stages } from "@/constants/LeadsList";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FlatList, StyleSheet } from "react-native";

export default function HomeScreen() {
    const [selectedFilter, setSelectedFilter] = useState("1");
    const { t } = useTranslation();
    return (
        <ThemedView style={{ flex: 1 }}>
            <ThemedText style={styles.title}>{t("leads.title")}</ThemedText>
            <ThemedTextInput
                searchContainerStyle={styles.inputContainer}
                placeholder={t("leads.searchPlaceholder")}
                isSearchBox
            />
            <ThemedView style={styles.filterList}>
                <FlatList
                    data={stages}
                    renderItem={({ item }) => (
                        <ThemeButton
                            title={t(`leads.filter.${item.nameKey}`)}
                            style={styles.filterButton}
                            textStyles={styles.filterButtonText}
                            isSelected={selectedFilter === item.id}
                            onPress={() => setSelectedFilter(item.id)}
                        />
                    )}
                    keyExtractor={(item) => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.filterListItem}
                />
            </ThemedView>
            <LeadCard
                name="John Doe"
                company="Acme Corp"
                contact="john.doe@example.com"
                createdAt="2023-03-15T12:00:00Z"
            />
            <ThemeFAB icon="add" onPress={() => {}} />
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: "bold",
        marginLeft: 20,
    },
    inputContainer: {
        marginTop: 20,
        marginHorizontal: 20,
    },
    filterList: {
        height: 35,
        marginHorizontal: 20,
        marginTop: 25,
    },
    filterListItem: {
        gap: 10,
    },
    filterButton: {
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 20,
    },
    filterButtonText: {
        fontSize: 12,
        fontWeight: "600",
    },
});
