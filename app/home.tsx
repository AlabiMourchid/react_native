import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const HomePage = () => {

  const [activeMenu, setActiveMenu] = React.useState('accueil') ;

  return (
    <View style={styles.container}>
      {/* Barre en haut avec le nom de l'utilisateur et l'icône de notification */}
      <View style={styles.topBar}>
        <Text style={styles.userName}>Bonjour Marthe !</Text>
        <View style={styles.notificationIcon}>
          <Image
            source={require('../assets/images/notifications.png')} 
            style={styles.icon}
          />
          <View style={styles.badge}>
            <Text style={styles.badgeText}>10</Text>
          </View>
        </View>
      </View>

      {/* ScrollView pour le reste du contenu */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Frame rouge avec texte */}
        <View style={styles.redFrame}>
          <Text style={styles.boldText}>Mise à jour des conditions d’utilisation</Text>
          <Text style={styles.smallText}>Nous souhaitons vous informer que nous avons récemment mis à jour nos Conditions Générales d'Utilisation (CGU).</Text>
        </View>

        {/* Ligne avec dates et icône de filtrage */}
        <View style={styles.dateFilterRow}>
          <Text style={styles.dateText}>19/02/2025 au 19/03/2025</Text>
          <Image
            source={require('../assets/images/tune.png')} 
            style={styles.icon}
          />
        </View>

        {/* Frame avec background dégradé */}
        <LinearGradient
          colors={['#0063FF', '#000E24']}
          start={{ x: 0, y: 0 }} 
          end={{ x: 1, y: 0 }} 
          style={styles.gradientFrame}
        >
            <View style={styles.gradientFrame}>
            {/* Première colonne : Texte */}
            <View style={styles.leftColumn}>
                <Text style={styles.largeText}>58</Text>
                <Text style={styles.mediumText}>Locations de camions effectuées</Text>
            </View>

            {/* Deuxième colonne : Image */}
            <View style={styles.rightColumn}>
                <Image
                source={require('../assets/images/truck_icone.png')} 
                style={styles.image}
                />
            </View>
            </View>
        </LinearGradient>
        

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
          {/* Frame 1 */}
          <View style={styles.horizontalFrame1}>
            <Image
              source={require('../assets/images/green-icon.png')} 
              style={styles.frameImage}
            />
            <Text style={styles.frameText}>Locations en  cours</Text>
            <Text style={styles.frameTextBold1}>45</Text>
          </View>

          {/* Frame 2 */}
          <View style={styles.horizontalFrame2}>
            <Image
              source={require('../assets/images/orange-icon.png')} 
              style={styles.frameImage}
            />
            <Text style={styles.frameText}>Demande de devis</Text>
            <Text style={styles.frameTextBold2}>30</Text>
          </View>

          {/* Frame 3 */}
          <View style={styles.horizontalFrame3}>
            <Image
              source={require('../assets/images/red-icon.png')} 
              style={styles.frameImage}
            />
            <Text style={styles.frameText}>Litiges en cours</Text>
            <Text style={styles.frameTextBold3}>120</Text>
          </View>

          {/* Frame 4 */}
          <View style={styles.horizontalFrame4}>
            <Image
              source={require('../assets/images/blue-icon.png')} 
              style={styles.frameImage}
            />
            <Text style={styles.frameText}>Devis en attente</Text>
            <Text style={styles.frameTextBold4}>150</Text>
          </View>
        </ScrollView>

        {/* Image publicitaire sur toute la largeur de l’écran */}
        <Image
          source={require('../assets/images/announcement.png')}
          style={styles.adImage}
          resizeMode= "cover"
        />

        {/* Section « Camions les plus demandés » */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Camions les plus demandés</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
            {/* Frame 1 */}
            <View style={styles.textFrame}>
              <Text style={styles.textFrameText}>Droit</Text>
            </View>

            {/* Frame 2 */}
            <View style={styles.textFrame}>
              <Text style={styles.textFrameText}>Sémi-remorque</Text>
            </View>

            {/* Frame 3 */}
            <View style={styles.textFrame}>
              <Text style={styles.textFrameText}>Remorque</Text>
            </View>

            {/* Frame 4 */}
            <View style={styles.textFrame}>
              <Text style={styles.textFrameText}>Plateau</Text>
            </View>

            {/* Frame 5 */}
            <View style={styles.textFrame}>
              <Text style={styles.textFrameText}>Remorque</Text>
            </View>

            {/* Frame 6 */}
            <View style={styles.textFrame}>
              <Text style={styles.textFrameText}>Sémi-remorque</Text>
            </View>

            {/* Frame 7 */}
            <View style={styles.textFrame}>
              <Text style={styles.textFrameText}>Plateau</Text>
            </View>

            {/* Frame 8 */}
            <View style={styles.textFrame}>
              <Text style={styles.textFrameText}>Droit</Text>
            </View>
          </ScrollView>
        </View>

        {/* Section « Marchandises les plus transportées » */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Marchandises les plus transportées</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
            {/* Card 1 */}
            <View style={styles.card1}>
              <Image
                source={require('../assets/images/alimentaires.png')} 
                style={styles.cardIcon}
              />
              <Text style={styles.cardText}>Produits alimentaires</Text>
            </View>

            {/* Card 2 */}
            <View style={styles.card2}>
              <Image
                source={require('../assets/images/biens.png')} 
                style={styles.cardIcon}
              />
              <Text style={styles.cardText}>Autres biens</Text>
            </View>

            {/* Card 3 */}
            <View style={styles.card3}>
              <Image
                source={require('../assets/images/construction.png')} 
                style={styles.cardIcon}
              />
              <Text style={styles.cardText}>Matériaux de construction</Text>
            </View>

            {/* Card 4 */}
            <View style={styles.card4}>
              <Image
                source={require('../assets/images/industriels.png')} 
                style={styles.cardIcon}
              />
              <Text style={styles.cardText}>Produits industriels</Text>
            </View>

            {/* Card 5 */}
            <View style={styles.card5}>
              <Image
                source={require('../assets/images/automobiles.png')} 
                style={styles.cardIcon}
              />
              <Text style={styles.cardText}>Produits automobiles</Text>
            </View>
          </ScrollView>
        </View>

        {/* Section « Mes dernières locations » */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Mes dernières locations</Text>
            <Text style={styles.seeAllText}>Voir tout</Text>
          </View>

          {/* Frame avec deux colonnes */}
          <View style={styles.locationFrame}>
            {/* Première colonne (1/4 de la largeur) */}
            <View style={styles.locationImageColumn}>
              <Image
                source={require('../assets/images/location-image.png')}
                style={styles.locationImage}
              />
            </View>

            {/* Deuxième colonne (3/4 de la largeur) */}
            <View style={styles.locationTextColumn}>
              {/* Première ligne */}
              <View style={styles.locationRow}>
                <Text style={styles.locationText1}>D-2024-001</Text>
                <Text style={styles.draftText}>Brouillon</Text>
              </View>

              {/* Deuxième ligne */}
              <View style={styles.locationRow}>
                <Image
                  source={require('../assets/images/date_range.png')}
                  style={styles.locationIcon}
                />
                <Text style={styles.locationText}>26 mars - 07 juillet 2024</Text>
              </View>

              {/* Troisième ligne */}
              <View style={styles.locationRow}>
                <View style={styles.locationRow}>
                  <Image
                    source={require('../assets/images/distance.png')} 
                    style={styles.locationIcon}
                  />
                  <Text style={styles.locationText}>Cotonou, Bénin</Text>
                </View>
                <View style={styles.locationRow}>
                  <Image
                    source={require('../assets/images/east.png')} 
                    style={styles.locationIcon2}
                  />
                  <Text style={styles.locationText}>Sokodé, Togo</Text>
                </View>
              </View>
            </View>
          </View>

            {/* Frame avec deux colonnes */}
            <View style={styles.locationFrame}>
            {/* Première colonne (1/4 de la largeur) */}
            <View style={styles.locationImageColumn}>
              <Image
                source={require('../assets/images/location-image.png')}
                style={styles.locationImage}
              />
            </View>

            {/* Deuxième colonne (3/4 de la largeur) */}
            <View style={styles.locationTextColumn}>
              {/* Première ligne */}
              <View style={styles.locationRow}>
                <Text style={styles.locationText1}>D-2024-001</Text>
                <Text style={styles.draftText}>Brouillon</Text>
              </View>

              {/* Deuxième ligne */}
              <View style={styles.locationRow}>
                <Image
                  source={require('../assets/images/date_range.png')}
                  style={styles.locationIcon}
                />
                <Text style={styles.locationText}>26 mars - 07 juillet 2024</Text>
              </View>

              {/* Troisième ligne */}
              <View style={styles.locationRow}>
                <View style={styles.locationRow}>
                  <Image
                    source={require('../assets/images/distance.png')} 
                    style={styles.locationIcon}
                  />
                  <Text style={styles.locationText}>Cotonou, Bénin</Text>
                </View>
                <View style={styles.locationRow}>
                  <Image
                    source={require('../assets/images/east.png')} 
                    style={styles.locationIcon2}
                  />
                  <Text style={styles.locationText}>Sokodé, Togo</Text>
                </View>
              </View>
            </View>
          </View>

            {/* Frame avec deux colonnes */}
            <View style={styles.locationFrame}>
            {/* Première colonne (1/4 de la largeur) */}
            <View style={styles.locationImageColumn}>
              <Image
                source={require('../assets/images/location-image.png')}
                style={styles.locationImage}
              />
            </View>

            {/* Deuxième colonne (3/4 de la largeur) */}
            <View style={styles.locationTextColumn}>
              {/* Première ligne */}
              <View style={styles.locationRow}>
                <Text style={styles.locationText1}>D-2024-001</Text>
                <Text style={styles.draftText}>Brouillon</Text>
              </View>

              {/* Deuxième ligne */}
              <View style={styles.locationRow}>
                <Image
                  source={require('../assets/images/date_range.png')}
                  style={styles.locationIcon}
                />
                <Text style={styles.locationText}>26 mars - 07 juillet 2024</Text>
              </View>

              {/* Troisième ligne */}
              <View style={styles.locationRow}>
                <View style={styles.locationRow}>
                  <Image
                    source={require('../assets/images/distance.png')} 
                    style={styles.locationIcon}
                  />
                  <Text style={styles.locationText}>Cotonou, Bénin</Text>
                </View>
                <View style={styles.locationRow}>
                  <Image
                    source={require('../assets/images/east.png')} 
                    style={styles.locationIcon2}
                  />
                  <Text style={styles.locationText}>Sokodé, Togo</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

      </ScrollView>

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNavBar}>
        {/* Menu Accueil */}
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => setActiveMenu('accueil')} 
        >
          <View
            style={[
              styles.navIconContainer,
              activeMenu === 'accueil' && styles.activeNavIconContainer, 
            ]}
          >
            <Image
              source={require('../assets/images/home.png')} 
              style={styles.navIcon}
            />
          </View>
          <Text
            style={[
              styles.navText,
              activeMenu === 'accueil' && styles.activeNavText, 
            ]}
          >
            Accueil
          </Text>
        </TouchableOpacity>

        {/* Menu Locations */}
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => setActiveMenu('locations')}
        >
          <View style={styles.navIconContainer}>
            <Image
              source={require('../assets/images/location.png')} 
              style={styles.navIcon}
            />
          </View>
          <Text style={styles.navText}>Locations</Text>
        </TouchableOpacity>

        {/* Menu Flotte */}
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => setActiveMenu('flotte')}
        >
          <View style={styles.navIconContainer}>
            <Image
              source={require('../assets/images/local_shipping.png')} 
              style={styles.navIcon}
            />
          </View>
          <Text style={styles.navText}>Flotte</Text>
        </TouchableOpacity>

        {/* Menu Compte */}
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => setActiveMenu('compte')}
        >
          <View style={styles.navIconContainer}>
            <Image
              source={require('../assets/images/account_circle.png')} 
              style={styles.navIcon}
            />
          </View>
          <Text style={styles.navText}>Compte</Text>
        </TouchableOpacity>
      </View>

      {/* Floating Action Button */}
      <TouchableOpacity style={styles.fab}>
      <Image
        source={require('../assets/images/add-solid-for-fab.png')} 
        style={styles.fabIcon}
      />
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  notificationIcon: {
    position: 'relative',
  },
  icon: {
    width: 24,
    height: 24,
  },
  badge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: '#B3261E',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
  },
  scrollContent: {
    paddingHorizontal: 16,
  },
  redFrame: {
    backgroundColor: 'rgba(255, 0, 0, 0.15)', 
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 8,
  },
  smallText: {
    fontSize: 12,
    color: '#555',
  },
  dateFilterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  dateText: {
    fontSize: 14,
  },
  gradientFrame: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 8,
    padding: 8,
    marginBottom: 4,
  },
  leftColumn: {
    flex: 4,
  },
  rightColumn: {
    flex: 1,
    alignItems: 'flex-end',
  },
  largeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  mediumText: {
    fontSize: 14,
    color: '#FFFFFF',
  },
  image: {
    width: 42.66,
    height: 50,
    borderRadius: 8,
  },
  horizontalScroll: {
    marginBottom: 16,
  },
  horizontalFrame1: {
    width: 160,
    height: 95,
    borderWidth: 0.5, 
    borderColor: '#127955', 
    borderRadius: 8, 
    padding: 16,
    marginRight: 16, 
    marginTop: 16,
  },
  horizontalFrame2: {
    width: 160,
    height: 95,
    borderWidth: 0.5, 
    borderColor: '#FF6A00',
    borderRadius: 8,
    padding: 16,
    marginRight: 16,
    marginTop: 16,
  },
  horizontalFrame3: {
    width: 160,
    height: 95,
    borderWidth: 0.5, 
    borderColor: '#FA1313', 
    borderRadius: 8, 
    padding: 16,
    marginRight: 16,
    marginTop: 16,
  },
  horizontalFrame4: {
    width: 160,
    height: 95,
    borderWidth: 0.5, 
    borderColor: '#0063FF', 
    borderRadius: 8, 
    padding: 16,
    marginRight: 16,
    marginTop: 16,
  },
  frameImage: {
    width: 25,
    height: 25, 
    borderRadius: 8,
    marginBottom: 8, 
  },
  frameText: {
    fontSize: 14,
    color: '#333', 
    textAlign: 'left', 
  },
  frameTextBold1: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#127955',
    textAlign: 'left', 
  },
  frameTextBold2: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FF6A00', 
    textAlign: 'left', 
  },
  frameTextBold3: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FA1313', 
    textAlign: 'left',
  },
  frameTextBold4: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#0063FF', 
    textAlign: 'left', 
  },
  adImage : {
    width : '100%', 
    height : 182,
    marginBottom : 16,
  },
  section : {
    marginBottom : 16,
  },
  sectionHeader : {
    flexDirection : 'row',
    justifyContent : 'space-between',
    alignItems : 'center',
  },
  sectionTitle : {
    fontSize : 16,
    fontWeight : 'bold',
  },
  seeAllText : {
    fontSize : 12,
  },
  textFrame : {
    width : 'auto', 
    height: 'auto',
    backgroundColor : '#F5F5F5', 
    borderRadius : 8,
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginRight : 16,
    marginTop : 8,
    justifyContent : 'center',
    alignItems : 'center',
  },
  textFrameText : {
    fontSize : 12,
    color : '#000', 
  },
  card1 : {
    width : 88, 
    height : 'auto',
    backgroundColor : 'rgba(18, 121, 85, 0.10)', 
    borderRadius : 8,
    paddingVertical: 16,
    paddingHorizontal: 10,
    marginRight : 16, 
    marginTop : 16,
    justifyContent : 'center',
    alignItems : 'center',
  },
  card2 : {
    width : 88, 
    height : 'auto',
    backgroundColor : 'rgba(62, 101, 175, 0.10)', 
    borderRadius : 8,
    paddingVertical: 16,
    paddingHorizontal: 10,
    marginRight : 16, 
    marginTop : 16,
    justifyContent : 'center',
    alignItems : 'center',
  },
  card3 : {
    width : 88, 
    height : 'auto',
    backgroundColor : 'rgba(252, 196, 25, 0.10)', 
    borderRadius : 8,
    paddingVertical: 16,
    paddingHorizontal: 10,
    marginRight : 16, 
    marginTop : 16,
    justifyContent : 'center',
    alignItems : 'center',
  },
  card4 : {
    width : 88, 
    height : 'auto',
    backgroundColor : 'rgba(255, 106, 0, 0.10)', 
    borderRadius : 8,
    paddingVertical: 16,
    paddingHorizontal: 10,
    marginRight : 16, 
    marginTop : 16,
    justifyContent : 'center',
    alignItems : 'center',
  },
  card5 : {
    width : 88, 
    height : 'auto',
    backgroundColor : 'rgba(22, 22, 22, 0.10)', 
    borderRadius : 8,
    paddingVertical: 16,
    paddingHorizontal: 10,
    marginRight : 16, 
    marginTop : 16,
    justifyContent : 'center',
    alignItems : 'center',
  },
  cardIcon : {
    width : 35.7,
    height : 32,
    marginBottom : 8, 
    resizeMode: 'contain',
  },
  cardText : {
    fontSize : 10,
    color : '#333',
    textAlign: 'center',
  },
  locationFrame : {
    flexDirection : 'row',
    borderRadius : 8,
    padding : 16,
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(0, 0, 0, 0.5)', 
  },
  locationImageColumn : {
    flex : 1, 
    justifyContent : 'center',
    alignItems : 'center',
  },
  locationImage : {
    width : 66,
    height : 66,
    borderRadius : 8,
  },
  locationTextColumn : {
    flex : 3, 
    paddingLeft : 16, 
  },
  locationRow : {
    flexDirection : 'row',
    alignItems : 'center',
    marginBottom : 8, 
  },
  locationText1 : {
    fontSize : 14,
    color : '#333',
    fontWeight : '600',
  },
  locationText : {
    fontSize : 12,
    color : 'rgba(0, 0, 0, 0.65)',
  },
  draftText : {
    fontSize : 14,
    color : '#FF6A00', 
    marginLeft : 'auto', 
    fontWeight : '600',
  },
  locationIcon : {
    width : 16,
    height : 16,
    marginRight : 4,
  },
  locationIcon2 : {
    width : 16,
    height : 16,
    marginRight : 4,
    marginLeft : 4,
  },
  bottomNavBar : {
    flexDirection : 'row',
    justifyContent : 'space-around',
    alignItems : 'center',
    backgroundColor : '#FDF8F5',
    paddingVertical : 12,
  },
  navItem : {
    alignItems : 'center',
  },
  navIconContainer : {
    padding : 8,
    borderRadius : 8,
  },
  activeNavIconContainer : {
    backgroundColor : 'rgba(255, 106, 0, 0.10)',
    width : 64,
    borderRadius : 16,
    alignItems : 'center',
  },
  navIcon : {
    width : 24,
    height : 24,
  },
  navText : {
    fontSize : 12,
    color : '#333',
  },
  activeNavText : {
    color : '#FF6A00',
    fontWeight : 'bold',
  },
  fab: {
    position: 'absolute', 
    bottom: 116, 
    right: 24,
    backgroundColor: '#FF6A00',
    width: 56, 
    height: 56, 
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  fabIcon: {
    width: 24,
    height: 24,
    tintColor: '#fff',
  },

});

export default HomePage;