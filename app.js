//Declaraciones
const servidorHTTP = require('express');
const app = servidorHTTP();
const port = process.env.PORT || 3000;
//Configuraciones - Respuestas para el cliente (Chrome, fireFox, Insomnia, Edge)
/*app.post== Creamos un recurso del servidor
app.delete== Eliminamos un recurso del servidor
app.put == Actualizamos un recurso del servidor*/
//app.get == Solicitamos un recurso (registro, imagen, articulo, etc) del servidor (req=request=solicitud,res=response=respuesta)
app.get("/",(req,res)=>{
    res.send('Pagina principal. Servidor en Node.js con express');
})//htdocs = public_html
app.get('*',(req,res)=>{
    res.send('404 │ Pagina no encontrada');
})
//Procesos - Respuestas para el desarrollador
app.listen(port,()=>{
    console.log('Servidor corriendo en el puerto: ',port);
})