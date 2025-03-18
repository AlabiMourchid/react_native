import { Entypo } from "@expo/vector-icons";
import { TouchableOpacity, StyleSheet,Text } from "react-native";

export default function TranslateComponent() {
    return(
        <TouchableOpacity style={styles.languageButton}>
            <Entypo name="language" size={14} color="#6c757d" style={{marginEnd: 5}} />
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
        flexDirection: 'row'
      },
    
      languageButtonText: {
        fontSize: 12,
        color: "#333",
      },
});