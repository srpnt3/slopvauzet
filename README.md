# VC2 Hackathon Template

Welcome hackers, to the VC2 Hackathon!

This repository is a template for your hackathon project. It includes a
basic structure for your project, as well as some resources to help you
get started.

Feel free to modify this template as you see fit or yeet it completely :)

## Getting Started
This repository contains a frontend, backend, and a http proxy server.
Everything can easily
be started with `docker-compose`.

```bash
docker compose up
```

This will start the frontend, backend, and proxy server. The frontend
will be available at `http://localhost:8000` and the backend will be
available at `http://localhost:8000/api`.

### Proxy (Traefik)
The proxy server is a reverse proxy that routes requests to the frontend
and backend. In this case we have decided to use traefikIt is configured
to route requests to the frontend if the path starts with `/` and to the
backend if the path starts with `/api`.

Additionally, it provides a middleware that adds dummy authentication
headers to each request. This is useful for testing authentication.
The following headers are added:
- `X-Authentik-Username`
- `X-Authentik-Email`
- `X-Authentik-Name`

You can assume that the email header is unique for each user and thus
use it as a unique identifier.

To add authentication to any other services, simply add the following
labels to the service in the `docker-compose.yml` file:
```yaml
labels:
    traefik.http.routers.<YOUR_ROUTER>.middlewares: dummy-auth-header
```

### Backend
The backend is written in Python using the Flask framework. It provides
a simple REST API for managing a todo list and user authentication.

| Method | Path           | Description                            |
|--------|----------------|----------------------------------------|
| GET    | /api/todos     | Get all todos                          |
| POST   | /api/todos     | Create a new todo                      |
| DELETE | /api/todos/:id | Delete a todo                          |
| GET    | /api/auth/me   | Get the current user from auth headers |

Make sure to include the prefix `/api` in your endpoints for the proxy
to route the requests correctly to your backend application.

### Frontend
The frontend is a simple React app that displays some information and
hosts a todo list app. It is written in Javascript and the backend
requests are made using the `fetch` API.

If you feel confident or want to use a more involved frontend framework,
we recommend you to use `NEXT.JS` which supports server-side rendering,
multi-page routing, and more.
