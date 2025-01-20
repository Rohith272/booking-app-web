"use client";

import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/lib/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";

import { signupSchema, SignupSchema } from "./schema";
import { signup } from "./service";

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
import { LoadingSpinner } from "@/components/common/loading-spinner";

const SignupForm = () => {
  const { toast } = useToast();
  const signupForm = useForm<SignupSchema>({
    resolver: zodResolver(signupSchema),
    mode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
  });
  const mutation = useMutation({
    mutationFn: signup,
  });
  const handleSubmit = (values: SignupSchema) => {
    mutation.mutate(values, {
      onSuccess: () => {
        toast({
          title: "Signup successful",
          variant: "default",
          duration: 3000,
        });
        // TODO: redirect to dashboard
      },
      onError: (response) => {
        toast({
          title: response.message,
          variant: "destructive",
          duration: 5000,
        });
      },
    });
  };
  return (
    <Form {...signupForm}>
      <form
        onSubmit={signupForm.handleSubmit(handleSubmit)}
        className="grid justify-center gap-6"
      >
        <div className="grid grid-cols-[repeat(1,288px)] justify-center gap-4 sm:grid-cols-[repeat(2,288px)] lg:grid-cols-[repeat(3,288px)]">
          <FormField
            control={signupForm.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First name</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={signupForm.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last name</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={signupForm.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={signupForm.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mobile</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={signupForm.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="" {...field} />
                </FormControl>
                {/* <FormDescription>
                    Password must be at least 8 characters long and include at
                    least one lowercase letter, uppercase letter, number, and
                    special character.
                  </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={signupForm.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="" {...field} />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button
          size={"lg"}
          type="submit"
          className="w-72 justify-self-end"
          disabled={mutation.isPending}
        >
          Register
          {mutation.isPending && (
            <LoadingSpinner size={"medium"} variant={"primaryForeground"} />
          )}
        </Button>
      </form>
    </Form>
  );
};

export default SignupForm;
