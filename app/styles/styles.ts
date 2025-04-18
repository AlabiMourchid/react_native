import { StyleSheet } from 'react-native';

export const homeStyles = StyleSheet.create({

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