import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function VideoCallScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📹 Video Call</Text>

      <View style={styles.callBox}>
        <View style={styles.fakeVideoFeed}>
          <Text style={styles.feedLabel}>Your Camera</Text>
        </View>

        <View style={styles.controls}>
          <TouchableOpacity style={styles.controlButton}>
            <Text style={styles.controlText}>🔇 Mute</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.controlButton, styles.hangup]} onPress={() => router.back()}>
            <Text style={styles.controlText}>❌ End</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.controlButton}>
            <Text style={styles.controlText}>🎥 Toggle</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', justifyContent: 'center', alignItems: 'center' },
  title: { color: '#fff', fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  callBox: { width: '90%', alignItems: 'center' },
  fakeVideoFeed: {
    width: '100%',
    height: 300,
    backgroundColor: '#333',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  feedLabel: { color: '#fff', fontSize: 16 },
  controls: { flexDirection: 'row', justifyContent: 'space-around', width: '100%' },
  controlButton: {
    backgroundColor: '#555',
    padding: 14,
    borderRadius: 40,
    marginHorizontal: 10,
  },
  controlText: { color: '#fff', fontSize: 14 },
  hangup: { backgroundColor: '#ff4d4f' },
});
