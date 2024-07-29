import React from "react";

export const useDialog = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const handleOpen = (): void => {
    setIsOpen(true);
  };

  const handleClose = (): void => {
    setIsOpen(false);
  };

  return {
    isOpen,
    handleOpen,
    handleClose,
  }
};
