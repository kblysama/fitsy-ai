import { StyleSheet, View } from 'react-native';
import { Text, Button, TextInput } from 'react-native-paper';

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.contentContainer}>
      <Text style={styles.title}>Giriş Yap</Text>
      
      <View style={styles.formContainer}>
        <TextInput
          label="E-posta"
          mode="outlined"
          style={styles.input}
          outlineColor="#2D3142"
          activeOutlineColor="#2D3142"
        />
        
        <TextInput
          label="Şifre"
          mode="outlined"
          style={styles.input}
          secureTextEntry
          outlineColor="#2D3142"
          activeOutlineColor="#2D3142"
        />
        
        <Button 
          mode="contained" 
          style={styles.button}
          buttonColor="#2D3142"
          onPress={() => navigation.replace('Home')}
        >
          Giriş Yap
        </Button>
        
        <Button 
          mode="text" 
          textColor="#4F5D75"
          onPress={() => navigation.goBack()}
        >
          Geri Dön
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
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 32,
    color: '#2D3142',
    letterSpacing: 1,
  },
  formContainer: {
    width: '100%',
    maxWidth: 300,
    gap: 16,
  },
  input: {
    backgroundColor: '#FFFFFF',
  },
  button: {
    marginTop: 8,
    width: '100%',
    borderRadius: 8,
  },
}); 