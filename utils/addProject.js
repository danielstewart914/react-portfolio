
const inquirer = require( 'inquirer' );
const projects = require( '../src/data/projects.json' );
const fs = require( 'fs' );

const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter Project title:'
  },
  {
    type: 'input',
    name: 'appLink',
    message: 'Enter link to the deployed app:',
  },
  {
    type: 'input',
    name: 'repoLink',
    message: 'Enter link to the github repository:'
  },
  {
    type: 'input',
    name: 'img',
    message: 'Enter name of image file:'
  }
];

const techQuestion = {
  type: 'input',
  name: 'tech',
  message: 'Enter tech name:'
}

const getTech = async () => {
  let cont = true;

  const tech = [];
  do {
    const answer = await inquirer.prompt( techQuestion );
    tech.push( answer.tech );
    const { selection }  = await inquirer.prompt( 
      {
        type: 'list',
        name: 'selection',
        message: 'Add more?',
        choices: [ 'yes', 'no' ]
      }
    );
    if ( selection === 'no' ) cont = false;
  } while ( cont )

  return tech;
}

const main = async () => {
  const { title, appLink, repoLink, img } = await inquirer.prompt( questions );
  const tech = await getTech();
  const newProject = {
    title,
    tech,
    img: '/images/' + img,
    appLink,
    repoLink,
    key: ( projects[ projects.length -1 ].key + 1 )
  }

  projects.push( newProject );

  fs.writeFile( './src/data/projects.json', JSON.stringify( projects, null, 4 ), error => error ? console.error( error ) : console.log( 'Projects Updated Successfully' )  );
}

main();