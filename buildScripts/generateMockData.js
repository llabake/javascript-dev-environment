import jsf from 'json-schema-faker';
import { schema } from './mockDataSchema';
import fs from 'fs';
import chalk from 'chalk';

/* eslint-disable no-console  */

const json = JSON.stringify(jsf(schema));

fs.writeFile('./src/api/db.json', json, function(err) {
  if(err) {
    return console.log(chalk.redBright(err));
  } else {
    console.log(chalk.gray('Mock data generated.'));
  }
});