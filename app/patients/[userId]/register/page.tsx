import React from "react";
import Image from "next/image";
import RegisterationForm from "@/components/forms/RegistrationForm";

const Register = () => {
  return (
    <div className="flex h-screen max-h-screen">
      <Image
        src="/assets/images/registerImage.jpg"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[390px]"
      />
      <section className="remove-scrollbar container">
      <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
          <Image
            src="/assets/icons/download.png"
            alt="patient"
            width={50}
            height={50}
            className="mb-12 h-10 w-fit"
          />
          <RegisterationForm />
        </div>
      </section>
    </div>
  );
};

export default Register;
