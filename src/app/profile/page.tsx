"use client";
import type { FC } from "react";
import axios from "axios";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

interface pageProps {}

const ProfilePage: FC<pageProps> = ({}) => {
  const router = useRouter();

  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logged out");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Profile</h1>
      <hr />
      <p>Profile page</p>
      <hr />
      <button
        onClick={logout}
        className="p-2 px-4 font-bold mt-4 rounded bg-blue-500 hover:bg-blue-700 text-white"
      >
        Logout
      </button>
    </div>
  );
};
export default ProfilePage;
