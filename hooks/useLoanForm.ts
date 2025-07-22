import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useState } from 'react';
import { db } from '../lib/firebase';

export type LoanFormData = {
  fullName?: string;
  phone?: string;
  email?: string;
  loanType?: string;
  purchasePrice?: string;
  rehabBudget?: string;
  arv?: string;
  creditScore?: string;
  propertyAddress?: string;
};

export function useLoanForm() {
  const [formData, setFormData] = useState<LoanFormData>({});

  const updateField = (field: keyof LoanFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const submitForm = async () => {
    try {
      await addDoc(collection(db, 'loan_applications'), {
        ...formData,
        submittedAt: serverTimestamp(),
      });
      console.log('Form submitted!');
    } catch (err) {
      console.error('Error submitting form:', err);
    }
  };

  return {
    formData,
    updateField,
    submitForm,
  };
}
