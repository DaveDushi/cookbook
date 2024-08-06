import sendEmail from "~/server/email/mailer";
import getRecipe from "~/server/openai/openai";
import { z } from 'zod';

// Define your schema
const schema = z.object({
  email: z.string().email("Invalid email address")
});


export async function POST(request: Request) {
    // Extract all form data field
    const body = await request.json();
    const {meal, ingredients, cuisine, cookingTime, servings, experience, email, marketingEmail} = body

    const result = schema.safeParse({ email });

    if (!result.success) {
        return new Response(JSON.stringify(result.error.errors), { status: 400 });
    }
  
    // open ai 
    const aiMessage = `An ${cuisine} style ${meal} recipe for ${servings} people ${ingredients.length > 0 ? 'using ' + ingredients : ''} that takes up to ${cookingTime} minutes to make 
and has a difficulty level of ${experience}`
    
    const aiResponse = await getRecipe(aiMessage)
    const aiResponseJson = JSON.parse(aiResponse)
    console.log(aiResponseJson)

    // mock ai data 
    // const aiResponseJson = {
    //     recipeName: 'Shakshuka',
    //     description: 'A delightful Israeli-style breakfast featuring poached eggs in a spicy tomato and pepper sauce.',
    //     prepTime: '10 minutes',
    //     cookTime: '20 minutes',
    //     servings: '2',
    //     ingredients: [
    //       '2 tablespoons olive oil',
    //       '1 onion, chopped',
    //       '1 red bell pepper, chopped',
    //       '2 cloves garlic, minced',
    //       '1 teaspoon ground cumin',
    //       '1 teaspoon sweet paprika',
    //       '1/4 teaspoon cayenne pepper (optional, for a bit of heat)',
    //       '1 can (14.5 ounces) diced tomatoes',
    //       '1/2 teaspoon salt',
    //       '1/4 teaspoon black pepper',
    //       '4 large eggs',
    //       'Fresh parsley or cilantro, chopped (for garnish)',
    //       'Feta cheese, crumbled (optional, for garnish)',
    //       'Bread (for serving)'
    //     ],
    //     directions: [
    //       'Heat the olive oil in a large skillet over medium heat.',
    //       'Add the chopped onion and red bell pepper. Cook until the onion becomes translucent and the pepper softens, about 5 minutes.',
    //       'Add the minced garlic, cumin, paprika, and optional cayenne pepper. Cook, stirring frequently, until fragrant, about 1 minute.',
    //       'Pour in the canned diced tomatoes, then add salt and black pepper. Stir to combine and bring the mixture to a simmer.',  
    //       'Reduce the heat to medium-low and let the sauce cook, uncovered, for about 10 minutes, until it thickens slightly. Stir occasionally.',
    //       'Make small wells in the sauce and gently crack an egg into each well. Cover the skillet and cook until the egg whites are set but the yolks are still runny, about 5-7 minutes.',
    //       'Remove the skillet from the heat. Garnish with chopped parsley or cilantro and crumbled feta cheese, if using.',
    //       'Serve immediately with fresh bread.'
    //     ]
    //   }


      

    const emailResponse = await sendEmail(email, aiResponseJson)
    console.log(emailResponse)

    return new Response(JSON.stringify({}), {
        headers: { 'Content-Type': 'application/json' },
    });
}
