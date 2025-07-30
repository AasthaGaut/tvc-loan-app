import ProgressDots from '@/components/ProgressDots';
import COLORS from '@/constants/Colors';
import { useForm } from '@/hooks/formContext';
import Slider from '@react-native-community/slider';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export default function CreditScoreScreen() {
  const router = useRouter();
  const { formData, updateField } = useForm();
  const [score, setScore] = useState(Number(formData.creditScore) || 650);

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.background, padding: 24, justifyContent: 'center' }}>
      <Text style={{ fontSize: 24, fontFamily: 'sans-serif', color: COLORS.navy, marginBottom: 8 }}>
        Credit Score
      </Text>
      <Text style={{ fontSize: 14, fontFamily: 'sans-serif', fontWeight: 'bold', color: COLORS.accent, marginBottom: 24 }}>
        Use the slider to select your estimated credit score.
      </Text>

      <View style={{ backgroundColor: '#f5f5f5', padding: 20, borderRadius: 8, alignItems: 'center' }}>
        <Text style={{ fontSize: 32, fontFamily: 'sans-serif',  fontWeight: 'bold', color: COLORS.navy }}>{score}</Text>
        <LinearGradient
          colors={[COLORS.accent, COLORS.navy]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{ width: '100%', borderRadius: 8, marginVertical: 16 }}
        >
          <Slider
            value={score}
            minimumValue={300}
            maximumValue={850}
            step={1}
            onValueChange={(val) => setScore(val)}
            onSlidingComplete={(val) => updateField('CreditScore', String(val))}
            minimumTrackTintColor="transparent"
            maximumTrackTintColor="transparent"
            thumbTintColor="#fff"
            style={{ width: '100%', height: 40 }}
          />
        </LinearGradient>
        <Text style={{ fontSize: 14, fontFamily: 'sans-serif', color: COLORS.text }}>Estimated credit score</Text>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 24 }}>
        <TouchableOpacity
          onPress={() => router.push('/loan/purchase-info')}
          style={{
            backgroundColor: COLORS.navy,
            paddingVertical: 12,
            paddingHorizontal: 24,
            borderRadius: 6,
          }}
        >
          <Text style={{ color: COLORS.buttonText, fontFamily: 'sans-serif', fontWeight: '500' }}>Previous</Text>
        </TouchableOpacity>

        <ProgressDots total={5} current={3} />

        <TouchableOpacity
          onPress={() => router.push('/loan/property-info')}
          style={{
            backgroundColor: COLORS.navy,
            paddingVertical: 12,
            paddingHorizontal: 24,
            borderRadius: 6,
          }}
        >
          <Text style={{ color: COLORS.buttonText, fontFamily: 'sans-serif', fontWeight: '500' }}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
