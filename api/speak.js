// This is your Vercel Serverless Function.
// It runs securely on a server, not in the user's browser.

export default async function handler(request, response) {
  // Get the text to speak from the request URL (e.g., /api/speak?text=Hello)
  const { text } = request.query;

  if (!text) {
    return response.status(400).json({ error: 'Text to speak is required.' });
  }

  // Securely get your API key from the Vercel environment variables
  const apiKey = process.env.ELEVENLABS_API_KEY;
  const voiceId = '21m00Tcm4TlvDq8ikWAM'; // This is the ID for the voice "Rachel"

  const url = `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`;

  const options = {
    method: 'POST',
    headers: {
      'xi-api-key': apiKey,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      text: text,
      model_id: 'eleven_multilingual_v2',
      voice_settings: {
        stability: 0.5,
        similarity_boost: 0.75,
      },
    }),
  };

  try {
    const elevenResponse = await fetch(url, options);

    if (!elevenResponse.ok) {
      throw new Error(`ElevenLabs API failed with status: ${elevenResponse.status}`);
    }

    // The response is the audio itself. We send it directly back to the browser.
    // Vercel handles this streaming efficiently.
    return new Response(elevenResponse.body, {
        headers: {
            'Content-Type': 'audio/mpeg',
        },
    });

  } catch (error) {
    console.error('Error fetching from ElevenLabs API:', error);
    return response.status(500).json({ error: 'Failed to synthesize speech.' });
  }
}