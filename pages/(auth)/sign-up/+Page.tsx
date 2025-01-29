import Input from "@/components/form/input";
import Label from "@/components/form/label";
import PasswordInput from "@/components/form/password-input";
import SubmitButton from "@/components/form/submit-button";
import A from "@/components/ui/a";
import { PageRoutes } from "@/constants/page-routes";
import { authClient } from "@/lib/auth-client";
import getTitle from "@/utils/get-title";
import { reporter, ValidationMessage } from "@felte/reporter-solid";
import { createForm } from "@felte/solid";
import { validator } from "@felte/validator-zod";
import { toast } from "solid-sonner";
import { useMetadata } from "vike-metadata-solid";
import { z } from "zod";

const schema = z
  .object({
    username: z.string().nonempty("Username is required"),
    email: z.string().email("Email is invalid"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string().nonempty("Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const Page = () => {
  useMetadata({ title: getTitle("Sign Up") });

  const { form, isSubmitting } = createForm<z.infer<typeof schema>>({
    extend: [validator({ schema, level: "error" }), reporter],
    onSubmit: async (values) => {
      const { username, email, password } = values;

      const { data, error } = await authClient.signUp.email({
        name: username,
        email,
        password,
      });

      if (error) {
        throw error;
      }

      toast.success("Account created successfully");
    },
    onError: (error) => {
      toast.error("Something went wrong");
      console.log(error);
    },
  });

  return (
    <>
      <div class="text-center space-y-2">
        <h1 class="text-3xl font-light">
          PZ<span class="text-red-400">Play</span>
        </h1>
        <p class="text-sm text-gray-500">
          <span class="font-medium text-gray-600">Create an account</span> to get started
        </p>
      </div>
      <form class="space-y-4" use:form={form}>
        <div class="space-y-1">
          <Label for="username">Username</Label>
          <Input id="username" name="username" />
          <ValidationMessage for="username">
            {(messages) => <span class="text-red-600 text-sm">{messages?.[0]}</span>}
          </ValidationMessage>
        </div>
        <div class="space-y-1">
          <Label for="email">Email</Label>
          <Input id="email" name="email" />
          <ValidationMessage for="email">
            {(messages) => <span class="text-red-600 text-sm">{messages?.[0]}</span>}
          </ValidationMessage>
        </div>
        <div class="space-y-1">
          <Label for="password">Password</Label>
          <PasswordInput id="password" name="password" />
          <ValidationMessage for="password">
            {(messages) => <span class="text-red-600 text-sm">{messages?.[0]}</span>}
          </ValidationMessage>
        </div>
        <div class="space-y-1">
          <Label for="confirm-password">Confirm Password</Label>
          <PasswordInput id="confirm-password" name="confirmPassword" />
          <ValidationMessage for="confirmPassword">
            {(messages) => <span class="text-red-600 text-sm">{messages?.[0]}</span>}
          </ValidationMessage>
        </div>
        <SubmitButton id="sign-up" class="w-full" isSubmitting={isSubmitting()}>
          Sign Up
        </SubmitButton>
        <p class="text-center text-neutral-700">
          Already have an account? <A href={PageRoutes.SignIn}>Sign In</A>
        </p>
      </form>
    </>
  );
};

export default Page;
