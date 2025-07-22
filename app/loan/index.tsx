// app/loan/index.tsx
import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import COLORS from '../../constants/Colors';

export default function Welcome() {
  const router = useRouter();

  return (
    <View style={styles.screen}>
      <View style={styles.card}>
        {/* Replace with actual logo when ready */}
        <View style={styles.logoPlaceholder} />
        <Text style={styles.title}>Temple View Capital</Text>
        <Text style={styles.subtitle}>Welcome to Temple View Capital</Text>
        <Text style={styles.small}>Apply for a loan in just a few minutes…</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('/loan/personal-info')}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '90%',
    padding: 24,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  logoPlaceholder: {
    width: 120,
    height: 120,
    marginBottom: 16,
    backgroundColor: COLORS.navy,
    borderRadius: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: COLORS.primary,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '500',
    color: COLORS.accent,
    marginBottom: 4,
  },
  small: {
    fontSize: 14,
    color: COLORS.text,
    marginBottom: 24,
    textAlign: 'center',
  },
  button: {
    backgroundColor: COLORS.navy,
    paddingVertical: 14,
    paddingHorizontal: 60,
    borderRadius: 8,
    marginTop: 8,
  },
  buttonText: {
    color: COLORS.buttonText,
    fontSize: 16,
    fontWeight: '600',
  },
  progress: {
    flexDirection: 'row',
    marginTop: 24,
    justifyContent: 'center',
    width: '100%',
  },
  dot: {
    width: 10,
    height: 10,
    backgroundColor: '#bbb',
    borderRadius: 5,
    marginHorizontal: 4,
  },
});
