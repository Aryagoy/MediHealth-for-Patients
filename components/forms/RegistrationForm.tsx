"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Image from "next/image";
import { Form, FormControl } from "@/components/ui/form";

import { UserFormValidation } from "@/lib/validation";

import "react-phone-number-input/style.css";

import SubmitButton from "../SubmitButton";
import { createUser } from "@/lib/actions/patient.action";
import FormFields, { FormFieldType } from "./FormField";
import { User } from "@/types";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Doctors, GenderOptions, IdentificationTypes } from "@/constants";
import { Label } from "../ui/label";
import { SelectItem } from "../ui/select";

export const RegisterationForm = ({ user }: { user: User }) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof UserFormValidation>) => {
    setIsLoading(true);

    try {
      const user = {
        name: values.name,
        email: values.email,
        phone: values.phone,
      };

      const newUser = await createUser(user);

      if (newUser) {
        router.push(`/patients/${newUser.$id}/register`);
      }
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 flex-1"
        >
          {/* personal info */}
          <section className="space-y-6">
            <div className="mb-9 space-y-1">
              <h2 className="sub-header">Personal Information</h2>
            </div>
            <FormFields
              fieldType={FormFieldType.INPUT}
              control={form.control}
              name="name"
              label="Full name"
              placeholder="John Doe"
              iconSrc="/assets/icons/user.svg"
              iconAlt="user"
            />
            <div className="flex flex-row gap-6 xl:flex-grow">
              <FormFields
                fieldType={FormFieldType.INPUT}
                control={form.control}
                name="email"
                label="Email address"
                placeholder="johndoe@gmail.com"
                iconSrc="/assets/icons/email.svg"
                iconAlt="email"
              />
              <FormFields
                fieldType={FormFieldType.PHONE_INPUT}
                control={form.control}
                name="phone"
                label="Phone number"
                placeholder="(555) 123-4567"
              />
            </div>
            <div className="flex flex-row gap-6 xl:flex-grow">
              <FormFields
                fieldType={FormFieldType.DATE_PICKER}
                control={form.control}
                name="birthDate"
                label="Date of Birth"
                placeholder="Select your birth date"
              />
              <FormFields
                fieldType={FormFieldType.SKELETON}
                control={form.control}
                name="gender"
                label="Gender"
                renderSkeleton={(field: any) => (
                  <FormControl>
                    <RadioGroup
                      className="flex h-11 gap-6 xl:justify-between"
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      {GenderOptions.map((option, i) => (
                        <div key={option + i} className="radio-group">
                          <RadioGroupItem value={option} id={option} />
                          <Label htmlFor={option} className="cursor-pointer">
                            {option}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </FormControl>
                )}
              />
            </div>
            <div className="flex flex-row gap-6 xl:flex-grow">
              <FormFields
                fieldType={FormFieldType.INPUT}
                control={form.control}
                name="address"
                label="Address"
                placeholder="ex: 14 street, New York , NY , 11214"
              />
              <FormFields
                fieldType={FormFieldType.INPUT}
                control={form.control}
                name="occupation"
                label="Occupation"
                placeholder="Software engineer"
              />
            </div>
          </section>
          {/* medical info */}
          <section className="space-y-6">
            <div className="mb-9 space-y-1">
              <h2 className="sub-header">Medical Information</h2>
            </div>
            <FormFields
              fieldType={FormFieldType.SELECT}
              control={form.control}
              name="primaryPhysician"
              label="Primary care physician"
              placeholder="Select a physician"
            >
              {Doctors.map((doctor, i) => (
                <SelectItem key={doctor.name + i} value={doctor.name}>
                  <div className="flex cursor-pointer items-center gap-2">
                    <Image
                      src={doctor.image}
                      width={32}
                      height={32}
                      alt="doctor"
                      className="rounded-full border border-dark-500"
                    />
                    <p>{doctor.name}</p>
                  </div>
                </SelectItem>
              ))}
            </FormFields>
            <div className="flex flex-col gap-6 xl:flex-row">
              <FormFields
                fieldType={FormFieldType.INPUT}
                control={form.control}
                name="insuranceProvider"
                label="Insurance provider"
                placeholder="BlueCross BlueShield"
              />

              <FormFields
                fieldType={FormFieldType.INPUT}
                control={form.control}
                name="insurancePolicyNumber"
                label="Insurance policy number"
                placeholder="ABC123456789"
              />
            </div>
            <div className="flex flex-col gap-6 xl:flex-row">
              <FormFields
                fieldType={FormFieldType.TEXTAREA}
                control={form.control}
                name="allergies"
                label="Allergies (if any)"
                placeholder="Peanuts, Penicillin, Pollen"
              />

              <FormFields
                fieldType={FormFieldType.TEXTAREA}
                control={form.control}
                name="currentMedication"
                label="Current medications"
                placeholder="Ibuprofen 200mg, Levothyroxine 50mcg"
              />
            </div>
          </section>
          <section className="space-y-6">
            <div className="mb-9 space-y-1">
              <h2 className="sub-header">Identification and Verification</h2>
            </div>
            <FormFields
              fieldType={FormFieldType.SELECT}
              control={form.control}
              name="identificationType"
              label="Identification Type"
              placeholder="Select identification type"
            >
              {IdentificationTypes.map((type, i) => (
                <SelectItem key={type + i} value={type}>
                  {type}
                </SelectItem>
              ))}
            </FormFields>
            <FormFields
              fieldType={FormFieldType.SKELETON}
              control={form.control}
              name="identificationDocument"
              label="Scanned Copy of Identification Document"
            />
          </section>
          <SubmitButton isLoading={isLoading}>Register</SubmitButton>
        </form>
      </Form>
    </>
  );
};
