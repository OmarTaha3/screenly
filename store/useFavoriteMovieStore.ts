import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { GeneralMovie } from '@/types/GeneralMovie';
import { MovieDetails } from '@/types/MovieDetails';

interface FavoriteMoviesStore {
  favoriteMovies: (GeneralMovie | MovieDetails)[];
  _hasHydrated: boolean; // Tracks hydration status
  setHasHydrated: (state: boolean) => void; // Setter for hydration status
  addFavorite: (movie: GeneralMovie | MovieDetails) => void;
  removeFavorite: (movieId: number) => void;
  isFavorite: (movieId: number) => boolean;
  toggleFavorite: (movie: GeneralMovie | MovieDetails) => void;
}

export const useFavoriteMoviesStore = create<FavoriteMoviesStore>()(
  persist(
    (set, get) => ({
      _hasHydrated: false, // Initial hydration state

      setHasHydrated: (state: boolean) => {
        set({
          _hasHydrated: state, // Update hydration state
        });
      },

      favoriteMovies: [],

      addFavorite: (movie: GeneralMovie | MovieDetails) =>
        set((state) => ({
          favoriteMovies: [...state.favoriteMovies, movie], // Add movie to favorites
        })),

      removeFavorite: (movieId: number) =>
        set((state) => ({
          favoriteMovies: state.favoriteMovies.filter(
            (movie) => movie.id !== movieId // Remove movie by ID
          ),
        })),

      isFavorite: (movieId: number) => {
        const { favoriteMovies } = get();
        return favoriteMovies.some((movie) => movie.id === movieId); // Check if movie is in favorites
      },

      toggleFavorite: (movie: GeneralMovie | MovieDetails) => {
        const { isFavorite, removeFavorite, addFavorite } = get();
        if (isFavorite(movie.id)) {
          removeFavorite(movie.id); // Remove if already a favorite
        } else {
          addFavorite(movie); // Add if not a favorite
        }
      },
    }),
    {
      name: 'screenly-favoriteMovies', // Local storage key
      partialize: (state) => ({
        favoriteMovies: state.favoriteMovies, // Persist only favoriteMovies
      }),
      onRehydrateStorage: (state) => {
        return () => {
          state?.setHasHydrated?.(true); // Mark store as hydrated after rehydration
        };
      },
    }
  )
);
