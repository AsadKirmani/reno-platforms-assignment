'use client'

import { useRouter } from 'next/navigation'
import { useForm } from "react-hook-form"
import { addSchool } from '../actions'

export default function Page(){
  
    const {
      register,
      handleSubmit,
      formState: { errors },
      reset
    } = useForm()
    const router = useRouter()

    const handleCancel = () => {
      reset();
    }

    const onSubmit = async (data) => {

        await addSchool(
          data.schoolName,
          data.contact,
          data.address,
          data.city,
          data.state,
          data.image_url,
          data.email
        )
        .then((res) => {
            console.log(res)
        }).catch((e) => {
            console.log(e)
        })
        router.push('/')
    }
  
    return (
      <div className="flex min-h-screen items-center justify-center font-sans bg-gray-800">
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="border-b border-gray-900/10 pb-12 dark:border-white/10 py-6">
      <h2 className="text-base/7 font-semibold text-gray-900 dark:text-white">Add School</h2>
      <p className="mt-1 text-sm/6 text-gray-600 dark:text-gray-400">Enter correct details of your school.</p>

      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label htmlFor="schoolName" className="block text-sm/6 font-medium text-gray-900 dark:text-white">School name</label>
          <div className="mt-2">
            <input {...register("schoolName", { required: true })} id="schoolName" type="text" name="schoolName" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500" />
          {errors.schoolName && <span>This field is required</span>}
          </div>
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="contact" className="block text-sm/6 font-medium text-gray-900 dark:text-white">Contact</label>
          <div className="mt-2">
            <input {...register("contact", { required: "Contact is required", minLength: 10, maxLength: 10 })} id="contact" type="text" name="contact" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500" />
          {errors.contact && <span>{errors.contact.message}</span>}
          </div>
        </div>

        <div className="col-span-full">
          <label htmlFor="address" className="block text-sm/6 font-medium text-gray-900 dark:text-white">Address</label>
          <div className="mt-2">
            <input {...register("address", { required: true })} id="address" type="text" name="address" autoComplete="address" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500" />
            {errors.address && <p role='alert'>This field is required</p>}
          </div>
        </div>

        <div className="sm:col-span-3 sm:col-start-1">
          <label htmlFor="city" className="block text-sm/6 font-medium text-gray-900 dark:text-white">City</label>
          <div className="mt-2">
            <input {...register("city", { required: true })} id="city" type="text" name="city" autoComplete="address-level2" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500" />
            {errors.city && <span>This field is required</span>}
          </div>
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="state" className="block text-sm/6 font-medium text-gray-900 dark:text-white">State</label>
          <div className="mt-2">
            <input {...register("state", { required: true })} id="state" type="text" name="state" autoComplete="address-level1" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500" />
            {errors.state && <span>This field is required</span>}
          </div>
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="image_url" className="block text-sm/6 font-medium text-gray-900 dark:text-white">Image URL</label>
          <div className="mt-2">
            <input {...register("image_url", { required: true })}  id="image_url" type="text" name="image_url" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500" />
          {errors.image_url && <span>This field is required</span>}
          </div>
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900 dark:text-white">Email</label>
          <div className="mt-2">
            <input {...register("email", { required: "Email address is required" })} aria-invalid={errors.email ? true : false} id="email" type="text" name="email" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500" />
          {errors.email && <span>{errors.email.message}</span>}
          </div>
        </div>
      </div>
    </div>

    <div className="mt-6 flex items-center justify-end gap-x-6 mb-4">
    <button type="button" className="text-sm/6 font-semibold text-gray-900 dark:text-white cursor-pointer" onClick={handleCancel}>Cancel</button>
    <button type="submit" className="rounded-md bg-blue-900 px-3 py-2 text-sm font-semibold cursor-pointer text-white shadow-xs hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900 dark:bg-blue-800 dark:shadow-none dark:focus-visible:outline-blue-800">Save</button>
  </div>
    </form>
      </div>
    )
}
