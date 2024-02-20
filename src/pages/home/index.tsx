import { MagnifyingGlassIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Layout from "@/components/Layout";

const categories = [
  {
    name: "New Arrivals",
    href: "#",
    imageSrc: "https://tailwindui.com/img/ecommerce-images/home-page-01-category-01.jpg",
  },
  {
    name: "Productivity",
    href: "#",
    imageSrc: "https://tailwindui.com/img/ecommerce-images/home-page-01-category-02.jpg",
  },
  {
    name: "Workspace",
    href: "#",
    imageSrc: "https://tailwindui.com/img/ecommerce-images/home-page-01-category-04.jpg",
  },
  {
    name: "Accessories",
    href: "#",
    imageSrc: "https://tailwindui.com/img/ecommerce-images/home-page-01-category-05.jpg",
  },
  { name: "Sale", href: "#", imageSrc: "https://tailwindui.com/img/ecommerce-images/home-page-01-category-03.jpg" },
];

export default function Home() {
  return (
    <Layout>
      <div className="relative mx-auto flex flex-col items-center px-6 py-32 text-center sm:py-64 lg:px-0">
        {/* Decorative image and overlay */}
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
          <img src="https://tailwindui.com/img/ecommerce-images/home-page-01-hero-full-width.jpg" alt="" className="h-full w-full object-cover object-center" />
        </div>
        <div aria-hidden="true" className="absolute inset-0 bg-gray-900 opacity-50" />
        <div className="relative">
          <h1 className="text-4xl font-bold tracking-tight text-white lg:text-6xl">New arrivals are here</h1>
          <p className="mt-4 text-xl text-white">The new arrivals have, well, newly arrived. Check out the latest options from our summer small-batch release while they're still in stock.</p>
          <Link href="/home/categories" className="mt-8 inline-block rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100">
            Shop New Arrivals
          </Link>
        </div>
      </div>
      {/* Category section */}
      <section aria-labelledby="category-heading" className="pt-14 sm:pt-24 xl:mx-auto xl:max-w-7xl xl:px-8 mb-10">
        <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
          <h2 id="category-heading" className="text-2xl font-bold tracking-tight text-gray-900">
            Shop by Category
          </h2>
          <Link href="/home/categories" className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
            Browse all categories
            <span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>

        <div className="mt-4 flow-root">
          <div className="-my-2">
            <div className="relative box-content h-80 overflow-x-auto py-2 xl:overflow-visible">
              <div className="absolute flex space-x-8 px-4 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-5 xl:gap-x-8 xl:space-x-0 xl:px-0">
                {categories.map((category) => (
                  <a key={category.name} href={category.href} className="relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto">
                    <span aria-hidden="true" className="absolute inset-0">
                      <img src={category.imageSrc} alt="" className="h-full w-full object-cover object-center" />
                    </span>
                    <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50" />
                    <span className="relative mt-auto text-center text-xl font-bold text-white">{category.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 px-4 sm:hidden">
          <a href="#" className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
            Browse all categories
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </section>
    </Layout>
  );
}
