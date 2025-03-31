import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Linkedin  , Smartphone } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue , } from "@/components/ui/select"

export default function ContactUs() {
  return (
    <>
    <div className="container mx-auto p-4 md:p-6 lg:p-8  max-w-7xl ">
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Company Info Section */}
        <Card className="p-6 space-y-6">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold">Siripela Homes & Construction  </h1>
            <p className="text-muted-foreground">Sri Lanka’s Trusted Name in Superior Construction</p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-muted-foreground mt-1" />
              <div>
                <div className="font-medium">Address</div>
                <div className="text-muted-foreground">174 Negombo Rd, Kurunegala</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-muted-foreground mt-1" />
              <div>
                <div className="font-medium">Phone</div>
                <div className="text-muted-foreground">+94 11 2 927 505</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Smartphone className="w-5 h-5 text-muted-foreground mt-1" />
              <div>
                <div className="font-medium">Mobile</div>
                <div className="text-muted-foreground">+94 76 701 96 96 | +94 76 712 96 965</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-muted-foreground mt-1" />
              <div>
                <div className="font-medium">Email</div>
                <div className="text-muted-foreground">info@siripela.lk</div>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="font-medium">Business Hours</h2>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center rounded-full bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/20">
                  Open now
                </span>
              </div>
              <div className="text-muted-foreground">Monday - Friday: 9 AM - 6 PM</div>
              <div className="text-muted-foreground">Saturday: 10 AM - 4 PM</div>
              <div className="text-muted-foreground">Sunday: Closed</div>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="font-medium">Follow Us</h2>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </Card>

        {/* Contact Form Section */}
        <Card className="p-6">
          <form className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input id="fullName" placeholder="Your name" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Leo@example.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number (Optional)</Label>
                <Input id="phone" placeholder="+94 XX XXX XXXX" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Inquiry</SelectItem>
                    <SelectItem value="support">Support</SelectItem>
                    <SelectItem value="sales">Sales</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Tell us how we can help..." className="min-h-[150px]" />
              </div>
            </div>

            <Button className="w-full bg-rose-700 hover:bg-amber-600 duration-300 ">Send Message</Button>
          </form>
        </Card>
      </div>


    </div>

    <section className="bg-gradient-to-r from-rose-800 to-amber-600 py-16 text-white rounded-2xl ">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">Have Questions? Get in Touch!</h2>
          <p className="mb-8 text-lg text-emerald-100">
            Our team is ready to assist you with all your real estate needs.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">

          <a href="tel:+94112927505" className="inline-flex">
            <Button  size="lg" variant="secondary">
              <Phone className="mr-2 h-4 w-4" />
              Call Now
            </Button>
            </a>

            <a href="mailto:info@siripela.lk" className="inline-flex"> 
            <Button size="lg" variant="outline" className="bg-transparent text-white hover:bg-white/10">
              <Mail className="mr-2 h-4 w-4" />
              Email Us
            </Button>
            </a>
          </div>
        </div>
      </section>

    </>
  )
}

