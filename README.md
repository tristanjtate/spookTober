# Witch's Cauldron Potion Game 🎃

### Description:
The **Witch's Cauldron Potion Game** is a spooky, interactive game created for Codecademy’s **Spooktober 2024 Challenge**. Players choose from a set of magical ingredients and brew their own Halloween-themed potion. Each potion yields a fun and spooky result, which includes a unique message and a matching image, randomly selected for each brew!

### How the Game Works:
1. **Select 3 Ingredients**: 
   - The player chooses three ingredients by clicking buttons labeled with Halloween-themed options (e.g., Bat Wings 🦇, Spider Legs 🕷️, Frog Eyes 👁️).
   - These ingredients are tracked in an array to control when the brewing process can begin.

2. **Brew the Potion**: 
   - After selecting exactly three ingredients, the player clicks the **"Brew Potion"** button.
   - The game logic checks if three ingredients have been selected, and if so, it proceeds to the brewing phase.

3. **Randomized Results**:
   - The game uses JavaScript to randomly select a potion result from a predefined list.
   - Each result has two components: a fun message and an associated image (e.g., "Your potion summons a tiny ghost!" with a ghost image).
   - The message and image are displayed on the screen.

4. **Visual Effects**:
   - The game features simple animations and styling using CSS to give the buttons a magical feel and to display the result images in a spooky, themed format.

### Core Functionality:
- **Ingredient Selection**:
   - The game listens for click events on ingredient buttons. Each time an ingredient is selected, it's added to an array. Once three ingredients are selected, no more can be added until the potion is brewed.

- **Potion Brewing**:
   - When the **"Brew Potion"** button is clicked, the game checks if three ingredients have been selected. If not, an alert is triggered asking the player to select exactly three ingredients.
   - If the selection is valid, the game randomly selects one of several predefined potion results, displaying both a text message and an image.

- **Randomization**:
   - The potion result is chosen randomly from a list using JavaScript's `Math.random()` function to ensure a unique experience with each playthrough.

### Features:
- **Interactive Ingredient Selection**: The user can pick ingredients from a set of spooky choices.
- **Random Potion Results**: Each potion brewing leads to a random and fun result.
- **Dynamic Image Display**: The result includes a corresponding image that appears after the potion is brewed.
- **CSS Effects**: The buttons and images are styled with fun, Halloween-themed effects, adding to the game’s magical atmosphere.

### How to Play:
1. Clone or download the repository.
2. Make sure all image files for the potion results are in the `images` folder.
3. Open the `index.html` file in a web browser.
4. Select 3 spooky ingredients, brew the potion, and enjoy the result!

### Technologies Used:
- **HTML** for structure.
- **CSS** for styling and animations.
- **JavaScript** for the game logic, ingredient selection, and randomized results.
