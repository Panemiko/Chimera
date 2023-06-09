export interface Character {
  id: string;
  userId: string;
  rpgId: string;
  name: string;
  age: number;
  picture: string;
  level: number;
  life: {
    max: number;
    current: number;
  };
  sanity: {
    max: number;
    current: number;
  };
  maxWeight: number;
  notes: string;
}
