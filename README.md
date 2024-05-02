file:///home/kamaleshm/Downloads/screencapture-localhost-3004-book-2024-05-02-18_02_06.png
![screencapture-localhost-3004-about-2024-05-02-18_02_49](https://github.com/Kamalesh199930/bookApplication/assets/154793294/d5b59834-838a-41f9-bc7a-4b3e0f6449e7)
![screencapture-localhost-3004-book-2024-05-02-18_02_06](https://github.com/Kamalesh199930/bookApplication/assets/154793294/fe289e2a-4022-4748-be15-a91baac04ce0)

![screencapture-localhost-3004-book-OL30420448W-2024-05-02-18_03_22](https://github.com/Kamalesh199930/bookApplication/assets/154793294/7c419c4b-e52a-455e-9ef5-8db5151f888a)


* npm start
* npm i react-router
* npm i react-icons
* https://fonts.google.com/specimen/Poppins
* Responsive Web Design - Media Queries


1. Home:

Header as been used in Home.jsx
Outlet is used for react-router-dom 

2. About:

About page is ised for AIM Book Description

3. Header:

Header is used to get for Heading and Description for AIM and We added a Search Form.

4. Navbar:

Navbar Folder and File used for to get Home,About and Heading and Images is used 

5. SearchForm:

Context is used in Searchform 
*useNavigate is used in react-router-dom
*useGlobalContext is used from context.jsx


6. Loader:

LoaderImg is used by using in pages and images and getting from there

7. BookList : Book.js and BookList.jsx is used:


Book.jsx: cover_img,book.title,book.author,book.edition_count,first_publish_year
are used in Book.jsx and book.title we have used Link to go for to open a page


BookList.jsx

useGlobalContext is used from context,

8. BookDetails

* FaArrowLeft is used for icons
* useParams is used for react-router-dom
* useNavigate is used for react-router-dom
* URL = "https://openlibrary.org/works/"

* async and await function as been used
and in BookDetails we used to get cover image,title,description,subject_places,subject_times,subjects,ratings and comments




9. context.jsx

* URL of openlibrary 
* AppContext we have React.createContext();
* Provider: Is an Higher Order Component to use by context object
* we can create a context object using createContext method

10. index.js
Home,About,BookList,BookDetails is used in route.

**** CSS STYLES USED:******

* poppins for font :https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap

* resets
* backgrounds
* text
* font weights
* font sizes
* letter spacing
* section titles
this all properties to used in index.css



* media query as been used with different px of using min-width and max-width
