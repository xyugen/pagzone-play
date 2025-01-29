import Input from "@/components/form/input";
import Label from "@/components/form/label";
import PasswordInput from "@/components/form/password-input";
import A from "@/components/ui/a";
import { Button } from "@/components/ui/button";
import { PageRoutes } from "@/constants/page-routes";
import getTitle from "@/utils/get-title";
import { useMetadata } from "vike-metadata-solid";

const Page = () => {
  useMetadata({ title: getTitle("Sign Up") });

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
      <form class="space-y-4">
        <div class="space-y-1">
          <Label for="email">Email</Label>
          <Input id="email" placeholder="Email" />
        </div>
        <div class="space-y-1">
          <Label for="password">Password</Label>
          <PasswordInput id="password" placeholder="Password" />
        </div>
        <div class="space-y-1">
          <Label for="confirm-password">Confirm Password</Label>
          <PasswordInput id="confirm-password" placeholder="Confirm Password" />
        </div>
        <Button class="w-full" id="sign-up" type="submit">
          Sign Up
        </Button>
        <p class="text-center text-neutral-700">
          Already have an account?{" "}
          <A
            href={PageRoutes.SignIn}
            class="text-red-400 hover:text-red-400/80 hover:underline transition-colors"
          >
            Sign In
          </A>
        </p>
      </form>
    </>
  );
};

export default Page;
