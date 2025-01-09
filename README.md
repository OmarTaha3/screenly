# Next.js Movie Application

This is a Next.js application that allows users to search for movies, view detailed information about them, and manage a list of favorites. It utilizes React, Zustand for state management, and bun as a package manager.

## Installation and Running

**Prerequisites:**

- Node.js (version X.X.X or higher)
- bun installed globally (`bun install -g`)

**Steps:**

1. Clone the repository:
   ```bash
   git clone https://github.com/OmarTaha3/screenly.git
   ```
2. Navigate into the project directory:

```
cd screenly
```

3. Install dependencies

```
bun install
```

4. Run the development server

```
bun run dev
```

5. View the App:
   Open your browser and go to http://localhost:3000 to view the app.

6. Note: you should create your own .env file like .env.example

---

## Features

### 1. Movie Search

- Users can search for movies by title.
- The app will display a list of movies that match the search query, showing their poster, title, release year, and rating.

### 2. Movie Details Page

- When a user clicks on a movie, it navigates to a detailed page displaying:
  - Movie synopsis
  - Genre
  - Director
  - Cast
  - Runtime
  - Ratings

### 3. Favorite Movies

- Users can add or remove movies from their favorites list.
- The app provides a favorites page where users can view and manage their favorite movies.
- The favorite movies list is persisted using the browser's local storage.

### 4. Responsive Design

- The app is fully responsive, ensuring a good user experience across mobile, tablet, and desktop devices.
- The layout adjusts dynamically to different screen sizes.

---

## Technologies Used

- **Next.js**: Framework for building the app.
- **React**: Frontend library for building UI components.
- **Zustand**: State management library used to manage application state.
- **Tailwind css**: For styling the app and ensuring modular, maintainable CSS.
- **TMDB API**: Used for fetching movie data (you can replace it with your API of choice).

---

## Error Handling and Loading States

- The app displays loading skeleton screens while data is being fetched.
- Errors such as failed API requests or no search results found are gracefully handled with appropriate user feedback.

---

## Performance Optimization

- The app optimizes images using the Next.js `Image` component for better performance using `ImageWithFallBack` Component.
- Code-splitting and lazy loading are implemented to reduce initial loading time and enhance performance.

---

## Accessibility

- The app follows web accessibility guidelines to ensure that it is usable by all users.
- Semantic HTML elements and ARIA labels are used to enhance accessibility.

---


## Acknowledgments

- Thanks to [The Movie Database API (TMDb)](https://www.themoviedb.org/) for providing the movie data.
- This project was created as a learning exercise and is not associated with any official movie database.

