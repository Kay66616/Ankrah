import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const events = [
  {
    id: '1',
    title: 'Design Sync Meeting',
    time: 'Today at 3:00 PM',
    attendees: ['Alice', 'Bob', 'Clara'],
  },
  {
    id: '2',
    title: 'Sprint Planning',
    time: 'Tomorrow at 10:00 AM',
    attendees: ['Dev Team'],
  },
  {
    id: '3',
    title: 'Client Demo Review',
    time: 'Friday at 2:30 PM',
    attendees: ['Client A', 'PMs'],
  },
];

export default function UpcomingEventsScreen() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>📆 Upcoming Meetings</Text>

      {events.map((event) => (
        <View key={event.id} style={styles.card}>
          <Text style={styles.title}>{event.title}</Text>
          <Text style={styles.time}>{event.time}</Text>
          <Text style={styles.attendees}>👥 {event.attendees.join(', ')}</Text>

          <View style={styles.actions}>
            <TouchableOpacity style={styles.joinButton}>
              <Text style={styles.joinText}>Join</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.detailsButton} onPress={() => alert('Opening event details...')}>
              <Text style={styles.detailsText}>View Details</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}

      <TouchableOpacity style={styles.close} onPress={() => router.back()}>
        <Text style={styles.closeText}>⬅ Back</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#f7f8fa' },
  header: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, color: '#111' },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  title: { fontSize: 18, fontWeight: '600', color: '#222' },
  time: { fontSize: 14, color: '#555', marginTop: 4 },
  attendees: { fontSize: 13, color: '#777', marginTop: 8 },
  actions: { flexDirection: 'row', marginTop: 14 },
  joinButton: {
    backgroundColor: '#3366ff',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 8,
    marginRight: 10,
  },
  joinText: { color: '#fff', fontWeight: 'bold', fontSize: 14 },
  detailsButton: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 8,
    backgroundColor: '#eee',
  },
  detailsText: { color: '#333', fontSize: 14 },
  close: {
    marginTop: 24,
    alignSelf: 'center',
  },
  closeText: {
    fontSize: 16,
    color: '#3366ff',
    fontWeight: '500',
  },
});
