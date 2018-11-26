import server from './server';
import chalk from 'chalk';
import clear from 'clear';


const port = process.env.PORT || 4100;

server.start({ port })
    .then(() => {
        clear();
        console.log(chalk.green(`Server listening at port ${ port }`))
    })
    .catch(err => console.log(chalk.red(err)));