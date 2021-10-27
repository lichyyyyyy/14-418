from flask import Flask, redirect, render_template, request
import os

app = Flask(__name__)


@app.route("/")
def hello_world():
    return render_template('homepage.html')


@app.route("/", methods=["POST"])
def choose_application():
    application = request.form['application']
    print(application)
    if application == '1':
        return hadoop()
    elif application == '2':
        return spark()
    elif application == '3':
        return sonar()
    return jupyter()


@app.route("/hadoop")
def hadoop():
    hadoop_endpoint = os.environ.get("hadoop_endpoint")
    return redirect(hadoop_endpoint)


@app.route("/spark")
def spark():
    spark_endpoint = os.environ.get("spark_endpoint")
    return redirect(spark_endpoint)


@app.route("/sonar")
def sonar():
    sonar_endpoint = os.environ.get("sonar_endpoint")
    return redirect(sonar_endpoint)


@app.route("/jupyter")
def jupyter():
    jupyter_endpoint = os.environ.get("jupyter_endpoint")
    return redirect(jupyter_endpoint)


if __name__ == '__main__':
    app.run()
