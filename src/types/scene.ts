interface Scene {
  id: number;
  version: number;
  name: string;
  entities: Entity[];
}

interface Entity {
  id: number;
  function: number;
  value: number;
}
export default Scene;
export type { Entity };
