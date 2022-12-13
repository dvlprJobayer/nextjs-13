import Link from "next/link";

const Register = () => {
  return (
    <>
      <div className="relative mb-12">
        <h1 className="text-center text-2xl font-medium tracking-tight text-gray-900">
          Create an account
        </h1>
      </div>
      <form className="px-12 flex flex-col gap-y-5">
        <input
          className="border border-slate-400 py-1 px-2 rounded-md"
          type="text"
          name="name"
          id="name"
          placeholder="Your Name"
        />
        <input
          className="border border-slate-500 py-1 px-2 rounded-md"
          type="email"
          name="email"
          id="email"
          placeholder="Your Email"
        />
        <input
          className="border border-slate-500 py-1 px-2 rounded-md"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
        <input
          className="border border-black p-2 rounded-full font-bold cursor-pointer hover:bg-black hover:text-white"
          type="submit"
          value="Register"
        />
      </form>
      <p className="text-center mt-4">
        Already have an account?{" "}
        <Link className="text-blue-500 underline" href="/login">
          Login
        </Link>
      </p>
    </>
  );
};

export default Register;
