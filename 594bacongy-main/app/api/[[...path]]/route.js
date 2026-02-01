import { NextResponse } from 'next/server'

// Contact form submission endpoint
export async function POST(request) {
  try {
    const { pathname } = new URL(request.url)

    // Contact form submission
    if (pathname === '/api/contact') {
      const body = await request.json()
      const { name, email, phone, projectType, message } = body

      // Validate required fields
      if (!name || !email || !message) {
        return NextResponse.json(
          { error: 'Name, email, and message are required' },
          { status: 400 }
        )
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(email)) {
        return NextResponse.json(
          { error: 'Invalid email address' },
          { status: 400 }
        )
      }

      // Log the submission to console (placeholder for Google Sheets integration)
      console.log('\n========== NEW CONTACT FORM SUBMISSION ==========')
      console.log('Timestamp:', new Date().toISOString())
      console.log('Name:', name)
      console.log('Email:', email)
      console.log('Phone:', phone || 'Not provided')
      console.log('Project Type:', projectType || 'Not specified')
      console.log('Message:', message)
      console.log('================================================\n')

      // In production, this would save to Google Sheets
      // For now, we're just logging to console

      return NextResponse.json(
        { 
          success: true, 
          message: 'Form submitted successfully' 
        },
        { status: 200 }
      )
    }

    // Default 404 for unknown endpoints
    return NextResponse.json(
      { error: 'Endpoint not found' },
      { status: 404 }
    )
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Health check endpoint
export async function GET(request) {
  const { pathname } = new URL(request.url)

  if (pathname === '/api/health') {
    return NextResponse.json(
      { status: 'ok', timestamp: new Date().toISOString() },
      { status: 200 }
    )
  }

  return NextResponse.json(
    { error: 'Endpoint not found' },
    { status: 404 }
  )
}
