'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { PhoneIcon as WhatsappIcon } from 'lucide-react'

export function ContactSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Replace with your WhatsApp number
    window.open('https://wa.me/+YOUR_PHONE_NUMBER', '_blank')
  }

  return (
    <section id="contact" className="py-24 bg-black text-white flex justify-center items-center">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Work With Us</h2>
            <p className="text-xl text-gray-400">
              Ready to create something amazing? Let's connect!
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <Input
                placeholder="Name"
                required
                className="bg-gray-900 border-gray-800"
              />
              <Input
                type="email"
                placeholder="Email"
                required
                className="bg-gray-900 border-gray-800"
              />
            </div>
            <Input
              placeholder="Phone Number"
              required
              className="bg-gray-900 border-gray-800"
            />
            <Textarea
              placeholder="Your Message"
              required
              className="bg-gray-900 border-gray-800 min-h-[150px]"
            />
            <Button type="submit" size="lg" className="w-full">
              <WhatsappIcon className="mr-2 h-5 w-5" />
              Connect on WhatsApp
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

