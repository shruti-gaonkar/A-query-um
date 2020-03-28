# A-Query-Um
> A web app for locating basic information about aquarium fresh and saltwater fish.

# Demo
This app is deployed on Heroku, you can find the [live app Here](https://aqueryum.herokuapp.com/)!

# Functionality
When initially running the application the user will be introduced to the homepage that gives the user the ability to use the search bar and search for aquarium fish and will be directed to a new page displaying all fish with the name searched and the user can click on the fish of their choice to be directed to a new page displaying an image and some basic information relating to the fish. The user can also scroll down to view some links to articles for Aquarium Fish Care Guides that were web-scraped from [theaquariumguide.com](https://www.theaquariumguide.com/aquarium-fish-care-guides). 

The user also has the ability to sign-up and create an account or sign-in to an existing account. Once the user creates an account or logs-in to an existing account, they have the ability to save fish from their searches and add them to their own personal aquarium! 

# Searchability
Utilizing mLab on Heroku, the Search functionality uses the mongoose .find() in order to look for any partial matches in either a fish document's aliases array, or in a fish document's scientificName string. Results are returned for all partial matches, displayed in a table format, and sorted based on the first index of the alias array for each fish document returned. If no results are found, then a message is displayed indicating there are no results found by that search query.

The results table displays a Common Name column, a Scientific Name column, an Aliases column, a Type column, and a Save column. If the user is not logged in, the Save column will display only greyed out, non-interactive buttons. When a user is logged in, the Save colum will display green icons for fish which are not saved to that user's personal aquarium page, or greyed out icons for fish already found in that user's personal aquarium page.

Selecting the Common Name brings the user to the Details page for that fish. Selecting the "Display Aliases" link will present a modal to the user listing all recorded names for that fish in various languages, sorted by English Alphabetical order. Selecting the green Save icon at the end of a row then saves that fish to the user's aquarium page. A user must delete that fish from their aquarium page.

# Fish Information
After selecting a fish by its Common Name on the Search Results page, the user is brought to that fish's detailed information page. This page includes their Common Name, Scientific Name, and a link which, when selected, displays a modal containing all other names for that species of fish in as many languages as had been provided on fishbase.org(fishbase.org).

A carousel of images related to that fish displays below. This carousel is both touch responsive (can be swiped) and responsive to size of screen, between mobile and desktop. Each image has a related caption that is also that image's alt text. Depending on the size of a screen's viewport, that caption will either be overlayed on the image and given transparency, or displayed below that image and given a transparency. When the image is selected, that caption will come to full visibility; when selecting outside of the image, that caption will return to its previous transparency state.

A description of the fish follows the carousel, along with the following information: Type (Freshwater, Saltwater, or Brackish), Maximum Size (in CM and IN), Lifespan (in years), Diet, Minimum Tank Size (in Litres and Gallons), Temperature Range (in °C and °F ), Aggression Level (Peaceful, Semi-Aggressive, Aggressive), if the fish is appropriate as a Community Fish or not, if the fish is safe for a Reef Tank (when the fish is a Saltwater fish), and any specific notes about that fish which may be useful when considering having them in an aquarium.

# My Profile
The My Profile page allows a user to access their Aquarium when on Desktop (mobile and smaller tablets can use the Side Nav to directly access their Aquarium, or may still access it through their Profile page). This page also allows a user to change their displayed name and displayed icon. This icon will display on the Profile page as well as the Side Nav on mobile or smaller tablets.

If a user's account has "Admin" access, this page will also display a button for accessing the form to add additional fish to the database.

# My Aquarium
Each user has a My Aquarium page. To begin with, this page only displays a gif of an aquarium along with a prompt stating this page keeps an ongoing list of fish they'd like to add to their aquarium by saving them from the search page by selecting the green icon on the far right.

When a user has saved fish from their searches, those fish display in a table below the aquarium gif. The fish name (its common name), maximum size, and type are listed in the table, along with a Delete icon. Selecting the Delete icon removes that fish from the user's aquarium page. Selecting the "Name" will bring the user to that fish's information page.

# Add Fish Form
The Add Fish Form allows for an Admin level user to add fish to the A-Query-Um database. The form has required fields which will alert if left empty. On successful submit, the data is sent to the database and a new fish will be findable by search right after!

Of note, all Aliases should be submitted with comma separation, no spaces, for best performance. All images should be URLs only, and every iamge requires alt text describing that image, for the sake of the carousels on each fish's information page. Additional images can be provided by selecting the "+" button. Images can be removed by selecting the "x" button. Of note, this only relates to images a user is selecting to have be placed into an initial fish document, not to what already exists or does not exist in the database.

# Technologies
This project is created with ReactJS, utilizes functional components, and is designed with Materialize and React-Materialize. User Authentication was done with passport, based on user email address. Data handling is done with MongoDB, using Mongoose. 

## Languages
- CSS3
- HTML5
- JavaScript (JSX with React)

## Libraries
- React
- Materialize

## Dependencies
- axios
- hookrouter
- react
- react-dom
- react-hook-form
- react-materialize
- react-responsive-carousel
- dotenv
- bcryptjs
- cheerio
- express
- express-session
- mongoose
- passport
- @nzambello/react-scrolltop

# Goals
- Add Edit and Delete functionality to Fish Information pages for Admin access users. Also have a component and form for directly locating, editing, or deleting fish in the database.
- Aquarium page highlights any conflicts (Peaceful fish with Semi-Aggressive or Aggressive fish; Saltwater with Freshwater, etc.)