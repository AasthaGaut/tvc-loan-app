import { FormProvider } from '@/hooks/formContext';
import { Stack } from 'expo-router';

export default function LoanLayout() {
  return (
    
    <FormProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </FormProvider>
  
  );

  
}
