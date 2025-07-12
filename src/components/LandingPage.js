"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

const LandingPage = () => {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  return (
    <div className="min-h-screen flex flex-col items-center bg-[#01090F] text-white font-sans overflow-x-hidden">
      <nav className="w-full h-[10vh] border-b border-white flex items-center justify-between px-10">
        <h1 className="text-xl font-bold">CodeQuest</h1>
        {session && (
          <div className="flex items-center gap-4">
            <span className="text-sm">Hi, {session.user.name}</span>
            <button
              onClick={() => signOut()}
              className="bg-red-600 text-white px-4 py-1 rounded-md"
            >
              Logout
            </button>
          </div>
        )}
      </nav>

      <div className="w-full max-w-[1200px] flex flex-col items-center mx-auto px-4">
        <div
          className="relative bg-cover bg-center w-full sm:w-3/4 md:w-2/3 lg:w-1/2 max-w-[1000px] h-[60vh] flex items-end justify-end p-6 md:p-10 rounded-[10px] overflow-hidden"
          style={{ backgroundImage: "url('image.png')" }}
        >
          <div className="w-full text-right overflow-hidden">
            <h1 className="text-2xl font-bold">
              Solve Real Issues. Learn. Contribute
            </h1>
            <p className="text-sm text-[#cccccc] mt-2">
              Join a community of developers tackling real world challenges and earning rewards
            </p>
          </div>
        </div>

        <div className="w-full px-4 sm:px-8 md:px-10 lg:px-20 py-10 leading-relaxed max-w-[1000px] text-left">
          <h2 className="text-xl font-semibold my-5">About CodeQuest</h2>
          <p className="text-[17px]">
            CodeQuest is a platform connecting talented students with real world
            software development challenges. Earn rewards, gain experience, and
            contribute to open-source projects
          </p>

          <h2 className="text-xl font-semibold my-6">Getting Started</h2>
          <ul className="list-decimal pl-6 space-y-4">
            <li>
              <h3 className="font-semibold">Sign Up</h3>
              <p>Create your account and connect your GitHub profile.</p>
            </li>
            <li>
              <h3 className="font-semibold">Explore Bounties</h3>
              <p>
                Browse available bounties and filter by difficulty, tags, and tech stack.
              </p>
            </li>
            <li>
              <h3 className="font-semibold">Contribute & Earn</h3>
              <p>
                Submit your solution and earn rewards upon acceptance.
              </p>
            </li>
          </ul>

          {!session && !loading && (
            <button
              onClick={() => signIn("github")}
              className="text-white bg-[#17579A] w-[190px] h-[37px] rounded-[9px] mt-4"
            >
              Connect GitHub to begin
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
