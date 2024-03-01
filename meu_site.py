from flask import Flask, render_template

app = Flask(__name__)

#1º pagina do site
# route -> "/" (caminho depois do nome do dominio)
# função -> o que você quer exibir
# template

@app.route("/")
def homepage():
    return render_template("homepage.html")

@app.route("/usuarios/<nome_usuario>")
def usuarios(nome_usuario):
    return render_template("usuarios.html", nome_usuario = nome_usuario)

#site no ar
if __name__ == "__main__":
    app.run(debug=True)

    # servidor do heroku