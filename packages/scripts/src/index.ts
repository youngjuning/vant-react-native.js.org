import { program } from 'commander';

const init = (): void => {
  program.version('0.0.1');
  program.command('create <name> [loc]');
  program.parse(process.argv);
};

export = { init };
