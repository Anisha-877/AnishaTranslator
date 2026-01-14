export async function translateText(text, targetLanguage) {
  try {
    const prompt = `You are requested to provide ONLY the translated text.
I will provide the source text and specify the target language.
Your task is to translate the text accurately and naturally.
DO NOT:
- Add explanations
- Add comments
- Add suggestions
- Ask questions
- Add notes
- Add formatting
IMPORTANT:
Respond with NOTHING except the translated text.
Do not include quotation marks, headings, or any extra words.
This is a strict instruction. Follow it exactly.
SOURCE-TEXT = ${text}
TARGET_LANGUAGE = ${targetLanguage}`;

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.REACT_APP_GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: prompt
          }]
        }]
      })
    });

    const data = await response.json();
    if (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts && data.candidates[0].content.parts[0]) {
      return data.candidates[0].content.parts[0].text;
    } else {
      return "Translation failed";
    }
  } catch (error) {
    console.error("Error:", error.message);
    return "Translation failed";
  }
}