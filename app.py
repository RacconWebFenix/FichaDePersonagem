from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy
import FichaPersonagemModel
app = Flask(__name__)


# Conexão com Banco de Dados 
user = 'mpxnnhum'
password = 'X_Q7OkzkpL_fIafb5mGD3QGH1Ut_VIMD'
host = 'tuffi.db.elephantsql.com'
database = 'mpxnnhum'
app.config['SQLALCHEMY_DATABASE_URI'] = f'postgresql://{user}:{password}@{host}/{database}'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

personagem = FichaPersonagemModel

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/read')
def readAll():
    registros = personagem.FichaPersonagem.readAll()
    return render_template('readAll.html', registros=registros)


@app.route('/read/<idRegistro>')
def readSingle(idRegistro):
    registro = personagem.FichaPersonagem.readSingle(idRegistro)
    return render_template('fichaCompleta.html', registro = registro)

# CREATE
@app.route('/create', methods=('GET', 'POST'))
def create():
    idAtribuido = None
    if request.method == 'POST':
        form = request.form
        registro = personagem.FichaPersonagem(form['nome'], form['classe'], form['imagem'], form['forca'], form['destreza'], form['constituicao'], form['sabedoria'], form['inteligencia'], form['bio'])
        registro.save()
        idAtribuido = registro.id
    return  render_template('create.html', idAtribuido = idAtribuido)

if __name__ == '__main__':
    app.run(debug=True)