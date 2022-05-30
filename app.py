from flask import Flask, jsonify, render_template, request
import os
import settings
from flask_sqlalchemy import SQLAlchemy
import datetime


app = Flask(__name__)
app.secret_key = 'secret'


@app.route('/')
def index():
    """Main page"""
    # ip_addr = str(request.remote_addr).replace('.', '')
    # print(ip_addr)

    data = {'max': settings.max, 'price': settings.price}

    return render_template('index.html', data=data)


@app.route('/load')
def load():
    file = {'address': settings.address}
    return jsonify(file)

if __name__ == "__main__":
    app.config['SESSION_TYPE'] = 'filesystem'
    # db.create_all()
    # print(1)
    app.run(debug=True)