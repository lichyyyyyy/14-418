from flask import Flask, redirect, render_template, request, Response
import os
import requests

app = Flask(__name__)
global endpoint


@app.route("/")
def hello_world():
    return render_template('homepage.html')


@app.route("/", methods=["POST"])
def choose_application():
    application = request.form['application']
    if application == '1':
        return hadoop()
    elif application == '2':
        return spark()
    elif application == '3':
        return sonar()
    return jupyter()


@app.route("/hadoop")
def hadoop():
    global endpoint
    endpoint = os.environ.get("hadoop_endpoint")
    return forward(endpoint)


@app.route("/spark")
def spark():
    global endpoint
    endpoint = os.environ.get("spark_endpoint")
    return forward(endpoint)


@app.route("/sonar")
def sonar():
    global endpoint
    endpoint = os.environ.get("sonar_endpoint")
    return forward(endpoint)


@app.route("/jupyter")
def jupyter():
    global endpoint
    endpoint = os.environ.get("jupyter_endpoint")
    return forward(endpoint)


def forward(url):
    resp = requests.get(url)
    excluded_headers = ['content-encoding', 'content-length', 'transfer-encoding', 'connection']
    headers = [(name, value) for (name, value) in resp.raw.headers.items()
               if name.lower() not in excluded_headers]
    response = Response(resp.content, resp.status_code, headers)
    return response


@app.route('/<path:path>')
def forward_additional_resources(path):
    return forward(endpoint+'/'+path)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
