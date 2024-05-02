export type PokemonResponse = {
  id: number;
  name: string;
  types: {
    type: { name: string };
  }[];
  base_experience: number;
  stats: { base_stat: number }[];
  abilities: { ability: { name: string } }[];
};

export type Pokemon = {
  id: number;
  name: string;
  types: string[];
  img: {
    main: string;
    default: {
      front: string;
      back: string;
    };
    shiny: {
      front: string;
      back: string;
    };
  };
  exp: number;
  stats: {
    hp: number;
    attack: number;
    defence: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
  };
  abilities: string[];
};
