const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const connectDB = require('./db/conn');
const userRoutes = require('./routes/userRoutes'); // Import the routes

// Initialize the Express application
const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static files (CSS, JS, images)
app.use(express.static(path.join(__dirname, '../public')));



// Setting up Handlebars as the template engine
app.engine('hbs', exphbs.engine({ 
    extname: 'hbs', 
    defaultLayout: 'main', 
    layoutsDir: path.join(__dirname, "..", 'templates', 'layouts'),
    partialsDir: path.join(__dirname, "..", 'templates', 'partials')  // Register partials directory
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '..', 'templates', 'views'));

// Use the routes
app.use('/register', userRoutes); // Use the /register route for userRoutes

// Other routes
app.get('/', (req, res) => {
    res.render('index', { title: 'Agri Marketplace' });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About Us' });
});

app.get('/products', (req, res) => {
    res.render('product', { title: 'Products' });
});

app.get('/register', (req, res) => {
    res.render('register', { title: 'Register' });
});

app.get('/farmers', (req, res) => {
    res.render('farmers', { title: 'Farmers' });
});

app.get('/buyers', (req, res) => {
    res.render('buyers', { title: 'Buyers' });
});

app.get('/login', (req, res) => {
    res.render('login', { title: 'Login' });
});

// Listening on PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
