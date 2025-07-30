// app/loan/index.tsx
import { useRouter } from 'expo-router';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import COLORS from '../../constants/Colors';

export default function Welcome() {
  const router = useRouter();

  return (
    <View style={styles.screen}>
      <View style={styles.card}>
        <Image
          source={require('../../assets/images/tvc_logo.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>Welcome to Temple View Capital</Text>
        <Text style={styles.subtitle}>Apply for a loan in just a few minutes…</Text>

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
    filter: "drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.5))",
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  logo: {
    width: 300,
    height: 200,
    borderRadius: 40,
    filter: "drop-shadow(1px 1px 3px rgba(0, 0, 0, 5))",
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    fontFamily: 'sans-serif',
    color: COLORS.primary,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'sans-serif',
    color: COLORS.accent,
    marginBottom: 10,
  },
  small: {
    fontSize: 14,
    color: COLORS.text,
    marginBottom: 24,
    textAlign: 'center',
  },
  button: {
    backgroundColor: COLORS.navy,
    filter: "drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.5))",
    paddingVertical: 14,
    paddingHorizontal: 60,
    borderRadius: 8,
    marginTop: 8,
  },
  buttonText: {
    color: COLORS.buttonText,
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'sans-serif',
  },
});
