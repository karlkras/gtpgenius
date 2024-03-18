'use server';
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_KEY
});
export const generateChatResponse = async (chatMessages) => {
  try {
    const response = await openai.chat.completions.create({
      messages: [
        {role: 'system', content: 'you are a helpful assistant'},
        ...chatMessages
      ],
      model: "gpt-3.5-turbo",
      temperature: 0,
      max_tokens: 100
    });
    return response.choices[0].message;

  } catch (err) {
    console.log(err);
    return null;
  }
}

export const getExistingTours = async ({city, country}) => {
  return null;

}

export const generateTourResponse = async ({city, country}) => {
  const query = `Find a exact ${city} in this exact ${country}.
If ${city} and ${country} exist, create a list of things families can do in this ${city},${country}. 
Once you have a list, create a one-day tour. Response should be  in the following JSON format: 
{
  "tour": {
    "city": "${city}",
    "country": "${country}",
    "title": "title of the tour",
    "description": "short description of the city and tour",
    "stops": ["short paragraph on the stop 1 ", "short paragraph on the stop 2","short paragraph on the stop 3"]
  }
}
"stops" property should include only three stops.
If you can't find info on exact ${city}, or ${city} does not exist, or it's population is less than 1, or it is not located in the following ${country},   return { "tour": null }, with no additional characters.`;

  try {
    const response = await openai.chat.completions.create({
      messages: [
        {role: 'system', content: 'you are a helpful tour guide'},
        {role: 'user', content: query}
      ],

      model: "gpt-3.5-turbo",
      temperature: 0
    });

    const tourData = JSON.parse(response.choices[0].message.content);
    if (!tourData.tour) {
      return null;
    }
    return { tour: tourData.tour, tokens: response.usage.total_tokens };
  } catch (err) {
    console.log(err);
    return null;
  }
}

export const createNewTour = async ({city, country}) => {
  return null;
}