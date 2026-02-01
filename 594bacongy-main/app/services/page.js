import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle } from 'lucide-react'

export const metadata = {
  title: 'Services',
  description: 'Comprehensive construction services including residential builds, commercial projects, renovations, and custom carpentry.',
}

export default function Services() {
  const services = [
    {
      title: 'Residential Construction',
      description: 'Complete home building services from foundation to finish.',
      image: 'https://images.unsplash.com/photo-1602757115429-b4190ae087be',
      features: [
        'New home construction',
        'Home additions and extensions',
        'Second story additions',
        'ADU (Accessory Dwelling Units)',
        'Custom home design-build',
        'Foundation work'
      ]
    },
    {
      title: 'Commercial Construction',
      description: 'Professional commercial building and tenant improvement services.',
      image: 'https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e',
      features: [
        'Office build-outs',
        'Retail space construction',
        'Restaurant construction',
        'Tenant improvements',
        'Commercial renovations',
        'ADA compliance upgrades'
      ]
    },
    {
      title: 'Renovations & Remodeling',
      description: 'Transform your existing space with expert renovation services.',
      image: 'https://images.unsplash.com/photo-1655975719898-8f3432eed322',
      features: [
        'Kitchen remodeling',
        'Bathroom renovations',
        'Basement finishing',
        'Whole-home renovations',
        'Room additions',
        'Interior upgrades'
      ]
    },
    {
      title: 'Custom Carpentry',
      description: 'Skilled woodwork and custom carpentry for unique projects.',
      image: 'https://images.unsplash.com/photo-1530639834082-05bafb67fbbe',
      features: [
        'Custom cabinetry',
        'Built-in shelving',
        'Trim and molding',
        'Deck construction',
        'Custom furniture',
        'Finish carpentry'
      ]
    },
    {
      title: 'Exterior Work',
      description: 'Enhance your property\'s curb appeal and structural integrity.',
      image: 'https://images.unsplash.com/photo-1614127938540-a1139bee1841',
      features: [
        'Siding installation',
        'Roofing services',
        'Window and door replacement',
        'Porch and deck building',
        'Exterior painting',
        'Masonry work'
      ]
    },
    {
      title: 'Project Management',
      description: 'Comprehensive project oversight from start to finish.',
      image: 'https://images.unsplash.com/photo-1713593930871-e21d7f9ef4a1',
      features: [
        'Permit acquisition',
        'Subcontractor coordination',
        'Timeline management',
        'Budget oversight',
        'Quality control',
        'Client communication'
      ]
    }
  ]

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1516216628859-9bccecab13ca"
            alt="Construction services"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10 text-center text-white px-4">
          <Badge className="mb-4 bg-primary text-primary-foreground">What We Do</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Comprehensive Construction Services
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            From concept to completion, we handle every aspect of your project
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container px-4">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {index % 2 === 0 ? (
                  <>
                    <div className="relative h-[400px] rounded-lg overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                      <p className="text-lg text-muted-foreground mb-6">{service.description}</p>
                      <div className="space-y-3">
                        {service.features.map((feature, fIndex) => (
                          <div key={fIndex} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="order-2 lg:order-1">
                      <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                      <p className="text-lg text-muted-foreground mb-6">{service.description}</p>
                      <div className="space-y-3">
                        {service.features.map((feature, fIndex) => (
                          <div key={fIndex} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="relative h-[400px] rounded-lg overflow-hidden order-1 lg:order-2">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Our Process</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Work</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A proven process that ensures successful project delivery
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { step: '01', title: 'Consultation', description: 'Discuss your vision and requirements' },
              { step: '02', title: 'Planning', description: 'Detailed plans and accurate estimates' },
              { step: '03', title: 'Permits', description: 'Handle all necessary approvals' },
              { step: '04', title: 'Construction', description: 'Expert execution with regular updates' },
              { step: '05', title: 'Completion', description: 'Final walkthrough and warranty' }
            ].map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="text-4xl font-bold text-primary mb-2">{item.step}</div>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container px-4">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Contact us today for a free consultation and detailed quote
              </p>
              <Button asChild size="lg" variant="secondary" className="text-lg">
                <Link href="/contact">Request a Quote</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
