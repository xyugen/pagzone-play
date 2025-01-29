import Input from "@/components/form/input";
import Label from "@/components/form/label";
import PasswordInput from "@/components/form/password-input";
import SubmitButton from "@/components/form/submit-button";
import A from "@/components/ui/a";
import { Checkbox, CheckboxControl, CheckboxLabel } from "@/components/ui/checkbox";
import { PageRoutes } from "@/constants/page-routes";
import { authClient } from "@/lib/auth-client";
import getTitle from "@/utils/get-title";
import { reporter, ValidationMessage } from "@felte/reporter-solid";
import { createForm } from "@felte/solid";
import { validator } from "@felte/validator-zod";
import { toast } from "solid-sonner";
import { useMetadata } from "vike-metadata-solid";
import { z } from "zod";

const schema = z.object({
  email: z.string().email("Email is invalid"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  rememberMe: z.boolean().optional(),
});

const Page = () => {
  useMetadata({ title: getTitle("Sign In") });

  const { form, isSubmitting, setFields, data } = createForm<z.infer<typeof schema>>({
    extend: [validator({ schema, level: "error" }), reporter],
    onSubmit: async (values) => {
      const { email, password, rememberMe } = values;

      const { data, error } = await authClient.signIn.email({
        email,
        password,
        rememberMe,
      });

      if (error) {
        throw error;
      }

      toast.success("Signed in successfully");
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
          <span class="font-medium text-gray-600">Sign in</span> to get started
        </p>
      </div>
      <form class="space-y-4" use:form={form}>
        <div class="space-y-1">
          <Label for="email">Email</Label>
          <Input id="email" name="email" placeholder="Email" />
          <ValidationMessage for="email">
            {(messages) => <span class="text-red-600 text-sm">{messages?.[0]}</span>}
          </ValidationMessage>
        </div>
        <div class="space-y-1">
          <Label for="password">Password</Label>
          <PasswordInput id="password" name="password" placeholder="Password" />
          <ValidationMessage for="password">
            {(messages) => <span class="text-red-600 text-sm">{messages?.[0]}</span>}
          </ValidationMessage>
        </div>
        <div class="flex flex-row items-center justify-between text-sm">
          <Checkbox
            name="rememberMe"
            checked={data()?.rememberMe}
            onChange={(value) => setFields("rememberMe", value)}
            class="flex items-center space-x-2"
          >
            <CheckboxControl />
            <CheckboxLabel>Remember me?</CheckboxLabel>
          </Checkbox>
          <A href={PageRoutes.ForgotPassword}>Forgot Password?</A>
        </div>
        <SubmitButton class="w-full" id="sign-up" type="submit" isSubmitting={isSubmitting()}>
          Sign In
        </SubmitButton>
        <p class="text-center text-neutral-700">
          Don't have an account? <A href={PageRoutes.SignUp}>Sign Up</A>
        </p>
      </form>
    </>
  );
};

export default Page;
