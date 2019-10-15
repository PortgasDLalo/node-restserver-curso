// =======================
// Puerto
// =======================
process.env.PORT = process.env.PORT || 3000;




// =======================
// Entorno
// =======================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


// =======================
// Vencimiento del token
// =======================
//60 segundos
// 60 minutos
// 24 horas
// 30 dias

process.env.CADUCIDAD_TOKEN = '48h';



// =======================
// Seed de autentificación
// =======================

process.env.SEED = process.env.SEED || 'secret';

// =======================
// Base de datos
// =======================

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;

// =======================
// Google client id
// =======================
process.env.CLIENT_ID = process.env.CLIENT_ID || '376132739698-6sq9or6sqooqg70h1ndth16g6gle73c7.apps.googleusercontent.com';