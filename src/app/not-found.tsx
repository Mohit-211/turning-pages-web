import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted px-4">
      <div className="text-center">
        <h1 className="mb-4 text-5xl font-bold">404</h1>

        <p className="mb-4 text-xl text-muted-foreground">
          Oops! The page you’re looking for doesn’t exist.
        </p>

        <Link
          href="/"
          className="text-primary underline underline-offset-4 hover:text-primary/90"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}
