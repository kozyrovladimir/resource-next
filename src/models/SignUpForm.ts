export interface SignUpFormI {
  formik: any; // ReturnType<typeof useFormik>;
  pending: boolean;
  errorMessage: string | undefined;
  successMessage: string | undefined;
  emailError: boolean;
  emailErrorMessage: string | undefined;
  passwordError: boolean;
  passwordErrorMessage: string | undefined;
  nameError: boolean;
  nameErrorMessage: string | undefined;
  resetForm: () => void;
}
