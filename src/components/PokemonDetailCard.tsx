import { Pokemon } from "@/services/PokemonService/Response/pokemonResponse";
import { useNavigate } from "react-router-dom";
import backIcon from "@/assets/back.svg";

const PokemonDetailCard = ({ data }: { data: Pokemon | undefined }) => {
  const navigate = useNavigate();
  console.log(history);

  return (
    <div className="col w-[400px] rounded-3xl overflow-hidden drop-shadow-md">
      <div className="relative col bg-[#70C15C]">
        <div className="col p-6 z-10">
          <div className="col gap-2">
            <div
              onClick={() => navigate(-1)}
              className="opacity-50 hover:opacity-60 active:opacity-70 transition"
            >
              <img className="w-12 h-12" src={backIcon} alt="back" />
            </div>
            <div className="col gap-2">
              <h1 className="text-4xl font-semibold text-white">
                {data?.name}
              </h1>
              <div className="row gap-2">
                {data?.types.map((type) => (
                  <p
                    key={type}
                    className="px-4 rounded-full bg-white bg-opacity-25 text-xs text-white"
                  >
                    {type}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className="relative top-8 col items-center">
            <img
              className="w-[196px]"
              src={data?.img.main}
              alt={`main_${data?.name}`}
            />
          </div>
        </div>
        <div className="absolute w-full h-full top-0 left-0 col items-end p-6 text-[8.75rem] -mt-[3rem] text-white opacity-25">
          #{data?.id}
        </div>
        <div className="absolute w-full h-8 top-full left-0 -translate-y-full bg-white rounded-t-3xl outline outline-white -outline-offset-2" />
      </div>
      <div className="col p-4 pt-0 bg-white">
        <div className="row justify-center">
          <img
            className="scale-150 -mx-2"
            src={data?.img.default.front}
            alt={`main_front_${data?.name}`}
          />
          <img
            className="scale-150 -mx-2"
            src={data?.img.default.back}
            alt={`main_back_${data?.name}`}
          />
          <img
            className="scale-150 -mx-2"
            src={data?.img.shiny.front}
            alt={`main_front_${data?.name}`}
          />
          <img
            className="scale-150 -mx-2"
            src={data?.img.shiny.back}
            alt={`main_back_${data?.name}`}
          />
        </div>
        <div className="col gap-2">
          <div className="row">
            <div className="py-1 px-6 rounded-full bg-[#70C15C] text-white">
              Exp : {data?.exp}
            </div>
          </div>
          <div className="grid grid-cols-3 py-1 px-6 bg-[#F6F6F6] rounded-xl text-xs text-[#767676]">
            <div>{data?.stats.hp} : Hp</div>
            <div>{data?.stats.attack} : Attack</div>
            <div>{data?.stats.speed} : Speed</div>
            <div>{data?.stats.defence} : Defence</div>
            <div>{data?.stats.specialAttack} : Special-attack</div>
            <div>{data?.stats.specialDefense} : Special-defense</div>
          </div>
          <div className="row">
            <div className="py-1 px-6 rounded-full bg-[#70C15C] text-white">
              Abilities
            </div>
          </div>
          <div className="col py-2 px-3 bg-[#F6F6F6] rounded-xl text-xs text-[#767676]">
            {data?.abilities.map((ability, index) => (
              <div key={ability}>
                {index + 1}. {ability}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetailCard;
