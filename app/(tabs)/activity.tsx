import { View, Text, StyleSheet, ScrollView } from 'react-native';

const activityFeed = [
  { id: 1, icon: '👤', text: 'Alice created a meeting "Design Sync"' },
  { id: 2, icon: '📁', text: 'Bob shared a file "UI_wireframes.pdf"' },
  { id: 3, icon: '✏️', text: 'Clara edited the project plan document' },
  { id: 4, icon: '📣', text: 'Team stand-up scheduled for tomorrow' },
];

export default function ActivityScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>🔔 Activity</Text>

      {activityFeed.map((item) => (
        <View key={item.id} style={styles.item}>
          <Text style={styles.icon}>{item.icon}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f7f8fa' },
  header: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, color: '#111' },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginBottom: 12,
    padding: 12,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
  },
  icon: { fontSize: 22, marginRight: 12 },
  text: { fontSize: 16, color: '#333' },
});
