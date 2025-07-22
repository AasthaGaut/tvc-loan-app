import ProgressDots from '@/components/ProgressDots';
import COLORS from '@/constants/Colors';
import { useForm } from '@/hooks/formContext';
import { useRouter } from 'expo-router';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function PropertyInfoScreen() {
  const router = useRouter();
  const { formData, updateField } = useForm();
  console.log('Current formData:', formData);


  return (
    <View style={{ flex: 1, backgroundColor: COLORS.background, padding: 24, justifyContent: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', color: COLORS.navy, marginBottom: 8 }}>
        Property Info
      </Text>
      <Text style={{ fontSize: 14, color: COLORS.accent, marginBottom: 24 }}>
        Let us know where the property is located.
      </Text>

      <View style={{ backgroundColor: '#f5f5f5', padding: 16, borderRadius: 8 }}>
        <Text style={{ color: COLORS.navy, marginBottom: 4 }}>Property Address</Text>
        <TextInput
          placeholder="123 Main St, City, State ZIP"
          value={formData.propertyAddress || ''}
          onChangeText={(text) => updateField('propertyAddress', text)}
          style={{
            borderColor: COLORS.border,
            borderWidth: 1,
            padding: 12,
            borderRadius: 6,
            backgroundColor: '#fff',
          }}
        />
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
          <Text style={{ color: COLORS.buttonText, fontWeight: '600' }}>Previous</Text>
        </TouchableOpacity>

        <ProgressDots total={5} current={5} />

        <TouchableOpacity
          onPress={() => router.push('/loan/confirmation')}
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
