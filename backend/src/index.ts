import express from 'express';
import routes from './routes';

const app = express();

app.use(routes);

function getUsername() {
    return 2;
}

// inferência de tipos:
const userName = getUsername();

//abrindo um servidor
app.listen(3333, () => {
    console.log("API rodando na porta 3333");
});