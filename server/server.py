from flask import Flask, render_template
from stt import listen
import logging
log = logging.getLogger('werkzeug')
log.setLevel(logging.ERROR)

app = Flask(__name__)
global count 
count = 0

@app.route("/audio")
def audio():
    sentence = 'listening'
    sentence = listen()
    print(sentence, count) 
    return {"audio":sentence}

@app.route("/members")
def members():
    return {"members": ["Sree Sankar", "2/7/22", "11/7/22", "Critical", "4637"]}

@app.route("/pages")
def pages():
    return {"pages": ["<Profile/>"]}

if __name__ == "__main__":
    app.run()
