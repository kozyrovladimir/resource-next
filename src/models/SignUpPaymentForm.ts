export interface SignUpPaymentFormI {
  formik: any; // ReturnType<typeof useFormik>;
  emailError: boolean;
  emailErrorMessage: string | undefined;
  passwordError: boolean;
  passwordErrorMessage: string | undefined;
  nameError: boolean;
  nameErrorMessage: string | undefined;
  pending: boolean;
  setPending: React.Dispatch<React.SetStateAction<boolean>>;
}
