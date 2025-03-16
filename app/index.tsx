import React, { useState, useRef } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";
import PagerView from "react-native-pager-view";

const { width, height } = Dimensions.get("window");

const OnboardingPage = () => {
  const navigation = useNavigation();
  const [currentPage, setCurrentPage] = useState(0);
  const pagerRef = useRef(null);

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
        <View style={{ alignItems: "flex-end" }}>
          
        </View>
        
        <PagerView
          ref={pagerRef}
          style={{ height: height * 0.5 }}
          initialPage={0}
          onPageSelected={(e) => setCurrentPage(e.nativeEvent.position)}
        >
          {pages.map((page, index) => (
            <View key={index} style={{ alignItems: "center" }}>
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
        
        <View>
          <Button mode="contained">
            Créer un compte
          </Button>
          <View style={styles.button} />
          <Button mode="outlined" > 
            Se connecter
          </Button>
          <View style={styles.button} />
          <TouchableOpacity>
            <Text style={{ textAlign: "center", color: "blue" }}>En continuant vous acceptez les conditions générales d’utilisation</Text>
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
    backgroundColor: "rgba(0, 123, 255, 0.1)",
    borderRadius: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  image : {
    width: 150, 
    height: 150
  },
  button : {
    height:30,
  },
  text : {
    fontSize: 20, 
    fontWeight: "bold", 
    textAlign: "center", 
    marginTop: 20 
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});

export default OnboardingPage;