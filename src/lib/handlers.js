import getFortune from './fortune.js'

const routes = {
    home : (req, res) => res.render('home'),
    about : (req, res) =>
        res.render('about', { fortune: getFortune() }),
    notFound : (req, res) => res.render('404'),
    serverError : (err, req, res, next) => res.render('500')
}

export  default routes