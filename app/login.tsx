import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, Linking, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import TranslateComponent from "./translate";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  

  return (
    <View style={styles.container}>
      <TranslateComponent />

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

      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Mot de passe oublié ?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Connexion</Text>
      </TouchableOpacity>

      <Text style={styles.termsText}>
        En utilisant cette application, vous acceptez nos{" "}
        <Text style={styles.linkText}>
          conditions générales d'utilisation
        </Text>
      </Text>

      <TouchableOpacity style={[styles.button, styles.signUpButton]}>
        <Text style={[styles.buttonText, { color: "#FF6A00" }]}>Creer un compte</Text>
      </TouchableOpacity>

      <View style={styles.logo}>
        <Image source={require('../assets/images/logo_icon_primary.png')} />
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
    backgroundColor: "#FF6A00",
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
    color: "#FF6A00",
    marginTop: 20,
    textDecorationLine: "underline",
  },

  termsText: {
    fontSize: 12,
    marginTop: 10,
    marginBottom: 20,
    color: "grey",
    textAlign: "center",
  },

  signUpButton: {
    borderWidth: 1,
    borderColor: "#FF6A00",
    backgroundColor: "white",
  },
});

export default Login;