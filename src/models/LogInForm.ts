export interface UseLoginFormI {
  formik: any; // ReturnType<typeof useFormik>;
  pending: boolean;
  errorMessage: string | undefined;
  emailError: boolean;
  emailErrorMessage: string | undefined;
  passwordError: boolean;
  passwordErrorMessage: string | undefined;
  resetForm: () => void;
}
