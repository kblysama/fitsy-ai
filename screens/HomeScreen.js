import { StyleSheet, View, ScrollView, Pressable, Animated } from 'react-native';
import { Text, Surface, IconButton } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState, useRef, useEffect } from 'react';

const WEATHER_API_KEY = '';
const CITY = 'Istanbul'; // Varsayılan şehir

export default function HomeScreen({ navigation }) {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  // Animasyon değerleri için refs
  const homeScale = useRef(new Animated.Value(1)).current;
  const plusScale = useRef(new Animated.Value(1)).current;
  const aiScale = useRef(new Animated.Value(1)).current;
  const searchScale = useRef(new Animated.Value(1)).current;
  const profileScale = useRef(new Animated.Value(1)).current;

  // Hava durumu verilerini çek
  useEffect(() => {
    fetchWeather();
  }, []);

  const fetchWeather = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&units=metric&appid=${WEATHER_API_KEY}`
      );
      const data = await response.json();
      setWeather(data);
    } catch (error) {
      console.error('Hava durumu verileri alınamadı:', error);
    } finally {
      setLoading(false);
    }
  };

  // Hava durumu ikonunu al
  const getWeatherIcon = (iconCode) => {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  };

  // Animasyon fonksiyonu
  const animatePress = (animatedValue) => {
    Animated.sequence([
      Animated.timing(animatedValue, {
        toValue: 0.9,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.greeting}>Merhaba, [Kullanıcı Adı]!</Text>
        </View>
        <View style={styles.profileSection}>
          <Animated.View style={{ transform: [{ scale: profileScale }] }}>
            <Pressable
              onPress={() => {
                animatePress(profileScale);
                navigation.navigate('Profile');
              }}
            >
              <Surface style={styles.profileButton} elevation={2}>
                <IconButton
                  icon="account"
                  size={24}
                  iconColor="#2D3142"
                />
              </Surface>
            </Pressable>
          </Animated.View>
          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>0</Text>
              <Text style={styles.statLabel}>Takipçi</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>0</Text>
              <Text style={styles.statLabel}>Takip</Text>
            </View>
          </View>
        </View>
      </View>

      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        {/* Hava Durumu Bileşeni */}
        <Surface style={styles.weatherContainer} elevation={1}>
          {loading ? (
            <Text>Yükleniyor...</Text>
          ) : weather ? (
            <View style={styles.weatherContent}>
              <View style={styles.weatherMain}>
                <Text style={styles.temperature}>
                  {Math.round(weather.main.temp)}°C
                </Text>
                <Text style={styles.weatherDescription}>
                  {weather.weather[0].description}
                </Text>
                <Text style={styles.cityName}>
                  {weather.name}
                </Text>
              </View>
              <View style={styles.weatherDetails}>
                <View style={styles.weatherDetail}>
                  <IconButton icon="water-percent" size={24} iconColor="#4F5D75" />
                  <Text style={styles.weatherDetailText}>
                    {weather.main.humidity}%
                  </Text>
                </View>
                <View style={styles.weatherDetail}>
                  <IconButton icon="weather-windy" size={24} iconColor="#4F5D75" />
                  <Text style={styles.weatherDetailText}>
                    {Math.round(weather.wind.speed)} m/s
                  </Text>
                </View>
              </View>
            </View>
          ) : (
            <Text>Hava durumu bilgisi alınamadı</Text>
          )}
        </Surface>

        {/* Kıyafetlerim Bölümü */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Kıyafetlerim</Text>
            <Pressable onPress={() => console.log('Tümünü gör')}>
              <Text style={styles.seeAllButton}>Tümünü gör {'>'}</Text>
            </Pressable>
          </View>
          
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
            {[1, 2, 3].map((item) => (
              <Pressable key={item} onPress={() => console.log('Kıyafet seçildi')}>
                <Surface style={styles.clothingItem} elevation={1}>
                  <View style={styles.imageContainer}>
                    <Text style={styles.itemText}>RESİM</Text>
                  </View>
                </Surface>
              </Pressable>
            ))}
          </ScrollView>
        </View>

        {/* Kombinlerim Bölümü */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Kombinlerim</Text>
            <Pressable onPress={() => console.log('Tümünü gör')}>
              <Text style={styles.seeAllButton}>Tümünü gör {'>'}</Text>
            </Pressable>
          </View>
          
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
            {[1, 2, 3].map((item) => (
              <Pressable key={item} onPress={() => console.log('Kombin seçildi')}>
                <Surface style={styles.outfitItem} elevation={1}>
                  <View style={styles.imageContainer}>
                    <Text style={styles.itemText}>KOMBİN {item}</Text>
                  </View>
                </Surface>
              </Pressable>
            ))}
          </ScrollView>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <Surface style={styles.bottomNav} elevation={8}>
        <View style={styles.navContainer}>
          <Animated.View style={[{ transform: [{ scale: aiScale }] }]}>
            <Pressable 
              style={styles.navButton}
              onPress={() => {
                animatePress(aiScale);
                console.log('AI');
              }}
            >
              <IconButton
                icon="robot"
                size={28}
                iconColor="#2D3142"
              />
            </Pressable>
          </Animated.View>

          <Animated.View style={[{ transform: [{ scale: plusScale }] }]}>
            <Pressable 
              style={styles.addButton}
              onPress={() => {
                animatePress(plusScale);
                console.log('Ekle');
              }}
            >
              <View style={styles.addButtonInner}>
                <IconButton
                  icon="plus"
                  size={32}
                  iconColor="#FFFFFF"
                />
              </View>
            </Pressable>
          </Animated.View>

          <Animated.View style={[{ transform: [{ scale: searchScale }] }]}>
            <Pressable 
              style={styles.navButton}
              onPress={() => {
                animatePress(searchScale);
                console.log('Ara');
              }}
            >
              <IconButton
                icon="magnify"
                size={28}
                iconColor="#2D3142"
              />
            </Pressable>
          </Animated.View>
        </View>
      </Surface>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F9FC',
  },
  scrollView: {
    flex: 1,
    paddingTop: 20,
  },
  scrollContent: {
    paddingBottom: 100,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 5,
    backgroundColor: '#FFFFFF',
  },
  headerLeft: {
    flex: 1,
  },
  greeting: {
    fontSize: 22,
    fontWeight: '600',
    color: '#2D3142',
    paddingTop: 25,
    paddingBottom: 5,
  },
  profileSection: {
    alignItems: 'center',
  },
  profileButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#F7F9FC',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 12,
  },
  statsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    gap: 12,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 13,
    fontWeight: '600',
    color: '#2D3142',
  },
  statLabel: {
    fontSize: 11,
    color: '#4F5D75',
    marginTop: 1,
  },
  statDivider: {
    width: 1,
    height: 14,
    backgroundColor: '#E5E9F0',
  },
  section: {
    marginBottom: 32,
    marginTop: 10,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2D3142',
  },
  seeAllButton: {
    color: '#4F5D75',
    fontSize: 14,
  },
  horizontalScroll: {
    paddingLeft: 20,
  },
  clothingItem: {
    width: 140,
    height: 140,
    marginRight: 16,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
  },
  outfitItem: {
    width: 180,
    height: 220,
    marginRight: 16,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F2F5',
  },
  itemText: {
    color: '#9BA5B7',
    fontSize: 16,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    height: 80,
    paddingBottom: 30,
  },
  navContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    paddingHorizontal: 40,
    height: '100%',
  },
  navButton: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 0,
  },
  addButton: {
    marginBottom: 25,
  },
  addButtonInner: {
    width: 64,
    height: 64,
    backgroundColor: '#2D3142',
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  weatherContainer: {
    marginHorizontal: 20,
    marginBottom: 24,
    padding: 20,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
  },
  weatherContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  weatherMain: {
    flex: 1,
  },
  temperature: {
    fontSize: 32,
    fontWeight: '600',
    color: '#2D3142',
  },
  weatherDescription: {
    fontSize: 16,
    color: '#4F5D75',
    textTransform: 'capitalize',
    marginTop: 4,
  },
  cityName: {
    fontSize: 14,
    color: '#4F5D75',
    marginTop: 4,
    fontWeight: '500',
  },
  weatherDetails: {
    flexDirection: 'row',
    gap: 16,
  },
  weatherDetail: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  weatherDetailText: {
    fontSize: 14,
    color: '#4F5D75',
    marginLeft: 4,
  },
}); 
