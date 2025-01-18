'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { PhoneIcon as WhatsappIcon, Loader2 } from 'lucide-react'
import { submitContactForm } from "@/app/actions"
import { useToast } from "@/components/ui/use-toast"
import { Toast, ToastProvider } from "@/components/ui/toast"

export function ContactSection() {
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const formData = new FormData(e.currentTarget)
      const result = await submitContactForm(formData)

      if (result.success) {
        toast({
          title: "Success!",
          description: "Redirecting you to WhatsApp...",
        })
        
        // Redirect to WhatsApp
        const whatsappNumber = "9849953919" // Replace with your WhatsApp number
        window.open(
          `https://wa.me/${whatsappNumber}?text=${result.whatsappMessage}`,
          '_blank'
        )

        // Reset the form
        e.currentTarget.reset()
      } else {
        toast({
          variant: "destructive",
          title: "Error",
          description: result.message,
        })
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong. Please try again.",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <ToastProvider>
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
                  name="name"
                  placeholder="Name"
                  required
                  className="bg-gray-900 border-gray-800"
                  disabled={isLoading}
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Email"
                  required
                  className="bg-gray-900 border-gray-800"
                  disabled={isLoading}
                />
              </div>
              <Input
                name="phone"
                placeholder="Phone Number"
                required
                className="bg-gray-900 border-gray-800"
                disabled={isLoading}
              />
              <Textarea
                name="message"
                placeholder="Your Message"
                required
                className="bg-gray-900 border-gray-800 min-h-[150px]"
                disabled={isLoading}
              />
              <Button 
                type="submit" 
                size="lg" 
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <WhatsappIcon className="mr-2 h-5 w-5" />
                    Connect on WhatsApp
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </ToastProvider>
  )
}

