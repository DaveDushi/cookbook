// import sendEmail from "~/server/mailer/sendEmail";
// import getColorPalette from "~/server/openai/openai";

export async function POST(request: Request) {
    // Extract all form data field
    const body = await request.json();
    const {meal, ingredients, cuisine, cookingTime, servings, experience, email, marketingEmail} = body
  

    // // Optionally, send an email with the form data
    // try {
    //     const emailResponse = await sendEmail({
    //         to: answers.email,
    //         subject: 'Your Color Palette Preferences',
    //         body: JSON.stringify(answers, null, 2), // Format the body with answers
    //     });
    //     console.log(emailResponse);
    // } catch (error) {
    //     console.error('Error sending email:', error);
    // }

    // Handle the data, e.g., save it to the database

    // Return the response

    // open ai
    // const message = await getColorPalette('Create a 5-color palette for a tech startup that evokes innovation and trust. The palette should include shades of blue and one accent color and reflect analogous harmonies. Consider the young professional audience, modern style, and accessibility requirements. The colors should be suitable for digital media and reflect cultural significance.')
    // console.log(message)

    return new Response(JSON.stringify({}), {
        headers: { 'Content-Type': 'application/json' },
    });
}
