import { program } from 'commander';
import fs from 'fs-extra';
import path from 'path';

const init = (): void => {
  program.version('0.0.1');
  fs.readdirSync(path.join(__dirname, 'commands')).forEach((file: string) => {
    if (!file.endsWith('.js')) return;
    require(path.join(__dirname, 'commands', file));
  });
  program.parse(process.argv);
};

export = { init };
