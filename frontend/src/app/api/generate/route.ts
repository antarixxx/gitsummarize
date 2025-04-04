import { NextResponse } from 'next/server';

// Set a longer timeout for the Next.js API route
export const maxDuration = 240; // seconds (4 minutes)

interface RequestBody {
  repo_url: string;
}

interface ErrorResponse {
  message: string;
}

export async function POST(request: Request) {
  try {
    const { repo_url } = await request.json() as RequestBody;

    if (!repo_url) {
      return NextResponse.json({ error: 'Repository URL is required' }, { status: 400 });
    }

    const backendSummarizeUrl = `${process.env.BACKEND_URL}/summarize`; // Use env var

    // Call the external API with the bearer token and extended timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 240000); // 240 second timeout

    try {
      console.log(`Making request to external API for: ${repo_url}`);

      const response = await fetch(backendSummarizeUrl, { // Use the constructed URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.RENDER_API_KEY ?? ''}`
        },
        body: JSON.stringify({ repo_url }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId); // Clear the timeout if request completes

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ message: 'Unknown error' })) as ErrorResponse;
        console.error('Error from external API:', errorData);
        return NextResponse.json(
          { error: 'Failed to process codebase. Please try again later or try adding your own Gemini API key.' },
          { status: response.status }
        );
      }

      // Return success response
      return NextResponse.json({ success: true });
    } catch (fetchError) {
      clearTimeout(timeoutId);

      // Handle timeout specifically
      if (fetchError instanceof Error && fetchError.name === 'AbortError') {
        console.error('External API request timed out after 60 seconds');
        return NextResponse.json(
          { error: 'External API request timed out. Try again later or try adding your own Gemini API key.' },
          { status: 504 }
        );
      }

      console.error('External API request failed:', fetchError);
      return NextResponse.json(
        { error: 'Failed to connect to external API service. The service might be unavailable. Try again later or try adding your own Gemini API key.' },
        { status: 503 }
      );
    }

  } catch (error) {
    console.error('Server error generating documentation:', error);
    return NextResponse.json(
      { error: 'Internal server error. Please try again later or try adding your own Gemini API key.' },
      { status: 500 }
    );
  }
} 
