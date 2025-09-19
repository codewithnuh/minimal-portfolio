import * as migration_20250919_165800_init from './20250919_165800_init';

export const migrations = [
  {
    up: migration_20250919_165800_init.up,
    down: migration_20250919_165800_init.down,
    name: '20250919_165800_init'
  },
];
