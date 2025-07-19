// components/ChatBubble.tsx
import { View, Text, StyleSheet, Image } from 'react-native';
import { theme } from '../constants/theme';

export default function ChatBubble({ message, isOwn }) {
  return (
    <View style={[styles.row, isOwn ? styles.ownRow : styles.otherRow]}>
      {!isOwn && (
        <Image source={{ uri: message.avatar }} style={styles.avatar} />
      )}

      <View style={[styles.bubbleWrapper, isOwn && styles.alignRight]}>
        {!isOwn && <Text style={styles.sender}>{message.user}</Text>}

        <View
          style={[
            styles.bubble,
            {
              backgroundColor: isOwn ? theme.colors.primary : theme.colors.surface,
            },
            isOwn ? styles.bubbleOwn : styles.bubbleOther,
          ]}
        >
          <Text
            style={[
              styles.text,
              { color: isOwn ? '#fff' : theme.colors.text },
            ]}
          >
            {message.text}
          </Text>
          <Text style={styles.timestamp}>{message.time}</Text>
        </View>

        {message.replies?.length > 0 && (
          <View style={styles.replies}>
            {message.replies.map((reply) => (
              <View key={reply.id} style={styles.replyBubble}>
                <Text style={styles.replyUser}>{reply.user}</Text>
                <Text style={styles.replyText}>{reply.text}</Text>
              </View>
            ))}
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginVertical: 6,
    paddingHorizontal: 12,
  },
  ownRow: {
    justifyContent: 'flex-end',
  },
  otherRow: {
    justifyContent: 'flex-start',
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
    marginTop: 4,
  },
  bubbleWrapper: {
    maxWidth: '80%',
  },
  alignRight: {
    alignItems: 'flex-end',
  },
  sender: {
    fontSize: 13,
    fontWeight: '600',
    color: theme.colors.text,
    marginBottom: 4,
  },
  bubble: {
    padding: 12,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 1,
  },
  bubbleOwn: {
    borderTopRightRadius: 0,
  },
  bubbleOther: {
    borderTopLeftRadius: 0,
  },
  text: {
    fontSize: 15,
  },
  timestamp: {
    fontSize: 11,
    color: '#999',
    marginTop: 6,
    textAlign: 'right',
  },
  replies: {
    marginTop: 10,
    paddingLeft: 12,
    borderLeftWidth: 2,
    borderLeftColor: '#ddd',
  },
  replyBubble: {
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
    padding: 8,
    marginTop: 6,
  },
  replyUser: {
    fontWeight: 'bold',
    fontSize: 12,
    marginBottom: 2,
  },
  replyText: {
    fontSize: 13,
  },
});
