import PokemonDetailCard from "@/components/PokemonDetailCard";
import { useGetPokemonQuery } from "@/services/PokemonService/pokemonService";
import { MdCatchingPokemon } from "react-icons/md";
import { useParams } from "react-router-dom";

const PokemonDetailPage = () => {
  const { name_pokemon } = useParams();

  const { data, isLoading } = useGetPokemonQuery(name_pokemon || "");

  console.log(data);

  return (
    <>
      <div className="col justify-center items-center w-full h-full">
        {isLoading ? (
          <MdCatchingPokemon className="w-1/2 h-1/2 text-[#767676] opacity-10 p-8 animate-spin" />
        ) : (
          <PokemonDetailCard data={data} />
        )}
      </div>
    </>
  );
};

export default PokemonDetailPage;
