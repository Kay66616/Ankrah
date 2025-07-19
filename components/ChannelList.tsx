// components/ChannelList.tsx
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { theme } from '../constants/theme';

const channels = ['general', 'design', 'dev', 'marketing'];

export default function ChannelList({ selected, onSelect }) {
  return (
    <View style={styles.sidebar}>
      <Text style={styles.title}>Channels</Text>
      {channels.map((channel) => (
        <TouchableOpacity
          key={channel}
          onPress={() => onSelect(channel)}
          style={[
            styles.channelItem,
            selected === channel && styles.selected,
          ]}
        >
          <Text
            style={[
              styles.channelText,
              selected === channel && styles.selectedText,
            ]}
          >
            # {channel}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  sidebar: {
    width: 140,
    backgroundColor: theme.colors.surface,
    paddingVertical: 16,
    borderRightWidth: 1,
    borderColor: theme.colors.border,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 12,
    marginLeft: 16,
    color: theme.colors.text,
  },
  channelItem: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginVertical: 4,
  },
  selected: {
    backgroundColor: theme.colors.primary + '22',
  },
  channelText: {
    fontSize: 15,
    color: theme.colors.text,
  },
  selectedText: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});
