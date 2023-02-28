# Calculator

A simple calculator with the same design as the Calculator app on newer ios devices. The calculator currently support operation of adding, subtracting, multiplying and dividing integer numbers. "+/-" and "%" buttons also don't work.

# TASK-2: LINUX-UNIX-bandit-labs

# Commands

<code>ssh banditX@bandit.labs.overthewire.org -p 2220</code> - komanda za login na sever na portu 2220.

<code> cat <filename> </code> # komanda za ispis fajla koju smo koristili kako bi dobili password za naredni level.

<code>ls || ls -la</code> # komanda za ispis fajlova ili foldera unutar direkotrija u kojem se nalazimo. Dodatni dio "-la" nam ispisuje i skrivene fajlove.

<code> cd <filename> </code> # komanda za navigiranje u određeni fajl.

<code> $ cat < - </code> # komanda za ispis fajla pod nazviom "-".

<code> cat <dionaziva>\ <dionaziva>\ <dionaziva>\ <dionaziva> </code> # komanda za ispis fajla koji u imeni sadrži razmake.
<code> find. -type f ! -executable -size <bytesize> </code> # komanda za ispis fajla za određenim specifikacijama (not executable, size of file).

<code> grep "sadržajkojitražimo" <filename> </code> # komanda za ispis fajla za određenim specifikacijama (not executable, size of file).

<code> cat data.txt | sort | uniq -u </code> # komanda za ispis dijela fajla koji je unikatan, ne ponavlja se nijednom unutar fajla.

### strings data.txt I grep "sadržaj"

### base64 -d data. txt