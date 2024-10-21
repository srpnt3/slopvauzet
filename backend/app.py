from flask import Flask, request, jsonify, send_from_directory

app = Flask(__name__)

nextIdx = 5
todos = [
    {
        "id": 1,
        "title": "Find a great team",
    },
    {
        "id": 2,
        "title": "Choose a project",
    },
    {
        "id": 3,
        "title": "Interview people for need-finding",
    },
    {
        "id": 4,
        "title": "Come up with a lo-fi prototype",
    },
]


@app.get("/api/todos")
def fetch_todos():
    global todos
    return todos

@app.post("/api/todos")
def create_todo():
    global todos, nextIdx
    content = request.json
    todos.append({"id": nextIdx, "title": content["title"]})
    nextIdx += 1
    return "OK"

@app.delete("/api/todos/<int:id>")
def delete_todo(id):
    global todos
    todos = [todo for todo in todos if todo["id"] != int(id)]
    return "OK"


# Serve static files from the 'static' folder
@app.route('/<path:filename>')
def static_files(filename):
    return send_from_directory('../static', filename)

@app.route('/api/auth/me')
def auth_me():
    # read X-authentik-username

    username = request.headers.get("X-authentik-username", None)
    email = request.headers.get("X-authentik-email", None)
    name = request.headers.get("X-authentik-name", None)

    return jsonify({"username": username, "email": email, "name": name})

if __name__ == "__main__":
    app.run(debug=True)
