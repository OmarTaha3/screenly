# Screenly - Movie Application

This is a Next.js application that allows users to search for movies, view detailed information about them, and manage a list of favorites. It utilizes React, Zustand for state management, and bun as a package manager.

## Installation and Running

**Prerequisites:**

- Node.js (version 16.0.0 or higher)
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

6. Note: you need to create your own .env file like .env.example

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

## Design Decisions, Challenges, and Solutions

### 1. **Animations Used**

To improve the user experience, animations were implemented using **Transition and Animation CSS Properties**, for every card ans Sekeltone.
These animations were carefully implemented to keep the user interface engaging while ensuring that performance was not compromised.

### 2. **Server Actions in Next.js**

With Next.js, I took advantage of **Server Actions** to handle interactions between the frontend and backend more efficiently. Server Actions allow us to define API calls directly within React components, which simplifies the architecture and reduces boilerplate code.

### 3. **API Routes in Next.js**

I used **API router** in Next.js to fetch movie data from the TMDB API. API routes serve as an intermediary between the frontend and the external data source. These routes are defined within the `app/api` folder.

- For example, the `GET /api/allGeners` route interacts with the TMDB API to fetch all geners.
- These API routes handle all necessary data fetching and transformations before sending the data to the frontend.

By leveraging API routes in Next.js, I were able to maintain the separation of concerns while simplifying backend operations.

### 4. **Pagination**

One challenge I faced during the development was implementing pagination for the movie search results. Since the TMDB API provides paginated data, I needed a solution to display results in manageable chunks while minimizing load time and providing a smooth user experience.

- **Client-side pagination**: I utilized React state to store and manage the current page and the list of movies to display. As the user navigates through the results, the app fetches the next set of data from the API.
- **Server-side pagination**: In some cases, I opted to handle pagination on the server-side, where the Next.js API routes manage pagination parameters (e.g., `page`, `limit`) to request data from TMDB. This ensures that only the relevant data is sent to the client, reducing bandwidth and improving performance.

The combination of both client-side and server-side pagination allowed the app to scale efficiently, ensuring that the UI remained responsive while handling large sets of data.

### Challenges Faced & Solutions

1. **Challenge**: Managing state across multiple components (e.g., handling the favorites list and pagination data).

   - **Solution**: I used **Zustand** as a lightweight state management library to manage the favorites list and other app-wide states. Zustand helped avoid prop-drilling and made state updates predictable across different parts of the app.

2. **Challenge**: Optimizing performance with large amounts of data (e.g., multiple movie listings and images).

   - **Solution**: I utilized **Next.js Image Optimization** with **ImageWithFallBack** Component to handle large images efficiently and used **loader** and **blurDataUrl** for certain components to avoid rendering everything at once.

3. **Challenge**: Implementing responsive design across different screen sizes.

   - **Solution**: I leveraged **CSS Grid** and **Flexbox** for creating a dynamic layout, making the app fully responsive. Additionally, I used media queries and the `@media` rule to adjust the layout depending on the device’s screen size.

4. **Challenge**: ImHydration issues occur when there is a mismatch between the server-rendered HTML and the client-rendered HTML in a Next. js application , While using **Zustand** for state management and **Zustand Persist** to store and persist the state across sessions, we encountered hydration issues where the server-side rendered (SSR) state did not match the initial client-side state, causing a mismatch between the HTML markup and the initial state. This led to errors like a flash of incorrect content before the hydration was complete

   - **Solution**: To address these hydration issues, we used **onRehydrateStorage** from Zustand. This allows Zustand to properly handle the hydration process by ensuring that the persisted state is only rehydrated after the client-side rendering is complete.

---

## Future Improvements

- **Improve Error Handling**: Enhance error messages and feedback mechanisms for failed requests.
- **Add User Authentication**: Allow users to save their favorite movies across devices by adding a user authentication system.
- **Search History Feature**: Implement a history feature that remembers the user's last searches to improve usability.
- **Advanced Pagination**: Integrate infinite scrolling as an alternative to traditional pagination for an even smoother user experience.

## Acknowledgments

- Thanks to [The Movie Database API (TMDb)](https://www.themoviedb.org/) for providing the movie data.
- This project was created as a learning exercise and is not associated with any official movie database.
