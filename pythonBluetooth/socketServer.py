import socket
import webbrowser

# hostMACAddress = '28:7f:cf:18:5d:11' #mine
hostMACAddress = '04:ed:33:3a:26:21'
port = 16 # 3 is an arbitrary choice. However, it must match the port used by the client.
backlog = 1
size = 1024
s = socket.socket(socket.AF_BLUETOOTH, socket.SOCK_STREAM, socket.BTPROTO_RFCOMM)
s.bind((hostMACAddress,port))
s.listen(backlog)
try:
    client, address = s.accept()
    while 1:
        data = client.recv(size)
        if data:
            print(data)
            webbrowser.open('http://net-informations.com', new=2)
            client.send(data)
except:	
    print("Closing socket")	
    client.close()
    s.close()