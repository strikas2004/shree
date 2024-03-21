/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/OIYSVl9c7a8
 */
'use client'
import axios from 'axios';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import React, { useState } from "react"


export function ContactInformation() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
 
const handleSubmit = async (e: { preventDefault: () => void; }) => {
  e.preventDefault();

  try {
    const response = await axios.post('/api/submitForm', formData);

   
    console.log('API Response:', response.data);

   
    setFormData({
      name: '',
      email: '',
      phone: '',
    });
  } catch (error) {
    // Handle errors
    console.error('Error submitting form:', error);
  }
};

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              The Web. Now. Yours.
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              The platform for the future of the web. Sign up to stay informed about our progress.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <form className="space-y-2" onSubmit={handleSubmit}>
              <Input
                placeholder="Name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <Input
                placeholder="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <Input
                placeholder="Phone"
                type="tel"
                inputMode="numeric"
                pattern="[0-9]*"
                minLength={10}
                maxLength={10}
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
              <Button type="submit">Sign Up</Button>
            </form>


            <p className="text-xs text-gray-500 dark:text-gray-400">
              Enter your email for updates.
              <Link className="underline underline-offset-2" href="#">
                Terms & Conditions
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}