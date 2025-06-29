# Namaste React

# Parcel
- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++ Caching Faster Builds Image Optimization
- Minification
- Bundling Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPS
- Tree Shaking - remove unused code
- Different dev and prod bundles

# Two types of Export/Import

- Named Export/Import

export const Component
import {Component} from "path
 
# React Hooks
(Normal JS utility functions)
- useState() - Superpowerful Hook in Reactjs
- useEffect()
- Hooks are utility functions
- Never put a state variable inside a condition (specially the useState() hook)
- Never put a state variable inside a function nor in a loop (specially the useState() hook)
- Never update state variable directly

# 2 types Routing in web apps
- Client Side Routing
- Server Side Routing

# Link Component for linking- it will not refresh my page

- import { Link } from "react-router-dom";


# React Lifecycle

- Parent Constructor
- Parent render
    - First Constructor
    - First render
- Child render
    - First Constructor
    - First render
    - Second Constructor
    - Second render
    
    <!-- <DOM UPDATED - IN A SINGLE BATCH> -->
    - First componentDidMount
    - Second componentDidMount

- Parent componentDidMount

<!-- Render phase is fast than commit phase -->
- Chunking
- Code Splitting
- Lazy Loading
- React Dev Tools
- Dynamic Bundling
- On Demand Loading


# Controlled & Uncontrolled Component

# REDUX Toolkit
- REDUX works in data layer
- Install @reduxjs/toolkit and react-redux
- Build our store
- Connect our store to our App
- Slice(cartSlice)
- dispatch(action)
- Selector



# Remember
- onClick={() => handleAddItem(item)}
- onClick={handleAddItem(item)}
- onClick={handleAddItem}


# Types of testing (developer)
- Unit testing: Test our React component in isolation
- Integration testing
- End-to-end testing - e2e testing (Tools like Selenium,Cyprus etc)

# Setting up Testing in our App
- Install React Testing Library
- Installed Jest
- Installed Babel Dependencies
- Configure Babel
- Configue Parcel Config file to disable default Babel transpilation
- Jest Configuration(npx create-jest)
- Install "@babel/preset-react" to make JSX work for test cases and also configure our "babel.config.js" file
- Install "@testing-library/jest-dom"



# Netflix GPT

- Create React App
- Configured TailwindCSS
- Header
- Routing of App
- Login Form
- Sign up Form
- Form Validation
- useRef Hook
- Firebase Setup
- Deploying our App to prod
- Create Signup User Account in Firebase
- Implement Sign In User API
- Created Redux Store with userSlice
- Implemented Sign Out
- Update Profile API call
- BugFix: Sign up user displayName and profile picture update
- BugFix: If the user is not logged in Redirect/browse to login page and vice-versa
- Unsubscribe to the onAuthStateChanged Callback
- Add hardcoded values to the constants file
- Register TMDB API & Create a new App & get access token
- Get Data from TMDB now playing movies list API
- Created Custom Hook for Now Playing Movies
- Update Store with movies Data
- Planning for MainContainer & Secondary container
- Fetch Data for Trailer Video Data
- Embedded the YT video and make it autoplay and mute
- Tailwind Classes to make Main Container look awesome
<!-- - Fetch from TMDB Movies -->

# Features
- Login/Signup Page
    - Sign In/Sign up Form
    - Re-direct to Browse Page

- Browse (after authentication)
    - Header
    - Main Movie
        - Trailer in Background
        - Title & Description
        - Movie Suggestions
            - Movie Lists * N

- Netflix GPT
    - Search Bar
    - Movie Suggestions



# Points to remember
- Formik Library in React for making big forms