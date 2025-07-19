import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useState } from 'react';

type SummaryItem = {
  id: string;
  text: string;
  time: string;
};

export default function SummaryScreen() {
  const [loading, setLoading] = useState(false);
  const [currentSummary, setCurrentSummary] = useState<null | string>(null);
  const [history, setHistory] = useState<SummaryItem[]>([]);

  const generateSummary = () => {
    setLoading(true);
    setCurrentSummary(null);

    setTimeout(() => {
      const text = `• Alice reviewed the Q3 product roadmap\n` +
        `• Bob discussed backend architecture changes\n` +
        `• Clara introduced a new sprint goal\n\n` +
        `Next Steps:\n- Finalize UI mockups\n- Prepare user testing plan\n- Kick off sprint on Monday`;

      const summaryItem: SummaryItem = {
        id: Date.now().toString(),
        text,
        time: new Date().toLocaleString(),
      };

      setCurrentSummary(text);
      setHistory((prev) => [summaryItem, ...prev]);
      setLoading(false);
    }, 2000);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>🧠 Meeting Summary</Text>

      <TouchableOpacity style={styles.button} onPress={generateSummary} disabled={loading}>
        <Text style={styles.buttonText}>
          {loading ? 'Generating...' : 'Generate Summary'}
        </Text>
      </TouchableOpacity>

      <View style={styles.resultBox}>
        {loading && <ActivityIndicator size="large" color="#3366ff" />}
        {!loading && currentSummary && (
          <Text style={styles.summaryText}>{currentSummary}</Text>
        )}
        {!loading && !currentSummary && (
          <Text style={styles.placeholder}>Tap the button to generate a meeting summary.</Text>
        )}
      </View>

      {history.length > 0 && (
        <View style={styles.historySection}>
          <Text style={styles.historyTitle}>🕓 Past Summaries</Text>
          {history.map((item) => (
            <View key={item.id} style={styles.historyItem}>
              <Text style={styles.historyTime}>{item.time}</Text>
              <Text style={styles.historyText}>{item.text}</Text>
            </View>
          ))}
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f7f8fa',
    flexGrow: 1,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#111',
  },
  button: {
    backgroundColor: '#3366ff',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 24,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  resultBox: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    minHeight: 140,
    justifyContent: 'center',
    marginBottom: 32,
  },
  summaryText: {
    fontSize: 16,
    color: '#222',
    lineHeight: 22,
  },
  placeholder: {
    fontSize: 16,
    color: '#888',
    fontStyle: 'italic',
    textAlign: 'center',
  },
  historySection: {
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingTop: 16,
  },
  historyTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
    color: '#333',
  },
  historyItem: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
  },
  historyTime: {
    fontSize: 12,
    color: '#777',
    marginBottom: 4,
  },
  historyText: {
    fontSize: 14,
    color: '#222',
    lineHeight: 20,
  },
});
