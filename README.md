# 🎬 Netflix-GPT (Frontend)

Netflix-GPT is a **React-based frontend application** inspired by Netflix.  
It fetches movie and TV show data from external APIs and provides a modern UI with authentication, protected routes, trailers, and dynamic movie lists.

---

## 🚀 Tech Stack

- **React.js**
- **Redux Toolkit**
- **React Router DOM**
- **Custom Hooks**
- **TMDB API**
- **CSS / Tailwind (if enabled)**
- **Vite / Create React App**

---

## 📁 Project Structure

netflex-gpt/
│
├── public/
│
├── src/
│ ├── api/
│ │ └── User.api.jsx
│ │
│ ├── assets/
│ │
│ ├── components/
│ │ ├── Body.jsx
│ │ ├── Browse.jsx
│ │ ├── Header.jsx
│ │ ├── Login.jsx
│ │ ├── MainContainer.jsx
│ │ ├── MovieCard.jsx
│ │ ├── MovieList.jsx
│ │ ├── SecondaryContainer.jsx
│ │ ├── VideoBackground.jsx
│ │ └── VideoTitle.jsx
│ │
│ ├── hooks/
│ │ ├── useMovieTrailer.jsx
│ │ └── useNowPlayingMovies.jsx
│ │
│ ├── utils/
│ │ ├── appStore.jsx
│ │ ├── Constants.jsx
│ │ ├── moviesSlice.jsx
│ │ ├── Protectedroute.jsx
│ │ ├── userSlice.jsx
│ │ └── Validate.jsx
│ │
│ ├── App.css
│ ├── App.jsx
│ └── index.css
│
└── package.json

npm i
npm run dev
