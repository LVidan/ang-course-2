# DEV Notes

- Napraviti komponentu common-buttons
- Komponenta ne treba imati spec.ts, a css treba da se nalazi unutar ts-a

## common-buttons - CSS

- U css-u definisati 2 selektora, .red i .blue, gde će svaki imati background svojstvo u skladu sa njihovim nazivom

## common-buttons - TS

- Deklarisati promenljivu btnColor čija će vrednost biti "red"
- Definisati metod, changeColor, koji će setovati vrednost btnColor-a u skladu sa prosleđenim argumentom

## common-buttons - HTML

- 2 button-a - 1 sa nazivom RED, drugi sa nazivom BLUE
- Klikom na red button, potrebno je pozvati metod changeColor i promeniti svojstvo btnColor u red
- Klikom na blue button, potrebno je pozvati metod changeColor i promeniti svojstvo btnColor u blue
- Oba button-a trebaju imati klasu čija će vrednost odgovarati property-ju btnColor

- Napraviti komponentu login čiji će i template i css biti u sastavu ts-a
- common-buttons učitati unutar komponente login, dok njen css može ostati prazan
- login komponentu učitati unutar app komponente
