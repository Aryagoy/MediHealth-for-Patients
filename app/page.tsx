import { LoginForm } from "@/pages/LoginForm";
import Image from "next/image";
// Design the login page first
//left form , right image
export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <Image
          src="/assets/icons/download.png"
          alt="patient"
          width={50}
          height={50}
          className="mb-12 h-10 w-fit"
        />
        <div className="sub-container max-w-[496px]">
          {/* TODO : otp verification */}
          <LoginForm />
        </div>
      </section>
    </div>
  );
}
