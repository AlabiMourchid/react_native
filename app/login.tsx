import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, Linking, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleLogin = () => {
    Alert.alert("Connexion réussie");
  };
  const handleLanguageChange = () => {
    Alert.alert("Changer la langue", "Langue changée !");
  };

  const openTerms = () => {
    Linking.openURL("https://www.cgu.com");
  };

  const handleForgotPassword = () => {
    Alert.alert("Réinitialisation", "Lien de réinitialisation envoyé à votre email.");
  };

  const handleSignUp = () => {
    Alert.alert("Créer un compte", "Redirection vers la page d'inscription...");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.languageButton} onPress={handleLanguageChange}>
        <Text style={styles.languageButtonText}>Français</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Content de vous revoir!</Text>
      <Text style={styles.subtitle}>
        Veuillez renseigner vos informations d'identification afin d'accéder à la plateforme.
      </Text>

      <View style={styles.inputContainer}>
        <FontAwesome name="envelope" size={20} color="#666" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Adresse email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.inputContainer}>
        <FontAwesome name="lock" size={20} color="#666" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          secureTextEntry={!passwordVisible}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
          <FontAwesome
            name={passwordVisible ? "eye" : "eye-slash"}
            size={20}
            color="#666"
            style={styles.eyeIcon}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.forgotPassword}>Mot de passe oublié ?</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Connexion</Text>
      </TouchableOpacity>

      <Text style={styles.termsText}>
        En utilisant cette application, vous acceptez nos{" "}
        <Text style={styles.linkText} onPress={openTerms}>
          conditions générales d'utilisation
        </Text>
      </Text>

      <TouchableOpacity onPress={handleSignUp} style={[styles.button, styles.signUpButton]}>
        <Text style={[styles.buttonText, { color: "orange" }]}>Creer un compte</Text>
      </TouchableOpacity>

      <View style={styles.logo}>
        <Image source={require('../assets/images/logo.png')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    
  },

  eyeIcon: {
    padding: 10,
  },

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

  title: {
    fontSize: 28,
    marginBottom: 5,
    fontWeight: "bold",
  },

  subtitle: {
    fontSize: 14,
    marginBottom: 20,
  },

  inputContainer: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    borderColor: "#ccc",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },

  icon: {
    marginRight: 10,
  },

  input: {
    flex: 1,
    padding: 12,
  },

  button: {
    padding: 12,
    width: "100%",
    borderRadius: 8,
    alignItems: "center",
    backgroundColor: "orange",
  },

  buttonText: {
    color: "white",
    fontSize: 14,
  },

  forgotPassword: {
    left: 85,
    color: "black",
    marginBottom: 20,
    fontWeight: "bold",
  },

  linkText: {
    color: "orange",
    marginTop: 20,
    textDecorationLine: "underline",
  },

  termsText: {
    fontSize: 12,
    marginTop: 10,
    marginBottom: 20,
    color: "#555",
    textAlign: "center",
  },

  signUpButton: {
    borderWidth: 1,
    borderColor: "orange",
    backgroundColor: "white",
  },
});

export default Login;