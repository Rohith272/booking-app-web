"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { loginSchema, LoginSchema } from "./schema";

const LoginForm = () => {
  const loginForm = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
    defaultValues: {
      emailOrMobile: "",
      password: "",
    },
  });
  const handleSubmit = (values: LoginSchema) => {
    console.log(values);
  };
  return (
    <div className="">
      <Form {...loginForm}>
        <form
          onSubmit={loginForm.handleSubmit(handleSubmit)}
          className="space-y-6"
        >
          <div className="flex flex-col gap-4">
            <FormField
              control={loginForm.control}
              name="emailOrMobile"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email or Mobile</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={loginForm.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                  <FormDescription>Forgot Password?</FormDescription>
                </FormItem>
              )}
            />
          </div>
          <Button size={"lg"} type="submit" className="w-full">
            Register
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default LoginForm;
