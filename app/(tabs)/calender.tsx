import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Link } from 'expo-router';
import { useState } from 'react';

export default function CalendarScreen() {
  const [link, setLink] = useState<string | null>(null);

  const generateLink = () => {
    const random = Math.random().toString(36).substring(2, 8);
    const newLink = `https://unite.app/join/${random}`;
    setLink(newLink);
  };

  const copyLink = () => {
    if (!link) return;
    Alert.alert('Copied!', `Link copied to clipboard:\n${link}`);
    // If you later install expo-clipboard, use Clipboard.setStringAsync(link);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>📅 Schedule Meeting</Text>

      <Link href="/(modals)/video-call" asChild>
        <TouchableOpacity style={styles.card}>
          <Text style={styles.title}>📹 New Video Meeting</Text>
          <Text style={styles.subtitle}>Set up a video call with your team</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/(modals)/audio-call" asChild>
        <TouchableOpacity style={styles.card}>
          <Text style={styles.title}>🎧 New Audio Call</Text>
          <Text style={styles.subtitle}>Start a quick voice meeting</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/(modals)/events" asChild>
        <TouchableOpacity style={styles.card}>
          <Text style={styles.title}>📆 Upcoming Events</Text>
          <Text style={styles.subtitle}>View and manage your calendar</Text>
        </TouchableOpacity>
      </Link>

      {/* Generate Join Link */}
      <View style={styles.linkBox}>
        <Text style={styles.title}>🔗 Generate Join Link</Text>
        <Text style={styles.subtitle}>Create a link to share for meetings</Text>

        <TouchableOpacity style={styles.button} onPress={generateLink}>
          <Text style={styles.buttonText}>Create Meeting Link</Text>
        </TouchableOpacity>

        {link && (
          <TouchableOpacity style={styles.linkCard} onPress={copyLink}>
            <Text style={styles.linkText}>{link}</Text>
            <Text style={styles.copyText}>📋 Tap to copy</Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f7f8fa' },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#222',
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 16,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  title: { fontSize: 18, fontWeight: 'bold', color: '#111' },
  subtitle: { fontSize: 14, color: '#555', marginTop: 6 },

  linkBox: {
    marginTop: 32,
    paddingVertical: 10,
  },
  button: {
    backgroundColor: '#3366ff',
    padding: 12,
    borderRadius: 8,
    marginTop: 12,
    marginBottom: 16,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  linkCard: {
    backgroundColor: '#e9f0ff',
    padding: 12,
    borderRadius: 8,
  },
  linkText: {
    color: '#0040aa',
    fontSize: 14,
  },
  copyText: {
    fontSize: 12,
    color: '#888',
    marginTop: 4,
  },
});
