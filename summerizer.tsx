import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { useState } from 'react';

export default function SummarizerScreen() {
  const [inputText, setInputText] = useState('');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSummarize = async () => {
    if (!inputText.trim()) return;

    setLoading(true);
    setSummary('');

    try {
      const res = await fetch('https://your-backend.com/api/summarize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: inputText }),
      });

      const data = await res.json();
      setSummary(data.summary || 'No summary returned.');
    } catch (err) {
      setSummary('Error generating summary.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>AI Meeting Summarizer</Text>

      <TextInput
        style={styles.input}
        multiline
        numberOfLines={8}
        placeholder="Paste your meeting notes or transcript here..."
        value={inputText}
        onChangeText={setInputText}
      />

      <TouchableOpacity style={styles.button} onPress={handleSummarize}>
        <Text style={styles.buttonText}>Summarize</Text>
      </TouchableOpacity>

      {loading && <ActivityIndicator size="large" color="#3366ff" style={{ marginTop: 20 }} />}

      {!!summary && (
        <View style={styles.output}>
          <Text style={styles.summaryTitle}>Summary:</Text>
          <Text style={styles.summaryText}>{summary}</Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, color: '#3366ff' },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    minHeight: 120,
    backgroundColor: '#fff',
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#3366ff',
    padding: 14,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  output: { marginTop: 30, padding: 16, backgroundColor: '#f1f4ff', borderRadius: 10 },
  summaryTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 10 },
  summaryText: { fontSize: 14, color: '#333' },
});
