// app/loan/loan-info.tsx
import ProgressDots from '@/components/ProgressDots';
import COLORS from '@/constants/Colors';
import { useForm } from '@/hooks/formContext';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export default function LoanInfoScreen() {
  const router = useRouter();
  const { formData, updateField } = useForm();
  const [selectedLoanType, setSelectedLoanType] = useState(formData.LoanType || '');

  const handleSelect = (type: string) => {
    setSelectedLoanType(type);
    updateField('LoanType', type);
  };

  const loanOptions = ['Fix & Flip / Bridge', 'Ground Up Construction', 'Rental Property'];

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.background, padding: 24, justifyContent: 'center' }}>
      <Text style={{ fontSize: 24, fontFamily: 'sans-serif',  color: COLORS.navy, marginBottom: 8 }}>
        Loan Details
      </Text>
      <Text style={{ fontSize: 14, fontWeight: 'bold', fontFamily: 'sans-serif', color: COLORS.accent, marginBottom: 24 }}>
        Tell us about the type of loan you're seeking.
      </Text>

      <View style={{ backgroundColor: '#f5f5f5', padding: 16, borderRadius: 8 }}>
        <Text style={{ color: COLORS.navy,fontFamily: 'sans-serif',  marginBottom: 8 }}>Loan Type</Text>
        {loanOptions.map((option) => (
          <TouchableOpacity
            key={option}
            onPress={() => handleSelect(option)}
            style={{
              padding: 14,
              borderRadius: 6,
              backgroundColor: selectedLoanType === option ? COLORS.navy : '#fff',
              marginBottom: 12,
              borderWidth: 1,
              borderColor: COLORS.border,
            }}
          >
            <Text style={{ color: selectedLoanType === option ? '#fff' : COLORS.navy }}>{option}</Text>
          </TouchableOpacity>
        ))}
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
          <Text style={{ color: COLORS.buttonText, fontFamily: 'sans-serif', fontWeight: '500' }}>Previous</Text>
        </TouchableOpacity>

        <ProgressDots total={5} current={2} />

        <TouchableOpacity
          onPress={() => router.push('/loan/purchase-info')}
          disabled={!selectedLoanType}
          style={{
            backgroundColor: selectedLoanType ? COLORS.navy : '#aaa',
            paddingVertical: 12,
            paddingHorizontal: 24,
            borderRadius: 6,
          }}
        >
          <Text style={{ color: COLORS.buttonText,fontFamily: 'sans-serif',  fontWeight: '500' }}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
