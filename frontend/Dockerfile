# immagine di base
FROM node:16

# set della cartella di lavoro
WORKDIR /usr/src/app

# installo Angular
RUN npm i -g @angular/cli@13

# copia del file delle dipendenze
COPY package.json /usr/src/app

# installazione delle dipendenze
RUN npm i

# copia del codice
COPY . /usr/src/app

# esposizione della porta
EXPOSE 4200

# avvio dell'app
CMD ["ng", "serve", "--host", "0.0.0.0"]
