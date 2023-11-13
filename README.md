# Disney

**Disney** är en applikation med disney-karaktärer. Totalt är det 7438 karaktärer och 149 sidor. Alla karaktärer har en bild och lite information som t.ex. namn, id, film och videospel.

Man kan se en slumpmässig bild på en av 50 disney-karaktärer från sidan 1 genom att trycka på ”Show image” knappen samt namn och videospel (om den finns) på en slumpmässig karaktär.

Vill du se mer?
Det finns tre sökmöjligheter:

1. Du kan välja en sida från 1 till 149 för att se alla karaktärer som finns på en vald sida. 
2. Du kan söka en karaktär genom att välja id-nummer (från 1 till 7438).
3. Du kan söka en karaktär genom att ange ett namn. Här kan du även se vilka filmer en karaktär med valt namn är med i och vilket id-nummer den har.

## Jag har byggt min Disney-app med:

- TypeScript
- Sass
- AJAX

Det var mycket smidigt att använda [Parsel](https://parceljs.org/) för att man behöver inte kompilera eller uppdatera. Koda - spara - se resultat i din webbläsare!

Jag har använt [Disney API](https://disneyapi.dev/)
och följande URLer:

- [URL som ger alla karaktärer från sidan 1](https://api.disneyapi.dev/character/);
- [URL som ger alla karaktärer från en vald sida](https://api.disneyapi.dev/character?page=);
- [URL som ger alla karaktärer med ett valt namn](https://api.disneyapi.dev/character?name=);

## Vill du köra min app lokalt?

1. Klona repo

```

git clone https://github.com/OlgaGustafsson/disney.git

```

2. Gå in i repokatalogen

```

cd disney

```

3. Installera dev dependencies

```

npm install

```

4. Starta dev servern som ska se efter sparade ändringar av SCSS-filer och TS-filer

```

npm run start

```

5. Öppna http://localhost:1234/ i din webbläsare.
