import sys

default_dir = r'ncdc-data'
invalid_temp = 9999
invalid_quality = {'0', '1', '4', '5', '9'}

for line in sys.stdin:
        key = line[15:23]
        value = int(line[87:92])
        quality = line[93]
        if quality not in invalid_quality and value != invalid_temp:
            print('%s\t%d' % (key, value))
