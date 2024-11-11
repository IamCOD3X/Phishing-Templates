from flask import Flask, render_template
from flask_cors import CORS

app = Flask(__name__, static_url_path='/static', template_folder='templates')  # Combine both options in one line
CORS(app)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/signin')
def signin():
    return render_template('signin.html')

if __name__ == '__main__':
    app.run(debug=True)