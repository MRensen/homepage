---
title: "Dockerize"   
start-date: "2024-20-04"  
status: "finished"  
role: "solo"
---

# Dockerize
Dit is geen applicatie, maar een PowerShell script om automatisch ingeleverde eindopdrachten te runnen. Dit project is een leuke en praktische toepassing van Docker en Docker Compose 

## Samenvatting
- **Doel:** Automatiseer de handelingen om een eindopdracht op te starten, Run simpelweg één commando in plaats van de broncode in de IDE op te starten, een aparte database op te zetten en nu ook nog een keycloak instance opstarten en de juiste realm daar importeren.
- **Doelgroep/gebruikers:** Alle nakijkers bij NOVI hogeschool
- **Belangrijkste resultaat:** Het 

## Links
- **Repository:** <https://github.com/MRensen/dockerize-springboot>

## Features
- jdk: Kies tussen 17, 21 of 25
- sql: Kies tussen PostgreSql of MySql
- kc: Wel of geen security via KeyCloak

## Screenshots / media

![Docker build](/projects/Dockerize/docker.png)   
(Figuur 1: De docker build output)

![Compose output](/projects/Dockerize/compose.png)    
(Figuur 2: De compose output)

## Tech stack
- **Frontend:** PowerShell
- **Tools:** Docker, Docker-compose

## Uitdagingen & oplossingen
- **Uitdaging:** Compose heeft een interne netwerking, maar de aangeleverde instellingen gebruiken meestal "localhost".
    - **Oplossing:** Voor de database, heb ik de application.properties aangepast via environment variabelen. Voor keycloak, heb ik de properties aangepast via een ENTRYPOINT script.
    - **Waarom zo:** Voor de database was het mogelijk om een default "testing" database te maken, omdat de database dynamisch wordt geïnitialiseerd via de data.sql. Het keycloak realm is al volledig vasgelegd in de export JSON, daarom extraheert het script de juiste realm-naam om alsnog de property via de java environment variabele aan te kunnen passen. 
    - **Resultaat:** Ik heb geleerd dat JVM environment variabelen voorang hebben over project variabelen en dat systeem variabelen op deze manier altijd een "-D" prefix krijgen.

- **Uitdaging:** Het importeren van de meegeleverde realm-export, is een extra handeling. Dat moest ook automatisch kunnen.
    - **Oplossing:** Ik heb in het dockerize.ps1 script een functie gemaakt die de export in een "kc" map zet. Vervolgens wordt deze kc map in de KeyCloak container op "/opt/keycloak/data/import" gezet. 
    - **Waarom zo:** Volgens de documentatie van KeyCloak is deze locatie specifiek bedoeld voor imports. Er is nog wel een "--import-realm"-flag nodig bij de opstart.
    - **Resultaat:** De realm-export wordt automatisch ingeladen bij de opstart.

## Resultaten / impact
- Het opstart proces van projecten is drastisch versneld, omdat er nog slechts één handeling hoeft te worden uitgevoerd. De opstart tijd is nu ongeveer 1,5 minuut, waar het eerder wel 5 minuten kon duren.
- Het script is niet perfect. In sommige gevallen heeft een student hele bijzondere dingen gedaan, waardoor het script faalt. In dat geval is alsnog een handmatige opstart vereist. In het meerendeel van de gevallen is dit script echter wel toereikend.

