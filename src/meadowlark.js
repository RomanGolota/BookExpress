import express from 'express'
import path from 'path';
import { engine } from 'express-handlebars';
import { fileURLToPath } from 'url';
import getFortune from "./lib/fortune.js";

const PORT = process.env.PORT || 3000
const app = express()
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.engine('handlebars', engine({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/about', (req, res) => {
    res.render('about', { fortune: getFortune })
})

app.use((req, res) => {
    res.status(404)
    res.render('404')
})

app.use((err, req, res, next) => {
    console.error(err.message)
    res.status(500)
    res.render('500')
})

app.listen(PORT, () => {
    console.log(`Server started at port: ${PORT}`)
})