import { Tabs } from 'expo-router';
import { Feather } from '@expo/vector-icons';

const iconMap: Record<string, keyof typeof Feather.glyphMap> = {
  chat: 'message-circle',
  calendar: 'calendar',
  activity: 'bell',
  summary: 'file-text',
  profile: 'user',
};

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: true,
        tabBarActiveTintColor: '#3366ff',
        tabBarLabelStyle: { fontSize: 12 },
        tabBarIcon: ({ color, size }) => {
          const iconName = iconMap[route.name] || 'help-circle';
          return <Feather name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tabs.Screen name="chat" options={{ title: 'Chat' }} />
      <Tabs.Screen name="calendar" options={{ title: 'Calendar' }} />
      <Tabs.Screen name="activity" options={{ title: 'Activity' }} />
      <Tabs.Screen name="summary" options={{ title: 'Summary' }} />
      <Tabs.Screen name="profile" options={{ title: 'Profile' }} />
    </Tabs>
  );
}
