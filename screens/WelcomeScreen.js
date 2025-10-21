import { StyleSheet, View } from 'react-native';
import { Text, Button } from 'react-native-paper';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.contentContainer}>
      <Text style={styles.title}>Fitsy</Text>
      <Text style={styles.subtitle}>Kıyafetlerinizi organize edin, harika kombinler oluşturun!</Text>
      
      <View style={styles.buttonContainer}>
        <Button 
          mode="contained" 
          style={styles.button}
          buttonColor="#2D3142"
          onPress={() => navigation.navigate('Login')}
        >
          Giriş Yap
        </Button>
        
        <Button 
          mode="outlined" 
          style={styles.button}
          textColor="#2D3142"
          onPress={() => navigation.navigate('Register')}
        >
          Kayıt Ol
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F7F9FC',
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#2D3142',
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 48,
    color: '#4F5D75',
    lineHeight: 22,
    maxWidth: 300,
  },
  buttonContainer: {
    width: '100%',
    maxWidth: 300,
    gap: 12,
  },
  button: {
    marginVertical: 6,
    width: '100%',
    borderRadius: 8,
  },
}); 