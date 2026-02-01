'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'
import { Toaster } from '@/components/ui/sonner'
import { toast } from 'sonner'
import { Phone, Mail, MapPin, Clock, Loader2 } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields')
      setLoading(false)
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address')
      setLoading(false)
      return
    }

    try {
      // Call API route
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (response.ok) {
        toast.success('Thank you! We\'ll get back to you within 24 hours.')
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          projectType: '',
          message: ''
        })
      } else {
        toast.error(data.error || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      toast.error('Failed to submit form. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '(555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@buildrightconstruction.com',
      link: 'mailto:info@buildrightconstruction.com'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: '123 Builder Lane, Construction City, ST 12345',
      link: null
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon-Fri: 8am-6pm, Sat: 9am-3pm',
      link: null
    }
  ]

  return (
    <div className="flex flex-col">
      <Toaster position="top-center" />
      
      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1516216628859-9bccecab13ca"
            alt="Contact us"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10 text-center text-white px-4">
          <Badge className="mb-4 bg-primary text-primary-foreground">Get In Touch</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Let's Build Something Great Together
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            Contact us for a free consultation and project quote
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-bold mb-2">{info.title}</h3>
                      {info.link ? (
                        <a href={info.link} className="text-muted-foreground hover:text-primary transition-colors">
                          {info.details}
                        </a>
                      ) : (
                        <p className="text-muted-foreground text-sm">{info.details}</p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4">Contact Form</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Request a Free Quote</h2>
              <p className="text-xl text-muted-foreground">
                Fill out the form below and we'll get back to you within 24 hours
              </p>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Project Inquiry</CardTitle>
                <CardDescription>Tell us about your construction needs</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Smith"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(555) 123-4567"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="projectType">Project Type</Label>
                      <Input
                        id="projectType"
                        name="projectType"
                        placeholder="e.g., Home Renovation"
                        value={formData.projectType}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Project Details *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project, timeline, and any specific requirements..."
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full" disabled={loading}>
                    {loading ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prefer to Talk Directly?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Give us a call and speak with one of our construction experts
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg">
            <a href="tel:+15551234567">
              <Phone className="w-5 h-5 mr-2" />
              Call (555) 123-4567
            </a>
          </Button>
        </div>
      </section>
    </div>
  )
}
