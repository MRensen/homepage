---
title: "Feedbacktool"  
start-date: "2025-03-01"  
finish-date: "2026-??-??"  
status: "in-development"  
role: "solo"    
---

# Feedbacktool
Een AI automatisering voor docenten met als primair doel om gemaakte huiswerkopdrachten op github sneller te beoordelen.

## Samenvatting
- **Doel:** Met behulp van AI een snellere beoordeling kunnen geven aan studenten die hun huiswerk hebben ingeleverd.
- **Doelgroep/gebruikers:** De huidige versie is exclusief voor docenten en SME's van het SD-cluster van hogeschool NOVI. 
In de toekomst is wellicht uitbreiding naar andere cluster, scholen of zelfs naar studenten mogelijk.
- **Belangrijkste resultaat:** Dit was mijn afstudeer-project en heeft mij een Bachelor opgeleverd. Verdere resultaten zullen volgen.

## Links
- **Demo:** <https://feedbacktool-rcdmu.ondigitalocean.app/>
- **Repository Backend:** <https://github.com/hogeschoolnovi/PeerReviewAutomationWeb>
- **Repository Frontend:** <https://github.com/MRensen/PeerReviewAutomationFrontEnd>
- **Documentatie:** <https://feedbacktool-rcdmu.ondigitalocean.app/handleiding>

## Features
- Typescript en Tailwind
- Security (MSAL) integratie met de bestaande cloud omgeving van NOVI
- AI en GitHub integratie

## Screenshots / media

![login pagina](/projects/FeedbackAutomationTool/login.png)  
(figuur 1: De login-pagina)

![404 pagina](/projects/FeedbackAutomationTool/404.png)  
(figuur 2: Custom 404 pagina)

![voorpagina](/projects/FeedbackAutomationTool/homepage.png)  
(figuur 3: Voorpagina waar je de klas en de opdracht moet selecteren. Je krijgt de optie om "feedback" of een "peerreview" te genereren afhankelijk van de geselecteerde opdracht.)

![peerreview pagina](/projects/FeedbackAutomationTool/peerreview.png)  
(figuur 4: Studenten worden in de backend aan elkaar gekoppeld en daar wordt een bericht voor gegenereerd. In de frontend kan dat bericht gecontroleerd en aangepast worden, waarna het (in bulk) verstuurd kan worden via Teams Chat)

## Tech stack
- **Frontend:** 
  - React
  - React-router-dom v6
  - @azure/msal
  - @radix-ui / shadcn
  - sonner
  - tailwind
  - typescript
- **Backend:**
  - Springboot
  - Oauth2.0
  - Azure/msal
  - MSGraph
  - SpringAI
  - JPA
  - GitHub API (graphql)
- **Database:** 
  - postgresql
- **Infra/hosting:** 
  - Digital Ocean
- **Tools:** 
  - GitHub actions (deploy)
  - Maven (build)
  - Vite (build)
  - JUnit (test)

## Architectuur 
- **Componenten:** 
  - Frontend
  - Backend (API)
  - DB
  - Azure
  - GitHub
- **Integraties:** 
  - OAuth (azure)
  - GitHub (graphql)
  - AI
- **Belangrijke keuzes:** 
  - Fronted/backend constructie versus een monolitische structuur in de backend met Thymeleaf
  - Toegankelijk voor studenten of niet

## Data / domein 
- **Belangrijkste entiteiten:** 
  - User (azureId, displayName, email, accesToken, githubLogin)
  - AuthLogin (state, azureSub, redirectUrl)
  - Assignment (stijlregels, inhoudsregels, studentsWhoRecievedFeedback)
- **Belangrijkste flows:** 
  - Feedback genereren met behulp van AI op ingeleverd huiswerk.
  - Gegenereerde feedback als pending comment plaatsen op een PR
  - Github account koppelen aan de applicatie.
  - Peerreviews koppelen (studenten aan elkaar koppelen via een Teams-chat bericht, zodat ze elkaar's PR kunnen beoordelen)
  - Nieuwe huiswerkopdrachten in het systeem zetten.

## Mijn bijdrage
- Als solo developer heb ik alles gedaan, in regelmatig overleg met de opdrachtgever (NOVI hogeschool)

## Uitdagingen & oplossingen
- **Uitdaging:** Feedback naar de student communiceren
    - **Oplossing:** Een integratie gemaakt met de GitHub GraphQL API.
    - **Waarom zo:** Het huiswerk wordt ingeleverd als een GitHub Pull Request en de GitHub REST API bleek niet toereikend.
    - **Resultaat:** Ik heb geleerd te werken met GraphQL en de API te integreren (zonder )

- **Uitdaging:** Omdat de applicatie op een basis van security is gebouwd, was het moeilijk om offline te testen.
    - **Oplossing:** Ik heb security- en test-objecten gemockt en nagebouwd.
    - **Waarom zo:** Ik kon zo herhaalbare JSON objecten serveren voor mijn tests en ik kon vaste security eisen omzeilen voor de tests.
    - **Resultaat:** Offline testen zijn mogelijk in de CICD pipeline.

## Resultaten / impact
- De applicatie is nog niet in productie genomen en heeft dus nog geen meetbare effecten kunnen laten zien.

