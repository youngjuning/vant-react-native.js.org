// 创建子命令
import { program } from 'commander';
import inquirer from 'inquirer';
// import compiler from 'handlebars-template-compiler';

program
  .command('create <name> [loc]') // TODO:  模仿 lerna 支持 loc
  .description('Create a new vant-react-native package')
  .action(async name => {
    // 使用 Inquirer.js 方法参考 lerna create 询问用户配置
    const answer = await inquirer.prompt([
      {
        type: 'input',
        message: 'package name',
        name: 'packageName',
        default: name,
      },
    ]);
    console.log(answer);

    // 1. 拷贝文件到临时目录
    // 2. 使用 compiler 方法编译项目
    // 3. 拷贝临时目录内容到项目到 packages 目录下
  });
