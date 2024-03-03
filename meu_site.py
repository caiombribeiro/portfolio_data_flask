from flask import Flask, render_template, redirect, request, flash
from flask_mail import Mail, Message
from dotenv import load_dotenv
import os

app = Flask(__name__)
app.secret_key = "thicode"

load_dotenv()

mail_settings = {
    'MAIL_SERVER': 'smtp.gmail.com',
    'MAIL_PORT': 465,
    'MAIL_USE_TLS': False,
    'MAIL_USE_SSL': True,
    'MAIL_USERNAME': os.getenv("email"),
    'MAIL_PASSWORD': os.getenv("senha")

}

app.config.update(mail_settings)

mail = Mail(app)

class Contato:
    def __init__(self, nome, email, mensagem):
        self.nome = nome
        self.email = email
        self.mensagem = mensagem

#1º pagina do site
# route -> "/" (caminho depois do nome do dominio)
# função -> o que você quer exibir
# template


@app.route("/")
def homepage():
    return render_template("homepage.html")

@app.route("/pt_br")
def pt_br():
    return render_template("pt_br.html")

@app.route("/send",methods=["GET","POST"])
def send():
    if request.method == "POST":
        formContato = Contato(
            request.form["nome"],
            request.form["email"],
            request.form["mensagem"]
        )

        msg = Message(
            subject = f"{formContato.nome} te enviou uma mensagem pelo portfólio",
            sender = app.config.get("MAIL_USERNAME"),
            recipients= ["caiombr@gmail.com"],
            body = f'''

            {formContato.nome} com o email {formContato.email} te enviou a seguinte mensagem:

            {formContato.mensagem}

            '''
        )

        mail.send(msg)
        flash("Message sent successfully")
    return redirect("/")

#site no ar
if __name__ == "__main__":
    app.run(debug=True)

