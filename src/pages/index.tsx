import Link from "next/link";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();

  return (
    <div className="h-screen">
      <div className="flex h-full items-center flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="overflow-hidden rounded-lg bg-white shadow border border-gray-200 sm:w-[350px] lg:w-[400px]">
          <div className="px-4 py-5 sm:p-6">
            <div className="sm:mx-auto sm:w-full ">
              <h2 className="my-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Login to your account</h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full">
              <form className="space-y-3" onSubmit={() => router.push("/home")}>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Email address
                  </label>
                  <div className="mt-1">
                    <input id="email" type="email" className="block w-full px-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                      Password
                    </label>
                  </div>
                  <div className="mt-1">
                    <input id="password" type="password" className="block w-full px-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                  </div>
                </div>

                <div>
                  <button type="button" onClick={() => router.replace("/home")} className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Login
                  </button>
                </div>
              </form>

              <p className="mt-5 text-center text-sm text-gray-500">
                Not registered?{" "}
                <Link href="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                  Register here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
