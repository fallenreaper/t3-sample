"use client";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
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
        <SignedIn>
          <div className="flex flex-row gap-2">
            <UploadButton
              endpoint="imageUploader"
              onClientUploadComplete={() => {
                router.refresh();
              }}
              onUploadError={(error: Error) => {
                alert(`ERROR! ${error.message}`);
              }}
              onBeforeUploadBegin={(files) => {
                // You can use the callback to add additional metadata to the files
                // before they are uploaded
                console.log("onBeforeUploadBegin");
                return files;
              }}
            />
            {/* This button will open the sign-in modal when clicked */}
            {/* Anything in here will render when you are signed in */}
            <UserButton></UserButton>
          </div>
        </SignedIn>
      </div>
    </nav>
  );
};
