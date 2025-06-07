"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { loginUser } from "@/lib/api/auth";
import { setAuthCredentials } from "@/lib/auth";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

const LoginForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleLogin = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    try {
      const data = await loginUser(values);

      // Store the token
      if (data.data.access_token) {
        localStorage.setItem("token", data.data.access_token);
        // Store the credentials for profile fetching
        setAuthCredentials({
          email: values.email,
          password: values.password,
        });
      }

      // Show success message
      toast.success("Login successful!");

      // Redirect to dashboard
      router.push("/dashboard");
    } catch (error) {
      console.error("Login error:", error);
      toast.error(
        error instanceof Error ? error.message : "Failed to login"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleLogin)}
        className="flex w-full max-w-xs flex-col gap-4 text-left left-0 right-0 mx-auto h-auto md:my-auto"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-black">Email</FormLabel>
              <FormControl>
                <Input
                  className="text-black pl-4"
                  placeholder="email@email.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-black">Password</FormLabel>
              <FormControl>
                <Input
                  className="text-black pl-4"
                  type="password"
                  placeholder="Tuliskan Password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full max-w-xs self-center"
          variant={"cta"}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Logging in...
            </>
          ) : (
            "Login"
          )}
        </Button>

        {/* <div className="flex justify-center items-center text-black">
          <hr className="w-full ml-4" />
          <p className="mx-4 text-sm font-medium">or</p>
          <hr className="w-full mr-4" />
        </div>

        <Button
          type="submit"
          className="w-full max-w-xs self-center border bg-[#D1E0FF] border-[#0479CE] text-primary-900"
        >
          <Image
            src="/assets/auth/google.svg"
            alt=""
            height={0}
            width={0}
            className="w-4"
          />
          Login With Google
        </Button> */}

        <p className="text-xs font-normal text-black text-center">
          {" Don't have an account?"}
          <Link href={`/register`} className="font-light text-primary-800">
            Sign Up
          </Link>
        </p>
      </form>
    </Form>
  );
};

export default LoginForm;
