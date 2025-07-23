import ProgressDots from '@/components/ProgressDots';
import COLORS from '@/constants/Colors';
import { useForm } from '@/hooks/formContext';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function LoanInfoScreen() {
  const router = useRouter();
  const { formData, updateField } = useForm();
  const loanOptions = ['Bridge', 'DSCR', 'Fix & Flip', 'Rental', 'Other'];
  const [selectedLoan, setSelectedLoan] = useState(formData.loanType || '');
  const [customLoan, setCustomLoan] = useState('');

  const handleSelect = (option: string) => {
    setSelectedLoan(option);
    if (option !== 'Other') {
      updateField('loanType', option);
      setCustomLoan('');
    } else {
      updateField('loanType', '');
    }
  };

  const handleCustomInput = (text: string) => {
    setCustomLoan(text);
    updateField('loanType', text);
  };

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.background, padding: 24, justifyContent: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', color: COLORS.navy, marginBottom: 8 }}>
        Loan Details
      </Text>
      <Text style={{ fontSize: 14, color: COLORS.accent, marginBottom: 24 }}>
        Tell us about the type of loan you're seeking.
      </Text>

      <View style={{ backgroundColor: '#f5f5f5', padding: 16, borderRadius: 8 }}>
        <Text style={{ color: COLORS.navy, marginBottom: 12 }}>Loan Type</Text>

        {loanOptions.map((option) => (
          <TouchableOpacity
            key={option}
            onPress={() => handleSelect(option)}
            style={{
              padding: 12,
              borderRadius: 6,
              borderWidth: 1,
              borderColor: selectedLoan === option ? COLORS.primary : COLORS.border,
              backgroundColor: selectedLoan === option ? COLORS.primary : '#fff',
              marginBottom: 8,
            }}
          >
            <Text style={{ color: selectedLoan === option ? '#fff' : COLORS.text }}>
              {option}
            </Text>
          </TouchableOpacity>
        ))}

        {selectedLoan === 'Other' && (
          <TextInput
            placeholder="Please specify your loan type"
            value={customLoan}
            onChangeText={handleCustomInput}
            style={{
              borderColor: COLORS.border,
              borderWidth: 1,
              padding: 12,
              borderRadius: 6,
              marginTop: 8,
              backgroundColor: '#fff',
            }}
          />
        )}
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
