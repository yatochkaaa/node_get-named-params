'use strict';

import minimist from 'minimist';

const greetings = () => {
  const params = minimist(process.argv.slice(2));

  return `${params.name} ${params.lastname} is ${params.age}`;
}

console.log(greetings());
