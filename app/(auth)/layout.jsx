import Link from "next/link";
import "../(main)/globals.css";

const AuthLayout = ({ children }) => {
  return (
    <html lang="en">
      <head />
      <body>
        <main className="flex min-h-full overflow-hidden pt-16 sm:py-28">
          <div className="mx-auto flex w-full max-w-2xl flex-col px-4 sm:px-6">
            <Link
              href="/"
              className="flex items-center gap-2 text-stone-500 hover:text-stone-800 transition-colors"
            >
              <span className="uppercase font-medium">Home</span>
            </Link>
            <div className="-mx-4 mt-6 flex-auto bg-white py-10 px-4 shadow-2xl shadow-gray-900/10 sm:mx-0 sm:flex-none sm:rounded-5xl sm:pb-20">
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
};

export default AuthLayout;
