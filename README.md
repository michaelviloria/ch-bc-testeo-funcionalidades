## Testeamos nuestra API

Agregué testing usando **mocha**, **supertest** y **chai**

```console
src
└── test
    └── product.test.js
```

Para correr los tests se puede ejecutar los siguientes comandos _(debe estár levantado el servidor)_

### `npm run test:product`

Este comando mostrará por terminal los resultados.

```console

test api productos
    GET
      ✔ Deberia retornar un status 200 (145ms)
    POST
      ✔ Debería incorporar un nuevo producto (111ms)
    PUT
      ✔ Deberia actualizar un producto (99ms)
    DELETE
      ✔ Deberia eliminar un producto (101ms)


  4 passing (480ms)

```