import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, Linking } from "react-native";
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
      <Text style={styles.languageButtonText}>EN/FR</Text>
    </TouchableOpacity>
  
      <Text style={styles.title}>Content de vous revoir!</Text>
      <Text style={styles.subtitle}>
        Veuillez renseigner vos informations d'identification afin d'accéder à la plateforme.
      </Text>

      <View style={styles.inputContainer}>
        <FontAwesome name="envelope" size={20} color="#666" style={styles.icon} />
        <TextInput
          style={styles.input} placeholder="Adresse email" keyboardType="email-address" value={email}  onChangeText={setEmail} />
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
    </View>

    
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center",
    padding: 20 },

   
      eyeIcon: {
        padding: 10, 
      },

       
        languageButton: {
          position: "absolute",
          top: 20,
          right: 20,
          paddingHorizontal: 10,
          paddingVertical: 5,
          borderWidth: 1,
          borderColor: "#333", 
          borderRadius: 5,
        },
        languageButtonText: {
          fontSize: 14,
          color: "#333", 
        },

  title: { 
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center" 
      },

  subtitle: {
    fontSize: 16, 
    textAlign: "center",
    marginBottom: 20 
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderColor: "#ccc",
  },
  icon: {
    marginRight: 10 
    },

  input: {
    flex: 1,
    padding: 12 
    },

  button: {
    backgroundColor: "orange", 
    padding: 12,
    borderRadius: 8, 
    width: "100%",
    alignItems: "center",
    marginVertical: 5 
    },

  buttonText: { 
    color: "white", 
    fontSize: 16 
  },
  
  forgotPassword: { 
    alignSelf: "flex-end",
    color: "black",
    marginBottom: 10,
    fontWeight: "bold",
    textDecorationLine: "underline"
  },

  linkText: {
    color: "orange", 
    textDecorationLine: "underline" 
    },

  termsText: {
    fontSize: 14, 
    textAlign: "center", 
    marginTop: 10, 
    color: "#555" 
    },

  signUpButton: {
    backgroundColor: "white",
    borderWidth: 1, 
    borderColor: "orange" },
});

export default Login;
