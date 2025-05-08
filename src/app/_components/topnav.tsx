import { SignedOut, SignInButton, UserButton } from "@clerk/nextjs"

export const TopNav = () => {
  return (
    <nav className="flex w-full items-center justify-between p-4 text-xl font-semibold border-b">
      <div>Gallery</div>

      <div>
        <SignedOut>
            { /* This button will open the sign-in modal when clicked */}
            { /* Anything in here will render when you arent signed in */}
            <SignInButton mode="modal"></SignInButton>
        </SignedOut>
        <SignInButton>
            <UserButton></UserButton>
        </SignInButton>
      </div>
    </nav>
  )
}