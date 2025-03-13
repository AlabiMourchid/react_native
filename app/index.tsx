import { View, StyleSheet, Image, Dimensions } from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width, height } = Dimensions.get('window');

export default function OnBoardingScreen() {
  const router = useRouter();

  const handleDone = async () => {
    await AsyncStorage.setItem('alreadyLaunched', 'true');
    router.replace('/login');
  };

  return (
    <View style={styles.container}>
      <Onboarding
        containerStyles={{ paddingHorizontal: 20 }}
        pages={[
          {
            backgroundColor: '#fff',
            image: (
              <View style={styles.images}>
                <Image source={require('../assets/images/sprites/suivi_icone.png')} />
              </View>
            ),
            title: 'Suivi en temps réel de vos marchandises',
            subtitle: '',
          },
          {
            backgroundColor: '#fff',
            image: (
              <View style={styles.images}>
                <Image source={require('../assets/images/sprites/truck_icone.png')} />
              </View>
            ),
            title: 'Gestion efficace de votre flotte de véhicules',
            subtitle: '',
          },
          {
            backgroundColor: '#fff',
            image: (
              <View style={styles.images}>
                <Image source={require('../assets/images/sprites/cost_icone.png')} />
              </View>
            ),
            title: 'Coûts de transport de vos biens optimisés',
            subtitle: '',
          },
        ]}
        onDone={handleDone}
        onSkip={handleDone}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  images: {
    width: width * 0.8,
    height: width * 0.8,
    borderRadius: 200,
    backgroundColor: '#FF6A00',
    opacity: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});