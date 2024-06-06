from flask import Flask, request, jsonify, render_template
import subprocess

app = Flask(__name__)

@app.route('/chat', methods=['POST'])
def chat():
    data = request.get_json()
    message = data['message']
    
    # Especifica la ruta al script llama2_script.py
    ruta_script_llama2 = 'C:\\Users\\Gbus\\AppData\\Local\\Programs\\Ollama\\llama2_script.py'
    
    # Ejecuta el script de la IA llama2 y procesa el mensaje
    result = subprocess.run(['python', ruta_script_llama2, message], capture_output=True, text=True)
    response = result.stdout.strip()
    
    return jsonify({'response': response})

@app.route('/')
def index():
    mensaje_bienvenida = "¡Bienvenido al Chat Bot MGP!, en qué podemos ayudarte?"
    return render_template('index.html', mensaje_bienvenida=mensaje_bienvenida)

if __name__ == '__main__':
    app.run(debug=True)
