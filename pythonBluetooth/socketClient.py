import socket

# serverMACAddress = '28:7f:cf:18:5d:11'
serverMACAddress = '18:1d:ea:73:e8:02'
port = 14
s = socket.socket(socket.AF_BLUETOOTH, socket.SOCK_STREAM, socket.BTPROTO_RFCOMM)
s.connect((serverMACAddress,port))
while 1:
    text = input()
    if text == "quit":
        break
    s.send(bytes(text, 'UTF-8'))
s.close()
