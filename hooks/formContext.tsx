// hooks/FormContext.tsx
import React, { createContext, useContext } from 'react';
import { useLoanForm } from './useLoanForm';

type FormContextType = ReturnType<typeof useLoanForm>;

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider = ({ children }: { children: React.ReactNode }) => {
  const value = useLoanForm();
  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

export const useForm = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useForm must be used within a FormProvider');
  }
  return context;
};
