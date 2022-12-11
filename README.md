# MyAngularApp

Dit project is gegenereerd met [Angular CLI](https://github.com/angular/angular-cli) versie 14.2.6.

## Begeleidend schrijven in het kader van de opdracht

Deze prototype-applicatie is gemaakt voor RealEstateCare. Omdat de opdracht in het Nederlands is aangeleverd en de applicatie bedoeld is voor Nederlandse gebruikers, is de user interface in het Nederlands geschreven. De achterliggende code is wel in het Engels gemaakt.

Wanneer de applicatie wordt opgestart, krijgt de gebruiker een loginscherm te zien. Hiervoor is een testaccount beschikbaar. De gegevens van het testaccount heb ik gedeeld via de opmerkingen bij de bestanden die ik geüpload heb voor de opdracht. Na een succesvolle login wordt de gebruiker naar de dashboard geleid.

Het prototype dashboard bevat de volgende functionaliteiten:
1. Een overzicht van de inspecties die in de toekomst gepland staan en zijn toegewezen aan de huidige gebruiker ("Toegewezen")
2. Een overzicht van alle reeds afgeronde inspecties ("Afgerond")
3. Een kennisbank ("Kennisbank")
4. Een instellingenpagina ("Instellingen")

Wanneer de gebruiker op "Details" klikt in het overzicht van afgeronde inspecties, wordt er een pagina geopend waarin alle details van de inspectie worden weergeven. Ook eventueel gemaakte foto's worden daar getoond. Het formulier waarin de inspecteur de inspectie kan invullen is niet gemaakt, omdat dat buiten de scope van de opdracht valt. Daarom werkt de "Inspectie uitvoeren" knop op de pagina met toegewezen inspecties ook niet.

Ook de inhoud van de kennisbank en de tabbar aan de onderkant van het scherm werden niet gevraagd in het kader van deze opdracht. Daarom zijn ook die functionaliteiten niet verder uitgewerkt. Alle knoppen in de tabbar leiden nu naar het dashboard.

## 10 heuristieken van Jakob Nielsen

1. Zichtbaarheid van de status is belangrijk

Ik heb dit heuristiek toegepast door de gebruiker te voorzien van feedback, zoals de error-berichten bij het (niet) invullen van de gebruikersnaam en wachtwoord. Ook laden pagina's snel en is de navigatie duidelijk en voorspelbaar op basis van de teksten op de knoppen waarmee de gebruiker navigeert.

2. Het systeem en de echte wereld komen overeen

Ik heb dit heuristiek toegepast door eenvoudige, voor de gebruiker herkenbare Nederlandse benamingen te gebruiken en door technisch taalgebruik te vermijden.

3. Gebruiker heeft controle en vrijheid

Ik heb dit heuristiek toegepast door knoppen toe te voegen waarmee de gebruiker altijd terug kan naar het dashboard of het voorgaande overzicht. De gebruiker kan zo zijn gemaakte stappen ongedaan maken.

4. Wees consistent

Ik heb dit heuristiek toegepast door headers en tekst altijd hetzelfde format te geven, de overzichtstabellen dezelfde layout te geven, knoppen om terug te gaan altijd onderin het scherm te plaatsen, de header en footer van de pagina te fixeren, etc.

5. Maak geen fouten

Dit was in de huidige opdracht nog niet heel erg aan de orde, maar de gebruiker kan geen foutieve login opgeven in het loginscherm (en krijgt daarop feedback) en in de instellingen moet een gebruiker twee keer het wachtwoord opgeven voordat dit gewijzigd zou mogen worden.

6. Zorg dat de bezoeker niks hoeft te onthouden

Ook dit is nog niet echt van toepassing geweest, maar ik heb wel geprobeerd om alle relevante informatie op de juiste plekken te tonen (bijvoorbeeld alle benodigde informatie op het inspectie detailscherm) en een eenvoudige navigatieroute.

7. Flexibiliteit en efficiency

Ik heb dit heuristiek toegepast door de applicatie eenvoudig te houden en dus bruikbaar voor ieder type gebruiker. Het navigeren is efficiënt, en er zijn geen onnodige stappen nodig om ergens te komen.

8. Hou het minimaal en verfijnd

Ik heb dit heuristiek toegepast door overbodige informatie te vermijden en de interface eenvoudig te houden om naar te kijken. Het dashboard is bijvoorbeeld in één oogopslag te bekijken en de gebruiker hoeft weinig te scrollen.

9. Maak foutmeldingen minder eng

Ik heb dit heuristiek toegepast door foutmeldingen met een minimalistische rode kleur en vriendelijke transities te weergeven.

10. Bied een helpende hand

Dit was in de huidige opdracht nog niet heel erg aan de orde, maar er is wel een kennisbank en informatieknop beschikbaar voor de gebruiker.