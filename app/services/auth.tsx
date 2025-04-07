import AsyncStorage from '@react-native-async-storage/async-storage';
import apiClient from './apiClient';
import { User } from '../models/user';
import axios from 'axios';
import { config } from '../config';
import { Header } from 'react-native/Libraries/NewAppScreen';

interface AuthResponse {
  token: string;
}


export const login = async (email: string, password: string) => {
    
    try{

        const response = await fetch(`${config.baseURL}${config.endpoints.login}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
          });
    
          if (response.status === 200) {
            const data = await response.text();
            await AsyncStorage.setItem('token', data);
            return data;
          } else {
            throw new Error('Erreur inconnue. Veuillez réessayer.');
          }
    } catch (error: any) {
      if (error.response) {
        if (error.response.status === 401) {
          throw new Error('Identifiants incorrects. Vérifiez votre email et mot de passe.');
        } else if (error.response.status === 500) {
          throw new Error('Problème du serveur. Essayez plus tard.');
        }
      } else if (error.request) {
        throw new Error("Impossible d'atteindre le serveur. Vérifiez votre connexion Internet.");
      } else {
        throw new Error('Une erreur inattendue est survenue.');
      }
    }
  };

export const currentUser = async(): Promise<User> => {
    const response = await apiClient.get(`${config.endpoints.current_user}`);

    if (!response.data || !response.data.email) { 
        throw new Error("Utilisateur non trouvé");
    }

    const user = response.data;
    await AsyncStorage.setItem('user', JSON.stringify(user));

    return user;
}


export const getStoredUser = async (): Promise<User | null> => {
  const storedUser = await AsyncStorage.getItem('user');
  return storedUser ? JSON.parse(storedUser) : null;
};


export const logout = async (): Promise<void> => {
  await AsyncStorage.removeItem('token');
  await AsyncStorage.removeItem('user');
};
