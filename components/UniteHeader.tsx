// components/UniteHeader.tsx
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { theme } from '../constants/theme';
import { Ionicons } from '@expo/vector-icons';

export default function UniteHeader() {
  return (
    <View style={styles.container}>
      {/* App Logo / Title */}
      <Text style={styles.logo}>Unite</Text>

      {/* Right-side icons */}
      <View style={styles.right}>
        <TouchableOpacity style={styles.iconWrapper}>
          <Ionicons name="notifications-outline" size={22} color={theme.colors.text} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            source={{ uri: 'https://ui-avatars.com/api/?name=You' }}
            style={styles.avatar}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 56,
    backgroundColor: theme.colors.surface,
    paddingHorizontal: theme.spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: theme.colors.border,
    borderBottomWidth: 1,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  logo: {
    fontSize: theme.fonts.size.lg,
    fontWeight: 'bold',
    color: theme.colors.text,
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrapper: {
    marginRight: theme.spacing.md,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
});
