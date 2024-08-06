export const emailTemplate = (recipe: { recipeName: string; description: string; prepTime: number; cookTime: number; servings: number; ingredients: string[]; directions: string[] }) => {
    const { recipeName, description, prepTime, cookTime, servings: numOfServings, ingredients: ingredientsList, directions } = recipe;

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>CookedUp Recipe</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                color: #333;
                margin: 0;
                padding: 0;
            }
            .container {
                width: 100%;
                max-width: 600px;
                margin: auto;
                padding: 20px;
                background-color: #f8f8f8;
            }
            .header {
                text-align: center;
                padding-bottom: 20px;
            }
            .header img {
                max-width: 200px;
            }
            .recipe-title {
                font-size: 24px;
                font-weight: bold;
                color: #333;
                text-align: center;
                margin: 20px 0;
            }
            .recipe-details {
                margin-bottom: 20px;
            }
            .recipe-details h2 {
                font-size: 18px;
                color: #555;
            }
            .recipe-details p {
                font-size: 16px;
                color: #666;
            }
            .ingredients, .directions {
                margin: 20px 0;
            }
            .ingredients ul, .directions ol {
                padding-left: 20px;
            }
            .footer {
                text-align: center;
                padding-top: 20px;
                border-top: 1px solid #ddd;
                font-size: 14px;
                color: #777;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <!-- Header with Logo -->
            <div class="header">
                <img src="https://cookbook-blond-mu.vercel.app/heroImage.jpeg" alt="Site Logo">
            </div>

            <!-- Recipe Title -->
            <div class="recipe-title">
                ${recipeName}
            </div>

            <!-- Recipe Details -->
            <div class="recipe-details">
                <p><strong>Description:</strong> ${description}</p>
                <p><strong>Prep Time:</strong> ${prepTime} minutes</p>
                <p><strong>Cook Time:</strong> ${cookTime} minutes</p>
                <p><strong>Servings:</strong> ${numOfServings}</p>
            </div>

            <!-- Ingredients -->
            <div class="ingredients">
                <h2>Ingredients:</h2>
                <ul>
                    ${ingredientsList.map(ingredient => `<li>${ingredient}</li>`).join('')}
                </ul>
            </div>

            <!-- Directions -->
            <div class="directions">
                <h2>Directions:</h2>
                <ol>
                    ${directions.map(direction => `<li>${direction}</li>`).join('')}
                </ol>
            </div>

            <!-- Footer -->
            <div class="footer">
                &copy; 2024 CookedUp. All rights reserved.
            </div>
        </div>
    </body>
    </html>
    `;
};
