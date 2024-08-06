import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY as string,
});

const getRecipe = async (prompt: string): Promise<string> => {
  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      {
        role: "system",
        content: "You're a master chef who specializes in breakfast. Output a recipe in the given json format: { recipeName: [recipe name], desciption: [recipe description], prepTime: [time to prep], cookTime: [time to cook], servings: [amount of servings], ingredients: [list of ingredients], directions: [list of directions] }",
      },
      {
        role: "user",
        content: prompt,
      },
    ],
    temperature: 1,
    max_tokens: 1500,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  const message = response.choices[0]?.message?.content ?? "";

  return message;
};

export default getRecipe;
