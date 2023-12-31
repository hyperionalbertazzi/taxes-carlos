import { useForm, SubmitHandler } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { ContactFormSchema } from "@/lib/schema";
import { sendEmail } from "@/app/_actions";
import { Toaster, toast } from "sonner";

export type ContactFormInputs = z.infer<typeof ContactFormSchema>;

import React, { useState } from "react";
import { SpecialButton } from "./SpecialButton";

export default function ContactForm({ lng, t }: { lng: string; t: any }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(ContactFormSchema),
  });

  const processForm: SubmitHandler<ContactFormInputs> = async (data) => {
    const result = await sendEmail(data);

    if (result?.success) {
      console.log({ data: result.data });
      toast.success("Email sent!");
      reset();
      return;
    }

    //toast error
    console.log(result?.error);
    toast.error(lng == "es" ? "¡Algo salió mal!" : "Something went wrong!");
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(processForm)}
        className="flex flex-col p-10 space-y-4 shadow-black/[0.03] backdrop-blur-[0.5rem] bg-dark dark:bg-gray-950 dark:bg-opacity-75 rounded-2xl shadow-xl"
      >
        <input
          placeholder={t("form_name")}
          className="relative px-4 py-3 text-base rounded-2xl text-white bg-transparent border-2 border-gray-700 focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-300 shadow shadow-slate-500"
          {...register("name")}
        />
        {errors.name?.message && (
          <p className="ml-1 mt-1 text-red-400">{errors.name.message}</p>
        )}

        <input
          type={t("form_email")}
          placeholder="Email"
          className="px-4 py-3 text-base rounded-2xl text-white bg-transparent border-2 border-gray-700 focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-300 shadow shadow-slate-500"
          {...register("email")}
        />
        {errors.email?.message && (
          <p className="ml-1 mt-1 text-red-400">{errors.email.message}</p>
        )}
        <textarea
          placeholder={t("form_message")}
          rows={4}
          className="px-4 py-2 text-base rounded-2xl text-white bg-transparent border-2 border-gray-700 focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-300 shadow shadow-slate-500"
          {...register("message")}
        ></textarea>
        {errors.message?.message && (
          <p className="ml-1 mt-1 text-red-400">{errors.message.message}</p>
        )}
        <SpecialButton>{t("form_submit")}</SpecialButton>
      </form>
      {/* <Toaster position="top-right" richColors expand closeButton /> */}
    </>
  );
}
