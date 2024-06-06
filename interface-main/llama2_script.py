import sys
import subprocess

def get_llama2_response(message):
    # Ruta al ejecutable de Llama2
    llama2_executable = 'C:\\Users\\Gbus\\AppData\\Local\\Programs\\Ollama\\ollama.exe'
    
    # Comando para ejecutar Llama2 con el mensaje como argumento
    command = [llama2_executable]
    
    # Iniciar el proceso Llama2
    process = subprocess.Popen(command, stdin=subprocess.PIPE, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
    
    # Enviar el mensaje a Llama2
    process.stdin.write(message + '\n')
    process.stdin.flush()
    
    # Obtener la respuesta de Llama2
    response = process.stdout.readline().strip()
    
    # Esperar a que el proceso Llama2 termine
    process.wait()
    
    # Devolver la respuesta
    return response

if __name__ == '__main__':
    # Verificar si se proporcionó un mensaje como argumento
    if len(sys.argv) < 2:
        print("Usage: python llama2_script.py [message]")
        sys.exit(1)
    
    # Recibir el mensaje como argumento
    message = sys.argv[1]
    
    # Obtener la respuesta de Llama2
    response = get_llama2_response(message)
    
    # Imprimir la respuesta
    print(response)
