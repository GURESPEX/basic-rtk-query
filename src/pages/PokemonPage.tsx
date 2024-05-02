import PokemonListCard from "@/components/PokemonListCard";
import { useGetPokemonsQuery } from "@/services/PokemonService/pokemonService";
import { Link, useSearchParams } from "react-router-dom";
import pokeball from "@/assets/pokeball.svg";

const PokemonPage = () => {
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page");

  const { data, isLoading } = useGetPokemonsQuery({
    limit: 10,
    offset: page ? (parseInt(page) - 1) * 10 : 1,
  });

  return (
    <>
      <div className="col gap-16 h-full justify-between">
        <div className="col">
          <div className="col items-center">
            <img
              className="w-[320px]"
              src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
              alt="Pokemon Logo"
            />
            <p className="text-[#3A5DA8] font-bold text-4xl">Dex</p>
          </div>
        </div>
        <div className="col justify-center items-center">
          {isLoading ? (
            <div className="row items-center gap-2">
              <img
                className="animate-spin"
                src={pokeball}
                alt="Pokeball Loading..."
              />
              <p className="text-[#767676]">Loading...</p>
            </div>
          ) : (
            <div className="grid grid-cols-5 gap-4">
              {data?.results.map((result) => (
                <PokemonListCard key={result.name} name={result.name} />
              ))}
            </div>
          )}
        </div>
        <div className="col">
          <div className="row justify-center gap-4">
            {Array(5)
              .fill("")
              .map((_, index) => (
                <Link
                  key={index}
                  className={`row justify-center items-center text-xl rounded-full w-12 aspect-square ${
                    (page ? parseInt(page) : 1) === index + 1
                      ? "bg-[#3A5DA8] text-white hover:bg-[#34559c] active:bg-[#345397]"
                      : "bg-transparent text-black hover:bg-black hover:bg-opacity-5 active:bg-opacity-10"
                  } transition`}
                  to={`/pokemon/pokemon-list?page=${index + 1}`}
                >
                  {index + 1}
                </Link>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PokemonPage;
