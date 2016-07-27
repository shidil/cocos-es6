/**
 * Input prompt example
 */

'use strict';
var inquirer = require('inquirer');

var questions = [
  {
    type: 'input',
    name: 'package',
    message: 'What\'s your package name',
    default: function () {
      return 'com.example.hello';
    }
  },
  {
    type: 'input',
    name: 'project',
    message: 'What\'s your project name',
    default: function () {
      return 'Hello World';
    }
  }
];

var createCocosProject = function(params) {
  var exec = require('child_process').exec;
  var create = `cocos new -l js -p ${params.package} --no-native '${params.project}'`;
  var moveFiles = `cp -Tr '${__dirname}/${params.project}' ${__dirname} && rm -rf ${params.project}`;

  exec(create, function(error, stdout, stderr) {
    exec(moveFiles, function(error, stdout, stderr) {
      console.log(moveFiles);
    });
  });
};

inquirer.prompt(questions).then(createCocosProject);

