import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Award, Heart, Lightbulb, Shield } from 'lucide-react'

export const metadata = {
  title: 'About Us',
  description: 'Learn about BuildRight Construction - our story, values, and commitment to excellence in construction services.',
}

export default function About() {
  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We do what we say we\'ll do, with honest pricing and transparent communication.'
    },
    {
      icon: Award,
      title: 'Quality',
      description: 'Excellence in every detail, using premium materials and skilled craftsmanship.'
    },
    {
      icon: Heart,
      title: 'Respect',
      description: 'We treat your property, time, and budget with the utmost respect.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Staying current with modern techniques and building practices.'
    }
  ]

  const milestones = [
    { year: '1999', title: 'Company Founded', description: 'Started as a small family-owned business' },
    { year: '2005', title: 'Expansion', description: 'Grew team and expanded service offerings' },
    { year: '2012', title: 'Commercial Work', description: 'Began serving commercial clients' },
    { year: '2020', title: '500+ Projects', description: 'Completed our 500th successful project' },
    { year: '2024', title: 'Industry Leader', description: 'Recognized as top local construction company' }
  ]

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1614127938540-a1139bee1841"
            alt="About BuildRight Construction"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10 text-center text-white px-4">
          <Badge className="mb-4 bg-primary text-primary-foreground">Our Story</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Building Trust Since 1999
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            A family-owned construction company committed to excellence
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Who We Are</h2>
                <div className="space-y-4 text-lg text-muted-foreground">
                  <p>
                    BuildRight Construction was founded in 1999 by John Mitchell, a third-generation builder who saw the need for a construction company that truly put customers first.
                  </p>
                  <p>
                    What started as a one-man operation has grown into a trusted team of skilled craftsmen, project managers, and support staff. Despite our growth, we've never lost sight of our core values: integrity, quality, and customer satisfaction.
                  </p>
                  <p>
                    Today, we're proud to serve homeowners and businesses throughout the region, delivering projects that stand the test of time.
                  </p>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1530639834082-05bafb67fbbe"
                  alt="Construction work in progress"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Our Values</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Stand For</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These core principles guide every decision we make and every project we undertake
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-xl mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Our Journey</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Milestones</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="font-bold text-xl mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground text-lg">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Commitment to You
            </h2>
            <p className="text-xl opacity-90 mb-8">
              When you choose BuildRight Construction, you're choosing a partner who cares about your project as much as you do. We're committed to delivering exceptional results, on time and on budget, every single time.
            </p>
            <p className="text-lg opacity-90">
              We don't just build structures; we build relationships that last long after the project is complete.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
