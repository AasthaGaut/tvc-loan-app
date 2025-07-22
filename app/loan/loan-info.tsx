import ProgressDots from '@/components/ProgressDots';
import COLORS from '@/constants/Colors';
import { useForm } from '@/hooks/formContext';
import { useRouter } from 'expo-router';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function LoanInfoScreen() {
  const router = useRouter();
  const { formData, updateField } = useForm();
  console.log('Current formData:', formData);


  return (
    <View style={{ flex: 1, backgroundColor: COLORS.background, padding: 24, justifyContent: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', color: COLORS.navy, marginBottom: 8 }}>
        Loan Details
      </Text>
      <Text style={{ fontSize: 14, color: COLORS.accent, marginBottom: 24 }}>
        Tell us about the type of loan you're seeking.
      </Text>

      <View style={{ backgroundColor: '#f5f5f5', padding: 16, borderRadius: 8 }}>
        <Text style={{ color: COLORS.navy, marginBottom: 4 }}>Loan Type</Text>
        <TextInput
          placeholder="Bridge, DSCR, Fix & Flip..."
          value={formData.loanType || ''}
          onChangeText={(text) => updateField('loanType', text)}
          style={{
            borderColor: COLORS.border,
            borderWidth: 1,
            padding: 12,
            borderRadius: 6,
            marginBottom: 16,
            backgroundColor: '#fff',
          }}
        />
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 24 }}>
        <TouchableOpacity
          onPress={() => router.push('/loan/personal-info')}
          style={{
            backgroundColor: COLORS.navy,
            paddingVertical: 12,
            paddingHorizontal: 24,
            borderRadius: 6,
          }}
        >
          <Text style={{ color: COLORS.buttonText, fontWeight: '600' }}>Previous</Text>
        </TouchableOpacity>

        <ProgressDots total={5} current={2} />

        <TouchableOpacity
          onPress={() => router.push('/loan/credit-score')}
          style={{
            backgroundColor: COLORS.navy,
            paddingVertical: 12,
            paddingHorizontal: 24,
            borderRadius: 6,
          }}
        >
          <Text style={{ color: COLORS.buttonText, fontWeight: '600' }}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
