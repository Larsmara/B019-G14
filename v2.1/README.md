# v2.1

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# v2

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

Sjekkliste for V2 av web applikasjonen: 

[X]  -   Lag systemoversikt
[X]  -   Lag navbar component
    [X]     -   Legg inn routes i navbar
[X]  -   Lag welcome view
[X]  -   Lag prosjekter view
[X]  -   Lag Om oss view
[X]  -   Lag Registrer deg view
[X]  -   Lag Login view
[X]  -   Lag Min side view
[X]  -   Koble routes inn i navbar

[X]  -   Sett opp firebase
[X]  -   Koble firebase til prosjektet
[X]  -   Sett opp Auth route
[X]  -   Sett opp onAuthStateChange for å sjekke at en bruker er logget inn
[X]  -   Lag NyIdé view
[X]  -   Lag form for å Registrere seg
[X]  -   Lag form for å logge inn
[X]  -   Lag Log ut funksjon
[X]  -   Lage form på NyIdé view
[X]  -   Registrere ny ide til DB
[X]  -   Linke opp Min side med bruker id
[X]  -   Vise alle innsendte ideer på prosjekter
[X]  -   Vise egen dise for hvert prosjekt   
[X]  -   Lage funksjon for "slug" til hvert prosjekt.
[X]  -   Lagre et "alias"/slug for hver bruker.
[X]  -   Dashboard for admin
[X]  -   Protecte admin route!!!
[X]  -   Oversikt over alle prosjekter fra admin dashboard
[X]  -   Muligheten til å vise prosjekter som "pågående" fra admin dashboard
[X]  -   Vise pågående prosjekter til brukere
[X]  -   Slette prosjekt

[]  -   Telefonnummer verifisering
[]  -   email og passord + tlf verifisering
[]  -   Tilbakemelding til eier av prosjektet om det går i produksjon
[X]  -   Sende med media
[]  -   Passord reset
[]  -   Glemt passord på innloggingssiden
[]  -   Slette brukerkonto
[]  -   Sletting / redigering av fil 


OPPRYDDING
[]  -   Rydde opp i koden på Register.vue
[]  -   Dialog for å skrive inn kode fra sms
[]  -   Fikse så alerts ikke dukker opp på hver eneste skjerm
