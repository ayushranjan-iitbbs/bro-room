import { SignIn, SignUp, SignedIn, SignedOut } from '@clerk/clerk-react';

function AuthPage() {
  return (
    <>
      <SignedOut>
        {/* Show SignIn or SignUp */}
        <SignIn />
        {/* Or <SignUp /> */}
      </SignedOut>
      <SignedIn>
        <p>Welcome! You are logged in.</p>
      </SignedIn>
    </>
  );
}
