import { useGetPokemonQuery } from "@/services/PokemonService/pokemonService";
import { Link } from "react-router-dom";
import { MdCatchingPokemon } from "react-icons/md";

const PokemonListCard = ({ name }: { name: string }) => {
  const { data, isLoading } = useGetPokemonQuery(name);

  return (
    <>
      {isLoading ? (
        <div className="rounded-lg overflow-hidden drop-shadow-md">
          <div className="w-40 aspect-square bg-white col justify-center items-center">
            <MdCatchingPokemon className="w-full h-full text-[#767676] opacity-10 p-8 animate-spin" />
          </div>
          <div className="row justify-between p-4 gap-4 bg-[#E3E3E3] text-sm">
            <p className="bg-[#767676] h-5 w-20 rounded"></p>
            <p className="bg-white h-5 w-5 rounded"></p>
          </div>
        </div>
      ) : (
        <Link
          to={`/pokemon/detail/${name}`}
          className="w-40 rounded-lg overflow-hidden drop-shadow-md"
        >
          <div className="aspect-square bg-white">
            <img
              className="w-full h-full object-contain"
              src={data?.img.main}
              alt={data?.name}
            />
          </div>
          <div className="row justify-between p-4 gap-4 bg-[#E3E3E3] text-sm">
            <p className="text-[#767676]">{data?.name}</p>
            <p className="text-white">#{data?.id}</p>
          </div>
        </Link>
      )}
    </>
  );
};

export default PokemonListCard;
