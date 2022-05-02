from audioop import lin2adpcm
from flask import Flask, session, abort, redirect, request,render_template,url_for,jsonify
import socket
import webbrowser
import json
app = Flask(__name__, template_folder='./templates')


global show,l1,lin2
show="none"
l1=None
l2=None

@app.route('/')
def index():            # user will see a button to Log-In with google 
    return render_template('index.html')




@app.route('/verify', methods=['GET', 'POST'])
def verify():
    if request.method == 'POST':
        print(request.get_json())  # parse as JSON
        serverMACAddress = '18:1d:ea:73:e8:02'
        port = 16
        s = socket.socket(socket.AF_BLUETOOTH, socket.SOCK_STREAM, socket.BTPROTO_RFCOMM)
        s.connect((serverMACAddress,port))

        text = request.get_json()
        text=json.dumps(text)

        s.send(bytes(text, 'UTF-8'))
        s.close()
        return 'Sucesss', 200

@app.route("/open/<lt>/<lg>")
def open(lt,lg):
    global show,l1,l2
    print(lt,lg)
    webbrowser.open('http://localhost:3000/addLocation/'+lt+"/"+lg, new=2)
    show="block"
    l1=lt
    l2=lg
    # webbrowser.open('http://127.0.0.1:5500/Book%20Cabs%20Nearby%20at%20Best%20Price%20_%20Hire%20Taxi%20Nearby%20Online.html', new=2)
    return "ok"
    # return render_template("where.html",lat=lt,lng=lg,what=show)
@app.route("/map")
def map():
    global show,l1,l2
    return render_template("where.html",lat=l1,lng=l2,what=show)


if __name__ == '__main__':

    app.run(debug=True)