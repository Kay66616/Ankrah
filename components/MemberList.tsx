// components/MemberList.tsx
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import { theme } from '../constants/theme';

const members = [
  { id: '1', name: 'Alice', avatar: 'https://ui-avatars.com/api/?name=Alice' },
  { id: '2', name: 'Bob', avatar: 'https://ui-avatars.com/api/?name=Bob' },
  { id: '3', name: 'Charlie', avatar: 'https://ui-avatars.com/api/?name=Charlie' },
  { id: '4', name: 'You', avatar: 'https://ui-avatars.com/api/?name=You' },
];

export default function MemberList() {
  return (
    <FlatList
      data={members}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.container}
      renderItem={({ item }) => (
        <View style={styles.member}>
          <Image source={{ uri: item.avatar }} style={styles.avatar} />
          <Text style={styles.name} numberOfLines={1}>
            {item.name}
          </Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
    backgroundColor: theme.colors.surface,
  },
  member: {
    alignItems: 'center',
    marginRight: theme.spacing.lg,
    width: 56,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginBottom: 4,
    backgroundColor: '#ddd',
  },
  name: {
    fontSize: 12,
    color: theme.colors.text,
    textAlign: 'center',
  },
});
