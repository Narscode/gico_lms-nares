"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/(auth)/register/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { registerUser } from "@/lib/api/auth"; // Abstracted API call
// import { FcGoogle } from "react-icons/fc";

// Define schema for form validation
const formSchema = z.object({
  full_name: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  username: z.string().min(3, {
    message: "Username must be at least 3 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

const SignupForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  // const [isGoogleLoading, setIsGoogleLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      full_name: "",
      username: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);

    try {
      const data = await registerUser(values);

      // Show success message
      toast.success("Account created successfully!");

      // Store the token if needed
      if (data.access_token) {
        localStorage.setItem("token", data.access_token);
      }

      // Redirect to login or dashboard
      router.push("/login");
    } catch (error) {
      console.error("Registration error:", error);

      // Display error message
      toast.error(
        error instanceof Error ? error.message : "Failed to create account"
      );
    } finally {
      setIsLoading(false);
    }
  };

  // const handleGoogleSignIn = async () => {
  //   setIsGoogleLoading(true);
  //   try {
  //     // Initialize Google Sign-In
  //     const client = google.accounts.oauth2.initTokenClient({
  //       client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
  //       scope: 'email profile',
  //       callback: async (response: any) => {
  //         if (response.access_token) {
  //           try {
  //             // Get user info from Google
  //             const userInfo = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
  //               headers: { Authorization: `Bearer ${response.access_token}` }
  //             }).then(res => res.json());

  //             // Send ID token to backend
  //             const backendResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/google`, {
  //               method: 'POST',
  //               headers: {
  //                 'Content-Type': 'application/json',
  //               },
  //               body: JSON.stringify({
  //                 id_token: response.access_token,
  //                 email: userInfo.email,
  //                 full_name: userInfo.name,
  //                 picture: userInfo.picture
  //               }),
  //             });

  //             if (!backendResponse.ok) {
  //               throw new Error('Google authentication failed');
  //             }

  //             const data = await backendResponse.json();
              
  //             // Store the token
  //             if (data.data.access_token) {
  //               localStorage.setItem("token", data.data.access_token);
  //             }

  //             toast.success("Signed in with Google successfully!");
  //             router.push("/dashboard");
  //           } catch (error) {
  //             console.error('Google sign-in error:', error);
  //             toast.error("Failed to sign in with Google");
  //           }
  //         }
  //       },
  //     });

  //     client.requestAccessToken();
  //   } catch (error) {
  //     console.error('Google sign-in error:', error);
  //     toast.error("Failed to sign in with Google");
  //   } finally {
  //     setIsGoogleLoading(false);
  //   }
  // };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8 space-y-4">
        <FormField
          control={form.control}
          name="full_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input
                  className="pl-3"
                  placeholder="Enter your full name"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input
                  className="pl-3"
                  placeholder="Enter username"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  className="pl-3"
                  type="email"
                  placeholder="Enter your email"
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
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  className="pl-3"
                  type="password"
                  placeholder="Create a password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Creating Account...
            </>
          ) : (
            "Sign Up"
          )}
        </Button>

        {/* <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>

        <Button
          type="button"
          variant="outline"
          className="w-full"
          onClick={handleGoogleSignIn}
          disabled={isGoogleLoading}
        >
          {isGoogleLoading ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <FcGoogle className="mr-2 h-4 w-4" />
          )}
          Google
        </Button> */}

        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <Link href="/login" className="text-primary font-semibold">
            Login
          </Link>
        </p>
      </form>
    </Form>
  );
};

export default SignupForm;
