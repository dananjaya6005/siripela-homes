import { Button } from "@/components/ui/button"

export function CallToAction() {
  return (
    <section className="my-16 rounded-xl overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60 z-10" />
      <div
        className="relative h-80 bg-cover bg-center"
        style={{ backgroundImage: "url('/placeholder.svg?height=400&width=1200')" }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Build Your Dream Home?</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl">
            Let's bring your vision to life. Our team of experts is ready to help you create the perfect space for your
            needs.
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-white/90">
            Get Started
          </Button>
        </div>
      </div>
    </section>
  )
}

