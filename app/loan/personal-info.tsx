// app/loan/personal-info.tsx
import ProgressDots from '@/components/ProgressDots';
import COLORS from '@/constants/Colors';
import { useForm } from '@/hooks/formContext';
import { useRouter } from 'expo-router';
import { Linking, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import Checkbox from 'expo-checkbox';

export default function PersonalInfoScreen() {
  const router = useRouter();
  const { formData, updateField } = useForm();
  const [isChecked, setIsChecked] = useState(false);

  const openLink = (url: string) => {
    Linking.openURL(url);
  };

  // Check if required fields are filled
  const isFormValid = () => {
    return (
      formData.FirstName?.trim() &&
      formData.LastName?.trim() &&
      formData.Phone?.trim() &&
      formData.Email?.trim() &&
      isChecked
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.background, padding: 24, justifyContent: 'center' }}>
      <Text style={{ fontSize: 24,fontFamily: 'sans-serif', color: COLORS.navy, marginBottom: 8 }}>
        Personal Info
      </Text>
      <Text style={{ fontSize: 14, fontFamily: 'sans-serif', fontWeight: 'bold', color: COLORS.accent, marginBottom: 24 }}>
        Let’s start with the basics.
      </Text>

      <View style={{ backgroundColor: '#f5f5f5', padding: 16, borderRadius: 8 }}>
        {/* First Name */}
        <Text style={{ marginBottom: 4 }}>
          <Text style={{ color: 'red' }}>* </Text>
          <Text style={{fontFamily: 'sans-serif', color: COLORS.navy }}>First Name</Text>
        </Text>
        <TextInput
          placeholder="Jane"
          value={formData.FirstName || ''}
          onChangeText={(text) => updateField('FirstName', text)}
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

        {/* Last Name */}
        <Text style={{ marginBottom: 4 }}>
          <Text style={{ color: 'red' }}>* </Text>
          <Text style={{ fontFamily: 'sans-serif',color: COLORS.navy }}>Last Name</Text>
        </Text>
        <TextInput
          placeholder="Doe"
          value={formData.LastName || ''}
          onChangeText={(text) => updateField('LastName', text)}
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

        {/* Phone */}
        <Text style={{ marginBottom: 4 }}>
          <Text style={{ color: 'red' }}>* </Text>
          <Text style={{ fontFamily: 'sans-serif',color: COLORS.navy }}>Phone Number</Text>
        </Text>
        <TextInput
          placeholder="123-456-7890"
          value={formData.Phone || ''}
          onChangeText={(text) => updateField('Phone', text)}
          keyboardType="phone-pad"
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

        {/* Email */}
        <Text style={{ marginBottom: 4 }}>
          <Text style={{ color: 'red' }}>* </Text>
          <Text style={{ fontFamily: 'sans-serif',color: COLORS.navy }}>Email Address</Text>
        </Text>
        <TextInput
          placeholder="example@email.com"
          value={formData.Email || ''}
          onChangeText={(text) => updateField('Email', text)}
          keyboardType="email-address"
          autoCapitalize="none"
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

        {/* Entity Name */}
        <Text style={{ fontFamily: 'sans-serif',color: COLORS.navy, marginBottom: 4 }}>Entity Name (Optional)</Text>
        <TextInput
          placeholder="Your LLC or Entity"
          value={formData.EntityName || ''}
          onChangeText={(text) => updateField('EntityName', text)}
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

      {/* Agreement Section */}
      <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginTop: 16 }}>
        <Checkbox value={isChecked} onValueChange={setIsChecked} color={isChecked ? COLORS.navy : undefined} />
        <Text style={{ flex: 1, marginLeft: 8, fontSize: 12, fontFamily: 'sans-serif',color: COLORS.text }}>
          By checking the box, you are agreeing to receive information by text message/SMS from Temple View Capital Funding, LP (TVC). You are agreeing to receive marketing, 
          promotional, and loan-specific messages from TVC. The frequency of messages may vary. Message and data rates may apply. Carriers are not liable for delayed or
           undelivered messages. Text HELP for help, call us at (844) 232-7878 or email us at info@templeviewcap.com. Reply STOP to unsubscribe.
          <Text style={{fontFamily: 'sans-serif', color: 'red' }} onPress={() => openLink('https://www.templeviewcap.com/terms-condition')}> Terms & Conditions </Text> 
          and 
          <Text style={{ fontFamily: 'sans-serif',color: 'red' }} onPress={() => openLink('https://www.templeviewcap.com/privacy-policy')}> Privacy Policy</Text>.
        </Text>
      </View>

      {/* Navigation Buttons */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 24 }}>
        <TouchableOpacity
          onPress={() => router.push('/loan')}
          style={{
            backgroundColor: COLORS.navy,
            paddingVertical: 12,
            paddingHorizontal: 24,
            borderRadius: 6,
          }}
        >
          <Text style={{ color: COLORS.buttonText,fontFamily: 'sans-serif', fontWeight: '500' }}>Previous</Text>
        </TouchableOpacity>

        <ProgressDots total={5} current={1} />

        <TouchableOpacity
          onPress={() => router.push('/loan/loan-info')}
          disabled={!isFormValid()}
          style={{
            backgroundColor: isFormValid() ? COLORS.navy : '#aaa',
            paddingVertical: 12,
            paddingHorizontal: 24,
            borderRadius: 6,
          }}
        >
          <Text style={{ color: COLORS.buttonText, fontFamily: 'sans-serif',fontWeight: '500' }}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
