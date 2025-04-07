import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialIcons, FontAwesome5, Entypo, AntDesign } from '@expo/vector-icons';
import { Appbar } from 'react-native-paper';
import { AuthContext } from '../hooks/useAuth';
import { router } from 'expo-router';

export default function AccountScreen() {

  const handleLogout = async () => {
    try {
      await authContext?.logoutUser();
      router.replace('/login');
    }
    catch(error){
      console.error("Erreur lors de la connexion");
    }
  }
  
  const authContext = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Appbar.Header style={{backgroundColor: "#f8f9fa"}}>
        <Appbar.Content title="Mon compte" />
        <Appbar.Action icon="pencil" onPress={() => {}} />
      </Appbar.Header>
      < ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.profileSection}>
          <View style={styles.avatarContainer}>
            <Image
              source={require('../../assets/images/avatar.png')}
              style={styles.avatar}
            />
          </View>
          <Text style={styles.userName}>{authContext?.user?.firstName ?? '-'} {authContext?.user?.lastName ?? '-'}</Text>
          <Text style={styles.userEmail}>{authContext?.user?.email ?? '-'} </Text>
          <Text style={styles.userLocation}>{authContext?.user?.country ?? '-'}, {authContext?.user?.address ?? '-'}</Text>
        </View>

        <Text style={styles.sectionTitle}>Paramètres</Text>
        <View style={styles.settingsSection}>
          <TouchableOpacity style={styles.settingItem}>
            <MaterialIcons name="person" size={24} color="#6c757d" />
            <Text style={styles.settingText}>Mes informations</Text>
            <AntDesign name="right" size={20} color="#6c757d" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingItem}>
            <MaterialIcons name="lock" size={24} color="#6c757d" />
            <Text style={styles.settingText}>Modifier le mot de passe</Text>
            <AntDesign name="right" size={20} color="#6c757d" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingItem}>
            <Entypo name="language" size={24} color="#6c757d" />
            <Text style={styles.settingText}>Langue de l'application</Text>
            <AntDesign name="right" size={20} color="#6c757d" />
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Options</Text>
        <View style={styles.settingsSection}>
          <TouchableOpacity style={styles.settingItem}>
            <Entypo name="warning" size={24} color="#6c757d" />
            <Text style={styles.settingText}>Plaintes</Text>
            <AntDesign name="right" size={20} color="#6c757d" />
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Autres</Text>
        <View style={styles.settingsSection}>
          <TouchableOpacity style={styles.settingItem}>
            <MaterialIcons name="gavel" size={24} color="#6c757d" />
            <Text style={styles.settingText}>
              Conditions générales d'utilisation
            </Text>
            <AntDesign name="right" size={20} color="#6c757d" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingItem}>
            <FontAwesome5 name="headset" size={24} color="#6c757d" />
            <Text style={styles.settingText}>Service client</Text>
            <AntDesign name="right" size={20} color="#6c757d" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingItem} onPress={handleLogout} >
            <MaterialIcons name="logout" size={24} color="red" />
            <Text style={styles.settingTextLogout}>Déconnexion</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  avatarContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  userEmail: {
    fontSize: 16,
    color: '#6c757d',
  },
  userLocation: {
    fontSize: 14,
    color: '#6c757d',
    marginTop: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  settingsSection: {
    marginBottom: 20,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#dee2e6',
  },
  settingText: {
    fontSize: 16,
    marginLeft: 15,
    flex: 1,
  },
  
  settingTextLogout: {
    fontSize: 16,
    marginLeft: 15,
    flex: 1,
    color : 'red'
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: '#dee2e6',
    backgroundColor: '#fff',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    marginTop: 5,
    color: '#6c757d',
  },
  activeNavItem: {
    borderTopWidth: 2,
    borderTopColor: '#FF6A00',
  },
});
