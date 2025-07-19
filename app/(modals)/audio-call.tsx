import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function AudioCallScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.caller}>Calling Clara...</Text>

      <View style={styles.avatar}>
        <Text style={styles.avatarText}>C</Text>
      </View>

      <View style={styles.controls}>
        <TouchableOpacity style={styles.controlButton}>
          <Text style={styles.controlText}>🔇 Mute</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.controlButton, styles.hangup]} onPress={() => router.back()}>
          <Text style={styles.controlText}>❌ End</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.controlButton}>
          <Text style={styles.controlText}>🔊 Speaker</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#111', alignItems: 'center', justifyContent: 'center' },
  caller: { fontSize: 20, color: '#fff', marginBottom: 20 },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#3366ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  avatarText: { color: '#fff', fontSize: 48, fontWeight: 'bold' },
  controls: { flexDirection: 'row', justifyContent: 'space-around', width: '90%' },
  controlButton: {
    backgroundColor: '#555',
    padding: 16,
    borderRadius: 40,
    marginHorizontal: 10,
  },
  controlText: { color: '#fff', fontSize: 14 },
  hangup: { backgroundColor: '#ff4d4f' },
});
