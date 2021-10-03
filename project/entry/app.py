from flask import Flask, render_template
import src

app = Flask(__name__, template_folder='src/templates')


@app.route("/")
def hello_world():
    return render_template('index.html')


if __name__ == '__main__':
    src.entry()
    app.run()
