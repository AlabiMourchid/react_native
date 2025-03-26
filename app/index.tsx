import React, { useState, useRef } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";
import PagerView from "react-native-pager-view";
import TranslateComponent from "./translate";
import { useRouter } from "expo-router";

const { width, height } = Dimensions.get("window");


export default function OnboardingPage() {
  const [currentPage, setCurrentPage] = useState(0);
  const pagerRef = useRef(null);
  const router = useRouter();

  const pages = [
    {
      image: require("../assets/images/sprites/suivi_icone.png"),
      title: "Suivi en temps réel de vos marchandises",
    },
    {
      image: require("../assets/images/sprites/truck_icone.png"),
      title: 'Gestion efficace de votre flotte de véhicules',
    },
    {
      image: require("../assets/images/sprites/cost_icone.png"),
      title: 'Coûts de transport de vos biens optimisés',
    },
  ];

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 20 }}>
      <View style={{ flex: 1, justifyContent: "space-around" }}>
        
        <TranslateComponent />
        
        <View style={{height: 30}} />
        <PagerView
          ref={pagerRef}
          style={{ height: height * 0.5, marginTop: 50, marginBottom: 10 }}
          initialPage={0}
          onPageSelected={(e) => setCurrentPage(e.nativeEvent.position)}
        >
          {pages.map((page, index) => (
            <View key={index} style={{ alignItems: "center", justifyContent: 'center' }}>
              <View
                style={styles.onboarding}
              >
                <Image source={page.image} style={styles.image} resizeMode="contain" />
              </View>
              <Text style={styles.text}>
                {page.title}
              </Text>
            </View>
          ))}
        </PagerView>
        
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          {pages.map((_, i) => (
            <TouchableOpacity
              key={i}
              style={{
                width: currentPage === i ? 40 : 10,
                height: 10,
                backgroundColor: currentPage === i ? "#FF6A00" : "grey",
                borderRadius: 10,
                marginHorizontal: 5,
              }}
            />
          ))}
        </View>
        
        <View style={styles.button} />
        <View>
          <Button mode="contained" style={{backgroundColor: "#FF6A00", borderRadius: 5}}>
            Créer un compte
          </Button>
          <View style={styles.button} />
          <Button mode="outlined" onPress={() => router.push('/login')}
           textColor="#FF6A00" style={{borderColor: "#FF6A00", borderRadius: 5}}> 
            Se connecter
          </Button>
          <View style={styles.button} />
          <TouchableOpacity>
            <Text style={{ textAlign: "center", color: "grey" }}>
              En continuant vous acceptez les
              <Text style={{color: "#FF6A00" }}> conditions générales d’utilisation</Text>
            </Text>
            
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  onboarding: {
    width: 215,
    height: 215,
    backgroundColor: "rgba(255, 106, 0, .1)",
    borderRadius: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  image : {
    width: 100, 
    height: 100
  },
  button : {
    height:30,
  },
  text : {
    fontSize: 25, 
    fontWeight: "bold", 
    textAlign: "center", 
    marginTop: 20 
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});