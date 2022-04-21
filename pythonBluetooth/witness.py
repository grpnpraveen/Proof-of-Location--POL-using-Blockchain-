import socket
import json
from math import cos, asin, sqrt
import webbrowser


def distance(lat1, lon1, lat2, lon2):
    p = 0.017453292519943295
    a = 0.5 - cos((lat2 - lat1) * p)/2 + cos(lat1 * p) * cos(lat2 * p) * (1 - cos((lon2 - lon1) * p)) / 2
    return 12742 * asin(sqrt(a))

hostMACAddress = '18:1d:ea:73:e8:02' #mine
port = 14

backlog = 1
size = 1024
s = socket.socket(socket.AF_BLUETOOTH, socket.SOCK_STREAM, socket.BTPROTO_RFCOMM)
s.bind((hostMACAddress,port))
s.listen(backlog)

LAT=28.2516657
LON=76.8144186
try:
    client, address = s.accept()
    while 1:
        data = client.recv(size)
        if data:
            js=json.loads(data.decode('ASCII'))
            print(js["lat"])
            print(js["lon"])
            if(distance(LAT,LON,int(js["lat"]),int(js["lon"])) <= 100):
                print("SUCCESS")
                webbrowser.open('https://f47a-103-139-191-218.ngrok.io/open/'+js["lat"]+"/"+js["lon"], new=2)
            client.send(data)
except:	
    print("Closing socket")	
    client.close()
    s.close()