import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { useState } from 'react';

type Message = {
  id: string;
  text: string;
  sender: string;
  timestamp: string;
  isMe: boolean;
};

export default function ChatScreen() {
  const [input, setInput] = useState('');
  const [selectedUser, setSelectedUser] = useState('Alice'); // default user to chat with
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hey Alice!',
      sender: 'Me',
      timestamp: '10:00 AM',
      isMe: true,
    },
    {
      id: '2',
      text: 'Hi there! Ready for the meeting?',
      sender: 'Alice',
      timestamp: '10:01 AM',
      isMe: false,
    },
  ]);

  const members = ['Alice', 'Bob', 'Clara'];

  const sendMessage = () => {
    if (!input.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      text: input.trim(),
      sender: 'Me',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isMe: true,
    };

    setMessages([newMessage, ...messages]);
    setInput('');
  };

  return (
    <KeyboardAvoidingView style={styles.wrapper} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <View style={styles.row}>
        {/* ✅ Member List Sidebar */}
        <View style={styles.members}>
          <Text style={styles.membersTitle}>💬 Members</Text>
          {members.map((member) => (
            <TouchableOpacity
              key={member}
              style={[styles.userItem, selectedUser === member && styles.activeUser]}
              onPress={() => {
                setSelectedUser(member);
                setMessages([]); // clear messages for now when switching
              }}
            >
              <Text style={styles.userText}>{member}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* ✅ Chat Area */}
        <View style={styles.chatArea}>
          <FlatList
            inverted
            data={messages}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={[styles.messageRow, item.isMe ? styles.myRow : styles.otherRow]}>
                {!item.isMe && (
                  <View style={styles.avatar}>
                    <Text style={styles.avatarText}>{item.sender[0]}</Text>
                  </View>
                )}
                <View style={[styles.bubble, item.isMe ? styles.myBubble : styles.otherBubble]}>
                  {!item.isMe && <Text style={styles.sender}>{item.sender}</Text>}
                  <Text style={styles.text}>{item.text}</Text>
                  <Text style={styles.timestamp}>{item.timestamp}</Text>
                </View>
              </View>
            )}
            contentContainerStyle={{ padding: 16 }}
          />

          <View style={styles.inputArea}>
            <TextInput
              style={styles.input}
              placeholder={`Message ${selectedUser}`}
              value={input}
              onChangeText={setInput}
            />
            <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
              <Text style={styles.sendText}>➤</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  wrapper: { flex: 1 },
  row: { flex: 1, flexDirection: 'row' },

  // 👤 Member list styles
  members: {
    width: 180,
    backgroundColor: '#f2f4f8',
    padding: 12,
    borderRightWidth: 1,
    borderRightColor: '#ddd',
  },
  membersTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  userItem: {
    paddingVertical: 10,
    paddingHorizontal: 6,
    borderRadius: 6,
    marginBottom: 8,
  },
  activeUser: {
    backgroundColor: '#3366ff20',
  },
  userText: {
    fontSize: 15,
    color: '#222',
  },

  // 💬 Chat area styles
  chatArea: {
    flex: 1,
    backgroundColor: '#f4f6fa',
  },
  messageRow: {
    flexDirection: 'row',
    marginBottom: 12,
    alignItems: 'flex-end',
  },
  myRow: { justifyContent: 'flex-end' },
  otherRow: { justifyContent: 'flex-start' },
  avatar: {
    width: 36,
    height: 36,
    backgroundColor: '#3366ff',
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  avatarText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  bubble: {
    maxWidth: '80%',
    padding: 10,
    borderRadius: 12,
  },
  myBubble: {
    backgroundColor: '#3366ff',
    borderBottomRightRadius: 0,
  },
  otherBubble: {
    backgroundColor: '#e4e9f2',
    borderBottomLeftRadius: 0,
  },
  sender: {
    fontSize: 12,
    color: '#444',
    fontWeight: 'bold',
    marginBottom: 2,
  },
  text: {
    fontSize: 15,
    color: '#111',
  },
  timestamp: {
    fontSize: 10,
    color: '#888',
    alignSelf: 'flex-end',
    marginTop: 4,
  },
  inputArea: {
    flexDirection: 'row',
    padding: 12,
    borderTopWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    height: 44,
    borderRadius: 10,
    backgroundColor: '#f1f3f5',
    paddingHorizontal: 12,
    fontSize: 15,
  },
  sendButton: {
    marginLeft: 8,
    backgroundColor: '#3366ff',
    paddingHorizontal: 16,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendText: {
    color: '#fff',
    fontSize: 16,
  },
});
