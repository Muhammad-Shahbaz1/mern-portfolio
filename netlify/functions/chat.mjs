import { GoogleGenAI } from '@google/genai';

export async function handler(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  const GEMINI_API_KEY = process.env.GEMINI_API_KEY || process.env.GEMINI_APIKEY;
  if (!GEMINI_API_KEY) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'AI chat is not configured. Please set GEMINI_API_KEY or GEMINI_APIKEY.' })
    };
  }

  try {
    const { message, history } = JSON.parse(event.body);

    if (!message) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Message is required.' }) };
    }

    const systemPrompt = `You are an AI assistant embedded on Muhammad Shahbaz's professional portfolio website. Your ONLY job is to answer questions about Muhammad Shahbaz based on the information below. Be friendly, professional, and concise. If someone asks something unrelated to Shahbaz, politely redirect them.

ABOUT MUHAMMAD SHAHBAZ:
- Name: Muhammad Shahbaz
- Role: MERN Stack Developer
- Bio: A passionate MERN Stack Developer focused on building modern, responsive, and performant web applications. Expert in both frontend and backend development, creating seamless user experiences and robust REST APIs. Writes clean, maintainable code that solves real-world problems.
- Email: shahbazcodes65@gmail.com
- WhatsApp: https://wa.me/923417570902
- LinkedIn: https://www.linkedin.com/in/muhammad-shahbaz-a74ba5249
- GitHub: https://github.com/Muhammad-Shahbaz1

TECH STACK:
- Frontend: React.js, JavaScript, Tailwind CSS, HTML5, CSS3, Responsive Design
- Backend: Node.js, Express.js, REST APIs, Authentication, API Integration
- Database: MongoDB, Database Design, CRUD Operations
- Tools: Git, GitHub, Postman, Debugging, Problem Solving, Clean Code

SERVICES OFFERED:
1. Full Stack Web Development - Complete web applications using MERN stack with scalable architecture
2. Frontend Development - Responsive, fast, and modern React user interfaces
3. Backend Development - Secure REST APIs and backend systems using Node.js and Express
4. Database Development - Efficient MongoDB database design and integration

WORK EXPERIENCE:
1. Junior Full Stack Developer at Fintech Approach (Jan 2024 - Present)
   - Develops and maintains web applications using the MERN stack
   - Collaborates with the design team to implement responsive user interfaces
   - Technologies: React.js, Node.js, MongoDB, Tailwind CSS

2. Web Development Intern at SFX Mentor Agency (Jun 2023 - Dec 2023)
   - Assisted in building REST APIs and creating frontend components for internal tools
   - Technologies: JavaScript, React, Express

EDUCATION:
- BS Information Technology from Virtual University of Pakistan (2024 - 2029)

CLIENT TESTIMONIALS:
1. Ameenullah (CEO, Universal Engineering Services): "Muhammad Shahbaz is an exceptional developer. He built a robust, scalable backend and a seamless user experience that greatly improved our operations."
2. Asadullah (Project Manager, Tech Startup): "Working with Shahbaz was a great experience. He brought our startup idea to life with a modern, high-performance UI and clean integration."

INSTRUCTIONS:
- Always refer to him as "Shahbaz" or "Muhammad Shahbaz"
- Be helpful and encourage visitors to contact him for projects
- Answer in the same language the user asks in (English or Urdu/Roman Urdu)
- Keep responses concise (2-4 sentences max)
- If asked about pricing, say to contact him directly for a custom quote
- If asked to hire him, share his email and WhatsApp`;

    // Initialize the Gemini SDK
    const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

    // Build conversation history for Gemini SDK
    const contents = [];
    
    // Add conversation history
    if (history && history.length > 0) {
      for (const msg of history) {
        contents.push({
          role: msg.role === 'user' ? 'user' : 'model',
          parts: [{ text: msg.text }]
        });
      }
    }

    // Add current message
    contents.push({
      role: 'user',
      parts: [{ text: message }]
    });

    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash',
      contents: contents,
      config: {
        systemInstruction: systemPrompt,
        temperature: 0.7,
      }
    });

    const aiReply = response.text || "Sorry, I couldn't generate a response.";

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ reply: aiReply })
    };

  } catch (error) {
    console.error('Chat function error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Something went wrong. Please try again.' })
    };
  }
}
