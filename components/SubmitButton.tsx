import React from "react";
import { Button } from "./ui/button";

interface ButtonProps {
  isLoading: boolean;
  children: React.ReactNode;
}
const SubmitButton = ({ isLoading, children }: ButtonProps) => {
  return (
    <Button type="submit" disabled={isLoading}>
      {children}
    </Button>
  );
};

export default SubmitButton;
