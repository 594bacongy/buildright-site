'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Phone, Mail, MapPin, Award, Users, Clock, Shield } from 'lucide-react'

export default function Home() {
  const services = [
    {
      title: 'Residential Construction',
      description: 'New home builds, additions, and major renovations for homeowners.',
      icon: '🏠'
    },
    {
      title: 'Commercial Projects',
      description: 'Light commercial construction and tenant improvements.',
      icon: '🏢'
    },
    {
      title: 'Renovations & Remodeling',
      description: 'Kitchen, bathroom, and whole-home renovations.',
      icon: '🔨'
    },
    {
      title: 'Custom Carpentry',
      description: 'Custom woodwork, cabinetry, and finish carpentry.',
      icon: '🪚'
    }
  ]

  const trustIndicators = [
    { icon: Award, label: '25+ Years Experience', description: 'Serving the community since 1999' },
    { icon: Users, label: 'Licensed & Insured', description: 'Fully certified professionals' },
    { icon: Clock, label: 'On-Time Delivery', description: '95% projects completed on schedule' },
    { icon: Shield, label: 'Quality Guarantee', description: 'Warranty on all workmanship' }
  ]

  const recentProjects = [
    {
      title: 'Modern Family Home',
      location: 'Riverside District',
      image: 'https://images.unsplash.com/photo-1602757115429-b4190ae087be'
    },
    {
      title: 'Commercial Building',
      location: 'Downtown',
      image: 'https://images.unsplash.com/photo-1655975719898-8f3432eed322'
    },
    {
      title: 'Luxury Renovation',
      location: 'Hillside Community',
      image: 'https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e'
    }
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1516216628859-9bccecab13ca"
            alt="Professional construction workers"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10 text-center text-white px-4">
          <Badge className="mb-4 bg-primary text-primary-foreground">Trusted Local Builders</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Building Your Dreams<br />With Quality & Integrity
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Professional construction services for residential and commercial projects
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg">
              <Link href="/contact">Get Free Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white">
              <Link href="/projects">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustIndicators.map((indicator, index) => {
              const Icon = indicator.icon
              return (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{indicator.label}</h3>
                  <p className="text-muted-foreground text-sm">{indicator.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Our Services</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Build</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From new construction to renovations, we deliver exceptional results
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild size="lg" variant="outline">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Recent Work</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See the quality and craftsmanship in our completed projects
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-64">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {project.location}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild size="lg">
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Why Choose Us</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Built on Trust & Excellence</h2>
              <p className="text-lg text-muted-foreground mb-6">
                For over 25 years, we've been the go-to construction company for homeowners and businesses who demand quality, reliability, and integrity.
              </p>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Expert Craftsmanship</h4>
                    <p className="text-muted-foreground">Our skilled team brings decades of combined experience to every project</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Transparent Communication</h4>
                    <p className="text-muted-foreground">We keep you informed every step of the way, no surprises</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Fair & Competitive Pricing</h4>
                    <p className="text-muted-foreground">Quality work at honest prices, with detailed quotes</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1713593930871-e21d7f9ef4a1"
                alt="Construction team working"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's discuss your construction needs and bring your vision to life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg">
              <Link href="/contact">Get Free Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 border-white text-white">
              <Link href="tel:+1234567890">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
