import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#FFE566] pt-16">
      <div className="container grid lg:grid-cols-2 gap-8 items-center py-20">
        <div className="space-y-6">
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight">
            Collbr8
          </h1>
          <p className="text-2xl md:text-3xl lg:text-4xl">
            Bridging Brands and Influencers!
          </p>
          <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-8 text-lg">
            Let's Collabr8
          </Button>
        </div>
        <div className="relative h-[500px] lg:h-[600px]">
          <Image
            src="/placeholder.svg?height=600&width=600"
            alt="Creative collaboration visualization"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  )
}

