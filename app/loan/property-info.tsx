import ProgressDots from '@/components/ProgressDots';
import COLORS from '@/constants/Colors';
import { useForm } from '@/hooks/formContext';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function PropertyInfoScreen() {
  const router = useRouter();
  const { formData, updateField } = useForm();

  // Check if required fields are filled
  const isFormValid = () => {
    return (
      formData.Street?.trim() &&
      formData.City?.trim() &&
      formData.State?.trim() &&
      formData.Zip?.trim() &&
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.background, padding: 24, justifyContent: 'center' }}>
      <Text style={{ fontSize: 24, fontFamily: 'sans-serif', color: COLORS.navy, marginBottom: 8 }}>
        Property Info
      </Text>
      <Text style={{ fontSize: 14,fontFamily: 'sans-serif',  fontWeight: 'bold',  color: COLORS.accent, marginBottom: 24 }}>
        Let us know where the property is located.
      </Text>

      <View style={{ backgroundColor: '#f5f5f5', padding: 16, borderRadius: 8 }}>
        <Text style={{ marginBottom: 4 }}>
          <Text style={{ color: 'red' }}>* </Text>
          <Text style={{fontFamily: 'sans-serif', color: COLORS.navy }}>Street</Text>
        </Text>
        <TextInput
          value={formData.Street || ''}
          onChangeText={(text) => updateField('Street', text)}
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

        <Text style={{ marginBottom: 4 }}>
          <Text style={{ color: 'red' }}>* </Text>
          <Text style={{fontFamily: 'sans-serif', color: COLORS.navy }}>City</Text>
        </Text>
        <TextInput
          value={formData.City || ''}
          onChangeText={(text) => updateField('City', text)}
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
         <Text style={{ marginBottom: 4 }}>
          <Text style={{ color: 'red' }}>* </Text>
          <Text style={{fontFamily: 'sans-serif', color: COLORS.navy }}>State/Province</Text>
        </Text>
        <TextInput
          value={formData.State || ''}
          onChangeText={(text) => updateField('State', text)}
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
         <Text style={{ marginBottom: 4 }}>
          <Text style={{ color: 'red' }}>* </Text>
          <Text style={{fontFamily: 'sans-serif', color: COLORS.navy }}>ZIP/Postal Code</Text>
        </Text>
        <TextInput
          value={formData.Zip || ''}
          onChangeText={(text) => updateField('Zip', text)}
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
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 24 }}>
        <TouchableOpacity
          onPress={() => router.push('/loan/credit-score')}
          style={{
            backgroundColor: COLORS.navy,
            paddingVertical: 12,
            paddingHorizontal: 24,
            borderRadius: 6,
          }}
        >
          <Text style={{ color: COLORS.buttonText, fontFamily: 'sans-serif',fontWeight: '500' }}>Previous</Text>
        </TouchableOpacity>

        <ProgressDots total={5} current={5} />

        <TouchableOpacity
          onPress={() => router.push('/loan/confirmation')}
          disabled={!isFormValid()}
          style={{
            backgroundColor: isFormValid() ? COLORS.navy : '#aaa',
            paddingVertical: 12,
            paddingHorizontal: 24,
            borderRadius: 6,
          }}
        >
          <Text style={{ color: COLORS.buttonText,fontFamily: 'sans-serif', fontWeight: '500' }}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
