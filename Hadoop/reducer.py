import sys

current_date = None
current_temperature = 0
date = None

for line in sys.stdin:
    date, temperature = line.strip().split('\t', 1)
    try:
        temperature = int(temperature)
    except ValueError:
        continue

    if current_date == date:
        if temperature > current_temperature :
            current_temperature = temperature
    else:
        if current_date:
            print('%s\t%d' % (current_date, current_temperature))
        current_temperature = temperature
        current_date = date

# do not forget to output the last word if needed!
if current_date == date:
    print('%s\t%d' % (current_date, current_temperature))
