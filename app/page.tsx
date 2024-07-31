import { LoginForm } from "@/pages/LoginForm";
import Image from "next/image";
import Link from "next/link";
// Design the login page first
//left image , right form
export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
      <Image
        src="/assets/images/loginImage.jpg"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[50%]"
      />
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <Image
            src="/assets/icons/download.png"
            alt="patient"
            width={50}
            height={50}
            className="mb-12 h-10 w-fit"
          />
          {/* TODO : otp verification */}
          <LoginForm />
        </div>
      </section>
    </div>
  );
}
