# REST API – Guía Práctica y Clara

## ¿Qué es REST?

Representational State Transfer (REST) es un **estilo de arquitectura de software** propuesto por _Roy Fielding_ en el año **2000**.

> REST no es un estándar ni una librería; es un conjunto de principios que, cuando se siguen, permiten crear servicios web altamente escalables, simples y mantenibles.

### Pilares que se observan en la imagen

| Pilar                           | Qué significa                                                                                                            | Beneficio                                                                 |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------- |
| **Recursos**                    | Cada concepto del dominio (usuario, pedido, foto, etc.) se expone como un _recurso_ identificable por una **URL única**. | Da claridad: `/usuarios/42` siempre es “el usuario 42”.                   |
| **Verbos HTTP**                 | GET, POST, PUT, PATCH, DELETE expresan la _operación_ que quiero hacer sobre el recurso, no la URL.                      | Interfaz uniforme; cualquier cliente HTTP ya “sabe” usar tu API.          |
| **Representaciones**            | El mismo recurso puede devolverse en distintos formatos: JSON, XML, HTML… El cliente elige vía `Accept`.                 | Portabilidad entre distintos lenguajes y dispositivos.                    |
| **Stateless**                   | Cada petición contiene **toda** la información necesaria; el servidor no guarda estado de sesión entre llamadas.         | Escalabilidad horizontal: cualquier nodo puede atender cualquier request. |
| **Separación cliente-servidor** | Interfaz clara entre front-end y back-end; ambos pueden evolucionar de forma independiente.                              | Facilita versionado y mantenimiento.                                      |

---

## API vs. REST API

| Concepto        | API (genérico)                                                                                                  | REST API                                                                    |
| --------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| **Definición**  | Interfaz de programación de aplicaciones: cualquier medio que permite que dos piezas de software se comuniquen. | API que **sigue los principios REST**.                                      |
| **Ejemplos**    | _ GraphQL API <br> _ gRPC <br> _ WebSockets <br> _ SOAP <br> \* Un archivo CSV importado por Excel              | _ GitHub REST API <br> _ Twitter API v2 <br> \* Stripe API                  |
| **Transporte**  | Cualquiera (TCP, UDP, HTTP, WebSockets…)                                                                        | Exclusivamente **HTTP/HTTPS**.                                              |
| **Formatos**    | Cualquiera (binario, JSON, XML, ProtoBuf…)                                                                      | JSON (más común), XML, HTML, YAML…                                          |
| **Operaciones** | Definidas por el diseñador (pueden ser “métodos” arbitrarios).                                                  | Restringidas a los **vervos HTTP estándar**: GET, POST, PUT, PATCH, DELETE. |
| **Estado**      | Puede ser _stateful_ o _stateless_.                                                                             | **Siempre stateless**.                                                      |
| **Cacheo**      | Depende del diseñador.                                                                                          | Aprovecha **HTTP caching** (ETag, Cache-Control).                           |

---

## Ejemplo Mínimo

```http
GET /usuarios/42
Accept: application/json
```

- Respuesta:

```json
{
  "id": 42,
  "nombre": "Ada Lovelace",
  "email": "ada@example.com"
}
```

- Aunque el mismo recurso puede solicitarse en XML:

```http
GET /usuarios/42
Accept: application/xml
```

- y devolver:

```xml
<usuario>
  <id>42</id>
  <nombre>Ada Lovelace</nombre>
  <email>ada@example.com</email>
</usuario>
```

## RESUMEN

- **API** = cualquier forma de que dos programas hablen.
- **REST API** = una API que habla **HTTP**, usa **URLs** para recursos, **verbos HTTP** para operaciones y es **stateless**.
