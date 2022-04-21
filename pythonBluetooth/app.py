from flask import Flask, session, abort, redirect, request,render_template,url_for,jsonify
import socket
import webbrowser
import json
app = Flask(__name__, template_folder='./templates')


@app.route('/')
def index():            # user will see a button to Log-In with google 
    return render_template('index.html')




@app.route('/verify', methods=['GET', 'POST'])
def verify():
    if request.method == 'POST':
        print(request.get_json())  # parse as JSON
        serverMACAddress = '18:1d:ea:73:e8:02'
        port = 14
        s = socket.socket(socket.AF_BLUETOOTH, socket.SOCK_STREAM, socket.BTPROTO_RFCOMM)
        s.connect((serverMACAddress,port))

        text = request.get_json()
        text=json.dumps(text)

        s.send(bytes(text, 'UTF-8'))
        s.close()
        return 'Sucesss', 200

@app.route("/open/<lt>/<lg>")
def open(lt,lg):
    print(lt,lg)
    webbrowser.open('http://localhost:3000/addLocation/'+lt+"/"+lg, new=2)
    return "ok"


if __name__ == '__main__':

    app.run(debug=True)