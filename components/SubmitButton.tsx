import React from "react";
import { Button } from "./ui/button";

interface ButtonProps {
  isLoading: boolean;
  children: React.ReactNode;
  className?: string;
}
const SubmitButton = ({ isLoading, children, className }: ButtonProps) => {
  return (
    <Button
      type="submit"
      disabled={isLoading}
      className={className ?? "shad-primary-btn w-full"}
    >
      {children}
    </Button>
  );
};

export default SubmitButton;
