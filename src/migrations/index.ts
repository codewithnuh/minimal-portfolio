import * as migration_20250919_165800_init from './20250919_165800_init';
import * as migration_20250920_133340 from './20250920_133340';

export const migrations = [
  {
    up: migration_20250919_165800_init.up,
    down: migration_20250919_165800_init.down,
    name: '20250919_165800_init',
  },
  {
    up: migration_20250920_133340.up,
    down: migration_20250920_133340.down,
    name: '20250920_133340'
  },
];
