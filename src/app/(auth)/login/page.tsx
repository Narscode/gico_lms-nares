import Container from "@/components/Container";
import LoginForm from "@/app/(auth)/login/form";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import LogoTitle from "@/components/LogoTitle";
import Link from "next/link";

const LoginPage = () => {
  return (
    <main className="bg-white min-h-screen grid grid-cols-1 md:grid-cols-2">
      <div className="absolute z-10 text-white top-7 left-7 hidden md:block">
        <Link href="/">
          <Button variant={"ghost"}>
            <ArrowLeft strokeWidth={2} />
            Kembali
          </Button>
        </Link>
      </div>
      <section className="relative h-[35vh] sm:h-[35vh] md:h-full pr-0 overflow-hidden w-screen md:w-auto">
        <div className="absolute z-10 w-4/5  left-0 right-0 top-0 bottom-0 m-auto bg-gradient-to-l from-white to-transparent aspect-[556/649] rounded-2xl">
          <LogoTitle className="z-30 md:-translate-x-20 nanggung:-translate-x-24 lg:-translate-x-36 xl:-translate-x-48 md:translate-y-4 translate-y-[5rem] -translate-x-12 scale-75 xxs:scale-100" />
        </div>
        <p className="absolute z-30 translate-x-24 xxs:text-2xl xxs:translate-y-20 md:translate-x-16 xl:translate-x-28 translate-y-12 md:translate-y-1/2 h-full text-white font-bold text-lg sm:text-3xl xl:text-[48px] text-right flex flex-col leading-6 xl:gap-6 lg:mt-0 mt-12">
          <span>Accessible</span>
          <span>Anywhere,</span>
          <span>Anytime</span>
        </p>
        <Image
          src="/assets/auth/bg-auth.webp"
          alt=""
          fill
          sizes="100%"
          className="absolute object-cover"
        />
        <Image
          src="/assets/auth/model-auth.webp"
          alt=""
          fill
          sizes="100%"
          priority
          className="fixed z-20 h-full object-contain right-0 translate-x-24 translate-y-4 md:translate-x-12 md:translate-y-12 lg:scale-75 xl:translate-y-24 xl:translate-x-24 xl:scale-75"
        />
      </section>
      <Container className="-top-4 relative bg-white rounded-t-xl py-12 flex md:justify-center h-full">
        <div className="text-black text-center">
          <h1 className="font-bold text-2xl">Welcome Back</h1>
          <p className="text-sm text-neutral-500">
            Fill your account information to get in
          </p>
        </div>
        <div>
          <LoginForm />
        </div>
      </Container>
    </main>
  );
};

export default LoginPage;
