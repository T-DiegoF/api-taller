# Challenge Backend

1. Poder ver un listado de los clientes del taller.
2. Poder ver un listado de los autos por cliente.
3. Poder ver las reparaciones realizadas a un auto.
4. Ingresar un nuevo cliente.
5. Ingresar un nuevo auto de un cliente.
6. Ingresar una nueva reparación a un auto.
7. Ver un listado de todas las reparaciones realizadas ordenadas por fechas, de la más
reciente a la más antigua.

## Ejecutar el proyecto
Primero deben crear un archivo .env en la raiz del proyecto y agregar la variable de entorno que les envie por mail, dicha variable es para la conexion la base de datos (MongoDB) alojada en Mongo Atlas.

Instalar las dependencias

```npm
npm i
```

## Usage

```Levantar el proyecto
npm run dev
```

## Stack
Para el desarrollo de la api se uso Node.js, Express.js y Mongoose

## Rutas de clients
- GET http://localhost:3000/api/clients 
- GET http://localhost:3000/api/client/:id/cars
- POST http://localhost:3000/api/client/create
- GET http://localhost:3000/api/car/repair/:id
- GET http://localhost:3000/api/cars/repair/order
- PUT http://localhost:3000/api/car/:id/update
- POST http://localhost:3000/api/car/:id/create

