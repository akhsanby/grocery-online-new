import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative bg-gray-900">
        {/* Navigation */}
        <header className="relative z-10">
          <nav aria-label="Top">
            {/* Top navigation */}
            <div className="bg-gray-900">
              <div className="mx-auto flex h-10 max-w-7xl items-center justify-end px-4 sm:px-6 lg:px-8">
                <div className="flex items-center space-x-6">
                  <Link href="/" className="text-sm font-medium text-white hover:text-gray-100">
                    Login
                  </Link>
                  <Link href="/register" className="text-sm font-medium text-white hover:text-gray-100">
                    Create an account
                  </Link>
                </div>
              </div>
            </div>

            {/* Secondary navigation */}
            <div className="bg-white bg-opacity-10">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div>
                  <div className="flex h-16 items-center justify-between">
                    {/* Logo (lg+) */}
                    <div className="hidden lg:flex lg:flex-1 lg:items-center">
                      <Link href="/home">
                        <span className="sr-only">Your Company</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="#ffffff" className="h-7">
                          <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                        </svg>
                        {/* <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=white" alt="" /> */}
                      </Link>
                    </div>

                    {/* Mobile menu and search (lg-) */}
                    <div className="flex flex-1 items-center lg:hidden">
                      {/* Search */}
                      <a href="#" className="p-2 text-white">
                        <span className="sr-only">Search</span>
                        <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                      </a>
                    </div>

                    {/* Logo (lg-) */}
                    <a href="#" className="lg:hidden">
                      <span className="sr-only">Your Company</span>
                      <img src="https://tailwindui.com/img/logos/mark.svg?color=white" alt="" className="h-8 w-auto" />
                    </a>

                    <div className="flex flex-1 items-center justify-end gap-x-4 ">
                      <a href="#" className="p-2 text-white hidden lg:block">
                        <span className="sr-only">Search</span>
                        <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                      </a>

                      <div className="flex items-center">
                        {/* Cart */}
                        <div className="flow-root">
                          <a href="#" className="group -m-2 flex items-center p-2">
                            <ShoppingBagIcon className="h-6 w-6 flex-shrink-0 text-white" aria-hidden="true" />
                            <span className="ml-2 text-sm font-medium text-white">0</span>
                            <span className="sr-only">items in cart, view bag</span>
                          </a>
                        </div>
                      </div>
                      <Menu as="div" className="relative ml-3">
                        {/* User menu */}
                        <div>
                          <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">Open user menu</span>
                            <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                          </Menu.Button>
                        </div>
                        <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <Menu.Item>
                              {({ active }) => (
                                <Link href="/user" className={classNames(active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700")}>
                                  My Profile
                                </Link>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <Link href="/user/history" className={classNames(active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700")}>
                                  History
                                </Link>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <Link href="/" className={classNames(active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700")}>
                                  Log out
                                </Link>
                              )}
                            </Menu.Item>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
      <main>{children}</main>

      <footer aria-labelledby="footer-heading" className="bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-t border-gray-800 py-10">
            <p className="text-sm text-gray-400">Copyright &copy; 2024 Your Company, Inc.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
