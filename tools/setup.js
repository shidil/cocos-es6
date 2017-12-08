'use strict';
let mv = require('mv');
let del = require('delete');
let inquirer = require('inquirer');
let exec = require('child_process').exec;

/**
 * Uses cocos console to create a cocos 2d js project
 * @param  {object} params project properties collected from stdin
 * @return {undefined}
 */
let createCocosProject = function (params) {
  let orientation = params.portrait ? '' : '--portrait';
  let create = `cocos new -d tools -l js -p ${params.package} ${orientation} "${params.project}"`;

  exec(create, function (error, stdout) {
    console.log(stdout);
    if (error) {
      console.log(error);
      return;
    }

    // move generated project to package root.
    console.log('-------- moving generated project to root --------');
    moveFiles(`${__dirname}/${params.project}`, __dirname + '/../');
  });
};

/**
 * Utility for moving files
 * @param  {string} from source directory
 * @param  {string} to destination directory
 * @return {undefined}
 */
let moveFiles = function (from, to) {
  mv(from, to, {clobber: false}, function (error) {
    if (error) {
      console.log(error);
      return;
    }

    del.sync([`${__dirname}/../src/app.js`]);
    del.sync([`${__dirname}/../src/resource.js`]);
  });
};

let processInput = function (input) {
  // create cocos2d-x project with js as language
  console.log('-------- creating cocos 2d project --------');
  createCocosProject(input);
};

let questions = [
  {
    type: 'input',
    name: 'package',
    message: 'What\'s your package name',
    default: function () {
      return 'com.example.hello';
    },
    filter: function (val) {
      return val.toLowerCase();
    }
  },
  {
    type: 'input',
    name: 'project',
    message: 'What\'s your project name',
    default: function () {
      return 'Hello World';
    }
  },
  {
    type: 'list',
    name: 'portrait',
    message: 'Set the project to be on portrait mode?',
    choices: ['yes', 'no'],
    default: function () {
      return 'no';
    },
    filter: function (val) {
      return (val.toLowerCase() === 'yes') ? true : false;
    }
  }
];

console.log('-------- starting setup --------');
inquirer.prompt(questions).then(processInput);

