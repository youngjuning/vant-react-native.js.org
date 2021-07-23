// 创建子命令
import { program } from 'commander';
import inquirer from 'inquirer';
import chalk from 'chalk';
import execa from 'execa';
import tmp from 'tmp-promise';
import fs from 'fs-extra';
import path from 'path';
import ora from 'ora';
import htc from 'handlebars-template-compiler';

interface IMeta {
  name: string;
  version: string;
  description: string;
  author: string;
  email: string;
  url: string;
  directory: string;
}

const getQuestions = (name: string) => {
  const { stdout: author } = execa.commandSync('git config user.name');
  const { stdout: email } = execa.commandSync('git config user.email');

  return [
    {
      type: 'input',
      message: 'package name',
      name: 'name',
      default: name,
    },
    {
      type: 'input',
      message: 'version',
      name: 'version',
      default: '0.0.0',
    },
    {
      type: 'input',
      message: 'description',
      name: 'description',
    },
    {
      type: 'input',
      message: 'author',
      name: 'author',
      validate: input => {
        if (/[/\\]/im.test(input)) {
          console.log(` ${chalk.red('Name cannot contain special characters')}`);
          return false;
        }
        return true;
      },
      default: author,
    },
    {
      type: 'input',
      message: 'email',
      name: 'email',
      default: email,
    },
    {
      type: 'input',
      message: 'url',
      name: 'url',
      default: 'https://youngjuning.js.org',
    },
  ];
};

program
  .command('create <name> [loc]')
  .description('Create a new vant-react-native package')
  .action(async (name, loc) => {
    const answer: IMeta = await inquirer.prompt(getQuestions(name));
    const spinner = ora(chalk.blackBright(`Creating ${name}`));
    spinner.start();
    const tmpdir = await tmp.dir({ unsafeCleanup: true });
    fs.copySync(path.join(__dirname, '../../template'), tmpdir.path);

    let locPath = '';
    if (loc) {
      locPath = loc;
    } else if (answer.name.startsWith('@')) {
      locPath = answer.name.split('/')[1];
    } else {
      locPath = answer.name;
    }
    answer.directory = locPath;

    await htc<IMeta>(answer, tmpdir.path);

    fs.copySync(tmpdir.path, `${process.cwd()}/packages/${locPath}`);

    await tmpdir.cleanup();
    spinner.succeed(chalk.greenBright(`The ${name} has been generated at packages/${locPath}`));
  });
