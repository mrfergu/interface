from http.server import BaseHTTPRequestHandler, HTTPServer
import json

# Esta función simula la respuesta de la IA "Llama2" basada en la consulta del usuario
def llama2_responder(consulta):
    # Aquí podrías llamar a tu aplicación Python de "Llama2" y obtener la respuesta real
    # Por ahora, solo devolveremos una respuesta simulada
    return "Respuesta de Llama2 a: " + consulta

# Manejador para el servidor HTTP
class RequestHandler(BaseHTTPRequestHandler):
    # Método para manejar las solicitudes POST
    def do_POST(self):
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length)
        data = json.loads(post_data.decode('utf-8'))
        
        if 'consulta' in data:
            consulta = data['consulta']
            respuesta = llama2_responder(consulta)
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps({'respuesta': respuesta}).encode('utf-8'))
        else:
            self.send_response(400)
            self.end_headers()
            self.wfile.write(b'Error: consulta no encontrada en la solicitud')

# Configuración del servidor
def run_server():
    server_address = ('', 8000)
    httpd = HTTPServer(server_address, RequestHandler)
    print('Servidor iniciado en el puerto 8000...')
    httpd.serve_forever()

if __name__ == '__main__':
    run_server()
