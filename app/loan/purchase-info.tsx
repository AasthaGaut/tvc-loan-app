import ProgressDots from '@/components/ProgressDots';
import COLORS from '@/constants/Colors';
import { useForm } from '@/hooks/formContext';
import { useRouter } from 'expo-router';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function PurchaseInfoScreen() {
  const router = useRouter();
  const { formData, updateField } = useForm();
  console.log('Current formData:', formData);


  return (
    <View style={{ flex: 1, backgroundColor: COLORS.background, padding: 24, justifyContent: 'center' }}>
      <Text style={{ fontSize: 24, color: COLORS.navy, marginBottom: 8 }}>
        Purchase & ARV
      </Text>
      <Text style={{ fontSize: 14,  fontFamily: 'sans-serif', fontWeight: 'bold', color: COLORS.accent, marginBottom: 24 }}>
        Provide purchase price, rehab budget, and after-repair value.
      </Text>

      <View style={{ backgroundColor: '#f5f5f5', padding: 16, borderRadius: 8 }}>
        <Text style={{ color: COLORS.navy, marginBottom: 4 }}>Purchase Price</Text>
        <TextInput
          placeholder="$"
          keyboardType="numeric"
          value={formData.PurchasePrice || ''}
          onChangeText={(text) => updateField('PurchasePrice', text)}
          style={{
            borderColor: COLORS.border,
            borderWidth: 1,
            padding: 12,
            borderRadius: 6,
            marginBottom: 16,
            backgroundColor: '#fff',
            fontFamily: 'sans-serif',
          }}
        />

        <Text style={{ color: COLORS.navy, marginBottom: 4 }}>Rehab Budget</Text>
        <TextInput
          placeholder="$"
          keyboardType="numeric"
          value={formData.RehabBudget || ''}
          onChangeText={(text) => updateField('RehabBudget', text)}
          style={{
            borderColor: COLORS.border,
            borderWidth: 1,
            padding: 12,
            borderRadius: 6,
            marginBottom: 16,
            backgroundColor: '#fff',
            fontFamily: 'sans-serif',
          }}
        />

        <Text style={{ color: COLORS.navy, marginBottom: 4 }}>After Repair Value (ARV)</Text>
        <TextInput
          placeholder="$"
          keyboardType="numeric"
          value={formData.Arv || ''}
          onChangeText={(text) => updateField('Arv', text)}
          style={{
            borderColor: COLORS.border,
            borderWidth: 1,
            padding: 12,
            borderRadius: 6,
            backgroundColor: '#fff',
            fontFamily: 'sans-serif',
          }}
        />
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 24 }}>
        <TouchableOpacity
          onPress={() => router.push('/loan/loan-info')}
          style={{
            backgroundColor: COLORS.navy,
            paddingVertical: 12,
            paddingHorizontal: 24,
            borderRadius: 6,
          }}
        >
          <Text style={{ color: COLORS.buttonText, fontFamily: 'sans-serif', fontWeight: '500' }}>Previous</Text>
        </TouchableOpacity>

        <ProgressDots total={5} current={4} />

        <TouchableOpacity
          onPress={() => router.push('/loan/credit-score')}
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
