import { StyleSheet, View, ScrollView, Pressable } from 'react-native';
import { Text, Surface, IconButton, Avatar } from 'react-native-paper';

export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <Surface style={styles.header} elevation={2}>
        <View style={styles.headerContent}>
          <Pressable 
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <IconButton
              icon="arrow-left"
              size={24}
              iconColor="#2D3142"
            />
          </Pressable>
          <View style={styles.headerTitleContainer}>
            <Text style={styles.headerTitle}>Profilim</Text>
          </View>
          <View style={styles.headerRight} />
        </View>
      </Surface>

      <ScrollView style={styles.scrollView}>
        {/* Profil Bilgileri */}
        <View style={styles.profileSection}>
          <Surface style={styles.avatarContainer} elevation={2}>
            <IconButton
              icon="account"
              size={60}
              iconColor="#2D3142"
            />
          </Surface>
          <Text style={styles.userName}>[Kullanıcı Adı]</Text>
          <Text style={styles.userEmail}>kullanici@email.com</Text>
        </View>

        {/* Profil Menüsü */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Profil Ayarları</Text>
          <Surface style={styles.menuContainer} elevation={1}>
            <Pressable style={styles.menuItem} onPress={() => console.log('Hesap Bilgileri')}>
              <IconButton icon="account-edit" size={24} iconColor="#2D3142" />
              <Text style={styles.menuText}>Hesap Bilgileri</Text>
              <IconButton icon="chevron-right" size={24} iconColor="#2D3142" />
            </Pressable>

            <View style={styles.divider} />

            <Pressable style={styles.menuItem} onPress={() => console.log('Gizlilik')}>
              <IconButton icon="shield-account" size={24} iconColor="#2D3142" />
              <Text style={styles.menuText}>Gizlilik</Text>
              <IconButton icon="chevron-right" size={24} iconColor="#2D3142" />
            </Pressable>
          </Surface>
        </View>

        {/* Uygulama Ayarları */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Uygulama Ayarları</Text>
          <Surface style={styles.menuContainer} elevation={1}>
            <Pressable style={styles.menuItem} onPress={() => console.log('Bildirimler')}>
              <IconButton icon="bell-outline" size={24} iconColor="#2D3142" />
              <Text style={styles.menuText}>Bildirimler</Text>
              <IconButton icon="chevron-right" size={24} iconColor="#2D3142" />
            </Pressable>

            <View style={styles.divider} />

            <Pressable style={styles.menuItem} onPress={() => console.log('Tema')}>
              <IconButton icon="palette-outline" size={24} iconColor="#2D3142" />
              <Text style={styles.menuText}>Tema</Text>
              <IconButton icon="chevron-right" size={24} iconColor="#2D3142" />
            </Pressable>

            <View style={styles.divider} />

            <Pressable style={styles.menuItem} onPress={() => console.log('Dil')}>
              <IconButton icon="translate" size={24} iconColor="#2D3142" />
              <Text style={styles.menuText}>Dil</Text>
              <IconButton icon="chevron-right" size={24} iconColor="#2D3142" />
            </Pressable>

            <View style={styles.divider} />

            <Pressable style={styles.menuItem} onPress={() => console.log('Yardım')}>
              <IconButton icon="help-circle-outline" size={24} iconColor="#2D3142" />
              <Text style={styles.menuText}>Yardım</Text>
              <IconButton icon="chevron-right" size={24} iconColor="#2D3142" />
            </Pressable>
          </Surface>
        </View>

        {/* Çıkış Yap Butonu */}
        <Pressable 
          style={styles.logoutButton}
          onPress={() => console.log('Çıkış Yap')}
        >
          <Text style={styles.logoutText}>Çıkış Yap</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F9FC',
  },
  header: {
    backgroundColor: '#FFFFFF',
    paddingTop: 60,
    paddingBottom: 20,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
  },
  headerTitleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#2D3142',
  },
  backButton: {
    width: 48,
  },
  headerRight: {
    width: 48,
  },
  scrollView: {
    flex: 1,
  },
  profileSection: {
    alignItems: 'center',
    padding: 32,
  },
  avatarContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#F7F9FC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  userName: {
    fontSize: 24,
    fontWeight: '600',
    color: '#2D3142',
    marginTop: 16,
  },
  userEmail: {
    fontSize: 16,
    color: '#666666',
    marginTop: 4,
  },
  sectionContainer: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2D3142',
    marginLeft: 20,
    marginBottom: 12,
  },
  menuContainer: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    borderRadius: 12,
    overflow: 'hidden',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  menuText: {
    flex: 1,
    fontSize: 16,
    color: '#2D3142',
    marginLeft: 8,
  },
  divider: {
    height: 1,
    backgroundColor: '#E5E5E5',
    marginHorizontal: 16,
  },
  logoutButton: {
    marginTop: 32,
    marginHorizontal: 20,
    marginBottom: 32,
    backgroundColor: '#FF4B55',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  logoutText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
}); 