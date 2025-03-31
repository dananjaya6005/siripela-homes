import React from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useEffect , useMemo, useState} from 'react'
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <div>
         <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Modern construction project by Siripela Homes"
                  width={600}
                  height={400}
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Our Story</h2>
                <p className="text-muted-foreground md:text-lg/relaxed">
                  At Siripela Homes, we have established a unique position in the construction industry through our
                  commitment to innovation, quality, and customer satisfaction. As pioneers in providing comprehensive
                  construction solutions, we consistently strive to exceed our customers' expectations.
                </p>
                <p className="text-muted-foreground md:text-lg/relaxed">
                  Our team comprises highly skilled professionals gifted with creativity and technical expertise,
                  enabling us to complete projects within stipulated timelines while maintaining the highest quality
                  standards. The trust our clients place in us is reflected in our brand reputation, which keeps us at
                  the forefront of the construction industry.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button>
                    View Our Projects
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline">Contact Us</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default About