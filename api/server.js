const app = require('./config/express')();
const port = app.get('port');
const api = require('./api');

app.listen(port, () => {
    console.log(`Server up: ${port}`)
});

app.get('/teste/:descricao', async (req, res) => {
    try {
        const { data } = await api.get(`calorias/?descricao=${req.params.descricao}`);

        return res.send(data);
    } catch (error) {
        res.send({error: error.message});
    }
})