import { TouchableOpacity, StyleSheet,Text } from "react-native";

export default function TranslateComponent() {
    return(
        <TouchableOpacity style={styles.languageButton}>
            <Text style={styles.languageButtonText}>Français</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    languageButton: {
        position: "absolute",
        top: 30,
        right: 20,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#333",
        paddingVertical: 5,
        paddingHorizontal: 20,
      },
    
      languageButtonText: {
        fontSize: 12,
        color: "#333",
      },
});