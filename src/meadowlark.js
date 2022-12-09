import express from 'express'
import path from 'path';
import { engine } from 'express-handlebars';
import { fileURLToPath } from 'url';
import routes from "./lib/handlers.js";

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

app.get('/', routes.home)
app.get('/about', routes.about)

app.use(routes.notFound)
app.use(routes.serverError)

app.listen(PORT, () => {
    console.log(`Server started at port: ${PORT}`)
})