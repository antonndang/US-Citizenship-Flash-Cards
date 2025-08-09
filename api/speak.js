// in api/speak.js

export default async function handler(request, response) {
  const { text } = request.query;

  if (!text) {
    return response.status(400).json({ error: 'Text to speak is required.' });
  }

  const apiKey = process.env.ELEVENLABS_API_KEY;
  const voiceId = 'XrExE9yKIg1WjnnlVkGX'; // "Matilda"

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
      const errorData = await elevenResponse.json();
      console.error('ElevenLabs API Error:', errorData);
      return response.status(elevenResponse.status).json(errorData);
    }

    // --- THIS IS THE CORRECTED PART ---
    // 1. Get the audio data as a buffer.
    const audioBuffer = await elevenResponse.arrayBuffer();

    // 2. Set the correct header to tell the browser it's an MP3 file.
    response.setHeader('Content-Type', 'audio/mpeg');

    // 3. Send the audio buffer back to the browser using the response object.
    return response.status(200).send(Buffer.from(audioBuffer));
    // --- END OF CORRECTION ---

  } catch (error) {
    console.error('Server-side Error:', error);
    return response.status(500).json({ error: 'Failed to synthesize speech.' });
  }
}