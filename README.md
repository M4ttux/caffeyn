# Caffeyn

## Tecnologias Utilizadas

<p class="technologies">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=javascript,nodejs,mongo,express,react,postman,vscode" />
  </a>
</p>

- Javascript
- Node.js
- Express.js
- React
- JWT
- Postman
- VSCode

---

Este proyecto es un proyecto para la materia "Aplicaciones Hibridas" de la carrera Diseño y Programacion web de la Escuela Da Vinci.
Esta basado en un e-commerce fictio de cafes, donde se separa la API creada con Mongo, Express y Node de una SPA creada con React.

PD: Es una continuacion de https://github.com/mateofiorotto/API_cafes_express

### Modelos
- Café --> nombre, descripcion, descripcion corta, nivel de tostado, notas de sabor, imagen, origen y precio.
- Origin --> pais, region, clima y descripcion
- Usuario --> nombre de usuario, contraseña, mail, rol y fecha de creacion.

### Requerimientos Obligatorios (BACKEND)
- Separación del Backend y el Frontend: El Backend debe ser una API REST.

El backend es una API Rest creada con MongoDB, Express.js y Node.js.

- Autenticación JWT: Implementar autenticación mediante JSON Web Tokens (JWT).

Cuenta con autenticacion con token JWT para asegurar la veracidad de los usuarios.

- Base de Datos: Utilizar una base de datos (MongoDB).

Se utiliza un Cluster de Mongo Atlas.

- Gestión de Usuarios: El sistema debe contar con usuarios.

Contamos con usuarios con sus respectivos controladores, modelos y rutas.

- Entidades: Además de los usuarios, deben existir al menos otras dos entidades.

Se usan dos entidades, la principal de cafes y la secundaria de origenes que se relaciona de 1:N con cafes.

- CRUD: Implementar operaciones CRUD para las entidades.

Todas las entidades cuentan con sus operaciones CRUD manejadas por los controladores

- Frontend realizado en React y conectado a la API

Se conecta la API con desde el front con el backend utilizando fetch.

### Requerimientos Obligatorios (FRONTEND)
- Componentes Funcionales y Hooks: Utilizar componentes funcionales y hooks
para la creación de componentes.

- División de Componentes: Mantener una clara división de componentes.

La web cuenta con division de componentes por ejemplo para las Card de cafes, la lista de cafes, el cafe individual, el navbar, footer, etc.

- Enrutamiento: Utilizar Routers para las distintas páginas.

Se utiliza React Router para el manejo de rutas.

- Separación de Vistas y Lógica de APIs: Mantener las vistas separadas de la lógica de interacción con las APIs.

Se separa la vista de la logica de apis, haciendo llamados a la api en archivos aparte y trayendolos a la vista.

- Manejo del Estado: Gestionar correctamente el estado de la aplicación

Se utilizan useState para secciones del crud, para la autenticacion, las vistas de cafe, alertas y validaciones, etc.

### Como usarlo
1. Clone repository

  ```
  git clone https://github.com/mateofiorotto/caffeyn
  cd caffeyn
  ```

2. Colocar tu link o ip de base de datos, puerto y clave privada en .env del backend (chequear .env.template). También poner la URL de la api en el .env del frontend (chequear .env.template)

3. Entrar al backend, descargar dependencias y ejecutar el servidor local del backend
  ```
  1. cd BackEnd
  2. npm install
  3. npm start
  ```

4. Abrir otra terminal (no cerrar la anterior), descargar dependencias y ejecutar frontend
  ```
  1. cd FrontEnd
  2. npm install
  3. npm run dev
  ```

4. Entrar a la web

    Una vez que npm te de la ip, entra y ya podes probar la app.