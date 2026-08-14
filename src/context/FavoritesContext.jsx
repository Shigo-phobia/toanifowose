import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const FavoritesContext = createContext(null);

function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem(
        "T.O ANIFOWOSE-favorites"
      );

      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(
      "T.O ANIFOWOSE-favorites",
      JSON.stringify(favorites)
    );
  }, [favorites]);

  const isFavorite = (propertyId) => {
    return favorites.includes(Number(propertyId));
  };

  const toggleFavorite = (propertyId) => {
    const id = Number(propertyId);

    setFavorites((current) => {
      if (current.includes(id)) {
        return current.filter(
          (favoriteId) => favoriteId !== id
        );
      }

      return [...current, id];
    });
  };

  const removeFavorite = (propertyId) => {
    const id = Number(propertyId);

    setFavorites((current) =>
      current.filter(
        (favoriteId) => favoriteId !== id
      )
    );
  };

  const clearFavorites = () => {
    setFavorites([]);
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        isFavorite,
        toggleFavorite,
        removeFavorite,
        clearFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error(
      "useFavorites must be used inside FavoritesProvider"
    );
  }

  return context;
}

export default FavoritesProvider;