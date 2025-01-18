import Image from "next/image"
import { Button } from "@/components/ui/button"

export function TalentSection() {
  return (
    <section id="talent" className="py-24 bg-[#FFE566]">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              Our Talent Network
            </h2>
            <p className="text-xl">
              Connect with diverse creators who bring authentic voices and fresh perspectives to your brand.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" variant="default">
                Join Our Network
              </Button>
              <Button size="lg" variant="outline">
                View Talent
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="relative aspect-square">
                <Image
                  src={`/placeholder.svg?height=300&width=300`}
                  alt={`Creator ${i}`}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

