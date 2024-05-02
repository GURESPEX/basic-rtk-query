import NotFoundPage from "@/pages/NotFoundPage";
import PokemonDetailPage from "@/pages/PokemonDetailPage";
import PokemonPage from "@/pages/PokemonPage";
import { Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <Routes>
      <Route path="/pokemon/pokemon-list" element={<PokemonPage />} />
      <Route
        path="/pokemon/detail/:name_pokemon"
        element={<PokemonDetailPage />}
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Router;
