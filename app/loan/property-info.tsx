// app/loan/property-info.tsx
import ProgressDots from '@/components/ProgressDots';
import COLORS from '@/constants/Colors';
import { useForm } from '@/hooks/formContext';
import { Picker } from '@react-native-picker/picker';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

const STATES = [
  'AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD',
  'MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC',
  'SD','TN','TX','UT','VT','VA','WA','WV','WI','WY'
];

export default function PropertyInfoScreen() {
  const router = useRouter();
  const { formData, updateField } = useForm();
  const [zip, setZip] = useState(formData.Zip || '');

  // Auto-format ZIP to 5 digits
  const handleZipChange = (text: string) => {
    const formatted = text.replace(/[^0-9]/g, '').slice(0, 5);
    setZip(formatted);
    updateField('Zip', formatted);
  };

  // Check if required fields are filled
  const isFormValid = () => {
    return (
      !!formData.Street?.trim() &&
      !!formData.City?.trim() &&
      !!formData.State?.trim() &&
      !!zip.trim()
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.background, padding: 24, justifyContent: 'center' }}>
      <Text style={{ fontSize: 24, fontFamily: 'sans-serif', color: COLORS.navy, marginBottom: 8 }}>
        Property Info
      </Text>
      <Text style={{ fontSize: 14, fontFamily: 'sans-serif', fontWeight: 'bold', color: COLORS.accent, marginBottom: 24 }}>
        Let us know where the property is located.
      </Text>

      <View style={{ backgroundColor: '#f5f5f5', padding: 16, borderRadius: 8 }}>
        {/* Street */}
        <Text style={{ marginBottom: 4 }}>
          <Text style={{ color: 'red' }}>* </Text>
          <Text style={{ fontFamily: 'sans-serif', color: COLORS.navy }}>Street</Text>
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

        {/* City */}
        <Text style={{ marginBottom: 4 }}>
          <Text style={{ color: 'red' }}>* </Text>
          <Text style={{ fontFamily: 'sans-serif', color: COLORS.navy }}>City</Text>
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

        {/* State Dropdown */}
        <Text style={{ marginBottom: 4 }}>
          <Text style={{ color: 'red' }}>* </Text>
          <Text style={{ fontFamily: 'sans-serif', color: COLORS.navy }}>State</Text>
        </Text>
        <View style={{
          borderColor: COLORS.border,
          borderWidth: 1,
          borderRadius: 6,
          marginBottom: 16,
          backgroundColor: '#fff',
        }}>
          <Picker
            selectedValue={formData.State || ''}
            onValueChange={(value) => updateField('State', value)}
            style={{ height: 50 }}
          >
            <Picker.Item label="Select State" value="" />
            {STATES.map((state) => (
              <Picker.Item key={state} label={state} value={state} />
            ))}
          </Picker>
        </View>

        {/* ZIP */}
        <Text style={{ marginBottom: 4 }}>
          <Text style={{ color: 'red' }}>* </Text>
          <Text style={{ fontFamily: 'sans-serif', color: COLORS.navy }}>ZIP Code</Text>
        </Text>
        <TextInput
          value={zip}
          onChangeText={handleZipChange}
          keyboardType="numeric"
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

      {/* Navigation Buttons */}
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
          <Text style={{ color: COLORS.buttonText, fontFamily: 'sans-serif', fontWeight: '500' }}>Previous</Text>
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
          <Text style={{ color: COLORS.buttonText, fontFamily: 'sans-serif', fontWeight: '500' }}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
