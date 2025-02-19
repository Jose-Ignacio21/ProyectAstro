require('dotenv').config();  // Cargar variables de entorno desde .env
const express = require('express');
const fs = require('fs');
const path = require('path');
const marked = require('marked');
const cors = require('cors');
const matter = require('gray-matter');

const app = express();
const port = process.env.PORT || 3000; // Usar el puerto definido en .env o 3000 por defecto

app.use(cors()); // Habilita CORS para permitir peticiones desde otros dominios

// Ruta base donde están los archivos .md (ajusta según tu estructura)
const docsPath = path.join(__dirname, '../src/content/docs');

// Ruta raíz ("/") para mostrar un mensaje o información básica
app.get('/', (req, res) => {
    res.send('Bienvenido a la API de Documentación');
});

// Endpoint para obtener la lista de secciones (carpetas dentro de docs/)
app.get('/api/secciones', (req, res) => {
    fs.readdir(docsPath, { withFileTypes: true }, (err, folders) => {
        if (err) {
            return res.status(500).json({ error: 'Error al leer las secciones' });
        }
        // Filtramos solo las carpetas y devolvemos los nombres
        const secciones = folders.filter(folder => folder.isDirectory()).map(folder => folder.name);
        res.json({ secciones });
    });
});

// Endpoint para obtener lista de documentos de cada seccion
app.get('/api/seccion/:seccion', (req, res) => {
    const { seccion } = req.params;
    const seccionPath = path.join(docsPath, seccion);

    fs.readdir(seccionPath, (err, files) => {
        if (err) {
            return res.status(404).json({ error: 'Sección no encontrada' });
        }

        // Filtra solo archivos .md y elimina la extensión
        const documentos = files
            .filter(file => path.extname(file) === '.md')
            .map(file => path.basename(file, '.md'));

        res.json({ seccion, documentos });
    });
});

// Endpoint para obtener un documento específico y convertirlo a HTML
app.get('/api/documento/:seccion/:archivo', (req, res) => {
    const { seccion, archivo } = req.params;
    const filePath = path.join(docsPath, seccion, archivo + '.md');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(404).json({ error: 'Documento no encontrado' });
        }

        // Extraer metadatos y contenido
        const { content, data: metadata } = matter(data);
        res.json({
            metadata,        // Metadatos extraídos del frontmatter
            html: marked.parse(content), // Contenido convertido a HTML
            markdown: content // Contenido en formato Markdown puro
        });
    });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`API corriendo en http://localhost:${port}`);
});