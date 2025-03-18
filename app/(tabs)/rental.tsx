import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialIcons, FontAwesome5, Entypo, AntDesign, FontAwesome } from '@expo/vector-icons';
import { Appbar } from 'react-native-paper';

export default function RentalScreen() {
  return (
    <View style={styles.container}>
      <Appbar.Header style={{backgroundColor: "#f8f9fa"}}>
        <Appbar.Content title="Locations" />
        <Appbar.Action icon="tune" onPress={() => {}} />
      </Appbar.Header>
      < ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.rowStart}>  
            <TouchableOpacity
              style={[
                styles.button,
                { borderColor: '#000' } ,
                { backgroundColor: '#fff' },
              ]}
            >
              <Text
                style={[
                  styles.buttonText,
                  { color: '#000' },
                ]}
              >
                Devis
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.button,
                { borderColor: 'rgba(255, 106, 0, 0.1)' } ,
                { backgroundColor: 'rgba(255, 106, 0, 0.1)' },
              ]}
            >
              <Text
                style={[
                  styles.buttonText,
                  { color: 'black' },
                ]}
              >
                Location
              </Text>
            </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.profileSection}>
            <View style={[styles.row, styles.borderBottom, styles.padding]}>
                <View style={styles.imageContent}>
                    <Image
                        source={require('../../assets/images/location-image.png')}
                        style={styles.image}
                    />
                </View>
                <View style={styles.column}>
                    <View  style={styles.row}>
                        <Text style={styles.reference}>SALT-D25-01</Text>
                        <Text style={styles.statusDraft}>En cours</Text>
                    </View>
                    <View style={{marginBottom: 5}}></View>
                    <View style={styles.row}>
                        <FontAwesome style={{marginEnd: 6}} name="calendar"></FontAwesome>
                        <Text>12/03/2025 - 15/04/2025</Text>
                    </View>
                    <View style={{marginBottom: 5}}></View>
                    <View style={styles.row}>
                        <FontAwesome style={{marginEnd: 6}} name="map-pin"></FontAwesome>
                        <Text>Abomey, Bénin -- Allada, Bénin</Text>
                    </View>
                </View>
            </View>   
            
            <View style={[styles.row, styles.borderBottom, styles.padding]}>
                <View style={styles.imageContent}>
                    <Image
                        source={require('../../assets/images/location-image.png')}
                        style={styles.image}
                    />
                </View>
                <View style={styles.column}>
                    <View  style={styles.row}>
                        <Text style={styles.reference}>SALT-D25-01</Text>
                        <Text style={styles.statusRed}>Rejeté</Text>
                    </View>
                    <View style={{marginBottom: 5}}></View>
                    <View style={styles.row}>
                        <FontAwesome style={{marginEnd: 6}} name="calendar"></FontAwesome>
                        <Text>12/03/2025 - 15/04/2025</Text>
                    </View>
                    <View style={{marginBottom: 5}}></View>
                    <View style={styles.row}>
                        <FontAwesome style={{marginEnd: 6}} name="map-pin"></FontAwesome>
                        <Text>Abomey, Bénin -- Allada, Bénin</Text>
                    </View>
                </View>
            </View>  
            
            <View style={[styles.row, styles.borderBottom, styles.padding]}>
                <View style={styles.imageContent}>
                    <Image
                        source={require('../../assets/images/location-image.png')}
                        style={styles.image}
                    />
                </View>
                <View style={styles.column}>
                    <View  style={styles.row}>
                        <Text style={styles.reference}>SALT-D25-01</Text>
                        <Text style={styles.statusAccepted}>Terminé</Text>
                    </View>
                    <View style={{marginBottom: 5}}></View>
                    <View style={styles.row}>
                        <FontAwesome style={{marginEnd: 6}} name="calendar"></FontAwesome>
                        <Text>12/03/2025 - 15/04/2025</Text>
                    </View>
                    <View style={{marginBottom: 5}}></View>
                    <View style={styles.row}>
                        <FontAwesome style={{marginEnd: 6}} name="map-pin"></FontAwesome>
                        <Text>Abomey, Bénin -- Allada, Bénin</Text>
                    </View>
                </View>
            </View>  
            
            <View style={[styles.row, styles.borderBottom, styles.padding]}>
                <View style={styles.imageContent}>
                    <Image
                        source={require('../../assets/images/location-image.png')}
                        style={styles.image}
                    />
                </View>
                <View style={styles.column}>
                    <View  style={styles.row}>
                        <Text style={styles.reference}>SALT-D25-01</Text>
                        <Text style={styles.statusDraft}>En cours</Text>
                    </View>
                    <View style={{marginBottom: 5}}></View>
                    <View style={styles.row}>
                        <FontAwesome style={{marginEnd: 6}} name="calendar"></FontAwesome>
                        <Text>12/03/2025 - 15/04/2025</Text>
                    </View>
                    <View style={{marginBottom: 5}}></View>
                    <View style={styles.row}>
                        <FontAwesome style={{marginEnd: 6}} name="map-pin"></FontAwesome>
                        <Text>Abomey, Bénin -- Allada, Bénin</Text>
                    </View>
                </View>
            </View>  
            
            <View style={[styles.row, styles.borderBottom, styles.padding]}>
                <View style={styles.imageContent}>
                    <Image
                        source={require('../../assets/images/location-image.png')}
                        style={styles.image}
                    />
                </View>
                <View style={styles.column}>
                    <View  style={styles.row}>
                        <Text style={styles.reference}>SALT-D25-01</Text>
                        <Text style={styles.statusDraft}>En cours</Text>
                    </View>
                    <View style={{marginBottom: 5}}></View>
                    <View style={styles.row}>
                        <FontAwesome style={{marginEnd: 6}} name="calendar"></FontAwesome>
                        <Text>12/03/2025 - 15/04/2025</Text>
                    </View>
                    <View style={{marginBottom: 5}}></View>
                    <View style={styles.row}>
                        <FontAwesome style={{marginEnd: 6}} name="map-pin"></FontAwesome>
                        <Text>Abomey, Bénin -- Allada, Bénin</Text>
                    </View>
                </View>
            </View>  
            
            <View style={[styles.row, styles.borderBottom, styles.padding]}>
                <View style={styles.imageContent}>
                    <Image
                        source={require('../../assets/images/location-image.png')}
                        style={styles.image}
                    />
                </View>
                <View style={styles.column}>
                    <View  style={styles.row}>
                        <Text style={styles.reference}>SALT-D25-01</Text>
                        <Text style={styles.statusDraft}>En cours</Text>
                    </View>
                    <View style={{marginBottom: 5}}></View>
                    <View style={styles.row}>
                        <FontAwesome style={{marginEnd: 6}} name="calendar"></FontAwesome>
                        <Text>12/03/2025 - 15/04/2025</Text>
                    </View>
                    <View style={{marginBottom: 5}}></View>
                    <View style={styles.row}>
                        <FontAwesome style={{marginEnd: 6}} name="map-pin"></FontAwesome>
                        <Text>Abomey, Bénin -- Allada, Bénin</Text>
                    </View>
                </View>
            </View>  
            
            <View style={[styles.row, styles.borderBottom, styles.padding]}>
                <View style={styles.imageContent}>
                    <Image
                        source={require('../../assets/images/location-image.png')}
                        style={styles.image}
                    />
                </View>
                <View style={styles.column}>
                    <View  style={styles.row}>
                        <Text style={styles.reference}>SALT-D25-01</Text>
                        <Text style={styles.statusDraft}>En cours</Text>
                    </View>
                    <View style={{marginBottom: 5}}></View>
                    <View style={styles.row}>
                        <FontAwesome style={{marginEnd: 6}} name="calendar"></FontAwesome>
                        <Text>12/03/2025 - 15/04/2025</Text>
                    </View>
                    <View style={{marginBottom: 5}}></View>
                    <View style={styles.row}>
                        <FontAwesome style={{marginEnd: 6}} name="map-pin"></FontAwesome>
                        <Text>Abomey, Bénin -- Allada, Bénin</Text>
                    </View>
                </View>
            </View>  
            
            <View style={[styles.row, styles.borderBottom, styles.padding]}>
                <View style={styles.imageContent}>
                    <Image
                        source={require('../../assets/images/location-image.png')}
                        style={styles.image}
                    />
                </View>
                <View style={styles.column}>
                    <View  style={styles.row}>
                        <Text style={styles.reference}>SALT-D25-01</Text>
                        <Text style={styles.statusDraft}>En cours</Text>
                    </View>
                    <View style={{marginBottom: 5}}></View>
                    <View style={styles.row}>
                        <FontAwesome style={{marginEnd: 6}} name="calendar"></FontAwesome>
                        <Text>12/03/2025 - 15/04/2025</Text>
                    </View>
                    <View style={{marginBottom: 5}}></View>
                    <View style={styles.row}>
                        <FontAwesome style={{marginEnd: 6}} name="map-pin"></FontAwesome>
                        <Text>Abomey, Bénin -- Allada, Bénin</Text>
                    </View>
                </View>
            </View>  
            
            <View style={[styles.row, styles.borderBottom, styles.padding]}>
                <View style={styles.imageContent}>
                    <Image
                        source={require('../../assets/images/location-image.png')}
                        style={styles.image}
                    />
                </View>
                <View style={styles.column}>
                    <View  style={styles.row}>
                        <Text style={styles.reference}>SALT-D25-01</Text>
                        <Text style={styles.statusDraft}>En cours</Text>
                    </View>
                    <View style={{marginBottom: 5}}></View>
                    <View style={styles.row}>
                        <FontAwesome style={{marginEnd: 6}} name="calendar"></FontAwesome>
                        <Text>12/03/2025 - 15/04/2025</Text>
                    </View>
                    <View style={{marginBottom: 5}}></View>
                    <View style={styles.row}>
                        <FontAwesome style={{marginEnd: 6}} name="map-pin"></FontAwesome>
                        <Text>Abomey, Bénin -- Allada, Bénin</Text>
                    </View>
                </View>
            </View>  
            
            <View style={[styles.row, styles.borderBottom, styles.padding]}>
                <View style={styles.imageContent}>
                    <Image
                        source={require('../../assets/images/location-image.png')}
                        style={styles.image}
                    />
                </View>
                <View style={styles.column}>
                    <View  style={styles.row}>
                        <Text style={styles.reference}>SALT-D25-01</Text>
                        <Text style={styles.statusDraft}>En cours</Text>
                    </View>
                    <View style={{marginBottom: 5}}></View>
                    <View style={styles.row}>
                        <FontAwesome style={{marginEnd: 6}} name="calendar"></FontAwesome>
                        <Text>12/03/2025 - 15/04/2025</Text>
                    </View>
                    <View style={{marginBottom: 5}}></View>
                    <View style={styles.row}>
                        <FontAwesome style={{marginEnd: 6}} name="map-pin"></FontAwesome>
                        <Text>Abomey, Bénin -- Allada, Bénin</Text>
                    </View>
                </View>
            </View>  
            
            <View style={[styles.row, styles.borderBottom, styles.padding]}>
                <View style={styles.imageContent}>
                    <Image
                        source={require('../../assets/images/location-image.png')}
                        style={styles.image}
                    />
                </View>
                <View style={styles.column}>
                    <View  style={styles.row}>
                        <Text style={styles.reference}>SALT-D25-01</Text>
                        <Text style={styles.statusDraft}>En cours</Text>
                    </View>
                    <View style={{marginBottom: 5}}></View>
                    <View style={styles.row}>
                        <FontAwesome style={{marginEnd: 6}} name="calendar"></FontAwesome>
                        <Text>12/03/2025 - 15/04/2025</Text>
                    </View>
                    <View style={{marginBottom: 5}}></View>
                    <View style={styles.row}>
                        <FontAwesome style={{marginEnd: 6}} name="map-pin"></FontAwesome>
                        <Text>Abomey, Bénin -- Allada, Bénin</Text>
                    </View>
                </View>
            </View>  
            
            <View style={[styles.row, styles.padding]}>
                <View style={styles.imageContent}>
                    <Image
                        source={require('../../assets/images/location-image.png')}
                        style={styles.image}
                    />
                </View>
                <View style={styles.column}>
                    <View  style={styles.row}>
                        <Text style={styles.reference}>SALT-D25-01</Text>
                        <Text style={styles.statusDraft}>En cours</Text>
                    </View>
                    <View style={{marginBottom: 5}}></View>
                    <View style={styles.row}>
                        <FontAwesome style={{marginEnd: 6}} name="calendar"></FontAwesome>
                        <Text>12/03/2025 - 15/04/2025</Text>
                    </View>
                    <View style={{marginBottom: 5}}></View>
                    <View style={styles.row}>
                        <FontAwesome style={{marginEnd: 6}} name="map-pin"></FontAwesome>
                        <Text>Abomey, Bénin -- Allada, Bénin</Text>
                    </View>
                </View>
            </View>  
        </TouchableOpacity>
        
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
    rowStart: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  scrollContent: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  row : {
    flexDirection : 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  padding: {
    padding : 16,
  },
  borderBottom : {
    borderBottomWidth: 0.2,
    borderBottomColor: 'rgba(0, 0, 0, 0.5)', 
  },
  imageContent : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  image : {
    width: 66,
    height : 66,
    justifyContent: 'center'
  },
  column : {
    flexDirection: 'column',
    flex: 3,
    marginLeft: 10,
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  reference : {
    fontWeight: 'bold'
  },
  icon : {
    width: 10,
    height:  10
  },
  statusRed: {
    fontSize : 14,
    color : '#D33A2F', 
    marginLeft : 70, 
    fontWeight : '600',
  },
  statusDraft: {
    fontSize : 14,
    color : '#FF6A00', 
    marginLeft : 70, 
    fontWeight : '600',
  },
  statusAccepted: {
    fontSize : 14,
    color : '#127955', 
    marginLeft : 70, 
    fontWeight : '600',
  },
  button: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginRight: 12,
    borderRadius: 20,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 14,
  },
});
