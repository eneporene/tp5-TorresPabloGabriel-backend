const swaggerAutogen = require('swagger-autogen')();
const doc = {
    info: {
        title: 'API de Gestion',
        description: 'Documentación de la API para la gestión de socios, empleados, publicaciones y transacciones.'
    },
    host: 'localhost:3000', // Reemplaza con la dirección de tu servidor
    basePath: "/",
    schemes: ['http', 'https'],
    tags: [
        {
            name: 'Socio',
            description: 'Operaciones relacionadas con los socios.'
        },
        {
            name: 'Transaccion',
            description: 'Operaciones relacionadas con las transacciones.'
        },
        {
            name: 'Empleado',
            description: 'Operaciones relacionadas con los empleados.'
        },
        {
            name: 'Publicacion',
            description: 'Operaciones relacionadas con las publicaciones.'
        }
    ],
    definitions: {
        Socio: {
            nombre: "Pablo",
            apellido: "Torres",
            foto: "https://img.magnific.com/vector-premium/imagen-perfil-avatar-hombre-aislada-fondo-imagen-profil-avatar-hombre_1293239-4841.jpg?semt=ais_hybrid&w=740&q=80",
            dni: "12345678",
            numeroSocio: 1001,
            activo: true
        },
        Transaccion: {
            idiomaOrigen: "es",
            textoOrigen: "Hola Mundo",
            idiomaDestino: "en",
            textoDestino: "Hello world",
            emailCliente: "cliente@gmail.com"
        },
        Empleado: {
            apellido: "Cristina",
            nombre: "Kirchnner",
            dni: "87654321",
            email: "Cristina@gmail.com"
        },
        Publicacion: {
            titulo: "Investigacion de patitos",
            contenido: "patitos",
            imagenAsociada: "base64",
            fechaPublicacion: '2026-06-15',
            vigente: true,
            propietario: {
                id: 1
            }
        }
    }
};

const outputFile = './swagger_output.json';
const endpointsFiles = ['./index.js']; // verifica la ruta
swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    console.log(`Documentación generada en ${outputFile}`);
    //require('./index.js'); // verifica la ruta donde inicia tu app
});