# Calculator

A simple calculator with the same design as the Calculator app on newer ios devices. The calculator currently support operation of adding, subtracting, multiplying and dividing integer numbers. "+/-" and "%" buttons also don't work.

# TASK-2: LINUX-UNIX-bandit-labs

## Commands

<code>ssh bandit@bandit.labs.overthewire.org -p 2220</code> - komanda za login na sever na portu 2220.

<code>cat <code>filename</code></code> - #komanda za ispis fajla koju smo koristili kako bi dobili password za naredni level.

<code>ls</code> - komanda za ispis fajlova ili foldera unutar direkotrija u kojem se nalazimo.

<code>ls -la</code> - komadna za ispis fajlova ili foldera unutar direkotrija u kojem se nalazimo <bold>ukljucujuci</bold> i skrivene fajlove.

<code>cd <code>filename</code></code> - komanda za navigiranje u određeni fajl.

<code>cat < -</code> - komanda za ispis fajla pod nazviom "-".

<code>cat <code>dioNaziva</code>\ <code>dioNaziva</code>\ <code>dioNaziva</code></code> - komanda za ispis fajla koji u imeni sadrži razmake.

<code>file -- *</code> - komanda za ispisivanje tipova fajla svakog posebno unutar direkotrija u kojem se nalazimo.  

<code>find / -user <code>imeUsera</code> -group <code>imeGrupe</code></code> - komanda za pretrazivanje fajla sa vlasnistvom navedeneog korisnika i grupe.

<code>find. -type f ! -executable -size <code>bytesize</code></code> - komanda za ispis fajla za određenim specifikacijama (not executable, size of file).

<code>grep <code>"sadržajKojiTražimo"</code> <code>imeFajla</code></code> - komanda kojom tražimo određni sadržaj unutar fajla kojeg navedemo.

<code>cat data.txt | sort | uniq -u</code> - komanda za ispis dijela fajla koji je unikatan, ne ponavlja se nijednom unutar fajla.

$ strings data.txt I grep "sadržaj"

$ base64 -d data. txt