# Project Title
Range

## Demo Link
Access the site [here](https://shopy-e-commerce-kappa.vercel.app/).

## Table of Contents

- [About The App](#about-the-app)
- [Screenshots](#screenshots)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [Approach](#approach)
- [Status](#status)
- [Credits](#credits)

## About The App

Range is a e-commerce website has a user-friendly and visually appealing online shopping platform created using React.js. This website provides a seamless shopping experience for customers looking for a wide range of products. With its intuitive interface and efficient features, users can easily browse, select, and purchase their favorite items.

[Key Features]:

- Browse a diverse selection of products with detailed descriptions.
- Add products to the shopping cart with just a click.
- Remove items from the cart or update quantities as needed.
- Calculate the total cart amount for a convenient shopping experience.
- User-friendly navigation and responsive design for a seamless experience on various devices.
- Added Signup feature takes information such as username,g-mail and password
- Additional Buynow/Checkout feature takes the information from the user like user's name,mobilenumber(accepts only indian mobile number) and areapincode.

## Screenshots

<!-- ![Alt FOlder Structure](https://github.com/gopichandu-tech/Shopy_E_Commerce/blob/main/src/Assets/structure.png) -->
<img src='https://github.com/gopichandu-tech/Shopy_E_Commerce/blob/main/src/Assets/structure.png' width='500' height='500'>
<img src='https://github.com/gopichandu-tech/Shopy_E_Commerce/blob/main/src/Assets/assests_structure.png' width='500' height='500'>

## Technologies Used

The e-commerce website is built using a stack of technologies and languages:

- **React.js:** The project's front-end is developed using React.js, providing a dynamic and interactive user interface.

- **HTML:** HTML is used to structure the content of the web pages, creating a solid foundation for the website's layout.

- **CSS:** Cascading Style Sheets (CSS) are employed for styling, design, and responsive layout, ensuring an attractive and user-friendly appearance.

- **JavaScript:** JavaScript enhances the user experience by adding interactivity and functionality to the website, such as product management and user interactions.

- **API Integration:** The website utilizes external APIs to retrieve product images and details. These APIs provide a diverse selection of products to display to users, enhancing the product catalog.

## API-Driven Images

One of the core features of our e-commerce website is the integration of external APIs to display product images. Here's how it works:

- **External API:** We connect to an external API (e.g., the Fake Store API) to access a vast collection of product information, including images, descriptions, and prices.

- **Dynamic Data:** Through JavaScript and React, we dynamically fetch and display product images from the API, ensuring an up-to-date and varied selection of products for our users.

- **Real-Time Updates:** This API-driven approach allows us to keep our product catalog fresh and diverse, providing users with an engaging and ever-evolving shopping experience.

- **Optimized Performance:** Our use of external APIs for images ensures that the website's performance remains smooth and responsive, even as the product catalog expands.

The integration of these technologies and APIs contributes to the functionality, aesthetics, and user experience of our e-commerce website, making it a dynamic and engaging platform for online shopping.


## Setup

To run the project locally:

1. Download or clone the repository.
2. Run `npm install` to install dependencies.
3. [Add other setup instructions, if needed]

## Approach

- **Project Scope:** I started by defining the scope and goals of the project. I outlined the core features I wanted to include, such as product browsing, cart management, and a user-friendly interface.

- **Technology Stack:** For this project, I chose React.js as the primary framework due to its versatility and dynamic nature. I also selected HTML and CSS for structuring and styling the web pages and JavaScript for adding functionality to this webapplication.

- **Wireframing and Design:** Before diving into code, I created wireframes and design mockups to visualize the website's layout and user interface. This step allowed me to plan the user experience and overall design.

- **Component Architecture:** I structured the project using a component-based architecture. Each major feature, such as product listing, cart management, and checkout, productDisplay etc. 16 main folders are made to build the code and other addtional 7 folders are made for hilding the assets like images. Check the folder structure provided in the screenshots section this project  was designed as a separate React component for modularity and maintainability and more others.

- **Data Management:** To handle product data, I fetched information from the Fake Store API and stored it in state variables using React's useState and useEffect hooks. This allowed me to display product information dynamically.

- **Cart Functionality:** I implemented cart functionality to allow users to add and remove items from their cart. The cart's state was managed using React's state management capabilities, ensuring a smooth shopping experience.

- **Total Amount Calculation:** To calculate the total amount in the cart, I iterated through the cart items, retrieved their corresponding product details, and computed the total price. This value was displayed to users in the cart.

- **Responsive Design:** Ensuring the website is responsive was a top priority. I utilized CSS for responsive design, making the website accessible and visually appealing on various devices.

- **User Registration:** I provided a user registration form for users to sign up. The form included validation for fields like username, email, password, phone number, and pin code, enhancing security and user data quality.

- **Sorting and Filtering:** I enabled users to sort and filter products based on price and category. Users can easily find the products they're interested in.

- **Future Improvements:** As of the current project status, [mention the project's status], I plan to continue improving the website. Some future enhancements include [list upcoming features or updates].

My approach to building this e-commerce website was driven by the goal of creating an engaging and user-friendly platform for online shopping. React.js and the selected technologies allowed me to develop a dynamic and responsive application that caters to the needs of modern e-commerce customers.

## Status

Range forntend part is completed with notable e-commerce added fetures.
## Credits

List of contributors:
- M Gopi Chandu

# Final Words:
Thank you for staying with me up to this point. Suggestions and feedbacks are always welcomed.😃


