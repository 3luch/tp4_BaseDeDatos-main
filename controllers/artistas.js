import { conn } from "../db.js";

const getArtistas = async (req, res) => {
    // Completar con la consulta que devuelve todos los artistas
    // Recordar que los parámetros de una consulta GET se encuentran en req.params
    // Deberían devolver los datos de la siguiente forma:
    /*
        [
            {
                "id": "Id del artista",
                "nombre": "Nombre del artista"
            },
            {
                "id": "Id del artista",
                "nombre": "Nombre del artista"
            },
            ...
        ]
    */    
   
        const [results, fields] = await conn.query(
            "SELECT id, nombre FROM artistas");
            console.log(results)
        return (results);
        [req.params.id, req.body.nombre]
   

};

const getArtista = async (req, res) => {
    // Completar con la consulta que devuelve un artista
    // Recordar que los parámetros de una consulta GET se encuentran en req.params
    // Deberían devolver los datos de la siguiente forma:
    /*
        {
            "id": "Id del artista",
            "nombre": "Nombre del artista"
        }
    */
        const [rows, fields] = await conn.query(
            "SELECT * FROM artistas WHERE id = ?",
            [req.params.id, req.body.nombre]
        );
        res.json(rows[0]);
};

const createArtista = async (req, res) => {
    // Completar con la consulta que crea un artista
    // Recordar que los parámetros de una consulta POST se encuentran en req.body
    // Deberían recibir los datos de la siguiente forma:
    /*
        {
            "nombre": "Nombre del artista",
        }
    */
   const { nombre } = req.body;
   await conn.query("INSERT INTO artistas (nombre) VALUES (?)", [nombre]);
   res.status(201).json({ nombre });
};

const updateArtista = async (req, res) => {
    // Completar con la consulta que actualiza un artista
    // Recordar que en este caso tienen parámetros en req.params (el id) y en req.body (los demás datos)
    // Deberían recibir los datos de la siguiente forma:
    /*
        {
            "nombre": "Nombre del artista"
        }
    */
    const { nombre } = req.body;
    await conn.query("UPDATE artista SET nombre = ?, WHERE id = ?");
    res.json({ nombre });

};

const deleteArtista = async (req, res) => {
    // Completar con la consulta que elimina un artista
    // Recordar que los parámetros de una consulta DELETE se encuentran en req.params
    try{
    const { nombre } = req.params;
    await conn.query("DELETE", [req.params.id])
    
    }
    catch(err){
        console.log(err);
    }
};

const getAlbumesByArtista = async (req, res) => {
    // Completar con la consulta que devuelve las canciones de un artista
    // Recordar que los parámetros de una consulta GET se encuentran en req.params
    // Deberían devolver los datos de la misma forma que getAlbumes
    const [results, fields] = await conn.query("SELECT almbumes.nombre from albumes JOIN artistas ON artistas.id = albumes.artista WHERE artistas.id = ?", [req]);
    console.log(results);
    return (results);
};

const getCancionesByArtista = async (req, res) => {
    // Completar con la consulta que devuelve las canciones de un artista
    // (tener en cuenta que las canciones están asociadas a un álbum, y los álbumes a un artista)
    // Recordar que los parámetros de una consulta GET se encuentran en req.params
    // Deberían devolver los datos de la misma forma que getCanciones
    const cancion = await
    artistas.getCancionesByArtista(req.params.id)
    res.send(cancion);
};

const artistas = {
    getArtistas,
    getArtista,
    createArtista,
    updateArtista,
    deleteArtista,
    getAlbumesByArtista,
    getCancionesByArtista,
};

export default artistas;
