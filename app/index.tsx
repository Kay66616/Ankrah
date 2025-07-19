import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>👋 Welcome to Unite</Text>
      <Text style={styles.subtitle}>Stay connected. Collaborate easily.</Text>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/login')}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.outlined} onPress={() => router.push('/signup')}>
        <Text style={styles.outlinedText}>Create Account</Text>
      </TouchableOpacity>

      {/* 🔧 Temporary Dev Access to Chat */}
      <TouchableOpacity style={styles.devButton} onPress={() => router.replace('/(tabs)/chat')}>
        <Text style={styles.devText}>🚪 Enter Unite App (Dev)</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 24, backgroundColor: '#eef3ff' },
  logo: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#3366ff',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#3366ff',
    paddingVertical: 14,
    borderRadius: 10,
    marginBottom: 16,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  outlined: {
    borderWidth: 1,
    borderColor: '#3366ff',
    borderRadius: 10,
    paddingVertical: 14,
    marginBottom: 30,
  },
  outlinedText: {
    color: '#3366ff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  devButton: {
    marginTop: 10,
    alignItems: 'center',
  },
  devText: {
    color: '#888',
    fontSize: 14,
  },
});
