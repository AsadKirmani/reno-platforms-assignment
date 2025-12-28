'use client'
import Link from "next/link";

export default function Schools({ schools }) {
  return (
    <div className="min-h-screen font-sans">
      <header>
        <nav className="bg-white px-4 lg:px-6 py-2.5 dark:bg-gray-800 sticky top-0">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
             <p className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Home</p>
          <div className="flex items-center lg:order-2">
         <Link href="/addSchool" className="text-white bg-blue-900 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Add school</Link>
          </div>
        </div>
        </nav>
      </header>
      <main className="mx-auto w-full px-4 py-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-xl font-semibold text-white mb-4">Schools</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {schools?.map((school) => (
                  <a key={school?.id} href="#" className="group">
              <img
                alt={school?.schoolName}
                src={school?.image_url}
                className="aspect-square w-full rounded-lg bg-gray-200  object-contain group-hover:opacity-75 xl:aspect-7/8"
                />
              <h3 className="mt-4 text-lg font-medium text-white">{school?.schoolName}</h3>
              <p className="mt-1 text-sm text-white">{school?.address} | {school?.city} </p>
            </a>
                ))}
        </div>
      </main>
    </div>
  );
}
