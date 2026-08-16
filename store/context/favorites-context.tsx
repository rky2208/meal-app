import { createContext, useState, ReactNode } from "react";

// 1. Define the interface for your context state
interface FavoritesContextType {
  ids: string[]; // Change to number[] if your IDs are numbers
  addFavHandler: (id: string) => void;
  removeFavHandler: (id: string) => void;
}

// 2. Initialize context with the interface type
export const FavoritesContext = createContext<FavoritesContextType>({
  ids: [],
  addFavHandler: () => {},
  removeFavHandler: () => {},
});

// 3. Type the children prop for the provider
export const FavoritesContextProvider = ({ children }: { children: ReactNode }) => {
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);

  const addFavHandler = (id: string) => {
    setFavoriteIds((currentFavIds) => [...currentFavIds, id]);
  };

  const removeFavHandler = (id: string) => {
    setFavoriteIds((currentFavIds) =>
      currentFavIds.filter((favId) => favId !== id)
    );
  };

  const contextValue: FavoritesContextType = {
    ids: favoriteIds,
    addFavHandler,
    removeFavHandler,
  };

  return (
    <FavoritesContext.Provider value={contextValue}>
      {children}
    </FavoritesContext.Provider>
  );
};
