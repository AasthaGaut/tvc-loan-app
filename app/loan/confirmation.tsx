import COLORS from '@/constants/Colors';
import { useForm } from '@/hooks/formContext';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';

export default function ConfirmationScreen() {
  const router = useRouter();
  const { formData, submitForm } = useForm();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      await submitForm();
      setSubmitted(true);
    } catch (err) {
      console.error('Submission failed:', err);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 }}>
        <Text style={{ fontSize: 24, fontFamily: 'sans-serif', color: COLORS.navy, fontWeight: 'bold', marginBottom: 16 }}>
          Thank You!
        </Text>
        <Text style={{ color: COLORS.accent, fontSize: 16, fontFamily: 'sans-serif',textAlign: 'center', marginBottom: 24 }}>
          Your application has been submitted successfully.
        </Text>
        <TouchableOpacity
          onPress={() => router.replace('/loan')}
          style={{
            backgroundColor: COLORS.navy,
            paddingVertical: 12,
            paddingHorizontal: 24,
            borderRadius: 6,
          }}
        >
          <Text style={{ color: COLORS.buttonText, fontFamily: 'sans-serif',fontWeight: '600' }}>Return to Home</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.background, padding: 24, justifyContent: 'center' }}>
      <Text style={{ fontSize: 24,fontFamily: 'sans-serif', color: COLORS.navy, marginBottom: 16 }}>
        Review & Submit
      </Text>

      <View style={{ backgroundColor: '#f5f5f5', padding: 16, borderRadius: 8, marginBottom: 24 }}>
        {Object.entries(formData).map(([key, value]) => (
          <View key={key} style={{ marginBottom: 12 }}>
            <Text style={{ color: COLORS.accent }}>
              {key.replace(/([A-Z])/g, ' $1')}:
            </Text>
            <Text style={{ color: COLORS.text }}>{value || '—'}</Text>
          </View>
        ))}
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity
          onPress={() => router.push('/loan/property-info')}
          style={{
            backgroundColor: COLORS.navy,
            paddingVertical: 14,
            paddingHorizontal: 24,
            borderRadius: 6,
          }}
        >
          <Text style={{ color: COLORS.buttonText, fontFamily: 'sans-serif', fontWeight: '500' }}>Previous</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleSubmit}
          disabled={loading}
          style={{
            backgroundColor: COLORS.button,
            paddingVertical: 14,
            paddingHorizontal: 24,
            borderRadius: 6,
          }}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={{ color: '#fff', fontFamily: 'sans-serif',fontWeight: '500' }}>Submit Application</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}
