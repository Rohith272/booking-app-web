"use client";

import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/lib/hooks/use-toast";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";

import { loginSchema, LoginSchema } from "./schema";
import { login } from "./service";

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
import useAuth from "@/lib/hooks/use-auth";

const LoginForm = () => {
  const { setAccessToken } = useAuth();
  const { toast } = useToast();
  const router = useRouter();
  const loginForm = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const mutation = useMutation({
    mutationFn: login,
  });
  const handleSubmit = (values: LoginSchema) => {
    mutation.mutate(values, {
      onSuccess: (data) => {
        console.log(data.data)
        console.log(data.data.accessToken);
        setAccessToken(data.data.accessToken);
        toast({
          title: "Login successful",
          variant: "default",
          duration: 3000,
        });

        router.push("/host/events");
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
    <div className="">
      <Form {...loginForm}>
        <form
          onSubmit={loginForm.handleSubmit(handleSubmit)}
          className="space-y-6"
        >
          <div className="flex flex-col gap-4">
            <FormField
              control={loginForm.control}
              name="username"
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
          <Button
            size={"lg"}
            type="submit"
            className="w-full"
            disabled={mutation.isPending}
          >
            Login
            {mutation.isPending && (
              <LoadingSpinner size={"medium"} variant={"primaryForeground"} />
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default LoginForm;
