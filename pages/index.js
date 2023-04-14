import Link from "next/link";
import React, { useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { getError } from "@/utils/error";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import Layout from "@/components/layout";

const LoginScreen = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { redirect } = router.query;
  useEffect(() => {
    if (status === "authenticated") {
      router.push("/dashboard");
    }
  }, [router, status, redirect]);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const submitHandler = async ({ email, password }) => {
    try {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });
      if (result.error) {
        toast.error(result.error);
      } else if (result.ok) {
        toast.success("Logged in successfully");
        router.push(redirect || "/dashboard");
      }
    } catch (err) {
      console.log(err); // Log the error to the console
      toast.error(getError(err));
    }
  };

  return (
    <>
      <Layout title="login" />
      <div className="flex h-screen bg-green-700">
        <form
          className="w-full max-w-xs m-auto bg-green-100 rounded p-5 shadow"
          onSubmit={handleSubmit(submitHandler)}
        >
          <header>
            <h1 className="mb-4 text-lg text-center">Login</h1>
            <h1 className="mb-4 text-xl text-center">
              New Sharma Furniture Udhyoug
            </h1>
          </header>

          <div className="mb-4">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              {...register("email", {
                required: "Please enter email",
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                  message: "Please enter valid email",
                },
              })}
              className="w-full"
              id="email"
              autoFocus
            />

            {errors.email && (
              <div className="text-red-500">{errors.email.message}</div>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              {...register("password", {
                required: "Please enter password",
                minLength: {
                  value: 6,
                  message: "password is more than 5 chars",
                },
              })}
              className="w-full"
              id="password"
              autoFocus
            ></input>
            {errors.password && (
              <div className="text-red-500 ">{errors.password.message}</div>
            )}
          </div>
          <div className="mb-4 text-center">
            <button className="primary-button ">Login</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginScreen;
