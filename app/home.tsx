import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { homeStyles } from './styles/styles';

const HomePage = () => {

  const [activeMenu, setActiveMenu] = React.useState('accueil') ;

  return (
    <View style={homeStyles.container}>
      {/* Barre en haut avec le nom de l'utilisateur et l'icône de notification */}
      <View style={homeStyles.topBar}>
        <Text style={homeStyles.userName}>Bonjour Marthe !</Text>
        <View style={homeStyles.notificationIcon}>
          <Image
            source={require('../assets/images/notifications.png')} 
            style={homeStyles.icon}
          />
          <View style={homeStyles.badge}>
            <Text style={homeStyles.badgeText}>10</Text>
          </View>
        </View>
      </View>

      {/* ScrollView pour le reste du contenu */}
      <ScrollView contentContainerStyle={homeStyles.scrollContent}>
        {/* Frame rouge avec texte */}
        <View style={homeStyles.redFrame}>
          <Text style={homeStyles.boldText}>Mise à jour des conditions d’utilisation</Text>
          <Text style={homeStyles.smallText}>Nous souhaitons vous informer que nous avons récemment mis à jour nos Conditions Générales d'Utilisation (CGU).</Text>
        </View>

        {/* Ligne avec dates et icône de filtrage */}
        <View style={homeStyles.dateFilterRow}>
          <Text style={homeStyles.dateText}>19/02/2025 au 19/03/2025</Text>
          <Image
            source={require('../assets/images/tune.png')} 
            style={homeStyles.icon}
          />
        </View>

        {/* Frame avec background dégradé */}
        <LinearGradient
          colors={['#0063FF', '#000E24']}
          start={{ x: 0, y: 0 }} 
          end={{ x: 1, y: 0 }} 
          style={homeStyles.gradientFrame}
        >
            <View style={homeStyles.gradientFrame}>
            {/* Première colonne : Texte */}
            <View style={homeStyles.leftColumn}>
                <Text style={homeStyles.largeText}>58</Text>
                <Text style={homeStyles.mediumText}>Locations de camions effectuées</Text>
            </View>

            {/* Deuxième colonne : Image */}
            <View style={homeStyles.rightColumn}>
                <Image
                source={require('../assets/images/truck_icone.png')} 
                style={homeStyles.image}
                />
            </View>
            </View>
        </LinearGradient>
        

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={homeStyles.horizontalScroll}>
          {/* Frame 1 */}
          <View style={homeStyles.horizontalFrame1}>
            <Image
              source={require('../assets/images/green-icon.png')} 
              style={homeStyles.frameImage}
            />
            <Text style={homeStyles.frameText}>Locations en  cours</Text>
            <Text style={homeStyles.frameTextBold1}>45</Text>
          </View>

          {/* Frame 2 */}
          <View style={homeStyles.horizontalFrame2}>
            <Image
              source={require('../assets/images/orange-icon.png')} 
              style={homeStyles.frameImage}
            />
            <Text style={homeStyles.frameText}>Demande de devis</Text>
            <Text style={homeStyles.frameTextBold2}>30</Text>
          </View>

          {/* Frame 3 */}
          <View style={homeStyles.horizontalFrame3}>
            <Image
              source={require('../assets/images/red-icon.png')} 
              style={homeStyles.frameImage}
            />
            <Text style={homeStyles.frameText}>Litiges en cours</Text>
            <Text style={homeStyles.frameTextBold3}>120</Text>
          </View>

          {/* Frame 4 */}
          <View style={homeStyles.horizontalFrame4}>
            <Image
              source={require('../assets/images/blue-icon.png')} 
              style={homeStyles.frameImage}
            />
            <Text style={homeStyles.frameText}>Devis en attente</Text>
            <Text style={homeStyles.frameTextBold4}>150</Text>
          </View>
        </ScrollView>

        {/* Image publicitaire sur toute la largeur de l’écran */}
        <Image
          source={require('../assets/images/announcement.png')}
          style={homeStyles.adImage}
          resizeMode= "cover"
        />

        {/* Section « Camions les plus demandés » */}
        <View style={homeStyles.section}>
          <Text style={homeStyles.sectionTitle}>Camions les plus demandés</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={homeStyles.horizontalScroll}>
            {/* Frame 1 */}
            <View style={homeStyles.textFrame}>
              <Text style={homeStyles.textFrameText}>Droit</Text>
            </View>

            {/* Frame 2 */}
            <View style={homeStyles.textFrame}>
              <Text style={homeStyles.textFrameText}>Sémi-remorque</Text>
            </View>

            {/* Frame 3 */}
            <View style={homeStyles.textFrame}>
              <Text style={homeStyles.textFrameText}>Remorque</Text>
            </View>

            {/* Frame 4 */}
            <View style={homeStyles.textFrame}>
              <Text style={homeStyles.textFrameText}>Plateau</Text>
            </View>

            {/* Frame 5 */}
            <View style={homeStyles.textFrame}>
              <Text style={homeStyles.textFrameText}>Remorque</Text>
            </View>

            {/* Frame 6 */}
            <View style={homeStyles.textFrame}>
              <Text style={homeStyles.textFrameText}>Sémi-remorque</Text>
            </View>

            {/* Frame 7 */}
            <View style={homeStyles.textFrame}>
              <Text style={homeStyles.textFrameText}>Plateau</Text>
            </View>

            {/* Frame 8 */}
            <View style={homeStyles.textFrame}>
              <Text style={homeStyles.textFrameText}>Droit</Text>
            </View>
          </ScrollView>
        </View>

        {/* Section « Marchandises les plus transportées » */}
        <View style={homeStyles.section}>
          <Text style={homeStyles.sectionTitle}>Marchandises les plus transportées</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={homeStyles.horizontalScroll}>
            {/* Card 1 */}
            <View style={homeStyles.card1}>
              <Image
                source={require('../assets/images/alimentaires.png')} 
                style={homeStyles.cardIcon}
              />
              <Text style={homeStyles.cardText}>Produits alimentaires</Text>
            </View>

            {/* Card 2 */}
            <View style={homeStyles.card2}>
              <Image
                source={require('../assets/images/biens.png')} 
                style={homeStyles.cardIcon}
              />
              <Text style={homeStyles.cardText}>Autres biens</Text>
            </View>

            {/* Card 3 */}
            <View style={homeStyles.card3}>
              <Image
                source={require('../assets/images/construction.png')} 
                style={homeStyles.cardIcon}
              />
              <Text style={homeStyles.cardText}>Matériaux de construction</Text>
            </View>

            {/* Card 4 */}
            <View style={homeStyles.card4}>
              <Image
                source={require('../assets/images/industriels.png')} 
                style={homeStyles.cardIcon}
              />
              <Text style={homeStyles.cardText}>Produits industriels</Text>
            </View>

            {/* Card 5 */}
            <View style={homeStyles.card5}>
              <Image
                source={require('../assets/images/automobiles.png')} 
                style={homeStyles.cardIcon}
              />
              <Text style={homeStyles.cardText}>Produits automobiles</Text>
            </View>
          </ScrollView>
        </View>

        {/* Section « Mes dernières locations » */}
        <View style={homeStyles.section}>
          <View style={homeStyles.sectionHeader}>
            <Text style={homeStyles.sectionTitle}>Mes dernières locations</Text>
            <Text style={homeStyles.seeAllText}>Voir tout</Text>
          </View>

          {/* Frame avec deux colonnes */}
          <View style={homeStyles.locationFrame}>
            {/* Première colonne (1/4 de la largeur) */}
            <View style={homeStyles.locationImageColumn}>
              <Image
                source={require('../assets/images/location-image.png')}
                style={homeStyles.locationImage}
              />
            </View>

            {/* Deuxième colonne (3/4 de la largeur) */}
            <View style={homeStyles.locationTextColumn}>
              {/* Première ligne */}
              <View style={homeStyles.locationRow}>
                <Text style={homeStyles.locationText1}>D-2024-001</Text>
                <Text style={homeStyles.draftText}>Brouillon</Text>
              </View>

              {/* Deuxième ligne */}
              <View style={homeStyles.locationRow}>
                <Image
                  source={require('../assets/images/date_range.png')}
                  style={homeStyles.locationIcon}
                />
                <Text style={homeStyles.locationText}>26 mars - 07 juillet 2024</Text>
              </View>

              {/* Troisième ligne */}
              <View style={homeStyles.locationRow}>
                <View style={homeStyles.locationRow}>
                  <Image
                    source={require('../assets/images/distance.png')} 
                    style={homeStyles.locationIcon}
                  />
                  <Text style={homeStyles.locationText}>Cotonou, Bénin</Text>
                </View>
                <View style={homeStyles.locationRow}>
                  <Image
                    source={require('../assets/images/east.png')} 
                    style={homeStyles.locationIcon2}
                  />
                  <Text style={homeStyles.locationText}>Sokodé, Togo</Text>
                </View>
              </View>
            </View>
          </View>

            {/* Frame avec deux colonnes */}
            <View style={homeStyles.locationFrame}>
            {/* Première colonne (1/4 de la largeur) */}
            <View style={homeStyles.locationImageColumn}>
              <Image
                source={require('../assets/images/location-image.png')}
                style={homeStyles.locationImage}
              />
            </View>

            {/* Deuxième colonne (3/4 de la largeur) */}
            <View style={homeStyles.locationTextColumn}>
              {/* Première ligne */}
              <View style={homeStyles.locationRow}>
                <Text style={homeStyles.locationText1}>D-2024-001</Text>
                <Text style={homeStyles.draftText}>Brouillon</Text>
              </View>

              {/* Deuxième ligne */}
              <View style={homeStyles.locationRow}>
                <Image
                  source={require('../assets/images/date_range.png')}
                  style={homeStyles.locationIcon}
                />
                <Text style={homeStyles.locationText}>26 mars - 07 juillet 2024</Text>
              </View>

              {/* Troisième ligne */}
              <View style={homeStyles.locationRow}>
                <View style={homeStyles.locationRow}>
                  <Image
                    source={require('../assets/images/distance.png')} 
                    style={homeStyles.locationIcon}
                  />
                  <Text style={homeStyles.locationText}>Cotonou, Bénin</Text>
                </View>
                <View style={homeStyles.locationRow}>
                  <Image
                    source={require('../assets/images/east.png')} 
                    style={homeStyles.locationIcon2}
                  />
                  <Text style={homeStyles.locationText}>Sokodé, Togo</Text>
                </View>
              </View>
            </View>
          </View>

            {/* Frame avec deux colonnes */}
            <View style={homeStyles.locationFrame}>
            {/* Première colonne (1/4 de la largeur) */}
            <View style={homeStyles.locationImageColumn}>
              <Image
                source={require('../assets/images/location-image.png')}
                style={homeStyles.locationImage}
              />
            </View>

            {/* Deuxième colonne (3/4 de la largeur) */}
            <View style={homeStyles.locationTextColumn}>
              {/* Première ligne */}
              <View style={homeStyles.locationRow}>
                <Text style={homeStyles.locationText1}>D-2024-001</Text>
                <Text style={homeStyles.draftText}>Brouillon</Text>
              </View>

              {/* Deuxième ligne */}
              <View style={homeStyles.locationRow}>
                <Image
                  source={require('../assets/images/date_range.png')}
                  style={homeStyles.locationIcon}
                />
                <Text style={homeStyles.locationText}>26 mars - 07 juillet 2024</Text>
              </View>

              {/* Troisième ligne */}
              <View style={homeStyles.locationRow}>
                <View style={homeStyles.locationRow}>
                  <Image
                    source={require('../assets/images/distance.png')} 
                    style={homeStyles.locationIcon}
                  />
                  <Text style={homeStyles.locationText}>Cotonou, Bénin</Text>
                </View>
                <View style={homeStyles.locationRow}>
                  <Image
                    source={require('../assets/images/east.png')} 
                    style={homeStyles.locationIcon2}
                  />
                  <Text style={homeStyles.locationText}>Sokodé, Togo</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

      </ScrollView>

      {/* Bottom Navigation Bar */}
      <View style={homeStyles.bottomNavBar}>
        {/* Menu Accueil */}
        <TouchableOpacity
          style={homeStyles.navItem}
          onPress={() => setActiveMenu('accueil')} 
        >
          <View
            style={[
              homeStyles.navIconContainer,
              activeMenu === 'accueil' && homeStyles.activeNavIconContainer, 
            ]}
          >
            <Image
              source={require('../assets/images/home.png')} 
              style={homeStyles.navIcon}
            />
          </View>
          <Text
            style={[
              homeStyles.navText,
              activeMenu === 'accueil' && homeStyles.activeNavText, 
            ]}
          >
            Accueil
          </Text>
        </TouchableOpacity>

        {/* Menu Locations */}
        <TouchableOpacity
          style={homeStyles.navItem}
          onPress={() => setActiveMenu('locations')}
        >
          <View style={homeStyles.navIconContainer}>
            <Image
              source={require('../assets/images/location.png')} 
              style={homeStyles.navIcon}
            />
          </View>
          <Text style={homeStyles.navText}>Locations</Text>
        </TouchableOpacity>

        {/* Menu Flotte */}
        <TouchableOpacity
          style={homeStyles.navItem}
          onPress={() => setActiveMenu('flotte')}
        >
          <View style={homeStyles.navIconContainer}>
            <Image
              source={require('../assets/images/local_shipping.png')} 
              style={homeStyles.navIcon}
            />
          </View>
          <Text style={homeStyles.navText}>Flotte</Text>
        </TouchableOpacity>

        {/* Menu Compte */}
        <TouchableOpacity
          style={homeStyles.navItem}
          onPress={() => setActiveMenu('compte')}
        >
          <View style={homeStyles.navIconContainer}>
            <Image
              source={require('../assets/images/account_circle.png')} 
              style={homeStyles.navIcon}
            />
          </View>
          <Text style={homeStyles.navText}>Compte</Text>
        </TouchableOpacity>
      </View>

      {/* Floating Action Button */}
      <TouchableOpacity style={homeStyles.fab}>
      <Image
        source={require('../assets/images/add-solid-for-fab.png')} 
        style={homeStyles.fabIcon}
      />
      </TouchableOpacity>

    </View>
  );
};

export default HomePage;