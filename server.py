from flask import Flask, render_template, request, send_from_directory, url_for
import os

app = Flask(__name__)

# Konfiguracja serwowania plików statycznych
@app.route('/static/<path:filename>')
def serve_static(filename):
    root_dir = os.path.dirname(os.getcwd())
    return send_from_directory(os.path.join(root_dir, 'static'), filename)

# Pozostały kod aplikacji Flask
@app.route('/')
def home():
    return render_template('index.html', home_url=url_for('home'))

@app.route('/paint', methods=['POST'])
def paint():
    # Pobierz dane z żądania POST
    x = int(request.form['x'])
    y = int(request.form['y'])
    brush_size = int(request.form['brush_size'])
    brush_shape = request.form['brush_shape']
    color = request.form['color']

    # Wykonaj odpowiednie operacje rysowania na canvas
    # ...

    return ''

@app.route('/clear_canvas', methods=['POST'])
def clear_canvas():
    # Wykonaj odpowiednie operacje czyszczenia canvas
    # ...

    return ''

@app.route('/save_canvas', methods=['POST'])
def save_canvas():
    # Wykonaj odpowiednie operacje zapisu canvas
    # ...

    return ''

if __name__ == '__main__':
    app.run(debug=True)
