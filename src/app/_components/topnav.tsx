"use client";
import { SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { UploadButton } from "~/utils/uploadthing";

export const TopNav = () => {
  const router = useRouter();
  return (
    <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
      <div>Gallery</div>

      <div className="flex flex-row">
        <SignedOut>
          {/* This button will open the sign-in modal when clicked */}
          {/* Anything in here will render when you arent signed in */}
          <SignInButton mode="modal"></SignInButton>
        </SignedOut>
        <SignInButton>
          <div className="flex flex-row gap-2">
            <UploadButton
              endpoint="imageUploader"
            //   onClientUploadComplete={() => {
            //     router.refresh();
            //   }}
            />
            {/* This button will open the sign-in modal when clicked */}
            {/* Anything in here will render when you are signed in */}
            <UserButton></UserButton>
          </div>
        </SignInButton>
      </div>
    </nav>
  );
};
