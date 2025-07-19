import { useWindowDimensions, View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';
import ChannelList from './ChannelList';
import { theme } from '../constants/theme';

export default function ResponsiveSidebar({ selected, onSelect }) {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;
  const [visible, setVisible] = useState(false);

  if (!isMobile) {
    return <ChannelList selected={selected} onSelect={onSelect} />;
  }

  return (
    <View style={styles.mobileHeader}>
      <TouchableOpacity onPress={() => setVisible(true)}>
        <Text style={styles.hamburger}>☰</Text>
      </TouchableOpacity>

      <Modal visible={visible} animationType="slide">
        <View style={styles.modal}>
          <Text style={styles.close} onPress={() => setVisible(false)}>✕</Text>
          <ChannelList
            selected={selected}
            onSelect={(channel) => {
              onSelect(channel);
              setVisible(false);
            }}
          />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  mobileHeader: {
    width: 50,
    padding: theme.spacing.md,
    backgroundColor: theme.colors.surface,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hamburger: {
    fontSize: 24,
    color: theme.colors.text,
  },
  modal: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  close: {
    fontSize: 24,
    alignSelf: 'flex-end',
    padding: theme.spacing.md,
  },
});
