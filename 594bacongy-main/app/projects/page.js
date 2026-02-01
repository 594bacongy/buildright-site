import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { MapPin, Calendar } from 'lucide-react'

export const metadata = {
  title: 'Projects',
  description: 'View our portfolio of completed construction projects including residential homes, commercial buildings, and renovations.',
}

export default function Projects() {
  const projects = [
    {
      title: 'Modern Family Home',
      category: 'Residential Construction',
      location: 'Riverside District',
      date: 'Completed 2024',
      description: 'A stunning 3,200 sq ft custom home featuring open-concept living, high-end finishes, and energy-efficient design.',
      image: 'https://images.unsplash.com/photo-1602757115429-b4190ae087be',
      details: [
        '4 bedrooms, 3.5 bathrooms',
        'Custom kitchen with quartz countertops',
        'Hardwood flooring throughout',
        'Smart home integration'
      ]
    },
    {
      title: 'Downtown Office Build-Out',
      category: 'Commercial Construction',
      location: 'Downtown Business District',
      date: 'Completed 2024',
      description: 'Complete office renovation for a tech startup, creating a modern, collaborative workspace.',
      image: 'https://images.unsplash.com/photo-1655975719898-8f3432eed322',
      details: [
        '5,000 sq ft office space',
        'Open floor plan with private offices',
        'Modern lighting and HVAC',
        'Custom millwork and finishes'
      ]
    },
    {
      title: 'Luxury Home Renovation',
      category: 'Renovation',
      location: 'Hillside Community',
      date: 'Completed 2023',
      description: 'Comprehensive whole-home renovation transforming a 1970s home into a modern masterpiece.',
      image: 'https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e',
      details: [
        'Complete kitchen and bathroom remodel',
        'New flooring and lighting',
        'Structural modifications',
        'Exterior facade update'
      ]
    },
    {
      title: 'Lakefront Custom Home',
      category: 'Residential Construction',
      location: 'Lakeside Estates',
      date: 'Completed 2023',
      description: 'Luxury waterfront home with panoramic views and high-end custom features throughout.',
      image: 'https://images.unsplash.com/photo-1614127938540-a1139bee1841',
      details: [
        '4,500 sq ft luxury home',
        'Floor-to-ceiling windows',
        'Custom outdoor living space',
        'Premium materials and finishes'
      ]
    },
    {
      title: 'Restaurant Build-Out',
      category: 'Commercial Construction',
      location: 'Historic District',
      date: 'Completed 2023',
      description: 'Full restaurant construction including commercial kitchen, dining area, and bar.',
      image: 'https://images.unsplash.com/photo-1530639834082-05bafb67fbbe',
      details: [
        'Commercial kitchen installation',
        'Custom bar and seating',
        'ADA compliant restrooms',
        'Completed ahead of schedule'
      ]
    },
    {
      title: 'Home Addition & Remodel',
      category: 'Renovation',
      location: 'Suburban Heights',
      date: 'Completed 2023',
      description: 'Two-story addition adding 1,200 sq ft plus complete first-floor renovation.',
      image: 'https://images.unsplash.com/photo-1713593930871-e21d7f9ef4a1',
      details: [
        'Second story addition',
        'Master suite expansion',
        'Kitchen and living room remodel',
        'Seamless integration with existing home'
      ]
    }
  ]

  const categories = ['All', 'Residential Construction', 'Commercial Construction', 'Renovation']

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1516216628859-9bccecab13ca"
            alt="Our projects"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10 text-center text-white px-4">
          <Badge className="mb-4 bg-primary text-primary-foreground">Portfolio</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our Work Speaks for Itself
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            Explore our portfolio of completed projects
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Projects Completed' },
              { number: '25+', label: 'Years Experience' },
              { number: '98%', label: 'Client Satisfaction' },
              { number: '100%', label: 'Quality Guarantee' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Each project represents our commitment to quality and excellence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-64">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-background/90 text-foreground">
                    {project.category}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {project.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {project.date}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="space-y-2">
                    {project.details.map((detail, dIndex) => (
                      <div key={dIndex} className="text-sm flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-6xl mb-6 opacity-50">"</div>
            <blockquote className="text-2xl md:text-3xl font-medium mb-6">
              BuildRight Construction exceeded our expectations. They were professional, on time, and the quality of work was outstanding. We couldn't be happier with our new home!
            </blockquote>
            <div className="text-lg opacity-90">
              <strong>Sarah & Michael Johnson</strong>
              <div>Riverside District Homeowners</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
