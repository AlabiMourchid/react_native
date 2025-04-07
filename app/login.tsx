import React, { useContext, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, Linking, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import TranslateComponent from "./translate";
import { router } from "expo-router";
import { AuthContext } from "./hooks/useAuth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const authContext = useContext(AuthContext);
  

  const handleLogin = async () => {
    try {
      await authContext?.loginUser(email, password);
      Alert.alert('Connexion réussie !');
      router.replace('/home');
    } catch (error) { 
      console.error("Erreur lors de la connexion");
    }
  };


  return (
    
    <View style={styles.container}>
      <TranslateComponent />

      <Text style={styles.title}>Content de vous revoir !</Text>
      <View style={{height: 20}} />
      <Text style={styles.subtitle}>
        Veuillez renseigner vos informations d'identification afin d'accéder à la plateforme.
      </Text>

      <Text style={{fontSize: 15, marginBottom: 10}}>E-mail</Text>
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

      <Text style={{fontSize: 15, marginBottom: 10}}>Mot de passe</Text>
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

      <TouchableOpacity style={{justifyContent: 'space-between'}}>
        <Text style={styles.forgotPassword}>Mot de passe oublié ?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleLogin} >
        <Text style={styles.buttonText}>Connexion</Text>
      </TouchableOpacity>

      <Text style={styles.termsText}>
        En utilisant cette application, vous acceptez nos{" "}
        <Text style={styles.linkText}>
          conditions générales d'utilisation
        </Text>
      </Text>

      <TouchableOpacity style={[styles.button, styles.signUpButton]} onPress={()=> router.push('/home')}>
        <Text style={[styles.buttonText, { color: "#FF6A00" }]}>Creer un compte</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop:40,
    justifyContent: "center",
    alignItems: "flex-start",
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
    lineHeight: 25,
    marginBottom: 20,
    color: "grey",
  },

  inputContainer: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    borderColor: "#ccc",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5
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
    marginBottom: 20
  },

  buttonText: {
    color: "white",
    fontSize: 14,
  },

  forgotPassword: {
    color: "black",
    marginBottom: 20,
    fontWeight: "bold",
    left: 170
  },

  linkText: {
    color: "#FF6A00",
    marginTop: 20,
    textDecorationLine: "underline",
  },

  termsText: {
    fontSize: 12,
    marginTop: 10,
    marginBottom: 30,
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