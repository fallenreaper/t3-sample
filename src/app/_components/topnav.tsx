import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { SimpleUploadButton } from "./simple-upload-button";

export const TopNav = () => {
  return (
    <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold" style={{ height: "100px"}}>
      <Link href="/" className="flex items-center gap-2">
        <div>Gallery</div>
      </Link>

      <div className="flex flex-row gap-4">
        <SignedOut>
          {/* This button will open the sign-in modal when clicked */}
          {/* Anything in here will render when you arent signed in */}
          <SignInButton mode="modal"></SignInButton>
        </SignedOut>
        <SignedIn>
          <div className="flex flex-row gap-2">
            <SimpleUploadButton />
            {/* This button will open the sign-in modal when clicked */}
            {/* Anything in here will render when you are signed in */}
            <UserButton></UserButton>
          </div>
        </SignedIn>
      </div>
    </nav>
  );
};
