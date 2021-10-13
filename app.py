from flask import Flask, jsonify, request
from flask_cors import CORS
import numpy as numpy

#configuration
DEBUG = True

#instantiate the app
app = Flask(__name__)
app.config.from_object(__name__)

#enable CORS
CORS(app, resources={r'/*': {'origins': '*'}})

#main route
@app.route('/', methods=['POST', 'GET'])
    return()

#game route
gameroute='/'+gamename
@app.route(gameroute, methods=['POST', 'GET'])
    return()

if __name__ == '__main__':
    app.run()