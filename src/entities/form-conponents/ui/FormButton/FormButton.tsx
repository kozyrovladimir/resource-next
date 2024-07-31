import React from 'react';
import {Button} from "@/shared";


interface FormButtonType {
  children?: React.ReactNode;
  onClick: any;
  pending: boolean;
}

const FormButton: React.FC<FormButtonType> = ({ children, onClick, pending }) => {
  return (
    <Button
      disabled={pending}
      onClick={onClick}
      fullWidth={true}
    >
      {pending ? 'SENDING DATA...' : <>{children}</>}
    </Button>
  );
};

export default FormButton;
