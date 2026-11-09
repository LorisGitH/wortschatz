if ("serviceWorker" in navigator) window.addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(() => {}));

// iOS ignores user-scalable=no: block pinch zoom of the page
document.addEventListener("gesturestart", e => e.preventDefault());
document.addEventListener("touchmove", e => { if (e.touches.length > 1) e.preventDefault(); }, { passive: false });
const RAW = `# bases|Premiers pas|Saluer, remercier, se faire comprendre
Hallo!||Salut ! / Bonjour !
Guten Morgen!||Bonjour ! (le matin)
Guten Tag!||Bonjour ! (la journée)
Guten Abend!||Bonsoir !
Gute Nacht!||Bonne nuit !
Tschüss!||Salut ! (en partant)
Auf Wiedersehen!||Au revoir !
Bis später!||À plus tard !
Bis morgen!||À demain !
Wie geht's?||Ça va ?
Mir geht es gut, danke.||Je vais bien, merci.
Danke schön!||Merci beaucoup !
Bitte schön!||Je vous en prie !
Gern geschehen.||Avec plaisir. (de rien)
Entschuldigung!||Excusez-moi ! / Pardon !
Es tut mir leid.||Je suis désolé(e).
ja||oui
nein||non
doch||si (après une question négative)
bitte||s'il vous plaît
Ich verstehe nicht.||Je ne comprends pas.
Können Sie das wiederholen?||Pouvez-vous répéter ?
Sprechen Sie bitte langsamer.||Parlez plus lentement, s'il vous plaît.
Wie heißen Sie?||Comment vous appelez-vous ?
Ich heiße …||Je m'appelle …
Woher kommen Sie?||D'où venez-vous ?
Ich komme aus Frankreich.||Je viens de France.
Freut mich!||Enchanté(e) !
Wie sagt man das auf Deutsch?||Comment dit-on ça en allemand ?
Was bedeutet das?||Qu'est-ce que ça veut dire ?
Kein Problem.||Pas de problème.
Alles klar!||D'accord ! / C'est compris !
Viel Glück!||Bonne chance !
Schönes Wochenende!||Bon week-end !
Herzlich willkommen!||Bienvenue !
Prost!||Santé ! (en trinquant)
Guten Appetit!||Bon appétit !
# temps|Temps & calendrier|Jours, mois, saisons, moments de la journée
der Tag|Tage|le jour
die Woche|Wochen|la semaine
der Monat|Monate|le mois
das Jahr|Jahre|l'année
die Stunde|Stunden|l'heure (durée)
die Minute|Minuten|la minute
die Uhr|Uhren|l'horloge, la montre ; … heures
der Morgen|Morgen|le matin
der Vormittag|Vormittage|la matinée
der Mittag|Mittage|le midi
der Nachmittag|Nachmittage|l'après-midi
der Abend|Abende|le soir
die Nacht|Nächte|la nuit
der Montag|Montage|lundi
der Dienstag|Dienstage|mardi
der Mittwoch|Mittwoche|mercredi
der Donnerstag|Donnerstage|jeudi
der Freitag|Freitage|vendredi
der Samstag|Samstage|samedi
der Sonntag|Sonntage|dimanche
das Wochenende|Wochenenden|le week-end
der Januar|—|janvier
der Februar|—|février
der März|—|mars
der April|—|avril
der Mai|—|mai
der Juni|—|juin
der Juli|—|juillet
der August|—|août
der September|—|septembre
der Oktober|—|octobre
der November|—|novembre
der Dezember|—|décembre
der Frühling|Frühlinge|le printemps
der Sommer|Sommer|l'été
der Herbst|Herbste|l'automne
der Winter|Winter|l'hiver
der Termin|Termine|le rendez-vous
der Feiertag|Feiertage|le jour férié
der Geburtstag|Geburtstage|l'anniversaire
heute||aujourd'hui
morgen||demain
gestern||hier
übermorgen||après-demain
jetzt||maintenant
bald||bientôt
später||plus tard
immer||toujours
oft||souvent
manchmal||parfois
nie||jamais
Wie spät ist es?||Quelle heure est-il ?
Es ist halb drei.||Il est deux heures et demie.
# nombres|Nombres|Compter, payer, donner l'heure
null||zéro
eins||un
zwei||deux
drei||trois
vier||quatre
fünf||cinq
sechs||six
sieben||sept
acht||huit
neun||neuf
zehn||dix
elf||onze
zwölf||douze
dreizehn||treize
sechzehn||seize
siebzehn||dix-sept
zwanzig||vingt
einundzwanzig||vingt et un
dreißig||trente
vierzig||quarante
fünfzig||cinquante
sechzig||soixante
siebzig||soixante-dix
achtzig||quatre-vingts
neunzig||quatre-vingt-dix
hundert||cent
tausend||mille
die Million|Millionen|le million
die Zahl|Zahlen|le nombre
die Hälfte|Hälften|la moitié
das Viertel|Viertel|le quart
erste||premier
zweite||deuxième
dritte||troisième
# famille|Famille & entourage|Les proches, les voisins, la situation familiale
die Familie|Familien|la famille
die Eltern (Pl.)|—|les parents
die Mutter|Mütter|la mère
der Vater|Väter|le père
das Kind|Kinder|l'enfant
der Sohn|Söhne|le fils
die Tochter|Töchter|la fille (enfant de)
der Bruder|Brüder|le frère
die Schwester|Schwestern|la sœur
die Geschwister (Pl.)|—|les frères et sœurs
die Großeltern (Pl.)|—|les grands-parents
die Oma|Omas|la mamie
der Opa|Opas|le papi
der Onkel|Onkel|l'oncle
die Tante|Tanten|la tante
der Mann|Männer|l'homme ; le mari
die Frau|Frauen|la femme ; Madame
der Freund|Freunde|l'ami ; le petit ami
die Freundin|Freundinnen|l'amie ; la petite amie
der Nachbar|Nachbarn|le voisin
die Nachbarin|Nachbarinnen|la voisine
das Baby|Babys|le bébé
der Junge|Jungen|le garçon
das Mädchen|Mädchen|la fille (jeune fille)
die Leute (Pl.)|—|les gens
der Hund|Hunde|le chien
die Katze|Katzen|le chat
verheiratet||marié(e)
ledig||célibataire
geschieden||divorcé(e)
~heiraten|heiratet · heiratete · hat geheiratet|se marier
~besuchen|besucht · besuchte · hat besucht|rendre visite à
# logement|Logement|Appartement, meubles, location
die Wohnung|Wohnungen|l'appartement
das Haus|Häuser|la maison
das Zimmer|Zimmer|la pièce, la chambre
die Küche|Küchen|la cuisine
das Bad|Bäder|la salle de bains
das Schlafzimmer|Schlafzimmer|la chambre à coucher
das Wohnzimmer|Wohnzimmer|le salon
der Flur|Flure|le couloir, l'entrée
der Balkon|Balkone|le balcon
der Keller|Keller|la cave
die Toilette|Toiletten|les toilettes
die Tür|Türen|la porte
das Fenster|Fenster|la fenêtre
die Treppe|Treppen|l'escalier
das Stockwerk|Stockwerke|l'étage
der Aufzug|Aufzüge|l'ascenseur
der Schlüssel|Schlüssel|la clé
die Miete|Mieten|le loyer
die Nebenkosten (Pl.)|—|les charges
der Vermieter|Vermieter|le propriétaire (bailleur)
der Mieter|Mieter|le locataire
die Kaution|Kautionen|la caution
der Mietvertrag|Mietverträge|le bail
das Bett|Betten|le lit
der Tisch|Tische|la table
der Stuhl|Stühle|la chaise
der Schrank|Schränke|l'armoire, le placard
das Sofa|Sofas|le canapé
die Lampe|Lampen|la lampe
der Kühlschrank|Kühlschränke|le réfrigérateur
die Waschmaschine|Waschmaschinen|la machine à laver
die Heizung|Heizungen|le chauffage
der Müll|—|les ordures
die Mülltonne|Mülltonnen|la poubelle (conteneur)
der Briefkasten|Briefkästen|la boîte aux lettres
~umziehen|zieht um · zog um · ist umgezogen|déménager
~mieten|mietet · mietete · hat gemietet|louer (en tant que locataire)
~putzen|putzt · putzte · hat geputzt|nettoyer
~lüften|lüftet · lüftete · hat gelüftet|aérer
gemütlich||confortable, douillet
# cuisine|Cuisine & aliments|Ce qu'on mange, ce qu'on boit, la vaisselle
das Essen|—|la nourriture, le repas
das Frühstück|Frühstücke|le petit-déjeuner
das Mittagessen|Mittagessen|le déjeuner
das Abendessen|Abendessen|le dîner
das Brot|Brote|le pain
das Brötchen|Brötchen|le petit pain
die Butter|—|le beurre
der Käse|Käse|le fromage
die Wurst|Würste|la saucisse, la charcuterie
das Fleisch|—|la viande
das Hähnchen|Hähnchen|le poulet
der Fisch|Fische|le poisson
das Ei|Eier|l'œuf
die Milch|—|le lait
der Joghurt|Joghurts|le yaourt
das Gemüse|—|les légumes
das Obst|—|les fruits
der Apfel|Äpfel|la pomme
die Banane|Bananen|la banane
die Kartoffel|Kartoffeln|la pomme de terre
die Tomate|Tomaten|la tomate
die Zwiebel|Zwiebeln|l'oignon
der Salat|Salate|la salade
der Reis|—|le riz
die Nudeln (Pl.)|—|les pâtes
das Salz|—|le sel
der Pfeffer|—|le poivre
der Zucker|—|le sucre
der Kuchen|Kuchen|le gâteau
das Wasser|—|l'eau
der Saft|Säfte|le jus
der Kaffee|Kaffees|le café (boisson)
der Tee|Tees|le thé
das Bier|Biere|la bière
der Wein|Weine|le vin
der Topf|Töpfe|la casserole
die Pfanne|Pfannen|la poêle
der Teller|Teller|l'assiette
die Tasse|Tassen|la tasse
das Glas|Gläser|le verre
das Messer|Messer|le couteau
die Gabel|Gabeln|la fourchette
der Löffel|Löffel|la cuillère
~kochen|kocht · kochte · hat gekocht|cuisiner ; faire bouillir
lecker||délicieux
Ich habe Hunger.||J'ai faim.
Ich habe Durst.||J'ai soif.
# courses|Courses|Magasins, caisse, prix
der Supermarkt|Supermärkte|le supermarché
die Bäckerei|Bäckereien|la boulangerie
die Metzgerei|Metzgereien|la boucherie
die Apotheke|Apotheken|la pharmacie
die Drogerie|Drogerien|la droguerie (hygiène, ménage)
der Markt|Märkte|le marché
das Geschäft|Geschäfte|le magasin
die Kasse|Kassen|la caisse
der Kassenbon|Kassenbons|le ticket de caisse
die Tüte|Tüten|le sachet, le sac
der Einkaufswagen|Einkaufswagen|le chariot
das Pfand|—|la consigne
die Flasche|Flaschen|la bouteille
die Dose|Dosen|la boîte de conserve, la canette
die Packung|Packungen|le paquet
das Kilo|Kilos|le kilo
das Gramm|Gramm|le gramme
der Preis|Preise|le prix
das Angebot|Angebote|l'offre, la promotion
das Bargeld|—|l'argent liquide
die Karte|Karten|la carte
der Euro|Euro|l'euro
der Cent|Cent|le centime
~kaufen|kauft · kaufte · hat gekauft|acheter
~einkaufen|kauft ein · kaufte ein · hat eingekauft|faire les courses
~bezahlen|bezahlt · bezahlte · hat bezahlt|payer
~kosten|kostet · kostete · hat gekostet|coûter
billig||bon marché
teuer||cher
günstig||avantageux, pas cher
geöffnet||ouvert
geschlossen||fermé
Wie viel kostet das?||Combien ça coûte ?
Kann ich mit Karte zahlen?||Je peux payer par carte ?
Brauchen Sie eine Tüte?||Vous voulez un sac ?
Ich schaue nur.||Je regarde seulement.
# resto|Restaurant & café|Commander, payer, réserver
das Restaurant|Restaurants|le restaurant
das Café|Cafés|le café (lieu)
die Kneipe|Kneipen|le bistrot, le bar
die Speisekarte|Speisekarten|la carte (des plats)
die Rechnung|Rechnungen|l'addition ; la facture
das Trinkgeld|Trinkgelder|le pourboire
der Kellner|Kellner|le serveur
die Kellnerin|Kellnerinnen|la serveuse
die Vorspeise|Vorspeisen|l'entrée
das Hauptgericht|Hauptgerichte|le plat principal
die Nachspeise|Nachspeisen|le dessert
die Suppe|Suppen|la soupe
das Getränk|Getränke|la boisson
~bestellen|bestellt · bestellte · hat bestellt|commander
~reservieren|reserviert · reservierte · hat reserviert|réserver
vegetarisch||végétarien
scharf||épicé
Die Karte, bitte.||La carte, s'il vous plaît.
Ich hätte gern einen Kaffee.||Je voudrais un café.
Die Rechnung, bitte.||L'addition, s'il vous plaît.
Zusammen oder getrennt?||Ensemble ou séparément ?
Stimmt so.||Gardez la monnaie.
Ist hier noch frei?||Cette place est libre ?
Einen Tisch für zwei, bitte.||Une table pour deux, s'il vous plaît.
Was empfehlen Sie?||Que recommandez-vous ?
# transports|Transports & ville|Se déplacer, s'orienter
der Bahnhof|Bahnhöfe|la gare
der Zug|Züge|le train
der Bus|Busse|le bus
die Straßenbahn|Straßenbahnen|le tramway
die U-Bahn|U-Bahnen|le métro
die S-Bahn|S-Bahnen|le train de banlieue (RER)
die Haltestelle|Haltestellen|l'arrêt
das Gleis|Gleise|la voie (le quai)
die Fahrkarte|Fahrkarten|le billet
der Fahrplan|Fahrpläne|l'horaire
die Verspätung|Verspätungen|le retard
das Auto|Autos|la voiture
das Fahrrad|Fahrräder|le vélo
der Flughafen|Flughäfen|l'aéroport
die Straße|Straßen|la rue
die Ampel|Ampeln|le feu (de circulation)
die Kreuzung|Kreuzungen|le carrefour
die Ecke|Ecken|le coin
der Platz|Plätze|la place
die Brücke|Brücken|le pont
die Stadt|Städte|la ville
das Dorf|Dörfer|le village
die Innenstadt|Innenstädte|le centre-ville
die Kirche|Kirchen|l'église
der Park|Parks|le parc
die Post|—|la poste
der Führerschein|Führerscheine|le permis de conduire
~fahren|fährt · fuhr · ist gefahren|aller (en véhicule), conduire
~umsteigen|steigt um · stieg um · ist umgestiegen|changer (de train, de ligne)
~einsteigen|steigt ein · stieg ein · ist eingestiegen|monter (dans un véhicule)
~aussteigen|steigt aus · stieg aus · ist ausgestiegen|descendre (d'un véhicule)
links||à gauche
rechts||à droite
geradeaus||tout droit
weit||loin
in der Nähe||à proximité
Wo ist die Haltestelle?||Où est l'arrêt ?
Wie komme ich zum Bahnhof?||Comment je vais à la gare ?
hin und zurück||aller-retour
Nächster Halt||Prochain arrêt
# travail|Travail|Bureau, contrat, candidature
die Arbeit|Arbeiten|le travail
der Job|Jobs|le boulot
der Beruf|Berufe|le métier
die Stelle|Stellen|le poste (emploi)
die Firma|Firmen|l'entreprise
das Büro|Büros|le bureau (lieu)
der Chef|Chefs|le chef
die Chefin|Chefinnen|la cheffe
der Kollege|Kollegen|le collègue
die Kollegin|Kolleginnen|la collègue
das Gehalt|Gehälter|le salaire
der Vertrag|Verträge|le contrat
die Bewerbung|Bewerbungen|la candidature
der Lebenslauf|Lebensläufe|le CV
das Vorstellungsgespräch|Vorstellungsgespräche|l'entretien d'embauche
die Besprechung|Besprechungen|la réunion
der Urlaub|Urlaube|les congés, les vacances
die Pause|Pausen|la pause
die Überstunde|Überstunden|l'heure supplémentaire
der Feierabend|Feierabende|la fin de la journée de travail
der Computer|Computer|l'ordinateur
die E-Mail|E-Mails|l'e-mail
das Handy|Handys|le téléphone portable
die Aufgabe|Aufgaben|la tâche
~arbeiten|arbeitet · arbeitete · hat gearbeitet|travailler
~verdienen|verdient · verdiente · hat verdient|gagner (de l'argent)
~sich bewerben|bewirbt sich · bewarb sich · hat sich beworben|postuler
~kündigen|kündigt · kündigte · hat gekündigt|démissionner ; résilier
pünktlich||ponctuel
krankgeschrieben||en arrêt maladie
Schönen Feierabend!||Bonne fin de journée !
# sante|Santé & corps|Chez le médecin, à la pharmacie
der Körper|Körper|le corps
der Kopf|Köpfe|la tête
das Auge|Augen|l'œil
das Ohr|Ohren|l'oreille
die Nase|Nasen|le nez
der Mund|Münder|la bouche
der Zahn|Zähne|la dent
der Hals|Hälse|le cou ; la gorge
der Arm|Arme|le bras
die Hand|Hände|la main
der Finger|Finger|le doigt
der Bauch|Bäuche|le ventre
der Rücken|Rücken|le dos
das Bein|Beine|la jambe
der Fuß|Füße|le pied
das Herz|Herzen|le cœur
der Arzt|Ärzte|le médecin
die Ärztin|Ärztinnen|la médecin (femme)
die Praxis|Praxen|le cabinet médical
das Krankenhaus|Krankenhäuser|l'hôpital
die Notaufnahme|Notaufnahmen|les urgences
das Medikament|Medikamente|le médicament
das Rezept|Rezepte|l'ordonnance ; la recette
die Krankenkasse|Krankenkassen|la caisse d'assurance maladie
die Versichertenkarte|Versichertenkarten|la carte d'assuré (≈ carte Vitale)
die Krankmeldung|Krankmeldungen|l'arrêt maladie (le certificat)
das Fieber|—|la fièvre
die Erkältung|Erkältungen|le rhume
der Husten|—|la toux
die Schmerzen (Pl.)|—|les douleurs
krank||malade
gesund||en bonne santé
müde||fatigué
Ich habe Kopfschmerzen.||J'ai mal à la tête.
Mir ist schlecht.||J'ai la nausée.
Ich brauche einen Termin.||J'ai besoin d'un rendez-vous.
Gute Besserung!||Bon rétablissement !
# admin|Administration & argent|Démarches, banque, courrier
das Amt|Ämter|l'administration (le service)
das Bürgeramt|Bürgerämter|le bureau des citoyens (≈ mairie)
die Anmeldung|Anmeldungen|la déclaration de domicile ; l'inscription
die Behörde|Behörden|l'autorité administrative
das Formular|Formulare|le formulaire
der Antrag|Anträge|la demande (officielle)
der Ausweis|Ausweise|la carte d'identité
der Reisepass|Reisepässe|le passeport
die Adresse|Adressen|l'adresse
die Unterschrift|Unterschriften|la signature
die Staatsangehörigkeit|Staatsangehörigkeiten|la nationalité
der Wohnsitz|Wohnsitze|le domicile
die Steuer|Steuern|l'impôt
die Steuernummer|Steuernummern|le numéro fiscal
die Versicherung|Versicherungen|l'assurance
die Bank|Banken|la banque
das Konto|Konten|le compte
die Überweisung|Überweisungen|le virement
der Geldautomat|Geldautomaten|le distributeur de billets
das Geld|—|l'argent
der Brief|Briefe|la lettre
das Paket|Pakete|le colis
die Frist|Fristen|le délai
die Gebühr|Gebühren|les frais, la taxe
der Rundfunkbeitrag|—|la redevance audiovisuelle
~ausfüllen|füllt aus · füllte aus · hat ausgefüllt|remplir (un formulaire)
~unterschreiben|unterschreibt · unterschrieb · hat unterschrieben|signer
~sich anmelden|meldet sich an · meldete sich an · hat sich angemeldet|s'inscrire ; déclarer son domicile
~beantragen|beantragt · beantragte · hat beantragt|demander officiellement
~überweisen|überweist · überwies · hat überwiesen|virer (de l'argent)
# vetements|Vêtements|S'habiller, essayer, acheter
die Kleidung|—|les vêtements
die Hose|Hosen|le pantalon
das Hemd|Hemden|la chemise
das T-Shirt|T-Shirts|le t-shirt
der Pullover|Pullover|le pull
die Jacke|Jacken|la veste
der Mantel|Mäntel|le manteau
das Kleid|Kleider|la robe
der Rock|Röcke|la jupe
der Schuh|Schuhe|la chaussure
die Socke|Socken|la chaussette
die Mütze|Mützen|le bonnet
der Schal|Schals|l'écharpe
der Regenschirm|Regenschirme|le parapluie
die Tasche|Taschen|le sac ; la poche
die Größe|Größen|la taille
die Umkleidekabine|Umkleidekabinen|la cabine d'essayage
~anziehen|zieht an · zog an · hat angezogen|mettre (un vêtement)
~anprobieren|probiert an · probierte an · hat anprobiert|essayer (un vêtement)
~passen|passt · passte · hat gepasst|aller (être à la bonne taille)
eng||serré
bequem||confortable
# loisirs|Loisirs & météo|Temps qu'il fait, sorties, sport
das Wetter|—|le temps (météo)
die Sonne|Sonnen|le soleil
der Regen|—|la pluie
der Schnee|—|la neige
der Wind|Winde|le vent
die Wolke|Wolken|le nuage
das Gewitter|Gewitter|l'orage
die Temperatur|Temperaturen|la température
sonnig||ensoleillé
bewölkt||nuageux
Es regnet.||Il pleut.
Es ist kalt.||Il fait froid.
Es ist warm.||Il fait chaud.
die Freizeit|—|le temps libre, les loisirs
das Hobby|Hobbys|le passe-temps
der Sport|—|le sport
das Kino|Kinos|le cinéma
der Film|Filme|le film
das Buch|Bücher|le livre
die Musik|—|la musique
das Konzert|Konzerte|le concert
das Museum|Museen|le musée
der Ausflug|Ausflüge|l'excursion
die Reise|Reisen|le voyage
das Schwimmbad|Schwimmbäder|la piscine
der Verein|Vereine|l'association, le club
das Spiel|Spiele|le jeu ; le match
~spazieren gehen|geht spazieren · ging spazieren · ist spazieren gegangen|se promener
~schwimmen|schwimmt · schwamm · ist geschwommen|nager
~wandern|wandert · wanderte · ist gewandert|faire de la randonnée
~sich treffen|trifft sich · traf sich · hat sich getroffen|se retrouver
Hast du Lust?||Ça te dit ?
# verbes|Verbes essentiels|Les 50 verbes du quotidien, avec leurs formes
~sein|ist · war · ist gewesen|être
~haben|hat · hatte · hat gehabt|avoir
~werden|wird · wurde · ist geworden|devenir
~können|kann · konnte · hat gekonnt|pouvoir, savoir faire
~müssen|muss · musste · hat gemusst|devoir (obligation)
~wollen|will · wollte · hat gewollt|vouloir
~dürfen|darf · durfte · hat gedurft|avoir le droit de
~sollen|soll · sollte · hat gesollt|devoir (consigne, conseil)
~mögen|mag · mochte · hat gemocht|aimer bien
~gehen|geht · ging · ist gegangen|aller (à pied)
~kommen|kommt · kam · ist gekommen|venir
~machen|macht · machte · hat gemacht|faire
~sagen|sagt · sagte · hat gesagt|dire
~sprechen|spricht · sprach · hat gesprochen|parler
~fragen|fragt · fragte · hat gefragt|demander (poser une question)
~antworten|antwortet · antwortete · hat geantwortet|répondre
~wissen|weiß · wusste · hat gewusst|savoir
~kennen|kennt · kannte · hat gekannt|connaître
~verstehen|versteht · verstand · hat verstanden|comprendre
~sehen|sieht · sah · hat gesehen|voir
~hören|hört · hörte · hat gehört|entendre, écouter
~lesen|liest · las · hat gelesen|lire
~schreiben|schreibt · schrieb · hat geschrieben|écrire
~essen|isst · aß · hat gegessen|manger
~trinken|trinkt · trank · hat getrunken|boire
~schlafen|schläft · schlief · hat geschlafen|dormir
~wohnen|wohnt · wohnte · hat gewohnt|habiter
~leben|lebt · lebte · hat gelebt|vivre
~geben|gibt · gab · hat gegeben|donner
~nehmen|nimmt · nahm · hat genommen|prendre
~bringen|bringt · brachte · hat gebracht|apporter
~mitbringen|bringt mit · brachte mit · hat mitgebracht|apporter (avec soi)
~finden|findet · fand · hat gefunden|trouver
~suchen|sucht · suchte · hat gesucht|chercher
~brauchen|braucht · brauchte · hat gebraucht|avoir besoin de
~helfen|hilft · half · hat geholfen|aider
~warten|wartet · wartete · hat gewartet|attendre
~bleiben|bleibt · blieb · ist geblieben|rester
~lernen|lernt · lernte · hat gelernt|apprendre
~gefallen|gefällt · gefiel · hat gefallen|plaire
~glauben|glaubt · glaubte · hat geglaubt|croire
~denken|denkt · dachte · hat gedacht|penser
~öffnen|öffnet · öffnete · hat geöffnet|ouvrir
~schließen|schließt · schloss · hat geschlossen|fermer
~anfangen|fängt an · fing an · hat angefangen|commencer
~aufhören|hört auf · hörte auf · hat aufgehört|arrêter
~aufstehen|steht auf · stand auf · ist aufgestanden|se lever
~anrufen|ruft an · rief an · hat angerufen|téléphoner à
~vergessen|vergisst · vergaß · hat vergessen|oublier
~zeigen|zeigt · zeigte · hat gezeigt|montrer
~verlieren|verliert · verlor · hat verloren|perdre
~liegen|liegt · lag · hat gelegen|être couché, se trouver (à plat)
~sitzen|sitzt · saß · hat gesessen|être assis
~stehen|steht · stand · hat gestanden|être debout, se trouver
~laufen|läuft · lief · ist gelaufen|courir, marcher
~tragen|trägt · trug · hat getragen|porter
# adjectifs|Adjectifs utiles|Décrire les choses et les gens
groß||grand
klein||petit
alt||vieux, âgé
neu||neuf, nouveau
jung||jeune
gut||bon, bien
schlecht||mauvais, mal
schön||beau
hässlich||laid
lang||long
kurz||court
schnell||rapide
langsam||lent
heiß||brûlant, très chaud
kalt||froid
warm||chaud
voll||plein
leer||vide
leicht||léger ; facile
schwer||lourd ; difficile
einfach||simple
schwierig||difficile
richtig||juste, correct
falsch||faux
wichtig||important
laut||bruyant, fort
leise||silencieux, à voix basse
sauber||propre
schmutzig||sale
früh||tôt
spät||tard
nah||proche
freundlich||aimable
nett||sympa
glücklich||heureux
traurig||triste
froh||content
böse||méchant ; fâché
fertig||prêt ; terminé
frei||libre
besetzt||occupé
kaputt||cassé
sicher||sûr
# outils|Mots-outils|Questions, liaisons, quantités
wer?||qui ?
was?||quoi ?
wo?||où ?
wohin?||où (direction) ?
woher?||d'où ?
wann?||quand ?
warum?||pourquoi ?
wie?||comment ?
wie viel?||combien ?
welcher?||lequel ?
und||et
oder||ou
aber||mais
weil||parce que
dass||que (conjonction)
wenn||si ; quand
also||donc
auch||aussi
noch||encore
schon||déjà
nur||seulement
sehr||très
ziemlich||assez (plutôt)
vielleicht||peut-être
zusammen||ensemble
allein||seul
hier||ici
dort||là-bas
alles||tout
nichts||rien
etwas||quelque chose
jemand||quelqu'un
niemand||personne
viel||beaucoup
wenig||peu
genug||assez (suffisamment)
# b2travail|Monde du travail|Carrière, contrat, négociation|B2
die Arbeitsbedingungen (Pl.)|—|les conditions de travail
der Arbeitgeber|Arbeitgeber|l'employeur
der Arbeitnehmer|Arbeitnehmer|le salarié
die Kündigungsfrist|Kündigungsfristen|le préavis
die Probezeit|Probezeiten|la période d'essai
die Gehaltserhöhung|Gehaltserhöhungen|l'augmentation de salaire
die Beförderung|Beförderungen|la promotion
die Weiterbildung|Weiterbildungen|la formation continue
die Fähigkeit|Fähigkeiten|la compétence, la capacité
die Erfahrung|Erfahrungen|l'expérience
die Verantwortung|Verantwortungen|la responsabilité
die Leistung|Leistungen|la performance ; la prestation
der Umsatz|Umsätze|le chiffre d'affaires
der Gewinn|Gewinne|le bénéfice
der Verlust|Verluste|la perte
die Abteilung|Abteilungen|le service, le département
die Geschäftsführung|Geschäftsführungen|la direction
der Betriebsrat|Betriebsräte|le comité d'entreprise
die Gewerkschaft|Gewerkschaften|le syndicat
der Streik|Streiks|la grève
die Teilzeit|—|le temps partiel
die Vollzeit|—|le temps plein
das Homeoffice|Homeoffices|le télétravail
die Arbeitslosigkeit|—|le chômage
die Agentur für Arbeit|—|l'agence pour l'emploi (≈ France Travail)
der Auftrag|Aufträge|la commande, la mission
~verhandeln|verhandelt · verhandelte · hat verhandelt|négocier
~sich weiterbilden|bildet sich weiter · bildete sich weiter · hat sich weitergebildet|se former (en continu)
~befördern|befördert · beförderte · hat befördert|promouvoir
~einstellen|stellt ein · stellte ein · hat eingestellt|embaucher
~entlassen|entlässt · entließ · hat entlassen|licencier
~leiten|leitet · leitete · hat geleitet|diriger
selbstständig||indépendant, à son compte
befristet||à durée déterminée
unbefristet||à durée indéterminée
# b2droit|Droit & démarches|Contrats, recours, assurances, impôts|B2
der Anspruch|Ansprüche|le droit (à), la revendication
die Bescheinigung|Bescheinigungen|l'attestation
der Bescheid|Bescheide|la décision officielle, l'avis
der Widerspruch|Widersprüche|le recours ; la contradiction
die Vollmacht|Vollmachten|la procuration
die Genehmigung|Genehmigungen|l'autorisation
die Aufenthaltserlaubnis|Aufenthaltserlaubnisse|le titre de séjour
die Voraussetzung|Voraussetzungen|la condition préalable
die Bedingung|Bedingungen|la condition
die Kündigung|Kündigungen|la résiliation ; le licenciement
die Mahnung|Mahnungen|la lettre de relance
der Rechtsanwalt|Rechtsanwälte|l'avocat
das Gericht|Gerichte|le tribunal ; le plat (cuisine)
das Gesetz|Gesetze|la loi
die Vorschrift|Vorschriften|la règle, la prescription
die Haftpflichtversicherung|Haftpflichtversicherungen|l'assurance responsabilité civile
der Schaden|Schäden|le dommage
die Steuererklärung|Steuererklärungen|la déclaration d'impôts
der Beitrag|Beiträge|la cotisation ; la contribution
die Rente|Renten|la retraite (pension)
das Kindergeld|—|les allocations familiales
das Bürgergeld|—|le revenu minimum (≈ RSA)
die Unterlagen (Pl.)|—|les documents, le dossier
der Nachweis|Nachweise|le justificatif
~einreichen|reicht ein · reichte ein · hat eingereicht|déposer (un dossier)
~verlängern|verlängert · verlängerte · hat verlängert|prolonger
~Widerspruch einlegen|legt Widerspruch ein · legte Widerspruch ein · hat Widerspruch eingelegt|faire un recours
~genehmigen|genehmigt · genehmigte · hat genehmigt|autoriser
~nachweisen|weist nach · wies nach · hat nachgewiesen|prouver, justifier
~haften|haftet · haftete · hat gehaftet|être responsable (juridiquement)
gültig||valable
fristgerecht||dans les délais
verpflichtet||obligé, tenu de
zuständig||compétent, responsable (de)
# b2sante|Santé & bien-être|Symptômes, traitements, prévention|B2
die Beschwerden (Pl.)|—|les troubles, les maux
die Untersuchung|Untersuchungen|l'examen médical
die Behandlung|Behandlungen|le traitement
die Diagnose|Diagnosen|le diagnostic
der Facharzt|Fachärzte|le médecin spécialiste
der Hausarzt|Hausärzte|le médecin traitant
die Nebenwirkung|Nebenwirkungen|l'effet secondaire
die Impfung|Impfungen|la vaccination
die Allergie|Allergien|l'allergie
die Verletzung|Verletzungen|la blessure
die Entzündung|Entzündungen|l'inflammation
der Blutdruck|—|la tension artérielle
die Ernährung|—|l'alimentation
die Bewegung|Bewegungen|le mouvement ; l'activité physique
der Stress|—|le stress
die Erschöpfung|—|l'épuisement
die Sucht|Süchte|la dépendance, l'addiction
die Vorsorge|—|la prévention (médicale)
~sich erholen|erholt sich · erholte sich · hat sich erholt|se reposer, se rétablir
~sich verletzen|verletzt sich · verletzte sich · hat sich verletzt|se blesser
~behandeln|behandelt · behandelte · hat behandelt|traiter, soigner
~untersuchen|untersucht · untersuchte · hat untersucht|examiner
~verschreiben|verschreibt · verschrieb · hat verschrieben|prescrire
~leiden an|leidet · litt · hat gelitten|souffrir de (+ Dat.)
~vorbeugen|beugt vor · beugte vor · hat vorgebeugt|prévenir (+ Dat.)
ansteckend||contagieux
chronisch||chronique
erschöpft||épuisé
schwanger||enceinte
rezeptpflichtig||sur ordonnance
# b2gesellschaft|Société, politique & médias|Actualité, débats, institutions|B2
die Gesellschaft|Gesellschaften|la société
die Regierung|Regierungen|le gouvernement
die Wahl|Wahlen|l'élection ; le choix
die Partei|Parteien|le parti
der Bundestag|—|le Parlement fédéral
der Bundeskanzler|Bundeskanzler|le chancelier fédéral
die Demokratie|Demokratien|la démocratie
die Meinung|Meinungen|l'opinion
die Freiheit|Freiheiten|la liberté
die Gleichberechtigung|—|l'égalité des droits
die Integration|—|l'intégration
die Einwanderung|Einwanderungen|l'immigration
die Armut|—|la pauvreté
der Wohlstand|—|la prospérité
die Ungleichheit|Ungleichheiten|l'inégalité
die Bildung|—|l'éducation, la formation
die Nachricht|Nachrichten|la nouvelle, l'information
die Zeitung|Zeitungen|le journal
die Sendung|Sendungen|l'émission
der Bericht|Berichte|le rapport, le reportage
die Umfrage|Umfragen|le sondage
die Krise|Krisen|la crise
die Entwicklung|Entwicklungen|le développement, l'évolution
die Herausforderung|Herausforderungen|le défi
der Bürger|Bürger|le citoyen
~wählen|wählt · wählte · hat gewählt|voter ; choisir
~abstimmen|stimmt ab · stimmte ab · hat abgestimmt|voter (sur une question)
~berichten|berichtet · berichtete · hat berichtet|rapporter, faire un reportage
~fordern|fordert · forderte · hat gefordert|exiger, réclamer
~sich engagieren|engagiert sich · engagierte sich · hat sich engagiert|s'engager
~kritisieren|kritisiert · kritisierte · hat kritisiert|critiquer
gesellschaftlich||social, sociétal
politisch||politique
umstritten||controversé
aktuell||actuel
# b2umwelt|Environnement & énergie|Climat, tri, consommation|B2
die Umwelt|—|l'environnement
der Klimawandel|—|le changement climatique
der Umweltschutz|—|la protection de l'environnement
die Energie|Energien|l'énergie
der Strom|—|l'électricité ; le courant
der Verbrauch|—|la consommation
die Nachhaltigkeit|—|la durabilité
die Verschmutzung|Verschmutzungen|la pollution
die Abgase (Pl.)|—|les gaz d'échappement
der Abfall|Abfälle|le déchet
die Mülltrennung|—|le tri des déchets
der Gelbe Sack|gelben Säcke|le sac jaune (emballages)
das Altglas|—|le verre à recycler
die Solaranlage|Solaranlagen|l'installation solaire
die Windkraft|—|l'énergie éolienne
das Kraftwerk|Kraftwerke|la centrale électrique
die Ressource|Ressourcen|la ressource
die Überschwemmung|Überschwemmungen|l'inondation
die Dürre|Dürren|la sécheresse
~verschwenden|verschwendet · verschwendete · hat verschwendet|gaspiller
~sparen|spart · sparte · hat gespart|économiser
~recyceln|recycelt · recycelte · hat recycelt|recycler
~schützen|schützt · schützte · hat geschützt|protéger
~vermeiden|vermeidet · vermied · hat vermieden|éviter
~verbrauchen|verbraucht · verbrauchte · hat verbraucht|consommer
nachhaltig||durable
umweltfreundlich||écologique
erneuerbar||renouvelable
klimaneutral||neutre en carbone
# b2gefuehle|Sentiments & relations|Caractère, émotions, vie à deux|B2
das Gefühl|Gefühle|le sentiment
die Beziehung|Beziehungen|la relation
das Vertrauen|—|la confiance
die Eifersucht|—|la jalousie
die Enttäuschung|Enttäuschungen|la déception
die Sehnsucht|Sehnsüchte|le désir ardent, la nostalgie
die Geduld|—|la patience
der Streit|—|la dispute
die Versöhnung|Versöhnungen|la réconciliation
das Missverständnis|Missverständnisse|le malentendu
die Rücksicht|—|les égards
der Eindruck|Eindrücke|l'impression
die Stimmung|Stimmungen|l'ambiance, l'humeur
~sich verlieben|verliebt sich · verliebte sich · hat sich verliebt|tomber amoureux
~sich trennen|trennt sich · trennte sich · hat sich getrennt|se séparer
~sich streiten|streitet sich · stritt sich · hat sich gestritten|se disputer
~vermissen|vermisst · vermisste · hat vermisst|regretter l'absence de
~enttäuschen|enttäuscht · enttäuschte · hat enttäuscht|décevoir
~vertrauen|vertraut · vertraute · hat vertraut|faire confiance à (+ Dat.)
~sich schämen|schämt sich · schämte sich · hat sich geschämt|avoir honte
~sich aufregen|regt sich auf · regte sich auf · hat sich aufgeregt|s'énerver
zuverlässig||fiable
ehrgeizig||ambitieux
eifersüchtig||jaloux
geduldig||patient
ungeduldig||impatient
neugierig||curieux
schüchtern||timide
selbstbewusst||sûr de soi
großzügig||généreux
hilfsbereit||serviable
empfindlich||sensible, susceptible
gelassen||serein, détendu
enttäuscht||déçu
verlegen||gêné
# b2argumenter|Argumenter & nuancer|Connecteurs et formules pour donner son avis|B2
meiner Meinung nach||à mon avis
Ich bin der Ansicht, dass …||Je suis d'avis que …
einerseits … andererseits||d'un côté … de l'autre
trotzdem||malgré tout, quand même
deshalb||c'est pourquoi
dennoch||néanmoins
obwohl||bien que
während||pendant que ; tandis que
sobald||dès que
falls||au cas où
außerdem||en outre
allerdings||toutefois, cependant
zwar … aber||certes … mais
je … desto||plus … plus
sowohl … als auch||aussi bien … que
weder … noch||ni … ni
stattdessen||à la place
im Gegensatz zu||contrairement à
im Vergleich zu||par rapport à
aufgrund||en raison de (+ Gen.)
trotz||malgré (+ Gen.)
anstatt||au lieu de
infolgedessen||par conséquent
letztendlich||en fin de compte
beispielsweise||par exemple
Es kommt darauf an.||Ça dépend.
Das hängt davon ab, ob …||Cela dépend si …
Da bin ich anderer Meinung.||Là, je ne suis pas d'accord.
Ich stimme dir zu.||Je suis d'accord avec toi.
Das stimmt zwar, aber …||C'est vrai, certes, mais …
Ich gebe zu, dass …||J'admets que …
Es ist fraglich, ob …||Il est douteux que …
Ein Vorteil ist, dass …||Un avantage, c'est que …
Ein Nachteil ist, dass …||Un inconvénient, c'est que …
# b2verbes|Verbes à préposition|Les rections à connaître par cœur|B2
~sich kümmern um|kümmert sich · kümmerte sich · hat sich gekümmert|s'occuper de (+ Akk.)
~sich freuen auf|freut sich · freute sich · hat sich gefreut|se réjouir de (à venir, + Akk.)
~sich freuen über|freut sich · freute sich · hat sich gefreut|se réjouir de (présent ou passé, + Akk.)
~sich interessieren für|interessiert sich · interessierte sich · hat sich interessiert|s'intéresser à (+ Akk.)
~sich ärgern über|ärgert sich · ärgerte sich · hat sich geärgert|être fâché contre (+ Akk.)
~sich beschweren über|beschwert sich · beschwerte sich · hat sich beschwert|se plaindre de (+ Akk.)
~sich gewöhnen an|gewöhnt sich · gewöhnte sich · hat sich gewöhnt|s'habituer à (+ Akk.)
~sich erinnern an|erinnert sich · erinnerte sich · hat sich erinnert|se souvenir de (+ Akk.)
~sich bedanken für|bedankt sich · bedankte sich · hat sich bedankt|remercier pour (+ Akk.)
~sich entscheiden für|entscheidet sich · entschied sich · hat sich entschieden|se décider pour (+ Akk.)
~sich verlassen auf|verlässt sich · verließ sich · hat sich verlassen|compter sur (+ Akk.)
~sich bewerben um|bewirbt sich · bewarb sich · hat sich beworben|postuler à (+ Akk.)
~sich beschäftigen mit|beschäftigt sich · beschäftigte sich · hat sich beschäftigt|s'occuper de, travailler sur (+ Dat.)
~sich unterhalten über|unterhält sich · unterhielt sich · hat sich unterhalten|discuter de (+ Akk.)
~sich vorbereiten auf|bereitet sich vor · bereitete sich vor · hat sich vorbereitet|se préparer à (+ Akk.)
~sich konzentrieren auf|konzentriert sich · konzentrierte sich · hat sich konzentriert|se concentrer sur (+ Akk.)
~sich sorgen um|sorgt sich · sorgte sich · hat sich gesorgt|s'inquiéter pour (+ Akk.)
~sich fürchten vor|fürchtet sich · fürchtete sich · hat sich gefürchtet|avoir peur de (+ Dat.)
~warten auf|wartet · wartete · hat gewartet|attendre (+ Akk.)
~denken an|denkt · dachte · hat gedacht|penser à (+ Akk.)
~glauben an|glaubt · glaubte · hat geglaubt|croire en (+ Akk.)
~teilnehmen an|nimmt teil · nahm teil · hat teilgenommen|participer à (+ Dat.)
~abhängen von|hängt ab · hing ab · hat abgehangen|dépendre de (+ Dat.)
~bestehen aus|besteht · bestand · hat bestanden|se composer de (+ Dat.)
~träumen von|träumt · träumte · hat geträumt|rêver de (+ Dat.)
~bitten um|bittet · bat · hat gebeten|demander (quelque chose) (+ Akk.)
~fragen nach|fragt · fragte · hat gefragt|demander (des nouvelles de, le chemin) (+ Dat.)
~achten auf|achtet · achtete · hat geachtet|faire attention à (+ Akk.)
~gehören zu|gehört · gehörte · hat gehört|faire partie de (+ Dat.)
~sorgen für|sorgt · sorgte · hat gesorgt|veiller à, prendre soin de (+ Akk.)
~führen zu|führt · führte · hat geführt|mener à (+ Dat.)
~überzeugen von|überzeugt · überzeugte · hat überzeugt|convaincre de (+ Dat.)
~hinweisen auf|weist hin · wies hin · hat hingewiesen|attirer l'attention sur (+ Akk.)
~verzichten auf|verzichtet · verzichtete · hat verzichtet|renoncer à (+ Akk.)
~zweifeln an|zweifelt · zweifelte · hat gezweifelt|douter de (+ Dat.)
# b2nuances|Adjectifs & adverbes nuancés|Pour décrire avec précision|B2
offensichtlich||manifestement, évident
eindeutig||clair, sans équivoque
angeblich||soi-disant, prétendument
anscheinend||apparemment
vermutlich||probablement
ausgerechnet||justement (comme par un fait exprès)
ausreichend||suffisant
erheblich||considérable
gewissermaßen||en quelque sorte
überwiegend||majoritairement
vorübergehend||temporaire, provisoire
dauerhaft||durable, permanent
umfangreich||vaste, volumineux
anspruchsvoll||exigeant
aufwendig||coûteux (en temps, en effort)
mühsam||pénible, laborieux
zufällig||par hasard
absichtlich||exprès
rechtzeitig||à temps
ehemalig||ancien (ex-)
vorhanden||disponible, existant
selbstverständlich||évidemment, naturellement
bisher||jusqu'à présent
inzwischen||entre-temps
ständig||constamment
kaum||à peine
überhaupt nicht||pas du tout
eher||plutôt
durchaus||tout à fait
keineswegs||nullement
# b2idiomes|Expressions idiomatiques|Ce que les Allemands disent vraiment|B2
Ich verstehe nur Bahnhof.||Je n'y comprends rien.
Das ist mir Wurst.||Ça m'est égal.
Ich drücke dir die Daumen.||Je croise les doigts pour toi.
Schwein haben||avoir de la chance
Tomaten auf den Augen haben||ne pas voir ce qui crève les yeux
Ich habe die Nase voll.||J'en ai marre.
ins Fettnäpfchen treten||faire une gaffe
auf dem Holzweg sein||faire fausse route
den Nagel auf den Kopf treffen||mettre dans le mille
um den heißen Brei herumreden||tourner autour du pot
Hals- und Beinbruch!||Bonne chance ! (merde !)
Da steppt der Bär.||Il va y avoir de l'ambiance.
Alles hat ein Ende, nur die Wurst hat zwei.||Toute chose a une fin.
etwas auf die lange Bank schieben||remettre à plus tard
=die Katze im Sack kaufen||acheter les yeux fermés
jemandem auf den Keks gehen||taper sur les nerfs de quelqu'un
Das ist nicht mein Bier.||Ce ne sont pas mes affaires.
Das ist mir ein Rätsel.||C'est un mystère pour moi.
unter vier Augen||en tête-à-tête
zwei Fliegen mit einer Klappe schlagen||faire d'une pierre deux coups
Lügen haben kurze Beine.||Le mensonge ne mène pas loin.
Ende gut, alles gut.||Tout est bien qui finit bien.
Übung macht den Meister.||C'est en forgeant qu'on devient forgeron.
`;
const EXRAW = `heiraten|Meine Schwester heiratet im Sommer.|Ma sœur se marie cet été.
besuchen|Am Wochenende besuche ich meine Eltern.|Le week-end, je rends visite à mes parents.
umziehen|Wir ziehen nächsten Monat nach Berlin um.|Nous déménageons à Berlin le mois prochain.
mieten|Ich habe eine kleine Wohnung im Zentrum gemietet.|J'ai loué un petit appartement dans le centre.
putzen|Samstags putzen wir die ganze Wohnung.|Le samedi, nous nettoyons tout l'appartement.
lüften|Bitte lüfte das Zimmer, es ist so warm hier.|Aère la pièce s'il te plaît, il fait si chaud ici.
kochen|Heute Abend koche ich Nudeln mit Tomatensoße.|Ce soir, je fais des pâtes à la sauce tomate.
kaufen|Ich kaufe noch schnell Brot beim Bäcker.|Je vais vite acheter du pain chez le boulanger.
einkaufen|Ich kaufe nach der Arbeit im Supermarkt ein.|Je fais les courses au supermarché après le travail.
bezahlen|Kann ich hier mit Karte bezahlen?|Je peux payer par carte ici ?
kosten|Die Fahrkarte kostet drei Euro zwanzig.|Le billet coûte trois euros vingt.
bestellen|Ich bestelle ein Schnitzel und ein Wasser.|Je commande une escalope et une eau.
reservieren|Ich möchte einen Tisch für vier Personen reservieren.|Je voudrais réserver une table pour quatre personnes.
fahren|Morgen fahre ich mit dem Zug nach München.|Demain, je vais à Munich en train.
umsteigen|In Frankfurt müssen Sie umsteigen.|À Francfort, vous devez changer de train.
einsteigen|Bitte steigen Sie ein, der Zug fährt gleich ab.|Montez s'il vous plaît, le train va partir.
aussteigen|Ich steige an der nächsten Haltestelle aus.|Je descends au prochain arrêt.
arbeiten|Ich arbeite von Montag bis Freitag im Büro.|Je travaille au bureau du lundi au vendredi.
verdienen|Er verdient mehr als vorher.|Il gagne plus qu'avant.
sich bewerben|Ich habe mich bei drei Firmen beworben.|J'ai postulé dans trois entreprises.
kündigen|Ich habe meinen Handyvertrag gekündigt.|J'ai résilié mon forfait de portable.
ausfüllen|Füllen Sie bitte dieses Formular aus.|Remplissez ce formulaire, s'il vous plaît.
unterschreiben|Bitte unterschreiben Sie hier unten.|Signez ici en bas, s'il vous plaît.
sich anmelden|Nach dem Umzug muss man sich beim Bürgeramt anmelden.|Après un déménagement, il faut déclarer son domicile au bureau des citoyens.
beantragen|Ich muss einen neuen Reisepass beantragen.|Je dois faire une demande de nouveau passeport.
überweisen|Ich überweise dir das Geld morgen.|Je te vire l'argent demain.
anziehen|Zieh dir eine Jacke an, es ist kalt!|Mets une veste, il fait froid !
anprobieren|Kann ich diese Hose anprobieren?|Je peux essayer ce pantalon ?
passen|Die Schuhe passen mir leider nicht.|Malheureusement, ces chaussures ne me vont pas.
spazieren gehen|Nach dem Essen gehen wir im Park spazieren.|Après le repas, nous allons nous promener dans le parc.
schwimmen|Im Sommer schwimme ich gern im See.|L'été, j'aime nager dans le lac.
wandern|Am Sonntag sind wir in den Bergen gewandert.|Dimanche, nous avons fait de la randonnée en montagne.
sich treffen|Wir treffen uns um acht vor dem Kino.|On se retrouve à huit heures devant le cinéma.
sein|Ich bin seit zwei Monaten in Deutschland.|Je suis en Allemagne depuis deux mois.
haben|Hast du heute Abend Zeit?|Tu as le temps ce soir ?
werden|Es wird langsam dunkel.|Il commence à faire nuit.
können|Kannst du mir bitte helfen?|Tu peux m'aider, s'il te plaît ?
müssen|Ich muss morgen früh aufstehen.|Je dois me lever tôt demain.
wollen|Wir wollen nächstes Jahr nach Italien fahren.|Nous voulons aller en Italie l'année prochaine.
dürfen|Hier darf man nicht rauchen.|Ici, on n'a pas le droit de fumer.
sollen|Der Arzt sagt, ich soll mehr Wasser trinken.|Le médecin dit que je dois boire plus d'eau.
mögen|Ich mag keinen Kaffee ohne Milch.|Je n'aime pas le café sans lait.
gehen|Ich gehe jeden Morgen zu Fuß zur Arbeit.|Je vais au travail à pied tous les matins.
kommen|Wann kommst du nach Hause?|Quand est-ce que tu rentres à la maison ?
machen|Was machst du am Wochenende?|Qu'est-ce que tu fais ce week-end ?
sagen|Was hat er gesagt? Ich habe es nicht gehört.|Qu'est-ce qu'il a dit ? Je ne l'ai pas entendu.
sprechen|Sprechen Sie Französisch?|Vous parlez français ?
fragen|Ich frage mal den Verkäufer.|Je vais demander au vendeur.
antworten|Sie hat noch nicht auf meine E-Mail geantwortet.|Elle n'a pas encore répondu à mon e-mail.
wissen|Weißt du, wo die Post ist?|Tu sais où est la poste ?
kennen|Kennst du ein gutes Restaurant hier?|Tu connais un bon restaurant ici ?
verstehen|Entschuldigung, ich habe das nicht verstanden.|Pardon, je n'ai pas compris.
sehen|Siehst du die Haltestelle dort drüben?|Tu vois l'arrêt là-bas ?
hören|Ich höre gern Radio beim Frühstück.|J'aime écouter la radio au petit-déjeuner.
lesen|Sie liest jeden Abend ein bisschen.|Elle lit un peu chaque soir.
schreiben|Ich schreibe dir später eine Nachricht.|Je t'écris un message plus tard.
essen|Wir essen um sieben zu Abend.|Nous dînons à sept heures.
trinken|Was möchtest du trinken?|Qu'est-ce que tu veux boire ?
schlafen|Ich habe heute Nacht schlecht geschlafen.|J'ai mal dormi cette nuit.
wohnen|Ich wohne im dritten Stock.|J'habite au troisième étage.
leben|Sie lebt seit fünf Jahren in Hamburg.|Elle vit à Hambourg depuis cinq ans.
geben|Kannst du mir bitte das Salz geben?|Tu peux me passer le sel, s'il te plaît ?
nehmen|Ich nehme den Bus um halb neun.|Je prends le bus de huit heures et demie.
bringen|Der Kellner bringt die Rechnung.|Le serveur apporte l'addition.
mitbringen|Soll ich etwas zum Essen mitbringen?|Je dois apporter quelque chose à manger ?
finden|Ich finde meinen Schlüssel nicht.|Je ne trouve pas ma clé.
suchen|Wir suchen eine größere Wohnung.|Nous cherchons un appartement plus grand.
brauchen|Ich brauche einen Termin beim Arzt.|J'ai besoin d'un rendez-vous chez le médecin.
helfen|Kann ich Ihnen helfen?|Je peux vous aider ?
warten|Ich warte schon seit zwanzig Minuten.|J'attends depuis déjà vingt minutes.
bleiben|Heute bleibe ich zu Hause.|Aujourd'hui, je reste à la maison.
lernen|Ich lerne jeden Tag zehn neue Wörter.|J'apprends dix nouveaux mots chaque jour.
gefallen|Wie gefällt dir die neue Wohnung?|Comment tu trouves le nouvel appartement ?
glauben|Ich glaube, der Laden ist heute geschlossen.|Je crois que le magasin est fermé aujourd'hui.
denken|Was denkst du darüber?|Qu'est-ce que tu en penses ?
öffnen|Die Bäckerei öffnet um sechs Uhr.|La boulangerie ouvre à six heures.
schließen|Bitte schließen Sie die Tür.|Fermez la porte, s'il vous plaît.
anfangen|Der Kurs fängt um neun Uhr an.|Le cours commence à neuf heures.
aufhören|Er hat mit dem Rauchen aufgehört.|Il a arrêté de fumer.
aufstehen|Ich stehe jeden Tag um sieben auf.|Je me lève tous les jours à sept heures.
anrufen|Ich rufe dich heute Abend an.|Je t'appelle ce soir.
vergessen|Ich habe meinen Regenschirm vergessen.|J'ai oublié mon parapluie.
zeigen|Können Sie mir den Weg auf der Karte zeigen?|Pouvez-vous me montrer le chemin sur la carte ?
verlieren|Ich habe mein Portemonnaie verloren.|J'ai perdu mon porte-monnaie.
liegen|Das Handy liegt auf dem Tisch.|Le portable est sur la table.
sitzen|Wir sitzen auf dem Balkon und trinken Kaffee.|Nous sommes assis sur le balcon et buvons un café.
stehen|Die Flaschen stehen im Kühlschrank.|Les bouteilles sont dans le réfrigérateur.
laufen|Ich laufe dreimal pro Woche im Park.|Je cours trois fois par semaine dans le parc.
tragen|Sie trägt heute ein rotes Kleid.|Elle porte une robe rouge aujourd'hui.
verhandeln|Ich will über mein Gehalt verhandeln.|Je veux négocier mon salaire.
sich weiterbilden|Sie bildet sich abends im Bereich Marketing weiter.|Elle se forme le soir dans le domaine du marketing.
befördern|Nach zwei Jahren wurde er zum Teamleiter befördert.|Après deux ans, il a été promu chef d'équipe.
einstellen|Die Firma stellt dieses Jahr zehn neue Mitarbeiter ein.|L'entreprise embauche dix nouveaux employés cette année.
entlassen|Wegen der Krise wurden viele Mitarbeiter entlassen.|À cause de la crise, beaucoup d'employés ont été licenciés.
leiten|Sie leitet die Abteilung seit drei Jahren.|Elle dirige le service depuis trois ans.
einreichen|Sie müssen die Unterlagen bis Freitag einreichen.|Vous devez déposer les documents avant vendredi.
verlängern|Ich muss meine Aufenthaltserlaubnis verlängern.|Je dois prolonger mon titre de séjour.
Widerspruch einlegen|Gegen diesen Bescheid können Sie innerhalb eines Monats Widerspruch einlegen.|Vous pouvez faire un recours contre cette décision dans un délai d'un mois.
genehmigen|Mein Chef hat meinen Urlaub genehmigt.|Mon chef a accepté ma demande de congés.
nachweisen|Sie müssen Ihr Einkommen nachweisen.|Vous devez justifier de vos revenus.
haften|Eltern haften für ihre Kinder.|Les parents sont responsables de leurs enfants.
sich erholen|Im Urlaub habe ich mich gut erholt.|Je me suis bien reposé pendant les vacances.
sich verletzen|Er hat sich beim Fußball am Knie verletzt.|Il s'est blessé au genou en jouant au foot.
behandeln|Der Arzt behandelt die Entzündung mit Antibiotika.|Le médecin traite l'inflammation avec des antibiotiques.
untersuchen|Die Ärztin untersucht meinen Rücken.|La médecin examine mon dos.
verschreiben|Der Arzt hat mir ein Medikament verschrieben.|Le médecin m'a prescrit un médicament.
leiden an|Viele Menschen leiden an Rückenschmerzen.|Beaucoup de gens souffrent de maux de dos.
vorbeugen|Mit Sport kann man vielen Krankheiten vorbeugen.|Avec le sport, on peut prévenir beaucoup de maladies.
wählen|Im September wählen die Deutschen ein neues Parlament.|En septembre, les Allemands élisent un nouveau Parlement.
abstimmen|Morgen stimmt der Bundestag über das Gesetz ab.|Demain, le Bundestag vote sur la loi.
berichten|Die Zeitung berichtet über den Streik.|Le journal parle de la grève.
fordern|Die Gewerkschaft fordert höhere Löhne.|Le syndicat réclame des salaires plus élevés.
sich engagieren|Sie engagiert sich in einem Verein für Flüchtlinge.|Elle s'engage dans une association pour les réfugiés.
kritisieren|Viele Bürger kritisieren die neue Regel.|Beaucoup de citoyens critiquent la nouvelle règle.
verschwenden|Wir verschwenden zu viele Lebensmittel.|Nous gaspillons trop de nourriture.
sparen|Mit LED-Lampen kann man Strom sparen.|Avec des lampes LED, on peut économiser de l'électricité.
recyceln|Altglas wird in Deutschland fast komplett recycelt.|En Allemagne, le verre usagé est presque entièrement recyclé.
schützen|Wir müssen die Natur besser schützen.|Nous devons mieux protéger la nature.
vermeiden|Ich versuche, Plastik zu vermeiden.|J'essaie d'éviter le plastique.
verbrauchen|Unser Kühlschrank verbraucht zu viel Strom.|Notre réfrigérateur consomme trop d'électricité.
sich verlieben|Sie haben sich im Urlaub ineinander verliebt.|Ils sont tombés amoureux l'un de l'autre en vacances.
sich trennen|Nach zehn Jahren haben sie sich getrennt.|Après dix ans, ils se sont séparés.
sich streiten|Die Nachbarn streiten sich oft laut.|Les voisins se disputent souvent bruyamment.
vermissen|Ich vermisse meine Familie in Frankreich.|Ma famille en France me manque.
enttäuschen|Der Film hat mich enttäuscht.|Le film m'a déçu.
vertrauen|Ich vertraue meinem besten Freund völlig.|Je fais entièrement confiance à mon meilleur ami.
sich schämen|Er schämt sich für seinen Fehler.|Il a honte de son erreur.
sich aufregen|Reg dich nicht auf, es ist nicht so schlimm!|Ne t'énerve pas, ce n'est pas si grave !
sich kümmern um|Wer kümmert sich um die Katze, wenn wir weg sind?|Qui s'occupe du chat quand nous sommes partis ?
sich freuen auf|Ich freue mich schon auf den Urlaub.|J'ai déjà hâte d'être en vacances.
sich freuen über|Sie hat sich sehr über das Geschenk gefreut.|Elle a été très contente du cadeau.
sich interessieren für|Ich interessiere mich für Geschichte.|Je m'intéresse à l'histoire.
sich ärgern über|Er ärgert sich über die Verspätung.|Il est agacé par le retard.
sich beschweren über|Die Nachbarn beschweren sich über den Lärm.|Les voisins se plaignent du bruit.
sich gewöhnen an|Ich habe mich an das Wetter gewöhnt.|Je me suis habitué au temps.
sich erinnern an|Erinnerst du dich an unseren ersten Tag in Berlin?|Tu te souviens de notre premier jour à Berlin ?
sich bedanken für|Ich bedanke mich für Ihre Hilfe.|Je vous remercie pour votre aide.
sich entscheiden für|Wir haben uns für die größere Wohnung entschieden.|Nous avons choisi le plus grand appartement.
sich verlassen auf|Auf sie kann man sich immer verlassen.|On peut toujours compter sur elle.
sich bewerben um|Ich bewerbe mich um eine Stelle als Ingenieur.|Je postule à un poste d'ingénieur.
sich beschäftigen mit|In meiner Freizeit beschäftige ich mich mit Fotografie.|Pendant mon temps libre, je m'intéresse à la photographie.
sich unterhalten über|Wir haben uns lange über Politik unterhalten.|Nous avons longuement discuté de politique.
sich vorbereiten auf|Ich bereite mich auf die Prüfung vor.|Je me prépare à l'examen.
sich konzentrieren auf|Konzentrier dich auf das Wesentliche!|Concentre-toi sur l'essentiel !
sich sorgen um|Die Mutter sorgt sich um ihren kranken Sohn.|La mère s'inquiète pour son fils malade.
sich fürchten vor|Das Kind fürchtet sich vor dem Hund.|L'enfant a peur du chien.
warten auf|Ich warte auf den Bus.|J'attends le bus.
denken an|Ich denke oft an meine Freunde in Paris.|Je pense souvent à mes amis à Paris.
glauben an|Sie glaubt an eine bessere Zukunft.|Elle croit en un avenir meilleur.
teilnehmen an|Ich nehme an einem Deutschkurs teil.|Je participe à un cours d'allemand.
abhängen von|Das hängt vom Wetter ab.|Ça dépend du temps.
bestehen aus|Die Wohnung besteht aus drei Zimmern.|L'appartement se compose de trois pièces.
träumen von|Er träumt von einem Haus am Meer.|Il rêve d'une maison au bord de la mer.
bitten um|Darf ich Sie um einen Gefallen bitten?|Puis-je vous demander un service ?
fragen nach|Ein Tourist hat mich nach dem Weg gefragt.|Un touriste m'a demandé le chemin.
achten auf|Achte bitte auf die Stufe!|Fais attention à la marche, s'il te plaît !
gehören zu|Das gehört zu meinen Aufgaben.|Ça fait partie de mes tâches.
sorgen für|Die Eltern sorgen für ihre Kinder.|Les parents prennent soin de leurs enfants.
führen zu|Zu viel Stress führt oft zu Krankheiten.|Trop de stress mène souvent à des maladies.
überzeugen von|Er hat mich von seiner Idee überzeugt.|Il m'a convaincu de son idée.
hinweisen auf|Ich möchte Sie auf einen Fehler hinweisen.|Je voudrais vous signaler une erreur.
verzichten auf|Ich verzichte seit einem Monat auf Zucker.|Je me passe de sucre depuis un mois.
zweifeln an|Ich zweifle an seiner Ehrlichkeit.|Je doute de son honnêteté.
`;
const GRAMRAW = `@1|Genre et articles|A1
Tout nom allemand a un genre : masculin (**der**), féminin (**die**) ou neutre (**das**). Il ne correspond souvent pas au français (la table = der Tisch), donc apprends toujours un nom avec son article. Les noms prennent toujours une majuscule.
#table
 | Masculin | Féminin | Neutre | Pluriel
Défini (le, la) | der Tisch | die Lampe | das Bett | die Tische
Indéfini (un, une) | ein Tisch | eine Lampe | ein Bett | (des) Tische
Négatif (pas de) | kein Tisch | keine Lampe | kein Bett | keine Tische

#h Indices pour deviner le genre
- **Masculin** : jours, mois, saisons (der Montag, der Mai), noms en -er pour les personnes (der Lehrer), -ling, -ismus.
- **Féminin** : -ung (die Wohnung), -heit, -keit (die Möglichkeit), -schaft, -ion (die Information), -tät, -ie, et la plupart des noms en -e (die Straße).
- **Neutre** : -chen et -lein (das Mädchen), -ment, -um (das Zentrum), verbes nominalisés (das Essen).
- **Nom composé** : c'est le dernier mot qui décide. die Haustür = das Haus + die Tür.
#h Au quotidien
> Ich brauche einen Termin. = J'ai besoin d'un rendez-vous.
> Die Miete ist hoch. = Le loyer est élevé.
> Ich habe kein Auto. = Je n'ai pas de voiture.
#ex Donne l'article défini.
___ Rechnung (facture) = die
___ Brötchen (petit pain) = das
___ Bahnhof (gare) = der
___ Wohnung (appartement) = die
___ Krankenversicherung (assurance maladie) = die

@2|Pronoms personnels et présent|A1
Au présent, on enlève **-en** à l'infinitif et on ajoute la terminaison de la personne. **Sie** avec majuscule est le vouvoiement (singulier et pluriel) ; il se conjugue comme sie (ils).
#table
Pronom | Sens | Terminaison | wohnen | arbeiten | sein | haben
ich | je | -e | wohne | arbeite | bin | habe
du | tu | -st | wohnst | arbeitest | bist | hast
er / sie / es | il / elle | -t | wohnt | arbeitet | ist | hat
wir | nous | -en | wohnen | arbeiten | sind | haben
ihr | vous (plusieurs amis) | -t | wohnt | arbeitet | seid | habt
sie / Sie | ils / vous (poli) | -en | wohnen | arbeiten | sind | haben

#h Pièges
- Radical en -t ou -d (arbeiten, finden) : on ajoute un -e- pour pouvoir prononcer : du arbeitest, er findet.
- Radical en -s, -ß, -z (heißen, tanzen) : du heißt, du tanzt (pas de -sst).
- **man** (on) se conjugue comme er : Hier darf man nicht rauchen.
- Le présent sert aussi pour le futur proche : Morgen gehe ich zum Arzt.
#h Au quotidien
> Ich heiße Loris und ich komme aus Frankreich. = Je m'appelle Loris et je viens de France.
> Haben Sie einen Moment Zeit? = Vous avez un moment ?
> Wir sind neu hier. = Nous sommes nouveaux ici.
#ex Conjugue.
Du ___ (wohnen) in Berlin. = wohnst
Er ___ (arbeiten) bei Siemens. = arbeitet
Ihr ___ (sein) spät. = seid
___ (haben) Sie eine Kundenkarte? = Haben
Wie ___ (heißen) du? = heißt

@3|Verbes forts au présent|A1
Certains verbes changent de voyelle, mais **seulement à du et er/sie/es**. Les autres personnes restent régulières.
#table
Changement | Infinitif | ich | du | er / sie / es | wir
a → ä | fahren (aller en véhicule) | fahre | fährst | fährt | fahren
a → ä | schlafen (dormir) | schlafe | schläfst | schläft | schlafen
au → äu | laufen (courir, marcher) | laufe | läufst | läuft | laufen
e → i | essen (manger) | esse | isst | isst | essen
e → i | sprechen (parler) | spreche | sprichst | spricht | sprechen
e → i | helfen (aider) | helfe | hilfst | hilft | helfen
e → i | geben (donner) | gebe | gibst | gibt | geben
e → ie | sehen (voir) | sehe | siehst | sieht | sehen
e → ie | lesen (lire) | lese | liest | liest | lesen
irrégulier | nehmen (prendre) | nehme | nimmst | nimmt | nehmen
irrégulier | wissen (savoir) | weiß | weißt | weiß | wissen
irrégulier | werden (devenir) | werde | wirst | wird | werden

Autres à connaître : tragen (porter), waschen (laver), vergessen (oublier), treffen (rencontrer), empfehlen (recommander), werfen (jeter).
#h Au quotidien
> Sprichst du Französisch? = Tu parles français ?
> Der Bus fährt um 8 Uhr. = Le bus part à 8 h.
> Ich nehme das Menü 2. = Je prends le menu 2.
> Das weiß ich nicht. = Je ne sais pas.
#ex Conjugue au présent.
Was ___ du heute Abend? (essen) = isst
Er ___ sehr gut Deutsch. (sprechen) = spricht
___ du den Zug? (sehen) = Siehst
Sie (elle) ___ zur Arbeit. (fahren) = fährt
Was ___ Sie mir? (empfehlen, Sie poli) = empfehlen

@4|Ordre des mots|A1
La règle d'or : dans une phrase déclarative, **le verbe conjugué est toujours en 2e position**. Si tu commences par autre chose que le sujet, le sujet passe juste après le verbe (inversion).
#table
Position 1 | Position 2 (verbe) | Reste | Fin (2e partie du verbe)
Ich | gehe | heute ins Kino. |
Heute | gehe | ich ins Kino. |
Ins Kino | gehe | ich heute. |
Ich | möchte | heute ins Kino | gehen.
Ich | habe | gestern einen Film | gesehen.

#h Les types de phrases
- **Question fermée** (oui/non) : le verbe en 1re position. Kommst du mit?
- **Question ouverte** : le mot interrogatif en 1, le verbe en 2. Wann kommst du?
- **Verbe en deux parties** (modal, parfait, particule) : le 2e morceau va à la fin, c'est la « parenthèse verbale ».
#h L'ordre au milieu : Te-Ka-Mo-Lo
Quand il y a plusieurs compléments : Temps (quand), Kause (pourquoi), Modalité (comment), Local (où).
> Ich fahre morgen wegen der Arbeit mit dem Zug nach München. = Je vais demain à Munich en train pour le travail.
**Piège des francophones** : Heute ich gehe → Heute gehe ich. Les mots und, aber, oder, denn, sondern ne comptent pas comme position 1 : Ich bin müde, aber ich gehe arbeiten.
#ex Remets dans l'ordre en commençant par le premier mot.
Am Montag / ich / habe / einen Termin = Am Montag habe ich einen Termin.
Jetzt / wir / essen = Jetzt essen wir.
du / kannst / mir / helfen / ? (question oui/non) = Kannst du mir helfen?
Leider / der Zug / hat / Verspätung = Leider hat der Zug Verspätung.

@5|Négation nicht / kein|A1
**kein** nie un nom précédé de ein ou sans article ; **nicht** nie tout le reste (verbe, adjectif, nom avec der/die/das, nom propre).
#table
Phrase positive | Négation | Pourquoi
Ich habe ein Auto. | Ich habe kein Auto. | ein + nom
Ich brauche Hilfe. | Ich brauche keine Hilfe. | nom sans article
Ich habe Zeit. | Ich habe keine Zeit. | nom sans article
Das ist der Bus nach Hause. | Das ist nicht der Bus nach Hause. | nom avec der
Ich komme. | Ich komme nicht. | verbe
Das ist teuer. | Das ist nicht teuer. | adjectif

kein se décline comme ein (keinen, keinem, keiner…) et a un pluriel : keine Kinder.
#h Où placer nicht ?
- À la fin pour nier toute la phrase : Ich kenne ihn nicht.
- Devant ce qu'on nie : Ich wohne nicht in Berlin. Das ist nicht gut.
- Devant la 2e partie du verbe : Ich habe das nicht gewusst.
- nicht … sondern : Nicht heute, sondern morgen.
Autres négations utiles : nichts (rien), niemand (personne), nie / niemals (jamais), noch nicht (pas encore), nicht mehr (ne… plus), kein … mehr (plus de).
**Répondre à une question négative** : doch = si. Kommst du nicht? → Doch, ich komme!
#ex Mets à la forme négative avec nicht ou kein.
Ich habe ein Konto bei der Bank. = Ich habe kein Konto bei der Bank. || kein Konto
Ich verstehe das. = Ich verstehe das nicht.
Wir haben Milch. = Wir haben keine Milch. || keine Milch
Das Essen ist warm. = Das Essen ist nicht warm. || nicht warm
Er hat Kinder. = Er hat keine Kinder. || keine Kinder

@6|Pluriel des noms|A1
L'article pluriel est toujours **die**, mais la terminaison du nom varie. Apprends le pluriel avec le nom (der Tisch, -e). Ces tendances marchent dans la majorité des cas.
#table
Terminaison | Pour qui surtout | Exemples
-(e)n | presque tous les féminins | die Frau → Frauen, die Wohnung → Wohnungen
-e (souvent + umlaut) | beaucoup de masculins | der Tag → Tage, der Zug → Züge, der Stuhl → Stühle
-er (+ umlaut si possible) | neutres courts | das Kind → Kinder, das Haus → Häuser
rien (parfois umlaut) | masc./neutres en -er, -el, -en, -chen | der Lehrer → Lehrer, der Apfel → Äpfel
-s | mots étrangers, sigles, noms en voyelle | das Auto → Autos, die Kita → Kitas
-nen | féminins en -in | die Lehrerin → Lehrerinnen

#h À retenir
- Au datif pluriel, on ajoute un -n au nom s'il n'en a pas : mit den Kindern (sauf pluriels en -s : mit den Autos).
- Dans un dictionnaire, « der Tisch, -e » veut dire pluriel Tische ; « der Apfel, ¨ » veut dire Äpfel.
- Pluriels irréguliers fréquents : das Museum → Museen, das Visum → Visa.
#h Au quotidien
> Zwei Brötchen, bitte. = Deux petits pains, s'il vous plaît.
> Ich habe drei Kinder. = J'ai trois enfants.
> Die Preise sind gestiegen. = Les prix ont augmenté.
#ex Donne le pluriel (sans l'article).
die Tasche (sac) = Taschen || die Taschen
das Glas (verre) = Gläser || die Gläser
der Freund (ami) = Freunde || die Freunde
die Kollegin (collègue) = Kolleginnen || die Kolleginnen
das Handy (portable) = Handys || die Handys

@7|Les cas : nominatif et accusatif|A1
Le **nominatif** est le sujet (qui fait l'action ?). L'**accusatif** est le complément d'objet direct (qui ? quoi ?). Bonne nouvelle : **seul le masculin change** à l'accusatif.
#table
 | Masculin | Féminin | Neutre | Pluriel
Nominatif | der / ein / kein | die / eine | das / ein | die / keine
Accusatif | den / einen / keinen | die / eine | das / ein | die / keine

#h Comment trouver l'accusatif
- Trouve le verbe, puis le sujet (qui fait l'action ?). Ce qui subit l'action directement est à l'accusatif.
> Der Mann kauft den Kaffee. = L'homme achète le café.
> Den Kaffee kauft der Mann. = Même sens : c'est l'article qui dit qui fait quoi.
**Verbes suivis de l'accusatif** : haben, brauchen, kaufen, suchen, finden, nehmen, sehen, kennen, mögen, bestellen, bezahlen, es gibt (il y a).
**Piège** : sein, werden et heißen ne prennent pas d'accusatif : Das ist der Chef.
#h Au quotidien
> Ich suche einen Job. = Je cherche un travail.
> Es gibt keinen Parkplatz. = Il n'y a pas de place de parking.
> Ich nehme den Salat. = Je prends la salade.
#ex Complète avec l'article.
Ich brauche ___ (ein) Stift. (der Stift) = einen
Wir suchen ___ (die) Wohnung. = die
___ (der) Hund bellt. = Der
Hast du ___ (der) Schlüssel? = den
Es gibt ___ (kein) Aufzug. (der Aufzug) = keinen

@8|Le datif|A1–A2
Le datif est souvent le complément d'objet indirect : à qui ? pour qui ? (**wem?**). On le trouve aussi après certaines prépositions (fiche 10) et certains verbes.
#table
 | Masculin | Féminin | Neutre | Pluriel
Nominatif | der / ein | die / eine | das / ein | die / –
Accusatif | den / einen | die / eine | das / ein | die / –
Datif | dem / einem | der / einer | dem / einem | den + nom en -n

**Astuce** : au datif, masculin et neutre finissent en -m, féminin en -r, pluriel en -n (« M-R-M-N »).
Deux objets : en général la personne (datif) avant la chose (accusatif).
> Ich gebe dem Vermieter den Schlüssel. = Je donne la clé au propriétaire.
#h Verbes qui veulent le datif seul
helfen, danken, antworten, gefallen, gehören, passen, schmecken, gratulieren, folgen, fehlen.
> Kann ich Ihnen helfen? = Je peux vous aider ?
> Das Essen schmeckt mir. = J'aime ce plat.
> Wem gehört das Fahrrad? = À qui est ce vélo ?
**Verbes à double objet** (datif + accusatif) : geben, schenken, zeigen, schicken, erklären, leihen, bringen.
#ex Complète au bon cas.
Ich helfe ___ (der) Nachbarin. = der
Wir danken ___ (die) Kollegen. (pluriel) = den
Er zeigt ___ (das) Kind ___ (der) Weg. (2 mots) = dem den
Die Jacke gehört ___ (ein) Freund. = einem
Ich gebe ___ (die) Kassiererin das Geld. = der

@9|Pronoms aux cas et possessifs|A1–A2
Les pronoms changent selon le cas, comme les articles.
#table
Nominatif | Accusatif | Datif | Possessif
ich | mich | mir | mein
du | dich | dir | dein
er | ihn | ihm | sein
sie (elle) | sie | ihr | ihr
es | es | ihm | sein
wir | uns | uns | unser
ihr | euch | euch | euer
sie (ils) | sie | ihnen | ihr
Sie (poli) | Sie | Ihnen | Ihr

> Ruf mich an! = Appelle-moi !
#h Le possessif se décline comme ein / kein
#table
 | Masculin | Féminin | Neutre | Pluriel
Nominatif | mein | meine | mein | meine
Accusatif | meinen | meine | mein | meine
Datif | meinem | meiner | meinem | meinen

#h Pièges
- sein = de lui, ihr = d'elle. Le possessif dépend du possesseur, la terminaison du nom possédé : Er besucht seine Mutter. Sie besucht ihren Vater.
- euer perd son -e- avec une terminaison : eure Wohnung.
- Deux pronoms : accusatif avant datif. Ich gebe es ihm. Mais : Ich gebe ihm das Buch.
#ex Complète.
Kannst du ___ (ich) die Adresse schicken? = mir
Ich kenne ___ (er) nicht. = ihn
Wie geht es ___ (Sie)? = Ihnen
Das ist ___ (mon) Ausweis. (der Ausweis) = mein
Ich suche ___ (ma) Brille. (die Brille) = meine
Sie (elle) ruft ___ (son) Bruder an. = ihren

@10|Prépositions|A1–A2
Chaque préposition impose un cas. Il y a trois groupes à apprendre par cœur.
#table
Groupe | Prépositions | Exemple
Toujours accusatif | durch, für, gegen, ohne, um, bis | Das ist für den Chef.
Toujours datif | aus, bei, mit, nach, seit, von, zu, gegenüber | Ich fahre mit dem Bus.
Mixtes | in, an, auf, über, unter, vor, hinter, neben, zwischen | Ich bin im Büro. / Ich gehe ins Büro.

**Mnémo** : accusatif = DOGFUB (durch, ohne, gegen, für, um, bis) ; datif = « aus-bei-mit-nach-seit-von-zu ».
#h Prépositions mixtes : la question décide
#table
Question | Cas | Verbes typiques | Exemple
Wo? (sans déplacement) | Datif | sein, liegen, stehen, sitzen | Das Buch liegt auf dem Tisch.
Wohin? (déplacement) | Accusatif | gehen, legen, stellen, setzen | Ich lege das Buch auf den Tisch.

Contractions : in dem = im, in das = ins, an dem = am, zu dem = zum, zu der = zur, bei dem = beim, von dem = vom.
#h Aller quelque part : nach, zu ou in ?
- **nach** + ville ou pays sans article : nach Berlin, nach Frankreich, nach Hause.
- **zu** + personne, commerce, lieu précis : zum Arzt, zur Post. zu Hause = à la maison (sans déplacement).
- **in** + lieu où l'on entre ou pays avec article : ins Kino, in die Schweiz.
#ex Complète.
Ich wohne seit ___ (ein) Jahr in Hamburg. = einem
Wir gehen heute ___ (in, das) Restaurant. = ins
Der Schlüssel ist ___ (in, die) Tasche. (2 mots) = in der
Ich fahre morgen ___ Wien. = nach
Ich muss ___ (zu, der) Zahnarzt. = zum
Ohne ___ (mein) Handy bin ich verloren. (das Handy) = mein

@11|Verbes de modalité|A1–A2
Le modal est conjugué en 2e position et l'autre verbe va à la fin, à l'infinitif. Attention : **ich et er ont la même forme**, sans terminaison.
#table
 | können | müssen | dürfen | wollen | sollen | möchten
ich | kann | muss | darf | will | soll | möchte
du | kannst | musst | darfst | willst | sollst | möchtest
er / sie | kann | muss | darf | will | soll | möchte
wir | können | müssen | dürfen | wollen | sollen | möchten
ihr | könnt | müsst | dürft | wollt | sollt | möchtet
sie / Sie | können | müssen | dürfen | wollen | sollen | möchten

#h Nuances qui piègent les Français
- **nicht müssen** = ne pas être obligé : Du musst nicht kommen.
- **nicht dürfen** = interdiction : Hier darf man nicht parken.
- **wollen** est direct ; au magasin dis plutôt möchte : Ich möchte bezahlen.
- **sollen** = quelqu'un d'autre l'a demandé : Der Arzt sagt, ich soll mehr schlafen.
- **mögen** (aimer bien) s'emploie surtout seul : Ich mag Kaffee.
#h Au quotidien
> Kann ich mit Karte zahlen? = Je peux payer par carte ?
> Ich muss das Formular ausfüllen. = Je dois remplir le formulaire.
> Ich möchte einen Termin vereinbaren. = Je voudrais prendre rendez-vous.
#ex Complète avec le bon modal.
Ich ___ morgen früh aufstehen. (obligation) = muss
___ du Deutsch sprechen? (capacité) = Kannst
Hier ___ man nicht rauchen. (interdiction) = darf
Sie (elle) ___ nicht warten, wir sind fertig. (pas obligée) = muss || müssen
Ich ___ einen Kaffee, bitte. (poli) = möchte

@12|Verbes à particule séparable et inséparable|A1–A2
Si le préfixe est **séparable** (accentué à l'oral), il part à la fin de la phrase au présent. S'il est **inséparable**, il reste collé.
#table
 | Préfixes | Présent | Parfait
Séparables | ab-, an-, auf-, aus-, bei-, ein-, mit-, nach-, vor-, weg-, zu-, zurück- | Ich rufe dich morgen an. | Ich habe dich angerufen.
Inséparables | be-, emp-, ent-, er-, ge-, miss-, ver-, zer- | Ich bezahle die Rechnung. | Ich habe bezahlt (sans ge-).

#h Verbes séparables indispensables
#table
Verbe | Sens | Exemple
anrufen | téléphoner | Ich rufe beim Amt an.
aufstehen | se lever | Ich stehe um 7 Uhr auf.
einkaufen | faire les courses | Wir kaufen am Samstag ein.
ankommen | arriver | Der Zug kommt um 9 Uhr an.
abholen | aller chercher | Ich hole die Kinder ab.
anmelden | inscrire, déclarer | Ich melde mich beim Bürgeramt an.
umziehen | déménager | Wir ziehen nächste Woche um.
umsteigen | changer (transports) | Sie müssen in Hannover umsteigen.
mitbringen | apporter | Ich bringe einen Kuchen mit.

#h Quand la particule reste collée
- Après un modal : Ich muss morgen früh aufstehen.
- Dans une subordonnée : …, weil ich früh aufstehe.
- Au parfait, ge se place au milieu : aufgestanden, eingekauft.
- Avec zu : Ich habe keine Lust, einzukaufen.
#ex Mets au présent.
Der Film (anfangen) um 20 Uhr. = Der Film fängt um 20 Uhr an.
Ich (einladen) dich zum Essen. = Ich lade dich zum Essen ein.
Wann (ankommen) du? = Wann kommst du an?
Ich (verstehen) das nicht. = Ich verstehe das nicht.
Wir (aussteigen) an der nächsten Haltestelle. = Wir steigen an der nächsten Haltestelle aus.

@13|Impératif|A2
L'impératif sert à donner un ordre, un conseil ou une instruction. Ajoute **bitte** pour être poli.
#table
À qui | Formation | kommen | warten | fahren | nehmen | sein
du (un ami) | radical, sans du | Komm! | Warte! | Fahr! | Nimm! | Sei!
ihr (des amis) | forme ihr, sans ihr | Kommt! | Wartet! | Fahrt! | Nehmt! | Seid!
Sie (poli) | infinitif + Sie | Kommen Sie! | Warten Sie! | Fahren Sie! | Nehmen Sie! | Seien Sie!

#h Règles du du
- Les verbes e → i / ie gardent le changement : Nimm! Gib! Lies! Hilf!
- Les verbes a → ä ne le gardent pas : Fahr! Schlaf gut!
- Radical en -t, -d : on ajoute -e : Warte! Antworte!
- Particule séparable à la fin : Ruf mich an! Steig ein!
Adoucir un ordre (très allemand) : **mal, doch, bitte**.
> Komm mal her! = Viens voir !
> Setzen Sie sich doch! = Asseyez-vous donc !
#ex Mets à l'impératif (forme du).
(sprechen) langsamer! = Sprich langsamer!
(helfen) mir! = Hilf mir!
(aufmachen) die Tür! = Mach die Tür auf!
(sein) pünktlich! = Sei pünktlich!
(lesen) den Brief! = Lies den Brief!

@14|Le parfait (Perfekt)|A2
C'est le temps du passé à l'oral. Formation : **haben ou sein** conjugué en 2e position + **participe passé** à la fin.
> Ich habe gestern lange gearbeitet. = J'ai longtemps travaillé hier.
> Wir sind am Wochenende nach Dresden gefahren. = Nous sommes allés à Dresde ce week-end.
#h haben ou sein ?
La plupart des verbes prennent haben. On prend **sein** pour :
- un déplacement : gehen, fahren, fliegen, kommen, laufen, umziehen ;
- un changement d'état : aufstehen, einschlafen, aufwachen, werden, sterben ;
- et : sein (ich bin gewesen), bleiben (ich bin geblieben), passieren (was ist passiert?).
#h Former le participe
#table
Type | Règle | Exemples
Faible | ge- + radical + -t | machen → gemacht, arbeiten → gearbeitet
Fort | ge- + radical (souvent modifié) + -en | sehen → gesehen, trinken → getrunken
Séparable | particule + ge + participe | einkaufen → eingekauft
Inséparable | pas de ge- | bezahlen → bezahlt, verstehen → verstanden
Verbes en -ieren | pas de ge-, -t | studieren → studiert
Mixtes | ge- + radical modifié + -t | bringen → gebracht, denken → gedacht, wissen → gewusst

#h Participes forts à connaître
#table
Infinitif | Participe | Auxiliaire
sein | gewesen | sein
gehen | gegangen | sein
kommen | gekommen | sein
fahren | gefahren | sein
bleiben | geblieben | sein
essen | gegessen | haben
trinken | getrunken | haben
nehmen | genommen | haben
sprechen | gesprochen | haben
schreiben | geschrieben | haben
finden | gefunden | haben
helfen | geholfen | haben
treffen | getroffen | haben

#ex Mets au parfait.
Ich kaufe Brot. = Ich habe Brot gekauft.
Wir fliegen nach Spanien. = Wir sind nach Spanien geflogen.
Er versteht die Frage nicht. = Er hat die Frage nicht verstanden.
Sie (elle) ruft den Arzt an. = Sie hat den Arzt angerufen.
Was passiert? = Was ist passiert?
Ich vergesse meinen Schlüssel. = Ich habe meinen Schlüssel vergessen.

@15|Le prétérit utile|A2
À l'oral, on utilise le parfait, sauf pour quelques verbes très fréquents qu'on met presque toujours au prétérit : **sein, haben, les modaux**, et **es gab** (il y avait).
#table
 | sein | haben | können | müssen | wollen | werden
ich | war | hatte | konnte | musste | wollte | wurde
du | warst | hattest | konntest | musstest | wolltest | wurdest
er / sie | war | hatte | konnte | musste | wollte | wurde
wir | waren | hatten | konnten | mussten | wollten | wurden
ihr | wart | hattet | konntet | musstet | wolltet | wurdet
sie / Sie | waren | hatten | konnten | mussten | wollten | wurden

Les modaux perdent leur umlaut au prétérit (können → konnte) et ich = er.
#h Pour lire les journaux
- Verbes faibles : radical + -te : machen → ich machte.
- Verbes forts : changement de voyelle : gehen → ging, kommen → kam, sehen → sah, fahren → fuhr.
#h Au quotidien
> Wie war dein Wochenende? = Comment était ton week-end ?
> Ich hatte keine Zeit. = Je n'avais pas le temps.
> Früher gab es hier einen Bäcker. = Avant, il y avait une boulangerie ici.
#ex Mets au prétérit.
Ich bin müde. = Ich war müde.
Wir haben Glück. = Wir hatten Glück.
Er muss lange warten. = Er musste lange warten.
Kannst du schlafen? = Konntest du schlafen?
Es gibt ein Problem. = Es gab ein Problem.

@16|Verbes pronominaux|A2
Le pronom réfléchi est le plus souvent à l'**accusatif**. Il passe au **datif** quand la phrase a déjà un objet direct.
#table
Sujet | Accusatif | Datif | Exemple accusatif | Exemple datif
ich | mich | mir | Ich wasche mich. | Ich wasche mir die Hände.
du | dich | dir | Du freust dich. | Du putzt dir die Zähne.
er / sie / es | sich | sich | Er setzt sich. | Er kauft sich ein Auto.
wir | uns | uns | Wir treffen uns. | Wir machen uns Sorgen.
ihr | euch | euch | Ihr beeilt euch. | Ihr nehmt euch Zeit.
sie / Sie | sich | sich | Setzen Sie sich! | Merken Sie sich das.

Seules les formes de ich et du changent entre accusatif et datif.
#h Verbes pronominaux du quotidien
sich anmelden (s'inscrire), sich beeilen (se dépêcher), sich bewerben (postuler), sich entschuldigen (s'excuser), sich erkälten (prendre froid), sich fühlen (se sentir), sich freuen (se réjouir), sich interessieren (s'intéresser), sich kümmern (s'occuper), sich setzen (s'asseoir), sich treffen (se retrouver), sich (D) etwas merken (retenir), sich (D) Sorgen machen (s'inquiéter).
Place du pronom : juste après le verbe conjugué ou après le sujet inversé : Heute fühle ich mich besser.
#ex Complète avec le pronom réfléchi.
Ich freue ___ auf das Wochenende. = mich
Du musst ___ beeilen! = dich
Ich kaufe ___ eine neue Jacke. = mir
Wir treffen ___ um acht. = uns
Kannst du ___ das merken? = dir

@17|Conjonctions et subordonnées|A2–B1
Les **coordinations** ne changent rien à l'ordre des mots ; les **subordinations** envoient le verbe conjugué à la toute fin.
#table
Type | Conjonctions | Effet | Exemple
Coordination (position 0) | und, aber, oder, denn, sondern | ordre normal | Ich bleibe zu Hause, denn ich bin krank.
Subordination | weil, dass, wenn, ob, als, bevor, nachdem, obwohl, damit, während, seit, bis | verbe à la fin | Ich bleibe zu Hause, weil ich krank bin.
Adverbe de liaison (position 1) | deshalb, deswegen, trotzdem, dann, danach, sonst | inversion | Ich bin krank, deshalb bleibe ich zu Hause.

#h Règles de la subordonnée
- Toujours une virgule avant la conjonction.
- Verbe conjugué en dernier : …, weil ich gestern lange gearbeitet habe.
- Particule recollée : …, wenn der Zug ankommt.
- Subordonnée en tête = position 1, donc verbe-virgule-verbe : Wenn ich Zeit habe, komme ich.
#h Bien choisir
- **als** pour un événement unique dans le passé ; **wenn** pour le présent, le futur ou une répétition.
- **wenn** = condition ; **ob** = question indirecte (Ich weiß nicht, ob er kommt.).
- **sondern** après une négation pour corriger (nicht Bier, sondern Wein).
#ex Relie les deux phrases.
Ich lerne Deutsch. Ich wohne in Deutschland. (weil) = Ich lerne Deutsch, weil ich in Deutschland wohne.
Ich glaube. Der Laden ist heute zu. (dass) = Ich glaube, dass der Laden heute zu ist.
Es regnet. Wir gehen spazieren. (trotzdem) = Es regnet, trotzdem gehen wir spazieren.
Ich habe Zeit. Ich rufe dich an. (wenn, en tête) = Wenn ich Zeit habe, rufe ich dich an.
Weißt du? Der Bus fährt heute. (ob) = Weißt du, ob der Bus heute fährt?

@18|Déclinaison de l'adjectif|A2–B1
Un adjectif attribut (après sein) ne prend jamais de terminaison : Die Wohnung ist groß. Devant un nom, il prend une terminaison qui dépend de l'article. **Si l'article montre déjà le genre et le cas, l'adjectif se contente de -e ou -en ; sinon, c'est l'adjectif qui le montre.**
#h 1. Après der / die / das
#table
 | Masculin | Féminin | Neutre | Pluriel
N | der neue Job | die neue Stelle | das neue Auto | die neuen Nachbarn
A | den neuen Job | die neue Stelle | das neue Auto | die neuen Nachbarn
D | dem neuen Job | der neuen Stelle | dem neuen Auto | den neuen Nachbarn
G | des neuen Jobs | der neuen Stelle | des neuen Autos | der neuen Nachbarn

Astuce : -e aux 5 cases du haut à gauche, -en partout ailleurs.
#h 2. Après ein / kein / mein
#table
 | Masculin | Féminin | Neutre | Pluriel
N | ein neuer Job | eine neue Stelle | ein neues Auto | meine neuen Nachbarn
A | einen neuen Job | eine neue Stelle | ein neues Auto | meine neuen Nachbarn
D | einem neuen Job | einer neuen Stelle | einem neuen Auto | meinen neuen Nachbarn
G | eines neuen Jobs | einer neuen Stelle | eines neuen Autos | meiner neuen Nachbarn

Différence avec le tableau 1 : seulement 3 cases : ein neuer (m. N), ein neues (n. N et A).
#h 3. Sans article
#table
 | Masculin | Féminin | Neutre | Pluriel
N | frischer Kaffee | frische Milch | frisches Brot | frische Brötchen
A | frischen Kaffee | frische Milch | frisches Brot | frische Brötchen
D | frischem Kaffee | frischer Milch | frischem Brot | frischen Brötchen

L'adjectif prend la terminaison de l'article défini (der → -er, dem → -em).
#h Au quotidien
> Ich suche eine günstige Wohnung mit großem Balkon. = Je cherche un appartement pas cher avec un grand balcon.
> Ich hätte gern den grünen Pullover. = Je voudrais le pull vert.
#ex Complète la terminaison (écris l'adjectif entier).
Das ist ein gut___ Restaurant. = gutes
Ich nehme den rot___ Wein. = roten
Wir wohnen in einer klein___ Stadt. = kleinen
Er hat einen neu___ Chef. = neuen
Kalt___ Bier ist das Beste. = Kaltes
Mit freundlich___ Grüßen = freundlichen

@19|Comparatif et superlatif|A2
Comparatif : adjectif + **-er** (+ **als** = que). Superlatif : **am** + adjectif + **-sten**, ou devant un nom : der/die/das + adjectif + -ste.
#table
Base | Comparatif | Superlatif | Remarque
billig | billiger | am billigsten | régulier
alt | älter | am ältesten | umlaut + -esten
groß | größer | am größten | umlaut
teuer | teurer | am teuersten | perd le e
gut | besser | am besten | irrégulier
viel | mehr | am meisten | irrégulier
gern | lieber | am liebsten | irrégulier
hoch | höher | am höchsten | irrégulier
nah | näher | am nächsten | irrégulier

#h Comparer
- Supériorité : Die Bahn ist schneller als der Bus.
- Égalité : Das Zimmer ist so groß wie meins.
- Infériorité : Das ist nicht so teuer wie in Paris.
- Préférence : Ich trinke lieber Tee. Am liebsten trinke ich Wasser.
**Piège** : als (comparatif) et wie (égalité). La forme correcte reste besser als.
#ex Complète.
München ist ___ (teuer) als Leipzig. = teurer
Im Juli ist es am ___ (warm). = wärmsten
Mein Bruder ist ___ (alt) als ich. = älter
Was trinkst du ___ (gern), Tee oder Kaffee? = lieber
Wo ist die ___ (nah) Apotheke? = nächste

@20|Futur et Konjunktiv II de politesse|A2–B1
Le futur se forme avec **werden** + infinitif à la fin. Au quotidien, on préfère souvent le présent + un mot de temps ; werden sert surtout pour une promesse, une prévision ou une supposition.
> Ich werde dich morgen anrufen. = Je t'appellerai demain.
> Er wird wohl krank sein. = Il doit être malade.
#h Le Konjunktiv II : être poli, souhaiter, supposer
#table
 | haben | sein | werden | können | müssen | sollen
ich | hätte | wäre | würde | könnte | müsste | sollte
du | hättest | wär(e)st | würdest | könntest | müsstest | solltest
er / sie | hätte | wäre | würde | könnte | müsste | sollte
wir / sie / Sie | hätten | wären | würden | könnten | müssten | sollten

Pour les autres verbes : **würde + infinitif**. Ich würde gern mitkommen.
#h Phrases polies indispensables
> Ich hätte gern ein Stück Kuchen. = Je voudrais un morceau de gâteau.
> Könnten Sie mir bitte helfen? = Pourriez-vous m'aider ?
> Würden Sie das bitte wiederholen? = Pourriez-vous répéter ?
> Du solltest zum Arzt gehen. = Tu devrais aller chez le médecin.
> Wenn ich mehr Zeit hätte, würde ich mehr Deutsch lernen. = Si j'avais plus de temps, j'apprendrais plus l'allemand.
#ex Rends la phrase polie.
Ich will einen Kaffee. = Ich hätte gern einen Kaffee. || Ich möchte einen Kaffee.
Kannst du das Fenster zumachen? = Könntest du das Fenster zumachen?
Haben Sie Zeit? = Hätten Sie Zeit?
Wiederholen Sie das! = Würden Sie das bitte wiederholen? || Könnten Sie das bitte wiederholen?
Wenn ich reich bin, kaufe ich ein Haus. (hypothèse) = Wenn ich reich wäre, würde ich ein Haus kaufen.

@21|Verbes à préposition, da- et wo-|B1
Beaucoup de verbes s'emploient avec une **préposition fixe**, souvent différente du français. Apprends-les comme un bloc : verbe + préposition + cas.
#table
Verbe | Sens | Exemple
warten auf + A | attendre | Ich warte auf den Bus.
sich freuen auf + A | avoir hâte de | Ich freue mich auf den Urlaub.
sich freuen über + A | être content de | Ich freue mich über das Geschenk.
denken an + A | penser à | Ich denke an dich.
sich kümmern um + A | s'occuper de | Wer kümmert sich um die Kinder?
sich interessieren für + A | s'intéresser à | Ich interessiere mich für Politik.
sich ärgern über + A | s'énerver de | Ich ärgere mich über den Lärm.
fragen nach + D | demander | Er fragt nach dem Weg.
teilnehmen an + D | participer à | Ich nehme am Kurs teil.
Angst haben vor + D | avoir peur de | Sie hat Angst vor Hunden.
abhängen von + D | dépendre de | Das hängt vom Wetter ab.
sich gewöhnen an + A | s'habituer à | Ich gewöhne mich an das Wetter.

#h da- (réponse) et wo- (question) pour une chose
On ne dit pas auf es, mais **da(r) + préposition**. Question : **wo(r) + préposition**. On ajoute un -r- si la préposition commence par une voyelle.
#table
Préposition | Question (chose) | Réponse (chose) | Personne
auf | Worauf wartest du? | Ich warte darauf. | Auf wen wartest du?
an | Woran denkst du? | Ich denke daran. | An wen denkst du?
über | Worüber sprecht ihr? | Wir sprechen darüber. | Über wen…?
mit | Womit fährst du? | Ich fahre damit. | Mit wem…?

Pour une personne, on garde préposition + pronom : Ich warte auf ihn.
#ex Complète.
Ich warte ___ deine Antwort. = auf
___ denkst du? (chose) = Woran
Hast du ___ gedacht, den Müll rauszubringen? = daran
Er interessiert sich nicht ___ Fußball. = für
Ich nehme ___ Integrationskurs teil. = am

@22|Propositions relatives|B1
La relative commence par un **pronom relatif** qui ressemble à l'article défini. Son genre et nombre viennent du nom qu'il remplace ; son cas vient de sa fonction dans la relative. Le verbe va à la fin, et il y a des virgules.
#table
 | Masculin | Féminin | Neutre | Pluriel
Nominatif (qui) | der | die | das | die
Accusatif (que) | den | die | das | die
Datif (à qui) | dem | der | dem | **denen**
Génitif (dont) | **dessen** | **deren** | **dessen** | **deren**

#h Méthode en 3 étapes
- Quel nom je remplace ? → genre et nombre. Quelle fonction dans la relative ? → cas. Puis pronom + reste + verbe à la fin.
> Der Mann, der dort steht, ist mein Nachbar. = L'homme qui est là-bas est mon voisin.
> Der Mann, den ich kenne, ist mein Nachbar. = L'homme que je connais est mon voisin.
> Der Mann, dem ich helfe, ist mein Nachbar. = L'homme que j'aide est mon voisin.
> Die Kollegen, mit denen ich arbeite, sind nett. = Les collègues avec qui je travaille sont sympas.
#h Cas spéciaux
- Préposition devant le pronom : Die Wohnung, in der ich wohne, ist klein.
- Après das, alles, etwas, nichts : was. Das ist alles, was ich weiß.
- Pour un lieu : wo. Die Stadt, wo ich wohne…
#ex Complète avec le pronom relatif.
Das ist die Frau, ___ in der Apotheke arbeitet. = die
Der Film, ___ wir gestern gesehen haben, war gut. = den
Das Kind, ___ ich das Buch gegeben habe, ist mein Neffe. = dem
Die Leute, ___ ich gestern getroffen habe, kommen aus Spanien. = die
Der Kollege, ___ Frau Französin ist, heißt Jan. = dessen
Das Problem, ___ wir gesprochen haben, ist gelöst. (über) = über das

@23|Infinitif avec zu, um … zu|B1
Après beaucoup de verbes, noms et adjectifs, l'infinitif est précédé de **zu** et placé à la fin, après une virgule. **Pas de zu** après les modaux ni après gehen, lernen, lassen, bleiben, hören, sehen.
#table
Déclencheur | Exemple
versuchen, vergessen, anfangen, aufhören, planen, vorhaben, bitten | Ich habe vergessen, dich anzurufen.
Lust haben, Zeit haben, keine Ahnung haben, es ist Zeit | Hast du Lust, ins Kino zu gehen?
es ist wichtig / schwer / verboten / möglich | Es ist verboten, hier zu parken.

Avec un verbe séparable, zu se glisse au milieu : anzurufen, einzukaufen, aufzustehen.
#table
Structure | Sens | Exemple
um … zu | pour (but) | Ich lerne Deutsch, um in Deutschland zu arbeiten.
ohne … zu | sans | Er ist gegangen, ohne Tschüss zu sagen.
statt … zu | au lieu de | Statt zu lernen, schaut er Netflix.

**um … zu ou damit ?** um … zu quand le sujet est le même. Sinon damit + subordonnée : Ich spreche langsam, damit du mich verstehst.
#ex Complète.
Ich habe keine Zeit, ___ (kochen). = zu kochen
Vergiss nicht, die Tür ___ (abschließen)! = abzuschließen
Ich spare Geld, ___ ein Auto ___ (kaufen). (2 blancs) = um zu kaufen
Ich kann heute ___ (kommen). = kommen
Er hat versucht, mich ___ (erreichen). = zu erreichen

@24|Le passif|B1
Le passif met l'action au centre. Il est partout dans les courriers officiels et les panneaux. Formation : **werden** conjugué + participe passé à la fin.
#table
Temps | Formation | Exemple
Présent | werden + participe | Das Paket wird morgen geliefert.
Prétérit | wurde + participe | Die Straße wurde gesperrt.
Parfait | sein + participe + worden | Mein Fahrrad ist gestohlen worden.
Avec modal | modal + participe + werden | Das Formular muss bis Freitag ausgefüllt werden.

Au parfait passif, c'est **worden** (pas geworden). Qui fait l'action : von + datif.
#h Passif d'action ou d'état
- werden = l'action : Der Laden wird um 20 Uhr geschlossen.
- sein = le résultat : Der Laden ist geschlossen.
#h Au quotidien
> Hier wird Deutsch gesprochen. = Ici on parle allemand.
> Ihr Antrag wurde genehmigt. = Votre demande a été acceptée.
Alternative active fréquente : man + verbe actif. Man spricht hier Deutsch.
#ex Mets au passif.
Man repariert die Heizung. (présent) = Die Heizung wird repariert.
Man hat den Termin abgesagt. (parfait) = Der Termin ist abgesagt worden.
Man muss die Miete am Monatsanfang bezahlen. = Die Miete muss am Monatsanfang bezahlt werden.
Man baute das Haus 1910. (prétérit) = Das Haus wurde 1910 gebaut.

@25|Le génitif|B1
Le génitif exprime l'appartenance. À l'oral on le remplace souvent par von + datif, mais on le trouve à l'écrit, dans les documents officiels et après certaines prépositions.
#table
 | Masculin | Féminin | Neutre | Pluriel
Défini | des Vertrags | der Wohnung | des Kindes | der Kinder
Indéfini | eines Vertrags | einer Wohnung | eines Kindes | –

Masculin et neutre : le nom prend **-s** (ou -es pour les mots courts). Féminin et pluriel : le nom ne change pas. Noms propres : un simple -s : Annas Wohnung.
- Écrit : die Adresse des Arbeitgebers. Oral : die Adresse vom Arbeitgeber.
#h Prépositions + génitif
#table
Préposition | Sens | Exemple
wegen | à cause de | Wegen des Streiks fährt kein Zug.
trotz | malgré | Trotz des Regens gehen wir raus.
während | pendant | während der Arbeitszeit
innerhalb / außerhalb | à l'intérieur / en dehors de | außerhalb der Öffnungszeiten
statt / anstatt | au lieu de | Statt eines Briefes schicke ich eine E-Mail.

À l'oral, wegen et trotz sont très souvent suivis du datif (wegen dem Streik).
#ex Complète.
Das ist das Auto ___ (mein) Vaters. = meines
Die Tür ___ (die) Wohnung ist kaputt. = der
___ (wegen, das) Wetters bleiben wir zu Hause. (2 mots) = Wegen des
Das ist ___ (Lisa) Fahrrad. = Lisas

@26|Nombres, heure et dates|A1
De 21 à 99, on dit **l'unité avant la dizaine**, liée par und, en un seul mot : 24 = vierundzwanzig.
#table
1–12 | Dizaines | Grands nombres
eins, zwei, drei … elf, zwölf | zwanzig, dreißig (sans z), vierzig … neunzig | hundert, tausend, eine Million
13–19 : dreizehn … neunzehn | 35 = fünfunddreißig | 1 250 = tausendzweihundertfünfzig

Prix : 3,50 € = drei Euro fünfzig. Au téléphone, on dit souvent zwo pour zwei. Virgule pour les décimales, point pour les milliers : 1.250,99 €.
#h L'heure
#table
Heure | Officiel | Courant
8:10 | acht Uhr zehn | zehn nach acht
8:15 | acht Uhr fünfzehn | Viertel nach acht
8:30 | acht Uhr dreißig | halb neun (!)
8:45 | acht Uhr fünfundvierzig | Viertel vor neun
20:00 | zwanzig Uhr | acht Uhr abends

**Piège n°1** : halb neun = 8 h 30, pas 9 h 30.
#h Les dates
- Ordinaux : -te jusqu'à 19, -ste à partir de 20. der zweite, der zwanzigste. Irréguliers : der erste, der dritte, der siebte.
- Heute ist der dritte Oktober. À quelle date ? Am dritten Oktober.
- Prépositions de temps : am + jour (am Montag), um + heure, im + mois, saison (im Mai), in + durée future (in zwei Wochen), vor + durée passée (vor drei Jahren).
#ex Écris en lettres ou traduis.
47 = siebenundvierzig
9 h 30 (courant) = halb zehn
14 h 45 (courant) = Viertel vor drei
Le 1er mai, je suis en vacances. = Am ersten Mai habe ich Urlaub.
Il y a deux ans, j'ai déménagé. = Vor zwei Jahren bin ich umgezogen.

@27|Les questions (W-Fragen)|A1
Question ouverte : mot interrogatif en position 1, verbe en 2. Question fermée (oui/non) : verbe en 1.
#table
Mot | Sens | Exemple
wer / wen / wem / wessen | qui (N / A / D / G) | Wer ist das? Wem gehört das?
was | quoi, que | Was kostet das?
wo | où (sans déplacement) | Wo ist die Toilette?
wohin | où (vers où) | Wohin fährt dieser Bus?
woher | d'où | Woher kommst du?
wann | quand | Wann öffnet das Bürgeramt?
wie | comment | Wie funktioniert das?
wie viel / wie viele | combien | Wie viele Zimmer hat die Wohnung?
wie lange | combien de temps | Wie lange dauert das?
warum | pourquoi | Warum ist der Zug verspätet?
welcher / welche / welches | quel / quelle | Welche Linie fährt zum Bahnhof?
was für ein | quel genre de | Was für ein Auto hast du?

#h Pièges
- wer = qui ; wo = où. Ne confonds pas avec l'anglais (who / where).
- À l'oral on coupe souvent : Wo gehst du hin? Wo kommst du her?
- Question indirecte : verbe à la fin. Können Sie mir sagen, wo der Bahnhof ist?
#h Phrases de survie
> Wie bitte? = Pardon ?
> Wo finde ich die Milch? = Où est-ce que je trouve le lait ?
> Wie lange haben Sie heute geöffnet? = Vous êtes ouvert jusqu'à quelle heure aujourd'hui ?
#ex Trouve le mot interrogatif.
___ wohnst du? – In Köln. = Wo
___ kostet das Ticket? – 3 Euro. = Wie viel
___ hast du Geburtstag? – Im Mai. = Wann
___ hilfst du? – Meiner Nachbarin. = Wem
___ Zug nimmst du? – Den ICE um 10 Uhr. = Welchen
___ gehst du? – Zum Supermarkt. = Wohin

@28|Konjunktiv II du passé : regrets et reproches|B2
Pour parler d'une situation passée **qui n'a pas eu lieu** (regret, reproche, hypothèse), on utilise **hätte** ou **wäre** + participe passé. C'est le « j'aurais… » du français. Le choix hätte / wäre suit la règle du parfait (fiche 14).
#table
Parfait (réel) | Konjunktiv II passé (irréel) | Sens
Ich habe gewartet. | Ich hätte gewartet. | J'aurais attendu.
Ich bin gekommen. | Ich wäre gekommen. | Je serais venu.
Ich habe kommen können. | Ich hätte kommen können. | J'aurais pu venir.
Du hast anrufen sollen. | Du hättest anrufen sollen. | Tu aurais dû appeler.

Avec un modal, on a un **double infinitif** à la fin : hätte … machen müssen / können / sollen.
#h Les usages
- **Hypothèse irréelle** : Wenn ich das gewusst hätte, wäre ich gekommen.
- **Regret** : Hätte ich bloß mehr gespart!
- **Reproche** : Du hättest mir Bescheid sagen sollen.
- **Presque** : Fast wäre ich zu spät gekommen.
#h Au quotidien
> Wenn ich früher losgefahren wäre, hätte ich den Zug nicht verpasst. = Si j'étais parti plus tôt, je n'aurais pas raté le train.
> Das hätten Sie mir früher sagen müssen. = Vous auriez dû me le dire plus tôt.
> An deiner Stelle hätte ich den Vertrag nicht unterschrieben. = À ta place, je n'aurais pas signé le contrat.
#ex Complète avec hätte ou wäre (bien conjugué).
Wenn ich das gewusst ___, wäre ich gekommen. = hätte
Wenn du früher aufgestanden ___, hättest du den Bus bekommen. = wärst || wärest
Du ___ mich anrufen sollen! = hättest
Fast ___ ich den Termin vergessen. = hätte
Wenn wir den Zug genommen ___, wären wir schon da. = hätten

@29|Konjunktiv I et discours indirect|B2
Les journaux, la radio et les courriers officiels rapportent les paroles des autres au **Konjunktiv I**. Il montre qu'on cite sans prendre position. En pratique, on l'utilise surtout à la **3e personne du singulier** : radical + **-e**.
#table
Infinitif | Indicatif | Konjunktiv I | Exemple
sein | er ist | er sei | Er sagt, er sei krank.
haben | er hat | er habe | Sie sagt, sie habe keine Zeit.
können | er kann | er könne | Er meint, er könne nicht kommen.
werden | er wird | er werde | Sie erklärt, sie werde kündigen.
kommen | er kommt | er komme | Er sagt, er komme morgen.

**Si le Konjunktiv I ressemble à l'indicatif** (surtout au pluriel : sie haben), on prend le Konjunktiv II : Sie sagen, sie hätten keine Zeit.
#h Transformer une phrase
- Passé : habe / sei + participe. „Ich bin gefahren." → Er sagt, er sei gefahren.
- Question : ob ou mot interrogatif + verbe à la fin. Sie fragt, ob ich Zeit habe.
- Ordre : sollen. „Warten Sie!" → Er sagt, ich solle warten.
- Les pronoms changent selon qui parle : „Ich komme" (Anna) → Anna sagt, sie komme.
#h Au quotidien
> Der Minister sagte, die Lage sei ernst. = Le ministre a dit que la situation était grave.
> Die Firma teilte mit, sie habe keine Fehler gemacht. = L'entreprise a fait savoir qu'elle n'avait pas commis d'erreur.
#ex Mets au discours indirect (un seul mot).
Er sagt: „Ich bin krank." → Er sagt, er ___ krank. = sei
Sie sagt: „Ich habe keine Zeit." → Sie sagt, sie ___ keine Zeit. = habe
Der Chef sagt: „Das Projekt kann warten." → Er sagt, das Projekt ___ warten. = könne
Die Zeitung schreibt: „Der Minister ist zurückgetreten." → Der Minister ___ zurückgetreten. = sei
Sie sagen: „Wir haben das nicht gewusst." → Sie sagen, sie ___ das nicht gewusst. = hätten

@30|Passif avancé et ses alternatives|B2
Au niveau B2, on rencontre le passif à tous les temps et avec les modaux, mais aussi des tournures qui ont **un sens passif sans werden**. Elles sont partout dans les règlements et les courriers.
#table
Tournure | Sens | Exemple
modal + participe + werden | passif avec modal | Die Miete muss pünktlich bezahlt werden.
passif impersonnel | on (sans sujet) | Hier wird nicht geraucht.
sich lassen + infinitif | peut être fait | Das Problem lässt sich lösen.
sein + zu + infinitif | doit / peut être fait | Der Antrag ist bis Freitag einzureichen.
adjectif en -bar | qu'on peut … | lösbar, machbar, erreichbar
man + actif | on | Man muss die Miete pünktlich bezahlen.

**sein + zu + infinitif** a deux sens selon le contexte : obligation (Die Gebühr ist sofort zu zahlen = doit être payée) ou possibilité, surtout à la négation (Das ist nicht zu verstehen = on ne peut pas le comprendre).
#h Au quotidien
> Der Ausweis ist bei der Anmeldung vorzulegen. = La carte d'identité doit être présentée lors de l'inscription.
> Ich bin telefonisch gut erreichbar. = On peut facilement me joindre par téléphone.
> Das lässt sich leicht ändern. = Ça peut facilement être modifié.
#ex Transforme avec la tournure indiquée.
Das Problem kann gelöst werden. (sich lassen) = Das Problem lässt sich lösen.
Der Antrag muss bis Freitag eingereicht werden. (sein + zu) = Der Antrag ist bis Freitag einzureichen.
Das kann man nicht lesen. (adjectif en -bar) = Das ist nicht lesbar.
Man musste die Rechnung bezahlen. (passif prétérit) = Die Rechnung musste bezahlt werden.
Man arbeitet hier sonntags nicht. (passif impersonnel) = Hier wird sonntags nicht gearbeitet. || Sonntags wird hier nicht gearbeitet.

@31|Conjonctions doubles|B2
Pour structurer une argumentation, l'allemand utilise des conjonctions en deux parties. Elles relient deux mots, deux groupes ou deux phrases.
#table
Conjonction | Sens | Exemple
sowohl … als auch | aussi bien … que | Er spricht sowohl Deutsch als auch Englisch.
nicht nur … sondern auch | non seulement … mais aussi | Die Wohnung ist nicht nur groß, sondern auch billig.
weder … noch | ni … ni | Ich trinke weder Kaffee noch Tee.
entweder … oder | soit … soit | Entweder kommst du mit, oder du bleibst hier.
zwar … aber | certes … mais | Die Wohnung ist zwar teuer, aber sehr schön.
einerseits … andererseits | d'un côté … de l'autre | Einerseits verdiene ich gut, andererseits habe ich keine Zeit.
je … desto / umso | plus … plus | Je mehr ich übe, desto besser spreche ich.

#h L'ordre des mots de je … desto
- **je** + comparatif ouvre une subordonnée : le verbe va à la fin. Je früher wir losfahren, …
- **desto** + comparatif est en position 1 : verbe juste après, puis le sujet. …, desto weniger Stau gibt es.
- weder … noch nie déjà la phrase : pas de nicht ni de kein en plus.
#ex Complète (écris les deux mots, séparés par un espace).
Ich trinke ___ Kaffee ___ Tee. (ni … ni) = weder noch
___ mehr ich lerne, ___ mehr verstehe ich. (plus … plus) = Je desto || Je umso
Er spricht ___ Deutsch ___ Englisch. (aussi bien … que, 3 mots) = sowohl als auch
Die Wohnung ist ___ teuer, ___ sehr schön. (certes … mais) = zwar aber
___ wir fahren mit dem Zug, ___ wir nehmen das Auto. (soit … soit) = Entweder oder

@32|Participes employés comme adjectifs|B2
À l'écrit, au lieu d'une relative, on place souvent un **participe devant le nom**. Il se décline comme un adjectif (fiche 18) et peut être précédé de compléments : c'est l'« attribut étendu », typique des journaux et des textes officiels.
#table
Participe | Formation | Sens | Exemple
Partizip I | infinitif + -d | action en cours (actif) | die steigenden Preise (les prix qui augmentent)
Partizip II | participe passé | action subie ou terminée | das gekaufte Auto (la voiture achetée)

#h De la relative au participe
#table
Relative | Participe
die Preise, die seit Jahren steigen | die seit Jahren steigenden Preise
die Unterlagen, die vom Amt geschickt wurden | die vom Amt geschickten Unterlagen
ein Kind, das schläft | ein schlafendes Kind
der Zug, der gerade ankommt | der gerade ankommende Zug

**Pour lire** une longue phrase écrite : repère l'article, puis saute jusqu'au nom ; tout ce qui est entre les deux décrit ce nom.
#h Au quotidien
> Bitte senden Sie uns die vollständig ausgefüllten Formulare zurück. = Merci de nous renvoyer les formulaires entièrement remplis.
> Die stark gestiegenen Mieten sind ein großes Problem. = Les loyers qui ont fortement augmenté sont un gros problème.
#ex Complète avec le participe bien décliné.
Die Preise steigen. → die ___ Preise (steigen) = steigenden
Der Brief wurde gestern geschickt. → der gestern ___ Brief = geschickte
ein Kind, das schläft → ein ___ Kind = schlafendes
Die Unterlagen wurden ausgefüllt. → die ___ Unterlagen = ausgefüllten
Wasser, das kocht → ___ Wasser = kochendes

@33|Style nominal et expressions verbe + nom|B2
La langue écrite et administrative préfère les **noms** aux verbes. Savoir passer de l'un à l'autre aide à lire les courriers et à écrire plus formellement.
#table
Verbe | Nom | Exemple écrit
anmelden | die Anmeldung | Die Anmeldung erfolgt online.
ankommen | die Ankunft | Nach der Ankunft des Zuges …
abfahren | die Abfahrt | Vor der Abfahrt bitte einsteigen.
entscheiden | die Entscheidung | Die Entscheidung fällt morgen.
beantragen | die Beantragung | Für die Beantragung brauchen Sie …
rauchen | das Rauchen | Das Rauchen ist hier verboten.

> Nachdem der Zug angekommen ist, … = Nach der Ankunft des Zuges, …
#h Expressions verbe + nom (Nomen-Verb-Verbindungen)
Le sens est porté par le nom ; le verbe est fixe et doit être appris avec lui.
#table
Expression | Sens
einen Antrag stellen | faire une demande
eine Entscheidung treffen | prendre une décision
in Frage stellen | remettre en question
zur Verfügung stehen / stellen | être / mettre à disposition
Bescheid geben / sagen | informer, prévenir
Rücksicht nehmen auf + A | tenir compte de, avoir des égards
in Kraft treten | entrer en vigueur
zur Kenntnis nehmen | prendre connaissance de
eine Rolle spielen | jouer un rôle
Kritik üben an + D | critiquer

#ex Complète avec le verbe ou le nom.
Wir müssen heute eine Entscheidung ___. (prendre) = treffen
Ich möchte einen Antrag auf Elterngeld ___. (faire) = stellen
Das neue Gesetz ___ im Januar in Kraft. = tritt
Bitte ___ Sie mir bis Freitag Bescheid. = geben || sagen
Für Fragen ___ wir Ihnen gern zur Verfügung. = stehen
ankommen → die ___ = Ankunft

@34|Prépositions du style écrit|B2
Les courriers officiels, les contrats et la presse utilisent des prépositions qu'on entend peu à l'oral. La plupart sont suivies du **génitif**.
#table
Préposition | Cas | Sens | Exemple
aufgrund | G | en raison de | aufgrund der hohen Kosten
angesichts | G | au vu de | angesichts der Lage
bezüglich / hinsichtlich | G | concernant | bezüglich Ihrer Anfrage
infolge | G | par suite de | infolge des Sturms
mithilfe | G | à l'aide de | mithilfe eines Wörterbuchs
anlässlich | G | à l'occasion de | anlässlich seines Geburtstags
zugunsten | G | en faveur de | zugunsten der Mieter
laut | D (ou G) | selon | laut Vertrag
gemäß / entsprechend | D | conformément à | gemäß § 5
dank | D (ou G) | grâce à | dank Ihrer Hilfe
zufolge | D, après le nom | d'après | dem Bericht zufolge

#h Au quotidien
> Bezüglich Ihrer Anfrage vom 3. Mai teilen wir Ihnen Folgendes mit. = Concernant votre demande du 3 mai, nous vous informons de ce qui suit.
> Laut Vertrag beträgt die Kündigungsfrist drei Monate. = Selon le contrat, le préavis est de trois mois.
> Infolge des Streiks fallen heute viele Züge aus. = À la suite de la grève, beaucoup de trains sont supprimés aujourd'hui.
#ex Choisis la préposition.
___ Vertrag beträgt die Kündigungsfrist drei Monate. (selon) = Laut
___ Ihrer Anfrage vom 3. Mai … (concernant) = Bezüglich || Hinsichtlich
___ des Streiks fallen viele Züge aus. (en raison de) = Aufgrund || Wegen || Infolge
___ Ihrer Hilfe haben wir es geschafft. (grâce à) = Dank
___ der hohen Kosten wurde das Projekt gestoppt. (au vu de) = Angesichts

@35|Subordonnées avancées|B2
Au-delà de weil, dass et wenn, ces conjonctions permettent d'exprimer la manière, la conséquence, la comparaison irréelle ou la condition. Le verbe va toujours à la fin (fiche 17).
#table
Conjonction | Sens | Exemple
indem | en (+ participe présent) | Man spart Energie, indem man weniger heizt.
sodass / so …, dass | si bien que | Es regnete stark, sodass das Spiel ausfiel.
als ob + K II | comme si | Er tut so, als ob er nichts wüsste.
ohne dass | sans que | Er ging, ohne dass ich es merkte.
(an)statt dass | au lieu que | Statt dass er hilft, schaut er zu.
je nachdem, ob / wie | selon que | Je nachdem, wie das Wetter ist, fahren wir.
sofern / soweit | dans la mesure où | Sofern nichts dagegen spricht, …
falls | au cas où | Falls du Hilfe brauchst, ruf mich an.
solange | tant que | Solange du Fieber hast, bleibst du zu Hause.
nachdem | après que | Nachdem ich gegessen hatte, ging ich los.

#h Concordance des temps avec nachdem
L'action de nachdem est **antérieure** : plus-que-parfait (hatte / war + participe) si la principale est au passé, parfait si elle est au présent.
> Nachdem wir umgezogen waren, haben wir uns angemeldet. = Après avoir déménagé, nous avons déclaré notre domicile.
#ex Choisis la conjonction.
Man lernt eine Sprache am besten, ___ man sie jeden Tag spricht. (en) = indem
Er tut so, ___ er mich nicht kennen würde. (comme si) = als ob
Es regnete stark, ___ das Spiel abgesagt wurde. (si bien que) = sodass
___ ich mit der Arbeit fertig war, ging ich nach Hause. (après que) = Nachdem
___ du Hilfe brauchst, ruf mich an. (au cas où) = Falls

@36|Modaux de supposition et de ouï-dire|B2
Les verbes de modalité servent aussi à dire **à quel point on est sûr** d'une information, ou **d'où elle vient**. C'est très fréquent à l'oral comme dans la presse.
#table
Modal | Degré | Exemple | Sens
muss | presque sûr | Er muss krank sein. | Il doit être malade (c'est certain).
dürfte | probable | Das dürfte teuer sein. | Ça doit probablement être cher.
wird wohl | probable | Sie wird wohl im Büro sein. | Elle est sans doute au bureau.
könnte / kann | possible | Sie könnte recht haben. | Elle a peut-être raison.
kann nicht | impossible | Das kann nicht stimmen. | Ça ne peut pas être vrai.
soll | on dit que | Das Restaurant soll sehr gut sein. | Il paraît que le restaurant est très bon.
will | il prétend | Er will das nicht gewusst haben. | Il prétend ne pas l'avoir su.

#h Au passé
Modal + **participe + haben / sein** (infinitif passé) : Er muss den Zug verpasst haben. (Il a dû rater le train.) Sie soll nach Berlin gezogen sein. (Il paraît qu'elle a déménagé à Berlin.)
#ex Complète.
Il paraît que le film est très bon. → Der Film ___ sehr gut sein. = soll
Il prétend être malade. → Er ___ krank sein. = will
C'est sûrement Anna. → Das ___ Anna sein. = muss
Elle a peut-être raison. → Sie ___ recht haben. = könnte || kann
Il a sûrement raté le train. → Er muss den Zug ___ haben. = verpasst

@37|La déclinaison faible (N-Deklination)|B1–B2
Certains noms masculins prennent **-(e)n à tous les cas sauf au nominatif singulier**. C'est une erreur fréquente même au niveau B2.
#table
Cas | Singulier | Pluriel
Nominatif | der Kollege | die Kollegen
Accusatif | den Kollegen | die Kollegen
Datif | dem Kollegen | den Kollegen
Génitif | des Kollegen | der Kollegen

#h Quels noms ?
- Masculins en **-e** désignant des personnes ou des animaux : der Kollege, der Kunde, der Junge, der Neffe, der Löwe.
- Masculins en **-ent, -ant, -ist, -at** : der Student, der Praktikant, der Polizist, der Kandidat, der Automat.
- Quelques autres à connaître : der Mensch, der Nachbar, der Herr (den Herrn, pluriel die Herren), der Bauer.
- Particularité : der Name, der Gedanke prennent -ns au génitif (des Namens).
#h Au quotidien
> Ich habe Herrn Müller eine E-Mail geschickt. = J'ai envoyé un e-mail à M. Müller.
> Der Kellner fragt den Kunden, was er möchte. = Le serveur demande au client ce qu'il souhaite.
#ex Complète avec la bonne forme.
Ich frage meinen ___ (Nachbar). = Nachbarn
Wir helfen dem ___ (Kunde). = Kunden
Kennst du den ___ (Student)? = Studenten
Ich habe mit ___ Schmidt telefoniert. (Herr) = Herrn
Der Polizist hilft dem ___ (Mensch). = Menschen

@38|Les particules modales|B2
Les Allemands parsèment leurs phrases de petits mots qui ne se traduisent pas mot à mot mais changent le ton : insistance, surprise, politesse, résignation. Ils rendent l'allemand naturel à l'oral.
#table
Particule | Effet | Exemple
doch | insistance, évidence | Komm doch mit! Das weißt du doch!
mal | adoucit une demande | Schau mal! Kannst du mal kommen?
ja | surprise ou évidence partagée | Das ist ja toll! Du weißt ja, wie er ist.
denn | question intéressée | Was ist denn los?
halt / eben | c'est comme ça | Das ist halt so.
eigentlich | au fait, en réalité | Wie heißt du eigentlich?
wohl | supposition | Er ist wohl krank.
schon | rassurer | Das klappt schon.
bloß / nur | inquiétude ou mise en garde | Was hast du bloß gemacht? Mach das bloß nicht!

**Place** : après le verbe conjugué et les pronoms, avant ce qui est important : Kannst du mir mal helfen? Elles ne sont jamais en position 1.
#h Au quotidien
> Setzen Sie sich doch! = Asseyez-vous donc !
> Wo bist du denn? = Mais où es-tu ?
> Das ist eben so in Deutschland. = C'est comme ça en Allemagne.
#ex Complète avec la particule.
Was ist ___ los? (question intéressée) = denn
Komm ___ mit! (invitation insistante) = doch
Schau ___ hier! (adoucit) = mal
Das ist ___ so, da kann man nichts machen. (résignation) = halt || eben
Keine Sorge, das klappt ___. (rassurer) = schon
`;
// the same sheets translated for the English and Spanish interface (same lines, same exercise answers)
const GRAMRAW_I18N = {"en": "@1|Gender and articles|A1\nEvery German noun has a gender: masculine (**der**), feminine (**die**) or neuter (**das**). English has no grammatical gender, and German gender is often not logical (das Mädchen, \"the girl\", is neuter), so always learn a noun together with its article. Nouns are always capitalized.\n#table\n | Masculine | Feminine | Neuter | Plural\nDefinite (the) | der Tisch | die Lampe | das Bett | die Tische\nIndefinite (a, an) | ein Tisch | eine Lampe | ein Bett | Tische (no article)\nNegative (no, not a) | kein Tisch | keine Lampe | kein Bett | keine Tische\n\n#h Clues for guessing the gender\n- **Masculine**: days, months, seasons (der Montag, der Mai), nouns in -er for people (der Lehrer), -ling, -ismus.\n- **Feminine**: -ung (die Wohnung), -heit, -keit (die Möglichkeit), -schaft, -ion (die Information), -tät, -ie, and most nouns ending in -e (die Straße).\n- **Neuter**: -chen and -lein (das Mädchen), -ment, -um (das Zentrum), verbs used as nouns (das Essen).\n- **Compound nouns**: the last word decides. die Haustür = das Haus + die Tür.\n#h In everyday life\n> Ich brauche einen Termin. = I need an appointment.\n> Die Miete ist hoch. = The rent is high.\n> Ich habe kein Auto. = I don't have a car.\n#ex Give the definite article.\n___ Rechnung (invoice) = die\n___ Brötchen (bread roll) = das\n___ Bahnhof (train station) = der\n___ Wohnung (apartment) = die\n___ Krankenversicherung (health insurance) = die\n\n@2|Personal pronouns and the present tense|A1\nIn the present tense, remove **-en** from the infinitive and add the personal ending. **Sie** with a capital letter is the polite \"you\" (singular and plural); it is conjugated like sie (they).\n#table\nPronoun | Meaning | Ending | wohnen | arbeiten | sein | haben\nich | I | -e | wohne | arbeite | bin | habe\ndu | you (informal) | -st | wohnst | arbeitest | bist | hast\ner / sie / es | he / she / it | -t | wohnt | arbeitet | ist | hat\nwir | we | -en | wohnen | arbeiten | sind | haben\nihr | you (several friends) | -t | wohnt | arbeitet | seid | habt\nsie / Sie | they / you (polite) | -en | wohnen | arbeiten | sind | haben\n\n#h Pitfalls\n- Stem ending in -t or -d (arbeiten, finden): add an -e- so it can be pronounced: du arbeitest, er findet.\n- Stem ending in -s, -ß, -z (heißen, tanzen): du heißt, du tanzt (no -sst).\n- **man** (one, you, people) is conjugated like er: Hier darf man nicht rauchen.\n- The present tense is also used for the near future: Morgen gehe ich zum Arzt.\n#h In everyday life\n> Ich heiße Loris und ich komme aus Frankreich. = My name is Loris and I'm from France.\n> Haben Sie einen Moment Zeit? = Do you have a moment?\n> Wir sind neu hier. = We're new here.\n#ex Conjugate.\nDu ___ (wohnen) in Berlin. = wohnst\nEr ___ (arbeiten) bei Siemens. = arbeitet\nIhr ___ (sein) spät. = seid\n___ (haben) Sie eine Kundenkarte? = Haben\nWie ___ (heißen) du? = heißt\n\n@3|Strong verbs in the present|A1\nSome verbs change their vowel, but **only with du and er/sie/es**. The other persons stay regular.\n#table\nChange | Infinitive | ich | du | er / sie / es | wir\na → ä | fahren (to go by vehicle) | fahre | fährst | fährt | fahren\na → ä | schlafen (to sleep) | schlafe | schläfst | schläft | schlafen\nau → äu | laufen (to run, to walk) | laufe | läufst | läuft | laufen\ne → i | essen (to eat) | esse | isst | isst | essen\ne → i | sprechen (to speak) | spreche | sprichst | spricht | sprechen\ne → i | helfen (to help) | helfe | hilfst | hilft | helfen\ne → i | geben (to give) | gebe | gibst | gibt | geben\ne → ie | sehen (to see) | sehe | siehst | sieht | sehen\ne → ie | lesen (to read) | lese | liest | liest | lesen\nirregular | nehmen (to take) | nehme | nimmst | nimmt | nehmen\nirregular | wissen (to know) | weiß | weißt | weiß | wissen\nirregular | werden (to become) | werde | wirst | wird | werden\n\nOthers to know: tragen (to carry, to wear), waschen (to wash), vergessen (to forget), treffen (to meet), empfehlen (to recommend), werfen (to throw).\n#h In everyday life\n> Sprichst du Französisch? = Do you speak French?\n> Der Bus fährt um 8 Uhr. = The bus leaves at 8.\n> Ich nehme das Menü 2. = I'll have set menu 2.\n> Das weiß ich nicht. = I don't know.\n#ex Conjugate in the present.\nWas ___ du heute Abend? (essen) = isst\nEr ___ sehr gut Deutsch. (sprechen) = spricht\n___ du den Zug? (sehen) = Siehst\nSie (she) ___ zur Arbeit. (fahren) = fährt\nWas ___ Sie mir? (empfehlen, polite Sie) = empfehlen\n\n@4|Word order|A1\nThe golden rule: in a statement, **the conjugated verb is always in 2nd position**. If you start with something other than the subject, the subject comes right after the verb (inversion).\n#table\nPosition 1 | Position 2 (verb) | Rest | End (2nd part of the verb)\nIch | gehe | heute ins Kino. |\nHeute | gehe | ich ins Kino. |\nIns Kino | gehe | ich heute. |\nIch | möchte | heute ins Kino | gehen.\nIch | habe | gestern einen Film | gesehen.\n\n#h Sentence types\n- **Yes/no question**: the verb in 1st position. Kommst du mit?\n- **Open question**: the question word in 1, the verb in 2. Wann kommst du?\n- **Two-part verb** (modal, present perfect, separable prefix): the 2nd part goes to the end; this is the \"verb bracket\".\n#h Order in the middle: Te-Ka-Mo-Lo\nWhen there are several complements: Temporal (when), Kausal (why), Modal (how), Lokal (where).\n> Ich fahre morgen wegen der Arbeit mit dem Zug nach München. = Tomorrow I'm going to Munich by train for work.\n**Classic mistake**: Heute ich gehe (like English \"Today I go\") → Heute gehe ich. The words und, aber, oder, denn, sondern don't count as position 1: Ich bin müde, aber ich gehe arbeiten.\n#ex Put the words in order, starting with the first word.\nAm Montag / ich / habe / einen Termin = Am Montag habe ich einen Termin.\nJetzt / wir / essen = Jetzt essen wir.\ndu / kannst / mir / helfen / ? (yes/no question) = Kannst du mir helfen?\nLeider / der Zug / hat / Verspätung = Leider hat der Zug Verspätung.\n\n@5|Negation with nicht / kein|A1\n**kein** negates a noun that has ein or no article; **nicht** negates everything else (verb, adjective, noun with der/die/das, proper noun).\n#table\nPositive sentence | Negation | Why\nIch habe ein Auto. | Ich habe kein Auto. | ein + noun\nIch brauche Hilfe. | Ich brauche keine Hilfe. | noun without article\nIch habe Zeit. | Ich habe keine Zeit. | noun without article\nDas ist der Bus nach Hause. | Das ist nicht der Bus nach Hause. | noun with der\nIch komme. | Ich komme nicht. | verb\nDas ist teuer. | Das ist nicht teuer. | adjective\n\nkein declines like ein (keinen, keinem, keiner…) and has a plural: keine Kinder.\n#h Where does nicht go?\n- At the end, to negate the whole sentence: Ich kenne ihn nicht.\n- Before what you are negating: Ich wohne nicht in Berlin. Das ist nicht gut.\n- Before the 2nd part of the verb: Ich habe das nicht gewusst.\n- nicht … sondern (not … but): Nicht heute, sondern morgen.\nOther useful negations: nichts (nothing), niemand (nobody), nie / niemals (never), noch nicht (not yet), nicht mehr (no longer), kein … mehr (no more …).\n**Answering a negative question**: doch = yes (contradicting the negative). Kommst du nicht? → Doch, ich komme!\n#ex Make it negative with nicht or kein.\nIch habe ein Konto bei der Bank. = Ich habe kein Konto bei der Bank. || kein Konto\nIch verstehe das. = Ich verstehe das nicht.\nWir haben Milch. = Wir haben keine Milch. || keine Milch\nDas Essen ist warm. = Das Essen ist nicht warm. || nicht warm\nEr hat Kinder. = Er hat keine Kinder. || keine Kinder\n\n@6|Noun plurals|A1\nThe plural article is always **die**, but the noun ending varies. Learn the plural together with the noun (der Tisch, -e). These patterns work in most cases.\n#table\nEnding | Mainly for | Examples\n-(e)n | almost all feminine nouns | die Frau → Frauen, die Wohnung → Wohnungen\n-e (often + umlaut) | many masculine nouns | der Tag → Tage, der Zug → Züge, der Stuhl → Stühle\n-er (+ umlaut if possible) | short neuter nouns | das Kind → Kinder, das Haus → Häuser\nno ending (sometimes umlaut) | masc./neuter nouns in -er, -el, -en, -chen | der Lehrer → Lehrer, der Apfel → Äpfel\n-s | foreign words, abbreviations, nouns ending in a vowel | das Auto → Autos, die Kita → Kitas\n-nen | feminine nouns in -in | die Lehrerin → Lehrerinnen\n\n#h Remember\n- In the dative plural, add -n to the noun if it doesn't already end in one: mit den Kindern (except -s plurals: mit den Autos).\n- In a dictionary, \"der Tisch, -e\" means the plural is Tische; \"der Apfel, ¨\" means Äpfel.\n- Common irregular plurals: das Museum → Museen, das Visum → Visa.\n#h In everyday life\n> Zwei Brötchen, bitte. = Two bread rolls, please.\n> Ich habe drei Kinder. = I have three children.\n> Die Preise sind gestiegen. = Prices have gone up.\n#ex Give the plural (without the article).\ndie Tasche (bag) = Taschen || die Taschen\ndas Glas (glass) = Gläser || die Gläser\nder Freund (friend) = Freunde || die Freunde\ndie Kollegin (female colleague) = Kolleginnen || die Kolleginnen\ndas Handy (cell phone) = Handys || die Handys\n\n@7|Cases: nominative and accusative|A1\nThe **nominative** is the subject (who is doing the action?). The **accusative** is the direct object (whom? what?). Good news: **only the masculine changes** in the accusative.\n#table\n | Masculine | Feminine | Neuter | Plural\nNominative | der / ein / kein | die / eine | das / ein | die / keine\nAccusative | den / einen / keinen | die / eine | das / ein | die / keine\n\n#h How to find the accusative\n- Find the verb, then the subject (who is doing the action?). Whatever is directly affected by the action is in the accusative.\n> Der Mann kauft den Kaffee. = The man buys the coffee.\n> Den Kaffee kauft der Mann. = Same meaning: the article tells you who does what.\n**Verbs followed by the accusative**: haben, brauchen, kaufen, suchen, finden, nehmen, sehen, kennen, mögen, bestellen, bezahlen, es gibt (there is / there are).\n**Watch out**: sein, werden and heißen don't take an accusative: Das ist der Chef.\n#h In everyday life\n> Ich suche einen Job. = I'm looking for a job.\n> Es gibt keinen Parkplatz. = There's no parking space.\n> Ich nehme den Salat. = I'll have the salad.\n#ex Fill in the article.\nIch brauche ___ (ein) Stift. (der Stift) = einen\nWir suchen ___ (die) Wohnung. = die\n___ (der) Hund bellt. = Der\nHast du ___ (der) Schlüssel? = den\nEs gibt ___ (kein) Aufzug. (der Aufzug) = keinen\n\n@8|The dative|A1–A2\nThe dative is often the indirect object: to whom? for whom? (**wem?**). It is also used after certain prepositions (sheet 10) and certain verbs.\n#table\n | Masculine | Feminine | Neuter | Plural\nNominative | der / ein | die / eine | das / ein | die / –\nAccusative | den / einen | die / eine | das / ein | die / –\nDative | dem / einem | der / einer | dem / einem | den + noun in -n\n\n**Tip**: in the dative, masculine and neuter end in -m, feminine in -r, plural in -n (\"M-R-M-N\").\nTwo objects: usually the person (dative) before the thing (accusative).\n> Ich gebe dem Vermieter den Schlüssel. = I give the landlord the key.\n#h Verbs that take only the dative\nhelfen, danken, antworten, gefallen, gehören, passen, schmecken, gratulieren, folgen, fehlen.\n> Kann ich Ihnen helfen? = Can I help you?\n> Das Essen schmeckt mir. = I like this food.\n> Wem gehört das Fahrrad? = Whose bike is this?\n**Verbs with two objects** (dative + accusative): geben, schenken, zeigen, schicken, erklären, leihen, bringen.\n#ex Use the correct case.\nIch helfe ___ (der) Nachbarin. = der\nWir danken ___ (die) Kollegen. (plural) = den\nEr zeigt ___ (das) Kind ___ (der) Weg. (2 words) = dem den\nDie Jacke gehört ___ (ein) Freund. = einem\nIch gebe ___ (die) Kassiererin das Geld. = der\n\n@9|Pronoun cases and possessives|A1–A2\nPronouns change with the case, just like articles.\n#table\nNominative | Accusative | Dative | Possessive\nich | mich | mir | mein\ndu | dich | dir | dein\ner | ihn | ihm | sein\nsie (she) | sie | ihr | ihr\nes | es | ihm | sein\nwir | uns | uns | unser\nihr | euch | euch | euer\nsie (they) | sie | ihnen | ihr\nSie (polite) | Sie | Ihnen | Ihr\n\n> Ruf mich an! = Call me!\n#h Possessives decline like ein / kein\n#table\n | Masculine | Feminine | Neuter | Plural\nNominative | mein | meine | mein | meine\nAccusative | meinen | meine | mein | meine\nDative | meinem | meiner | meinem | meinen\n\n#h Pitfalls\n- sein = his, ihr = her. As in English, the choice of possessive depends on the owner, but its ending depends on the noun that is owned: Er besucht seine Mutter. Sie besucht ihren Vater.\n- euer drops its -e- when it takes an ending: eure Wohnung.\n- Two pronouns: accusative before dative. Ich gebe es ihm. But: Ich gebe ihm das Buch.\n#ex Fill in the gap.\nKannst du ___ (ich) die Adresse schicken? = mir\nIch kenne ___ (er) nicht. = ihn\nWie geht es ___ (Sie)? = Ihnen\nDas ist ___ (my) Ausweis. (der Ausweis) = mein\nIch suche ___ (my) Brille. (die Brille) = meine\nSie (she) ruft ___ (her) Bruder an. = ihren\n\n@10|Prepositions|A1–A2\nEach preposition requires a particular case. There are three groups to learn by heart.\n#table\nGroup | Prepositions | Example\nAlways accusative | durch, für, gegen, ohne, um, bis | Das ist für den Chef.\nAlways dative | aus, bei, mit, nach, seit, von, zu, gegenüber | Ich fahre mit dem Bus.\nTwo-way | in, an, auf, über, unter, vor, hinter, neben, zwischen | Ich bin im Büro. / Ich gehe ins Büro.\n\n**Memory aid**: accusative = DOGFUB (durch, ohne, gegen, für, um, bis); dative = \"aus-bei-mit-nach-seit-von-zu\".\n#h Two-way prepositions: the question decides\n#table\nQuestion | Case | Typical verbs | Example\nWo? (no movement) | Dative | sein, liegen, stehen, sitzen | Das Buch liegt auf dem Tisch.\nWohin? (movement) | Accusative | gehen, legen, stellen, setzen | Ich lege das Buch auf den Tisch.\n\nContractions: in dem = im, in das = ins, an dem = am, zu dem = zum, zu der = zur, bei dem = beim, von dem = vom.\n#h Going somewhere: nach, zu or in?\n- **nach** + city or country without an article: nach Berlin, nach Frankreich, nach Hause.\n- **zu** + person, shop, specific place: zum Arzt, zur Post. zu Hause = at home (no movement).\n- **in** + a place you go into, or a country with an article: ins Kino, in die Schweiz.\n#ex Fill in the gap.\nIch wohne seit ___ (ein) Jahr in Hamburg. = einem\nWir gehen heute ___ (in, das) Restaurant. = ins\nDer Schlüssel ist ___ (in, die) Tasche. (2 words) = in der\nIch fahre morgen ___ Wien. = nach\nIch muss ___ (zu, der) Zahnarzt. = zum\nOhne ___ (mein) Handy bin ich verloren. (das Handy) = mein\n\n@11|Modal verbs|A1–A2\nThe modal verb is conjugated in 2nd position and the other verb goes to the end, in the infinitive. Note: **ich and er have the same form**, with no ending.\n#table\n | können | müssen | dürfen | wollen | sollen | möchten\nich | kann | muss | darf | will | soll | möchte\ndu | kannst | musst | darfst | willst | sollst | möchtest\ner / sie | kann | muss | darf | will | soll | möchte\nwir | können | müssen | dürfen | wollen | sollen | möchten\nihr | könnt | müsst | dürft | wollt | sollt | möchtet\nsie / Sie | können | müssen | dürfen | wollen | sollen | möchten\n\n#h Tricky nuances for English speakers\n- **nicht müssen** = not have to (not \"must not\"!): Du musst nicht kommen.\n- **nicht dürfen** = must not, prohibition: Hier darf man nicht parken.\n- **wollen** = to want (ich will means \"I want\", not \"I will\") and sounds blunt; in a shop, say möchte instead: Ich möchte bezahlen.\n- **sollen** = someone else asked for it (to be supposed to): Der Arzt sagt, ich soll mehr schlafen.\n- **mögen** (to like) is mostly used on its own: Ich mag Kaffee.\n#h In everyday life\n> Kann ich mit Karte zahlen? = Can I pay by card?\n> Ich muss das Formular ausfüllen. = I have to fill out the form.\n> Ich möchte einen Termin vereinbaren. = I'd like to make an appointment.\n#ex Fill in the right modal verb.\nIch ___ morgen früh aufstehen. (obligation) = muss\n___ du Deutsch sprechen? (ability) = Kannst\nHier ___ man nicht rauchen. (prohibition) = darf\nSie (she) ___ nicht warten, wir sind fertig. (no obligation) = muss || müssen\nIch ___ einen Kaffee, bitte. (polite) = möchte\n\n@12|Separable and inseparable verbs|A1–A2\nIf the prefix is **separable** (stressed when spoken), it goes to the end of the sentence in the present tense. If it is **inseparable**, it stays attached.\n#table\n | Prefixes | Present | Present perfect\nSeparable | ab-, an-, auf-, aus-, bei-, ein-, mit-, nach-, vor-, weg-, zu-, zurück- | Ich rufe dich morgen an. | Ich habe dich angerufen.\nInseparable | be-, emp-, ent-, er-, ge-, miss-, ver-, zer- | Ich bezahle die Rechnung. | Ich habe bezahlt (no ge-).\n\n#h Essential separable verbs\n#table\nVerb | Meaning | Example\nanrufen | to call (on the phone) | Ich rufe beim Amt an.\naufstehen | to get up | Ich stehe um 7 Uhr auf.\neinkaufen | to go shopping | Wir kaufen am Samstag ein.\nankommen | to arrive | Der Zug kommt um 9 Uhr an.\nabholen | to pick up | Ich hole die Kinder ab.\nanmelden | to register | Ich melde mich beim Bürgeramt an.\numziehen | to move (house) | Wir ziehen nächste Woche um.\numsteigen | to change (trains, buses) | Sie müssen in Hannover umsteigen.\nmitbringen | to bring (along) | Ich bringe einen Kuchen mit.\n\n#h When the prefix stays attached\n- After a modal verb: Ich muss morgen früh aufstehen.\n- In a subordinate clause: …, weil ich früh aufstehe.\n- In the present perfect, ge goes in the middle: aufgestanden, eingekauft.\n- With zu: Ich habe keine Lust, einzukaufen.\n#ex Put into the present tense.\nDer Film (anfangen) um 20 Uhr. = Der Film fängt um 20 Uhr an.\nIch (einladen) dich zum Essen. = Ich lade dich zum Essen ein.\nWann (ankommen) du? = Wann kommst du an?\nIch (verstehen) das nicht. = Ich verstehe das nicht.\nWir (aussteigen) an der nächsten Haltestelle. = Wir steigen an der nächsten Haltestelle aus.\n\n@13|The imperative|A2\nThe imperative is used to give an order, advice or an instruction. Add **bitte** to be polite.\n#table\nTo whom | How to form it | kommen | warten | fahren | nehmen | sein\ndu (a friend) | stem, without du | Komm! | Warte! | Fahr! | Nimm! | Sei!\nihr (friends) | ihr form, without ihr | Kommt! | Wartet! | Fahrt! | Nehmt! | Seid!\nSie (polite) | infinitive + Sie | Kommen Sie! | Warten Sie! | Fahren Sie! | Nehmen Sie! | Seien Sie!\n\n#h Rules for the du form\n- Verbs with e → i / ie keep the change: Nimm! Gib! Lies! Hilf!\n- Verbs with a → ä don't: Fahr! Schlaf gut!\n- Stem ending in -t, -d: add -e: Warte! Antworte!\n- Separable prefix at the end: Ruf mich an! Steig ein!\nSoftening an order (very German): **mal, doch, bitte**.\n> Komm mal her! = Come here a sec!\n> Setzen Sie sich doch! = Do sit down!\n#ex Put into the imperative (du form).\n(sprechen) langsamer! = Sprich langsamer!\n(helfen) mir! = Hilf mir!\n(aufmachen) die Tür! = Mach die Tür auf!\n(sein) pünktlich! = Sei pünktlich!\n(lesen) den Brief! = Lies den Brief!\n\n@14|The present perfect (Perfekt)|A2\nThis is the past tense of spoken German. Formation: **haben or sein** conjugated in 2nd position + **past participle** at the end.\n> Ich habe gestern lange gearbeitet. = I worked for a long time yesterday.\n> Wir sind am Wochenende nach Dresden gefahren. = We went to Dresden over the weekend.\n#h haben or sein?\nMost verbs take haben. Use **sein** for:\n- movement: gehen, fahren, fliegen, kommen, laufen, umziehen;\n- a change of state: aufstehen, einschlafen, aufwachen, werden, sterben;\n- and: sein (ich bin gewesen), bleiben (ich bin geblieben), passieren (was ist passiert?).\n#h Forming the participle\n#table\nType | Rule | Examples\nWeak | ge- + stem + -t | machen → gemacht, arbeiten → gearbeitet\nStrong | ge- + stem (often changed) + -en | sehen → gesehen, trinken → getrunken\nSeparable | prefix + ge + participle | einkaufen → eingekauft\nInseparable | no ge- | bezahlen → bezahlt, verstehen → verstanden\nVerbs in -ieren | no ge-, -t | studieren → studiert\nMixed | ge- + changed stem + -t | bringen → gebracht, denken → gedacht, wissen → gewusst\n\n#h Strong participles to know\n#table\nInfinitive | Participle | Auxiliary\nsein | gewesen | sein\ngehen | gegangen | sein\nkommen | gekommen | sein\nfahren | gefahren | sein\nbleiben | geblieben | sein\nessen | gegessen | haben\ntrinken | getrunken | haben\nnehmen | genommen | haben\nsprechen | gesprochen | haben\nschreiben | geschrieben | haben\nfinden | gefunden | haben\nhelfen | geholfen | haben\ntreffen | getroffen | haben\n\n#ex Put into the present perfect.\nIch kaufe Brot. = Ich habe Brot gekauft.\nWir fliegen nach Spanien. = Wir sind nach Spanien geflogen.\nEr versteht die Frage nicht. = Er hat die Frage nicht verstanden.\nSie (she) ruft den Arzt an. = Sie hat den Arzt angerufen.\nWas passiert? = Was ist passiert?\nIch vergesse meinen Schlüssel. = Ich habe meinen Schlüssel vergessen.\n\n@15|The simple past (Präteritum): the essentials|A2\nIn speech, the present perfect is used, except for a few very common verbs that are almost always used in the simple past: **sein, haben, the modal verbs**, and **es gab** (there was / there were).\n#table\n | sein | haben | können | müssen | wollen | werden\nich | war | hatte | konnte | musste | wollte | wurde\ndu | warst | hattest | konntest | musstest | wolltest | wurdest\ner / sie | war | hatte | konnte | musste | wollte | wurde\nwir | waren | hatten | konnten | mussten | wollten | wurden\nihr | wart | hattet | konntet | musstet | wolltet | wurdet\nsie / Sie | waren | hatten | konnten | mussten | wollten | wurden\n\nModal verbs lose their umlaut in the simple past (können → konnte), and ich = er.\n#h For reading newspapers\n- Weak verbs: stem + -te: machen → ich machte.\n- Strong verbs: vowel change: gehen → ging, kommen → kam, sehen → sah, fahren → fuhr.\n#h In everyday life\n> Wie war dein Wochenende? = How was your weekend?\n> Ich hatte keine Zeit. = I didn't have time.\n> Früher gab es hier einen Bäcker. = There used to be a bakery here.\n#ex Put into the simple past.\nIch bin müde. = Ich war müde.\nWir haben Glück. = Wir hatten Glück.\nEr muss lange warten. = Er musste lange warten.\nKannst du schlafen? = Konntest du schlafen?\nEs gibt ein Problem. = Es gab ein Problem.\n\n@16|Reflexive verbs|A2\nThe reflexive pronoun is usually in the **accusative**. It switches to the **dative** when the sentence already has a direct object.\n#table\nSubject | Accusative | Dative | Accusative example | Dative example\nich | mich | mir | Ich wasche mich. | Ich wasche mir die Hände.\ndu | dich | dir | Du freust dich. | Du putzt dir die Zähne.\ner / sie / es | sich | sich | Er setzt sich. | Er kauft sich ein Auto.\nwir | uns | uns | Wir treffen uns. | Wir machen uns Sorgen.\nihr | euch | euch | Ihr beeilt euch. | Ihr nehmt euch Zeit.\nsie / Sie | sich | sich | Setzen Sie sich! | Merken Sie sich das.\n\nOnly the ich and du forms differ between accusative and dative.\n#h Everyday reflexive verbs\nsich anmelden (to register), sich beeilen (to hurry), sich bewerben (to apply), sich entschuldigen (to apologize), sich erkälten (to catch a cold), sich fühlen (to feel), sich freuen (to be glad), sich interessieren (to be interested), sich kümmern (to take care of), sich setzen (to sit down), sich treffen (to meet up), sich (D) etwas merken (to remember, to memorize), sich (D) Sorgen machen (to worry).\nPosition of the pronoun: right after the conjugated verb, or after the inverted subject: Heute fühle ich mich besser.\n#ex Fill in the reflexive pronoun.\nIch freue ___ auf das Wochenende. = mich\nDu musst ___ beeilen! = dich\nIch kaufe ___ eine neue Jacke. = mir\nWir treffen ___ um acht. = uns\nKannst du ___ das merken? = dir\n\n@17|Conjunctions and subordinate clauses|A2–B1\n**Coordinating conjunctions** don't change the word order; **subordinating conjunctions** send the conjugated verb to the very end.\n#table\nType | Conjunctions | Effect | Example\nCoordinating (position 0) | und, aber, oder, denn, sondern | normal word order | Ich bleibe zu Hause, denn ich bin krank.\nSubordinating | weil, dass, wenn, ob, als, bevor, nachdem, obwohl, damit, während, seit, bis | verb at the end | Ich bleibe zu Hause, weil ich krank bin.\nLinking adverb (position 1) | deshalb, deswegen, trotzdem, dann, danach, sonst | inversion | Ich bin krank, deshalb bleibe ich zu Hause.\n\n#h Rules for subordinate clauses\n- Always a comma before the conjunction.\n- Conjugated verb last: …, weil ich gestern lange gearbeitet habe.\n- Separable prefix joins back onto the verb: …, wenn der Zug ankommt.\n- Subordinate clause first = position 1, so verb-comma-verb: Wenn ich Zeit habe, komme ich.\n#h Choosing the right one\n- **als** for a single event in the past; **wenn** for the present, the future or repeated events (English uses \"when\" for both).\n- **wenn** = if (condition); **ob** = if / whether (indirect question: Ich weiß nicht, ob er kommt.).\n- **sondern** = but rather, after a negation to correct something (nicht Bier, sondern Wein).\n#ex Join the two sentences.\nIch lerne Deutsch. Ich wohne in Deutschland. (weil) = Ich lerne Deutsch, weil ich in Deutschland wohne.\nIch glaube. Der Laden ist heute zu. (dass) = Ich glaube, dass der Laden heute zu ist.\nEs regnet. Wir gehen spazieren. (trotzdem) = Es regnet, trotzdem gehen wir spazieren.\nIch habe Zeit. Ich rufe dich an. (wenn, at the start) = Wenn ich Zeit habe, rufe ich dich an.\nWeißt du? Der Bus fährt heute. (ob) = Weißt du, ob der Bus heute fährt?\n\n@18|Adjective endings|A2–B1\nA predicate adjective (after sein) never takes an ending: Die Wohnung ist groß. Before a noun, it takes an ending that depends on the article. **If the article already shows the gender and case, the adjective only needs -e or -en; otherwise, the adjective has to show it.**\n#h 1. After der / die / das\n#table\n | Masculine | Feminine | Neuter | Plural\nN | der neue Job | die neue Stelle | das neue Auto | die neuen Nachbarn\nA | den neuen Job | die neue Stelle | das neue Auto | die neuen Nachbarn\nD | dem neuen Job | der neuen Stelle | dem neuen Auto | den neuen Nachbarn\nG | des neuen Jobs | der neuen Stelle | des neuen Autos | der neuen Nachbarn\n\nTip: -e in the 5 top-left boxes, -en everywhere else.\n#h 2. After ein / kein / mein\n#table\n | Masculine | Feminine | Neuter | Plural\nN | ein neuer Job | eine neue Stelle | ein neues Auto | meine neuen Nachbarn\nA | einen neuen Job | eine neue Stelle | ein neues Auto | meine neuen Nachbarn\nD | einem neuen Job | einer neuen Stelle | einem neuen Auto | meinen neuen Nachbarn\nG | eines neuen Jobs | einer neuen Stelle | eines neuen Autos | meiner neuen Nachbarn\n\nDifference from table 1: only 3 boxes: ein neuer (masc. nom.), ein neues (neut. nom. and acc.).\n#h 3. Without an article\n#table\n | Masculine | Feminine | Neuter | Plural\nN | frischer Kaffee | frische Milch | frisches Brot | frische Brötchen\nA | frischen Kaffee | frische Milch | frisches Brot | frische Brötchen\nD | frischem Kaffee | frischer Milch | frischem Brot | frischen Brötchen\n\nThe adjective takes the ending of the definite article (der → -er, dem → -em).\n#h In everyday life\n> Ich suche eine günstige Wohnung mit großem Balkon. = I'm looking for an affordable apartment with a big balcony.\n> Ich hätte gern den grünen Pullover. = I'd like the green sweater.\n#ex Add the ending (write the whole adjective).\nDas ist ein gut___ Restaurant. = gutes\nIch nehme den rot___ Wein. = roten\nWir wohnen in einer klein___ Stadt. = kleinen\nEr hat einen neu___ Chef. = neuen\nKalt___ Bier ist das Beste. = Kaltes\nMit freundlich___ Grüßen = freundlichen\n\n@19|Comparative and superlative|A2\nComparative: adjective + **-er** (+ **als** = than). Superlative: **am** + adjective + **-sten**, or before a noun: der/die/das + adjective + -ste.\n#table\nBase | Comparative | Superlative | Note\nbillig | billiger | am billigsten | regular\nalt | älter | am ältesten | umlaut + -esten\ngroß | größer | am größten | umlaut\nteuer | teurer | am teuersten | drops the e\ngut | besser | am besten | irregular\nviel | mehr | am meisten | irregular\ngern | lieber | am liebsten | irregular\nhoch | höher | am höchsten | irregular\nnah | näher | am nächsten | irregular\n\n#h Comparing\n- More than: Die Bahn ist schneller als der Bus.\n- As … as: Das Zimmer ist so groß wie meins.\n- Not as … as: Das ist nicht so teuer wie in Paris.\n- Preference: Ich trinke lieber Tee. Am liebsten trinke ich Wasser.\n**Watch out**: als with the comparative (\"than\"), wie for equality (\"as\"). The correct form is besser als.\n#ex Fill in the gap.\nMünchen ist ___ (teuer) als Leipzig. = teurer\nIm Juli ist es am ___ (warm). = wärmsten\nMein Bruder ist ___ (alt) als ich. = älter\nWas trinkst du ___ (gern), Tee oder Kaffee? = lieber\nWo ist die ___ (nah) Apotheke? = nächste\n\n@20|Future and polite Konjunktiv II|A2–B1\nThe future is formed with **werden** + infinitive at the end. In everyday speech, people often prefer the present + a time word; werden is mainly used for a promise, a prediction or an assumption.\n> Ich werde dich morgen anrufen. = I'll call you tomorrow.\n> Er wird wohl krank sein. = He's probably sick.\n#h Konjunktiv II: being polite, wishing, supposing\n#table\n | haben | sein | werden | können | müssen | sollen\nich | hätte | wäre | würde | könnte | müsste | sollte\ndu | hättest | wär(e)st | würdest | könntest | müsstest | solltest\ner / sie | hätte | wäre | würde | könnte | müsste | sollte\nwir / sie / Sie | hätten | wären | würden | könnten | müssten | sollten\n\nFor other verbs: **würde + infinitive**. Ich würde gern mitkommen.\n#h Essential polite phrases\n> Ich hätte gern ein Stück Kuchen. = I'd like a piece of cake.\n> Könnten Sie mir bitte helfen? = Could you help me, please?\n> Würden Sie das bitte wiederholen? = Could you repeat that, please?\n> Du solltest zum Arzt gehen. = You should see a doctor.\n> Wenn ich mehr Zeit hätte, würde ich mehr Deutsch lernen. = If I had more time, I would study more German.\n#ex Make the sentence polite.\nIch will einen Kaffee. = Ich hätte gern einen Kaffee. || Ich möchte einen Kaffee.\nKannst du das Fenster zumachen? = Könntest du das Fenster zumachen?\nHaben Sie Zeit? = Hätten Sie Zeit?\nWiederholen Sie das! = Würden Sie das bitte wiederholen? || Könnten Sie das bitte wiederholen?\nWenn ich reich bin, kaufe ich ein Haus. (hypothetical) = Wenn ich reich wäre, würde ich ein Haus kaufen.\n\n@21|Verbs with prepositions, da- and wo-|B1\nMany verbs are used with a **fixed preposition**, often different from the one English uses. Learn them as a unit: verb + preposition + case.\n#table\nVerb | Meaning | Example\nwarten auf + A | to wait for | Ich warte auf den Bus.\nsich freuen auf + A | to look forward to | Ich freue mich auf den Urlaub.\nsich freuen über + A | to be pleased about | Ich freue mich über das Geschenk.\ndenken an + A | to think of / about | Ich denke an dich.\nsich kümmern um + A | to take care of | Wer kümmert sich um die Kinder?\nsich interessieren für + A | to be interested in | Ich interessiere mich für Politik.\nsich ärgern über + A | to be annoyed about | Ich ärgere mich über den Lärm.\nfragen nach + D | to ask about / for | Er fragt nach dem Weg.\nteilnehmen an + D | to take part in | Ich nehme am Kurs teil.\nAngst haben vor + D | to be afraid of | Sie hat Angst vor Hunden.\nabhängen von + D | to depend on | Das hängt vom Wetter ab.\nsich gewöhnen an + A | to get used to | Ich gewöhne mich an das Wetter.\n\n#h da- (answer) and wo- (question) for things\nYou don't say auf es (\"on it\"), but **da(r) + preposition**. Question: **wo(r) + preposition**. Add an -r- if the preposition starts with a vowel.\n#table\nPreposition | Question (thing) | Answer (thing) | Person\nauf | Worauf wartest du? | Ich warte darauf. | Auf wen wartest du?\nan | Woran denkst du? | Ich denke daran. | An wen denkst du?\nüber | Worüber sprecht ihr? | Wir sprechen darüber. | Über wen…?\nmit | Womit fährst du? | Ich fahre damit. | Mit wem…?\n\nFor a person, keep preposition + pronoun: Ich warte auf ihn.\n#ex Fill in the gap.\nIch warte ___ deine Antwort. = auf\n___ denkst du? (thing) = Woran\nHast du ___ gedacht, den Müll rauszubringen? = daran\nEr interessiert sich nicht ___ Fußball. = für\nIch nehme ___ Integrationskurs teil. = am\n\n@22|Relative clauses|B1\nA relative clause starts with a **relative pronoun** that looks like the definite article. Its gender and number come from the noun it replaces; its case comes from its role in the relative clause. The verb goes to the end, and the clause is set off by commas.\n#table\n | Masculine | Feminine | Neuter | Plural\nNominative (who, which) | der | die | das | die\nAccusative (whom, which) | den | die | das | die\nDative (to whom) | dem | der | dem | **denen**\nGenitive (whose) | **dessen** | **deren** | **dessen** | **deren**\n\n#h 3-step method\n- Which noun am I replacing? → gender and number. What is its role in the relative clause? → case. Then pronoun + rest + verb at the end.\n> Der Mann, der dort steht, ist mein Nachbar. = The man who is standing over there is my neighbor.\n> Der Mann, den ich kenne, ist mein Nachbar. = The man (whom) I know is my neighbor.\n> Der Mann, dem ich helfe, ist mein Nachbar. = The man (whom) I'm helping is my neighbor.\n> Die Kollegen, mit denen ich arbeite, sind nett. = The colleagues I work with are nice.\n#h Special cases\n- Preposition before the pronoun: Die Wohnung, in der ich wohne, ist klein.\n- After das, alles, etwas, nichts: was. Das ist alles, was ich weiß.\n- For a place: wo. Die Stadt, wo ich wohne…\n#ex Fill in the relative pronoun.\nDas ist die Frau, ___ in der Apotheke arbeitet. = die\nDer Film, ___ wir gestern gesehen haben, war gut. = den\nDas Kind, ___ ich das Buch gegeben habe, ist mein Neffe. = dem\nDie Leute, ___ ich gestern getroffen habe, kommen aus Spanien. = die\nDer Kollege, ___ Frau Französin ist, heißt Jan. = dessen\nDas Problem, ___ wir gesprochen haben, ist gelöst. (über) = über das\n\n@23|Infinitive with zu, um … zu|B1\nAfter many verbs, nouns and adjectives, the infinitive is preceded by **zu** and placed at the end, after a comma. **No zu** after modal verbs or after gehen, lernen, lassen, bleiben, hören, sehen.\n#table\nTrigger | Example\nversuchen, vergessen, anfangen, aufhören, planen, vorhaben, bitten | Ich habe vergessen, dich anzurufen.\nLust haben, Zeit haben, keine Ahnung haben, es ist Zeit | Hast du Lust, ins Kino zu gehen?\nes ist wichtig / schwer / verboten / möglich | Es ist verboten, hier zu parken.\n\nWith a separable verb, zu slips into the middle: anzurufen, einzukaufen, aufzustehen.\n#table\nStructure | Meaning | Example\num … zu | in order to (purpose) | Ich lerne Deutsch, um in Deutschland zu arbeiten.\nohne … zu | without (…-ing) | Er ist gegangen, ohne Tschüss zu sagen.\nstatt … zu | instead of (…-ing) | Statt zu lernen, schaut er Netflix.\n\n**um … zu or damit?** Use um … zu when the subject is the same. Otherwise use damit + subordinate clause: Ich spreche langsam, damit du mich verstehst.\n#ex Fill in the gap.\nIch habe keine Zeit, ___ (kochen). = zu kochen\nVergiss nicht, die Tür ___ (abschließen)! = abzuschließen\nIch spare Geld, ___ ein Auto ___ (kaufen). (2 gaps) = um zu kaufen\nIch kann heute ___ (kommen). = kommen\nEr hat versucht, mich ___ (erreichen). = zu erreichen\n\n@24|The passive|B1\nThe passive puts the action at the center. It is everywhere in official letters and on signs. Formation: conjugated **werden** + past participle at the end.\n#table\nTense | Formation | Example\nPresent | werden + participle | Das Paket wird morgen geliefert.\nSimple past | wurde + participle | Die Straße wurde gesperrt.\nPresent perfect | sein + participle + worden | Mein Fahrrad ist gestohlen worden.\nWith a modal | modal + participle + werden | Das Formular muss bis Freitag ausgefüllt werden.\n\nIn the present perfect passive, it's **worden** (not geworden). To say who does the action: von + dative.\n#h Action passive vs. state passive\n- werden = the action: Der Laden wird um 20 Uhr geschlossen.\n- sein = the result: Der Laden ist geschlossen.\n#h In everyday life\n> Hier wird Deutsch gesprochen. = German is spoken here.\n> Ihr Antrag wurde genehmigt. = Your application has been approved.\nCommon active alternative: man + active verb. Man spricht hier Deutsch.\n#ex Put into the passive.\nMan repariert die Heizung. (present) = Die Heizung wird repariert.\nMan hat den Termin abgesagt. (present perfect) = Der Termin ist abgesagt worden.\nMan muss die Miete am Monatsanfang bezahlen. = Die Miete muss am Monatsanfang bezahlt werden.\nMan baute das Haus 1910. (simple past) = Das Haus wurde 1910 gebaut.\n\n@25|The genitive|B1\nThe genitive expresses possession. In speech it is often replaced by von + dative, but you'll find it in writing, in official documents and after certain prepositions.\n#table\n | Masculine | Feminine | Neuter | Plural\nDefinite | des Vertrags | der Wohnung | des Kindes | der Kinder\nIndefinite | eines Vertrags | einer Wohnung | eines Kindes | –\n\nMasculine and neuter: the noun takes **-s** (or -es for short words). Feminine and plural: the noun doesn't change. Proper names: just add -s, with no apostrophe: Annas Wohnung.\n- Written: die Adresse des Arbeitgebers. Spoken: die Adresse vom Arbeitgeber.\n#h Prepositions + genitive\n#table\nPreposition | Meaning | Example\nwegen | because of | Wegen des Streiks fährt kein Zug.\ntrotz | despite | Trotz des Regens gehen wir raus.\nwährend | during | während der Arbeitszeit\ninnerhalb / außerhalb | inside / outside (of) | außerhalb der Öffnungszeiten\nstatt / anstatt | instead of | Statt eines Briefes schicke ich eine E-Mail.\n\nIn speech, wegen and trotz are very often followed by the dative (wegen dem Streik).\n#ex Fill in the gap.\nDas ist das Auto ___ (mein) Vaters. = meines\nDie Tür ___ (die) Wohnung ist kaputt. = der\n___ (wegen, das) Wetters bleiben wir zu Hause. (2 words) = Wegen des\nDas ist ___ (Lisa) Fahrrad. = Lisas\n\n@26|Numbers, time and dates|A1\nFrom 21 to 99, you say **the unit before the ten**, joined by und, as a single word: 24 = vierundzwanzig (\"four-and-twenty\").\n#table\n1–12 | Tens | Large numbers\neins, zwei, drei … elf, zwölf | zwanzig, dreißig (no z), vierzig … neunzig | hundert, tausend, eine Million\n13–19: dreizehn … neunzehn | 35 = fünfunddreißig | 1 250 = tausendzweihundertfünfzig\n\nPrices: 3,50 € = drei Euro fünfzig. On the phone, people often say zwo instead of zwei. German uses a comma for decimals and a point for thousands, the opposite of English: 1.250,99 €.\n#h Telling the time\n#table\nTime | Official | Everyday\n8:10 | acht Uhr zehn | zehn nach acht\n8:15 | acht Uhr fünfzehn | Viertel nach acht\n8:30 | acht Uhr dreißig | halb neun (!)\n8:45 | acht Uhr fünfundvierzig | Viertel vor neun\n20:00 | zwanzig Uhr | acht Uhr abends\n\n**Trap no. 1**: halb neun = 8:30 (\"half to nine\"), not 9:30. Careful: British \"half nine\" means 9:30!\n#h Dates\n- Ordinal numbers: -te up to 19, -ste from 20 on. der zweite, der zwanzigste. Irregular: der erste, der dritte, der siebte.\n- Heute ist der dritte Oktober. On what date? Am dritten Oktober.\n- Time prepositions: am + day (am Montag), um + clock time, im + month or season (im Mai), in + future period (in zwei Wochen), vor + past period, like \"ago\" (vor drei Jahren).\n#ex Write it out in words or translate.\n47 = siebenundvierzig\n9:30 (everyday) = halb zehn\n2:45 p.m. (everyday) = Viertel vor drei\nOn May 1st, I'm on vacation. = Am ersten Mai habe ich Urlaub.\nTwo years ago, I moved. = Vor zwei Jahren bin ich umgezogen.\n\n@27|Questions (W-Fragen)|A1\nOpen question: question word in position 1, verb in 2. Yes/no question: verb in 1.\n#table\nWord | Meaning | Example\nwer / wen / wem / wessen | who / whom / to whom / whose (N / A / D / G) | Wer ist das? Wem gehört das?\nwas | what | Was kostet das?\nwo | where (location, no movement) | Wo ist die Toilette?\nwohin | where (to) | Wohin fährt dieser Bus?\nwoher | where from | Woher kommst du?\nwann | when | Wann öffnet das Bürgeramt?\nwie | how | Wie funktioniert das?\nwie viel / wie viele | how much / how many | Wie viele Zimmer hat die Wohnung?\nwie lange | how long | Wie lange dauert das?\nwarum | why | Warum ist der Zug verspätet?\nwelcher / welche / welches | which | Welche Linie fährt zum Bahnhof?\nwas für ein | what kind of | Was für ein Auto hast du?\n\n#h Pitfalls\n- wer = who; wo = where. Don't be fooled by the look-alikes: wer is not \"where\"!\n- In speech, the word is often split: Wo gehst du hin? Wo kommst du her?\n- Indirect question: verb at the end. Können Sie mir sagen, wo der Bahnhof ist?\n#h Survival phrases\n> Wie bitte? = Sorry? / Pardon?\n> Wo finde ich die Milch? = Where can I find the milk?\n> Wie lange haben Sie heute geöffnet? = How late are you open today?\n#ex Find the question word.\n___ wohnst du? – In Köln. = Wo\n___ kostet das Ticket? – 3 Euro. = Wie viel\n___ hast du Geburtstag? – Im Mai. = Wann\n___ hilfst du? – Meiner Nachbarin. = Wem\n___ Zug nimmst du? – Den ICE um 10 Uhr. = Welchen\n___ gehst du? – Zum Supermarkt. = Wohin\n\n@28|Past Konjunktiv II: regrets and reproaches|B2\nTo talk about a past situation **that didn't happen** (regret, reproach, hypothesis), use **hätte** or **wäre** + past participle. It's the equivalent of English \"would have…\". The choice between hätte and wäre follows the present perfect rule (sheet 14).\n#table\nPresent perfect (real) | Past Konjunktiv II (unreal) | Meaning\nIch habe gewartet. | Ich hätte gewartet. | I would have waited.\nIch bin gekommen. | Ich wäre gekommen. | I would have come.\nIch habe kommen können. | Ich hätte kommen können. | I could have come.\nDu hast anrufen sollen. | Du hättest anrufen sollen. | You should have called.\n\nWith a modal verb, there is a **double infinitive** at the end: hätte … machen müssen / können / sollen.\n#h Uses\n- **Unreal hypothesis**: Wenn ich das gewusst hätte, wäre ich gekommen.\n- **Regret**: Hätte ich bloß mehr gespart!\n- **Reproach**: Du hättest mir Bescheid sagen sollen.\n- **Almost**: Fast wäre ich zu spät gekommen.\n#h In everyday life\n> Wenn ich früher losgefahren wäre, hätte ich den Zug nicht verpasst. = If I had left earlier, I wouldn't have missed the train.\n> Das hätten Sie mir früher sagen müssen. = You should have told me that earlier.\n> An deiner Stelle hätte ich den Vertrag nicht unterschrieben. = If I were you, I wouldn't have signed the contract.\n#ex Fill in hätte or wäre (correctly conjugated).\nWenn ich das gewusst ___, wäre ich gekommen. = hätte\nWenn du früher aufgestanden ___, hättest du den Bus bekommen. = wärst || wärest\nDu ___ mich anrufen sollen! = hättest\nFast ___ ich den Termin vergessen. = hätte\nWenn wir den Zug genommen ___, wären wir schon da. = hätten\n\n@29|Konjunktiv I and reported speech|B2\nNewspapers, radio and official letters report what other people said using **Konjunktiv I**. It shows that you are quoting without taking a position. In practice, it is mainly used in the **3rd person singular**: stem + **-e**.\n#table\nInfinitive | Indicative | Konjunktiv I | Example\nsein | er ist | er sei | Er sagt, er sei krank.\nhaben | er hat | er habe | Sie sagt, sie habe keine Zeit.\nkönnen | er kann | er könne | Er meint, er könne nicht kommen.\nwerden | er wird | er werde | Sie erklärt, sie werde kündigen.\nkommen | er kommt | er komme | Er sagt, er komme morgen.\n\n**If the Konjunktiv I looks the same as the indicative** (especially in the plural: sie haben), use the Konjunktiv II instead: Sie sagen, sie hätten keine Zeit.\n#h Converting a sentence\n- Past: habe / sei + participle. „Ich bin gefahren.\" → Er sagt, er sei gefahren.\n- Question: ob or a question word + verb at the end. Sie fragt, ob ich Zeit habe.\n- Command: sollen. „Warten Sie!\" → Er sagt, ich solle warten.\n- Pronouns change depending on who is speaking: „Ich komme\" (Anna) → Anna sagt, sie komme.\n#h In everyday life\n> Der Minister sagte, die Lage sei ernst. = The minister said the situation was serious.\n> Die Firma teilte mit, sie habe keine Fehler gemacht. = The company stated that it had not made any mistakes.\n#ex Put into reported speech (one word only).\nEr sagt: „Ich bin krank.\" → Er sagt, er ___ krank. = sei\nSie sagt: „Ich habe keine Zeit.\" → Sie sagt, sie ___ keine Zeit. = habe\nDer Chef sagt: „Das Projekt kann warten.\" → Er sagt, das Projekt ___ warten. = könne\nDie Zeitung schreibt: „Der Minister ist zurückgetreten.\" → Der Minister ___ zurückgetreten. = sei\nSie sagen: „Wir haben das nicht gewusst.\" → Sie sagen, sie ___ das nicht gewusst. = hätten\n\n@30|Advanced passive and its alternatives|B2\nAt B2 level, you'll meet the passive in every tense and with modal verbs, but also constructions that have **a passive meaning without werden**. They are everywhere in regulations and official letters.\n#table\nConstruction | Meaning | Example\nmodal + participle + werden | passive with a modal | Die Miete muss pünktlich bezahlt werden.\nimpersonal passive | one / people (no subject) | Hier wird nicht geraucht.\nsich lassen + infinitive | can be done | Das Problem lässt sich lösen.\nsein + zu + infinitive | must / can be done | Der Antrag ist bis Freitag einzureichen.\nadjective in -bar | …-able | lösbar, machbar, erreichbar\nman + active | one / you / people | Man muss die Miete pünktlich bezahlen.\n\n**sein + zu + infinitive** has two meanings depending on context: obligation (Die Gebühr ist sofort zu zahlen = must be paid immediately) or possibility, especially in the negative (Das ist nicht zu verstehen = it can't be understood).\n#h In everyday life\n> Der Ausweis ist bei der Anmeldung vorzulegen. = Your ID card must be presented at registration.\n> Ich bin telefonisch gut erreichbar. = I can easily be reached by phone.\n> Das lässt sich leicht ändern. = That can easily be changed.\n#ex Rewrite using the construction given.\nDas Problem kann gelöst werden. (sich lassen) = Das Problem lässt sich lösen.\nDer Antrag muss bis Freitag eingereicht werden. (sein + zu) = Der Antrag ist bis Freitag einzureichen.\nDas kann man nicht lesen. (adjective in -bar) = Das ist nicht lesbar.\nMan musste die Rechnung bezahlen. (simple past passive) = Die Rechnung musste bezahlt werden.\nMan arbeitet hier sonntags nicht. (impersonal passive) = Hier wird sonntags nicht gearbeitet. || Sonntags wird hier nicht gearbeitet.\n\n@31|Two-part conjunctions|B2\nTo structure an argument, German uses two-part conjunctions. They link two words, two phrases or two clauses.\n#table\nConjunction | Meaning | Example\nsowohl … als auch | both … and | Er spricht sowohl Deutsch als auch Englisch.\nnicht nur … sondern auch | not only … but also | Die Wohnung ist nicht nur groß, sondern auch billig.\nweder … noch | neither … nor | Ich trinke weder Kaffee noch Tee.\nentweder … oder | either … or | Entweder kommst du mit, oder du bleibst hier.\nzwar … aber | admittedly … but | Die Wohnung ist zwar teuer, aber sehr schön.\neinerseits … andererseits | on the one hand … on the other hand | Einerseits verdiene ich gut, andererseits habe ich keine Zeit.\nje … desto / umso | the more … the more | Je mehr ich übe, desto besser spreche ich.\n\n#h Word order with je … desto\n- **je** + comparative opens a subordinate clause: the verb goes to the end. Je früher wir losfahren, …\n- **desto** + comparative is in position 1: the verb comes right after, then the subject. …, desto weniger Stau gibt es.\n- weder … noch already makes the sentence negative: no extra nicht or kein.\n#ex Fill in the gaps (write both words, separated by a space).\nIch trinke ___ Kaffee ___ Tee. (neither … nor) = weder noch\n___ mehr ich lerne, ___ mehr verstehe ich. (the more … the more) = Je desto || Je umso\nEr spricht ___ Deutsch ___ Englisch. (both … and, 3 words) = sowohl als auch\nDie Wohnung ist ___ teuer, ___ sehr schön. (admittedly … but) = zwar aber\n___ wir fahren mit dem Zug, ___ wir nehmen das Auto. (either … or) = Entweder oder\n\n@32|Participles used as adjectives|B2\nIn writing, instead of a relative clause, German often puts a **participle before the noun**. It is declined like an adjective (sheet 18) and can be preceded by other elements: this is the \"extended attribute\", typical of newspapers and official texts.\n#table\nParticiple | Formation | Meaning | Example\nPartizip I | infinitive + -d | ongoing action (active) | die steigenden Preise (rising prices)\nPartizip II | past participle | action undergone or completed | das gekaufte Auto (the car that was bought)\n\n#h From relative clause to participle\n#table\nRelative clause | Participle\ndie Preise, die seit Jahren steigen | die seit Jahren steigenden Preise\ndie Unterlagen, die vom Amt geschickt wurden | die vom Amt geschickten Unterlagen\nein Kind, das schläft | ein schlafendes Kind\nder Zug, der gerade ankommt | der gerade ankommende Zug\n\n**To read** a long written sentence: spot the article, then skip ahead to the noun; everything in between describes that noun.\n#h In everyday life\n> Bitte senden Sie uns die vollständig ausgefüllten Formulare zurück. = Please return the fully completed forms to us.\n> Die stark gestiegenen Mieten sind ein großes Problem. = The sharply increased rents are a big problem.\n#ex Fill in the correctly declined participle.\nDie Preise steigen. → die ___ Preise (steigen) = steigenden\nDer Brief wurde gestern geschickt. → der gestern ___ Brief = geschickte\nein Kind, das schläft → ein ___ Kind = schlafendes\nDie Unterlagen wurden ausgefüllt. → die ___ Unterlagen = ausgefüllten\nWasser, das kocht → ___ Wasser = kochendes\n\n@33|Nominal style and verb + noun expressions|B2\nWritten and administrative German prefers **nouns** to verbs. Being able to switch from one to the other helps you read official letters and write more formally.\n#table\nVerb | Noun | Written example\nanmelden | die Anmeldung | Die Anmeldung erfolgt online.\nankommen | die Ankunft | Nach der Ankunft des Zuges …\nabfahren | die Abfahrt | Vor der Abfahrt bitte einsteigen.\nentscheiden | die Entscheidung | Die Entscheidung fällt morgen.\nbeantragen | die Beantragung | Für die Beantragung brauchen Sie …\nrauchen | das Rauchen | Das Rauchen ist hier verboten.\n\n> Nachdem der Zug angekommen ist, … = Nach der Ankunft des Zuges, …\n#h Verb + noun expressions (Nomen-Verb-Verbindungen)\nThe meaning is carried by the noun; the verb is fixed and must be learned with it.\n#table\nExpression | Meaning\neinen Antrag stellen | to submit an application\neine Entscheidung treffen | to make a decision\nin Frage stellen | to call into question\nzur Verfügung stehen / stellen | to be / make available\nBescheid geben / sagen | to let someone know\nRücksicht nehmen auf + A | to show consideration for\nin Kraft treten | to come into force\nzur Kenntnis nehmen | to take note of\neine Rolle spielen | to play a role\nKritik üben an + D | to criticize\n\n#ex Fill in the verb or the noun.\nWir müssen heute eine Entscheidung ___. (make) = treffen\nIch möchte einen Antrag auf Elterngeld ___. (submit) = stellen\nDas neue Gesetz ___ im Januar in Kraft. = tritt\nBitte ___ Sie mir bis Freitag Bescheid. = geben || sagen\nFür Fragen ___ wir Ihnen gern zur Verfügung. = stehen\nankommen → die ___ = Ankunft\n\n@34|Prepositions in formal writing|B2\nOfficial letters, contracts and the press use prepositions that you rarely hear in speech. Most of them take the **genitive**.\n#table\nPreposition | Case | Meaning | Example\naufgrund | G | due to, because of | aufgrund der hohen Kosten\nangesichts | G | in view of | angesichts der Lage\nbezüglich / hinsichtlich | G | regarding | bezüglich Ihrer Anfrage\ninfolge | G | as a result of | infolge des Sturms\nmithilfe | G | with the help of | mithilfe eines Wörterbuchs\nanlässlich | G | on the occasion of | anlässlich seines Geburtstags\nzugunsten | G | in favor of | zugunsten der Mieter\nlaut | D (or G) | according to | laut Vertrag\ngemäß / entsprechend | D | in accordance with | gemäß § 5\ndank | D (or G) | thanks to | dank Ihrer Hilfe\nzufolge | D, after the noun | according to | dem Bericht zufolge\n\n#h In everyday life\n> Bezüglich Ihrer Anfrage vom 3. Mai teilen wir Ihnen Folgendes mit. = Regarding your inquiry of May 3, we would like to inform you of the following.\n> Laut Vertrag beträgt die Kündigungsfrist drei Monate. = According to the contract, the notice period is three months.\n> Infolge des Streiks fallen heute viele Züge aus. = As a result of the strike, many trains are canceled today.\n#ex Choose the preposition.\n___ Vertrag beträgt die Kündigungsfrist drei Monate. (according to) = Laut\n___ Ihrer Anfrage vom 3. Mai … (regarding) = Bezüglich || Hinsichtlich\n___ des Streiks fallen viele Züge aus. (due to) = Aufgrund || Wegen || Infolge\n___ Ihrer Hilfe haben wir es geschafft. (thanks to) = Dank\n___ der hohen Kosten wurde das Projekt gestoppt. (in view of) = Angesichts\n\n@35|Advanced subordinate clauses|B2\nBeyond weil, dass and wenn, these conjunctions let you express manner, consequence, unreal comparison or condition. The verb always goes to the end (sheet 17).\n#table\nConjunction | Meaning | Example\nindem | by (+ -ing) | Man spart Energie, indem man weniger heizt.\nsodass / so …, dass | so that, with the result that | Es regnete stark, sodass das Spiel ausfiel.\nals ob + K II | as if | Er tut so, als ob er nichts wüsste.\nohne dass | without (someone) …-ing | Er ging, ohne dass ich es merkte.\n(an)statt dass | instead of (someone) …-ing | Statt dass er hilft, schaut er zu.\nje nachdem, ob / wie | depending on whether / how | Je nachdem, wie das Wetter ist, fahren wir.\nsofern / soweit | provided that, as far as | Sofern nichts dagegen spricht, …\nfalls | in case, if | Falls du Hilfe brauchst, ruf mich an.\nsolange | as long as | Solange du Fieber hast, bleibst du zu Hause.\nnachdem | after | Nachdem ich gegessen hatte, ging ich los.\n\n#h Sequence of tenses with nachdem\nThe nachdem action happens **earlier**: past perfect (hatte / war + participle) if the main clause is in the past, present perfect if it is in the present.\n> Nachdem wir umgezogen waren, haben wir uns angemeldet. = After we had moved, we registered our new address.\n#ex Choose the conjunction.\nMan lernt eine Sprache am besten, ___ man sie jeden Tag spricht. (by …-ing) = indem\nEr tut so, ___ er mich nicht kennen würde. (as if) = als ob\nEs regnete stark, ___ das Spiel abgesagt wurde. (so that) = sodass\n___ ich mit der Arbeit fertig war, ging ich nach Hause. (after) = Nachdem\n___ du Hilfe brauchst, ruf mich an. (in case) = Falls\n\n@36|Modals of supposition and hearsay|B2\nModal verbs are also used to say **how sure you are** about something, or **where the information comes from**. This is very common in speech as well as in the press.\n#table\nModal | Degree | Example | Meaning\nmuss | almost certain | Er muss krank sein. | He must be sick (I'm sure of it).\ndürfte | probable | Das dürfte teuer sein. | That's probably expensive.\nwird wohl | probable | Sie wird wohl im Büro sein. | She's probably in the office.\nkönnte / kann | possible | Sie könnte recht haben. | She might be right.\nkann nicht | impossible | Das kann nicht stimmen. | That can't be right.\nsoll | people say that | Das Restaurant soll sehr gut sein. | The restaurant is supposed to be very good.\nwill | he / she claims | Er will das nicht gewusst haben. | He claims not to have known.\n\n#h In the past\nModal + **participle + haben / sein** (past infinitive): Er muss den Zug verpasst haben. (He must have missed the train.) Sie soll nach Berlin gezogen sein. (Apparently she moved to Berlin.)\n#ex Fill in the gap.\nApparently the film is very good. → Der Film ___ sehr gut sein. = soll\nHe claims to be sick. → Er ___ krank sein. = will\nIt must be Anna. → Das ___ Anna sein. = muss\nShe might be right. → Sie ___ recht haben. = könnte || kann\nHe must have missed the train. → Er muss den Zug ___ haben. = verpasst\n\n@37|Weak nouns (N-Deklination)|B1–B2\nSome masculine nouns take **-(e)n in every case except the nominative singular**. It's a common mistake, even at B2 level.\n#table\nCase | Singular | Plural\nNominative | der Kollege | die Kollegen\nAccusative | den Kollegen | die Kollegen\nDative | dem Kollegen | den Kollegen\nGenitive | des Kollegen | der Kollegen\n\n#h Which nouns?\n- Masculine nouns in **-e** referring to people or animals: der Kollege, der Kunde, der Junge, der Neffe, der Löwe.\n- Masculine nouns in **-ent, -ant, -ist, -at**: der Student, der Praktikant, der Polizist, der Kandidat, der Automat.\n- A few others to know: der Mensch, der Nachbar, der Herr (den Herrn, plural die Herren), der Bauer.\n- Special case: der Name and der Gedanke take -ns in the genitive (des Namens).\n#h In everyday life\n> Ich habe Herrn Müller eine E-Mail geschickt. = I sent Mr. Müller an email.\n> Der Kellner fragt den Kunden, was er möchte. = The waiter asks the customer what he would like.\n#ex Fill in the correct form.\nIch frage meinen ___ (Nachbar). = Nachbarn\nWir helfen dem ___ (Kunde). = Kunden\nKennst du den ___ (Student)? = Studenten\nIch habe mit ___ Schmidt telefoniert. (Herr) = Herrn\nDer Polizist hilft dem ___ (Mensch). = Menschen\n\n@38|Modal particles|B2\nGermans sprinkle their sentences with little words that can't be translated word for word but change the tone: emphasis, surprise, politeness, resignation. They make spoken German sound natural.\n#table\nParticle | Effect | Example\ndoch | emphasis, something obvious | Komm doch mit! Das weißt du doch!\nmal | softens a request | Schau mal! Kannst du mal kommen?\nja | surprise or shared knowledge | Das ist ja toll! Du weißt ja, wie er ist.\ndenn | interested question | Was ist denn los?\nhalt / eben | that's just how it is | Das ist halt so.\neigentlich | by the way, actually | Wie heißt du eigentlich?\nwohl | supposition | Er ist wohl krank.\nschon | reassurance | Das klappt schon.\nbloß / nur | worry or warning | Was hast du bloß gemacht? Mach das bloß nicht!\n\n**Position**: after the conjugated verb and pronouns, before what is important: Kannst du mir mal helfen? They are never in position 1.\n#h In everyday life\n> Setzen Sie sich doch! = Do sit down!\n> Wo bist du denn? = So where are you?\n> Das ist eben so in Deutschland. = That's just how it is in Germany.\n#ex Fill in the particle.\nWas ist ___ los? (interested question) = denn\nKomm ___ mit! (insistent invitation) = doch\nSchau ___ hier! (softens) = mal\nDas ist ___ so, da kann man nichts machen. (resignation) = halt || eben\nKeine Sorge, das klappt ___. (reassurance) = schon\n", "es": "@1|Género y artículos|A1\nTodo sustantivo alemán tiene un género: masculino (**der**), femenino (**die**) o neutro (**das**). A menudo no coincide con el español (la mesa = der Tisch), así que aprende siempre cada sustantivo con su artículo. Los sustantivos se escriben siempre con mayúscula.\n#table\n | Masculino | Femenino | Neutro | Plural\nDefinido (el, la) | der Tisch | die Lampe | das Bett | die Tische\nIndefinido (un, una) | ein Tisch | eine Lampe | ein Bett | (unos) Tische\nNegativo (ningún, ninguna) | kein Tisch | keine Lampe | kein Bett | keine Tische\n\n#h Pistas para adivinar el género\n- **Masculino**: días, meses, estaciones (der Montag, der Mai), sustantivos en -er que designan personas (der Lehrer), -ling, -ismus.\n- **Femenino**: -ung (die Wohnung), -heit, -keit (die Möglichkeit), -schaft, -ion (die Information), -tät, -ie, y la mayoría de los sustantivos en -e (die Straße).\n- **Neutro**: -chen y -lein (das Mädchen), -ment, -um (das Zentrum), verbos sustantivados (das Essen).\n- **Sustantivo compuesto**: decide la última palabra. die Haustür = das Haus + die Tür.\n#h En el día a día\n> Ich brauche einen Termin. = Necesito una cita.\n> Die Miete ist hoch. = El alquiler es alto.\n> Ich habe kein Auto. = No tengo auto.\n#ex Escribe el artículo definido.\n___ Rechnung (factura) = die\n___ Brötchen (panecillo) = das\n___ Bahnhof (estación de tren) = der\n___ Wohnung (apartamento) = die\n___ Krankenversicherung (seguro médico) = die\n\n@2|Pronombres personales y presente|A1\nEn presente, se quita **-en** al infinitivo y se añade la terminación de cada persona. **Sie** con mayúscula es la forma de cortesía (usted y ustedes); se conjuga como sie (ellos).\n#table\nPronombre | Significado | Terminación | wohnen | arbeiten | sein | haben\nich | yo | -e | wohne | arbeite | bin | habe\ndu | tú | -st | wohnst | arbeitest | bist | hast\ner / sie / es | él / ella | -t | wohnt | arbeitet | ist | hat\nwir | nosotros | -en | wohnen | arbeiten | sind | haben\nihr | vosotros / ustedes (varios amigos) | -t | wohnt | arbeitet | seid | habt\nsie / Sie | ellos / usted, ustedes (formal) | -en | wohnen | arbeiten | sind | haben\n\n#h Trampas\n- Raíz en -t o -d (arbeiten, finden): se añade una -e- para poder pronunciar: du arbeitest, er findet.\n- Raíz en -s, -ß, -z (heißen, tanzen): du heißt, du tanzt (nunca -sst).\n- **man** (se, uno) se conjuga como er: Hier darf man nicht rauchen.\n- El presente también sirve para el futuro próximo: Morgen gehe ich zum Arzt.\n#h En el día a día\n> Ich heiße Loris und ich komme aus Frankreich. = Me llamo Loris y vengo de Francia.\n> Haben Sie einen Moment Zeit? = ¿Tiene usted un momento?\n> Wir sind neu hier. = Somos nuevos aquí.\n#ex Conjuga.\nDu ___ (wohnen) in Berlin. = wohnst\nEr ___ (arbeiten) bei Siemens. = arbeitet\nIhr ___ (sein) spät. = seid\n___ (haben) Sie eine Kundenkarte? = Haben\nWie ___ (heißen) du? = heißt\n\n@3|Verbos fuertes en presente|A1\nAlgunos verbos cambian de vocal, pero **solo con du y er/sie/es**. Las demás personas siguen siendo regulares.\n#table\nCambio | Infinitivo | ich | du | er / sie / es | wir\na → ä | fahren (ir en vehículo) | fahre | fährst | fährt | fahren\na → ä | schlafen (dormir) | schlafe | schläfst | schläft | schlafen\nau → äu | laufen (correr, caminar) | laufe | läufst | läuft | laufen\ne → i | essen (comer) | esse | isst | isst | essen\ne → i | sprechen (hablar) | spreche | sprichst | spricht | sprechen\ne → i | helfen (ayudar) | helfe | hilfst | hilft | helfen\ne → i | geben (dar) | gebe | gibst | gibt | geben\ne → ie | sehen (ver) | sehe | siehst | sieht | sehen\ne → ie | lesen (leer) | lese | liest | liest | lesen\nirregular | nehmen (tomar) | nehme | nimmst | nimmt | nehmen\nirregular | wissen (saber) | weiß | weißt | weiß | wissen\nirregular | werden (llegar a ser, volverse) | werde | wirst | wird | werden\n\nOtros que conviene conocer: tragen (llevar), waschen (lavar), vergessen (olvidar), treffen (encontrarse con), empfehlen (recomendar), werfen (lanzar, tirar).\n#h En el día a día\n> Sprichst du Französisch? = ¿Hablas francés?\n> Der Bus fährt um 8 Uhr. = El autobús sale a las 8.\n> Ich nehme das Menü 2. = Tomo el menú 2.\n> Das weiß ich nicht. = No lo sé.\n#ex Conjuga en presente.\nWas ___ du heute Abend? (essen) = isst\nEr ___ sehr gut Deutsch. (sprechen) = spricht\n___ du den Zug? (sehen) = Siehst\nSie (ella) ___ zur Arbeit. (fahren) = fährt\nWas ___ Sie mir? (empfehlen, Sie formal) = empfehlen\n\n@4|Orden de las palabras|A1\nLa regla de oro: en una oración enunciativa, **el verbo conjugado va siempre en 2.ª posición**. Si empiezas por algo que no es el sujeto, el sujeto se coloca justo después del verbo (inversión).\n#table\nPosición 1 | Posición 2 (verbo) | Resto | Final (2.ª parte del verbo)\nIch | gehe | heute ins Kino. |\nHeute | gehe | ich ins Kino. |\nIns Kino | gehe | ich heute. |\nIch | möchte | heute ins Kino | gehen.\nIch | habe | gestern einen Film | gesehen.\n\n#h Los tipos de oraciones\n- **Pregunta cerrada** (sí/no): el verbo en 1.ª posición. Kommst du mit?\n- **Pregunta abierta**: la palabra interrogativa en 1, el verbo en 2. Wann kommst du?\n- **Verbo en dos partes** (modal, perfecto, partícula): la 2.ª parte va al final; es el «paréntesis verbal».\n#h El orden en el centro: Te-Ka-Mo-Lo\nCuando hay varios complementos: temporal (cuándo), kausal (por qué), modal (cómo), lokal (dónde).\n> Ich fahre morgen wegen der Arbeit mit dem Zug nach München. = Mañana voy a Múnich en tren por trabajo.\n**Trampa típica**: Heute ich gehe → Heute gehe ich. Las palabras und, aber, oder, denn, sondern no cuentan como posición 1: Ich bin müde, aber ich gehe arbeiten.\n#ex Ordena la frase empezando por la primera palabra.\nAm Montag / ich / habe / einen Termin = Am Montag habe ich einen Termin.\nJetzt / wir / essen = Jetzt essen wir.\ndu / kannst / mir / helfen / ? (pregunta de sí/no) = Kannst du mir helfen?\nLeider / der Zug / hat / Verspätung = Leider hat der Zug Verspätung.\n\n@5|Negación nicht / kein|A1\n**kein** niega un sustantivo precedido de ein o sin artículo; **nicht** niega todo lo demás (verbo, adjetivo, sustantivo con der/die/das, nombre propio).\n#table\nFrase afirmativa | Negación | Por qué\nIch habe ein Auto. | Ich habe kein Auto. | ein + sustantivo\nIch brauche Hilfe. | Ich brauche keine Hilfe. | sustantivo sin artículo\nIch habe Zeit. | Ich habe keine Zeit. | sustantivo sin artículo\nDas ist der Bus nach Hause. | Das ist nicht der Bus nach Hause. | sustantivo con der\nIch komme. | Ich komme nicht. | verbo\nDas ist teuer. | Das ist nicht teuer. | adjetivo\n\nkein se declina como ein (keinen, keinem, keiner…) y tiene plural: keine Kinder.\n#h ¿Dónde se coloca nicht?\n- Al final, para negar toda la frase: Ich kenne ihn nicht.\n- Delante de lo que se niega: Ich wohne nicht in Berlin. Das ist nicht gut.\n- Delante de la 2.ª parte del verbo: Ich habe das nicht gewusst.\n- nicht … sondern: Nicht heute, sondern morgen.\nOtras negaciones útiles: nichts (nada), niemand (nadie), nie / niemals (nunca), noch nicht (todavía no), nicht mehr (ya no), kein … mehr (ya no + sustantivo).\n**Responder a una pregunta negativa**: doch = sí (llevando la contraria). Kommst du nicht? → Doch, ich komme!\n#ex Pon la frase en forma negativa con nicht o kein.\nIch habe ein Konto bei der Bank. = Ich habe kein Konto bei der Bank. || kein Konto\nIch verstehe das. = Ich verstehe das nicht.\nWir haben Milch. = Wir haben keine Milch. || keine Milch\nDas Essen ist warm. = Das Essen ist nicht warm. || nicht warm\nEr hat Kinder. = Er hat keine Kinder. || keine Kinder\n\n@6|Plural de los sustantivos|A1\nEl artículo plural es siempre **die**, pero la terminación del sustantivo varía. Aprende el plural junto con el sustantivo (der Tisch, -e). Estas tendencias funcionan en la mayoría de los casos.\n#table\nTerminación | Sobre todo para | Ejemplos\n-(e)n | casi todos los femeninos | die Frau → Frauen, die Wohnung → Wohnungen\n-e (a menudo + umlaut) | muchos masculinos | der Tag → Tage, der Zug → Züge, der Stuhl → Stühle\n-er (+ umlaut si es posible) | neutros cortos | das Kind → Kinder, das Haus → Häuser\nnada (a veces umlaut) | masc./neutros en -er, -el, -en, -chen | der Lehrer → Lehrer, der Apfel → Äpfel\n-s | palabras extranjeras, siglas, sustantivos terminados en vocal | das Auto → Autos, die Kita → Kitas\n-nen | femeninos en -in | die Lehrerin → Lehrerinnen\n\n#h Para recordar\n- En dativo plural se añade una -n al sustantivo si no la tiene: mit den Kindern (salvo los plurales en -s: mit den Autos).\n- En un diccionario, «der Tisch, -e» significa que el plural es Tische; «der Apfel, ¨» significa Äpfel.\n- Plurales irregulares frecuentes: das Museum → Museen, das Visum → Visa.\n#h En el día a día\n> Zwei Brötchen, bitte. = Dos panecillos, por favor.\n> Ich habe drei Kinder. = Tengo tres hijos.\n> Die Preise sind gestiegen. = Los precios han subido.\n#ex Escribe el plural (sin el artículo).\ndie Tasche (bolso) = Taschen || die Taschen\ndas Glas (vaso) = Gläser || die Gläser\nder Freund (amigo) = Freunde || die Freunde\ndie Kollegin (compañera de trabajo) = Kolleginnen || die Kolleginnen\ndas Handy (móvil, celular) = Handys || die Handys\n\n@7|Los casos: nominativo y acusativo|A1\nEl **nominativo** es el sujeto (¿quién hace la acción?). El **acusativo** es el complemento directo (¿a quién?, ¿qué?). Buena noticia: **solo cambia el masculino** en acusativo.\n#table\n | Masculino | Femenino | Neutro | Plural\nNominativo | der / ein / kein | die / eine | das / ein | die / keine\nAcusativo | den / einen / keinen | die / eine | das / ein | die / keine\n\n#h Cómo encontrar el acusativo\n- Busca el verbo y luego el sujeto (¿quién hace la acción?). Lo que recibe directamente la acción va en acusativo.\n> Der Mann kauft den Kaffee. = El hombre compra el café.\n> Den Kaffee kauft der Mann. = El mismo significado: es el artículo el que indica quién hace qué.\n**Verbos que van con acusativo**: haben, brauchen, kaufen, suchen, finden, nehmen, sehen, kennen, mögen, bestellen, bezahlen, es gibt (hay).\n**Trampa**: sein, werden y heißen no llevan acusativo: Das ist der Chef.\n#h En el día a día\n> Ich suche einen Job. = Busco trabajo.\n> Es gibt keinen Parkplatz. = No hay sitio para estacionar.\n> Ich nehme den Salat. = Tomo la ensalada.\n#ex Completa con el artículo.\nIch brauche ___ (ein) Stift. (der Stift) = einen\nWir suchen ___ (die) Wohnung. = die\n___ (der) Hund bellt. = Der\nHast du ___ (der) Schlüssel? = den\nEs gibt ___ (kein) Aufzug. (der Aufzug) = keinen\n\n@8|El dativo|A1–A2\nEl dativo suele ser el complemento indirecto: ¿a quién?, ¿para quién? (**wem?**). También aparece después de ciertas preposiciones (ficha 10) y de ciertos verbos.\n#table\n | Masculino | Femenino | Neutro | Plural\nNominativo | der / ein | die / eine | das / ein | die / –\nAcusativo | den / einen | die / eine | das / ein | die / –\nDativo | dem / einem | der / einer | dem / einem | den + sustantivo en -n\n\n**Truco**: en dativo, el masculino y el neutro terminan en -m, el femenino en -r y el plural en -n («M-R-M-N»).\nCon dos objetos: en general, la persona (dativo) va antes que la cosa (acusativo).\n> Ich gebe dem Vermieter den Schlüssel. = Le doy la llave al propietario.\n#h Verbos que solo llevan dativo\nhelfen, danken, antworten, gefallen, gehören, passen, schmecken, gratulieren, folgen, fehlen.\n> Kann ich Ihnen helfen? = ¿Puedo ayudarle?\n> Das Essen schmeckt mir. = Me gusta esta comida.\n> Wem gehört das Fahrrad? = ¿De quién es esta bicicleta?\n**Verbos con doble objeto** (dativo + acusativo): geben, schenken, zeigen, schicken, erklären, leihen, bringen.\n#ex Completa con el caso correcto.\nIch helfe ___ (der) Nachbarin. = der\nWir danken ___ (die) Kollegen. (plural) = den\nEr zeigt ___ (das) Kind ___ (der) Weg. (2 palabras) = dem den\nDie Jacke gehört ___ (ein) Freund. = einem\nIch gebe ___ (die) Kassiererin das Geld. = der\n\n@9|Pronombres en los distintos casos y posesivos|A1–A2\nLos pronombres cambian según el caso, igual que los artículos.\n#table\nNominativo | Acusativo | Dativo | Posesivo\nich | mich | mir | mein\ndu | dich | dir | dein\ner | ihn | ihm | sein\nsie (ella) | sie | ihr | ihr\nes | es | ihm | sein\nwir | uns | uns | unser\nihr | euch | euch | euer\nsie (ellos) | sie | ihnen | ihr\nSie (formal) | Sie | Ihnen | Ihr\n\n> Ruf mich an! = ¡Llámame!\n#h El posesivo se declina como ein / kein\n#table\n | Masculino | Femenino | Neutro | Plural\nNominativo | mein | meine | mein | meine\nAcusativo | meinen | meine | mein | meine\nDativo | meinem | meiner | meinem | meinen\n\n#h Trampas\n- sein = su (de él), ihr = su (de ella). El posesivo depende del poseedor, y la terminación, del sustantivo poseído: Er besucht seine Mutter. Sie besucht ihren Vater.\n- euer pierde la -e- cuando lleva terminación: eure Wohnung.\n- Dos pronombres: el acusativo va antes que el dativo. Ich gebe es ihm. Pero: Ich gebe ihm das Buch.\n#ex Completa.\nKannst du ___ (ich) die Adresse schicken? = mir\nIch kenne ___ (er) nicht. = ihn\nWie geht es ___ (Sie)? = Ihnen\nDas ist ___ (mi) Ausweis. (der Ausweis) = mein\nIch suche ___ (mi) Brille. (die Brille) = meine\nSie (ella) ruft ___ (su) Bruder an. = ihren\n\n@10|Preposiciones|A1–A2\nCada preposición exige un caso. Hay tres grupos que debes aprender de memoria.\n#table\nGrupo | Preposiciones | Ejemplo\nSiempre acusativo | durch, für, gegen, ohne, um, bis | Das ist für den Chef.\nSiempre dativo | aus, bei, mit, nach, seit, von, zu, gegenüber | Ich fahre mit dem Bus.\nMixtas | in, an, auf, über, unter, vor, hinter, neben, zwischen | Ich bin im Büro. / Ich gehe ins Büro.\n\n**Truco para memorizar**: acusativo = DOGFUB (durch, ohne, gegen, für, um, bis); dativo = «aus-bei-mit-nach-seit-von-zu».\n#h Preposiciones mixtas (de dos vías): la pregunta decide\n#table\nPregunta | Caso | Verbos típicos | Ejemplo\nWo? (sin desplazamiento) | Dativo | sein, liegen, stehen, sitzen | Das Buch liegt auf dem Tisch.\nWohin? (con desplazamiento) | Acusativo | gehen, legen, stellen, setzen | Ich lege das Buch auf den Tisch.\n\nContracciones: in dem = im, in das = ins, an dem = am, zu dem = zum, zu der = zur, bei dem = beim, von dem = vom.\n#h Ir a algún sitio: ¿nach, zu o in?\n- **nach** + ciudad o país sin artículo: nach Berlin, nach Frankreich, nach Hause.\n- **zu** + persona, tienda, lugar concreto: zum Arzt, zur Post. zu Hause = en casa (sin desplazamiento).\n- **in** + lugar en el que se entra, o país con artículo: ins Kino, in die Schweiz.\n#ex Completa.\nIch wohne seit ___ (ein) Jahr in Hamburg. = einem\nWir gehen heute ___ (in, das) Restaurant. = ins\nDer Schlüssel ist ___ (in, die) Tasche. (2 palabras) = in der\nIch fahre morgen ___ Wien. = nach\nIch muss ___ (zu, der) Zahnarzt. = zum\nOhne ___ (mein) Handy bin ich verloren. (das Handy) = mein\n\n@11|Verbos modales|A1–A2\nEl modal se conjuga en 2.ª posición y el otro verbo va al final, en infinitivo. Atención: **ich y er tienen la misma forma**, sin terminación.\n#table\n | können | müssen | dürfen | wollen | sollen | möchten\nich | kann | muss | darf | will | soll | möchte\ndu | kannst | musst | darfst | willst | sollst | möchtest\ner / sie | kann | muss | darf | will | soll | möchte\nwir | können | müssen | dürfen | wollen | sollen | möchten\nihr | könnt | müsst | dürft | wollt | sollt | möchtet\nsie / Sie | können | müssen | dürfen | wollen | sollen | möchten\n\n#h Matices que suelen confundir\n- **nicht müssen** = no tener que (no es obligatorio): Du musst nicht kommen.\n- **nicht dürfen** = prohibición: Hier darf man nicht parken.\n- **wollen** es muy directo; en una tienda, mejor di möchte: Ich möchte bezahlen.\n- **sollen** = otra persona lo ha pedido: Der Arzt sagt, ich soll mehr schlafen.\n- **mögen** (gustar) se usa sobre todo solo: Ich mag Kaffee.\n#h En el día a día\n> Kann ich mit Karte zahlen? = ¿Puedo pagar con tarjeta?\n> Ich muss das Formular ausfüllen. = Tengo que completar el formulario.\n> Ich möchte einen Termin vereinbaren. = Quisiera pedir una cita.\n#ex Completa con el modal adecuado.\nIch ___ morgen früh aufstehen. (obligación) = muss\n___ du Deutsch sprechen? (capacidad) = Kannst\nHier ___ man nicht rauchen. (prohibición) = darf\nSie (ella) ___ nicht warten, wir sind fertig. (no está obligada) = muss || müssen\nIch ___ einen Kaffee, bitte. (cortés) = möchte\n\n@12|Verbos separables e inseparables|A1–A2\nSi el prefijo es **separable** (lleva el acento al hablar), en presente se va al final de la frase. Si es **inseparable**, se queda unido al verbo.\n#table\n | Prefijos | Presente | Perfecto\nSeparables | ab-, an-, auf-, aus-, bei-, ein-, mit-, nach-, vor-, weg-, zu-, zurück- | Ich rufe dich morgen an. | Ich habe dich angerufen.\nInseparables | be-, emp-, ent-, er-, ge-, miss-, ver-, zer- | Ich bezahle die Rechnung. | Ich habe bezahlt (sin ge-).\n\n#h Verbos separables imprescindibles\n#table\nVerbo | Significado | Ejemplo\nanrufen | llamar por teléfono | Ich rufe beim Amt an.\naufstehen | levantarse | Ich stehe um 7 Uhr auf.\neinkaufen | hacer las compras | Wir kaufen am Samstag ein.\nankommen | llegar | Der Zug kommt um 9 Uhr an.\nabholen | ir a buscar, recoger | Ich hole die Kinder ab.\nanmelden | inscribir, registrar | Ich melde mich beim Bürgeramt an.\numziehen | mudarse | Wir ziehen nächste Woche um.\numsteigen | hacer transbordo (transporte) | Sie müssen in Hannover umsteigen.\nmitbringen | traer | Ich bringe einen Kuchen mit.\n\n#h Cuándo la partícula se queda unida\n- Después de un modal: Ich muss morgen früh aufstehen.\n- En una oración subordinada: …, weil ich früh aufstehe.\n- En el perfecto, ge se coloca en medio: aufgestanden, eingekauft.\n- Con zu: Ich habe keine Lust, einzukaufen.\n#ex Pon en presente.\nDer Film (anfangen) um 20 Uhr. = Der Film fängt um 20 Uhr an.\nIch (einladen) dich zum Essen. = Ich lade dich zum Essen ein.\nWann (ankommen) du? = Wann kommst du an?\nIch (verstehen) das nicht. = Ich verstehe das nicht.\nWir (aussteigen) an der nächsten Haltestelle. = Wir steigen an der nächsten Haltestelle aus.\n\n@13|Imperativo|A2\nEl imperativo sirve para dar una orden, un consejo o una instrucción. Añade **bitte** para ser cortés.\n#table\nA quién | Formación | kommen | warten | fahren | nehmen | sein\ndu (un amigo) | raíz, sin du | Komm! | Warte! | Fahr! | Nimm! | Sei!\nihr (varios amigos) | forma de ihr, sin ihr | Kommt! | Wartet! | Fahrt! | Nehmt! | Seid!\nSie (formal) | infinitivo + Sie | Kommen Sie! | Warten Sie! | Fahren Sie! | Nehmen Sie! | Seien Sie!\n\n#h Reglas de la forma du\n- Los verbos e → i / ie mantienen el cambio: Nimm! Gib! Lies! Hilf!\n- Los verbos a → ä no lo mantienen: Fahr! Schlaf gut!\n- Raíz en -t, -d: se añade -e: Warte! Antworte!\n- La partícula separable va al final: Ruf mich an! Steig ein!\nPara suavizar una orden (muy alemán): **mal, doch, bitte**.\n> Komm mal her! = ¡Ven un momento!\n> Setzen Sie sich doch! = ¡Siéntese, por favor!\n#ex Pon en imperativo (forma du).\n(sprechen) langsamer! = Sprich langsamer!\n(helfen) mir! = Hilf mir!\n(aufmachen) die Tür! = Mach die Tür auf!\n(sein) pünktlich! = Sei pünktlich!\n(lesen) den Brief! = Lies den Brief!\n\n@14|El perfecto (Perfekt)|A2\nEs el tiempo del pasado en la lengua hablada. Se forma con **haben o sein** conjugado en 2.ª posición + el **participio** al final.\n> Ich habe gestern lange gearbeitet. = Ayer trabajé mucho.\n> Wir sind am Wochenende nach Dresden gefahren. = El fin de semana fuimos a Dresde.\n#h ¿haben o sein?\nLa mayoría de los verbos llevan haben. Se usa **sein** con:\n- un desplazamiento: gehen, fahren, fliegen, kommen, laufen, umziehen;\n- un cambio de estado: aufstehen, einschlafen, aufwachen, werden, sterben;\n- y además: sein (ich bin gewesen), bleiben (ich bin geblieben), passieren (was ist passiert?).\n#h Cómo se forma el participio\n#table\nTipo | Regla | Ejemplos\nDébil | ge- + raíz + -t | machen → gemacht, arbeiten → gearbeitet\nFuerte | ge- + raíz (a menudo modificada) + -en | sehen → gesehen, trinken → getrunken\nSeparable | partícula + ge + participio | einkaufen → eingekauft\nInseparable | sin ge- | bezahlen → bezahlt, verstehen → verstanden\nVerbos en -ieren | sin ge-, -t | studieren → studiert\nMixtos | ge- + raíz modificada + -t | bringen → gebracht, denken → gedacht, wissen → gewusst\n\n#h Participios fuertes que debes conocer\n#table\nInfinitivo | Participio | Auxiliar\nsein | gewesen | sein\ngehen | gegangen | sein\nkommen | gekommen | sein\nfahren | gefahren | sein\nbleiben | geblieben | sein\nessen | gegessen | haben\ntrinken | getrunken | haben\nnehmen | genommen | haben\nsprechen | gesprochen | haben\nschreiben | geschrieben | haben\nfinden | gefunden | haben\nhelfen | geholfen | haben\ntreffen | getroffen | haben\n\n#ex Pon en perfecto.\nIch kaufe Brot. = Ich habe Brot gekauft.\nWir fliegen nach Spanien. = Wir sind nach Spanien geflogen.\nEr versteht die Frage nicht. = Er hat die Frage nicht verstanden.\nSie (ella) ruft den Arzt an. = Sie hat den Arzt angerufen.\nWas passiert? = Was ist passiert?\nIch vergesse meinen Schlüssel. = Ich habe meinen Schlüssel vergessen.\n\n@15|El pretérito (Präteritum) útil|A2\nAl hablar se usa el perfecto, salvo con algunos verbos muy frecuentes que casi siempre van en pretérito: **sein, haben, los modales** y **es gab** (había).\n#table\n | sein | haben | können | müssen | wollen | werden\nich | war | hatte | konnte | musste | wollte | wurde\ndu | warst | hattest | konntest | musstest | wolltest | wurdest\ner / sie | war | hatte | konnte | musste | wollte | wurde\nwir | waren | hatten | konnten | mussten | wollten | wurden\nihr | wart | hattet | konntet | musstet | wolltet | wurdet\nsie / Sie | waren | hatten | konnten | mussten | wollten | wurden\n\nLos modales pierden el umlaut en pretérito (können → konnte) e ich = er.\n#h Para leer la prensa\n- Verbos débiles: raíz + -te: machen → ich machte.\n- Verbos fuertes: cambio de vocal: gehen → ging, kommen → kam, sehen → sah, fahren → fuhr.\n#h En el día a día\n> Wie war dein Wochenende? = ¿Qué tal tu fin de semana?\n> Ich hatte keine Zeit. = No tenía tiempo.\n> Früher gab es hier einen Bäcker. = Antes había una panadería aquí.\n#ex Pon en pretérito.\nIch bin müde. = Ich war müde.\nWir haben Glück. = Wir hatten Glück.\nEr muss lange warten. = Er musste lange warten.\nKannst du schlafen? = Konntest du schlafen?\nEs gibt ein Problem. = Es gab ein Problem.\n\n@16|Verbos reflexivos|A2\nEl pronombre reflexivo va casi siempre en **acusativo**. Pasa a **dativo** cuando la frase ya tiene un complemento directo.\n#table\nSujeto | Acusativo | Dativo | Ejemplo en acusativo | Ejemplo en dativo\nich | mich | mir | Ich wasche mich. | Ich wasche mir die Hände.\ndu | dich | dir | Du freust dich. | Du putzt dir die Zähne.\ner / sie / es | sich | sich | Er setzt sich. | Er kauft sich ein Auto.\nwir | uns | uns | Wir treffen uns. | Wir machen uns Sorgen.\nihr | euch | euch | Ihr beeilt euch. | Ihr nehmt euch Zeit.\nsie / Sie | sich | sich | Setzen Sie sich! | Merken Sie sich das.\n\nSolo las formas de ich y du cambian entre acusativo y dativo.\n#h Verbos reflexivos del día a día\nsich anmelden (inscribirse), sich beeilen (darse prisa), sich bewerben (postularse a un empleo), sich entschuldigen (disculparse), sich erkälten (resfriarse), sich fühlen (sentirse), sich freuen (alegrarse), sich interessieren (interesarse), sich kümmern (ocuparse), sich setzen (sentarse), sich treffen (verse, quedar), sich (D) etwas merken (recordar, retener), sich (D) Sorgen machen (preocuparse).\nPosición del pronombre: justo después del verbo conjugado o después del sujeto invertido: Heute fühle ich mich besser.\n#ex Completa con el pronombre reflexivo.\nIch freue ___ auf das Wochenende. = mich\nDu musst ___ beeilen! = dich\nIch kaufe ___ eine neue Jacke. = mir\nWir treffen ___ um acht. = uns\nKannst du ___ das merken? = dir\n\n@17|Conjunciones y oraciones subordinadas|A2–B1\nLas **conjunciones coordinantes** no cambian el orden de las palabras; las **subordinantes** mandan el verbo conjugado al final del todo.\n#table\nTipo | Conjunciones | Efecto | Ejemplo\nCoordinante (posición 0) | und, aber, oder, denn, sondern | orden normal | Ich bleibe zu Hause, denn ich bin krank.\nSubordinante | weil, dass, wenn, ob, als, bevor, nachdem, obwohl, damit, während, seit, bis | verbo al final | Ich bleibe zu Hause, weil ich krank bin.\nAdverbio conector (posición 1) | deshalb, deswegen, trotzdem, dann, danach, sonst | inversión | Ich bin krank, deshalb bleibe ich zu Hause.\n\n#h Reglas de la oración subordinada\n- Siempre hay una coma antes de la conjunción.\n- El verbo conjugado va el último: …, weil ich gestern lange gearbeitet habe.\n- La partícula vuelve a unirse al verbo: …, wenn der Zug ankommt.\n- Si la subordinada va delante, ocupa la posición 1, así que queda verbo-coma-verbo: Wenn ich Zeit habe, komme ich.\n#h Elegir bien\n- **als** para un hecho único en el pasado; **wenn** para el presente, el futuro o algo que se repite.\n- **wenn** = condición; **ob** = pregunta indirecta (Ich weiß nicht, ob er kommt.).\n- **sondern** después de una negación, para corregir (nicht Bier, sondern Wein).\n#ex Une las dos frases.\nIch lerne Deutsch. Ich wohne in Deutschland. (weil) = Ich lerne Deutsch, weil ich in Deutschland wohne.\nIch glaube. Der Laden ist heute zu. (dass) = Ich glaube, dass der Laden heute zu ist.\nEs regnet. Wir gehen spazieren. (trotzdem) = Es regnet, trotzdem gehen wir spazieren.\nIch habe Zeit. Ich rufe dich an. (wenn, al principio) = Wenn ich Zeit habe, rufe ich dich an.\nWeißt du? Der Bus fährt heute. (ob) = Weißt du, ob der Bus heute fährt?\n\n@18|Declinación del adjetivo|A2–B1\nUn adjetivo predicativo (después de sein) nunca lleva terminación: Die Wohnung ist groß. Delante de un sustantivo, lleva una terminación que depende del artículo. **Si el artículo ya muestra el género y el caso, al adjetivo le basta con -e o -en; si no, es el adjetivo el que los muestra.**\n#h 1. Después de der / die / das\n#table\n | Masculino | Femenino | Neutro | Plural\nN | der neue Job | die neue Stelle | das neue Auto | die neuen Nachbarn\nA | den neuen Job | die neue Stelle | das neue Auto | die neuen Nachbarn\nD | dem neuen Job | der neuen Stelle | dem neuen Auto | den neuen Nachbarn\nG | des neuen Jobs | der neuen Stelle | des neuen Autos | der neuen Nachbarn\n\nTruco: -e en las 5 casillas de arriba a la izquierda, -en en todas las demás.\n#h 2. Después de ein / kein / mein\n#table\n | Masculino | Femenino | Neutro | Plural\nN | ein neuer Job | eine neue Stelle | ein neues Auto | meine neuen Nachbarn\nA | einen neuen Job | eine neue Stelle | ein neues Auto | meine neuen Nachbarn\nD | einem neuen Job | einer neuen Stelle | einem neuen Auto | meinen neuen Nachbarn\nG | eines neuen Jobs | einer neuen Stelle | eines neuen Autos | meiner neuen Nachbarn\n\nDiferencia con la tabla 1: solo 3 casillas: ein neuer (m. N), ein neues (n. N y A).\n#h 3. Sin artículo\n#table\n | Masculino | Femenino | Neutro | Plural\nN | frischer Kaffee | frische Milch | frisches Brot | frische Brötchen\nA | frischen Kaffee | frische Milch | frisches Brot | frische Brötchen\nD | frischem Kaffee | frischer Milch | frischem Brot | frischen Brötchen\n\nEl adjetivo toma la terminación del artículo definido (der → -er, dem → -em).\n#h En el día a día\n> Ich suche eine günstige Wohnung mit großem Balkon. = Busco un apartamento barato con un balcón grande.\n> Ich hätte gern den grünen Pullover. = Quisiera el suéter verde.\n#ex Completa la terminación (escribe el adjetivo completo).\nDas ist ein gut___ Restaurant. = gutes\nIch nehme den rot___ Wein. = roten\nWir wohnen in einer klein___ Stadt. = kleinen\nEr hat einen neu___ Chef. = neuen\nKalt___ Bier ist das Beste. = Kaltes\nMit freundlich___ Grüßen = freundlichen\n\n@19|Comparativo y superlativo|A2\nComparativo: adjetivo + **-er** (+ **als** = que). Superlativo: **am** + adjetivo + **-sten**, o delante de un sustantivo: der/die/das + adjetivo + -ste.\n#table\nBase | Comparativo | Superlativo | Observación\nbillig | billiger | am billigsten | regular\nalt | älter | am ältesten | umlaut + -esten\ngroß | größer | am größten | umlaut\nteuer | teurer | am teuersten | pierde la e\ngut | besser | am besten | irregular\nviel | mehr | am meisten | irregular\ngern | lieber | am liebsten | irregular\nhoch | höher | am höchsten | irregular\nnah | näher | am nächsten | irregular\n\n#h Comparar\n- Superioridad: Die Bahn ist schneller als der Bus.\n- Igualdad: Das Zimmer ist so groß wie meins.\n- Inferioridad: Das ist nicht so teuer wie in Paris.\n- Preferencia: Ich trinke lieber Tee. Am liebsten trinke ich Wasser.\n**Trampa**: als (comparativo) y wie (igualdad). La forma correcta es besser als.\n#ex Completa.\nMünchen ist ___ (teuer) als Leipzig. = teurer\nIm Juli ist es am ___ (warm). = wärmsten\nMein Bruder ist ___ (alt) als ich. = älter\nWas trinkst du ___ (gern), Tee oder Kaffee? = lieber\nWo ist die ___ (nah) Apotheke? = nächste\n\n@20|Futuro y Konjunktiv II de cortesía|A2–B1\nEl futuro se forma con **werden** + infinitivo al final. En el día a día se suele preferir el presente + una expresión de tiempo; werden se usa sobre todo para una promesa, una previsión o una suposición.\n> Ich werde dich morgen anrufen. = Te llamaré mañana.\n> Er wird wohl krank sein. = Debe de estar enfermo.\n#h El Konjunktiv II: ser cortés, desear, suponer\n#table\n | haben | sein | werden | können | müssen | sollen\nich | hätte | wäre | würde | könnte | müsste | sollte\ndu | hättest | wär(e)st | würdest | könntest | müsstest | solltest\ner / sie | hätte | wäre | würde | könnte | müsste | sollte\nwir / sie / Sie | hätten | wären | würden | könnten | müssten | sollten\n\nPara los demás verbos: **würde + infinitivo**. Ich würde gern mitkommen.\n#h Frases corteses imprescindibles\n> Ich hätte gern ein Stück Kuchen. = Quisiera un trozo de pastel.\n> Könnten Sie mir bitte helfen? = ¿Podría ayudarme, por favor?\n> Würden Sie das bitte wiederholen? = ¿Podría repetirlo, por favor?\n> Du solltest zum Arzt gehen. = Deberías ir al médico.\n> Wenn ich mehr Zeit hätte, würde ich mehr Deutsch lernen. = Si tuviera más tiempo, estudiaría más alemán.\n#ex Haz la frase más cortés.\nIch will einen Kaffee. = Ich hätte gern einen Kaffee. || Ich möchte einen Kaffee.\nKannst du das Fenster zumachen? = Könntest du das Fenster zumachen?\nHaben Sie Zeit? = Hätten Sie Zeit?\nWiederholen Sie das! = Würden Sie das bitte wiederholen? || Könnten Sie das bitte wiederholen?\nWenn ich reich bin, kaufe ich ein Haus. (hipótesis) = Wenn ich reich wäre, würde ich ein Haus kaufen.\n\n@21|Verbos con preposición, da- y wo-|B1\nMuchos verbos se usan con una **preposición fija**, a menudo distinta de la del español. Apréndelos como un bloque: verbo + preposición + caso.\n#table\nVerbo | Significado | Ejemplo\nwarten auf + A | esperar | Ich warte auf den Bus.\nsich freuen auf + A | tener ganas de, esperar con ilusión | Ich freue mich auf den Urlaub.\nsich freuen über + A | alegrarse de | Ich freue mich über das Geschenk.\ndenken an + A | pensar en | Ich denke an dich.\nsich kümmern um + A | ocuparse de | Wer kümmert sich um die Kinder?\nsich interessieren für + A | interesarse por | Ich interessiere mich für Politik.\nsich ärgern über + A | molestarse por | Ich ärgere mich über den Lärm.\nfragen nach + D | preguntar por | Er fragt nach dem Weg.\nteilnehmen an + D | participar en | Ich nehme am Kurs teil.\nAngst haben vor + D | tener miedo de | Sie hat Angst vor Hunden.\nabhängen von + D | depender de | Das hängt vom Wetter ab.\nsich gewöhnen an + A | acostumbrarse a | Ich gewöhne mich an das Wetter.\n\n#h da- (respuesta) y wo- (pregunta) para una cosa\nNo se dice auf es, sino **da(r) + preposición**. Para preguntar: **wo(r) + preposición**. Se añade una -r- si la preposición empieza por vocal.\n#table\nPreposición | Pregunta (cosa) | Respuesta (cosa) | Persona\nauf | Worauf wartest du? | Ich warte darauf. | Auf wen wartest du?\nan | Woran denkst du? | Ich denke daran. | An wen denkst du?\nüber | Worüber sprecht ihr? | Wir sprechen darüber. | Über wen…?\nmit | Womit fährst du? | Ich fahre damit. | Mit wem…?\n\nPara una persona, se mantiene preposición + pronombre: Ich warte auf ihn.\n#ex Completa.\nIch warte ___ deine Antwort. = auf\n___ denkst du? (cosa) = Woran\nHast du ___ gedacht, den Müll rauszubringen? = daran\nEr interessiert sich nicht ___ Fußball. = für\nIch nehme ___ Integrationskurs teil. = am\n\n@22|Oraciones de relativo|B1\nLa oración de relativo empieza con un **pronombre relativo** que se parece al artículo definido. Su género y su número vienen del sustantivo al que sustituye; su caso, de su función dentro de la relativa. El verbo va al final y hay comas.\n#table\n | Masculino | Femenino | Neutro | Plural\nNominativo (que) | der | die | das | die\nAcusativo (al que, a la que) | den | die | das | die\nDativo (a quien) | dem | der | dem | **denen**\nGenitivo (cuyo) | **dessen** | **deren** | **dessen** | **deren**\n\n#h Método en 3 pasos\n- ¿Qué sustantivo sustituyo? → género y número. ¿Qué función tiene en la relativa? → caso. Luego pronombre + resto + verbo al final.\n> Der Mann, der dort steht, ist mein Nachbar. = El hombre que está allí es mi vecino.\n> Der Mann, den ich kenne, ist mein Nachbar. = El hombre al que conozco es mi vecino.\n> Der Mann, dem ich helfe, ist mein Nachbar. = El hombre al que ayudo es mi vecino.\n> Die Kollegen, mit denen ich arbeite, sind nett. = Los compañeros con los que trabajo son simpáticos.\n#h Casos especiales\n- Preposición delante del pronombre: Die Wohnung, in der ich wohne, ist klein.\n- Después de das, alles, etwas, nichts: was. Das ist alles, was ich weiß.\n- Para un lugar: wo. Die Stadt, wo ich wohne…\n#ex Completa con el pronombre relativo.\nDas ist die Frau, ___ in der Apotheke arbeitet. = die\nDer Film, ___ wir gestern gesehen haben, war gut. = den\nDas Kind, ___ ich das Buch gegeben habe, ist mein Neffe. = dem\nDie Leute, ___ ich gestern getroffen habe, kommen aus Spanien. = die\nDer Kollege, ___ Frau Französin ist, heißt Jan. = dessen\nDas Problem, ___ wir gesprochen haben, ist gelöst. (über) = über das\n\n@23|Infinitivo con zu, um … zu|B1\nDespués de muchos verbos, sustantivos y adjetivos, el infinitivo va precedido de **zu** y se coloca al final, después de una coma. **No se usa zu** después de los modales ni después de gehen, lernen, lassen, bleiben, hören, sehen.\n#table\nDesencadenante | Ejemplo\nversuchen, vergessen, anfangen, aufhören, planen, vorhaben, bitten | Ich habe vergessen, dich anzurufen.\nLust haben, Zeit haben, keine Ahnung haben, es ist Zeit | Hast du Lust, ins Kino zu gehen?\nes ist wichtig / schwer / verboten / möglich | Es ist verboten, hier zu parken.\n\nCon un verbo separable, zu se mete en medio: anzurufen, einzukaufen, aufzustehen.\n#table\nEstructura | Significado | Ejemplo\num … zu | para (finalidad) | Ich lerne Deutsch, um in Deutschland zu arbeiten.\nohne … zu | sin | Er ist gegangen, ohne Tschüss zu sagen.\nstatt … zu | en lugar de | Statt zu lernen, schaut er Netflix.\n\n**¿um … zu o damit?** um … zu cuando el sujeto es el mismo. Si no, damit + oración subordinada: Ich spreche langsam, damit du mich verstehst.\n#ex Completa.\nIch habe keine Zeit, ___ (kochen). = zu kochen\nVergiss nicht, die Tür ___ (abschließen)! = abzuschließen\nIch spare Geld, ___ ein Auto ___ (kaufen). (2 huecos) = um zu kaufen\nIch kann heute ___ (kommen). = kommen\nEr hat versucht, mich ___ (erreichen). = zu erreichen\n\n@24|La voz pasiva|B1\nLa pasiva pone la acción en el centro. Está por todas partes en las cartas oficiales y en los carteles. Se forma con **werden** conjugado + el participio al final.\n#table\nTiempo | Formación | Ejemplo\nPresente | werden + participio | Das Paket wird morgen geliefert.\nPretérito | wurde + participio | Die Straße wurde gesperrt.\nPerfecto | sein + participio + worden | Mein Fahrrad ist gestohlen worden.\nCon modal | modal + participio + werden | Das Formular muss bis Freitag ausgefüllt werden.\n\nEn el perfecto de la pasiva se usa **worden** (no geworden). Para decir quién hace la acción: von + dativo.\n#h Pasiva de proceso o de estado\n- werden = la acción: Der Laden wird um 20 Uhr geschlossen.\n- sein = el resultado: Der Laden ist geschlossen.\n#h En el día a día\n> Hier wird Deutsch gesprochen. = Aquí se habla alemán.\n> Ihr Antrag wurde genehmigt. = Su solicitud ha sido aprobada.\nAlternativa activa frecuente: man + verbo en activa. Man spricht hier Deutsch.\n#ex Pon en pasiva.\nMan repariert die Heizung. (presente) = Die Heizung wird repariert.\nMan hat den Termin abgesagt. (perfecto) = Der Termin ist abgesagt worden.\nMan muss die Miete am Monatsanfang bezahlen. = Die Miete muss am Monatsanfang bezahlt werden.\nMan baute das Haus 1910. (pretérito) = Das Haus wurde 1910 gebaut.\n\n@25|El genitivo|B1\nEl genitivo expresa pertenencia. Al hablar se sustituye a menudo por von + dativo, pero aparece en la lengua escrita, en los documentos oficiales y después de ciertas preposiciones.\n#table\n | Masculino | Femenino | Neutro | Plural\nDefinido | des Vertrags | der Wohnung | des Kindes | der Kinder\nIndefinido | eines Vertrags | einer Wohnung | eines Kindes | –\n\nMasculino y neutro: el sustantivo toma **-s** (o -es en las palabras cortas). Femenino y plural: el sustantivo no cambia. Nombres propios: una simple -s: Annas Wohnung.\n- Escrito: die Adresse des Arbeitgebers. Hablado: die Adresse vom Arbeitgeber.\n#h Preposiciones + genitivo\n#table\nPreposición | Significado | Ejemplo\nwegen | a causa de | Wegen des Streiks fährt kein Zug.\ntrotz | a pesar de | Trotz des Regens gehen wir raus.\nwährend | durante | während der Arbeitszeit\ninnerhalb / außerhalb | dentro de / fuera de | außerhalb der Öffnungszeiten\nstatt / anstatt | en lugar de | Statt eines Briefes schicke ich eine E-Mail.\n\nAl hablar, wegen y trotz van muy a menudo con dativo (wegen dem Streik).\n#ex Completa.\nDas ist das Auto ___ (mein) Vaters. = meines\nDie Tür ___ (die) Wohnung ist kaputt. = der\n___ (wegen, das) Wetters bleiben wir zu Hause. (2 palabras) = Wegen des\nDas ist ___ (Lisa) Fahrrad. = Lisas\n\n@26|Números, hora y fechas|A1\nDel 21 al 99 se dice **la unidad antes que la decena**, unidas por und, en una sola palabra: 24 = vierundzwanzig.\n#table\n1–12 | Decenas | Números grandes\neins, zwei, drei … elf, zwölf | zwanzig, dreißig (sin z), vierzig … neunzig | hundert, tausend, eine Million\n13–19: dreizehn … neunzehn | 35 = fünfunddreißig | 1 250 = tausendzweihundertfünfzig\n\nPrecios: 3,50 € = drei Euro fünfzig. Por teléfono se suele decir zwo en lugar de zwei. Coma para los decimales, punto para los miles: 1.250,99 €.\n#h La hora\n#table\nHora | Oficial | Coloquial\n8:10 | acht Uhr zehn | zehn nach acht\n8:15 | acht Uhr fünfzehn | Viertel nach acht\n8:30 | acht Uhr dreißig | halb neun (!)\n8:45 | acht Uhr fünfundvierzig | Viertel vor neun\n20:00 | zwanzig Uhr | acht Uhr abends\n\n**Trampa número 1**: halb neun = 8:30, no 9:30.\n#h Las fechas\n- Ordinales: -te hasta el 19, -ste a partir del 20. der zweite, der zwanzigste. Irregulares: der erste, der dritte, der siebte.\n- Heute ist der dritte Oktober. ¿En qué fecha? Am dritten Oktober.\n- Preposiciones de tiempo: am + día (am Montag), um + hora, im + mes o estación (im Mai), in + plazo futuro (in zwei Wochen), vor + tiempo pasado (vor drei Jahren).\n#ex Escribe en letras o traduce.\n47 = siebenundvierzig\n9:30 (coloquial) = halb zehn\n14:45 (coloquial) = Viertel vor drei\nEl 1 de mayo estoy de vacaciones. = Am ersten Mai habe ich Urlaub.\nHace dos años me mudé. = Vor zwei Jahren bin ich umgezogen.\n\n@27|Las preguntas (W-Fragen)|A1\nPregunta abierta: palabra interrogativa en posición 1, verbo en 2. Pregunta cerrada (sí/no): verbo en 1.\n#table\nPalabra | Significado | Ejemplo\nwer / wen / wem / wessen | quién (N / A / D / G) | Wer ist das? Wem gehört das?\nwas | qué | Was kostet das?\nwo | dónde (sin desplazamiento) | Wo ist die Toilette?\nwohin | adónde | Wohin fährt dieser Bus?\nwoher | de dónde | Woher kommst du?\nwann | cuándo | Wann öffnet das Bürgeramt?\nwie | cómo | Wie funktioniert das?\nwie viel / wie viele | cuánto / cuántos | Wie viele Zimmer hat die Wohnung?\nwie lange | cuánto tiempo | Wie lange dauert das?\nwarum | por qué | Warum ist der Zug verspätet?\nwelcher / welche / welches | qué, cuál | Welche Linie fährt zum Bahnhof?\nwas für ein | qué tipo de | Was für ein Auto hast du?\n\n#h Trampas\n- wer = quién; wo = dónde. No los confundas con el inglés (who / where).\n- Al hablar se suele separar: Wo gehst du hin? Wo kommst du her?\n- Pregunta indirecta: verbo al final. Können Sie mir sagen, wo der Bahnhof ist?\n#h Frases de supervivencia\n> Wie bitte? = ¿Perdón? ¿Cómo dice?\n> Wo finde ich die Milch? = ¿Dónde encuentro la leche?\n> Wie lange haben Sie heute geöffnet? = ¿Hasta qué hora abren hoy?\n#ex Encuentra la palabra interrogativa.\n___ wohnst du? – In Köln. = Wo\n___ kostet das Ticket? – 3 Euro. = Wie viel\n___ hast du Geburtstag? – Im Mai. = Wann\n___ hilfst du? – Meiner Nachbarin. = Wem\n___ Zug nimmst du? – Den ICE um 10 Uhr. = Welchen\n___ gehst du? – Zum Supermarkt. = Wohin\n\n@28|Konjunktiv II del pasado: lamentos y reproches|B2\nPara hablar de una situación pasada **que no ocurrió** (lamento, reproche, hipótesis), se usa **hätte** o **wäre** + participio. Es el «habría…» del español. La elección entre hätte y wäre sigue la regla del perfecto (ficha 14).\n#table\nPerfecto (real) | Konjunktiv II del pasado (irreal) | Significado\nIch habe gewartet. | Ich hätte gewartet. | Habría esperado.\nIch bin gekommen. | Ich wäre gekommen. | Habría venido.\nIch habe kommen können. | Ich hätte kommen können. | Habría podido venir.\nDu hast anrufen sollen. | Du hättest anrufen sollen. | Deberías haber llamado.\n\nCon un modal, hay un **doble infinitivo** al final: hätte … machen müssen / können / sollen.\n#h Los usos\n- **Hipótesis irreal**: Wenn ich das gewusst hätte, wäre ich gekommen.\n- **Lamento**: Hätte ich bloß mehr gespart!\n- **Reproche**: Du hättest mir Bescheid sagen sollen.\n- **Casi**: Fast wäre ich zu spät gekommen.\n#h En el día a día\n> Wenn ich früher losgefahren wäre, hätte ich den Zug nicht verpasst. = Si hubiera salido antes, no habría perdido el tren.\n> Das hätten Sie mir früher sagen müssen. = Usted tendría que habérmelo dicho antes.\n> An deiner Stelle hätte ich den Vertrag nicht unterschrieben. = Yo que tú, no habría firmado el contrato.\n#ex Completa con hätte o wäre (bien conjugado).\nWenn ich das gewusst ___, wäre ich gekommen. = hätte\nWenn du früher aufgestanden ___, hättest du den Bus bekommen. = wärst || wärest\nDu ___ mich anrufen sollen! = hättest\nFast ___ ich den Termin vergessen. = hätte\nWenn wir den Zug genommen ___, wären wir schon da. = hätten\n\n@29|Konjunktiv I y estilo indirecto|B2\nLos periódicos, la radio y las cartas oficiales reproducen las palabras de otros en **Konjunktiv I**. Indica que se está citando sin tomar partido. En la práctica, se usa sobre todo en la **3.ª persona del singular**: raíz + **-e**.\n#table\nInfinitivo | Indicativo | Konjunktiv I | Ejemplo\nsein | er ist | er sei | Er sagt, er sei krank.\nhaben | er hat | er habe | Sie sagt, sie habe keine Zeit.\nkönnen | er kann | er könne | Er meint, er könne nicht kommen.\nwerden | er wird | er werde | Sie erklärt, sie werde kündigen.\nkommen | er kommt | er komme | Er sagt, er komme morgen.\n\n**Si el Konjunktiv I coincide con el indicativo** (sobre todo en plural: sie haben), se usa el Konjunktiv II: Sie sagen, sie hätten keine Zeit.\n#h Transformar una frase\n- Pasado: habe / sei + participio. „Ich bin gefahren.\" → Er sagt, er sei gefahren.\n- Pregunta: ob o palabra interrogativa + verbo al final. Sie fragt, ob ich Zeit habe.\n- Orden: sollen. „Warten Sie!\" → Er sagt, ich solle warten.\n- Los pronombres cambian según quién habla: „Ich komme\" (Anna) → Anna sagt, sie komme.\n#h En el día a día\n> Der Minister sagte, die Lage sei ernst. = El ministro dijo que la situación era grave.\n> Die Firma teilte mit, sie habe keine Fehler gemacht. = La empresa comunicó que no había cometido ningún error.\n#ex Pasa al estilo indirecto (una sola palabra).\nEr sagt: „Ich bin krank.\" → Er sagt, er ___ krank. = sei\nSie sagt: „Ich habe keine Zeit.\" → Sie sagt, sie ___ keine Zeit. = habe\nDer Chef sagt: „Das Projekt kann warten.\" → Er sagt, das Projekt ___ warten. = könne\nDie Zeitung schreibt: „Der Minister ist zurückgetreten.\" → Der Minister ___ zurückgetreten. = sei\nSie sagen: „Wir haben das nicht gewusst.\" → Sie sagen, sie ___ das nicht gewusst. = hätten\n\n@30|Pasiva avanzada y sus alternativas|B2\nEn el nivel B2 aparece la pasiva en todos los tiempos y con los modales, pero también estructuras que tienen **sentido pasivo sin werden**. Están por todas partes en los reglamentos y en las cartas oficiales.\n#table\nEstructura | Significado | Ejemplo\nmodal + participio + werden | pasiva con modal | Die Miete muss pünktlich bezahlt werden.\npasiva impersonal | se (sin sujeto) | Hier wird nicht geraucht.\nsich lassen + infinitivo | se puede hacer | Das Problem lässt sich lösen.\nsein + zu + infinitivo | se debe / se puede hacer | Der Antrag ist bis Freitag einzureichen.\nadjetivo en -bar | que se puede … | lösbar, machbar, erreichbar\nman + activa | se, uno | Man muss die Miete pünktlich bezahlen.\n\n**sein + zu + infinitivo** tiene dos significados según el contexto: obligación (Die Gebühr ist sofort zu zahlen = debe pagarse) o posibilidad, sobre todo en negativo (Das ist nicht zu verstehen = no se puede entender).\n#h En el día a día\n> Der Ausweis ist bei der Anmeldung vorzulegen. = El documento de identidad debe presentarse al hacer el registro.\n> Ich bin telefonisch gut erreichbar. = Se me puede localizar fácilmente por teléfono.\n> Das lässt sich leicht ändern. = Eso se puede cambiar fácilmente.\n#ex Transforma con la estructura indicada.\nDas Problem kann gelöst werden. (sich lassen) = Das Problem lässt sich lösen.\nDer Antrag muss bis Freitag eingereicht werden. (sein + zu) = Der Antrag ist bis Freitag einzureichen.\nDas kann man nicht lesen. (adjetivo en -bar) = Das ist nicht lesbar.\nMan musste die Rechnung bezahlen. (pasiva en pretérito) = Die Rechnung musste bezahlt werden.\nMan arbeitet hier sonntags nicht. (pasiva impersonal) = Hier wird sonntags nicht gearbeitet. || Sonntags wird hier nicht gearbeitet.\n\n@31|Conjunciones dobles|B2\nPara estructurar una argumentación, el alemán usa conjunciones de dos partes. Unen dos palabras, dos grupos o dos oraciones.\n#table\nConjunción | Significado | Ejemplo\nsowohl … als auch | tanto … como | Er spricht sowohl Deutsch als auch Englisch.\nnicht nur … sondern auch | no solo … sino también | Die Wohnung ist nicht nur groß, sondern auch billig.\nweder … noch | ni … ni | Ich trinke weder Kaffee noch Tee.\nentweder … oder | o … o | Entweder kommst du mit, oder du bleibst hier.\nzwar … aber | es cierto que … pero | Die Wohnung ist zwar teuer, aber sehr schön.\neinerseits … andererseits | por un lado … por otro | Einerseits verdiene ich gut, andererseits habe ich keine Zeit.\nje … desto / umso | cuanto más … más | Je mehr ich übe, desto besser spreche ich.\n\n#h El orden de las palabras con je … desto\n- **je** + comparativo abre una oración subordinada: el verbo va al final. Je früher wir losfahren, …\n- **desto** + comparativo está en posición 1: el verbo va justo después, y luego el sujeto. …, desto weniger Stau gibt es.\n- weder … noch ya niega la frase: no se añade nicht ni kein.\n#ex Completa (escribe las dos palabras, separadas por un espacio).\nIch trinke ___ Kaffee ___ Tee. (ni … ni) = weder noch\n___ mehr ich lerne, ___ mehr verstehe ich. (cuanto más … más) = Je desto || Je umso\nEr spricht ___ Deutsch ___ Englisch. (tanto … como, 3 palabras) = sowohl als auch\nDie Wohnung ist ___ teuer, ___ sehr schön. (es cierto que … pero) = zwar aber\n___ wir fahren mit dem Zug, ___ wir nehmen das Auto. (o … o) = Entweder oder\n\n@32|Participios usados como adjetivos|B2\nEn la lengua escrita, en lugar de una oración de relativo, se suele colocar un **participio delante del sustantivo**. Se declina como un adjetivo (ficha 18) y puede ir precedido de complementos: es el «atributo extendido», típico de los periódicos y los textos oficiales.\n#table\nParticipio | Formación | Significado | Ejemplo\nPartizip I | infinitivo + -d | acción en curso (activa) | die steigenden Preise (los precios que suben)\nPartizip II | participio pasado | acción sufrida o terminada | das gekaufte Auto (el auto comprado)\n\n#h De la oración de relativo al participio\n#table\nOración de relativo | Participio\ndie Preise, die seit Jahren steigen | die seit Jahren steigenden Preise\ndie Unterlagen, die vom Amt geschickt wurden | die vom Amt geschickten Unterlagen\nein Kind, das schläft | ein schlafendes Kind\nder Zug, der gerade ankommt | der gerade ankommende Zug\n\n**Para leer** una frase escrita larga: localiza el artículo y salta hasta el sustantivo; todo lo que hay entre ambos describe ese sustantivo.\n#h En el día a día\n> Bitte senden Sie uns die vollständig ausgefüllten Formulare zurück. = Por favor, devuélvanos los formularios completamente rellenados.\n> Die stark gestiegenen Mieten sind ein großes Problem. = Los alquileres, que han subido mucho, son un gran problema.\n#ex Completa con el participio bien declinado.\nDie Preise steigen. → die ___ Preise (steigen) = steigenden\nDer Brief wurde gestern geschickt. → der gestern ___ Brief = geschickte\nein Kind, das schläft → ein ___ Kind = schlafendes\nDie Unterlagen wurden ausgefüllt. → die ___ Unterlagen = ausgefüllten\nWasser, das kocht → ___ Wasser = kochendes\n\n@33|Estilo nominal y expresiones verbo + sustantivo|B2\nLa lengua escrita y administrativa prefiere los **sustantivos** a los verbos. Saber pasar de unos a otros ayuda a leer las cartas oficiales y a escribir de forma más formal.\n#table\nVerbo | Sustantivo | Ejemplo escrito\nanmelden | die Anmeldung | Die Anmeldung erfolgt online.\nankommen | die Ankunft | Nach der Ankunft des Zuges …\nabfahren | die Abfahrt | Vor der Abfahrt bitte einsteigen.\nentscheiden | die Entscheidung | Die Entscheidung fällt morgen.\nbeantragen | die Beantragung | Für die Beantragung brauchen Sie …\nrauchen | das Rauchen | Das Rauchen ist hier verboten.\n\n> Nachdem der Zug angekommen ist, … = Nach der Ankunft des Zuges, …\n#h Expresiones verbo + sustantivo (Nomen-Verb-Verbindungen)\nEl significado lo aporta el sustantivo; el verbo es fijo y hay que aprenderlo junto con él.\n#table\nExpresión | Significado\neinen Antrag stellen | presentar una solicitud\neine Entscheidung treffen | tomar una decisión\nin Frage stellen | poner en duda, cuestionar\nzur Verfügung stehen / stellen | estar / poner a disposición\nBescheid geben / sagen | informar, avisar\nRücksicht nehmen auf + A | tener en cuenta, tener consideración con\nin Kraft treten | entrar en vigor\nzur Kenntnis nehmen | tomar nota de\neine Rolle spielen | desempeñar un papel\nKritik üben an + D | criticar\n\n#ex Completa con el verbo o el sustantivo.\nWir müssen heute eine Entscheidung ___. (tomar) = treffen\nIch möchte einen Antrag auf Elterngeld ___. (presentar) = stellen\nDas neue Gesetz ___ im Januar in Kraft. = tritt\nBitte ___ Sie mir bis Freitag Bescheid. = geben || sagen\nFür Fragen ___ wir Ihnen gern zur Verfügung. = stehen\nankommen → die ___ = Ankunft\n\n@34|Preposiciones del estilo escrito|B2\nLas cartas oficiales, los contratos y la prensa usan preposiciones que apenas se oyen al hablar. La mayoría van seguidas de **genitivo**.\n#table\nPreposición | Caso | Significado | Ejemplo\naufgrund | G | debido a | aufgrund der hohen Kosten\nangesichts | G | en vista de | angesichts der Lage\nbezüglich / hinsichtlich | G | con respecto a | bezüglich Ihrer Anfrage\ninfolge | G | como consecuencia de | infolge des Sturms\nmithilfe | G | con ayuda de | mithilfe eines Wörterbuchs\nanlässlich | G | con motivo de | anlässlich seines Geburtstags\nzugunsten | G | a favor de | zugunsten der Mieter\nlaut | D (o G) | según | laut Vertrag\ngemäß / entsprechend | D | conforme a | gemäß § 5\ndank | D (o G) | gracias a | dank Ihrer Hilfe\nzufolge | D, detrás del sustantivo | según, de acuerdo con | dem Bericht zufolge\n\n#h En el día a día\n> Bezüglich Ihrer Anfrage vom 3. Mai teilen wir Ihnen Folgendes mit. = Con respecto a su consulta del 3 de mayo, le comunicamos lo siguiente.\n> Laut Vertrag beträgt die Kündigungsfrist drei Monate. = Según el contrato, el plazo de preaviso es de tres meses.\n> Infolge des Streiks fallen heute viele Züge aus. = Como consecuencia de la huelga, hoy se cancelan muchos trenes.\n#ex Elige la preposición.\n___ Vertrag beträgt die Kündigungsfrist drei Monate. (según) = Laut\n___ Ihrer Anfrage vom 3. Mai … (con respecto a) = Bezüglich || Hinsichtlich\n___ des Streiks fallen viele Züge aus. (debido a) = Aufgrund || Wegen || Infolge\n___ Ihrer Hilfe haben wir es geschafft. (gracias a) = Dank\n___ der hohen Kosten wurde das Projekt gestoppt. (en vista de) = Angesichts\n\n@35|Oraciones subordinadas avanzadas|B2\nAdemás de weil, dass y wenn, estas conjunciones permiten expresar el modo, la consecuencia, la comparación irreal o la condición. El verbo va siempre al final (ficha 17).\n#table\nConjunción | Significado | Ejemplo\nindem | gerundio (-ando, -iendo) | Man spart Energie, indem man weniger heizt.\nsodass / so …, dass | de modo que | Es regnete stark, sodass das Spiel ausfiel.\nals ob + K II | como si | Er tut so, als ob er nichts wüsste.\nohne dass | sin que | Er ging, ohne dass ich es merkte.\n(an)statt dass | en vez de (que) | Statt dass er hilft, schaut er zu.\nje nachdem, ob / wie | según (si / cómo) | Je nachdem, wie das Wetter ist, fahren wir.\nsofern / soweit | siempre que, en la medida en que | Sofern nichts dagegen spricht, …\nfalls | en caso de que, por si | Falls du Hilfe brauchst, ruf mich an.\nsolange | mientras | Solange du Fieber hast, bleibst du zu Hause.\nnachdem | después de que | Nachdem ich gegessen hatte, ging ich los.\n\n#h Concordancia de tiempos con nachdem\nLa acción de nachdem es **anterior**: pluscuamperfecto (hatte / war + participio) si la principal está en pasado, perfecto si está en presente.\n> Nachdem wir umgezogen waren, haben wir uns angemeldet. = Después de mudarnos, registramos nuestro nuevo domicilio.\n#ex Elige la conjunción.\nMan lernt eine Sprache am besten, ___ man sie jeden Tag spricht. (gerundio: hablándola) = indem\nEr tut so, ___ er mich nicht kennen würde. (como si) = als ob\nEs regnete stark, ___ das Spiel abgesagt wurde. (de modo que) = sodass\n___ ich mit der Arbeit fertig war, ging ich nach Hause. (después de que) = Nachdem\n___ du Hilfe brauchst, ruf mich an. (en caso de que) = Falls\n\n@36|Modales de suposición y de rumor|B2\nLos verbos modales también sirven para decir **hasta qué punto estás seguro** de una información, o **de dónde procede**. Es muy frecuente tanto al hablar como en la prensa.\n#table\nModal | Grado | Ejemplo | Significado\nmuss | casi seguro | Er muss krank sein. | Debe de estar enfermo (es seguro).\ndürfte | probable | Das dürfte teuer sein. | Probablemente sea caro.\nwird wohl | probable | Sie wird wohl im Büro sein. | Seguramente está en la oficina.\nkönnte / kann | posible | Sie könnte recht haben. | Puede que tenga razón.\nkann nicht | imposible | Das kann nicht stimmen. | Eso no puede ser cierto.\nsoll | se dice que | Das Restaurant soll sehr gut sein. | Dicen que el restaurante es muy bueno.\nwill | él asegura | Er will das nicht gewusst haben. | Asegura que no lo sabía.\n\n#h En pasado\nModal + **participio + haben / sein** (infinitivo pasado): Er muss den Zug verpasst haben. (Debe de haber perdido el tren.) Sie soll nach Berlin gezogen sein. (Dicen que se ha mudado a Berlín.)\n#ex Completa.\nDicen que la película es muy buena. → Der Film ___ sehr gut sein. = soll\nAsegura que está enfermo. → Er ___ krank sein. = will\nSeguro que es Anna. → Das ___ Anna sein. = muss\nPuede que tenga razón. → Sie ___ recht haben. = könnte || kann\nSeguro que ha perdido el tren. → Er muss den Zug ___ haben. = verpasst\n\n@37|La declinación débil (N-Deklination)|B1–B2\nAlgunos sustantivos masculinos toman **-(e)n en todos los casos salvo en el nominativo singular**. Es un error frecuente incluso en el nivel B2.\n#table\nCaso | Singular | Plural\nNominativo | der Kollege | die Kollegen\nAcusativo | den Kollegen | die Kollegen\nDativo | dem Kollegen | den Kollegen\nGenitivo | des Kollegen | der Kollegen\n\n#h ¿Qué sustantivos?\n- Masculinos en **-e** que designan personas o animales: der Kollege, der Kunde, der Junge, der Neffe, der Löwe.\n- Masculinos en **-ent, -ant, -ist, -at**: der Student, der Praktikant, der Polizist, der Kandidat, der Automat.\n- Algunos otros que debes conocer: der Mensch, der Nachbar, der Herr (den Herrn, plural die Herren), der Bauer.\n- Particularidad: der Name y der Gedanke toman -ns en genitivo (des Namens).\n#h En el día a día\n> Ich habe Herrn Müller eine E-Mail geschickt. = Le he enviado un correo electrónico al señor Müller.\n> Der Kellner fragt den Kunden, was er möchte. = El camarero le pregunta al cliente qué desea.\n#ex Completa con la forma correcta.\nIch frage meinen ___ (Nachbar). = Nachbarn\nWir helfen dem ___ (Kunde). = Kunden\nKennst du den ___ (Student)? = Studenten\nIch habe mit ___ Schmidt telefoniert. (Herr) = Herrn\nDer Polizist hilft dem ___ (Mensch). = Menschen\n\n@38|Las partículas modales|B2\nLos alemanes salpican sus frases de palabritas que no se traducen palabra por palabra, pero que cambian el tono: insistencia, sorpresa, cortesía, resignación. Hacen que el alemán hablado suene natural.\n#table\nPartícula | Efecto | Ejemplo\ndoch | insistencia, algo evidente | Komm doch mit! Das weißt du doch!\nmal | suaviza una petición | Schau mal! Kannst du mal kommen?\nja | sorpresa o algo que ambos saben | Das ist ja toll! Du weißt ja, wie er ist.\ndenn | pregunta con interés | Was ist denn los?\nhalt / eben | es lo que hay | Das ist halt so.\neigentlich | por cierto, en realidad | Wie heißt du eigentlich?\nwohl | suposición | Er ist wohl krank.\nschon | tranquilizar | Das klappt schon.\nbloß / nur | preocupación o advertencia | Was hast du bloß gemacht? Mach das bloß nicht!\n\n**Posición**: después del verbo conjugado y de los pronombres, antes de lo importante: Kannst du mir mal helfen? Nunca van en la posición 1.\n#h En el día a día\n> Setzen Sie sich doch! = ¡Siéntese, por favor!\n> Wo bist du denn? = Pero ¿dónde estás?\n> Das ist eben so in Deutschland. = En Alemania las cosas son así.\n#ex Completa con la partícula.\nWas ist ___ los? (pregunta con interés) = denn\nKomm ___ mit! (invitación insistente) = doch\nSchau ___ hier! (suaviza) = mal\nDas ist ___ so, da kann man nichts machen. (resignación) = halt || eben\nKeine Sorge, das klappt ___. (tranquilizar) = schon\n"};

/* ---------- vocabulary ---------- */
const THEMES = [];
const WORDS = [];
(function parse() {
  let t = null;
  for (const line of RAW.split("\n")) {
    const s = line.trim();
    if (!s) continue;
    if (s[0] === "#") {
      const [id, name, desc, level] = s.slice(1).split("|").map(x => x.trim());
      t = { id, name, desc, level: level || "A1–B1", words: [] };
      THEMES.push(t);
      continue;
    }
    const [a, b, c] = s.split("|");
    let w;
    if (a[0] === "=") {
      w = { kind: "p", de: a.slice(1), fr: c };
    } else if (a[0] === "~") {
      w = { kind: "v", de: a.slice(1), forms: b, fr: c };
    } else {
      const m = a.match(/^(der|die|das) (.+)$/);
      if (m) {
        const plOnly = /\(Pl\.\)/.test(m[2]);
        const base = m[2].replace(/\s*\(Pl\.\)/, "");
        w = { kind: "n", art: plOnly ? "pl" : m[1], base, de: m[1] + " " + base, pl: b && b !== "—" ? b : "", plOnly, fr: c };
      } else if (/[!?.…,]/.test(a) && /\s/.test(a) || /[.!]$/.test(a) || / /.test(a)) {
        w = { kind: "p", de: a, fr: c };
      } else {
        w = { kind: "w", de: a, fr: c };
      }
    }
    w.theme = t.id;
    w.level = t.level;
    w.id = hash(w.de);
    t.words.push(w);
    WORDS.push(w);
  }
})();
(function attachExamples() {
  const byDe = {};
  for (const line of EXRAW.split("\n")) {
    const [k, de, fr] = line.split("|");
    if (k && de && fr) byDe[k.trim()] = { de: de.trim(), fr: fr.trim() };
  }
  for (const w of WORDS) if (byDe[w.de]) w.ex = byDe[w.de];
})();
function hash(s) { let h = 2166136261; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return (h >>> 0).toString(36); }
const THEME_BY_ID = Object.fromEntries(THEMES.map(t => [t.id, t]));

/* ---------- progress (Leitner boxes 0..5) ---------- */
const INTERVALS = [0, 1, 2, 4, 9, 21];
const GOAL = 20;
const today = () => Math.floor((Date.now() - new Date().getTimezoneOffset() * 60000) / 86400000);
const LS_KEY = "wortschatz-progress-v1";
let P = { w: {}, days: {} };
try { const s = localStorage.getItem(LS_KEY); if (s) P = Object.assign(P, JSON.parse(s)); } catch (e) {}
let remote = null, syncState = "local", saveTimer = null, saving = Promise.resolve();

function entry(id) { return P.w[id]; }            // [box, due, seen, correct]
function box(id) { const e = P.w[id]; return e ? e[0] : 0; }
function isDue(id) { const e = P.w[id]; return e && e[1] <= today(); }
function grade(w, ok) {
  const e = P.w[w.id] || [0, today(), 0, 0];
  e[2]++; if (ok) e[3]++;
  e[0] = ok ? Math.min(e[0] + 1, 5) : 1;
  e[1] = today() + (ok ? INTERVALS[e[0]] : 0);
  P.w[w.id] = e;
  const d = String(today()); P.days[d] = (P.days[d] || 0) + 1;
  persist();
}
function progressSnapshot() {
  const snapshot = { v: 1, w: P.w, days: P.days, best: P.best || 0, g: P.g || {}, mine: P.mine || {}, iki: P.iki || {}, err: P.err || {}, prog: P.prog || {}, updated: Date.now() };
  for (const st of STORES) snapshot[st] = P[st] || {};
  return snapshot;
}
function persist() {
  try { localStorage.setItem(LS_KEY, JSON.stringify(P)); } catch (e) {}
  if (!remote) return;
  clearTimeout(saveTimer);
  saveTimer = setTimeout(() => {
    const snapshot = progressSnapshot();
    saving = saving.then(() => remote.set(snapshot)).then(() => { setSync("on"); }).catch(err => {
      if (err && (err.code === "invalid_argument" || err.code === "revoked" || err.code === "not_granted")) { remote = null; setSync("local"); }
    });
  }, 1500);
}
function merge(other) {
  if (!other || typeof other !== "object") return false;
  let changed = false;
  for (const [id, e] of Object.entries(other.w || {})) {
    const mine = P.w[id];
    if (!mine || e[2] > mine[2]) { P.w[id] = e; changed = true; }
  }
  if ((other.best || 0) > (P.best || 0)) { P.best = other.best; changed = true; }
  P.g = P.g || {};
  for (const [id, g] of Object.entries(other.g || {})) {
    const mine = P.g[id];
    if (!mine || g[2] > mine[2] || g[2] === mine[2] && g[0] > mine[0]) { P.g[id] = g; changed = true; }
  }
  P.mine = P.mine || {};
  for (const [id, m] of Object.entries(other.mine || {})) {
    const cur = P.mine[id];
    if (!cur || m.t > cur.t) { P.mine[id] = m; changed = true; }
  }
  P.iki = P.iki || {};
  for (const [id, l] of Object.entries(other.iki || {})) {
    const cur = P.iki[id];
    if (!cur || l.t > cur.t) { P.iki[id] = l; changed = true; }
  }
  for (const store of STORES) {
    P[store] = P[store] || {};
    for (const [k, v] of Object.entries(other[store] || {})) {
      const mine = P[store][k];
      if (!mine || v[1] > mine[1]) { P[store][k] = v; changed = true; }
    }
  }
  if (mergeErr(other)) changed = true;
  P.prog = P.prog || {};
  if (mergeProg(P.prog, other.prog)) changed = true;
  for (const [d, n] of Object.entries(other.days || {})) {
    if ((P.days[d] || 0) < n) { P.days[d] = n; changed = true; }
  }
  return changed;
}
async function initRemote() {
  try {
    if (!window.claude || !window.claude.use) return;
    const [db, user] = await Promise.all([window.claude.use("db"), window.claude.use("user")]);
    if (!db || !user) return;
    const uid = await user.id();
    if (!uid) return;
    const ref = db.doc("data/users/" + uid + "/progress");
    const snap = await ref.get();
    const theirs = snap.exists ? snap.data() : null;
    remote = ref;
    const pulled = merge(theirs);
    try { localStorage.setItem(LS_KEY, JSON.stringify(P)); } catch (e) {}
    setSync("on");
    // push if this device knows something the server doesn't
    const localCount = Object.keys(P.w).length, remoteCount = theirs ? Object.keys(theirs.w || {}).length : 0;
    const progDiffers = !theirs || JSON.stringify(P.prog) !== JSON.stringify(theirs.prog || {});
    if (!theirs || localCount !== remoteCount || !pulled || progDiffers) persist();
    if (pulled) syncMine();
    if (pulled && view === "home") render();
  } catch (e) { setSync("local"); }
}
function setSync(s) { syncState = s; const el = document.getElementById("sync"); if (el) { el.className = "sync" + (s === "on" ? " on" : ""); el.lastChild.textContent = s === "on" ? "Progression synchronisée sur ton compte" : "Progression enregistrée sur cet appareil"; } }

function streak() {
  let d = today(), n = 0;
  if (!P.days[d]) d--;
  while (P.days[d]) { n++; d--; }
  return n;
}
function dueCount(words = WORDS) { return words.filter(w => isDue(w.id)).length; }
function mastered(words = WORDS) { return words.filter(w => box(w.id) >= 4).length; }
function learning(words = WORDS) { return words.filter(w => { const b = box(w.id); return b > 0 && b < 4; }).length; }

/* ---------- speech ---------- */
let deVoice = null;
function pickVoice() { try { const vs = speechSynthesis.getVoices(); deVoice = vs.find(v => /^de(-|_)DE/i.test(v.lang)) || vs.find(v => /^de/i.test(v.lang)) || null; } catch (e) {} }
try { pickVoice(); speechSynthesis.onvoiceschanged = pickVoice; } catch (e) {}
function speak(text, rate) {
  try {
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text.replace(/…/g, ""));
    u.lang = "de-DE"; if (deVoice) u.voice = deVoice; u.rate = rate || 0.92;
    speechSynthesis.speak(u);
  } catch (e) {}
}
const canSpeak = typeof window.speechSynthesis !== "undefined";
const SPK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 5 6 9H3v6h3l5 4z" fill="currentColor"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M18.5 5.5a9 9 0 0 1 0 13"/></svg>';
function spkBtn(text, sm) { return canSpeak ? `<button class="icon-btn${sm ? " sm" : ""}" data-say="${esc(text)}" aria-label="Écouter">${SPK}</button>` : ""; }

/* ---------- helpers ---------- */
function esc(s) { return String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]); }
function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
function deHTML(w) {
  if (w.kind === "n") return `<span class="art art-${w.art}">${w.de.split(" ")[0]}</span> ${esc(w.base)}${w.plOnly ? '<span class="tag">pluriel</span>' : ""}`;
  return esc(w.de);
}
function details(w) {
  if (w.kind === "n") return w.plOnly ? "toujours au pluriel" : w.pl ? `pluriel : <span lang="de">die ${esc(w.pl)}</span>` : "pas de pluriel courant";
  if (w.kind === "v") return `<span lang="de">${esc(w.forms)}</span>`;
  return "";
}
function exampleHTML(w) {
  if (!w.ex) return "";
  return `<div class="ex"><div class="ex-text"><span class="label">Exemple</span><div class="ex-de" lang="de">${esc(w.ex.de)}</div><div class="ex-fr" data-notr>${esc(w.ex.fr)}</div></div>${spkBtn(w.ex.de, true)}</div>`;
}
const MONTHS_SEASONS = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember", "Frühling", "Sommer", "Herbst", "Winter", "Mittwoch"];
const GENDER_RULES = [
  { art: "der", label: "les jours, les mois et les saisons", how: "toujours", test: b => /tag$/.test(b) || MONTHS_SEASONS.includes(b) },
  { art: "die", label: "les noms en -ung", how: "toujours", test: b => /ung$/.test(b) },
  { art: "die", label: "les noms en -heit", how: "toujours", test: b => /heit$/.test(b) },
  { art: "die", label: "les noms en -keit", how: "toujours", test: b => /keit$/.test(b) },
  { art: "die", label: "les noms en -schaft", how: "toujours", test: b => /schaft$/.test(b) },
  { art: "die", label: "les noms en -ion", how: "toujours", test: b => /ion$/.test(b) },
  { art: "die", label: "les noms en -tät", how: "toujours", test: b => /tät$/.test(b) },
  { art: "das", label: "les noms en -chen", how: "toujours", test: b => /chen$/.test(b) && b !== "Kuchen" },
  { art: "das", label: "les noms en -lein", how: "toujours", test: b => /lein$/.test(b) },
  { art: "der", label: "les noms en -ling", how: "toujours", test: b => /ling$/.test(b) },
  { art: "der", label: "les noms en -ismus", how: "toujours", test: b => /ismus$/.test(b) },
  { art: "die", label: "les noms en -ik", how: "presque toujours", test: b => /ik$/.test(b) },
  { art: "das", label: "les noms en -ment", how: "souvent", test: b => /ment$/.test(b) },
  { art: "das", label: "les noms en -um", how: "souvent", test: b => /[^a]um$/.test(b) },
  { art: "das", label: "les noms en -nis", how: "souvent", test: b => /nis$/.test(b) },
  { art: "der", label: "les noms en -or", how: "souvent", test: b => /or$/.test(b) },
  { art: "die", label: "les noms en -ie", how: "souvent", test: b => /ie$/.test(b) },
  { art: "die", label: "les noms en -ei", how: "souvent", test: b => /.ei$/.test(b) && b.length > 3 },
  { art: "das", label: "les noms commençant par Ge-", how: "souvent", test: b => /^Ge[a-zäöü]/.test(b) && !/^Gel[bd]/.test(b) && b.length > 4 },
  { art: "die", label: "les noms en -e", how: "souvent", test: b => /e$/.test(b) },
];
const GENDER_NAME = { der: "masculins", die: "féminins", das: "neutres" };
function genderRule(w) {
  if (w.kind !== "n" || w.plOnly) return null;
  const r = GENDER_RULES.find(r => r.test(w.base));
  if (!r) return null;
  return r.art === w.art
    ? `Règle : ${r.label} sont ${r.how} ${GENDER_NAME[r.art]}.`
    : `Exception : ${r.label} sont ${r.how} ${GENDER_NAME[r.art]}, mais pas ce mot.`;
}
function norm(s) {
  return s.toLowerCase().normalize("NFC").replace(/ß/g, "ss").replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue")
    .replace(/[!?.,…¿¡"'()]/g, " ").replace(/\s+/g, " ").trim();
}
function lev(a, b) {
  const m = a.length, n = b.length; if (Math.abs(m - n) > 2) return 3;
  let prev = Array.from({ length: n + 1 }, (_, i) => i);
  for (let i = 1; i <= m; i++) { const cur = [i]; for (let j = 1; j <= n; j++) cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)); prev = cur; }
  return prev[n];
}
function checkTyped(w, input) {
  const got = norm(input);
  if (!got) return { ok: false };
  const targets = [w.de];
  if (w.kind === "v" && w.de.startsWith("sich ")) targets.push(w.de.slice(5));
  // any word with the same French meaning is accepted
  for (const o of WORDS) if (o !== w && o.fr === w.fr) targets.push(o.de);
  for (const t of targets) if (norm(t) === got) return { ok: true, exact: true };
  if (w.kind === "n") {
    const parts = got.split(" ");
    if (parts.length === 1 || !["der", "die", "das"].includes(parts[0])) {
      if (norm(w.base) === got || lev(norm(w.base), got) <= 1) return { ok: false, why: "Il manque l'article." };
    } else if (parts[0] !== w.de.split(" ")[0] && lev(norm(w.base), parts.slice(1).join(" ")) <= 1) {
      return { ok: false, why: "Mauvais article." };
    }
  }
  const t = norm(w.de);
  if (t.length >= 5 && lev(t, got) <= 1) return { ok: true, exact: false };
  return { ok: false };
}

/* ---------- session building ---------- */
const MODES = {
  qcm: { name: "QCM", desc: "4 choix" },
  type: { name: "Saisie", desc: "écrire le mot" },
  genre: { name: "Genre", desc: "der, die, das" },
  plural: { name: "Pluriels", desc: "forme au pluriel" },
};
let settings = { mode: "qcm", dir: "mix", level: "all", autoNext: true };
try { Object.assign(settings, JSON.parse(localStorage.getItem("wortschatz-settings") || "{}")); } catch (e) {}
if (!MODES[settings.mode]) settings.mode = "qcm"; // the cards and article modes were removed (gender lives in the Genre tab)
const LEVELS = [["all", "Tous niveaux"], ["A1–B1", "A1 → B1"], ["B2", "B2"]];
function activeThemes() { return THEMES.filter(t => t.level === "mine" ? t.words.length : settings.level === "all" || t.level === settings.level); }
function activeWords() { return WORDS.filter(w => !w.iki && (settings.level === "all" || w.level === settings.level || w.mine)); }
// interface language: the one chosen in Réglages, otherwise the phone's language, otherwise English
function uiLang() {
  if (settings.lang) return settings.lang;
  for (const l of navigator.languages || [navigator.language || ""]) {
    const c = String(l).slice(0, 2).toLowerCase();
    if (c === "fr" || c === "en" || c === "es") return c;
  }
  return "en";
}
function saveSettings() { try { localStorage.setItem("wortschatz-settings", JSON.stringify(settings)); } catch (e) {} }

function eligible(mode, words) {
  if (mode === "article" || mode === "genre") return words.filter(w => w.kind === "n" && !w.plOnly);
  if (mode === "type") return words.filter(w => w.kind !== "p" || w.iki); // class expressions are worth typing too
  if (mode === "plural") return words.filter(w => w.kind === "n" && w.pl && !w.plOnly);
  if (mode === "qcm" && settings.ikidir === "dd") return words.filter(w => !w.iki || w.def); // IKI German → German needs a synonym
  return words;
}
function pickWords(pool, n, maxNew) {
  const t = today();
  const due = shuffle(pool.filter(w => P.w[w.id] && P.w[w.id][1] <= t)).sort((a, b) => box(a.id) - box(b.id));
  const fresh = shuffle(pool.filter(w => !P.w[w.id]));
  const later = shuffle(pool.filter(w => P.w[w.id] && P.w[w.id][1] > t)).sort((a, b) => P.w[a.id][1] - P.w[b.id][1]);
  const out = due.slice(0, n);
  out.push(...fresh.slice(0, Math.min(maxNew, n - out.length)));
  if (out.length < n) out.push(...later.slice(0, n - out.length));
  if (out.length < n) out.push(...fresh.slice(Math.min(maxNew, fresh.length)).slice(0, n - out.length));
  return shuffle(out);
}
function qType(mode, w) {
  if (mode === "article" || mode === "genre") return "article";
  if (mode === "cards") return "card";
  if (mode === "type") return w.kind === "p" && !w.iki ? "fr2de" : "type";
  if (mode === "qcm") {
    if (w.iki && settings.ikidir) {
      if (settings.ikidir === "dd") return w.def ? "dd" : "de2fr";
      if (settings.ikidir !== "mix") return settings.ikidir === "de" ? "de2fr" : "fr2de";
      return Math.random() < .5 ? "de2fr" : "fr2de";
    }
    if (settings.dir === "de") return "de2fr";
    if (settings.dir === "fr") return "fr2de";
    return Math.random() < .5 ? "de2fr" : "fr2de";
  }
  // review: difficulty grows with the box
  const b = box(w.id);
  if (b <= 1) return "de2fr";
  if (b === 2) return w.kind === "n" && !w.plOnly && Math.random() < .5 ? "article" : "fr2de";
  if (w.kind === "p") return "fr2de";
  return Math.random() < .7 ? "type" : (w.kind === "n" && !w.plOnly ? "article" : "fr2de");
}
function distractors(w, field) {
  const sameTheme = THEME_BY_ID[w.theme].words.filter(o => o !== w && o.kind === w.kind && o.fr !== w.fr && o.de !== w.de);
  let pool = shuffle(sameTheme);
  if (pool.length < 3) pool = pool.concat(shuffle(WORDS.filter(o => o !== w && o.kind === w.kind && o.fr !== w.fr && !pool.includes(o))));
  const out = [], seen = new Set([w[field]]);
  for (const o of pool) { if (!seen.has(o[field])) { seen.add(o[field]); out.push(o); } if (out.length === 3) break; }
  return out;
}
// German → German: the other choices are synonyms from the class, same lesson and kind of word first
function defChoices(w) {
  const pool = IKI_ALL.words.filter(o => o !== w && o.def && o.def !== w.def);
  const rank = o => (o.theme === w.theme ? 0 : 2) + (o.kind === w.kind ? 0 : 1);
  const out = [], seen = new Set([w.def]);
  for (const o of shuffle(pool).sort((a, b) => rank(a) - rank(b))) { if (!seen.has(o.def)) { seen.add(o.def); out.push(o); } if (out.length === 3) break; }
  return out;
}
function choicesFor(w, type) {
  return shuffle([w, ...(type === "dd" ? defChoices(w) : distractors(w, type === "de2fr" ? "fr" : "de"))]);
}
function buildQuestion(mode, w) {
  const type = qType(mode, w);
  const q = { w, type, answered: false };
  if (type === "de2fr" || type === "fr2de" || type === "dd") q.options = choicesFor(w, type);
  return q;
}

/* ---------- state & rendering ---------- */
const app = document.getElementById("app");
let view = "home";
let S = null; // current session

function startSession(mode, themeId) {
  if (mode === "plural") { startVX("plural", themeId); return; }
  const words = themeId === "all" || !themeId ? activeWords() : (THEME_BY_ID[themeId] || IKI_ALL).words;
  const pool = eligible(mode === "review" ? "qcm" : mode, words);
  if (!pool.length) return;
  const picked = mode === "review" ? pickWords(pool, 15, 5) : mode === "genre" ? pickWords(pool, 20, 20) : pickWords(pool, 10, 10);
  S = { mode, themeId, qs: picked.map(w => buildQuestion(mode, w)), i: 0, results: [], streak: 0, best: 0 };
  view = "quiz";
  render();
  window.scrollTo(0, 0);
}

function render() {
  if (view === "home") renderHome();
  else if (view === "quiz") renderQuiz();
  else if (view === "done") renderDone();
  else if (view === "vx") renderVX();
  else if (view === "vxdone") renderVXDone();
  else if (view === "exam") renderExam();
}

function meter(words) {
  const n = words.length || 1, m = mastered(words), l = learning(words);
  return `<span class="meter" aria-hidden="true"><i class="m2" style="width:${m / n * 100}%"></i><i class="m1" style="width:${l / n * 100}%"></i></span><span class="num">${m}/${words.length}</span>`;
}

/* ---------- navigation: 5 sections, each with its own exercises ---------- */
const ICONS = {
  prog: '<rect x="3.5" y="5" width="17" height="15.5" rx="2.5"/><path d="M3.5 10h17M8 3v4M16 3v4"/><path d="m9 15 2 2 4-4"/>',
  mots: '<rect x="3.5" y="7" width="12" height="14" rx="2"/><path d="M8.5 3.5h10a2 2 0 0 1 2 2V17"/>',
  gram: '<path d="M5 4.5A1.5 1.5 0 0 1 6.5 3H19v15H6.5A1.5 1.5 0 0 0 5 19.5z"/><path d="M5 19.5A1.5 1.5 0 0 0 6.5 21H19v-3"/><path d="M9 7.5h6M9 11h4"/>',
  iki: '<rect x="3" y="4.5" width="18" height="12" rx="1.5"/><path d="M7 9h7M7 12.5h4.5M9 20.5l1.5-4M15 20.5l-1.5-4"/>',
};
const SECTIONS = [
  { id: "prog", label: "Programme", subs: [] },
  // Quiz is a hub of cards: its pages are reached from the cards (no pills), each with a way back to the hub
  { id: "mots", label: "Quiz", nopills: true, subs: [["hub", "Quiz"], ["quiz", "Vocabulaire"], ["verbes", "Verbes"], ["dict", "Dictée"], ["err", "Mes erreurs"]] },
  { id: "gram", label: "Grammaire", subs: [["fiches", "Fiches"], ["verbes", "Verbes"], ["listes", "Listes"]] },
  { id: "iki", label: "IKI", subs: [] },
];
const SEC_BY_ID = Object.fromEntries(SECTIONS.map(s => [s.id, s]));
// IKI is only for a few people: hidden unless switched on in Réglages, or already in use (a lesson added or edited, or progress on an IKI word)
// (a few IKI words share their id, hence their progress, with a normal word: those say nothing about IKI)
function ikiUsed() {
  if (Object.values(P.iki || {}).some(l => l.t > 1)) return true;
  const own = new Set(WORDS.filter(w => !w.iki).map(w => w.id));
  return WORDS.some(w => w.iki && P.w[w.id] && !own.has(w.id));
}
function showIki() { return settings.showIki === undefined ? ikiUsed() : !!settings.showIki; }
function visibleSections() { return SECTIONS.filter(s => s.id !== "iki" || showIki()); }
// earlier versions used one flat row of tabs: map the last one used to its new place
const OLD_TAB = { learn: "mots:quiz", genre: "mots:genre", lex: "gram:lex", gram: "gram:fiches", dek: "gram:dek", order: "gram:order", irr: "verbes:irr", conj: "mots:verbes", vprep: "verbes:vprep", qprep: "mots:verbes", dict: "mots:dict", phr: "phrases:phr" };
settings.sub = settings.sub || {};
if (!settings.sec || settings.sec === "today") settings.sec = "prog"; // the Programme page replaced Aujourd'hui
if (settings.tab && OLD_TAB[settings.tab]) { const [a, b] = OLD_TAB[settings.tab].split(":"); settings.sub[a] = b; delete settings.tab; }
// Genre and Pluriels became modes of the Quiz page, next to QCM and Saisie
if (settings.sub.mots === "genre" || settings.sub.mots === "pluriel") { settings.mode = settings.sub.mots === "genre" ? "genre" : "plural"; delete settings.sub.mots; }
// Conjugaison and Quiz prép. moved from Verbes to Quiz → Verbes
if (settings.sub.verbes === "conj" || settings.sub.verbes === "qprep") {
  settings.vmode = settings.sub.verbes === "conj" ? "conj" : "prep";
  if (settings.sec === "verbes") { settings.sec = "mots"; settings.sub.mots = "verbes"; }
  settings.sub.verbes = "irr";
}
// the word list moved from Mots (now Quiz) to Grammaire
if (settings.sub.mots === "lex") { settings.sub.mots = "quiz"; if (settings.sec === "mots") { settings.sec = "gram"; settings.sub.gram = "lex"; } }
// the app always opens the Quiz on its hub
if (settings.sec === "mots") settings.sub.mots = "hub";
// the Erreurs section and the Dictée of Phrases moved into the Quiz hub
if (settings.sec === "err") { settings.sec = "mots"; settings.sub.mots = "err"; }
if (settings.sub.phrases === "dict") { settings.sub.phrases = "phr"; if (settings.sec === "phrases") { settings.sec = "mots"; settings.sub.mots = "dict"; } }
// Grammaire now has three pages (Fiches, Verbes, Listes), each made of collapsible parts; Verbes and Phrases moved in
settings.gopen = settings.gopen || {};
const GRAM_PAGE_OF = { dek: "fiches", order: "fiches", irr: "verbes", vprep: "verbes", lex: "listes", phr: "listes" };
if (settings.sec === "verbes" || settings.sec === "phrases") {
  const part = settings.sec === "verbes" ? settings.sub.verbes : "phr";
  const was = settings.sec; settings.sec = "gram"; settings.sub.gram = part || (was === "verbes" ? "irr" : "phr");
}
if (GRAM_PAGE_OF[settings.sub.gram]) { settings.gopen[settings.sub.gram] = true; settings.sub.gram = GRAM_PAGE_OF[settings.sub.gram]; }
function curSub(sec) { const s = SEC_BY_ID[sec]; return s.subs.some(x => x[0] === settings.sub[sec]) ? settings.sub[sec] : (s.subs[0] || [""])[0]; }
let setOpen = false;

function icon(id) { return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[id]}</svg>`; }
function levelName() { return { all: "Tous niveaux", "A1–B1": "A1 → B1", B2: "B2" }[settings.level]; }
// fetch the latest version (the offline copy on the iPhone is refreshed too), then restart
async function reloadApp() {
  const b = document.getElementById("reloadbtn"); if (b) b.classList.add("spin");
  try { localStorage.setItem(LS_KEY, JSON.stringify(P)); } catch (e) {}
  try { const r = "serviceWorker" in navigator && await navigator.serviceWorker.getRegistration(); if (r) await r.update(); } catch (e) {}
  location.reload();
}
function topBar(title) {
  return `<header class="top">
    <div class="brand"><div class="hsign" aria-hidden="true">W</div><h1>${title}</h1></div>
    <div class="topbtns"><button class="icon-btn" id="reloadbtn" aria-label="Recharger l'app" title="Recharger l'app"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 12a8 8 0 1 1-2.34-5.66"/><path d="M20 4v4.5h-4.5"/></svg></button>
    <button class="lvl" id="setbtn" aria-expanded="${setOpen}" aria-controls="setpanel"><span>${levelName()}</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 7h10M18 7h2M4 17h4M12 17h8"/><circle cx="16" cy="7" r="2"/><circle cx="10" cy="17" r="2"/></svg><span class="sr">Réglages</span></button></div>
  </header>
  ${setOpen ? `<section class="setpanel" id="setpanel" aria-label="Réglages">
    <span class="label">Langue de l'interface</span>
    <div class="dirs" role="group" aria-label="Langue" data-notr><button class="chip" data-uilang="auto" aria-pressed="${!settings.lang}" data-tr>Automatique</button>${UI_LANGS.map(([k, l]) => `<button class="chip" data-uilang="${k}" aria-pressed="${settings.lang === k}" lang="${k}">${l}</button>`).join("")}</div>
    <p class="note">Automatique : la langue du téléphone, ou l'anglais si elle n'est pas proposée.</p>
    <span class="label">Niveau</span>
    <div class="dirs" role="group" aria-label="Niveau">${LEVELS.map(([k, l]) => `<button class="chip" data-level="${k}" aria-pressed="${settings.level === k}">${l}</button>`).join("")}</div>
    <p class="note">Le niveau filtre les mots, les verbes, les fiches et les exercices de l'entraînement libre. Il ne s'applique pas au programme.</p>
    <div class="setrow"><span><b>Passage automatique</b><small>Après une bonne réponse, la question suivante s'affiche seule.</small></span><button class="switch" role="switch" id="autoNext" aria-checked="${settings.autoNext}" aria-label="Passage automatique"><i></i></button></div>
    <div class="setrow"><span><b>Lecture à voix haute</b><small>La bonne réponse est prononcée après chaque question.</small></span><button class="switch" role="switch" id="autoSay" aria-checked="${settings.autoSay !== false}" aria-label="Lecture à voix haute"><i></i></button></div>
    <div class="setrow"><span><b>Afficher IKI</b><small>Ajoute la rubrique IKI (cours de l'école) à la barre de navigation.</small></span><button class="switch" role="switch" id="showIki" aria-checked="${showIki()}" aria-label="Afficher IKI"><i></i></button></div>
    <div class="setrow"><span><b>${LT_SET_T}</b><small>${LT_SET_D}</small></span><button class="switch" role="switch" id="ltOn" aria-checked="${ltOn()}" aria-label="${LT_SET_T}"><i></i></button></div>
    <div id="sync" class="sync${syncState === "on" ? " on" : ""}"><i></i><span>${syncState === "on" ? "Progression synchronisée sur ton compte" : "Progression enregistrée sur cet appareil"}</span></div>
    <div class="setrow"><span><b>Sauvegarde</b><small>Enregistre ta progression dans un fichier (Fichiers, iCloud Drive…) ou recharge-la, par exemple sur un nouveau téléphone.</small></span></div>
    <div class="row2"><button class="secondary" id="bexport">Exporter</button><button class="secondary" id="bimport">Importer</button></div>
    <input type="file" id="bfile" accept=".json,application/json,text/plain" hidden>
    <details class="bcode"><summary>Ou par copier-coller</summary>
      <p class="note">Copie ce code et colle-le dans l'autre version de l'app, puis touche « Importer ce code ».</p>
      <textarea id="bcode" rows="3" spellcheck="false" autocapitalize="off" aria-label="Code de sauvegarde"></textarea>
      <div class="row2"><button class="secondary" id="bcopy">Copier le code</button><button class="secondary" id="bpaste">Importer ce code</button></div>
    </details>
    <p class="note" id="bmsg" role="status"></p>
    <button class="secondary" id="setclose">Fermer</button>
  </section>` : ""}`;
}
function header() { return topBar("Wortschatz Alltag"); }
function bottomNav() {
  return `<nav class="bnav" aria-label="Rubriques"><div class="bnav-in">${visibleSections().map(s => `<button data-sec="${s.id}" ${settings.sec === s.id ? 'aria-current="page"' : ""}><span class="bico">${icon(s.id)}</span><span>${s.label}</span></button>`).join("")}</div></nav>`;
}
function subNav(sec) {
  const s = SEC_BY_ID[sec], cur = curSub(sec);
  return `<div class="subnav" role="tablist">${s.subs.map(([k, l]) => `<button role="tab" data-sub="${sec}:${k}" aria-selected="${cur === k}">${l}</button>`).join("")}</div>`;
}

function step(n, done, attrs, title, sub, next) {
  return `<button class="pstep${done ? " done" : next ? " next" : ""}" ${attrs}><span class="pnum">${done ? "✓" : n}</span><span class="ptxt"><b>${title}</b><small>${sub}</small></span><span class="pgo" aria-hidden="true">${done ? "Refaire" : "→"}</span></button>`;
}
// ---- Quiz hub: one card per exercise, grouped by theme; the pages behind the cards keep their own view ----
function hubCard(attr, title, desc, extra = "") {
  return `<button class="hubcard" ${attr}><span><b>${title}</b><small>${desc}</small></span>${extra}</button>`;
}
function hubView() {
  const nErr = errCount();
  const errExtra = nErr ? `<i class="bbadge num">${Math.min(nErr, 99)}</i>` : `<small class="hubnote">Rien à revoir</small>`;
  return `<div class="dcols">
    <div class="dcol">
      <section class="section">
        <span class="label">Mots</span>
        <button class="cta" data-go="mots:quiz"><div><h2>Vocabulaire</h2><p>QCM, saisie, genre, pluriels</p></div><span class="go">Jouer →</span></button>
      </section>
      <section class="section">
        <span class="label">Verbes</span>
        ${hubCard('data-go="mots:verbes"', "Verbes", "Conjugaison, mots à préposition")}
      </section>
    </div>
    <div class="dcol">
      <section class="section">
        <span class="label">Grammaire</span>
        ${hubCard('data-vx="dek"', "Déclinaisons", "10 phrases au bon cas")}
        ${hubCard('data-vx="order"', "Ordre des mots", "Remets la phrase dans l'ordre")}
        ${hubCard('data-vx="cards"', "Phrases", "10 cartes à dire en allemand")}
      </section>
      <section class="section">
        <span class="label">Écoute et révision</span>
        ${canSpeak ? hubCard('data-go="mots:dict"', "Dictée", "Écris ce que tu entends") : ""}
        ${hubCard('data-go="mots:err"', "Mes erreurs", "Chaque erreur s'ajoute ici", errExtra)}
      </section>
    </div>
  </div>`;
}
function quizPage(sub, AW) {
  if (sub === "hub") return hubView();
  const body = sub === "verbes" ? verbQuizView() : sub === "dict" ? dictTab() : sub === "err" ? errView() : quizView(AW);
  return `<button class="backlink" data-go="mots:hub">← Quiz</button>${body}`;
}
// o (IKI page): its own mode setting, its lessons as themes, "iki" for all of them
function quizView(AW, o = null) {
  const key = o ? "ikimode" : "mode";
  const m = MODES[settings[key]] ? settings[key] : "qcm";
  const themes = o ? o.themes : activeThemes(), allId = o ? "iki" : "all";
  const n = m === "genre" ? 20 : 10;
  const mtr = words => m === "plural" ? plMeter(eligible("plural", words)) : meter(eligible(m, words));
  return `<div class="dcols"><div class="dcol${o ? "" : " qside"}">
    <section class="section">
      <div class="modes" role="group" aria-label="Type d'exercice">
        ${Object.entries(MODES).map(([k, v]) => `<button class="mode" data-${key}="${k}" aria-pressed="${m === k}"><b>${v.name}</b><span>${v.desc}</span></button>`).join("")}
      </div>
      ${m === "qcm" ? (() => {
        const dk = o ? "ikidir" : "dir", cur = settings[dk] || settings.dir;
        const dirs = [["mix", "Les deux sens"], ["de", "Allemand → français"], ["fr", "Français → allemand"]].concat(o ? [["dd", "Allemand → allemand"]] : []);
        return `<div class="dirs" role="group" aria-label="Sens">
        ${dirs.map(([k, l]) => `<button class="chip" data-${dk}="${k}" aria-pressed="${cur === k}">${l}</button>`).join("")}
      </div>${o && cur === "dd" ? `<p class="note">Le mot en allemand, et à choisir : son synonyme ou sa définition, en allemand aussi.</p>` : ""}`;
      })() : ""}
    </section>
    ${m === "genre" ? `<section class="stats" style="grid-template-columns:1fr 1fr" aria-label="Genre">
      <div class="stat"><b>${P.best || 0}</b><span>record de bonnes réponses d'affilée</span></div>
      <div class="stat"><b>${eligible("genre", AW).length}</b><span>noms à entraîner${o || settings.level === "all" ? "" : " (" + settings.level.replace("–", " → ") + ")"}</span></div>
    </section>` : ""}
    ${m === "plural" ? statsBox(eligible("plural", AW).map(w => ({ key: w.id })), "pl", "noms") : ""}
    ${o && o.side || ""}</div>
    <section class="section dcol">
      <span class="label">${o ? "Choisis un cours" : "Choisis un thème"} · ${n} questions</span>
      <div class="tlist">
        <button class="trow all" data-start="${m}" data-theme="${allId}"><span class="tname">${o ? "Tous les cours" : "Tous les thèmes"}</span><span class="tmeta">${mtr(AW)}</span></button>
        ${themes.map(t => {
          const k = eligible(m, t.words).length;
          if (!k) return "";
          return `<button class="trow" data-start="${m}" data-theme="${t.id}" title="${esc(t.desc)}"><span class="tname">${esc(t.name)}${t.level === "B2" ? '<span class="tag">B2</span>' : ""}</span><span class="tmeta">${mtr(t.words)}</span></button>`;
        }).join("")}
      </div>
      ${m === "plural"
        ? `<div class="legend"><span><b style="color:var(--good)">■</b> maîtrisé</span><span><b style="color:var(--signal)">■</b> en cours</span><span>Un pluriel est maîtrisé après 2 bonnes réponses d'affilée.</span></div>`
        : `<div class="legend"><span><b style="color:var(--good)">■</b> maîtrisé</span><span><b style="color:var(--signal)">■</b> en cours</span><span>Un mot est maîtrisé après 4 bonnes réponses espacées dans le temps.</span></div>`}
    </section></div>
    ${m === "genre" ? genreRules() : m === "plural" ? pluralRules() : ""}`;
}
// Quiz → Verbes: the two verb drills, picked like the vocabulary modes
const VMODES = {
  conj: { name: "Conjugaison", desc: "présent, prétérit, parfait" },
  prep: { name: "Prépositions", desc: "mot + préposition + cas" },
};
function verbQuizView() {
  const m = VMODES[settings.vmode] ? settings.vmode : "conj";
  return `
    <section class="section">
      <div class="modes two" role="group" aria-label="Type d'exercice">
        ${Object.entries(VMODES).map(([k, v]) => `<button class="mode" data-vmode="${k}" aria-pressed="${m === k}"><b>${v.name}</b><span>${v.desc}</span></button>`).join("")}
      </div>
    </section>
    ${m === "conj" ? conjTab() : qprepTab()}`;
}
// progress of plural forms: green = right twice in a row, yellow = already practised
function plMeter(words) {
  const st = P.pl || {}, n = words.length || 1;
  const m = words.filter(w => { const x = st[w.id]; return x && x[3] >= 2; }).length;
  const l = words.filter(w => st[w.id]).length - m;
  return `<span class="meter" aria-hidden="true"><i class="m2" style="width:${m / n * 100}%"></i><i class="m1" style="width:${l / n * 100}%"></i></span><span class="num">${m}/${words.length}</span>`;
}
function pluralRules() {
  return `
    <div class="tipcard"><b>Les tendances à connaître</b><ul>
      <li>Masculins : souvent <b>-e</b>, parfois avec umlaut. der Tisch → die Tische, der Stuhl → die Stühle.</li>
      <li>Féminins : presque toujours <b>-(e)n</b>. die Lampe → die Lampen, die Wohnung → die Wohnungen.</li>
      <li>Neutres courts : souvent <b>-er</b> avec umlaut. das Buch → die Bücher.</li>
      <li>Mots en -er, -el, -en : souvent <b>sans terminaison</b>. der Lehrer → die Lehrer.</li>
      <li>Mots étrangers et mots en voyelle : <b>-s</b>. das Auto → die Autos.</li>
    </ul></div>
    ${ficheLink(6, "Fiche :")}`;
}
function lexView() {
  return `
    ${mineForm()}
    <input class="search" id="q" type="search" placeholder="Chercher en allemand ou en français…" value="${esc(settings.q || "")}" autocomplete="off">
    <div class="legend"><span><b class="art-der">der</b> masculin</span><span><b class="art-die">die</b> féminin</span><span><b class="art-das">das</b> neutre</span><span><b class="art-pl">die</b> pluriel</span></div>
    <div id="lex"></div>`;
}

// ---- Grammaire: each page is a stack of collapsible parts (the first one is open until the person chooses) ----
const GRAM_PAGES = {
  fiches: [["fiches", "Fiches", () => gramTab()], ["dek", "Déclinaisons", () => dkTab()], ["order", "Ordre des mots", () => orderTab()]],
  verbes: [["irr", "Irréguliers", () => irrTab()], ["vprep", "Prépositions", () => vprepTab()]],
  listes: [["lex", "Lexique", () => lexView()], ["phr", "Situations", () => phrTab()]],
};
function partOpen(key) {
  if (settings.gopen[key] !== undefined) return !!settings.gopen[key];
  return Object.values(GRAM_PAGES).some(parts => parts[0][0] === key);
}
function gramPage(page) {
  return `<div class="gparts">${(GRAM_PAGES[page] || GRAM_PAGES.fiches).map(([key, title, view]) => {
    const open = partOpen(key);
    return `<section class="gpart"><button class="gpart-h" data-gopen="${key}" aria-expanded="${open}"><b>${title}</b><span aria-hidden="true">${open ? "▾" : "▸"}</span></button>${open ? `<div class="gbody section">${view()}</div>` : ""}</section>`;
  }).join("")}</div>`;
}
// the discreet way to start an exercise from a page that is for reading
function trainLink(kind) { return `<button class="trainlink" data-vx="${kind}">S'entraîner →</button>`; }
function renderHome() {
  if (!SEC_BY_ID[settings.sec] || (settings.sec === "iki" && !showIki())) settings.sec = "prog";
  const sec = settings.sec;
  const sub = curSub(sec);
  const AW = activeWords();
  let body = "";
  if (sec === "prog") body = programmeView();
  else if (sec === "iki") body = ikiView();
  else if (sec === "mots") body = quizPage(sub, AW);
  else if (sec === "gram") body = gramPage(sub);
  app.innerHTML = topBar(sec === "prog" ? "Wortschatz Alltag" : SEC_BY_ID[sec].label) + (SEC_BY_ID[sec].subs.length && !SEC_BY_ID[sec].nopills ? subNav(sec) : "") + body + bottomNav();
  if (sec === "gram") {
    // the long lists are filled in after the page is in place, only for the parts shown on this page
    const shown = (GRAM_PAGES[sub] || []).map(p => p[0]).filter(partOpen);
    if (shown.includes("lex")) renderLex();
    if (shown.includes("irr")) renderIrrList();
    if (shown.includes("vprep")) renderVpList();
  }
  const cur = app.querySelector('.subnav [aria-selected="true"]');
  if (cur) cur.scrollIntoView({ block: "nearest", inline: "nearest" });
}

function autoSwitch() { return ""; }
function autoSwitchOld() {
  return `<div class="switch-row"><span><b>Passage automatique</b><small>Après une bonne réponse, la question suivante s'affiche seule.</small></span>
    <button class="switch" role="switch" id="autoNext" aria-checked="${settings.autoNext}" aria-label="Passage automatique après une bonne réponse"><i></i></button></div>`;
}
function levelChips() { return ""; }
function levelChipsOld() {
  return `<div class="dirs" role="group" aria-label="Niveau">
      ${LEVELS.map(([k, l]) => `<button class="chip" data-level="${k}" aria-pressed="${settings.level === k}">${l}</button>`).join("")}
    </div>`;
}
const RULE_CARDS = [
  { art: "der", title: "Masculin", rows: [["jours, mois, saisons", "der Montag, der Mai"], ["-ling", "der Frühling"], ["-ismus", "der Tourismus"], ["-or", "der Motor (souvent)"]] },
  { art: "die", title: "Féminin", rows: [["-ung", "die Wohnung"], ["-heit, -keit", "die Freiheit"], ["-schaft", "die Gesellschaft"], ["-ion, -tät", "die Integration"], ["-ik, -ie, -ei", "die Musik, die Bäckerei"], ["-e (souvent)", "die Lampe"]] },
  { art: "das", title: "Neutre", rows: [["-chen, -lein", "das Mädchen"], ["-ment", "das Medikament"], ["-um", "das Museum"], ["-nis (souvent)", "das Ergebnis"], ["Ge- (souvent)", "das Gemüse"]] },
];
function genreRules() {
  return `
    <section class="section">
      <span class="label">Les terminaisons qui donnent le genre</span>
      <div class="rules">${RULE_CARDS.map(c => `
        <div class="rule art-border-${c.art}">
          <h3><span class="art art-${c.art}">${c.art}</span> · ${c.title}</h3>
          ${c.rows.map(([k, ex]) => `<div class="rule-row"><b>${k}</b><span lang="de">${ex}</span></div>`).join("")}
        </div>`).join("")}
      </div>
      <p class="note">Mot composé : c'est le dernier mot qui décide. das Haus + die Tür → <b class="art-die">die</b> Haustür.</p>
      ${ficheLink(1, "Fiche complète :")}
    </section>`;
}

// one word in a list: German, then its translation on its own line, then plural or verb forms
function wordRow(w) {
  return `
        <div class="row" data-notr>
          <div class="de">${deHTML(w)}${w.kind === "n" && w.pl ? ` <span class="plx">· die ${esc(w.pl)}</span>` : ""}</div>
          <div class="fr">${esc(w.fr)}</div>
          ${w.def ? `<div class="dfl" lang="de">≈ ${esc(w.def)}</div>` : ""}
          ${w.kind === "v" && w.forms ? `<div class="lexf" lang="de">${esc(w.forms)}</div>` : ""}
          ${w.ex ? `<div class="lex-ex"><div><div class="ex-de" lang="de">${esc(w.ex.de)}</div><div class="ex-fr" data-notr>${esc(w.ex.fr)}</div></div>${spkBtn(w.ex.de, true)}</div>` : ""}
          <div class="side"><span class="boxes" title="Niveau ${box(w.id)}/5">${[1, 2, 3, 4, 5].map(i => `<i class="${box(w.id) >= i ? "on" : ""}"></i>`).join("")}</span>${spkBtn(w.de, true)}${w.mine ? `<button class="del" data-delmine="${w.id}" aria-label="Supprimer ${esc(w.de)}" title="Supprimer">✕</button>` : ""}</div>
        </div>`;
}
function renderLex() {
  const qEl = document.getElementById("q");
  const q = norm(qEl ? qEl.value : "");
  const list = q ? WORDS.filter(w => !w.iki).filter(w => norm(w.de).includes(q) || norm(w.fr).includes(q) || norm(w.base || "").includes(q)) : null;
  const groups = list ? [{ name: `${list.length} résultat${list.length > 1 ? "s" : ""}`, words: list.slice(0, 80) }] : THEMES.filter(t => t.words.length).map(t => ({ name: t.level === "B2" ? t.name + " · B2" : t.name, words: t.words }));
  document.getElementById("lex").innerHTML = groups.map(g => `
    <section class="section" style="margin-bottom:18px">
      <span class="label">${esc(g.name)}</span>
      <div class="lex">${g.words.map(wordRow).join("") || `<div class="more">Aucun mot ne correspond.</div>`}
        ${list && list.length > 80 ? `<div class="more">Affine ta recherche pour voir les ${list.length - 80} autres.</div>` : ""}
      </div>
    </section>`).join("");
}

const KIND_LABEL = { dd: "Choisis le synonyme ou la définition", de2fr: "Traduis en français", fr2de: "Traduis en allemand", article: "Quel article ?", type: "Écris en allemand", card: "Tu connais ce mot ?" };

function renderQuiz() {
  const q = S.qs[S.i];
  const w = q.w;
  const steps = S.qs.map((_, k) => `<i class="${k < S.results.length ? (S.results[k].ok ? "ok" : "ko") : k === S.i ? "cur" : ""}"></i>`).join("");
  let promptHTML = "", answerHTML = "";
  if (q.type === "de2fr" || q.type === "dd" || q.type === "card") promptHTML = `<div class="prompt" lang="de">${deHTML(w)}</div>`;
  if (q.type === "fr2de" || q.type === "type") promptHTML = `<div class="prompt fr" data-notr>${esc(w.fr)}</div>`;
  if (q.type === "article") promptHTML = `<div class="prompt" lang="de">… ${esc(w.base)}</div><div class="hint" data-notr>${esc(w.fr)}</div>`;
  if (q.type === "type") promptHTML += `<div class="hint">${w.kind === "n" ? "Avec l'article : der, die ou das" : w.kind === "v" ? "À l'infinitif" : ""}</div>`;

  if (q.type === "de2fr" || q.type === "fr2de" || q.type === "dd") {
    answerHTML = `<div class="choices">${q.options.map((o, k) => {
      let cls = "";
      if (q.answered) { if (o === w) cls = "right"; else if (o === q.picked) cls = "wrong"; }
      return `<button class="choice ${cls}" data-pick="${k}" ${q.answered ? "disabled" : ""}><kbd>${k + 1}</kbd><span data-notr>${q.type === "de2fr" ? esc(o.fr) : q.type === "dd" ? `<span lang="de">${esc(o.def)}</span>` : deHTML(o)}</span></button>`;
    }).join("")}</div>`;
  } else if (q.type === "article") {
    answerHTML = `<div class="articles">${["der", "die", "das"].map((a, k) => {
      let cls = "";
      if (q.answered) { if (a === w.art) cls = "right"; else if (a === q.picked) cls = "wrong"; }
      return `<button class="choice a-${a} ${cls}" data-art="${a}" ${q.answered ? "disabled" : ""}>${a}</button>`;
    }).join("")}</div>`;
  } else if (q.type === "type") {
    answerHTML = `<form class="typebox" id="tf" autocomplete="off">
      <input id="ti" type="text" lang="de" autocapitalize="off" autocorrect="off" spellcheck="false" placeholder="${w.kind === "n" ? "der / die / das …" : "Ta réponse"}" value="${esc(q.typed || "")}" ${q.answered ? `disabled class="${q.ok ? "right" : "wrong"}"` : ""}>
      ${q.answered ? "" : `<div class="umlauts">${["ä", "ö", "ü", "ß"].map(c => `<button type="button" data-ins="${c}">${c}</button>`).join("")}</div>
      <div class="row2"><button type="button" class="secondary" id="skip">Je ne sais pas</button><button class="primary" type="submit">Valider</button></div>`}
    </form>`;
  } else if (q.type === "card") {
    if (!q.flipped) answerHTML = `<button class="primary" id="flip">Voir la traduction</button>`;
    else if (!q.answered) answerHTML = `<div class="row2"><button class="secondary" data-self="0">À revoir</button><button class="primary" data-self="1">Je savais</button></div>`;
  }

  const back = q.type === "card" && q.flipped ? `<div class="card-back"><div class="fr" data-notr>${esc(w.fr)}</div>${details(w) ? `<div class="hint">${details(w)}</div>` : ""}${exampleHTML(w)}</div>` : "";
  const themeName = THEME_BY_ID[w.theme].name;

  app.innerHTML = `
    <div class="qtop"><button class="x" id="quit" aria-label="Quitter">✕ Quitter</button><div class="steps" aria-hidden="true">${steps}</div><span class="qcount num">${S.i + 1}/${S.qs.length}</span></div>
    <div class="qcard">
      <div class="qkind"><span class="label">${KIND_LABEL[q.type]}</span><span class="theme-name">${S.mode === "genre" ? `Série <b class="num">${S.streak}</b> · record ${Math.max(P.best || 0, S.best)}` : esc(themeName)}</span></div>
      <div style="display:flex;gap:12px;align-items:center;width:100%"><div style="flex:1;min-width:0">${promptHTML}</div>${(q.type === "de2fr" || q.type === "dd" || q.type === "card") ? spkBtn(w.de) : ""}</div>
      ${back}
    </div>
    ${answerHTML}
    ${q.answered ? feedback(q) : ""}`;
  if (q.type === "type" && !q.answered) { const ti = document.getElementById("ti"); ti.focus({ preventScroll: true }); }
  if (q.answered) { const c = document.getElementById("next"); c && c.focus({ preventScroll: true }); }
}

function feedback(q) {
  const w = q.w;
  const ok = q.ok;
  const title = ok ? (q.near ? "Presque parfait" : ["Richtig!", "Genau!", "Sehr gut!", "Super!"][Math.floor(Math.random() * 4)]) : (q.type === "card" ? "On le revoit bientôt" : "Pas tout à fait");
  const note = q.why ? `<div class="sub">${esc(q.why)}</div>` : q.near ? `<div class="sub">Orthographe exacte ci-dessous.</div>` : "";
  return `<div class="sheet ${ok ? "good" : "bad"}" role="status"><div class="sheet-in">
    <div class="verdict"><h3>${title}</h3></div>
    <div class="answer"><div><div class="de">${deHTML(w)}</div><div class="trl" data-notr>${esc(w.fr)}</div>${q.type === "dd" ? `<div class="dfl" lang="de" data-notr>≈ ${esc(w.def)}</div>` : ""}${details(w) ? `<div class="sub">${details(w)}</div>` : ""}${note}</div>${spkBtn(w.de)}</div>
    ${q.type === "article" && genderRule(w) ? `<div class="sub rule-hint">${genderRule(w)}</div>` : ""}
    ${exampleHTML(w)}
    ${(() => { const fs = fichesFor(w, q); return fs.length ? `<div class="fiche-links"><span class="label">Revoir la règle</span>${fs.map(id => ficheLink(id)).join("")}</div>` : ""; })()}
    <button class="primary" id="next">${S.i + 1 < S.qs.length ? "Continuer" : "Voir le résultat"}</button>
  </div></div>`;
}

function answer(ok, extra = {}) {
  const q = S.qs[S.i];
  if (q.answered) return;
  Object.assign(q, extra, { answered: true, ok });
  S.results.push({ w: q.w, ok });
  if (S.mode === "genre") {
    S.streak = ok ? S.streak + 1 : 0;
    S.best = Math.max(S.best, S.streak);
    if (S.best > (P.best || 0)) P.best = S.best;
  }
  noteErr(q.type === "article" ? "art" : "w", q.w.id, ok, q.type);
  grade(q.w, ok);
  renderQuiz();
  if (settings.autoNext && ok && !q.near) { const at = S.i, sess = S; setTimeout(() => { if (view === "quiz" && S === sess && S.i === at && ov.hidden) next(); }, 750); }
  if (settings.autoSay !== false && canSpeak && q.type !== "card") speak(q.w.de);
}
function next() {
  if (S.i + 1 < S.qs.length) { S.i++; renderQuiz(); window.scrollTo(0, 0); }
  else { view = "done"; render(); window.scrollTo(0, 0); }
}

function renderDone() {
  const ok = S.results.filter(r => r.ok).length, n = S.results.length;
  const missed = S.results.filter(r => !r.ok).map(r => r.w);
  const msg = ok === n ? "Sans faute. Ausgezeichnet !" : ok / n >= .7 ? "Bonne série. Les mots ratés reviendront demain." : "Les mots ratés reviendront dans ta prochaine révision.";
  app.innerHTML = header() + `
    <section class="section">
      <span class="label">${S.err ? "Mes erreurs · " + ERR_CATS.find(c => c[0] === S.err)[1] : S.mode === "review" ? "Révision du jour" : (S.mode === "genre" ? "Genre" : MODES[S.mode].name) + " · " + (S.themeId === "all" ? "Tous les thèmes" : THEME_BY_ID[S.themeId].name)}</span>
      <div class="score"><b>${ok}/${n}</b><span>${msg}</span></div>
      ${S.mode === "genre" ? `<p class="note">Meilleure série de la partie : <b>${S.best}</b> · record : <b>${P.best || 0}</b></p>` : ""}
    </section>
    ${missed.length ? `<section class="section"><span class="label">À retenir</span><div class="missed">${missed.map(w => `<div class="row" data-notr><div><div><b>${deHTML(w)}</b></div><div class="fr">${esc(w.fr)}${details(w) ? " · " + details(w) : ""}</div></div>${spkBtn(w.de, true)}</div>`).join("")}</div></section>` : ""}
    <div class="row2"><button class="secondary" id="home">Accueil</button>${S.err ? `<button class="primary" data-go="mots:err">Mes erreurs</button>` : `<button class="primary" id="again">Encore une série</button>`}</div>`;
}

/* ---------- grammar sheets ---------- */
const FICHES = [];
const FICHE_BY_ID = {};
let fichesLang = null;
function loadFiches(lang) {
  const src = GRAMRAW_I18N[lang] || GRAMRAW;
  lang = GRAMRAW_I18N[lang] ? lang : "fr";
  if (lang === fichesLang) return;
  fichesLang = lang;
  FICHES.length = 0;
  let f = null, table = null;
  const endTable = () => { table = null; };
  for (const raw of src.split("\n")) {
    const line = raw.replace(/\s+$/, "");
    if (line[0] === "@") {
      const [id, title, level] = line.slice(1).split("|");
      f = { id: +id, title, level, blocks: [], ex: null };
      FICHES.push(f); endTable(); continue;
    }
    if (!f) continue;
    if (!line.trim()) { endTable(); continue; }
    if (table) { table.rows.push(line.split("|").map(c => c.trim())); continue; }
    if (line === "#table") { table = { type: "table", rows: [] }; f.blocks.push(table); continue; }
    if (line.startsWith("#h ")) { f.blocks.push({ type: "h", text: line.slice(3) }); continue; }
    if (line.startsWith("#ex ")) { f.ex = { title: line.slice(4), items: [] }; continue; }
    if (f.ex) {
      const k = line.indexOf(" = ");
      if (k > 0) f.ex.items.push({ q: line.slice(0, k), answers: line.slice(k + 3).split(" || ").map(s => s.trim()) });
      continue;
    }
    const last = f.blocks[f.blocks.length - 1];
    if (line.startsWith("- ")) {
      if (last && last.type === "ul") last.items.push(line.slice(2)); else f.blocks.push({ type: "ul", items: [line.slice(2)] });
      continue;
    }
    if (line.startsWith("> ")) {
      const [de, fr] = line.slice(2).split(" = ");
      if (last && last.type === "say") last.items.push({ de, fr }); else f.blocks.push({ type: "say", items: [{ de, fr }] });
      continue;
    }
    f.blocks.push({ type: "p", text: line });
  }
  for (const k in FICHE_BY_ID) delete FICHE_BY_ID[k];
  for (const x of FICHES) FICHE_BY_ID[x.id] = x;
}
loadFiches(uiLang());
const FICHE_GROUPS = [["A1 · les bases", 1, 10], ["A2 · raconter, demander", 11, 20], ["B1 · argumenter, lire le courrier", 21, 25], ["Pratique", 26, 27], ["B2 · nuancer, écrire, convaincre", 28, 38]];
const B2_FIRST = 28;
function ficheInLevel(id) { return settings.level === "all" || (settings.level === "B2" ? id >= B2_FIRST : id < B2_FIRST); }
function activeFiches() { return FICHES.filter(f => ficheInLevel(f.id)); }

function inline(s) { return esc(s).replace(/\*\*(.+?)\*\*/g, "<b>$1</b>"); }
function ficheState(id) {
  const g = (P.g || {})[id];
  if (!g) return { key: "new", label: "À découvrir" };
  const ratio = g[0] / g[1];
  if (ratio < .8) return { key: "weak", label: `À retravailler · ${g[0]}/${g[1]}` };
  if (today() - g[2] >= 21) return { key: "old", label: "À relire" };
  return { key: "ok", label: `Acquise · ${g[0]}/${g[1]}` };
}
function ficheDuJour() {
  const list = activeFiches();
  const firstOpen = list.find(f => ficheState(f.id).key !== "ok");
  return firstOpen || list.slice().sort((a, b) => (P.g[a.id] || [0, 0, 0])[2] - (P.g[b.id] || [0, 0, 0])[2])[0];
}
function ficheLink(id, prefix) {
  const f = FICHE_BY_ID[id];
  return `<button class="fiche-link" data-fiche="${id}"><span class="fnum">${id}</span><span>${prefix ? `<span>${prefix}</span> ` : ""}<span data-notr>${esc(f.title)}</span></span><span aria-hidden="true">→</span></button>`;
}

/* which sheet explains this word or question */
const MODALS = ["können", "müssen", "wollen", "dürfen", "sollen", "mögen"];
const SUBORD = ["weil", "dass", "wenn", "obwohl", "während", "sobald", "falls", "deshalb", "trotzdem", "dennoch", "außerdem", "aber", "oder", "und", "also", "stattdessen", "infolgedessen"];
const GENITIV = ["trotz", "aufgrund", "anstatt"];
const DOUBLE_CONJ = /^(einerseits|zwar|je|sowohl|weder|entweder|nicht nur) … /;
const SUPPOSITION = ["angeblich", "vermutlich", "anscheinend"];
const WEAK_NOUN = w => w.art === "der" && w.base !== "See" && (w.pl === w.base + "n" || w.pl === w.base + "en");
function fichesFor(w, q) {
  const out = [];
  const add = id => { if (!out.includes(id)) out.push(id); };
  if (w.kind === "n") {
    if (q && q.type === "article") add(1);
    if (WEAK_NOUN(w)) add(37);
    if (w.pl && q && (q.type === "article" || !q.ok)) add(6);
  }
  if (w.kind === "v") {
    const words = w.de.replace(/^sich /, "").split(" ").filter(x => /(en|ern|eln)$/.test(x) && x[0] === x[0].toLowerCase());
    const inf = words.pop() || w.de;
    const [pres, , perf] = w.forms.split(" · ");
    const presTokens = pres.split(" ");
    const particle = presTokens.length > 1 ? presTokens[presTokens.length - 1] : "";
    const separable = particle && particle !== "sich" && inf.startsWith(particle);
    if (inf === "sein" || inf === "haben") add(2);
    if (MODALS.includes(inf)) add(11);
    if (w.de.startsWith("sich ")) add(16);
    if (w.theme === "b2verbes" || w.de === "leiden an") add(21);
    if (separable) add(12);
    const stem = (separable ? inf.slice(particle.length) : inf).replace(/e?n$/, "");
    if (!MODALS.includes(inf) && inf !== "sein" && inf !== "haben" && !presTokens[0].startsWith(stem.slice(0, Math.max(2, stem.length - 1)))) add(3);
    if (perf && perf.startsWith("ist ")) add(14);
    if (out.length < 2) add(14);
  }
  if (w.kind === "w" || w.kind === "p") {
    const base = w.de.replace(/[?!.]/g, "");
    if (w.theme === "nombres" || /^(Wie spät|Es ist halb)/.test(w.de)) add(26);
    if (w.theme === "outils" && /\?$/.test(w.de)) add(27);
    if (DOUBLE_CONJ.test(base)) add(31);
    if (["falls", "sobald"].includes(base)) add(35);
    if (SUBORD.includes(base)) add(17);
    if (GENITIV.includes(base)) { add(25); add(34); }
    if (SUPPOSITION.includes(base)) add(36);
    if ((w.theme === "adjectifs" || w.theme === "b2nuances") && w.kind === "w") { add(18); add(19); }
    if (/^(nein|doch)$/.test(base) || /^(nie|nichts|niemand)$/.test(base)) add(5);
    if (/hätte|Könnten|Würden/.test(w.de)) add(20);
  }
  return out.slice(0, 2);
}

function gramTab() {
  const AF = activeFiches();
  const done = AF.filter(f => ficheState(f.id).key === "ok").length;
  const fd = ficheDuJour();
  const st = ficheState(fd.id);
  return `
    <button class="cta" data-fiche="${fd.id}">
      <div><h2>Fiche du jour</h2><p>Fiche ${fd.id} · <span data-notr>${esc(fd.title)}</span> (${st.key === "new" ? "nouvelle" : st.label.toLowerCase()})</p></div><span class="go">Ouvrir →</span>
    </button>
    ${levelChips()}
    <section class="stats" style="grid-template-columns:1fr" aria-label="Grammaire">
      <div class="goal" style="border-top:0"><span>Fiches acquises</span><div class="bar"><i style="width:${done / AF.length * 100}%;background:var(--good)"></i></div><span class="num">${done}/${AF.length}</span></div>
    </section>
    <p class="note">Chaque fiche se termine par un exercice corrigé automatiquement. Une fiche est acquise à partir de 80 % de bonnes réponses ; elle te sera reproposée à relire trois semaines plus tard.</p>
    <div class="dgrid">${FICHE_GROUPS.filter(([, a]) => ficheInLevel(a)).map(([name, a, b]) => `
      <section class="section">
        <span class="label">${name}</span>
        <div class="flist">${FICHES.filter(f => f.id >= a && f.id <= b).map(f => {
          const s = ficheState(f.id);
          return `<button class="frow" data-fiche="${f.id}"><span class="fnum">${f.id}</span><span class="ftitle"><span data-notr>${esc(f.title)}</span><small>${esc(f.level)}</small></span><span class="pill pill-${s.key}">${s.label}</span></button>`;
        }).join("")}</div>
      </section>`).join("")}</div>`;
}

/* ---------- sheet overlay ---------- */
const ov = document.getElementById("ov");
let OF = null; // open sheet state
function openFiche(id) {
  OF = { id, answers: {}, checked: false };
  renderFiche();
  ov.hidden = false;
  document.documentElement.style.overflow = "hidden";
  ov.scrollTop = 0;
  const b = ov.querySelector(".ov-close"); b && b.focus({ preventScroll: true });
}
function closeFiche() {
  ov.hidden = true;
  document.documentElement.style.overflow = "";
  OF = null;
  if (view === "home") render();
}
function blockHTML(b) {
  if (b.type === "p") return `<p>${inline(b.text)}</p>`;
  if (b.type === "h") return `<h3 class="fh">${inline(b.text)}</h3>`;
  if (b.type === "ul") return `<ul>${b.items.map(i => `<li>${inline(i)}</li>`).join("")}</ul>`;
  if (b.type === "say") return `<div class="say">${b.items.map(i => `<div class="say-row"><div><div class="ex-de" lang="de">${esc(i.de)}</div>${i.fr ? `<div class="ex-fr" data-notr>${esc(i.fr)}</div>` : ""}</div>${spkBtn(i.de, true)}</div>`).join("")}</div>`;
  if (b.type === "table") {
    const [head, ...rows] = b.rows;
    return `<div class="tbl"><table><thead><tr>${head.map(c => `<th>${inline(c)}</th>`).join("")}</tr></thead><tbody>${rows.map(r => `<tr>${r.map((c, k) => k === 0 ? `<th scope="row">${inline(c)}</th>` : `<td>${inline(c)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
  }
  return "";
}
function checkFicheAnswer(item, value) {
  const got = norm(value).replace(/[\/–-]/g, " ").replace(/\s+/g, " ").trim();
  if (!got) return "empty";
  for (const a of item.answers) {
    const t = norm(a).replace(/[\/–-]/g, " ").replace(/\s+/g, " ").trim();
    if (t === got) return "ok";
    if (t.length >= 12 && lev(t, got) <= 2) return "near";
  }
  return "ko";
}
function renderFiche() {
  const f = FICHE_BY_ID[OF.id];
  const prev = FICHE_BY_ID[OF.id - 1], nextF = FICHE_BY_ID[OF.id + 1];
  const res = OF.checked ? f.ex.items.map((it, i) => checkFicheAnswer(it, OF.answers[i] || "")) : null;
  const score = res ? res.filter(r => r === "ok" || r === "near").length : 0;
  ov.innerHTML = `
  <div class="ov-in">
    <div class="ov-top"><button class="x ov-close">✕ Fermer</button><span class="label">Fiche ${f.id} · <span data-notr>${esc(f.level)}</span></span></div>
    <h2 class="ftitle-big" data-notr>${esc(f.title)}</h2>
    <div class="fiche" data-notr>${f.blocks.map(blockHTML).join("")}</div>
    ${f.ex ? `
    <section class="exo" aria-label="Exercice">
      <span class="label">Exercice</span>
      <h3 class="fh" style="margin-top:0" data-notr>${esc(f.ex.title)}</h3>
      ${f.ex.items.map((it, i) => {
        const r = res && res[i];
        return `<div class="exo-item ${r ? "r-" + r : ""}">
          <label for="fx${i}" data-notr><span class="fnum sm">${i + 1}</span>${esc(it.q)}</label>
          <input id="fx${i}" data-fx="${i}" type="text" lang="de" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" value="${esc(OF.answers[i] || "")}" ${OF.checked ? "disabled" : ""}>
          ${r ? `<div class="exo-fb">${r === "ok" ? "Juste" : r === "near" ? "Presque : " + `<span lang="de">${esc(it.answers[0])}</span>` : "Réponse : " + `<span lang="de">${esc(it.answers[0])}</span>`}</div>` : ""}
        </div>`;
      }).join("")}
      ${OF.checked ? `<div class="score"><b>${score}/${f.ex.items.length}</b><span>${score / f.ex.items.length >= .8 ? "Fiche acquise. Elle reviendra à relire dans trois semaines." : "Relis la règle et réessaie : il faut 80 % pour acquérir la fiche."}</span></div>
        <button class="secondary" id="fx-retry">Recommencer l'exercice</button>`
      : `<div class="umlauts">${["ä", "ö", "ü", "ß", "Ä", "Ö", "Ü"].map(c => `<button type="button" data-fins="${c}">${c}</button>`).join("")}</div>
        <button class="primary" id="fx-check">Vérifier mes réponses</button>`}
    </section>` : ""}
    <div class="row2">${prev ? `<button class="secondary" data-fiche="${prev.id}">← Fiche ${prev.id}</button>` : "<span></span>"}${nextF ? `<button class="secondary" data-fiche="${nextF.id}">Fiche ${nextF.id} →</button>` : "<span></span>"}</div>
  </div>`;
}
let lastFx = null;
ov.addEventListener("focusin", e => { if (e.target.dataset.fx !== undefined) lastFx = e.target; });
ov.addEventListener("input", e => { if (e.target.dataset.fx !== undefined && OF) OF.answers[e.target.dataset.fx] = e.target.value; });
ov.addEventListener("keydown", e => {
  if (e.key === "Escape") { closeFiche(); return; }
  if (e.key === "Enter" && e.target.dataset.fx !== undefined) {
    e.preventDefault();
    const nextIn = ov.querySelector(`[data-fx="${+e.target.dataset.fx + 1}"]`);
    if (nextIn) nextIn.focus(); else ov.querySelector("#fx-check")?.click();
  }
});
ov.addEventListener("click", e => {
  const t = e.target.closest("button");
  if (!t) return;
  if (t.dataset.say) { speak(t.dataset.say); return; }
  if (t.classList.contains("ov-close")) { closeFiche(); return; }
  if (t.dataset.fiche) { openFiche(+t.dataset.fiche); return; }
  if (t.dataset.fins) {
    const ti = lastFx || ov.querySelector("[data-fx]");
    if (!ti || ti.disabled) return;
    const s = ti.selectionStart ?? ti.value.length, en = ti.selectionEnd ?? s;
    ti.value = ti.value.slice(0, s) + t.dataset.fins + ti.value.slice(en);
    OF.answers[ti.dataset.fx] = ti.value;
    ti.focus(); ti.setSelectionRange(s + 1, s + 1);
    return;
  }
  if (t.id === "fx-check") {
    const f = FICHE_BY_ID[OF.id];
    OF.checked = true;
    const score = f.ex.items.filter((it, i) => { const ok = ["ok", "near"].includes(checkFicheAnswer(it, OF.answers[i] || "")); noteErr("fx", f.id + "." + i, ok, 0); return ok; }).length;
    P.g = P.g || {};
    const old = P.g[OF.id];
    P.g[OF.id] = [old && old[2] === today() ? Math.max(old[0], score) : score, f.ex.items.length, today()];
    persist();
    const y = ov.scrollTop;
    renderFiche();
    ov.scrollTop = y;
    return;
  }
  if (t.id === "fx-retry") { OF.answers = {}; OF.checked = false; const y = ov.scrollTop; renderFiche(); ov.scrollTop = y; ov.querySelector("[data-fx]")?.focus({ preventScroll: true }); return; }
});

/* ---------- drills: verbs, prepositions, cases, plurals, phrases, own words ---------- */
const IRRRAW = `# Verbes irréguliers. Format : infinitif|présent|prétérit|parfait|traduction|niveau
# présent = "du,er" (les autres personnes sont régulières) ou les 6 formes "ich,du,er,wir,ihr,sie"
# prétérit = forme ich/er (les autres personnes s'en déduisent) ; parfait = forme er (hat/ist + participe)
sein|bin,bist,ist,sind,seid,sind|war|ist gewesen|être|A1
haben|habe,hast,hat,haben,habt,haben|hatte|hat gehabt|avoir|A1
werden|werde,wirst,wird,werden,werdet,werden|wurde|ist geworden|devenir|A1
wissen|weiß,weißt,weiß,wissen,wisst,wissen|wusste|hat gewusst|savoir|A1
können|kann,kannst,kann,können,könnt,können|konnte|hat gekonnt|pouvoir|A1
müssen|muss,musst,muss,müssen,müsst,müssen|musste|hat gemusst|devoir (obligation)|A1
wollen|will,willst,will,wollen,wollt,wollen|wollte|hat gewollt|vouloir|A1
dürfen|darf,darfst,darf,dürfen,dürft,dürfen|durfte|hat gedurft|avoir le droit de|A1
sollen|soll,sollst,soll,sollen,sollt,sollen|sollte|hat gesollt|devoir (on me l'a demandé)|A1
mögen|mag,magst,mag,mögen,mögt,mögen|mochte|hat gemocht|aimer bien|A1
gehen|gehst,geht|ging|ist gegangen|aller (à pied)|A1
kommen|kommst,kommt|kam|ist gekommen|venir|A1
fahren|fährst,fährt|fuhr|ist gefahren|aller (en véhicule), conduire|A1
laufen|läufst,läuft|lief|ist gelaufen|courir, marcher|A1
fliegen|fliegst,fliegt|flog|ist geflogen|prendre l'avion, voler|A1
bleiben|bleibst,bleibt|blieb|ist geblieben|rester|A1
schwimmen|schwimmst,schwimmt|schwamm|ist geschwommen|nager|A1
stehen|stehst,steht|stand|hat gestanden|être debout|A1
sitzen|sitzt,sitzt|saß|hat gesessen|être assis|A1
liegen|liegst,liegt|lag|hat gelegen|être couché, se trouver|A1
essen|isst,isst|aß|hat gegessen|manger|A1
trinken|trinkst,trinkt|trank|hat getrunken|boire|A1
sehen|siehst,sieht|sah|hat gesehen|voir|A1
lesen|liest,liest|las|hat gelesen|lire|A1
sprechen|sprichst,spricht|sprach|hat gesprochen|parler|A1
nehmen|nimmst,nimmt|nahm|hat genommen|prendre|A1
geben|gibst,gibt|gab|hat gegeben|donner|A1
helfen|hilfst,hilft|half|hat geholfen|aider|A1
treffen|triffst,trifft|traf|hat getroffen|rencontrer|A1
schlafen|schläfst,schläft|schlief|hat geschlafen|dormir|A1
finden|findest,findet|fand|hat gefunden|trouver|A1
heißen|heißt,heißt|hieß|hat geheißen|s'appeler|A1
schreiben|schreibst,schreibt|schrieb|hat geschrieben|écrire|A1
beginnen|beginnst,beginnt|begann|hat begonnen|commencer|A1
bringen|bringst,bringt|brachte|hat gebracht|apporter|A1
kennen|kennst,kennt|kannte|hat gekannt|connaître|A1
gefallen|gefällst,gefällt|gefiel|hat gefallen|plaire|A1
vergessen|vergisst,vergisst|vergaß|hat vergessen|oublier|A1
verstehen|verstehst,versteht|verstand|hat verstanden|comprendre|A1
bekommen|bekommst,bekommt|bekam|hat bekommen|recevoir, obtenir|A1
tun|tust,tut|tat|hat getan|faire|A2
denken|denkst,denkt|dachte|hat gedacht|penser|A2
nennen|nennst,nennt|nannte|hat genannt|nommer|A2
rennen|rennst,rennt|rannte|ist gerannt|courir (vite)|A2
waschen|wäschst,wäscht|wusch|hat gewaschen|laver|A2
tragen|trägst,trägt|trug|hat getragen|porter|A2
halten|hältst,hält|hielt|hat gehalten|tenir, s'arrêter|A2
lassen|lässt,lässt|ließ|hat gelassen|laisser, faire faire|A2
fallen|fällst,fällt|fiel|ist gefallen|tomber|A2
rufen|rufst,ruft|rief|hat gerufen|appeler|A2
steigen|steigst,steigt|stieg|ist gestiegen|monter, augmenter|A2
scheinen|scheinst,scheint|schien|hat geschienen|briller ; sembler|A2
treiben|treibst,treibt|trieb|hat getrieben|pratiquer (Sport treiben)|A2
schneiden|schneidest,schneidet|schnitt|hat geschnitten|couper|A2
gewinnen|gewinnst,gewinnt|gewann|hat gewonnen|gagner|A2
singen|singst,singt|sang|hat gesungen|chanter|A2
ziehen|ziehst,zieht|zog|hat gezogen|tirer|A2
verlieren|verlierst,verliert|verlor|hat verloren|perdre|A2
schließen|schließt,schließt|schloss|hat geschlossen|fermer|A2
bitten|bittest,bittet|bat|hat gebeten|demander, prier|A2
empfehlen|empfiehlst,empfiehlt|empfahl|hat empfohlen|recommander|A2
sterben|stirbst,stirbt|starb|ist gestorben|mourir|A2
werfen|wirfst,wirft|warf|hat geworfen|jeter|A2
unterschreiben|unterschreibst,unterschreibt|unterschrieb|hat unterschrieben|signer|A2
fangen|fängst,fängt|fing|hat gefangen|attraper|B1
raten|rätst,rät|riet|hat geraten|conseiller, deviner|B1
schlagen|schlägst,schlägt|schlug|hat geschlagen|frapper, battre|B1
laden|lädst,lädt|lud|hat geladen|charger|B1
wachsen|wächst,wächst|wuchs|ist gewachsen|grandir, pousser|B1
braten|brätst,brät|briet|hat gebraten|faire rôtir, faire cuire|B1
schreien|schreist,schreit|schrie|hat geschrien|crier|B1
leihen|leihst,leiht|lieh|hat geliehen|prêter|B1
leiden|leidest,leidet|litt|hat gelitten|souffrir|B1
streiten|streitest,streitet|stritt|hat gestritten|se disputer|B1
reiten|reitest,reitet|ritt|ist geritten|monter à cheval|B1
beißen|beißt,beißt|biss|hat gebissen|mordre|B1
vergleichen|vergleichst,vergleicht|verglich|hat verglichen|comparer|B1
entscheiden|entscheidest,entscheidet|entschied|hat entschieden|décider|B1
springen|springst,springt|sprang|ist gesprungen|sauter|B1
verschwinden|verschwindest,verschwindet|verschwand|ist verschwunden|disparaître|B1
klingen|klingst,klingt|klang|hat geklungen|sonner, avoir l'air|B1
frieren|frierst,friert|fror|hat gefroren|avoir froid, geler|B1
fließen|fließt,fließt|floss|ist geflossen|couler|B1
genießen|genießt,genießt|genoss|hat genossen|savourer, profiter de|B1
gießen|gießt,gießt|goss|hat gegossen|arroser, verser|B1
bieten|bietest,bietet|bot|hat geboten|offrir, proposer|B1
verbieten|verbietest,verbietet|verbot|hat verboten|interdire|B1
riechen|riechst,riecht|roch|hat gerochen|sentir (une odeur)|B1
lügen|lügst,lügt|log|hat gelogen|mentir|B1
wiegen|wiegst,wiegt|wog|hat gewogen|peser|B1
messen|misst,misst|maß|hat gemessen|mesurer|B1
stehlen|stiehlst,stiehlt|stahl|hat gestohlen|voler (dérober)|B1
brechen|brichst,bricht|brach|hat gebrochen|casser|B1
gelten|giltst,gilt|galt|hat gegolten|être valable|B1
erhalten|erhältst,erhält|erhielt|hat erhalten|recevoir (courrier officiel)|B1
verlassen|verlässt,verlässt|verließ|hat verlassen|quitter|B1
hängen|hängst,hängt|hing|hat gehangen|être accroché|B1
brennen|brennst,brennt|brannte|hat gebrannt|brûler|B1
stoßen|stößt,stößt|stieß|hat gestoßen|pousser, heurter|B2
schweigen|schweigst,schweigt|schwieg|hat geschwiegen|se taire|B2
greifen|greifst,greift|griff|hat gegriffen|saisir|B2
reißen|reißt,reißt|riss|hat gerissen|déchirer|B2
beweisen|beweist,beweist|bewies|hat bewiesen|prouver|B2
sinken|sinkst,sinkt|sank|ist gesunken|baisser, couler|B2
zwingen|zwingst,zwingt|zwang|hat gezwungen|forcer, obliger|B2
schieben|schiebst,schiebt|schob|hat geschoben|pousser (un objet)|B2
heben|hebst,hebt|hob|hat gehoben|soulever|B2
treten|trittst,tritt|trat|ist getreten|marcher sur, entrer|B2
befehlen|befiehlst,befiehlt|befahl|hat befohlen|ordonner|B2
# Verbes séparables : la particule est séparée par « · » ; le présent et le prétérit sont donnés pour le verbe de base, le parfait en entier.
auf·stehen|stehst,steht|stand|ist aufgestanden|se lever|A1
an·fangen|fängst,fängt|fing|hat angefangen|commencer|A1
an·rufen|rufst,ruft|rief|hat angerufen|appeler (au téléphone)|A1
ein·kaufen|kaufst,kauft|kaufte|hat eingekauft|faire les courses|A1
ein·steigen|steigst,steigt|stieg|ist eingestiegen|monter (dans un véhicule)|A1
aus·steigen|steigst,steigt|stieg|ist ausgestiegen|descendre (d'un véhicule)|A1
um·steigen|steigst,steigt|stieg|ist umgestiegen|changer (de train, de bus)|A1
an·kommen|kommst,kommt|kam|ist angekommen|arriver|A1
mit·kommen|kommst,kommt|kam|ist mitgekommen|venir avec|A1
fern·sehen|siehst,sieht|sah|hat ferngesehen|regarder la télévision|A1
ab·holen|holst,holt|holte|hat abgeholt|aller chercher|A1
auf·machen|machst,macht|machte|hat aufgemacht|ouvrir|A1
zu·machen|machst,macht|machte|hat zugemacht|fermer|A1
aus·gehen|gehst,geht|ging|ist ausgegangen|sortir|A2
ab·fahren|fährst,fährt|fuhr|ist abgefahren|partir (train, bus)|A2
zurück·kommen|kommst,kommt|kam|ist zurückgekommen|revenir|A2
mit·nehmen|nimmst,nimmt|nahm|hat mitgenommen|emporter, emmener|A2
auf·hören|hörst,hört|hörte|hat aufgehört|arrêter|A2
auf·räumen|räumst,räumt|räumte|hat aufgeräumt|ranger|A2
an·ziehen|ziehst,zieht|zog|hat angezogen|mettre (un vêtement)|A2
um·ziehen|ziehst,zieht|zog|ist umgezogen|déménager|A2
ein·laden|lädst,lädt|lud|hat eingeladen|inviter|A2
aus·füllen|füllst,füllt|füllte|hat ausgefüllt|remplir (un formulaire)|A2
zu·hören|hörst,hört|hörte|hat zugehört|écouter|A2
aus·sehen|siehst,sieht|sah|hat ausgesehen|avoir l'air|A2
kennen·lernen|lernst,lernt|lernte|hat kennengelernt|faire la connaissance de|A2
vor·schlagen|schlägst,schlägt|schlug|hat vorgeschlagen|proposer|B1
vor·bereiten|bereitest,bereitet|bereitete|hat vorbereitet|préparer|B1
fest·stellen|stellst,stellt|stellte|hat festgestellt|constater|B1
teil·nehmen|nimmst,nimmt|nahm|hat teilgenommen|participer|B1
ab·geben|gibst,gibt|gab|hat abgegeben|remettre, déposer|B1
`;
const VPRAW = `# Verbes, noms et adjectifs à préposition. Format : mot|préposition|cas (A ou D)|traduction|exemple avec la préposition entre crochets|traduction de l'exemple
achten|auf|A|faire attention à|Achte bitte [auf] den Verkehr.|Fais attention à la circulation.
denken|an|A|penser à|Ich denke oft [an] meine Familie.|Je pense souvent à ma famille.
warten|auf|A|attendre|Wir warten [auf] den Bus.|Nous attendons le bus.
sich freuen|auf|A|avoir hâte de (à venir)|Ich freue mich [auf] den Urlaub.|J'ai hâte d'être en vacances.
sich freuen|über|A|être content de (présent ou passé)|Sie freut sich [über] das Geschenk.|Elle est contente du cadeau.
sich interessieren|für|A|s'intéresser à|Er interessiert sich [für] Politik.|Il s'intéresse à la politique.
sich kümmern|um|A|s'occuper de|Wer kümmert sich [um] den Hund?|Qui s'occupe du chien ?
sich ärgern|über|A|être agacé par|Ich ärgere mich [über] den Lärm.|Le bruit m'agace.
sich beschweren|über|A|se plaindre de|Die Mieter beschweren sich [über] die Heizung.|Les locataires se plaignent du chauffage.
sich beschweren|bei|D|se plaindre auprès de|Ich beschwere mich [beim] Vermieter.|Je me plains auprès du propriétaire.
sich gewöhnen|an|A|s'habituer à|Ich gewöhne mich langsam [an] das Wetter.|Je m'habitue peu à peu au temps.
sich erinnern|an|A|se souvenir de|Erinnerst du dich [an] unseren ersten Tag?|Tu te souviens de notre premier jour ?
sich bedanken|für|A|remercier pour|Ich bedanke mich [für] Ihre Hilfe.|Je vous remercie pour votre aide.
sich entscheiden|für|A|se décider pour, choisir|Wir haben uns [für] die kleine Wohnung entschieden.|Nous avons choisi le petit appartement.
sich verlassen|auf|A|compter sur|Du kannst dich [auf] mich verlassen.|Tu peux compter sur moi.
sich bewerben|um|A|postuler à (un poste)|Sie bewirbt sich [um] eine Stelle als Pflegerin.|Elle postule à un poste d'aide-soignante.
sich bewerben|bei|D|postuler chez (une entreprise)|Er bewirbt sich [bei] einer Bank.|Il postule dans une banque.
sich beschäftigen|mit|D|s'occuper de, travailler sur|Ich beschäftige mich gerade [mit] dem Thema.|Je travaille en ce moment sur ce sujet.
sich unterhalten|über|A|discuter de|Wir unterhalten uns [über] den Film.|Nous discutons du film.
sich unterhalten|mit|D|discuter avec|Ich unterhalte mich [mit] dem Nachbarn.|Je discute avec le voisin.
sich vorbereiten|auf|A|se préparer à|Ich bereite mich [auf] die Prüfung vor.|Je me prépare à l'examen.
sich konzentrieren|auf|A|se concentrer sur|Konzentrier dich [auf] die Arbeit!|Concentre-toi sur le travail !
sich sorgen|um|A|s'inquiéter pour|Die Eltern sorgen sich [um] ihren Sohn.|Les parents s'inquiètent pour leur fils.
sich fürchten|vor|D|avoir peur de|Das Kind fürchtet sich [vor] dem Hund.|L'enfant a peur du chien.
Angst haben|vor|D|avoir peur de|Ich habe Angst [vor] der Prüfung.|J'ai peur de l'examen.
glauben|an|A|croire en|Ich glaube [an] dich.|Je crois en toi.
teilnehmen|an|D|participer à|Ich nehme [an] einem Deutschkurs teil.|Je participe à un cours d'allemand.
abhängen|von|D|dépendre de|Das hängt [vom] Wetter ab.|Ça dépend du temps.
bestehen|aus|D|se composer de|Das Team besteht [aus] fünf Personen.|L'équipe se compose de cinq personnes.
bestehen|auf|D|exiger, insister sur|Er besteht [auf] einer Antwort.|Il exige une réponse.
träumen|von|D|rêver de|Ich träume [von] einem Haus am See.|Je rêve d'une maison au bord d'un lac.
bitten|um|A|demander (quelque chose)|Darf ich Sie [um] einen Gefallen bitten?|Puis-je vous demander un service ?
fragen|nach|D|demander (le chemin, des nouvelles)|Er fragt [nach] dem Weg.|Il demande son chemin.
gehören|zu|D|faire partie de|Das gehört [zu] meinen Aufgaben.|Ça fait partie de mes tâches.
sorgen|für|A|veiller à, prendre soin de|Die Eltern sorgen [für] die Kinder.|Les parents prennent soin des enfants.
führen|zu|D|mener à|Stress kann [zu] Krankheiten führen.|Le stress peut mener à des maladies.
überzeugen|von|D|convaincre de|Er hat mich [von] seiner Idee überzeugt.|Il m'a convaincu de son idée.
hinweisen|auf|A|signaler, attirer l'attention sur|Ich möchte Sie [auf] einen Fehler hinweisen.|Je voudrais vous signaler une erreur.
verzichten|auf|A|renoncer à|Ich verzichte [auf] Zucker.|Je renonce au sucre.
zweifeln|an|D|douter de|Ich zweifle [an] seiner Ehrlichkeit.|Je doute de son honnêteté.
sprechen|mit|D|parler avec|Ich muss [mit] dem Chef sprechen.|Je dois parler au chef.
sprechen|über|A|parler de|Wir sprechen [über] das Problem.|Nous parlons du problème.
telefonieren|mit|D|téléphoner à|Ich telefoniere [mit] meiner Mutter.|Je téléphone à ma mère.
anfangen|mit|D|commencer par|Wir fangen [mit] der Übung an.|Nous commençons par l'exercice.
aufhören|mit|D|arrêter de|Er hat [mit] dem Rauchen aufgehört.|Il a arrêté de fumer.
helfen|bei|D|aider à, pour|Kannst du mir [beim] Umzug helfen?|Tu peux m'aider pour le déménagement ?
sich verabreden|mit|D|prendre rendez-vous avec|Ich habe mich [mit] Anna verabredet.|J'ai rendez-vous avec Anna.
sich treffen|mit|D|retrouver, voir (quelqu'un)|Ich treffe mich heute [mit] Freunden.|Je vois des amis aujourd'hui.
einladen|zu|D|inviter à|Sie lädt uns [zum] Essen ein.|Elle nous invite à manger.
gratulieren|zu|D|féliciter pour|Ich gratuliere dir [zum] Geburtstag.|Je te souhaite un bon anniversaire.
sich entschuldigen|für|A|s'excuser de|Ich entschuldige mich [für] die Verspätung.|Je m'excuse pour le retard.
sich entschuldigen|bei|D|s'excuser auprès de|Du solltest dich [bei] ihr entschuldigen.|Tu devrais t'excuser auprès d'elle.
sich anmelden|für|A|s'inscrire à|Ich melde mich [für] den Kurs an.|Je m'inscris au cours.
sich informieren|über|A|se renseigner sur|Ich informiere mich [über] die Kosten.|Je me renseigne sur les coûts.
sich erkundigen|nach|D|se renseigner sur|Er erkundigt sich [nach] den Öffnungszeiten.|Il se renseigne sur les horaires d'ouverture.
sich streiten|mit|D|se disputer avec|Er streitet sich oft [mit] seinem Bruder.|Il se dispute souvent avec son frère.
sich verlieben|in|A|tomber amoureux de|Sie hat sich [in] ihn verliebt.|Elle est tombée amoureuse de lui.
sich wundern|über|A|s'étonner de|Ich wundere mich [über] seine Reaktion.|Sa réaction m'étonne.
sich aufregen|über|A|s'énerver contre|Reg dich nicht [über] ihn auf!|Ne t'énerve pas contre lui !
lachen|über|A|rire de|Wir haben [über] den Witz gelacht.|Nous avons ri de la blague.
nachdenken|über|A|réfléchir à|Ich denke [über] dein Angebot nach.|Je réfléchis à ton offre.
diskutieren|über|A|discuter de, débattre de|Wir diskutieren [über] die Zukunft.|Nous discutons de l'avenir.
berichten|über|A|rendre compte de|Die Zeitung berichtet [über] den Unfall.|Le journal parle de l'accident.
schreiben|an|A|écrire à|Ich schreibe einen Brief [an] die Behörde.|J'écris une lettre à l'administration.
erzählen|von|D|raconter, parler de|Erzähl mir [von] deiner Reise!|Raconte-moi ton voyage !
hören|von|D|avoir des nouvelles de|Ich habe lange nichts [von] ihm gehört.|Je n'ai pas eu de ses nouvelles depuis longtemps.
sich verabschieden|von|D|dire au revoir à|Wir verabschieden uns [von] den Gästen.|Nous disons au revoir aux invités.
sich erholen|von|D|se remettre de|Ich muss mich [vom] Stress erholen.|Je dois me remettre du stress.
leiden|an|D|souffrir de (une maladie)|Er leidet [an] einer Allergie.|Il souffre d'une allergie.
leiden|unter|D|souffrir de (une situation)|Viele leiden [unter] der Hitze.|Beaucoup souffrent de la chaleur.
arbeiten|an|D|travailler sur|Ich arbeite [an] einem Projekt.|Je travaille sur un projet.
sterben|an|D|mourir de|Er ist [an] einer Grippe gestorben.|Il est mort d'une grippe.
sich beteiligen|an|D|participer à|Alle beteiligen sich [an] den Kosten.|Tout le monde participe aux frais.
erkennen|an|D|reconnaître à|Ich erkenne ihn [an] der Stimme.|Je le reconnais à sa voix.
sich wenden|an|A|s'adresser à|Wenden Sie sich bitte [an] den Kundenservice.|Adressez-vous au service client.
sich halten|an|A|respecter (une règle)|Bitte halten Sie sich [an] die Regeln.|Merci de respecter les règles.
reagieren|auf|A|réagir à|Wie hat er [auf] die Nachricht reagiert?|Comment a-t-il réagi à la nouvelle ?
antworten|auf|A|répondre à|Bitte antworten Sie [auf] meine E-Mail.|Merci de répondre à mon e-mail.
hoffen|auf|A|espérer|Wir hoffen [auf] gutes Wetter.|Nous espérons du beau temps.
aufpassen|auf|A|surveiller, faire attention à|Kannst du [auf] die Kinder aufpassen?|Tu peux surveiller les enfants ?
ankommen|auf|A|dépendre de (es kommt auf … an)|Es kommt [auf] die Situation an.|Ça dépend de la situation.
sich einsetzen|für|A|s'engager pour|Sie setzt sich [für] die Umwelt ein.|Elle s'engage pour l'environnement.
danken|für|A|remercier pour|Danke [für] die Einladung!|Merci pour l'invitation !
ausgeben|für|A|dépenser pour|Wie viel gibst du [für] die Miete aus?|Combien dépenses-tu pour le loyer ?
kämpfen|gegen|A|lutter contre|Wir kämpfen [gegen] den Klimawandel.|Nous luttons contre le changement climatique.
protestieren|gegen|A|protester contre|Viele protestieren [gegen] das neue Gesetz.|Beaucoup protestent contre la nouvelle loi.
sich verstehen|mit|D|s'entendre avec|Ich verstehe mich gut [mit] meinen Kollegen.|Je m'entends bien avec mes collègues.
rechnen|mit|D|s'attendre à, compter sur|[Mit] so viel Verkehr habe ich nicht gerechnet.|Je ne m'attendais pas à autant de circulation.
vergleichen|mit|D|comparer à|Vergleich dich nicht [mit] anderen!|Ne te compare pas aux autres !
umgehen|mit|D|savoir s'y prendre avec|Er kann gut [mit] Kindern umgehen.|Il sait bien s'y prendre avec les enfants.
sich auskennen|mit|D|s'y connaître en|Kennst du dich [mit] Computern aus?|Tu t'y connais en informatique ?
suchen|nach|D|chercher|Ich suche [nach] meinem Schlüssel.|Je cherche ma clé.
riechen|nach|D|sentir (avoir l'odeur de)|Hier riecht es [nach] Kaffee.|Ça sent le café ici.
sich sehnen|nach|D|avoir la nostalgie de|Ich sehne mich [nach] der Sonne.|Le soleil me manque.
schützen|vor|D|protéger de|Die Creme schützt [vor] der Sonne.|La crème protège du soleil.
warnen|vor|D|mettre en garde contre|Man warnt [vor] dem Sturm.|On met en garde contre la tempête.
passen|zu|D|aller bien avec|Die Farbe passt gut [zu] dir.|Cette couleur te va bien.
beitragen|zu|D|contribuer à|Jeder kann [zum] Umweltschutz beitragen.|Chacun peut contribuer à la protection de l'environnement.
leben|von|D|vivre de|Er lebt [von] seiner Rente.|Il vit de sa retraite.
sich trennen|von|D|se séparer de|Sie hat sich [von] ihrem Freund getrennt.|Elle s'est séparée de son copain.
handeln|von|D|parler de (un livre, un film)|Der Film handelt [von] einer Familie.|Le film parle d'une famille.
gehen|um|A|s'agir de (es geht um …)|In dem Brief geht es [um] die Miete.|La lettre concerne le loyer.
sich handeln|um|A|s'agir de (es handelt sich um …)|Es handelt sich [um] ein Missverständnis.|Il s'agit d'un malentendu.
sich bemühen|um|A|s'efforcer d'obtenir|Ich bemühe mich [um] eine Lösung.|Je m'efforce de trouver une solution.
die Angst|vor|D|la peur de|Seine Angst [vor] Hunden ist groß.|Sa peur des chiens est grande.
das Interesse|an|D|l'intérêt pour|Sie hat großes Interesse [an] der Musik.|Elle a un grand intérêt pour la musique.
die Lust|auf|A|l'envie de|Ich habe keine Lust [auf] Kino.|Je n'ai pas envie d'aller au cinéma.
die Freude|an|D|le plaisir à (une activité)|Er hat viel Freude [an] seiner Arbeit.|Il prend beaucoup de plaisir à son travail.
die Freude|über|A|la joie de (présent ou passé)|Die Freude [über] das Geschenk war groß.|La joie d'avoir reçu ce cadeau était grande.
die Hoffnung|auf|A|l'espoir de|Wir haben Hoffnung [auf] besseres Wetter.|Nous avons l'espoir d'un temps meilleur.
die Antwort|auf|A|la réponse à|Hast du eine Antwort [auf] meine Frage?|As-tu une réponse à ma question ?
die Frage|nach|D|la question de|Die Frage [nach] dem Preis ist wichtig.|La question du prix est importante.
die Bitte|um|A|la demande de|Seine Bitte [um] Hilfe kam zu spät.|Sa demande d'aide est arrivée trop tard.
der Grund|für|A|la raison de|Was ist der Grund [für] die Verspätung?|Quelle est la raison du retard ?
die Lösung|für|A|la solution à|Wir suchen eine Lösung [für] das Problem.|Nous cherchons une solution au problème.
die Erinnerung|an|A|le souvenir de|Ich habe schöne Erinnerungen [an] meine Kindheit.|J'ai de beaux souvenirs de mon enfance.
der Wunsch|nach|D|le désir de|Viele haben den Wunsch [nach] mehr Ruhe.|Beaucoup ont le désir de plus de calme.
die Beziehung|zu|D|la relation avec|Er hat eine gute Beziehung [zu] seiner Schwester.|Il a une bonne relation avec sa sœur.
die Einladung|zu|D|l'invitation à|Danke für die Einladung [zum] Essen.|Merci pour l'invitation à manger.
die Suche|nach|D|la recherche de|Die Suche [nach] einer Wohnung ist schwer.|La recherche d'un appartement est difficile.
das Gespräch|über|A|la conversation sur|Das Gespräch [über] die Miete dauert lange.|La conversation sur le loyer dure longtemps.
die Sorge|um|A|l'inquiétude pour|Die Sorge [um] ihre Mutter lässt sie nicht schlafen.|L'inquiétude pour sa mère l'empêche de dormir.
die Teilnahme|an|D|la participation à|Die Teilnahme [am] Kurs ist kostenlos.|La participation au cours est gratuite.
die Voraussetzung|für|A|la condition pour|Gute Deutschkenntnisse sind eine Voraussetzung [für] die Stelle.|De bonnes connaissances d'allemand sont une condition pour ce poste.
der Streit|mit|D|la dispute avec|Der Streit [mit] dem Nachbarn ist vorbei.|La dispute avec le voisin est finie.
stolz|auf|A|fier de|Ich bin stolz [auf] meine Tochter.|Je suis fier de ma fille.
zufrieden|mit|D|satisfait de|Wir sind zufrieden [mit] der neuen Wohnung.|Nous sommes satisfaits du nouvel appartement.
abhängig|von|D|dépendant de|Der Preis ist abhängig [von] der Größe.|Le prix dépend de la taille.
interessiert|an|D|intéressé par|Sie ist sehr interessiert [an] dem Kurs.|Elle est très intéressée par le cours.
verheiratet|mit|D|marié avec|Er ist [mit] einer Ärztin verheiratet.|Il est marié avec une médecin.
verliebt|in|A|amoureux de|Sie ist [in] ihren Kollegen verliebt.|Elle est amoureuse de son collègue.
böse|auf|A|fâché contre|Bist du noch böse [auf] mich?|Tu es encore fâché contre moi ?
fertig|mit|D|avoir fini (qqch)|Ich bin gleich fertig [mit] der Arbeit.|J'ai bientôt fini le travail.
bekannt|für|A|connu pour|Die Stadt ist bekannt [für] ihr Bier.|La ville est connue pour sa bière.
gespannt|auf|A|impatient de découvrir|Ich bin gespannt [auf] den neuen Film.|J'ai hâte de découvrir le nouveau film.
neugierig|auf|A|curieux de|Die Kinder sind neugierig [auf] das Geschenk.|Les enfants sont curieux de voir le cadeau.
bereit|zu|D|prêt à|Ich bin [zu] einem Gespräch bereit.|Je suis prêt à discuter.
froh|über|A|content de|Ich bin froh [über] deine Hilfe.|Je suis content de ton aide.
traurig|über|A|triste de|Sie ist traurig [über] die Nachricht.|Elle est triste de cette nouvelle.
zuständig|für|A|responsable de|Wer ist [für] die Heizung zuständig?|Qui est responsable du chauffage ?
überzeugt|von|D|convaincu de|Ich bin [von] der Idee überzeugt.|Je suis convaincu de cette idée.
freundlich|zu|D|gentil avec|Die Nachbarn sind immer freundlich [zu] uns.|Les voisins sont toujours gentils avec nous.
`;
const PHRAW = `// Phrases du quotidien par situation : une ligne « # id|Nom|Description » ouvre une situation, puis « allemand|français ».
# arzt|Chez le médecin|Rendez-vous, symptômes, pharmacie
Ich möchte einen Termin bei Dr. Weber machen.|Je voudrais prendre rendez-vous avec le Dr Weber.
Haben Sie diese Woche noch einen Termin frei?|Avez-vous encore un créneau libre cette semaine ?
Ich habe seit drei Tagen Fieber.|J'ai de la fièvre depuis trois jours.
Mir tut der Rücken weh.|J'ai mal au dos.
Ich bin gegen Penizillin allergisch.|Je suis allergique à la pénicilline.
Wie oft muss ich die Tabletten nehmen?|Combien de fois dois-je prendre les comprimés ?
Können Sie mich bitte krankschreiben?|Pouvez-vous me faire un arrêt maladie, s'il vous plaît ?
Ich brauche ein Rezept für dieses Medikament.|J'ai besoin d'une ordonnance pour ce médicament.
Hier ist meine Versichertenkarte.|Voici ma carte d'assurance maladie.
Gibt es das Medikament auch ohne Rezept?|Ce médicament existe-t-il aussi sans ordonnance ?
Ich weiß nicht, ob ich nüchtern kommen muss.|Je ne sais pas si je dois venir à jeun.
# amt|Administration|Bürgeramt, papiers, formulaires
Ich möchte meinen Wohnsitz anmelden.|Je voudrais déclarer mon domicile.
Welche Unterlagen muss ich mitbringen?|Quels documents dois-je apporter ?
Ich habe einen Termin um zehn Uhr.|J'ai un rendez-vous à dix heures.
Können Sie mir beim Ausfüllen des Formulars helfen?|Pouvez-vous m'aider à remplir le formulaire ?
Wo muss ich hier unterschreiben?|Où dois-je signer ?
Mein Aufenthaltstitel läuft nächsten Monat ab.|Mon titre de séjour expire le mois prochain.
Wie lange dauert die Bearbeitung?|Combien de temps prend le traitement du dossier ?
Ich habe den Brief vom Amt nicht verstanden.|Je n'ai pas compris la lettre de l'administration.
Könnten Sie das bitte langsamer wiederholen?|Pourriez-vous répéter plus lentement, s'il vous plaît ?
Muss ich die Gebühr bar bezahlen?|Dois-je payer les frais en espèces ?
Ich warte schon seit einer Stunde.|J'attends déjà depuis une heure.
# wohnung|Logement|Propriétaire, réparations, voisinage
Die Heizung funktioniert seit gestern nicht mehr.|Le chauffage ne marche plus depuis hier.
Wann kann der Handwerker vorbeikommen?|Quand l'artisan peut-il passer ?
Im Badezimmer tropft der Wasserhahn.|Dans la salle de bains, le robinet goutte.
Ist die Miete warm oder kalt?|Le loyer est-il charges comprises ou hors charges ?
Ich möchte die Wohnung gern besichtigen.|Je voudrais bien visiter l'appartement.
Wie hoch ist die Kaution?|À combien s'élève la caution ?
Wir ziehen am Ersten des Monats ein.|Nous emménageons le premier du mois.
Ich habe meinen Schlüssel verloren.|J'ai perdu ma clé.
Wo stelle ich den Müll hin?|Où est-ce que je dépose les poubelles ?
Ich kündige die Wohnung zum Ende März.|Je résilie le bail pour la fin mars.
Wann bekomme ich die Nebenkostenabrechnung?|Quand vais-je recevoir le décompte des charges ?
# telefon|Au téléphone|Appeler, laisser un message
Guten Tag, hier spricht Martin Dubois.|Bonjour, ici Martin Dubois.
Ich rufe wegen meiner Rechnung an.|J'appelle au sujet de ma facture.
Könnten Sie mich bitte mit Frau Schmidt verbinden?|Pourriez-vous me passer Mme Schmidt, s'il vous plaît ?
Die Verbindung ist sehr schlecht.|La communication est très mauvaise.
Können Sie das bitte buchstabieren?|Pouvez-vous l'épeler, s'il vous plaît ?
Wann kann ich sie am besten erreichen?|Quand puis-je la joindre le plus facilement ?
Ich rufe später noch einmal an.|Je rappellerai plus tard.
Könnten Sie ihm sagen, dass ich angerufen habe?|Pourriez-vous lui dire que j'ai appelé ?
Meine Nummer ist null eins sieben sechs.|Mon numéro est zéro un sept six.
Entschuldigung, ich habe mich verwählt.|Excusez-moi, je me suis trompé de numéro.
# einkaufen|Courses & magasins|Supermarché, boulangerie, retours
Wo finde ich die Milch?|Où est-ce que je trouve le lait ?
Ich hätte gern ein Kilo Äpfel.|Je voudrais un kilo de pommes.
Haben Sie das auch in einer anderen Größe?|L'avez-vous aussi dans une autre taille ?
Kann ich mit Karte bezahlen?|Est-ce que je peux payer par carte ?
Brauchen Sie eine Tüte?|Avez-vous besoin d'un sac ?
Ich möchte diese Hose umtauschen.|Je voudrais échanger ce pantalon.
Den Kassenbon habe ich noch.|J'ai encore le ticket de caisse.
Das ist mir leider zu teuer.|C'est malheureusement trop cher pour moi.
Bis wann haben Sie heute geöffnet?|Jusqu'à quelle heure êtes-vous ouverts aujourd'hui ?
Zwei Brötchen und ein Vollkornbrot, bitte.|Deux petits pains et un pain complet, s'il vous plaît.
# restaurant|Café & restaurant|Réserver, commander, payer
Ich möchte einen Tisch für vier Personen reservieren.|Je voudrais réserver une table pour quatre personnes.
Ist dieser Platz noch frei?|Cette place est-elle encore libre ?
Können wir bitte die Speisekarte haben?|Pouvons-nous avoir la carte, s'il vous plaît ?
Was können Sie uns empfehlen?|Que pouvez-vous nous recommander ?
Ich nehme die Suppe und danach den Fisch.|Je prends la soupe et ensuite le poisson.
Ist in dem Gericht Fleisch?|Y a-t-il de la viande dans ce plat ?
Wir möchten bitte zahlen.|Nous voudrions payer, s'il vous plaît.
Zusammen oder getrennt?|Ensemble ou séparément ?
Stimmt so, danke.|Gardez la monnaie, merci.
Das Essen war ausgezeichnet.|Le repas était excellent.
# verkehr|Transports|Train, bus, trajets
Wo kann ich eine Fahrkarte kaufen?|Où puis-je acheter un billet ?
Fährt dieser Bus zum Hauptbahnhof?|Ce bus va-t-il à la gare centrale ?
Wann fährt der nächste Zug nach München?|Quand part le prochain train pour Munich ?
Muss ich umsteigen?|Dois-je changer ?
Der Zug hat zwanzig Minuten Verspätung.|Le train a vingt minutes de retard.
Ich habe meinen Anschluss verpasst.|J'ai raté ma correspondance.
An welcher Haltestelle muss ich aussteigen?|À quel arrêt dois-je descendre ?
Ist das Deutschlandticket hier gültig?|Le Deutschlandticket est-il valable ici ?
Entschuldigung, wie komme ich zum Rathaus?|Excusez-moi, comment aller à la mairie ?
Gehen Sie geradeaus und dann die zweite Straße links.|Allez tout droit, puis la deuxième rue à gauche.
# arbeit|Au travail|Collègues, réunions, absences
Ich bin heute krank und komme nicht ins Büro.|Je suis malade aujourd'hui et je ne viens pas au bureau.
Können wir das Meeting auf morgen verschieben?|Pouvons-nous repousser la réunion à demain ?
Ich schicke Ihnen die Unterlagen bis Freitag.|Je vous envoie les documents d'ici vendredi.
Hast du kurz Zeit für eine Frage?|Tu as un moment pour une question ?
Ich habe die Aufgabe noch nicht ganz verstanden.|Je n'ai pas encore tout à fait compris la tâche.
Ich möchte nächste Woche zwei Tage Urlaub nehmen.|Je voudrais prendre deux jours de congé la semaine prochaine.
Wer ist für dieses Projekt zuständig?|Qui est responsable de ce projet ?
Ich arbeite heute im Homeoffice.|Je travaille de chez moi aujourd'hui.
Wann bekomme ich meine Gehaltsabrechnung?|Quand vais-je recevoir ma fiche de paie ?
Schönes Wochenende und bis Montag!|Bon week-end et à lundi !
# nachbarn|Voisins & small talk|Se présenter, discuter, rendre service
Hallo, ich bin neu hier im Haus.|Bonjour, je suis nouveau dans l'immeuble.
Woher kommen Sie eigentlich?|D'où venez-vous, au fait ?
Wie lange wohnen Sie schon hier?|Depuis combien de temps habitez-vous ici ?
Könnten Sie mein Paket annehmen, wenn ich nicht da bin?|Pourriez-vous réceptionner mon colis si je ne suis pas là ?
Wir feiern am Samstag eine kleine Party.|Nous faisons une petite fête samedi.
Es tut mir leid, dass es gestern so laut war.|Je suis désolé qu'il y ait eu autant de bruit hier.
Was machen Sie am Wochenende?|Que faites-vous ce week-end ?
Das Wetter ist heute wirklich schön.|Il fait vraiment beau aujourd'hui.
Ich habe am Wochenende einen Ausflug gemacht.|J'ai fait une excursion ce week-end.
Sagen Sie Bescheid, wenn Sie Hilfe brauchen.|Dites-le-moi si vous avez besoin d'aide.
# bank|Banque & poste|Compte, colis, courrier
Ich möchte ein Girokonto eröffnen.|Je voudrais ouvrir un compte courant.
Meine Karte ist gesperrt.|Ma carte est bloquée.
Ich möchte Geld auf dieses Konto überweisen.|Je voudrais virer de l'argent sur ce compte.
Wie hoch sind die Gebühren?|À combien s'élèvent les frais ?
Ich möchte dieses Paket nach Frankreich schicken.|Je voudrais envoyer ce colis en France.
Wie lange braucht ein Brief nach Paris?|Combien de temps met une lettre pour Paris ?
Ich habe eine Benachrichtigung für ein Paket bekommen.|J'ai reçu un avis de passage pour un colis.
Brauche ich dafür meinen Ausweis?|Ai-je besoin de ma carte d'identité pour ça ?
Ich möchte eine Briefmarke für eine Postkarte.|Je voudrais un timbre pour une carte postale.
Können Sie mir die Kontonummer noch einmal sagen?|Pouvez-vous me redonner le numéro de compte ?
`;
const PERSONS = ["ich", "du", "er/sie/es", "wir", "ihr", "sie/Sie"];
const AUX = { hat: ["habe", "hast", "hat", "haben", "habt", "haben"], ist: ["bin", "bist", "ist", "sind", "seid", "sind"] };
const TENSES = { pres: "Présent", prat: "Prétérit", perf: "Parfait" };
const STORES = ["irr", "vp", "pl", "dk", "ord", "dic", "ph"];

/* irregular and separable verbs */
const IRR = [];
IRRRAW.split("\n").forEach(raw => {
  const line = raw.trim();
  if (!line || line[0] === "#") return;
  const [infRaw, pr, pt, pf, fr, level] = line.split("|");
  const sepIdx = infRaw.indexOf("·");
  const particle = sepIdx > 0 ? infRaw.slice(0, sepIdx) : "";
  const base = sepIdx > 0 ? infRaw.slice(sepIdx + 1) : infRaw;
  const inf = particle + base;
  const stem = base.replace(/e?n$/, "");
  const dt = /[dt]$/.test(stem);
  const regular = [stem + "e", stem + (dt ? "est" : /[sßxz]$/.test(stem) ? "t" : "st"), stem + (dt ? "et" : "t"), base, stem + (dt ? "et" : "t"), base];
  const p = pr.split(",");
  const pres0 = p.length === 6 ? p : [regular[0], p[0], p[1], base, regular[4], base];
  const e = /e$/.test(pt);
  const prat0 = [pt, pt + (e ? "st" : /[sßzdt]$/.test(pt) ? "est" : "st"), pt, pt + (e ? "n" : "en"), pt + (e ? "t" : /[dt]$/.test(pt) ? "et" : "t"), pt + (e ? "n" : "en")];
  const sfx = particle ? " " + particle : "";
  const [aux, ...rest] = pf.split(" ");
  const part = rest.join(" ");
  IRR.push({
    key: inf, inf, particle, fr, level, aux, part,
    pres: pres0.map(f => f + sfx), prat: prat0.map(f => f + sfx),
    presIrr: pres0.map((f, k) => f !== regular[k]),
    pratAlt: /[sßz]$/.test(pt) ? pt + "t" + sfx : null,
    perf: AUX[aux].map(a => a + " " + part),
  });
});

/* verbs with prepositions */
const CONTR = { vom: "von + dem", zum: "zu + dem", zur: "zu + der", beim: "bei + dem", im: "in + dem", am: "an + dem", ins: "in + das", ans: "an + das" };
const TWO_WAY = ["an", "auf", "in", "über", "vor", "unter", "hinter", "neben", "zwischen"];
const VP = [];
VPRAW.split("\n").forEach(raw => {
  const line = raw.trim();
  if (!line || line[0] === "#") return;
  const [verb, prep, cas, fr, ex, exfr] = line.split("|");
  const m = ex.match(/^(.*)\[(.+?)\](.*)$/);
  VP.push({
    key: verb + "|" + prep, verb, prep, cas, fr, exfr, token: m[2],
    ex: m[1] + m[2] + m[3],
    exHTML: esc(m[1]) + "<b>" + esc(m[2]) + "</b>" + esc(m[3]),
    gapHTML: esc(m[1]) + '<span class="gap">___</span>' + esc(m[3]),
  });
});
const PREPS = [...new Set(VP.map(v => v.prep))].sort((a, b) => a.localeCompare(b, "de"));
const CASE_NAME = { A: "Akkusativ", D: "Dativ" };

/* everyday phrases by situation */
const SITS = [];
const PH = [];
(function () {
  let s = null;
  for (const raw of PHRAW.split("\n")) {
    const line = raw.trim();
    if (!line || line.startsWith("//")) continue;
    if (line[0] === "#") {
      const [id, name, desc] = line.slice(1).split("|").map(x => x.trim());
      s = { id, name, desc, items: [] }; SITS.push(s); continue;
    }
    const [de, fr] = line.split("|");
    const it = { key: hash(de), de: de.trim(), fr: fr.trim(), sit: s.id };
    s.items.push(it); PH.push(it);
  }
})();
const SIT_BY_ID = Object.fromEntries(SITS.map(s => [s.id, s]));

/* meanings, examples and phrases in the interface language (French is the source) */
const CONTENT_I18N = {"en": {"w": {"Hallo!": "Hi! / Hello!", "Guten Morgen!": "Good morning!", "Guten Tag!": "Good day! / Hello! (formal, during the day)", "Guten Abend!": "Good evening!", "Gute Nacht!": "Good night!", "Tschüss!": "Bye! (informal, when leaving)", "Auf Wiedersehen!": "Goodbye!", "Bis später!": "See you later!", "Bis morgen!": "See you tomorrow!", "Wie geht's?": "How are you?", "Mir geht es gut, danke.": "I'm fine, thanks.", "Danke schön!": "Thank you very much!", "Bitte schön!": "You're welcome! / Here you go!", "Gern geschehen.": "My pleasure. (you're welcome)", "Entschuldigung!": "Excuse me! / Sorry!", "Es tut mir leid.": "I'm sorry.", "ja": "yes", "nein": "no", "doch": "yes (after a negative question)", "bitte": "please", "Ich verstehe nicht.": "I don't understand.", "Können Sie das wiederholen?": "Can you repeat that?", "Sprechen Sie bitte langsamer.": "Please speak more slowly.", "Wie heißen Sie?": "What's your name?", "Ich heiße …": "My name is …", "Woher kommen Sie?": "Where are you from?", "Ich komme aus Frankreich.": "I'm from France.", "Freut mich!": "Nice to meet you!", "Wie sagt man das auf Deutsch?": "How do you say that in German?", "Was bedeutet das?": "What does that mean?", "Kein Problem.": "No problem.", "Alles klar!": "Okay! / Got it!", "Viel Glück!": "Good luck!", "Schönes Wochenende!": "Have a nice weekend!", "Herzlich willkommen!": "Welcome!", "Prost!": "Cheers! (when toasting)", "Guten Appetit!": "Enjoy your meal!", "der Tag": "day", "die Woche": "week", "der Monat": "month", "das Jahr": "year", "die Stunde": "hour (duration)", "die Minute": "minute", "die Uhr": "clock, watch; … o'clock", "der Morgen": "morning", "der Vormittag": "late morning (before noon)", "der Mittag": "noon, midday", "der Nachmittag": "afternoon", "der Abend": "evening", "die Nacht": "night", "der Montag": "Monday", "der Dienstag": "Tuesday", "der Mittwoch": "Wednesday", "der Donnerstag": "Thursday", "der Freitag": "Friday", "der Samstag": "Saturday", "der Sonntag": "Sunday", "das Wochenende": "weekend", "der Januar": "January", "der Februar": "February", "der März": "March", "der April": "April", "der Mai": "May", "der Juni": "June", "der Juli": "July", "der August": "August", "der September": "September", "der Oktober": "October", "der November": "November", "der Dezember": "December", "der Frühling": "spring", "der Sommer": "summer", "der Herbst": "fall, autumn", "der Winter": "winter", "der Termin": "appointment", "der Feiertag": "public holiday", "der Geburtstag": "birthday", "heute": "today", "morgen": "tomorrow", "gestern": "yesterday", "übermorgen": "the day after tomorrow", "jetzt": "now", "bald": "soon", "später": "later", "immer": "always", "oft": "often", "manchmal": "sometimes", "nie": "never", "Wie spät ist es?": "What time is it?", "Es ist halb drei.": "It's half past two.", "null": "zero", "eins": "one", "zwei": "two", "drei": "three", "vier": "four", "fünf": "five", "sechs": "six", "sieben": "seven", "acht": "eight", "neun": "nine", "zehn": "ten", "elf": "eleven", "zwölf": "twelve", "dreizehn": "thirteen", "sechzehn": "sixteen", "siebzehn": "seventeen", "zwanzig": "twenty", "einundzwanzig": "twenty-one", "dreißig": "thirty", "vierzig": "forty", "fünfzig": "fifty", "sechzig": "sixty", "siebzig": "seventy", "achtzig": "eighty", "neunzig": "ninety", "hundert": "a hundred", "tausend": "a thousand", "die Million": "million", "die Zahl": "number", "die Hälfte": "half", "das Viertel": "quarter", "erste": "first", "zweite": "second", "dritte": "third", "die Familie": "family", "die Eltern": "parents", "die Mutter": "mother", "der Vater": "father", "das Kind": "child", "der Sohn": "son", "die Tochter": "daughter", "der Bruder": "brother", "die Schwester": "sister", "die Geschwister": "siblings (brothers and sisters)", "die Großeltern": "grandparents", "die Oma": "grandma", "der Opa": "grandpa", "der Onkel": "uncle", "die Tante": "aunt", "der Mann": "man; husband", "die Frau": "woman; wife; Mrs./Ms.", "der Freund": "friend (male); boyfriend", "die Freundin": "friend (female); girlfriend", "der Nachbar": "neighbor (male)", "die Nachbarin": "neighbor (female)", "das Baby": "baby", "der Junge": "boy", "das Mädchen": "girl", "die Leute": "people", "der Hund": "dog", "die Katze": "cat", "verheiratet": "married", "ledig": "single (unmarried)", "geschieden": "divorced", "heiraten": "to get married, to marry", "besuchen": "to visit (someone)", "die Wohnung": "apartment", "das Haus": "house", "das Zimmer": "room", "die Küche": "kitchen", "das Bad": "bathroom", "das Schlafzimmer": "bedroom", "das Wohnzimmer": "living room", "der Flur": "hallway, entrance hall", "der Balkon": "balcony", "der Keller": "basement, cellar", "die Toilette": "toilet, restroom", "die Tür": "door", "das Fenster": "window", "die Treppe": "stairs, staircase", "das Stockwerk": "floor (story of a building)", "der Aufzug": "elevator", "der Schlüssel": "key", "die Miete": "rent", "die Nebenkosten": "utilities (extra costs on top of rent)", "der Vermieter": "landlord", "der Mieter": "tenant", "die Kaution": "security deposit (for renting)", "der Mietvertrag": "lease, rental agreement", "das Bett": "bed", "der Tisch": "table", "der Stuhl": "chair", "der Schrank": "closet, cupboard, wardrobe", "das Sofa": "sofa, couch", "die Lampe": "lamp", "der Kühlschrank": "refrigerator", "die Waschmaschine": "washing machine", "die Heizung": "heating", "der Müll": "trash, garbage", "die Mülltonne": "garbage can (outdoor bin)", "der Briefkasten": "mailbox", "umziehen": "to move (to a new home)", "mieten": "to rent (as a tenant)", "putzen": "to clean", "lüften": "to air out (a room)", "gemütlich": "cozy", "das Essen": "food, meal", "das Frühstück": "breakfast", "das Mittagessen": "lunch", "das Abendessen": "dinner", "das Brot": "bread", "das Brötchen": "bread roll", "die Butter": "butter", "der Käse": "cheese", "die Wurst": "sausage, cold cuts", "das Fleisch": "meat", "das Hähnchen": "chicken", "der Fisch": "fish", "das Ei": "egg", "die Milch": "milk", "der Joghurt": "yogurt", "das Gemüse": "vegetables", "das Obst": "fruit", "der Apfel": "apple", "die Banane": "banana", "die Kartoffel": "potato", "die Tomate": "tomato", "die Zwiebel": "onion", "der Salat": "salad, lettuce", "der Reis": "rice", "die Nudeln": "pasta, noodles", "das Salz": "salt", "der Pfeffer": "pepper", "der Zucker": "sugar", "der Kuchen": "cake", "das Wasser": "water", "der Saft": "juice", "der Kaffee": "coffee (drink)", "der Tee": "tea", "das Bier": "beer", "der Wein": "wine", "der Topf": "pot, saucepan", "die Pfanne": "frying pan", "der Teller": "plate", "die Tasse": "cup", "das Glas": "glass", "das Messer": "knife", "die Gabel": "fork", "der Löffel": "spoon", "kochen": "to cook; to boil", "lecker": "delicious, tasty", "Ich habe Hunger.": "I'm hungry.", "Ich habe Durst.": "I'm thirsty.", "der Supermarkt": "supermarket", "die Bäckerei": "bakery", "die Metzgerei": "butcher shop", "die Apotheke": "pharmacy", "die Drogerie": "drugstore (toiletries, household goods)", "der Markt": "market", "das Geschäft": "store, shop", "die Kasse": "checkout, cash register", "der Kassenbon": "receipt", "die Tüte": "bag (plastic or paper)", "der Einkaufswagen": "shopping cart", "das Pfand": "bottle deposit", "die Flasche": "bottle", "die Dose": "can, tin", "die Packung": "pack, packet", "das Kilo": "kilo", "das Gramm": "gram", "der Preis": "price", "das Angebot": "offer, special deal", "das Bargeld": "cash", "die Karte": "card", "der Euro": "euro", "der Cent": "cent", "kaufen": "to buy", "einkaufen": "to go shopping, to shop for groceries", "bezahlen": "to pay", "kosten": "to cost", "billig": "cheap", "teuer": "expensive", "günstig": "good value, inexpensive", "geöffnet": "open", "geschlossen": "closed", "Wie viel kostet das?": "How much does it cost?", "Kann ich mit Karte zahlen?": "Can I pay by card?", "Brauchen Sie eine Tüte?": "Do you need a bag?", "Ich schaue nur.": "I'm just looking.", "das Restaurant": "restaurant", "das Café": "cafe, coffee shop", "die Kneipe": "pub, bar", "die Speisekarte": "menu", "die Rechnung": "check (in a restaurant); bill, invoice", "das Trinkgeld": "tip", "der Kellner": "waiter", "die Kellnerin": "waitress", "die Vorspeise": "appetizer, starter", "das Hauptgericht": "main course", "die Nachspeise": "dessert", "die Suppe": "soup", "das Getränk": "drink, beverage", "bestellen": "to order", "reservieren": "to reserve, to book", "vegetarisch": "vegetarian", "scharf": "spicy, hot", "Die Karte, bitte.": "The menu, please.", "Ich hätte gern einen Kaffee.": "I'd like a coffee.", "Die Rechnung, bitte.": "The check, please.", "Zusammen oder getrennt?": "Together or separate?", "Stimmt so.": "Keep the change.", "Ist hier noch frei?": "Is this seat free?", "Einen Tisch für zwei, bitte.": "A table for two, please.", "Was empfehlen Sie?": "What do you recommend?", "der Bahnhof": "train station", "der Zug": "train", "der Bus": "bus", "die Straßenbahn": "streetcar, tram", "die U-Bahn": "subway", "die S-Bahn": "commuter train (S-Bahn)", "die Haltestelle": "stop (bus, tram)", "das Gleis": "track, platform", "die Fahrkarte": "ticket", "der Fahrplan": "timetable, schedule", "die Verspätung": "delay", "das Auto": "car", "das Fahrrad": "bicycle, bike", "der Flughafen": "airport", "die Straße": "street", "die Ampel": "traffic light", "die Kreuzung": "intersection", "die Ecke": "corner", "der Platz": "square (in a town); seat, space", "die Brücke": "bridge", "die Stadt": "city, town", "das Dorf": "village", "die Innenstadt": "downtown, city center", "die Kirche": "church", "der Park": "park", "die Post": "post office; mail", "der Führerschein": "driver's license", "fahren": "to go (by vehicle), to drive", "umsteigen": "to change (trains, lines), to transfer", "einsteigen": "to get on, to get in (a vehicle)", "aussteigen": "to get off, to get out (of a vehicle)", "links": "on the left, to the left", "rechts": "on the right, to the right", "geradeaus": "straight ahead", "weit": "far", "in der Nähe": "nearby", "Wo ist die Haltestelle?": "Where is the stop?", "Wie komme ich zum Bahnhof?": "How do I get to the train station?", "hin und zurück": "round trip", "Nächster Halt": "Next stop", "die Arbeit": "work", "der Job": "job (informal)", "der Beruf": "profession, occupation", "die Stelle": "position (job opening)", "die Firma": "company", "das Büro": "office (place)", "der Chef": "boss (male)", "die Chefin": "boss (female)", "der Kollege": "colleague (male)", "die Kollegin": "colleague (female)", "das Gehalt": "salary", "der Vertrag": "contract", "die Bewerbung": "job application", "der Lebenslauf": "resume, CV", "das Vorstellungsgespräch": "job interview", "die Besprechung": "meeting", "der Urlaub": "vacation, time off", "die Pause": "break", "die Überstunde": "hour of overtime", "der Feierabend": "end of the workday, quitting time", "der Computer": "computer", "die E-Mail": "email", "das Handy": "cell phone", "die Aufgabe": "task", "arbeiten": "to work", "verdienen": "to earn (money)", "sich bewerben": "to apply (for a job)", "kündigen": "to quit (a job); to cancel (a contract)", "pünktlich": "punctual", "krankgeschrieben": "on sick leave", "Schönen Feierabend!": "Have a nice evening! (after work)", "der Körper": "body", "der Kopf": "head", "das Auge": "eye", "das Ohr": "ear", "die Nase": "nose", "der Mund": "mouth", "der Zahn": "tooth", "der Hals": "neck; throat", "der Arm": "arm", "die Hand": "hand", "der Finger": "finger", "der Bauch": "belly, stomach", "der Rücken": "back", "das Bein": "leg", "der Fuß": "foot", "das Herz": "heart", "der Arzt": "doctor (male)", "die Ärztin": "doctor (female)", "die Praxis": "doctor's office (practice)", "das Krankenhaus": "hospital", "die Notaufnahme": "emergency room (ER)", "das Medikament": "medication, medicine", "das Rezept": "prescription; recipe", "die Krankenkasse": "health insurance company", "die Versichertenkarte": "health insurance card", "die Krankmeldung": "sick note (doctor's certificate)", "das Fieber": "fever", "die Erkältung": "cold (illness)", "der Husten": "cough", "die Schmerzen": "pain, aches", "krank": "sick, ill", "gesund": "healthy", "müde": "tired", "Ich habe Kopfschmerzen.": "I have a headache.", "Mir ist schlecht.": "I feel sick. (nauseous)", "Ich brauche einen Termin.": "I need an appointment.", "Gute Besserung!": "Get well soon!", "das Amt": "government office, agency", "das Bürgeramt": "citizens' office (≈ city hall)", "die Anmeldung": "registration of address; registration, sign-up", "die Behörde": "public authority", "das Formular": "form", "der Antrag": "application, request (official)", "der Ausweis": "ID card", "der Reisepass": "passport", "die Adresse": "address", "die Unterschrift": "signature", "die Staatsangehörigkeit": "nationality, citizenship", "der Wohnsitz": "place of residence", "die Steuer": "tax", "die Steuernummer": "tax number", "die Versicherung": "insurance", "die Bank": "bank", "das Konto": "account", "die Überweisung": "bank transfer", "der Geldautomat": "ATM", "das Geld": "money", "der Brief": "letter", "das Paket": "package, parcel", "die Frist": "deadline", "die Gebühr": "fee, charge", "der Rundfunkbeitrag": "broadcasting fee (TV and radio)", "ausfüllen": "to fill out (a form)", "unterschreiben": "to sign", "sich anmelden": "to register, to sign up; to register one's address", "beantragen": "to apply for (officially)", "überweisen": "to transfer (money)", "die Kleidung": "clothes, clothing", "die Hose": "pants", "das Hemd": "shirt", "das T-Shirt": "T-shirt", "der Pullover": "sweater", "die Jacke": "jacket", "der Mantel": "coat", "das Kleid": "dress", "der Rock": "skirt", "der Schuh": "shoe", "die Socke": "sock", "die Mütze": "beanie, knit hat", "der Schal": "scarf", "der Regenschirm": "umbrella", "die Tasche": "bag, handbag; pocket", "die Größe": "size", "die Umkleidekabine": "fitting room", "anziehen": "to put on (clothes)", "anprobieren": "to try on (clothes)", "passen": "to fit (be the right size)", "eng": "tight", "bequem": "comfortable", "das Wetter": "weather", "die Sonne": "sun", "der Regen": "rain", "der Schnee": "snow", "der Wind": "wind", "die Wolke": "cloud", "das Gewitter": "thunderstorm", "die Temperatur": "temperature", "sonnig": "sunny", "bewölkt": "cloudy", "Es regnet.": "It's raining.", "Es ist kalt.": "It's cold.", "Es ist warm.": "It's warm.", "die Freizeit": "free time, leisure", "das Hobby": "hobby", "der Sport": "sport, sports", "das Kino": "movie theater", "der Film": "movie, film", "das Buch": "book", "die Musik": "music", "das Konzert": "concert", "das Museum": "museum", "der Ausflug": "excursion, outing", "die Reise": "trip, journey", "das Schwimmbad": "swimming pool", "der Verein": "club, association", "das Spiel": "game; match", "spazieren gehen": "to go for a walk", "schwimmen": "to swim", "wandern": "to hike", "sich treffen": "to meet up", "Hast du Lust?": "Do you feel like it?", "sein": "to be", "haben": "to have", "werden": "to become", "können": "can, to be able to; to know how to", "müssen": "must, to have to (obligation)", "wollen": "to want", "dürfen": "to be allowed to, may", "sollen": "should, to be supposed to (instruction, advice)", "mögen": "to like", "gehen": "to go (on foot), to walk", "kommen": "to come", "machen": "to do, to make", "sagen": "to say", "sprechen": "to speak", "fragen": "to ask (a question)", "antworten": "to answer", "wissen": "to know (a fact)", "kennen": "to know (be familiar with)", "verstehen": "to understand", "sehen": "to see", "hören": "to hear, to listen", "lesen": "to read", "schreiben": "to write", "essen": "to eat", "trinken": "to drink", "schlafen": "to sleep", "wohnen": "to live (reside somewhere)", "leben": "to live (be alive)", "geben": "to give", "nehmen": "to take", "bringen": "to bring", "mitbringen": "to bring along", "finden": "to find", "suchen": "to look for, to search", "brauchen": "to need", "helfen": "to help", "warten": "to wait", "bleiben": "to stay", "lernen": "to learn", "gefallen": "to please (to be pleasing to someone)", "glauben": "to believe", "denken": "to think", "öffnen": "to open", "schließen": "to close", "anfangen": "to begin, to start", "aufhören": "to stop", "aufstehen": "to get up", "anrufen": "to call (on the phone)", "vergessen": "to forget", "zeigen": "to show", "verlieren": "to lose", "liegen": "to lie (flat), to be located (lying)", "sitzen": "to sit, to be sitting", "stehen": "to stand, to be located (upright)", "laufen": "to run, to walk", "tragen": "to carry; to wear", "groß": "big, tall", "klein": "small, little", "alt": "old", "neu": "new", "jung": "young", "gut": "good, well", "schlecht": "bad, badly", "schön": "beautiful, nice", "hässlich": "ugly", "lang": "long", "kurz": "short", "schnell": "fast, quick", "langsam": "slow", "heiß": "very hot, scorching", "kalt": "cold", "warm": "warm", "voll": "full", "leer": "empty", "leicht": "light (not heavy); easy", "schwer": "heavy; hard (difficult)", "einfach": "simple", "schwierig": "difficult", "richtig": "right, correct", "falsch": "wrong, false", "wichtig": "important", "laut": "loud, noisy", "leise": "quiet, softly", "sauber": "clean", "schmutzig": "dirty", "früh": "early", "spät": "late", "nah": "near, close", "freundlich": "friendly", "nett": "nice", "glücklich": "happy", "traurig": "sad", "froh": "glad", "böse": "mean, evil; angry", "fertig": "ready; finished", "frei": "free, available", "besetzt": "occupied, taken", "kaputt": "broken", "sicher": "sure; safe", "wer?": "who?", "was?": "what?", "wo?": "where?", "wohin?": "where (to)?", "woher?": "where from?", "wann?": "when?", "warum?": "why?", "wie?": "how?", "wie viel?": "how much? / how many?", "welcher?": "which (one)?", "und": "and", "oder": "or", "aber": "but", "weil": "because", "dass": "that (conjunction)", "wenn": "if; when", "also": "so, therefore", "auch": "also, too", "noch": "still; more", "schon": "already", "nur": "only", "sehr": "very", "ziemlich": "fairly, pretty (somewhat)", "vielleicht": "maybe, perhaps", "zusammen": "together", "allein": "alone", "hier": "here", "dort": "there", "alles": "everything", "nichts": "nothing", "etwas": "something", "jemand": "someone, somebody", "niemand": "no one, nobody", "viel": "a lot, much", "wenig": "little, not much", "genug": "enough", "die Arbeitsbedingungen": "working conditions", "der Arbeitgeber": "employer", "der Arbeitnehmer": "employee", "die Kündigungsfrist": "notice period", "die Probezeit": "probationary period", "die Gehaltserhöhung": "raise (salary increase)", "die Beförderung": "promotion (at work)", "die Weiterbildung": "continuing education, further training", "die Fähigkeit": "skill, ability", "die Erfahrung": "experience", "die Verantwortung": "responsibility", "die Leistung": "performance; service (benefit)", "der Umsatz": "revenue, sales", "der Gewinn": "profit", "der Verlust": "loss", "die Abteilung": "department", "die Geschäftsführung": "management (executive board)", "der Betriebsrat": "works council (employee representatives)", "die Gewerkschaft": "labor union", "der Streik": "strike", "die Teilzeit": "part-time", "die Vollzeit": "full-time", "das Homeoffice": "working from home, remote work", "die Arbeitslosigkeit": "unemployment", "die Agentur für Arbeit": "employment agency (≈ unemployment office)", "der Auftrag": "order (from a client), assignment", "verhandeln": "to negotiate", "sich weiterbilden": "to continue one's training", "befördern": "to promote", "einstellen": "to hire", "entlassen": "to lay off, to fire", "leiten": "to manage, to lead", "selbstständig": "self-employed, freelance", "befristet": "fixed-term (temporary contract)", "unbefristet": "open-ended (permanent contract)", "der Anspruch": "entitlement (to), claim", "die Bescheinigung": "certificate (official confirmation)", "der Bescheid": "official decision, notice", "der Widerspruch": "objection, appeal; contradiction", "die Vollmacht": "power of attorney", "die Genehmigung": "permit, authorization", "die Aufenthaltserlaubnis": "residence permit", "die Voraussetzung": "prerequisite", "die Bedingung": "condition", "die Kündigung": "termination (of a contract); dismissal", "die Mahnung": "payment reminder", "der Rechtsanwalt": "lawyer, attorney", "das Gericht": "court; dish (food)", "das Gesetz": "law", "die Vorschrift": "rule, regulation", "die Haftpflichtversicherung": "personal liability insurance", "der Schaden": "damage", "die Steuererklärung": "tax return", "der Beitrag": "contribution; dues", "die Rente": "pension (retirement)", "das Kindergeld": "child benefit", "das Bürgergeld": "basic income support (≈ welfare)", "die Unterlagen": "documents, paperwork", "der Nachweis": "proof (supporting document)", "einreichen": "to submit (documents)", "verlängern": "to extend, to renew", "Widerspruch einlegen": "to file an objection, to appeal", "genehmigen": "to approve, to authorize", "nachweisen": "to prove, to provide proof", "haften": "to be (legally) liable", "gültig": "valid", "fristgerecht": "within the deadline", "verpflichtet": "obliged, required to", "zuständig": "in charge (of), responsible (for)", "die Beschwerden": "symptoms, ailments", "die Untersuchung": "medical examination, checkup", "die Behandlung": "treatment", "die Diagnose": "diagnosis", "der Facharzt": "specialist (doctor)", "der Hausarzt": "family doctor, primary care physician", "die Nebenwirkung": "side effect", "die Impfung": "vaccination", "die Allergie": "allergy", "die Verletzung": "injury", "die Entzündung": "inflammation", "der Blutdruck": "blood pressure", "die Ernährung": "diet, nutrition", "die Bewegung": "movement; physical activity, exercise", "der Stress": "stress", "die Erschöpfung": "exhaustion", "die Sucht": "addiction", "die Vorsorge": "preventive care", "sich erholen": "to rest, to recover", "sich verletzen": "to get hurt, to injure oneself", "behandeln": "to treat (medically)", "untersuchen": "to examine", "verschreiben": "to prescribe", "leiden an": "to suffer from (+ Dat.)", "vorbeugen": "to prevent (+ Dat.)", "ansteckend": "contagious", "chronisch": "chronic", "erschöpft": "exhausted", "schwanger": "pregnant", "rezeptpflichtig": "prescription-only", "die Gesellschaft": "society", "die Regierung": "government", "die Wahl": "election; choice", "die Partei": "party (political)", "der Bundestag": "Federal Parliament (Bundestag)", "der Bundeskanzler": "Federal Chancellor", "die Demokratie": "democracy", "die Meinung": "opinion", "die Freiheit": "freedom", "die Gleichberechtigung": "equal rights", "die Integration": "integration", "die Einwanderung": "immigration", "die Armut": "poverty", "der Wohlstand": "prosperity", "die Ungleichheit": "inequality", "die Bildung": "education", "die Nachricht": "news, message", "die Zeitung": "newspaper", "die Sendung": "broadcast, program (TV, radio)", "der Bericht": "report", "die Umfrage": "survey, poll", "die Krise": "crisis", "die Entwicklung": "development", "die Herausforderung": "challenge", "der Bürger": "citizen", "wählen": "to vote; to choose", "abstimmen": "to vote (on an issue)", "berichten": "to report", "fordern": "to demand", "sich engagieren": "to get involved (for a cause)", "kritisieren": "to criticize", "gesellschaftlich": "social, societal", "politisch": "political", "umstritten": "controversial", "aktuell": "current, up to date", "die Umwelt": "environment", "der Klimawandel": "climate change", "der Umweltschutz": "environmental protection", "die Energie": "energy", "der Strom": "electricity; current", "der Verbrauch": "consumption", "die Nachhaltigkeit": "sustainability", "die Verschmutzung": "pollution", "die Abgase": "exhaust fumes", "der Abfall": "waste", "die Mülltrennung": "waste sorting", "der Gelbe Sack": "yellow bag (for packaging waste)", "das Altglas": "glass for recycling", "die Solaranlage": "solar power system", "die Windkraft": "wind power", "das Kraftwerk": "power plant", "die Ressource": "resource", "die Überschwemmung": "flood", "die Dürre": "drought", "verschwenden": "to waste", "sparen": "to save", "recyceln": "to recycle", "schützen": "to protect", "vermeiden": "to avoid", "verbrauchen": "to consume, to use up", "nachhaltig": "sustainable", "umweltfreundlich": "eco-friendly", "erneuerbar": "renewable", "klimaneutral": "carbon-neutral", "das Gefühl": "feeling", "die Beziehung": "relationship", "das Vertrauen": "trust", "die Eifersucht": "jealousy", "die Enttäuschung": "disappointment", "die Sehnsucht": "longing, yearning", "die Geduld": "patience", "der Streit": "argument, quarrel", "die Versöhnung": "reconciliation", "das Missverständnis": "misunderstanding", "die Rücksicht": "consideration (for others)", "der Eindruck": "impression", "die Stimmung": "mood, atmosphere", "sich verlieben": "to fall in love", "sich trennen": "to separate, to break up", "sich streiten": "to argue, to fight", "vermissen": "to miss (someone or something)", "enttäuschen": "to disappoint", "vertrauen": "to trust (+ Dat.)", "sich schämen": "to be ashamed", "sich aufregen": "to get worked up, to get upset", "zuverlässig": "reliable", "ehrgeizig": "ambitious", "eifersüchtig": "jealous", "geduldig": "patient", "ungeduldig": "impatient", "neugierig": "curious", "schüchtern": "shy", "selbstbewusst": "self-confident", "großzügig": "generous", "hilfsbereit": "helpful", "empfindlich": "sensitive, touchy", "gelassen": "calm, relaxed", "enttäuscht": "disappointed", "verlegen": "embarrassed", "meiner Meinung nach": "in my opinion", "Ich bin der Ansicht, dass …": "I'm of the opinion that …", "einerseits … andererseits": "on the one hand … on the other hand", "trotzdem": "nevertheless, anyway", "deshalb": "that's why, therefore", "dennoch": "nonetheless", "obwohl": "although", "während": "while; whereas", "sobald": "as soon as", "falls": "in case, if", "außerdem": "furthermore, besides", "allerdings": "however, though", "zwar … aber": "admittedly … but", "je … desto": "the more … the more", "sowohl … als auch": "both … and, as well as", "weder … noch": "neither … nor", "stattdessen": "instead", "im Gegensatz zu": "unlike, in contrast to", "im Vergleich zu": "compared to", "aufgrund": "because of, due to (+ Gen.)", "trotz": "despite (+ Gen.)", "anstatt": "instead of", "infolgedessen": "as a result, consequently", "letztendlich": "ultimately, in the end", "beispielsweise": "for example", "Es kommt darauf an.": "It depends.", "Das hängt davon ab, ob …": "That depends on whether …", "Da bin ich anderer Meinung.": "I disagree on that.", "Ich stimme dir zu.": "I agree with you.", "Das stimmt zwar, aber …": "That's true, admittedly, but …", "Ich gebe zu, dass …": "I admit that …", "Es ist fraglich, ob …": "It's questionable whether …", "Ein Vorteil ist, dass …": "One advantage is that …", "Ein Nachteil ist, dass …": "One disadvantage is that …", "sich kümmern um": "to take care of, to look after (+ Akk.)", "sich freuen auf": "to look forward to (something to come, + Akk.)", "sich freuen über": "to be happy about (something present or past, + Akk.)", "sich interessieren für": "to be interested in (+ Akk.)", "sich ärgern über": "to be annoyed about (+ Akk.)", "sich beschweren über": "to complain about (+ Akk.)", "sich gewöhnen an": "to get used to (+ Akk.)", "sich erinnern an": "to remember (+ Akk.)", "sich bedanken für": "to thank (someone) for (+ Akk.)", "sich entscheiden für": "to decide on, to choose (+ Akk.)", "sich verlassen auf": "to rely on, to count on (+ Akk.)", "sich bewerben um": "to apply for (a job) (+ Akk.)", "sich beschäftigen mit": "to deal with, to work on (+ Dat.)", "sich unterhalten über": "to talk about, to chat about (+ Akk.)", "sich vorbereiten auf": "to prepare for (+ Akk.)", "sich konzentrieren auf": "to concentrate on (+ Akk.)", "sich sorgen um": "to worry about (+ Akk.)", "sich fürchten vor": "to be afraid of (+ Dat.)", "warten auf": "to wait for (+ Akk.)", "denken an": "to think of, to think about (+ Akk.)", "glauben an": "to believe in (+ Akk.)", "teilnehmen an": "to take part in (+ Dat.)", "abhängen von": "to depend on (+ Dat.)", "bestehen aus": "to consist of (+ Dat.)", "träumen von": "to dream of (+ Dat.)", "bitten um": "to ask for (something) (+ Akk.)", "fragen nach": "to ask about (someone's news, the way) (+ Dat.)", "achten auf": "to pay attention to (+ Akk.)", "gehören zu": "to be part of, to belong to (+ Dat.)", "sorgen für": "to ensure, to provide for (+ Akk.)", "führen zu": "to lead to (+ Dat.)", "überzeugen von": "to convince of (+ Dat.)", "hinweisen auf": "to point out, to draw attention to (+ Akk.)", "verzichten auf": "to do without, to give up (+ Akk.)", "zweifeln an": "to doubt (+ Dat.)", "offensichtlich": "obviously, evident", "eindeutig": "clear, unambiguous", "angeblich": "supposedly, allegedly", "anscheinend": "apparently", "vermutlich": "probably, presumably", "ausgerechnet": "of all things (of all people, of all times)", "ausreichend": "sufficient", "erheblich": "considerable", "gewissermaßen": "in a way, so to speak", "überwiegend": "predominantly, mostly", "vorübergehend": "temporary, provisional", "dauerhaft": "lasting, permanent", "umfangreich": "extensive, voluminous", "anspruchsvoll": "demanding", "aufwendig": "time-consuming, elaborate (costly in time or effort)", "mühsam": "tedious, laborious", "zufällig": "by chance", "absichtlich": "on purpose", "rechtzeitig": "in time (early enough)", "ehemalig": "former (ex-)", "vorhanden": "available, existing", "selbstverständlich": "of course, naturally", "bisher": "until now, so far", "inzwischen": "meanwhile, in the meantime", "ständig": "constantly", "kaum": "hardly, barely", "überhaupt nicht": "not at all", "eher": "rather", "durchaus": "absolutely, definitely", "keineswegs": "by no means", "Ich verstehe nur Bahnhof.": "It's all Greek to me.", "Das ist mir Wurst.": "I couldn't care less.", "Ich drücke dir die Daumen.": "I'll keep my fingers crossed for you.", "Schwein haben": "to be lucky", "Tomaten auf den Augen haben": "to not see what's right in front of you", "Ich habe die Nase voll.": "I'm fed up.", "ins Fettnäpfchen treten": "to put one's foot in it (make a gaffe)", "auf dem Holzweg sein": "to be on the wrong track", "den Nagel auf den Kopf treffen": "to hit the nail on the head", "um den heißen Brei herumreden": "to beat around the bush", "Hals- und Beinbruch!": "Break a leg! (good luck)", "Da steppt der Bär.": "It's going to be a wild party.", "Alles hat ein Ende, nur die Wurst hat zwei.": "All good things must come to an end.", "etwas auf die lange Bank schieben": "to put something off", "die Katze im Sack kaufen": "to buy a pig in a poke", "jemandem auf den Keks gehen": "to get on someone's nerves", "Das ist nicht mein Bier.": "That's not my problem.", "Das ist mir ein Rätsel.": "It's a mystery to me.", "unter vier Augen": "in private (one-on-one)", "zwei Fliegen mit einer Klappe schlagen": "to kill two birds with one stone", "Lügen haben kurze Beine.": "Lies don't get you far.", "Ende gut, alles gut.": "All's well that ends well.", "Übung macht den Meister.": "Practice makes perfect."}, "ex": {"heiraten": "My sister is getting married this summer.", "besuchen": "On weekends, I visit my parents.", "umziehen": "We're moving to Berlin next month.", "mieten": "I rented a small apartment downtown.", "putzen": "On Saturdays, we clean the whole apartment.", "lüften": "Please air out the room, it's so warm in here.", "kochen": "Tonight I'm making pasta with tomato sauce.", "kaufen": "I'm just going to grab some bread at the bakery.", "einkaufen": "I go grocery shopping at the supermarket after work.", "bezahlen": "Can I pay by card here?", "kosten": "The ticket costs three euros twenty.", "bestellen": "I'll have a schnitzel and a water.", "reservieren": "I'd like to reserve a table for four people.", "fahren": "Tomorrow I'm going to Munich by train.", "umsteigen": "In Frankfurt, you have to change trains.", "einsteigen": "Please get on, the train is about to leave.", "aussteigen": "I'm getting off at the next stop.", "arbeiten": "I work at the office from Monday to Friday.", "verdienen": "He earns more than before.", "sich bewerben": "I applied to three companies.", "kündigen": "I canceled my cell phone plan.", "ausfüllen": "Please fill out this form.", "unterschreiben": "Please sign here at the bottom.", "sich anmelden": "After moving, you have to register your address at the citizens' office.", "beantragen": "I have to apply for a new passport.", "überweisen": "I'll transfer the money to you tomorrow.", "anziehen": "Put on a jacket, it's cold!", "anprobieren": "Can I try on these pants?", "passen": "Unfortunately, these shoes don't fit me.", "spazieren gehen": "After the meal, we go for a walk in the park.", "schwimmen": "In the summer, I like swimming in the lake.", "wandern": "On Sunday, we went hiking in the mountains.", "sich treffen": "We're meeting at eight in front of the movie theater.", "sein": "I've been in Germany for two months.", "haben": "Do you have time tonight?", "werden": "It's slowly getting dark.", "können": "Can you help me, please?", "müssen": "I have to get up early tomorrow.", "wollen": "We want to go to Italy next year.", "dürfen": "You're not allowed to smoke here.", "sollen": "The doctor says I should drink more water.", "mögen": "I don't like coffee without milk.", "gehen": "I walk to work every morning.", "kommen": "When are you coming home?", "machen": "What are you doing this weekend?", "sagen": "What did he say? I didn't hear it.", "sprechen": "Do you speak French?", "fragen": "I'll ask the salesperson.", "antworten": "She hasn't answered my email yet.", "wissen": "Do you know where the post office is?", "kennen": "Do you know a good restaurant around here?", "verstehen": "Sorry, I didn't understand that.", "sehen": "Do you see the stop over there?", "hören": "I like listening to the radio at breakfast.", "lesen": "She reads a little every evening.", "schreiben": "I'll write you a message later.", "essen": "We have dinner at seven.", "trinken": "What would you like to drink?", "schlafen": "I slept badly last night.", "wohnen": "I live on the third floor.", "leben": "She has been living in Hamburg for five years.", "geben": "Can you pass me the salt, please?", "nehmen": "I take the bus at eight thirty.", "bringen": "The waiter brings the check.", "mitbringen": "Should I bring something to eat?", "finden": "I can't find my key.", "suchen": "We're looking for a bigger apartment.", "brauchen": "I need a doctor's appointment.", "helfen": "Can I help you?", "warten": "I've already been waiting for twenty minutes.", "bleiben": "Today I'm staying home.", "lernen": "I learn ten new words every day.", "gefallen": "How do you like the new apartment?", "glauben": "I think the store is closed today.", "denken": "What do you think about it?", "öffnen": "The bakery opens at six o'clock.", "schließen": "Please close the door.", "anfangen": "The class starts at nine o'clock.", "aufhören": "He quit smoking.", "aufstehen": "I get up at seven every day.", "anrufen": "I'll call you tonight.", "vergessen": "I forgot my umbrella.", "zeigen": "Can you show me the way on the map?", "verlieren": "I lost my wallet.", "liegen": "The phone is on the table.", "sitzen": "We're sitting on the balcony drinking coffee.", "stehen": "The bottles are in the refrigerator.", "laufen": "I run in the park three times a week.", "tragen": "She's wearing a red dress today.", "verhandeln": "I want to negotiate my salary.", "sich weiterbilden": "She's doing further training in marketing in the evenings.", "befördern": "After two years, he was promoted to team leader.", "einstellen": "The company is hiring ten new employees this year.", "entlassen": "Because of the crisis, many employees were laid off.", "leiten": "She has been running the department for three years.", "einreichen": "You have to submit the documents by Friday.", "verlängern": "I have to extend my residence permit.", "Widerspruch einlegen": "You can file an objection to this decision within one month.", "genehmigen": "My boss approved my vacation request.", "nachweisen": "You have to provide proof of your income.", "haften": "Parents are liable for their children.", "sich erholen": "I got a good rest on vacation.", "sich verletzen": "He hurt his knee playing soccer.", "behandeln": "The doctor is treating the inflammation with antibiotics.", "untersuchen": "The doctor is examining my back.", "verschreiben": "The doctor prescribed me some medication.", "leiden an": "Many people suffer from back pain.", "vorbeugen": "With exercise, you can prevent many illnesses.", "wählen": "In September, Germans elect a new parliament.", "abstimmen": "Tomorrow, the Bundestag votes on the law.", "berichten": "The newspaper is reporting on the strike.", "fordern": "The union is demanding higher wages.", "sich engagieren": "She volunteers with an organization for refugees.", "kritisieren": "Many citizens criticize the new rule.", "verschwenden": "We waste too much food.", "sparen": "With LED bulbs, you can save electricity.", "recyceln": "In Germany, waste glass is almost completely recycled.", "schützen": "We have to protect nature better.", "vermeiden": "I try to avoid plastic.", "verbrauchen": "Our refrigerator uses too much electricity.", "sich verlieben": "They fell in love with each other on vacation.", "sich trennen": "After ten years, they split up.", "sich streiten": "The neighbors often argue loudly.", "vermissen": "I miss my family in France.", "enttäuschen": "The movie disappointed me.", "vertrauen": "I trust my best friend completely.", "sich schämen": "He's ashamed of his mistake.", "sich aufregen": "Don't get upset, it's not that bad!", "sich kümmern um": "Who will take care of the cat while we're away?", "sich freuen auf": "I'm already looking forward to the vacation.", "sich freuen über": "She was very happy about the gift.", "sich interessieren für": "I'm interested in history.", "sich ärgern über": "He's annoyed about the delay.", "sich beschweren über": "The neighbors complain about the noise.", "sich gewöhnen an": "I've gotten used to the weather.", "sich erinnern an": "Do you remember our first day in Berlin?", "sich bedanken für": "Thank you for your help.", "sich entscheiden für": "We chose the bigger apartment.", "sich verlassen auf": "You can always rely on her.", "sich bewerben um": "I'm applying for a position as an engineer.", "sich beschäftigen mit": "In my free time, I'm into photography.", "sich unterhalten über": "We talked about politics for a long time.", "sich vorbereiten auf": "I'm preparing for the exam.", "sich konzentrieren auf": "Focus on what matters!", "sich sorgen um": "The mother is worried about her sick son.", "sich fürchten vor": "The child is afraid of the dog.", "warten auf": "I'm waiting for the bus.", "denken an": "I often think of my friends in Paris.", "glauben an": "She believes in a better future.", "teilnehmen an": "I'm taking part in a German course.", "abhängen von": "That depends on the weather.", "bestehen aus": "The apartment consists of three rooms.", "träumen von": "He dreams of a house by the sea.", "bitten um": "May I ask you a favor?", "fragen nach": "A tourist asked me for directions.", "achten auf": "Please watch out for the step!", "gehören zu": "That's one of my tasks.", "sorgen für": "Parents take care of their children.", "führen zu": "Too much stress often leads to illness.", "überzeugen von": "He convinced me of his idea.", "hinweisen auf": "I'd like to point out a mistake to you.", "verzichten auf": "I've been going without sugar for a month.", "zweifeln an": "I doubt his honesty."}, "ph": {"Ich möchte einen Termin bei Dr. Weber machen.": "I'd like to make an appointment with Dr. Weber.", "Haben Sie diese Woche noch einen Termin frei?": "Do you have any appointments available this week?", "Ich habe seit drei Tagen Fieber.": "I've had a fever for three days.", "Mir tut der Rücken weh.": "My back hurts.", "Ich bin gegen Penizillin allergisch.": "I'm allergic to penicillin.", "Wie oft muss ich die Tabletten nehmen?": "How often do I need to take the pills?", "Können Sie mich bitte krankschreiben?": "Could you write me a sick note, please?", "Ich brauche ein Rezept für dieses Medikament.": "I need a prescription for this medication.", "Hier ist meine Versichertenkarte.": "Here's my health insurance card.", "Gibt es das Medikament auch ohne Rezept?": "Is this medication also available without a prescription?", "Ich weiß nicht, ob ich nüchtern kommen muss.": "I don't know if I need to come on an empty stomach.", "Ich möchte meinen Wohnsitz anmelden.": "I'd like to register my address.", "Welche Unterlagen muss ich mitbringen?": "Which documents do I need to bring?", "Ich habe einen Termin um zehn Uhr.": "I have an appointment at ten o'clock.", "Können Sie mir beim Ausfüllen des Formulars helfen?": "Could you help me fill out the form?", "Wo muss ich hier unterschreiben?": "Where do I need to sign?", "Mein Aufenthaltstitel läuft nächsten Monat ab.": "My residence permit expires next month.", "Wie lange dauert die Bearbeitung?": "How long does processing take?", "Ich habe den Brief vom Amt nicht verstanden.": "I didn't understand the letter from the authorities.", "Könnten Sie das bitte langsamer wiederholen?": "Could you repeat that more slowly, please?", "Muss ich die Gebühr bar bezahlen?": "Do I have to pay the fee in cash?", "Ich warte schon seit einer Stunde.": "I've already been waiting for an hour.", "Die Heizung funktioniert seit gestern nicht mehr.": "The heating hasn't been working since yesterday.", "Wann kann der Handwerker vorbeikommen?": "When can the repairman come by?", "Im Badezimmer tropft der Wasserhahn.": "The faucet in the bathroom is dripping.", "Ist die Miete warm oder kalt?": "Does the rent include utilities or not?", "Ich möchte die Wohnung gern besichtigen.": "I'd like to see the apartment.", "Wie hoch ist die Kaution?": "How much is the security deposit?", "Wir ziehen am Ersten des Monats ein.": "We're moving in on the first of the month.", "Ich habe meinen Schlüssel verloren.": "I lost my key.", "Wo stelle ich den Müll hin?": "Where do I put the trash?", "Ich kündige die Wohnung zum Ende März.": "I'm giving notice on the apartment for the end of March.", "Wann bekomme ich die Nebenkostenabrechnung?": "When will I get the utility statement?", "Guten Tag, hier spricht Martin Dubois.": "Hello, this is Martin Dubois.", "Ich rufe wegen meiner Rechnung an.": "I'm calling about my bill.", "Könnten Sie mich bitte mit Frau Schmidt verbinden?": "Could you put me through to Ms. Schmidt, please?", "Die Verbindung ist sehr schlecht.": "The connection is very bad.", "Können Sie das bitte buchstabieren?": "Could you spell that, please?", "Wann kann ich sie am besten erreichen?": "When is the best time to reach her?", "Ich rufe später noch einmal an.": "I'll call back later.", "Könnten Sie ihm sagen, dass ich angerufen habe?": "Could you tell him that I called?", "Meine Nummer ist null eins sieben sechs.": "My number is zero one seven six.", "Entschuldigung, ich habe mich verwählt.": "Sorry, I dialed the wrong number.", "Wo finde ich die Milch?": "Where can I find the milk?", "Ich hätte gern ein Kilo Äpfel.": "I'd like a kilo of apples.", "Haben Sie das auch in einer anderen Größe?": "Do you also have this in a different size?", "Kann ich mit Karte bezahlen?": "Can I pay by card?", "Brauchen Sie eine Tüte?": "Do you need a bag?", "Ich möchte diese Hose umtauschen.": "I'd like to exchange these pants.", "Den Kassenbon habe ich noch.": "I still have the receipt.", "Das ist mir leider zu teuer.": "Unfortunately, that's too expensive for me.", "Bis wann haben Sie heute geöffnet?": "How late are you open today?", "Zwei Brötchen und ein Vollkornbrot, bitte.": "Two rolls and a loaf of whole-grain bread, please.", "Ich möchte einen Tisch für vier Personen reservieren.": "I'd like to reserve a table for four people.", "Ist dieser Platz noch frei?": "Is this seat still free?", "Können wir bitte die Speisekarte haben?": "Could we have the menu, please?", "Was können Sie uns empfehlen?": "What would you recommend?", "Ich nehme die Suppe und danach den Fisch.": "I'll have the soup and then the fish.", "Ist in dem Gericht Fleisch?": "Is there meat in this dish?", "Wir möchten bitte zahlen.": "We'd like to pay, please.", "Zusammen oder getrennt?": "Together or separate?", "Stimmt so, danke.": "Keep the change, thanks.", "Das Essen war ausgezeichnet.": "The meal was excellent.", "Wo kann ich eine Fahrkarte kaufen?": "Where can I buy a ticket?", "Fährt dieser Bus zum Hauptbahnhof?": "Does this bus go to the main train station?", "Wann fährt der nächste Zug nach München?": "When does the next train to Munich leave?", "Muss ich umsteigen?": "Do I have to transfer?", "Der Zug hat zwanzig Minuten Verspätung.": "The train is twenty minutes late.", "Ich habe meinen Anschluss verpasst.": "I missed my connection.", "An welcher Haltestelle muss ich aussteigen?": "Which stop do I need to get off at?", "Ist das Deutschlandticket hier gültig?": "Is the Deutschlandticket valid here?", "Entschuldigung, wie komme ich zum Rathaus?": "Excuse me, how do I get to city hall?", "Gehen Sie geradeaus und dann die zweite Straße links.": "Go straight ahead, then take the second street on the left.", "Ich bin heute krank und komme nicht ins Büro.": "I'm sick today and won't be coming into the office.", "Können wir das Meeting auf morgen verschieben?": "Can we postpone the meeting until tomorrow?", "Ich schicke Ihnen die Unterlagen bis Freitag.": "I'll send you the documents by Friday.", "Hast du kurz Zeit für eine Frage?": "Do you have a minute for a question?", "Ich habe die Aufgabe noch nicht ganz verstanden.": "I haven't quite understood the task yet.", "Ich möchte nächste Woche zwei Tage Urlaub nehmen.": "I'd like to take two days off next week.", "Wer ist für dieses Projekt zuständig?": "Who is responsible for this project?", "Ich arbeite heute im Homeoffice.": "I'm working from home today.", "Wann bekomme ich meine Gehaltsabrechnung?": "When will I get my pay stub?", "Schönes Wochenende und bis Montag!": "Have a nice weekend, see you Monday!", "Hallo, ich bin neu hier im Haus.": "Hi, I'm new in the building.", "Woher kommen Sie eigentlich?": "Where are you from, by the way?", "Wie lange wohnen Sie schon hier?": "How long have you lived here?", "Könnten Sie mein Paket annehmen, wenn ich nicht da bin?": "Could you accept my package if I'm not home?", "Wir feiern am Samstag eine kleine Party.": "We're having a small party on Saturday.", "Es tut mir leid, dass es gestern so laut war.": "I'm sorry it was so loud yesterday.", "Was machen Sie am Wochenende?": "What are you doing this weekend?", "Das Wetter ist heute wirklich schön.": "The weather is really nice today.", "Ich habe am Wochenende einen Ausflug gemacht.": "I went on a day trip last weekend.", "Sagen Sie Bescheid, wenn Sie Hilfe brauchen.": "Let me know if you need help.", "Ich möchte ein Girokonto eröffnen.": "I'd like to open a checking account.", "Meine Karte ist gesperrt.": "My card has been blocked.", "Ich möchte Geld auf dieses Konto überweisen.": "I'd like to transfer money to this account.", "Wie hoch sind die Gebühren?": "How much are the fees?", "Ich möchte dieses Paket nach Frankreich schicken.": "I'd like to send this package to France.", "Wie lange braucht ein Brief nach Paris?": "How long does a letter to Paris take?", "Ich habe eine Benachrichtigung für ein Paket bekommen.": "I got a delivery notice for a package.", "Brauche ich dafür meinen Ausweis?": "Do I need my ID for that?", "Ich möchte eine Briefmarke für eine Postkarte.": "I'd like a stamp for a postcard.", "Können Sie mir die Kontonummer noch einmal sagen?": "Could you tell me the account number again?"}, "irr": {"sein": "to be", "haben": "to have", "werden": "to become", "wissen": "to know (a fact)", "können": "can, to be able to", "müssen": "must, to have to (obligation)", "wollen": "to want", "dürfen": "may, to be allowed to", "sollen": "should, to be supposed to (someone asked me to)", "mögen": "to like", "gehen": "to go (on foot)", "kommen": "to come", "fahren": "to go (by vehicle), to drive", "laufen": "to run, to walk", "fliegen": "to fly", "bleiben": "to stay", "schwimmen": "to swim", "stehen": "to stand", "sitzen": "to be sitting", "liegen": "to be lying, to be located", "essen": "to eat", "trinken": "to drink", "sehen": "to see", "lesen": "to read", "sprechen": "to speak", "nehmen": "to take", "geben": "to give", "helfen": "to help", "treffen": "to meet", "schlafen": "to sleep", "finden": "to find", "heißen": "to be called", "schreiben": "to write", "beginnen": "to begin", "bringen": "to bring", "kennen": "to know (a person, a place)", "gefallen": "to please, to appeal to", "vergessen": "to forget", "verstehen": "to understand", "bekommen": "to receive, to get", "tun": "to do", "denken": "to think", "nennen": "to name, to call", "rennen": "to run (fast)", "waschen": "to wash", "tragen": "to carry, to wear", "halten": "to hold, to stop", "lassen": "to let, to have (something) done", "fallen": "to fall", "rufen": "to call", "steigen": "to climb, to rise", "scheinen": "to shine; to seem", "treiben": "to do, to practice (Sport treiben)", "schneiden": "to cut", "gewinnen": "to win", "singen": "to sing", "ziehen": "to pull", "verlieren": "to lose", "schließen": "to close", "bitten": "to ask, to request", "empfehlen": "to recommend", "sterben": "to die", "werfen": "to throw", "unterschreiben": "to sign", "fangen": "to catch", "raten": "to advise, to guess", "schlagen": "to hit, to beat", "laden": "to load", "wachsen": "to grow", "braten": "to roast, to fry", "schreien": "to scream, to shout", "leihen": "to lend", "leiden": "to suffer", "streiten": "to argue", "reiten": "to ride (a horse)", "beißen": "to bite", "vergleichen": "to compare", "entscheiden": "to decide", "springen": "to jump", "verschwinden": "to disappear", "klingen": "to sound, to ring", "frieren": "to be cold, to freeze", "fließen": "to flow", "genießen": "to enjoy, to savor", "gießen": "to water, to pour", "bieten": "to offer", "verbieten": "to forbid, to ban", "riechen": "to smell (have or notice a smell)", "lügen": "to lie (tell a lie)", "wiegen": "to weigh", "messen": "to measure", "stehlen": "to steal", "brechen": "to break", "gelten": "to be valid", "erhalten": "to receive (official mail)", "verlassen": "to leave", "hängen": "to be hanging", "brennen": "to burn", "stoßen": "to push, to bump", "schweigen": "to be silent", "greifen": "to grab, to grasp", "reißen": "to tear, to rip", "beweisen": "to prove", "sinken": "to drop, to sink", "zwingen": "to force, to compel", "schieben": "to push (an object)", "heben": "to lift", "treten": "to step on, to step (into)", "befehlen": "to order, to command", "aufstehen": "to get up", "anfangen": "to start, to begin", "anrufen": "to call (on the phone)", "einkaufen": "to go shopping", "einsteigen": "to get on (a vehicle)", "aussteigen": "to get off (a vehicle)", "umsteigen": "to change (trains, buses)", "ankommen": "to arrive", "mitkommen": "to come along", "fernsehen": "to watch TV", "abholen": "to pick up", "aufmachen": "to open", "zumachen": "to close", "ausgehen": "to go out", "abfahren": "to leave, to depart (train, bus)", "zurückkommen": "to come back", "mitnehmen": "to take along, to take with you", "aufhören": "to stop", "aufräumen": "to tidy up", "anziehen": "to put on (clothes)", "umziehen": "to move (to a new home)", "einladen": "to invite", "ausfüllen": "to fill out (a form)", "zuhören": "to listen", "aussehen": "to look (like), to seem", "kennenlernen": "to get to know, to meet", "vorschlagen": "to suggest", "vorbereiten": "to prepare", "feststellen": "to notice, to establish", "teilnehmen": "to take part, to participate", "abgeben": "to hand in, to drop off"}, "vp": {"achten|auf": ["to pay attention to", "Please pay attention to the traffic."], "denken|an": ["to think of/about", "I often think about my family."], "warten|auf": ["to wait for", "We're waiting for the bus."], "sich freuen|auf": ["to look forward to (something ahead)", "I'm looking forward to the vacation."], "sich freuen|über": ["to be happy about (now or in the past)", "She's happy about the gift."], "sich interessieren|für": ["to be interested in", "He's interested in politics."], "sich kümmern|um": ["to take care of", "Who takes care of the dog?"], "sich ärgern|über": ["to be annoyed about", "The noise annoys me."], "sich beschweren|über": ["to complain about", "The tenants complain about the heating."], "sich beschweren|bei": ["to complain to (someone)", "I complain to the landlord."], "sich gewöhnen|an": ["to get used to", "I'm slowly getting used to the weather."], "sich erinnern|an": ["to remember", "Do you remember our first day?"], "sich bedanken|für": ["to thank (someone) for", "Thank you for your help."], "sich entscheiden|für": ["to decide on, to choose", "We chose the small apartment."], "sich verlassen|auf": ["to rely on, to count on", "You can count on me."], "sich bewerben|um": ["to apply for (a job)", "She's applying for a job as a caregiver."], "sich bewerben|bei": ["to apply to (a company)", "He's applying to a bank."], "sich beschäftigen|mit": ["to deal with, to work on", "I'm currently working on this topic."], "sich unterhalten|über": ["to talk about", "We're talking about the movie."], "sich unterhalten|mit": ["to talk with", "I'm talking with the neighbor."], "sich vorbereiten|auf": ["to prepare for", "I'm preparing for the exam."], "sich konzentrieren|auf": ["to concentrate on", "Concentrate on your work!"], "sich sorgen|um": ["to worry about", "The parents are worried about their son."], "sich fürchten|vor": ["to be afraid of", "The child is afraid of the dog."], "Angst haben|vor": ["to be afraid of", "I'm afraid of the exam."], "glauben|an": ["to believe in", "I believe in you."], "teilnehmen|an": ["to take part in", "I'm taking part in a German course."], "abhängen|von": ["to depend on", "That depends on the weather."], "bestehen|aus": ["to consist of", "The team consists of five people."], "bestehen|auf": ["to insist on, to demand", "He insists on an answer."], "träumen|von": ["to dream of/about", "I dream of a house by a lake."], "bitten|um": ["to ask for (something)", "May I ask you a favor?"], "fragen|nach": ["to ask about/for (directions, news)", "He asks for directions."], "gehören|zu": ["to be part of, to belong to", "That's one of my tasks."], "sorgen|für": ["to see to, to take care of", "The parents take care of the children."], "führen|zu": ["to lead to", "Stress can lead to illness."], "überzeugen|von": ["to convince of", "He convinced me of his idea."], "hinweisen|auf": ["to point out, to draw attention to", "I'd like to point out a mistake to you."], "verzichten|auf": ["to do without, to give up", "I'm giving up sugar."], "zweifeln|an": ["to doubt", "I doubt his honesty."], "sprechen|mit": ["to talk to/with", "I need to talk to the boss."], "sprechen|über": ["to talk about", "We're talking about the problem."], "telefonieren|mit": ["to talk on the phone with", "I'm on the phone with my mother."], "anfangen|mit": ["to start with", "We're starting with the exercise."], "aufhören|mit": ["to stop (doing something), to quit", "He quit smoking."], "helfen|bei": ["to help with", "Can you help me with the move?"], "sich verabreden|mit": ["to arrange to meet, to make a date with", "I've arranged to meet Anna."], "sich treffen|mit": ["to meet up with (someone)", "I'm meeting up with friends today."], "einladen|zu": ["to invite to", "She's inviting us to dinner."], "gratulieren|zu": ["to congratulate on", "Happy birthday!"], "sich entschuldigen|für": ["to apologize for", "I apologize for the delay."], "sich entschuldigen|bei": ["to apologize to", "You should apologize to her."], "sich anmelden|für": ["to sign up for, to register for", "I'm signing up for the course."], "sich informieren|über": ["to find out about, to get information on", "I'm finding out about the costs."], "sich erkundigen|nach": ["to ask about, to inquire about", "He's asking about the opening hours."], "sich streiten|mit": ["to argue with", "He often argues with his brother."], "sich verlieben|in": ["to fall in love with", "She fell in love with him."], "sich wundern|über": ["to be surprised at", "His reaction surprises me."], "sich aufregen|über": ["to get worked up about", "Don't get worked up about him!"], "lachen|über": ["to laugh at/about", "We laughed at the joke."], "nachdenken|über": ["to think about, to think over", "I'm thinking about your offer."], "diskutieren|über": ["to discuss, to debate", "We're discussing the future."], "berichten|über": ["to report on", "The newspaper is reporting on the accident."], "schreiben|an": ["to write to", "I'm writing a letter to the authorities."], "erzählen|von": ["to tell about, to talk about", "Tell me about your trip!"], "hören|von": ["to hear from", "I haven't heard from him in a long time."], "sich verabschieden|von": ["to say goodbye to", "We're saying goodbye to the guests."], "sich erholen|von": ["to recover from", "I need to recover from the stress."], "leiden|an": ["to suffer from (an illness)", "He suffers from an allergy."], "leiden|unter": ["to suffer from (a situation)", "Many people are suffering from the heat."], "arbeiten|an": ["to work on", "I'm working on a project."], "sterben|an": ["to die of", "He died of the flu."], "sich beteiligen|an": ["to take part in, to contribute to", "Everyone contributes to the costs."], "erkennen|an": ["to recognize by", "I recognize him by his voice."], "sich wenden|an": ["to turn to, to contact", "Please contact customer service."], "sich halten|an": ["to stick to, to follow (a rule)", "Please follow the rules."], "reagieren|auf": ["to react to", "How did he react to the news?"], "antworten|auf": ["to reply to, to answer", "Please reply to my email."], "hoffen|auf": ["to hope for", "We're hoping for good weather."], "aufpassen|auf": ["to look after, to watch out for", "Can you look after the children?"], "ankommen|auf": ["to depend on (es kommt auf … an)", "It depends on the situation."], "sich einsetzen|für": ["to stand up for, to campaign for", "She campaigns for the environment."], "danken|für": ["to thank for", "Thanks for the invitation!"], "ausgeben|für": ["to spend on", "How much do you spend on rent?"], "kämpfen|gegen": ["to fight against", "We're fighting against climate change."], "protestieren|gegen": ["to protest against", "Many people are protesting against the new law."], "sich verstehen|mit": ["to get along with", "I get along well with my coworkers."], "rechnen|mit": ["to expect, to count on", "I didn't expect so much traffic."], "vergleichen|mit": ["to compare to/with", "Don't compare yourself to others!"], "umgehen|mit": ["to know how to handle, to deal with", "He's good with children."], "sich auskennen|mit": ["to know about, to be familiar with", "Do you know much about computers?"], "suchen|nach": ["to look for", "I'm looking for my key."], "riechen|nach": ["to smell of/like", "It smells like coffee here."], "sich sehnen|nach": ["to long for", "I miss the sun."], "schützen|vor": ["to protect from", "The cream protects against the sun."], "warnen|vor": ["to warn about/against", "They're warning people about the storm."], "passen|zu": ["to go well with, to suit", "That color looks good on you."], "beitragen|zu": ["to contribute to", "Everyone can contribute to protecting the environment."], "leben|von": ["to live on", "He lives on his pension."], "sich trennen|von": ["to separate from, to break up with", "She broke up with her boyfriend."], "handeln|von": ["to be about (a book, a movie)", "The movie is about a family."], "gehen|um": ["to be about (es geht um …)", "The letter is about the rent."], "sich handeln|um": ["to be a matter of (es handelt sich um …)", "It's a misunderstanding."], "sich bemühen|um": ["to strive for, to try to get", "I'm trying to find a solution."], "die Angst|vor": ["fear of", "His fear of dogs is great."], "das Interesse|an": ["interest in", "She has a great interest in music."], "die Lust|auf": ["the desire for, feeling like", "I don't feel like going to the cinema."], "die Freude|an": ["enjoyment of (an activity)", "He gets a lot of enjoyment from his work."], "die Freude|über": ["joy about (now or in the past)", "The joy about the present was great."], "die Hoffnung|auf": ["hope for", "We have hope for better weather."], "die Antwort|auf": ["the answer to", "Do you have an answer to my question?"], "die Frage|nach": ["the question of", "The question of the price is important."], "die Bitte|um": ["the request for", "His request for help came too late."], "der Grund|für": ["the reason for", "What is the reason for the delay?"], "die Lösung|für": ["the solution to", "We are looking for a solution to the problem."], "die Erinnerung|an": ["the memory of", "I have fond memories of my childhood."], "der Wunsch|nach": ["the wish for", "Many people have a wish for more peace and quiet."], "die Beziehung|zu": ["the relationship with", "He has a good relationship with his sister."], "die Einladung|zu": ["the invitation to", "Thanks for the invitation to dinner."], "die Suche|nach": ["the search for", "The search for a flat is hard."], "das Gespräch|über": ["the conversation about", "The conversation about the rent is taking a long time."], "die Sorge|um": ["worry about", "Worry about her mother keeps her awake."], "die Teilnahme|an": ["participation in", "Participation in the course is free."], "die Voraussetzung|für": ["the requirement for", "Good German is a requirement for the job."], "der Streit|mit": ["the argument with", "The argument with the neighbour is over."], "stolz|auf": ["proud of", "I am proud of my daughter."], "zufrieden|mit": ["satisfied with", "We are satisfied with the new flat."], "abhängig|von": ["dependent on", "The price is dependent on the size."], "interessiert|an": ["interested in", "She is very interested in the course."], "verheiratet|mit": ["married to", "He is married to a doctor."], "verliebt|in": ["in love with", "She is in love with her colleague."], "böse|auf": ["angry with", "Are you still angry with me?"], "fertig|mit": ["finished with", "I'll be finished with the work soon."], "bekannt|für": ["known for", "The town is known for its beer."], "gespannt|auf": ["curious to see, looking forward to", "I can't wait to see the new film."], "neugierig|auf": ["curious about", "The children are curious about the present."], "bereit|zu": ["ready for", "I am ready for a talk."], "froh|über": ["glad about", "I am glad about your help."], "traurig|über": ["sad about", "She is sad about the news."], "zuständig|für": ["responsible for", "Who is responsible for the heating?"], "überzeugt|von": ["convinced of", "I am convinced of the idea."], "freundlich|zu": ["kind to", "The neighbours are always kind to us."]}}, "es": {"w": {"Hallo!": "¡Hola!", "Guten Morgen!": "¡Buenos días! (por la mañana)", "Guten Tag!": "¡Buenos días! / ¡Buenas tardes! (durante el día)", "Guten Abend!": "¡Buenas tardes! / ¡Buenas noches! (saludo al anochecer)", "Gute Nacht!": "¡Buenas noches! (al irse a dormir)", "Tschüss!": "¡Chao! / ¡Adiós! (al despedirse, informal)", "Auf Wiedersehen!": "¡Adiós! / ¡Hasta la vista! (formal)", "Bis später!": "¡Hasta luego!", "Bis morgen!": "¡Hasta mañana!", "Wie geht's?": "¿Qué tal?", "Mir geht es gut, danke.": "Estoy bien, gracias.", "Danke schön!": "¡Muchas gracias!", "Bitte schön!": "¡No hay de qué! / ¡Aquí tiene!", "Gern geschehen.": "Con mucho gusto. (de nada)", "Entschuldigung!": "¡Disculpe! / ¡Perdón!", "Es tut mir leid.": "Lo siento.", "ja": "sí", "nein": "no", "doch": "sí (tras una pregunta negativa)", "bitte": "por favor", "Ich verstehe nicht.": "No entiendo.", "Können Sie das wiederholen?": "¿Puede repetirlo?", "Sprechen Sie bitte langsamer.": "Hable más despacio, por favor.", "Wie heißen Sie?": "¿Cómo se llama usted?", "Ich heiße …": "Me llamo …", "Woher kommen Sie?": "¿De dónde es usted?", "Ich komme aus Frankreich.": "Soy de Francia.", "Freut mich!": "¡Encantado(a)!", "Wie sagt man das auf Deutsch?": "¿Cómo se dice esto en alemán?", "Was bedeutet das?": "¿Qué significa eso?", "Kein Problem.": "No hay problema.", "Alles klar!": "¡De acuerdo! / ¡Entendido!", "Viel Glück!": "¡Buena suerte!", "Schönes Wochenende!": "¡Buen fin de semana!", "Herzlich willkommen!": "¡Bienvenido(a)!", "Prost!": "¡Salud! (al brindar)", "Guten Appetit!": "¡Buen provecho!", "der Tag": "el día", "die Woche": "la semana", "der Monat": "el mes", "das Jahr": "el año", "die Stunde": "la hora (duración)", "die Minute": "el minuto", "die Uhr": "el reloj; las … (la hora)", "der Morgen": "la mañana (primeras horas)", "der Vormittag": "la mañana (hasta el mediodía)", "der Mittag": "el mediodía", "der Nachmittag": "la tarde", "der Abend": "la tarde-noche (al anochecer)", "die Nacht": "la noche", "der Montag": "lunes", "der Dienstag": "martes", "der Mittwoch": "miércoles", "der Donnerstag": "jueves", "der Freitag": "viernes", "der Samstag": "sábado", "der Sonntag": "domingo", "das Wochenende": "el fin de semana", "der Januar": "enero", "der Februar": "febrero", "der März": "marzo", "der April": "abril", "der Mai": "mayo", "der Juni": "junio", "der Juli": "julio", "der August": "agosto", "der September": "septiembre", "der Oktober": "octubre", "der November": "noviembre", "der Dezember": "diciembre", "der Frühling": "la primavera", "der Sommer": "el verano", "der Herbst": "el otoño", "der Winter": "el invierno", "der Termin": "la cita", "der Feiertag": "el día festivo", "der Geburtstag": "el cumpleaños", "heute": "hoy", "morgen": "mañana (el día siguiente)", "gestern": "ayer", "übermorgen": "pasado mañana", "jetzt": "ahora", "bald": "pronto", "später": "más tarde", "immer": "siempre", "oft": "a menudo", "manchmal": "a veces", "nie": "nunca", "Wie spät ist es?": "¿Qué hora es?", "Es ist halb drei.": "Son las dos y media.", "null": "cero", "eins": "uno", "zwei": "dos", "drei": "tres", "vier": "cuatro", "fünf": "cinco", "sechs": "seis", "sieben": "siete", "acht": "ocho", "neun": "nueve", "zehn": "diez", "elf": "once", "zwölf": "doce", "dreizehn": "trece", "sechzehn": "dieciséis", "siebzehn": "diecisiete", "zwanzig": "veinte", "einundzwanzig": "veintiuno", "dreißig": "treinta", "vierzig": "cuarenta", "fünfzig": "cincuenta", "sechzig": "sesenta", "siebzig": "setenta", "achtzig": "ochenta", "neunzig": "noventa", "hundert": "cien", "tausend": "mil", "die Million": "el millón", "die Zahl": "el número", "die Hälfte": "la mitad", "das Viertel": "el cuarto", "erste": "primero", "zweite": "segundo", "dritte": "tercero", "die Familie": "la familia", "die Eltern": "los padres", "die Mutter": "la madre", "der Vater": "el padre", "das Kind": "el niño (la criatura)", "der Sohn": "el hijo", "die Tochter": "la hija", "der Bruder": "el hermano", "die Schwester": "la hermana", "die Geschwister": "los hermanos (hermanos y hermanas)", "die Großeltern": "los abuelos", "die Oma": "la abuelita", "der Opa": "el abuelito", "der Onkel": "el tío", "die Tante": "la tía", "der Mann": "el hombre; el marido", "die Frau": "la mujer; señora (tratamiento)", "der Freund": "el amigo; el novio", "die Freundin": "la amiga; la novia", "der Nachbar": "el vecino", "die Nachbarin": "la vecina", "das Baby": "el bebé", "der Junge": "el chico (varón)", "das Mädchen": "la chica, la niña", "die Leute": "la gente", "der Hund": "el perro", "die Katze": "el gato", "verheiratet": "casado(a)", "ledig": "soltero(a)", "geschieden": "divorciado(a)", "heiraten": "casarse", "besuchen": "visitar (a alguien)", "die Wohnung": "el apartamento, el piso (vivienda)", "das Haus": "la casa", "das Zimmer": "la habitación, el cuarto", "die Küche": "la cocina", "das Bad": "el cuarto de baño", "das Schlafzimmer": "el dormitorio", "das Wohnzimmer": "el salón, la sala de estar", "der Flur": "el pasillo, la entrada", "der Balkon": "el balcón", "der Keller": "el sótano", "die Toilette": "el inodoro, el baño (WC)", "die Tür": "la puerta", "das Fenster": "la ventana", "die Treppe": "la escalera", "das Stockwerk": "la planta, el piso (nivel)", "der Aufzug": "el ascensor", "der Schlüssel": "la llave", "die Miete": "el alquiler", "die Nebenkosten": "los gastos adicionales (agua, calefacción…)", "der Vermieter": "el propietario (arrendador)", "der Mieter": "el inquilino", "die Kaution": "la fianza", "der Mietvertrag": "el contrato de alquiler", "das Bett": "la cama", "der Tisch": "la mesa", "der Stuhl": "la silla", "der Schrank": "el armario", "das Sofa": "el sofá", "die Lampe": "la lámpara", "der Kühlschrank": "el frigorífico, la nevera", "die Waschmaschine": "la lavadora", "die Heizung": "la calefacción", "der Müll": "la basura", "die Mülltonne": "el cubo de basura (contenedor)", "der Briefkasten": "el buzón", "umziehen": "mudarse", "mieten": "alquilar (como inquilino)", "putzen": "limpiar", "lüften": "ventilar, airear", "gemütlich": "acogedor", "das Essen": "la comida", "das Frühstück": "el desayuno", "das Mittagessen": "el almuerzo", "das Abendessen": "la cena", "das Brot": "el pan", "das Brötchen": "el panecillo", "die Butter": "la mantequilla", "der Käse": "el queso", "die Wurst": "la salchicha, el embutido", "das Fleisch": "la carne", "das Hähnchen": "el pollo", "der Fisch": "el pescado", "das Ei": "el huevo", "die Milch": "la leche", "der Joghurt": "el yogur", "das Gemüse": "las verduras", "das Obst": "la fruta", "der Apfel": "la manzana", "die Banane": "el plátano, la banana", "die Kartoffel": "la patata, la papa", "die Tomate": "el tomate", "die Zwiebel": "la cebolla", "der Salat": "la ensalada; la lechuga", "der Reis": "el arroz", "die Nudeln": "la pasta", "das Salz": "la sal", "der Pfeffer": "la pimienta", "der Zucker": "el azúcar", "der Kuchen": "el pastel, la tarta", "das Wasser": "el agua", "der Saft": "el zumo, el jugo", "der Kaffee": "el café (bebida)", "der Tee": "el té", "das Bier": "la cerveza", "der Wein": "el vino", "der Topf": "la olla", "die Pfanne": "la sartén", "der Teller": "el plato (vajilla)", "die Tasse": "la taza", "das Glas": "el vaso", "das Messer": "el cuchillo", "die Gabel": "el tenedor", "der Löffel": "la cuchara", "kochen": "cocinar; hervir", "lecker": "rico, delicioso", "Ich habe Hunger.": "Tengo hambre.", "Ich habe Durst.": "Tengo sed.", "der Supermarkt": "el supermercado", "die Bäckerei": "la panadería", "die Metzgerei": "la carnicería", "die Apotheke": "la farmacia", "die Drogerie": "la droguería (higiene, limpieza)", "der Markt": "el mercado", "das Geschäft": "la tienda", "die Kasse": "la caja", "der Kassenbon": "el tique de caja", "die Tüte": "la bolsa", "der Einkaufswagen": "el carrito de la compra", "das Pfand": "el depósito (por envase)", "die Flasche": "la botella", "die Dose": "la lata (de conserva o de bebida)", "die Packung": "el paquete, el envase", "das Kilo": "el kilo", "das Gramm": "el gramo", "der Preis": "el precio", "das Angebot": "la oferta, la promoción", "das Bargeld": "el dinero en efectivo", "die Karte": "la tarjeta", "der Euro": "el euro", "der Cent": "el céntimo", "kaufen": "comprar", "einkaufen": "hacer la compra", "bezahlen": "pagar", "kosten": "costar", "billig": "barato", "teuer": "caro", "günstig": "económico, a buen precio", "geöffnet": "abierto", "geschlossen": "cerrado", "Wie viel kostet das?": "¿Cuánto cuesta?", "Kann ich mit Karte zahlen?": "¿Puedo pagar con tarjeta?", "Brauchen Sie eine Tüte?": "¿Quiere una bolsa?", "Ich schaue nur.": "Solo estoy mirando.", "das Restaurant": "el restaurante", "das Café": "la cafetería (el local)", "die Kneipe": "el bar, la taberna", "die Speisekarte": "la carta (de platos), el menú", "die Rechnung": "la cuenta; la factura", "das Trinkgeld": "la propina", "der Kellner": "el camarero, el mesero", "die Kellnerin": "la camarera, la mesera", "die Vorspeise": "el entrante, la entrada", "das Hauptgericht": "el plato principal", "die Nachspeise": "el postre", "die Suppe": "la sopa", "das Getränk": "la bebida", "bestellen": "pedir (en un restaurante), encargar", "reservieren": "reservar", "vegetarisch": "vegetariano", "scharf": "picante", "Die Karte, bitte.": "La carta, por favor.", "Ich hätte gern einen Kaffee.": "Quisiera un café.", "Die Rechnung, bitte.": "La cuenta, por favor.", "Zusammen oder getrennt?": "¿Juntos o por separado?", "Stimmt so.": "Quédese con el cambio.", "Ist hier noch frei?": "¿Está libre este sitio?", "Einen Tisch für zwei, bitte.": "Una mesa para dos, por favor.", "Was empfehlen Sie?": "¿Qué me recomienda?", "der Bahnhof": "la estación de tren", "der Zug": "el tren", "der Bus": "el autobús", "die Straßenbahn": "el tranvía", "die U-Bahn": "el metro", "die S-Bahn": "el tren de cercanías", "die Haltestelle": "la parada", "das Gleis": "la vía (el andén)", "die Fahrkarte": "el billete, el boleto", "der Fahrplan": "el horario", "die Verspätung": "el retraso", "das Auto": "el coche, el auto", "das Fahrrad": "la bicicleta", "der Flughafen": "el aeropuerto", "die Straße": "la calle", "die Ampel": "el semáforo", "die Kreuzung": "el cruce", "die Ecke": "la esquina", "der Platz": "la plaza", "die Brücke": "el puente", "die Stadt": "la ciudad", "das Dorf": "el pueblo", "die Innenstadt": "el centro de la ciudad", "die Kirche": "la iglesia", "der Park": "el parque", "die Post": "la oficina de correos", "der Führerschein": "el permiso de conducir, la licencia de conducir", "fahren": "ir (en vehículo), conducir", "umsteigen": "hacer transbordo (cambiar de tren, de línea)", "einsteigen": "subir (a un vehículo)", "aussteigen": "bajar (de un vehículo)", "links": "a la izquierda", "rechts": "a la derecha", "geradeaus": "todo recto", "weit": "lejos", "in der Nähe": "cerca", "Wo ist die Haltestelle?": "¿Dónde está la parada?", "Wie komme ich zum Bahnhof?": "¿Cómo llego a la estación?", "hin und zurück": "ida y vuelta", "Nächster Halt": "Próxima parada", "die Arbeit": "el trabajo", "der Job": "el empleo (coloquial)", "der Beruf": "la profesión, el oficio", "die Stelle": "el puesto (de trabajo)", "die Firma": "la empresa", "das Büro": "la oficina", "der Chef": "el jefe", "die Chefin": "la jefa", "der Kollege": "el compañero de trabajo", "die Kollegin": "la compañera de trabajo", "das Gehalt": "el sueldo", "der Vertrag": "el contrato", "die Bewerbung": "la candidatura, la solicitud de empleo", "der Lebenslauf": "el currículum (CV)", "das Vorstellungsgespräch": "la entrevista de trabajo", "die Besprechung": "la reunión", "der Urlaub": "las vacaciones", "die Pause": "la pausa, el descanso", "die Überstunde": "la hora extra", "der Feierabend": "el final de la jornada laboral", "der Computer": "el ordenador, la computadora", "die E-Mail": "el correo electrónico", "das Handy": "el móvil, el celular", "die Aufgabe": "la tarea", "arbeiten": "trabajar", "verdienen": "ganar (dinero)", "sich bewerben": "presentar una candidatura, postularse", "kündigen": "dimitir, renunciar; rescindir (un contrato)", "pünktlich": "puntual", "krankgeschrieben": "de baja médica", "Schönen Feierabend!": "¡Que disfrutes el final de la jornada!", "der Körper": "el cuerpo", "der Kopf": "la cabeza", "das Auge": "el ojo", "das Ohr": "la oreja", "die Nase": "la nariz", "der Mund": "la boca", "der Zahn": "el diente", "der Hals": "el cuello; la garganta", "der Arm": "el brazo", "die Hand": "la mano", "der Finger": "el dedo", "der Bauch": "el vientre, la barriga", "der Rücken": "la espalda", "das Bein": "la pierna", "der Fuß": "el pie", "das Herz": "el corazón", "der Arzt": "el médico", "die Ärztin": "la médica, la doctora", "die Praxis": "la consulta (médica)", "das Krankenhaus": "el hospital", "die Notaufnahme": "urgencias", "das Medikament": "el medicamento", "das Rezept": "la receta médica; la receta de cocina", "die Krankenkasse": "la aseguradora de salud (seguro médico)", "die Versichertenkarte": "la tarjeta sanitaria (del seguro médico)", "die Krankmeldung": "la baja médica (el certificado)", "das Fieber": "la fiebre", "die Erkältung": "el resfriado", "der Husten": "la tos", "die Schmerzen": "los dolores", "krank": "enfermo", "gesund": "sano", "müde": "cansado", "Ich habe Kopfschmerzen.": "Me duele la cabeza.", "Mir ist schlecht.": "Tengo náuseas.", "Ich brauche einen Termin.": "Necesito una cita.", "Gute Besserung!": "¡Que te mejores!", "das Amt": "la administración (el organismo)", "das Bürgeramt": "la oficina de atención ciudadana (≈ ayuntamiento)", "die Anmeldung": "el empadronamiento (registro de domicilio); la inscripción", "die Behörde": "la autoridad administrativa", "das Formular": "el formulario", "der Antrag": "la solicitud (oficial)", "der Ausweis": "el documento de identidad", "der Reisepass": "el pasaporte", "die Adresse": "la dirección", "die Unterschrift": "la firma", "die Staatsangehörigkeit": "la nacionalidad", "der Wohnsitz": "el domicilio", "die Steuer": "el impuesto", "die Steuernummer": "el número de identificación fiscal", "die Versicherung": "el seguro", "die Bank": "el banco", "das Konto": "la cuenta (bancaria)", "die Überweisung": "la transferencia", "der Geldautomat": "el cajero automático", "das Geld": "el dinero", "der Brief": "la carta (correo)", "das Paket": "el paquete (envío postal)", "die Frist": "el plazo", "die Gebühr": "la tasa, los gastos", "der Rundfunkbeitrag": "la tasa de radio y televisión", "ausfüllen": "rellenar (un formulario)", "unterschreiben": "firmar", "sich anmelden": "inscribirse; empadronarse (registrar el domicilio)", "beantragen": "solicitar oficialmente", "überweisen": "transferir (dinero)", "die Kleidung": "la ropa", "die Hose": "el pantalón", "das Hemd": "la camisa", "das T-Shirt": "la camiseta", "der Pullover": "el jersey, el suéter", "die Jacke": "la chaqueta", "der Mantel": "el abrigo", "das Kleid": "el vestido", "der Rock": "la falda", "der Schuh": "el zapato", "die Socke": "el calcetín", "die Mütze": "el gorro", "der Schal": "la bufanda", "der Regenschirm": "el paraguas", "die Tasche": "el bolso; el bolsillo", "die Größe": "la talla", "die Umkleidekabine": "el probador", "anziehen": "ponerse (una prenda)", "anprobieren": "probarse (una prenda)", "passen": "quedar bien (de talla)", "eng": "ajustado, estrecho", "bequem": "cómodo", "das Wetter": "el tiempo (meteorológico)", "die Sonne": "el sol", "der Regen": "la lluvia", "der Schnee": "la nieve", "der Wind": "el viento", "die Wolke": "la nube", "das Gewitter": "la tormenta", "die Temperatur": "la temperatura", "sonnig": "soleado", "bewölkt": "nublado", "Es regnet.": "Llueve.", "Es ist kalt.": "Hace frío.", "Es ist warm.": "Hace calor.", "die Freizeit": "el tiempo libre, el ocio", "das Hobby": "el pasatiempo, la afición", "der Sport": "el deporte", "das Kino": "el cine", "der Film": "la película", "das Buch": "el libro", "die Musik": "la música", "das Konzert": "el concierto", "das Museum": "el museo", "der Ausflug": "la excursión", "die Reise": "el viaje", "das Schwimmbad": "la piscina", "der Verein": "la asociación, el club", "das Spiel": "el juego; el partido", "spazieren gehen": "pasear, dar un paseo", "schwimmen": "nadar", "wandern": "hacer senderismo", "sich treffen": "quedar, reunirse (con alguien)", "Hast du Lust?": "¿Te apetece?", "sein": "ser, estar", "haben": "tener; haber", "werden": "llegar a ser, volverse", "können": "poder, saber hacer", "müssen": "tener que, deber (obligación)", "wollen": "querer", "dürfen": "tener permiso para, poder (permiso)", "sollen": "deber (consigna, consejo)", "mögen": "apreciar, tener simpatía por", "gehen": "ir (a pie)", "kommen": "venir", "machen": "hacer", "sagen": "decir", "sprechen": "hablar", "fragen": "preguntar", "antworten": "responder", "wissen": "saber", "kennen": "conocer", "verstehen": "entender, comprender", "sehen": "ver", "hören": "oír, escuchar", "lesen": "leer", "schreiben": "escribir", "essen": "comer", "trinken": "beber", "schlafen": "dormir", "wohnen": "vivir (residir en un lugar)", "leben": "vivir (existir)", "geben": "dar", "nehmen": "tomar", "bringen": "traer, llevar", "mitbringen": "traer (consigo)", "finden": "encontrar", "suchen": "buscar", "brauchen": "necesitar", "helfen": "ayudar", "warten": "esperar", "bleiben": "quedarse, permanecer", "lernen": "aprender", "gefallen": "gustar, agradar", "glauben": "creer", "denken": "pensar", "öffnen": "abrir", "schließen": "cerrar", "anfangen": "empezar", "aufhören": "dejar de, parar", "aufstehen": "levantarse", "anrufen": "llamar por teléfono (a alguien)", "vergessen": "olvidar", "zeigen": "mostrar, enseñar", "verlieren": "perder", "liegen": "estar tumbado, estar (en posición horizontal)", "sitzen": "estar sentado", "stehen": "estar de pie, estar (en posición vertical)", "laufen": "correr, andar", "tragen": "llevar, cargar; llevar puesto", "groß": "grande", "klein": "pequeño", "alt": "viejo, mayor", "neu": "nuevo", "jung": "joven", "gut": "bueno, bien", "schlecht": "malo, mal", "schön": "bonito, hermoso", "hässlich": "feo", "lang": "largo", "kurz": "corto", "schnell": "rápido", "langsam": "lento", "heiß": "ardiente, muy caliente", "kalt": "frío", "warm": "cálido, caliente", "voll": "lleno", "leer": "vacío", "leicht": "ligero; fácil", "schwer": "pesado; difícil", "einfach": "sencillo, simple", "schwierig": "difícil", "richtig": "correcto", "falsch": "falso, incorrecto", "wichtig": "importante", "laut": "ruidoso, fuerte (sonido)", "leise": "silencioso, en voz baja", "sauber": "limpio", "schmutzig": "sucio", "früh": "temprano", "spät": "tarde", "nah": "cercano", "freundlich": "amable", "nett": "simpático", "glücklich": "feliz", "traurig": "triste", "froh": "contento", "böse": "malvado; enfadado", "fertig": "listo; terminado", "frei": "libre", "besetzt": "ocupado", "kaputt": "roto, estropeado", "sicher": "seguro", "wer?": "¿quién?", "was?": "¿qué?", "wo?": "¿dónde?", "wohin?": "¿adónde? (dirección)", "woher?": "¿de dónde?", "wann?": "¿cuándo?", "warum?": "¿por qué?", "wie?": "¿cómo?", "wie viel?": "¿cuánto?", "welcher?": "¿cuál?", "und": "y", "oder": "o", "aber": "pero", "weil": "porque", "dass": "que (conjunción)", "wenn": "si; cuando", "also": "entonces, así que", "auch": "también", "noch": "todavía, aún", "schon": "ya", "nur": "solo, solamente", "sehr": "muy", "ziemlich": "bastante (más bien)", "vielleicht": "quizás, tal vez", "zusammen": "juntos", "allein": "solo (sin compañía)", "hier": "aquí", "dort": "allí", "alles": "todo", "nichts": "nada", "etwas": "algo", "jemand": "alguien", "niemand": "nadie", "viel": "mucho", "wenig": "poco", "genug": "suficiente (lo necesario)", "die Arbeitsbedingungen": "las condiciones de trabajo", "der Arbeitgeber": "el empleador", "der Arbeitnehmer": "el trabajador asalariado", "die Kündigungsfrist": "el plazo de preaviso", "die Probezeit": "el periodo de prueba", "die Gehaltserhöhung": "el aumento de sueldo", "die Beförderung": "el ascenso", "die Weiterbildung": "la formación continua", "die Fähigkeit": "la capacidad, la habilidad", "die Erfahrung": "la experiencia", "die Verantwortung": "la responsabilidad", "die Leistung": "el rendimiento; la prestación", "der Umsatz": "la facturación, el volumen de negocios", "der Gewinn": "el beneficio, la ganancia", "der Verlust": "la pérdida", "die Abteilung": "el departamento, la sección", "die Geschäftsführung": "la dirección, la gerencia", "der Betriebsrat": "el comité de empresa", "die Gewerkschaft": "el sindicato", "der Streik": "la huelga", "die Teilzeit": "la jornada parcial", "die Vollzeit": "la jornada completa", "das Homeoffice": "el teletrabajo", "die Arbeitslosigkeit": "el desempleo, el paro", "die Agentur für Arbeit": "la agencia de empleo (servicio público de empleo)", "der Auftrag": "el pedido, el encargo", "verhandeln": "negociar", "sich weiterbilden": "formarse (de forma continua)", "befördern": "ascender (a alguien)", "einstellen": "contratar", "entlassen": "despedir", "leiten": "dirigir", "selbstständig": "autónomo, por cuenta propia", "befristet": "de duración determinada (temporal)", "unbefristet": "indefinido", "der Anspruch": "el derecho (a), la reivindicación", "die Bescheinigung": "el certificado", "der Bescheid": "la resolución oficial, la notificación", "der Widerspruch": "el recurso; la contradicción", "die Vollmacht": "el poder (de representación)", "die Genehmigung": "el permiso, la autorización", "die Aufenthaltserlaubnis": "el permiso de residencia", "die Voraussetzung": "el requisito previo", "die Bedingung": "la condición", "die Kündigung": "la rescisión; el despido", "die Mahnung": "el requerimiento de pago (recordatorio)", "der Rechtsanwalt": "el abogado", "das Gericht": "el tribunal; el plato (de cocina)", "das Gesetz": "la ley", "die Vorschrift": "la norma, la prescripción", "die Haftpflichtversicherung": "el seguro de responsabilidad civil", "der Schaden": "el daño", "die Steuererklärung": "la declaración de impuestos", "der Beitrag": "la cuota; la contribución", "die Rente": "la jubilación (pensión)", "das Kindergeld": "la prestación por hijos (ayuda familiar)", "das Bürgergeld": "la renta mínima (prestación social básica)", "die Unterlagen": "los documentos, la documentación", "der Nachweis": "el justificante, el comprobante", "einreichen": "presentar (un expediente)", "verlängern": "prolongar, prorrogar", "Widerspruch einlegen": "presentar un recurso", "genehmigen": "autorizar", "nachweisen": "demostrar, justificar", "haften": "ser responsable (legalmente)", "gültig": "válido", "fristgerecht": "dentro del plazo", "verpflichtet": "obligado", "zuständig": "competente, responsable (de)", "die Beschwerden": "las molestias, los males", "die Untersuchung": "el examen médico", "die Behandlung": "el tratamiento", "die Diagnose": "el diagnóstico", "der Facharzt": "el médico especialista", "der Hausarzt": "el médico de cabecera", "die Nebenwirkung": "el efecto secundario", "die Impfung": "la vacunación", "die Allergie": "la alergia", "die Verletzung": "la herida, la lesión", "die Entzündung": "la inflamación", "der Blutdruck": "la tensión arterial, la presión arterial", "die Ernährung": "la alimentación", "die Bewegung": "el movimiento; la actividad física", "der Stress": "el estrés", "die Erschöpfung": "el agotamiento", "die Sucht": "la adicción, la dependencia", "die Vorsorge": "la prevención (médica)", "sich erholen": "descansar, recuperarse", "sich verletzen": "herirse, lesionarse", "behandeln": "tratar, curar", "untersuchen": "examinar", "verschreiben": "recetar", "leiden an": "sufrir de, padecer (+ Dat.)", "vorbeugen": "prevenir (+ Dat.)", "ansteckend": "contagioso", "chronisch": "crónico", "erschöpft": "agotado", "schwanger": "embarazada", "rezeptpflichtig": "con receta médica", "die Gesellschaft": "la sociedad", "die Regierung": "el gobierno", "die Wahl": "las elecciones (votación); la elección (opción)", "die Partei": "el partido (político)", "der Bundestag": "el Parlamento federal", "der Bundeskanzler": "el canciller federal", "die Demokratie": "la democracia", "die Meinung": "la opinión", "die Freiheit": "la libertad", "die Gleichberechtigung": "la igualdad de derechos", "die Integration": "la integración", "die Einwanderung": "la inmigración", "die Armut": "la pobreza", "der Wohlstand": "la prosperidad, el bienestar", "die Ungleichheit": "la desigualdad", "die Bildung": "la educación, la formación", "die Nachricht": "la noticia, la información", "die Zeitung": "el periódico", "die Sendung": "el programa (de radio o televisión)", "der Bericht": "el informe, el reportaje", "die Umfrage": "la encuesta", "die Krise": "la crisis", "die Entwicklung": "el desarrollo, la evolución", "die Herausforderung": "el desafío, el reto", "der Bürger": "el ciudadano", "wählen": "votar; elegir", "abstimmen": "votar (sobre una cuestión)", "berichten": "informar, hacer un reportaje", "fordern": "exigir, reclamar", "sich engagieren": "comprometerse, implicarse", "kritisieren": "criticar", "gesellschaftlich": "social, de la sociedad", "politisch": "político", "umstritten": "controvertido, polémico", "aktuell": "actual", "die Umwelt": "el medio ambiente", "der Klimawandel": "el cambio climático", "der Umweltschutz": "la protección del medio ambiente", "die Energie": "la energía", "der Strom": "la electricidad; la corriente", "der Verbrauch": "el consumo", "die Nachhaltigkeit": "la sostenibilidad", "die Verschmutzung": "la contaminación", "die Abgase": "los gases de escape", "der Abfall": "el residuo, el desecho", "die Mülltrennung": "la separación de residuos", "der Gelbe Sack": "la bolsa amarilla (envases)", "das Altglas": "el vidrio para reciclar", "die Solaranlage": "la instalación solar", "die Windkraft": "la energía eólica", "das Kraftwerk": "la central eléctrica", "die Ressource": "el recurso", "die Überschwemmung": "la inundación", "die Dürre": "la sequía", "verschwenden": "desperdiciar, derrochar", "sparen": "ahorrar", "recyceln": "reciclar", "schützen": "proteger", "vermeiden": "evitar", "verbrauchen": "consumir", "nachhaltig": "sostenible", "umweltfreundlich": "ecológico, respetuoso con el medio ambiente", "erneuerbar": "renovable", "klimaneutral": "neutro en carbono", "das Gefühl": "el sentimiento", "die Beziehung": "la relación", "das Vertrauen": "la confianza", "die Eifersucht": "los celos", "die Enttäuschung": "la decepción", "die Sehnsucht": "el anhelo, la nostalgia", "die Geduld": "la paciencia", "der Streit": "la pelea, la discusión", "die Versöhnung": "la reconciliación", "das Missverständnis": "el malentendido", "die Rücksicht": "la consideración (hacia los demás)", "der Eindruck": "la impresión", "die Stimmung": "el ambiente, el estado de ánimo", "sich verlieben": "enamorarse", "sich trennen": "separarse", "sich streiten": "pelearse, discutir", "vermissen": "echar de menos, extrañar", "enttäuschen": "decepcionar", "vertrauen": "confiar en (+ Dat.)", "sich schämen": "avergonzarse, tener vergüenza", "sich aufregen": "alterarse, ponerse nervioso", "zuverlässig": "fiable, confiable", "ehrgeizig": "ambicioso", "eifersüchtig": "celoso", "geduldig": "paciente", "ungeduldig": "impaciente", "neugierig": "curioso", "schüchtern": "tímido", "selbstbewusst": "seguro de sí mismo", "großzügig": "generoso", "hilfsbereit": "servicial", "empfindlich": "sensible, susceptible", "gelassen": "sereno, tranquilo", "enttäuscht": "decepcionado", "verlegen": "cohibido, avergonzado", "meiner Meinung nach": "en mi opinión", "Ich bin der Ansicht, dass …": "Soy de la opinión de que …", "einerseits … andererseits": "por un lado … por otro", "trotzdem": "a pesar de todo, aun así", "deshalb": "por eso", "dennoch": "no obstante", "obwohl": "aunque, a pesar de que", "während": "mientras; mientras que", "sobald": "en cuanto, tan pronto como", "falls": "en caso de que", "außerdem": "además", "allerdings": "sin embargo, eso sí", "zwar … aber": "es cierto que … pero", "je … desto": "cuanto más … más", "sowohl … als auch": "tanto … como", "weder … noch": "ni … ni", "stattdessen": "en su lugar", "im Gegensatz zu": "al contrario de, a diferencia de", "im Vergleich zu": "en comparación con", "aufgrund": "debido a (+ Gen.)", "trotz": "a pesar de (+ Gen.)", "anstatt": "en vez de", "infolgedessen": "por consiguiente", "letztendlich": "al fin y al cabo", "beispielsweise": "por ejemplo", "Es kommt darauf an.": "Depende.", "Das hängt davon ab, ob …": "Eso depende de si …", "Da bin ich anderer Meinung.": "En eso no estoy de acuerdo.", "Ich stimme dir zu.": "Estoy de acuerdo contigo.", "Das stimmt zwar, aber …": "Es cierto, pero …", "Ich gebe zu, dass …": "Admito que …", "Es ist fraglich, ob …": "Es dudoso que …", "Ein Vorteil ist, dass …": "Una ventaja es que …", "Ein Nachteil ist, dass …": "Un inconveniente es que …", "sich kümmern um": "ocuparse de, atender (+ Akk.)", "sich freuen auf": "esperar con ilusión (algo futuro, + Akk.)", "sich freuen über": "alegrarse de (algo presente o pasado, + Akk.)", "sich interessieren für": "interesarse por (+ Akk.)", "sich ärgern über": "enfadarse por (+ Akk.)", "sich beschweren über": "quejarse de (+ Akk.)", "sich gewöhnen an": "acostumbrarse a (+ Akk.)", "sich erinnern an": "acordarse de (+ Akk.)", "sich bedanken für": "dar las gracias por (+ Akk.)", "sich entscheiden für": "decidirse por (+ Akk.)", "sich verlassen auf": "contar con, fiarse de (+ Akk.)", "sich bewerben um": "presentarse a, solicitar (un puesto) (+ Akk.)", "sich beschäftigen mit": "dedicarse a, trabajar en (+ Dat.)", "sich unterhalten über": "conversar sobre (+ Akk.)", "sich vorbereiten auf": "prepararse para (+ Akk.)", "sich konzentrieren auf": "concentrarse en (+ Akk.)", "sich sorgen um": "preocuparse por (+ Akk.)", "sich fürchten vor": "tener miedo de (+ Dat.)", "warten auf": "esperar (+ Akk.)", "denken an": "pensar en (+ Akk.)", "glauben an": "creer en (+ Akk.)", "teilnehmen an": "participar en (+ Dat.)", "abhängen von": "depender de (+ Dat.)", "bestehen aus": "constar de, componerse de (+ Dat.)", "träumen von": "soñar con (+ Dat.)", "bitten um": "pedir (algo) (+ Akk.)", "fragen nach": "preguntar por (alguien, el camino) (+ Dat.)", "achten auf": "prestar atención a (+ Akk.)", "gehören zu": "formar parte de (+ Dat.)", "sorgen für": "encargarse de, velar por (+ Akk.)", "führen zu": "llevar a, conducir a (+ Dat.)", "überzeugen von": "convencer de (+ Dat.)", "hinweisen auf": "llamar la atención sobre (+ Akk.)", "verzichten auf": "renunciar a (+ Akk.)", "zweifeln an": "dudar de (+ Dat.)", "offensichtlich": "obviamente, evidente", "eindeutig": "claro, inequívoco", "angeblich": "supuestamente", "anscheinend": "al parecer, aparentemente", "vermutlich": "probablemente", "ausgerechnet": "precisamente (como hecho a propósito)", "ausreichend": "suficiente", "erheblich": "considerable", "gewissermaßen": "en cierto modo", "überwiegend": "mayoritariamente", "vorübergehend": "temporal, provisional", "dauerhaft": "duradero, permanente", "umfangreich": "amplio, extenso", "anspruchsvoll": "exigente", "aufwendig": "costoso (en tiempo, en esfuerzo)", "mühsam": "penoso, laborioso", "zufällig": "por casualidad", "absichtlich": "a propósito, adrede", "rechtzeitig": "a tiempo", "ehemalig": "antiguo (ex-)", "vorhanden": "disponible, existente", "selbstverständlich": "evidentemente, por supuesto", "bisher": "hasta ahora", "inzwischen": "mientras tanto, entretanto", "ständig": "constantemente", "kaum": "apenas", "überhaupt nicht": "en absoluto", "eher": "más bien", "durchaus": "totalmente, sin duda", "keineswegs": "de ningún modo", "Ich verstehe nur Bahnhof.": "No entiendo nada. (me suena a chino)", "Das ist mir Wurst.": "Me da igual.", "Ich drücke dir die Daumen.": "Cruzo los dedos por ti.", "Schwein haben": "tener suerte", "Tomaten auf den Augen haben": "no ver lo que salta a la vista", "Ich habe die Nase voll.": "Estoy harto(a).", "ins Fettnäpfchen treten": "meter la pata", "auf dem Holzweg sein": "ir por mal camino", "den Nagel auf den Kopf treffen": "dar en el clavo", "um den heißen Brei herumreden": "andarse con rodeos", "Hals- und Beinbruch!": "¡Mucha suerte! (expresión para desear éxito)", "Da steppt der Bär.": "Va a haber mucho ambiente.", "Alles hat ein Ende, nur die Wurst hat zwei.": "Todo tiene un final.", "etwas auf die lange Bank schieben": "dejar para más tarde (aplazar)", "die Katze im Sack kaufen": "comprar a ciegas", "jemandem auf den Keks gehen": "sacar de quicio a alguien", "Das ist nicht mein Bier.": "No es asunto mío.", "Das ist mir ein Rätsel.": "Es un misterio para mí.", "unter vier Augen": "a solas, en privado", "zwei Fliegen mit einer Klappe schlagen": "matar dos pájaros de un tiro", "Lügen haben kurze Beine.": "La mentira tiene las patas cortas.", "Ende gut, alles gut.": "Bien está lo que bien acaba.", "Übung macht den Meister.": "La práctica hace al maestro."}, "ex": {"heiraten": "Mi hermana se casa este verano.", "besuchen": "El fin de semana visito a mis padres.", "umziehen": "Nos mudamos a Berlín el mes que viene.", "mieten": "Alquilé un pequeño apartamento en el centro.", "putzen": "Los sábados limpiamos todo el apartamento.", "lüften": "Ventila la habitación, por favor, hace mucho calor aquí.", "kochen": "Esta noche preparo pasta con salsa de tomate.", "kaufen": "Voy rápido a comprar pan a la panadería.", "einkaufen": "Hago las compras en el supermercado después del trabajo.", "bezahlen": "¿Puedo pagar con tarjeta aquí?", "kosten": "El billete cuesta tres euros con veinte.", "bestellen": "Pido un escalope y un agua.", "reservieren": "Quisiera reservar una mesa para cuatro personas.", "fahren": "Mañana voy a Múnich en tren.", "umsteigen": "En Fráncfort tiene que cambiar de tren.", "einsteigen": "Suba, por favor, el tren va a salir.", "aussteigen": "Me bajo en la próxima parada.", "arbeiten": "Trabajo en la oficina de lunes a viernes.", "verdienen": "Gana más que antes.", "sich bewerben": "Envié mi solicitud a tres empresas.", "kündigen": "Cancelé mi contrato de telefonía móvil.", "ausfüllen": "Complete este formulario, por favor.", "unterschreiben": "Firme aquí abajo, por favor.", "sich anmelden": "Después de una mudanza, hay que registrar el domicilio en la oficina de atención al ciudadano.", "beantragen": "Tengo que solicitar un pasaporte nuevo.", "überweisen": "Mañana te transfiero el dinero.", "anziehen": "¡Ponte una chaqueta, hace frío!", "anprobieren": "¿Puedo probarme este pantalón?", "passen": "Lamentablemente, estos zapatos no me quedan bien.", "spazieren gehen": "Después de comer, vamos a pasear por el parque.", "schwimmen": "En verano me gusta nadar en el lago.", "wandern": "El domingo hicimos senderismo en la montaña.", "sich treffen": "Nos vemos a las ocho delante del cine.", "sein": "Estoy en Alemania desde hace dos meses.", "haben": "¿Tienes tiempo esta noche?", "werden": "Está empezando a oscurecer.", "können": "¿Me puedes ayudar, por favor?", "müssen": "Mañana tengo que levantarme temprano.", "wollen": "Queremos ir a Italia el año que viene.", "dürfen": "Aquí no está permitido fumar.", "sollen": "El médico dice que debo beber más agua.", "mögen": "No me gusta el café sin leche.", "gehen": "Voy al trabajo a pie todas las mañanas.", "kommen": "¿Cuándo vuelves a casa?", "machen": "¿Qué haces este fin de semana?", "sagen": "¿Qué dijo? No lo oí.", "sprechen": "¿Habla francés?", "fragen": "Voy a preguntarle al vendedor.", "antworten": "Todavía no ha respondido a mi correo electrónico.", "wissen": "¿Sabes dónde está la oficina de correos?", "kennen": "¿Conoces un buen restaurante por aquí?", "verstehen": "Perdón, no lo entendí.", "sehen": "¿Ves la parada allí enfrente?", "hören": "Me gusta escuchar la radio durante el desayuno.", "lesen": "Lee un poco cada noche.", "schreiben": "Te escribo un mensaje más tarde.", "essen": "Cenamos a las siete.", "trinken": "¿Qué quieres beber?", "schlafen": "Anoche dormí mal.", "wohnen": "Vivo en el tercer piso.", "leben": "Vive en Hamburgo desde hace cinco años.", "geben": "¿Me pasas la sal, por favor?", "nehmen": "Tomo el autobús de las ocho y media.", "bringen": "El camarero trae la cuenta.", "mitbringen": "¿Llevo algo de comer?", "finden": "No encuentro mi llave.", "suchen": "Buscamos un apartamento más grande.", "brauchen": "Necesito una cita con el médico.", "helfen": "¿Puedo ayudarle?", "warten": "Ya llevo veinte minutos esperando.", "bleiben": "Hoy me quedo en casa.", "lernen": "Aprendo diez palabras nuevas cada día.", "gefallen": "¿Qué te parece el nuevo apartamento?", "glauben": "Creo que la tienda está cerrada hoy.", "denken": "¿Qué piensas de eso?", "öffnen": "La panadería abre a las seis.", "schließen": "Cierre la puerta, por favor.", "anfangen": "El curso empieza a las nueve.", "aufhören": "Dejó de fumar.", "aufstehen": "Me levanto todos los días a las siete.", "anrufen": "Te llamo esta noche.", "vergessen": "Olvidé mi paraguas.", "zeigen": "¿Puede mostrarme el camino en el mapa?", "verlieren": "Perdí mi monedero.", "liegen": "El teléfono está sobre la mesa.", "sitzen": "Estamos sentados en el balcón tomando café.", "stehen": "Las botellas están en el refrigerador.", "laufen": "Corro tres veces por semana en el parque.", "tragen": "Hoy lleva un vestido rojo.", "verhandeln": "Quiero negociar mi salario.", "sich weiterbilden": "Por las noches hace cursos de formación en marketing.", "befördern": "Después de dos años, lo ascendieron a jefe de equipo.", "einstellen": "La empresa contrata a diez nuevos empleados este año.", "entlassen": "Debido a la crisis, despidieron a muchos empleados.", "leiten": "Dirige el departamento desde hace tres años.", "einreichen": "Tiene que presentar los documentos antes del viernes.", "verlängern": "Tengo que renovar mi permiso de residencia.", "Widerspruch einlegen": "Puede presentar un recurso contra esta decisión en el plazo de un mes.", "genehmigen": "Mi jefe aprobó mis vacaciones.", "nachweisen": "Tiene que acreditar sus ingresos.", "haften": "Los padres son responsables de sus hijos.", "sich erholen": "Durante las vacaciones descansé bien.", "sich verletzen": "Se lesionó la rodilla jugando al fútbol.", "behandeln": "El médico trata la inflamación con antibióticos.", "untersuchen": "La médica me examina la espalda.", "verschreiben": "El médico me recetó un medicamento.", "leiden an": "Mucha gente sufre de dolor de espalda.", "vorbeugen": "Con el deporte se pueden prevenir muchas enfermedades.", "wählen": "En septiembre, los alemanes eligen un nuevo Parlamento.", "abstimmen": "Mañana el Bundestag vota la ley.", "berichten": "El periódico informa sobre la huelga.", "fordern": "El sindicato exige salarios más altos.", "sich engagieren": "Participa activamente en una asociación de ayuda a refugiados.", "kritisieren": "Muchos ciudadanos critican la nueva norma.", "verschwenden": "Desperdiciamos demasiada comida.", "sparen": "Con lámparas LED se puede ahorrar electricidad.", "recyceln": "En Alemania, el vidrio usado se recicla casi por completo.", "schützen": "Tenemos que proteger mejor la naturaleza.", "vermeiden": "Intento evitar el plástico.", "verbrauchen": "Nuestro refrigerador consume demasiada electricidad.", "sich verlieben": "Se enamoraron durante las vacaciones.", "sich trennen": "Después de diez años, se separaron.", "sich streiten": "Los vecinos discuten a menudo en voz alta.", "vermissen": "Extraño a mi familia en Francia.", "enttäuschen": "La película me decepcionó.", "vertrauen": "Confío plenamente en mi mejor amigo.", "sich schämen": "Se avergüenza de su error.", "sich aufregen": "¡No te alteres, no es tan grave!", "sich kümmern um": "¿Quién cuida al gato cuando no estamos?", "sich freuen auf": "Ya tengo muchas ganas de que lleguen las vacaciones.", "sich freuen über": "Se puso muy contenta con el regalo.", "sich interessieren für": "Me interesa la historia.", "sich ärgern über": "Le molesta el retraso.", "sich beschweren über": "Los vecinos se quejan del ruido.", "sich gewöhnen an": "Me acostumbré al clima.", "sich erinnern an": "¿Te acuerdas de nuestro primer día en Berlín?", "sich bedanken für": "Le agradezco su ayuda.", "sich entscheiden für": "Nos decidimos por el apartamento más grande.", "sich verlassen auf": "Con ella siempre se puede contar.", "sich bewerben um": "Solicito un puesto de ingeniero.", "sich beschäftigen mit": "En mi tiempo libre me dedico a la fotografía.", "sich unterhalten über": "Hablamos largo rato de política.", "sich vorbereiten auf": "Me preparo para el examen.", "sich konzentrieren auf": "¡Concéntrate en lo esencial!", "sich sorgen um": "La madre se preocupa por su hijo enfermo.", "sich fürchten vor": "El niño le tiene miedo al perro.", "warten auf": "Espero el autobús.", "denken an": "Pienso a menudo en mis amigos de París.", "glauben an": "Cree en un futuro mejor.", "teilnehmen an": "Participo en un curso de alemán.", "abhängen von": "Depende del tiempo.", "bestehen aus": "El apartamento consta de tres habitaciones.", "träumen von": "Sueña con una casa junto al mar.", "bitten um": "¿Puedo pedirle un favor?", "fragen nach": "Un turista me preguntó por el camino.", "achten auf": "¡Ten cuidado con el escalón, por favor!", "gehören zu": "Eso forma parte de mis tareas.", "sorgen für": "Los padres cuidan de sus hijos.", "führen zu": "Demasiado estrés lleva a menudo a enfermedades.", "überzeugen von": "Me convenció de su idea.", "hinweisen auf": "Quisiera señalarle un error.", "verzichten auf": "Hace un mes que prescindo del azúcar.", "zweifeln an": "Dudo de su honestidad."}, "ph": {"Ich möchte einen Termin bei Dr. Weber machen.": "Quisiera pedir una cita con el Dr. Weber.", "Haben Sie diese Woche noch einen Termin frei?": "¿Tiene todavía alguna cita libre esta semana?", "Ich habe seit drei Tagen Fieber.": "Tengo fiebre desde hace tres días.", "Mir tut der Rücken weh.": "Me duele la espalda.", "Ich bin gegen Penizillin allergisch.": "Soy alérgico a la penicilina.", "Wie oft muss ich die Tabletten nehmen?": "¿Cuántas veces tengo que tomar las pastillas?", "Können Sie mich bitte krankschreiben?": "¿Puede darme un certificado de baja por enfermedad, por favor?", "Ich brauche ein Rezept für dieses Medikament.": "Necesito una receta para este medicamento.", "Hier ist meine Versichertenkarte.": "Aquí tiene mi tarjeta del seguro médico.", "Gibt es das Medikament auch ohne Rezept?": "¿Este medicamento también se vende sin receta?", "Ich weiß nicht, ob ich nüchtern kommen muss.": "No sé si tengo que venir en ayunas.", "Ich möchte meinen Wohnsitz anmelden.": "Quisiera registrar mi domicilio.", "Welche Unterlagen muss ich mitbringen?": "¿Qué documentos tengo que traer?", "Ich habe einen Termin um zehn Uhr.": "Tengo una cita a las diez.", "Können Sie mir beim Ausfüllen des Formulars helfen?": "¿Puede ayudarme a completar el formulario?", "Wo muss ich hier unterschreiben?": "¿Dónde tengo que firmar?", "Mein Aufenthaltstitel läuft nächsten Monat ab.": "Mi permiso de residencia vence el mes que viene.", "Wie lange dauert die Bearbeitung?": "¿Cuánto tarda la tramitación?", "Ich habe den Brief vom Amt nicht verstanden.": "No entendí la carta de la administración.", "Könnten Sie das bitte langsamer wiederholen?": "¿Podría repetirlo más despacio, por favor?", "Muss ich die Gebühr bar bezahlen?": "¿Tengo que pagar la tasa en efectivo?", "Ich warte schon seit einer Stunde.": "Ya llevo una hora esperando.", "Die Heizung funktioniert seit gestern nicht mehr.": "La calefacción no funciona desde ayer.", "Wann kann der Handwerker vorbeikommen?": "¿Cuándo puede pasar el técnico?", "Im Badezimmer tropft der Wasserhahn.": "En el baño gotea el grifo.", "Ist die Miete warm oder kalt?": "¿El alquiler incluye los gastos (calefacción, agua) o no?", "Ich möchte die Wohnung gern besichtigen.": "Me gustaría ver el apartamento.", "Wie hoch ist die Kaution?": "¿De cuánto es el depósito (la fianza)?", "Wir ziehen am Ersten des Monats ein.": "Nos mudamos el primero de mes.", "Ich habe meinen Schlüssel verloren.": "Perdí mi llave.", "Wo stelle ich den Müll hin?": "¿Dónde dejo la basura?", "Ich kündige die Wohnung zum Ende März.": "Rescindo el contrato de alquiler para finales de marzo.", "Wann bekomme ich die Nebenkostenabrechnung?": "¿Cuándo recibiré la liquidación de los gastos?", "Guten Tag, hier spricht Martin Dubois.": "Buenos días, le habla Martin Dubois.", "Ich rufe wegen meiner Rechnung an.": "Llamo por mi factura.", "Könnten Sie mich bitte mit Frau Schmidt verbinden?": "¿Podría comunicarme con la señora Schmidt, por favor?", "Die Verbindung ist sehr schlecht.": "La línea se oye muy mal.", "Können Sie das bitte buchstabieren?": "¿Puede deletrearlo, por favor?", "Wann kann ich sie am besten erreichen?": "¿Cuándo es más fácil localizarla?", "Ich rufe später noch einmal an.": "Volveré a llamar más tarde.", "Könnten Sie ihm sagen, dass ich angerufen habe?": "¿Podría decirle que llamé?", "Meine Nummer ist null eins sieben sechs.": "Mi número es cero uno siete seis.", "Entschuldigung, ich habe mich verwählt.": "Disculpe, me equivoqué de número.", "Wo finde ich die Milch?": "¿Dónde encuentro la leche?", "Ich hätte gern ein Kilo Äpfel.": "Quisiera un kilo de manzanas.", "Haben Sie das auch in einer anderen Größe?": "¿Lo tiene también en otra talla?", "Kann ich mit Karte bezahlen?": "¿Puedo pagar con tarjeta?", "Brauchen Sie eine Tüte?": "¿Necesita una bolsa?", "Ich möchte diese Hose umtauschen.": "Quisiera cambiar este pantalón.", "Den Kassenbon habe ich noch.": "Todavía tengo el recibo de compra.", "Das ist mir leider zu teuer.": "Lamentablemente, es demasiado caro para mí.", "Bis wann haben Sie heute geöffnet?": "¿Hasta qué hora abren hoy?", "Zwei Brötchen und ein Vollkornbrot, bitte.": "Dos panecillos y un pan integral, por favor.", "Ich möchte einen Tisch für vier Personen reservieren.": "Quisiera reservar una mesa para cuatro personas.", "Ist dieser Platz noch frei?": "¿Está libre este asiento?", "Können wir bitte die Speisekarte haben?": "¿Podemos ver la carta, por favor?", "Was können Sie uns empfehlen?": "¿Qué nos recomienda?", "Ich nehme die Suppe und danach den Fisch.": "Tomo la sopa y después el pescado.", "Ist in dem Gericht Fleisch?": "¿Este plato lleva carne?", "Wir möchten bitte zahlen.": "Quisiéramos pagar, por favor.", "Zusammen oder getrennt?": "¿Juntos o por separado?", "Stimmt so, danke.": "Quédese con el cambio, gracias.", "Das Essen war ausgezeichnet.": "La comida estaba excelente.", "Wo kann ich eine Fahrkarte kaufen?": "¿Dónde puedo comprar un billete?", "Fährt dieser Bus zum Hauptbahnhof?": "¿Este autobús va a la estación central?", "Wann fährt der nächste Zug nach München?": "¿Cuándo sale el próximo tren a Múnich?", "Muss ich umsteigen?": "¿Tengo que hacer transbordo?", "Der Zug hat zwanzig Minuten Verspätung.": "El tren tiene veinte minutos de retraso.", "Ich habe meinen Anschluss verpasst.": "Perdí mi conexión.", "An welcher Haltestelle muss ich aussteigen?": "¿En qué parada tengo que bajarme?", "Ist das Deutschlandticket hier gültig?": "¿El Deutschlandticket es válido aquí?", "Entschuldigung, wie komme ich zum Rathaus?": "Disculpe, ¿cómo llego al ayuntamiento?", "Gehen Sie geradeaus und dann die zweite Straße links.": "Siga recto y luego tome la segunda calle a la izquierda.", "Ich bin heute krank und komme nicht ins Büro.": "Hoy estoy enfermo y no voy a la oficina.", "Können wir das Meeting auf morgen verschieben?": "¿Podemos aplazar la reunión a mañana?", "Ich schicke Ihnen die Unterlagen bis Freitag.": "Le envío los documentos antes del viernes.", "Hast du kurz Zeit für eine Frage?": "¿Tienes un momento para una pregunta?", "Ich habe die Aufgabe noch nicht ganz verstanden.": "Todavía no entiendo del todo la tarea.", "Ich möchte nächste Woche zwei Tage Urlaub nehmen.": "Quisiera tomarme dos días de vacaciones la semana que viene.", "Wer ist für dieses Projekt zuständig?": "¿Quién es el responsable de este proyecto?", "Ich arbeite heute im Homeoffice.": "Hoy trabajo desde casa.", "Wann bekomme ich meine Gehaltsabrechnung?": "¿Cuándo recibiré mi nómina (recibo de sueldo)?", "Schönes Wochenende und bis Montag!": "¡Buen fin de semana y hasta el lunes!", "Hallo, ich bin neu hier im Haus.": "Hola, soy nuevo en el edificio.", "Woher kommen Sie eigentlich?": "¿Y usted de dónde es?", "Wie lange wohnen Sie schon hier?": "¿Cuánto tiempo hace que vive aquí?", "Könnten Sie mein Paket annehmen, wenn ich nicht da bin?": "¿Podría recibir mi paquete si no estoy?", "Wir feiern am Samstag eine kleine Party.": "El sábado hacemos una pequeña fiesta.", "Es tut mir leid, dass es gestern so laut war.": "Siento mucho que ayer hubiera tanto ruido.", "Was machen Sie am Wochenende?": "¿Qué hace este fin de semana?", "Das Wetter ist heute wirklich schön.": "Hoy hace un tiempo realmente bueno.", "Ich habe am Wochenende einen Ausflug gemacht.": "El fin de semana hice una excursión.", "Sagen Sie Bescheid, wenn Sie Hilfe brauchen.": "Avíseme si necesita ayuda.", "Ich möchte ein Girokonto eröffnen.": "Quisiera abrir una cuenta corriente.", "Meine Karte ist gesperrt.": "Mi tarjeta está bloqueada.", "Ich möchte Geld auf dieses Konto überweisen.": "Quisiera transferir dinero a esta cuenta.", "Wie hoch sind die Gebühren?": "¿De cuánto son las comisiones?", "Ich möchte dieses Paket nach Frankreich schicken.": "Quisiera enviar este paquete a Francia.", "Wie lange braucht ein Brief nach Paris?": "¿Cuánto tarda una carta a París?", "Ich habe eine Benachrichtigung für ein Paket bekommen.": "Recibí un aviso de entrega de un paquete.", "Brauche ich dafür meinen Ausweis?": "¿Necesito mi documento de identidad para eso?", "Ich möchte eine Briefmarke für eine Postkarte.": "Quisiera un sello (una estampilla) para una postal.", "Können Sie mir die Kontonummer noch einmal sagen?": "¿Puede repetirme el número de cuenta?"}, "irr": {"sein": "ser, estar", "haben": "tener, haber", "werden": "llegar a ser, volverse", "wissen": "saber", "können": "poder", "müssen": "deber, tener que (obligación)", "wollen": "querer", "dürfen": "tener permiso para, poder (permiso)", "sollen": "deber (porque otro lo pide)", "mögen": "gustar", "gehen": "ir (a pie)", "kommen": "venir", "fahren": "ir (en vehículo), conducir", "laufen": "correr, caminar", "fliegen": "ir en avión, volar", "bleiben": "quedarse", "schwimmen": "nadar", "stehen": "estar de pie", "sitzen": "estar sentado", "liegen": "estar acostado, encontrarse", "essen": "comer", "trinken": "beber", "sehen": "ver", "lesen": "leer", "sprechen": "hablar", "nehmen": "tomar", "geben": "dar", "helfen": "ayudar", "treffen": "encontrarse con", "schlafen": "dormir", "finden": "encontrar", "heißen": "llamarse", "schreiben": "escribir", "beginnen": "empezar, comenzar", "bringen": "traer", "kennen": "conocer", "gefallen": "gustar, agradar", "vergessen": "olvidar", "verstehen": "entender, comprender", "bekommen": "recibir, obtener", "tun": "hacer", "denken": "pensar", "nennen": "nombrar, llamar", "rennen": "correr (rápido)", "waschen": "lavar", "tragen": "llevar (puesto), cargar", "halten": "sostener, detenerse", "lassen": "dejar, mandar hacer", "fallen": "caer(se)", "rufen": "llamar", "steigen": "subir, aumentar", "scheinen": "brillar; parecer", "treiben": "practicar (Sport treiben)", "schneiden": "cortar", "gewinnen": "ganar", "singen": "cantar", "ziehen": "tirar (de), jalar", "verlieren": "perder", "schließen": "cerrar", "bitten": "pedir, rogar", "empfehlen": "recomendar", "sterben": "morir", "werfen": "lanzar, tirar", "unterschreiben": "firmar", "fangen": "atrapar", "raten": "aconsejar, adivinar", "schlagen": "golpear, vencer", "laden": "cargar", "wachsen": "crecer", "braten": "asar, freír", "schreien": "gritar", "leihen": "prestar", "leiden": "sufrir", "streiten": "discutir, pelearse", "reiten": "montar a caballo", "beißen": "morder", "vergleichen": "comparar", "entscheiden": "decidir", "springen": "saltar", "verschwinden": "desaparecer", "klingen": "sonar (parecer)", "frieren": "tener frío, helarse", "fließen": "fluir, correr (un líquido)", "genießen": "saborear, disfrutar de", "gießen": "regar, verter", "bieten": "ofrecer", "verbieten": "prohibir", "riechen": "oler", "lügen": "mentir", "wiegen": "pesar", "messen": "medir", "stehlen": "robar", "brechen": "romper", "gelten": "ser válido, valer", "erhalten": "recibir (correo oficial)", "verlassen": "dejar, irse de", "hängen": "estar colgado", "brennen": "arder, quemarse", "stoßen": "empujar, chocar (contra)", "schweigen": "callarse", "greifen": "agarrar, tomar", "reißen": "romper, rasgar", "beweisen": "demostrar, probar", "sinken": "bajar, hundirse", "zwingen": "forzar, obligar", "schieben": "empujar (un objeto)", "heben": "levantar", "treten": "pisar, entrar", "befehlen": "ordenar", "aufstehen": "levantarse", "anfangen": "empezar, comenzar", "anrufen": "llamar (por teléfono)", "einkaufen": "hacer las compras", "einsteigen": "subir (a un vehículo)", "aussteigen": "bajar (de un vehículo)", "umsteigen": "cambiar (de tren, de autobús), hacer transbordo", "ankommen": "llegar", "mitkommen": "venir con, acompañar", "fernsehen": "ver la televisión", "abholen": "ir a buscar, recoger", "aufmachen": "abrir", "zumachen": "cerrar", "ausgehen": "salir", "abfahren": "salir (tren, autobús)", "zurückkommen": "volver, regresar", "mitnehmen": "llevarse, llevar consigo", "aufhören": "dejar de, parar", "aufräumen": "ordenar, recoger", "anziehen": "ponerse (ropa)", "umziehen": "mudarse", "einladen": "invitar", "ausfüllen": "completar, rellenar (un formulario)", "zuhören": "escuchar", "aussehen": "parecer, tener aspecto de", "kennenlernen": "conocer (a alguien)", "vorschlagen": "proponer", "vorbereiten": "preparar", "feststellen": "constatar, comprobar", "teilnehmen": "participar", "abgeben": "entregar"}, "vp": {"achten|auf": ["prestar atención a", "Presta atención al tráfico."], "denken|an": ["pensar en", "Pienso a menudo en mi familia."], "warten|auf": ["esperar (a)", "Esperamos el autobús."], "sich freuen|auf": ["tener muchas ganas de (algo futuro)", "Tengo muchas ganas de que lleguen las vacaciones."], "sich freuen|über": ["alegrarse de/por (algo presente o pasado)", "Se alegra por el regalo."], "sich interessieren|für": ["interesarse por", "Se interesa por la política."], "sich kümmern|um": ["ocuparse de, cuidar de", "¿Quién cuida al perro?"], "sich ärgern|über": ["molestarse por, enfadarse por", "Me molesta el ruido."], "sich beschweren|über": ["quejarse de", "Los inquilinos se quejan de la calefacción."], "sich beschweren|bei": ["quejarse ante", "Me quejo ante el propietario."], "sich gewöhnen|an": ["acostumbrarse a", "Poco a poco me acostumbro al clima."], "sich erinnern|an": ["acordarse de, recordar", "¿Te acuerdas de nuestro primer día?"], "sich bedanken|für": ["dar las gracias por, agradecer", "Le doy las gracias por su ayuda."], "sich entscheiden|für": ["decidirse por, elegir", "Nos decidimos por el apartamento pequeño."], "sich verlassen|auf": ["contar con, confiar en", "Puedes contar conmigo."], "sich bewerben|um": ["solicitar (un puesto)", "Solicita un puesto de cuidadora."], "sich bewerben|bei": ["presentar una solicitud en (una empresa)", "Presenta una solicitud en un banco."], "sich beschäftigen|mit": ["ocuparse de, trabajar en", "Ahora mismo estoy trabajando en ese tema."], "sich unterhalten|über": ["conversar sobre, hablar de", "Conversamos sobre la película."], "sich unterhalten|mit": ["conversar con, charlar con", "Charlo con el vecino."], "sich vorbereiten|auf": ["prepararse para", "Me preparo para el examen."], "sich konzentrieren|auf": ["concentrarse en", "¡Concéntrate en el trabajo!"], "sich sorgen|um": ["preocuparse por", "Los padres se preocupan por su hijo."], "sich fürchten|vor": ["tener miedo de, temer", "El niño le tiene miedo al perro."], "Angst haben|vor": ["tener miedo de", "Tengo miedo al examen."], "glauben|an": ["creer en", "Creo en ti."], "teilnehmen|an": ["participar en", "Participo en un curso de alemán."], "abhängen|von": ["depender de", "Depende del tiempo."], "bestehen|aus": ["constar de, componerse de", "El equipo consta de cinco personas."], "bestehen|auf": ["exigir, insistir en", "Insiste en recibir una respuesta."], "träumen|von": ["soñar con", "Sueño con una casa junto a un lago."], "bitten|um": ["pedir (algo)", "¿Puedo pedirle un favor?"], "fragen|nach": ["preguntar por (el camino, cómo está alguien)", "Pregunta por el camino."], "gehören|zu": ["formar parte de", "Eso forma parte de mis tareas."], "sorgen|für": ["encargarse de, cuidar de", "Los padres cuidan de los hijos."], "führen|zu": ["llevar a, conducir a", "El estrés puede llevar a enfermedades."], "überzeugen|von": ["convencer de", "Me convenció de su idea."], "hinweisen|auf": ["señalar, llamar la atención sobre", "Quisiera señalarle un error."], "verzichten|auf": ["renunciar a", "Renuncio al azúcar."], "zweifeln|an": ["dudar de", "Dudo de su honestidad."], "sprechen|mit": ["hablar con", "Tengo que hablar con el jefe."], "sprechen|über": ["hablar de/sobre", "Hablamos del problema."], "telefonieren|mit": ["hablar por teléfono con", "Hablo por teléfono con mi madre."], "anfangen|mit": ["empezar por/con", "Empezamos con el ejercicio."], "aufhören|mit": ["dejar de", "Dejó de fumar."], "helfen|bei": ["ayudar a/con", "¿Me ayudas con la mudanza?"], "sich verabreden|mit": ["citarse con, quedar con", "Tengo una cita con Anna."], "sich treffen|mit": ["encontrarse con, ver (a alguien)", "Hoy me veo con unos amigos."], "einladen|zu": ["invitar a", "Nos invita a comer."], "gratulieren|zu": ["felicitar por", "Te felicito por tu cumpleaños."], "sich entschuldigen|für": ["disculparse por, pedir perdón por", "Pido disculpas por el retraso."], "sich entschuldigen|bei": ["disculparse con, pedir perdón a", "Deberías disculparte con ella."], "sich anmelden|für": ["inscribirse en", "Me inscribo en el curso."], "sich informieren|über": ["informarse sobre", "Me informo sobre los gastos."], "sich erkundigen|nach": ["informarse sobre, preguntar por", "Pregunta por el horario de apertura."], "sich streiten|mit": ["discutir con, pelearse con", "A menudo discute con su hermano."], "sich verlieben|in": ["enamorarse de", "Se enamoró de él."], "sich wundern|über": ["sorprenderse de, extrañarse de", "Me sorprende su reacción."], "sich aufregen|über": ["alterarse por, enfadarse con", "¡No te alteres por él!"], "lachen|über": ["reírse de", "Nos reímos del chiste."], "nachdenken|über": ["reflexionar sobre, pensar en", "Estoy pensando en tu oferta."], "diskutieren|über": ["discutir sobre, debatir sobre", "Debatimos sobre el futuro."], "berichten|über": ["informar sobre", "El periódico informa sobre el accidente."], "schreiben|an": ["escribir a", "Escribo una carta a la administración."], "erzählen|von": ["contar, hablar de", "¡Háblame de tu viaje!"], "hören|von": ["tener noticias de, saber de", "Hace mucho que no sé nada de él."], "sich verabschieden|von": ["despedirse de", "Nos despedimos de los invitados."], "sich erholen|von": ["recuperarse de", "Tengo que recuperarme del estrés."], "leiden|an": ["sufrir de, padecer (una enfermedad)", "Padece una alergia."], "leiden|unter": ["sufrir por (una situación)", "Muchos sufren por el calor."], "arbeiten|an": ["trabajar en", "Trabajo en un proyecto."], "sterben|an": ["morir de", "Murió de gripe."], "sich beteiligen|an": ["participar en", "Todos participan en los gastos."], "erkennen|an": ["reconocer por", "Lo reconozco por la voz."], "sich wenden|an": ["dirigirse a", "Diríjase al servicio de atención al cliente, por favor."], "sich halten|an": ["respetar, atenerse a (una regla)", "Por favor, respete las normas."], "reagieren|auf": ["reaccionar a/ante", "¿Cómo reaccionó ante la noticia?"], "antworten|auf": ["responder a", "Por favor, responda a mi correo electrónico."], "hoffen|auf": ["esperar, tener la esperanza de", "Esperamos que haga buen tiempo."], "aufpassen|auf": ["vigilar, cuidar a", "¿Puedes cuidar a los niños?"], "ankommen|auf": ["depender de (es kommt auf … an)", "Depende de la situación."], "sich einsetzen|für": ["comprometerse con, luchar por", "Lucha por el medio ambiente."], "danken|für": ["agradecer, dar las gracias por", "¡Gracias por la invitación!"], "ausgeben|für": ["gastar en", "¿Cuánto gastas en el alquiler?"], "kämpfen|gegen": ["luchar contra", "Luchamos contra el cambio climático."], "protestieren|gegen": ["protestar contra", "Muchos protestan contra la nueva ley."], "sich verstehen|mit": ["llevarse bien con", "Me llevo bien con mis compañeros de trabajo."], "rechnen|mit": ["contar con, esperar", "No contaba con tanto tráfico."], "vergleichen|mit": ["comparar con", "¡No te compares con los demás!"], "umgehen|mit": ["saber tratar a/con", "Sabe tratar muy bien a los niños."], "sich auskennen|mit": ["entender de, saber de", "¿Entiendes de informática?"], "suchen|nach": ["buscar", "Busco mi llave."], "riechen|nach": ["oler a", "Aquí huele a café."], "sich sehnen|nach": ["añorar, extrañar", "Extraño el sol."], "schützen|vor": ["proteger de", "La crema protege del sol."], "warnen|vor": ["advertir de, alertar sobre", "Advierten de la tormenta."], "passen|zu": ["quedar bien a, combinar con", "Ese color te queda bien."], "beitragen|zu": ["contribuir a", "Todos pueden contribuir a la protección del medio ambiente."], "leben|von": ["vivir de", "Vive de su pensión."], "sich trennen|von": ["separarse de", "Se separó de su novio."], "handeln|von": ["tratar de, hablar de (un libro, una película)", "La película trata de una familia."], "gehen|um": ["tratarse de (es geht um …)", "La carta trata del alquiler."], "sich handeln|um": ["tratarse de (es handelt sich um …)", "Se trata de un malentendido."], "sich bemühen|um": ["esforzarse por conseguir", "Me esfuerzo por encontrar una solución."], "die Angst|vor": ["el miedo a", "Su miedo a los perros es grande."], "das Interesse|an": ["el interés por", "Tiene un gran interés por la música."], "die Lust|auf": ["las ganas de", "No tengo ganas de ir al cine."], "die Freude|an": ["el placer de (una actividad)", "Disfruta mucho de su trabajo."], "die Freude|über": ["la alegría por (algo presente o pasado)", "La alegría por el regalo fue grande."], "die Hoffnung|auf": ["la esperanza de", "Tenemos la esperanza de que haga mejor tiempo."], "die Antwort|auf": ["la respuesta a", "¿Tienes una respuesta a mi pregunta?"], "die Frage|nach": ["la cuestión de", "La cuestión del precio es importante."], "die Bitte|um": ["la petición de", "Su petición de ayuda llegó demasiado tarde."], "der Grund|für": ["el motivo de", "¿Cuál es el motivo del retraso?"], "die Lösung|für": ["la solución a", "Buscamos una solución al problema."], "die Erinnerung|an": ["el recuerdo de", "Tengo bonitos recuerdos de mi infancia."], "der Wunsch|nach": ["el deseo de", "Muchos tienen el deseo de más tranquilidad."], "die Beziehung|zu": ["la relación con", "Tiene una buena relación con su hermana."], "die Einladung|zu": ["la invitación a", "Gracias por la invitación a comer."], "die Suche|nach": ["la búsqueda de", "La búsqueda de un piso es difícil."], "das Gespräch|über": ["la conversación sobre", "La conversación sobre el alquiler dura mucho."], "die Sorge|um": ["la preocupación por", "La preocupación por su madre no la deja dormir."], "die Teilnahme|an": ["la participación en", "La participación en el curso es gratuita."], "die Voraussetzung|für": ["el requisito para", "Un buen nivel de alemán es un requisito para el puesto."], "der Streit|mit": ["la pelea con", "La pelea con el vecino se ha acabado."], "stolz|auf": ["orgulloso de", "Estoy orgulloso de mi hija."], "zufrieden|mit": ["satisfecho con", "Estamos satisfechos con el piso nuevo."], "abhängig|von": ["dependiente de", "El precio depende del tamaño."], "interessiert|an": ["interesado en", "Está muy interesada en el curso."], "verheiratet|mit": ["casado con", "Está casado con una médica."], "verliebt|in": ["enamorado de", "Está enamorada de su compañero."], "böse|auf": ["enfadado con", "¿Sigues enfadado conmigo?"], "fertig|mit": ["haber terminado (algo)", "Enseguida termino el trabajo."], "bekannt|für": ["conocido por", "La ciudad es conocida por su cerveza."], "gespannt|auf": ["con ganas de ver, expectante ante", "Tengo muchas ganas de ver la película nueva."], "neugierig|auf": ["curioso por", "Los niños sienten curiosidad por el regalo."], "bereit|zu": ["dispuesto a", "Estoy dispuesto a hablar."], "froh|über": ["contento con", "Estoy contento con tu ayuda."], "traurig|über": ["triste por", "Está triste por la noticia."], "zuständig|für": ["encargado de", "¿Quién se encarga de la calefacción?"], "überzeugt|von": ["convencido de", "Estoy convencido de la idea."], "freundlich|zu": ["amable con", "Los vecinos siempre son amables con nosotros."]}}};
function swapFr(o, tr, field = "fr") {
  const k = "_" + field;
  if (!(k in o)) o[k] = o[field];
  o[field] = tr != null && tr !== "" ? tr : o[k];
}
function loadContent(lang) {
  const c = CONTENT_I18N[lang] || {}, pick = (m, k) => (m || {})[k];
  for (const w of WORDS) {
    if (w.mine || w.iki) continue;
    swapFr(w, pick(c.w, w.de));
    if (w.ex) swapFr(w.ex, pick(c.ex, w.de));
  }
  for (const it of PH) swapFr(it, pick(c.ph, it.de));
  for (const v of IRR) swapFr(v, pick(c.irr, v.inf));
  for (const v of VP) { const t = pick(c.vp, v.key) || []; swapFr(v, t[0]); swapFr(v, t[1], "exfr"); }
}
loadContent(uiLang());
// words that are capitalised inside a sentence (nouns, Sie…) keep their capital when shuffled
const CAPS = new Set();
PH.forEach(it => it.de.replace(/[.?!,]/g, "").split(" ").slice(1).forEach(t => { if (/^[A-ZÄÖÜ]/.test(t)) CAPS.add(t); }));
function orderTokens(de) {
  const end = /[.?!]$/.test(de) ? de.slice(-1) : "";
  const toks = (end ? de.slice(0, -1) : de).split(" ");
  if (!CAPS.has(toks[0]) && !/^[A-ZÄÖÜ]{2}|^Dr\.$/.test(toks[0])) toks[0] = toks[0][0].toLowerCase() + toks[0].slice(1);
  return { toks, end };
}

/* shared progress helpers: store[key] = [right, total, day, streak] */
function activeIrr() {
  let list = settings.level === "all" ? IRR : IRR.filter(v => settings.level === "B2" ? v.level === "B2" : v.level !== "B2");
  if (settings.csep === "sep") list = list.filter(v => v.particle);
  if (settings.csep === "irr") list = list.filter(v => !v.particle);
  return list;
}
function vstat(store, key) { return ((P[store] || {})[key]); }
function isWeak(s) { return s && (s[3] === 0 || s[0] < s[1] && s[3] < 2); }
function gradeV(store, key, ok) {
  P[store] = P[store] || {};
  const s = P[store][key] || [0, 0, 0, 0];
  s[1]++; if (ok) s[0]++;
  s[2] = today(); s[3] = ok ? s[3] + 1 : 0;
  P[store][key] = s;
  const d = String(today()); P.days[d] = (P.days[d] || 0) + 1;
  persist();
}
function pickV(items, store, n, weakOnly) {
  const st = P[store] || {};
  const rate = it => { const s = st[it.key]; return s ? s[0] / s[1] : 1; };
  const weak = shuffle(items.filter(it => isWeak(st[it.key]))).sort((a, b) => rate(a) - rate(b));
  if (weakOnly) return weak.slice(0, n);
  const w = weak.slice(0, Math.ceil(n / 2));
  const fresh = shuffle(items.filter(it => !st[it.key]));
  const others = shuffle(items.filter(it => st[it.key] && !w.includes(it)));
  const nf = Math.min(fresh.length, Math.ceil((n - w.length) * .6));
  return shuffle(w.concat(fresh.slice(0, nf), others.slice(0, Math.max(0, n - w.length - nf)), fresh.slice(nf)).slice(0, n));
}
function vMeter(items, store) {
  const st = P[store] || {};
  return {
    seen: items.filter(it => st[it.key]).length,
    good: items.filter(it => { const s = st[it.key]; return s && s[3] >= 2; }).length,
    weak: items.filter(it => isWeak(st[it.key])).length,
  };
}
function statsBox(items, store, unit) {
  const m = vMeter(items, store);
  return `<section class="stats" aria-label="Progression">
      <div class="stat"><b>${m.seen}</b><span>${unit} travaillés / ${items.length}</span></div>
      <div class="stat"><b>${m.good}</b><span>réussis 2 fois de suite</span></div>
      <div class="stat"><b>${m.weak}</b><span>à revoir</span></div>
    </section>`;
}
function sitChips(setting) {
  const cur = settings[setting] || "all";
  return `<div class="dirs" role="group" aria-label="Situation">${[["all", "Toutes"]].concat(SITS.map(s => [s.id, s.name])).map(([k, l]) => `<button class="chip" data-sit="${setting}:${k}" aria-pressed="${cur === k}">${esc(l)}</button>`).join("")}</div>`;
}
function sitItems(setting) { const cur = settings[setting] || "all"; return cur === "all" ? PH : SIT_BY_ID[cur].items; }

/* ---------- tabs ---------- */
function irrHL(f, on) { return on ? `<em class="irr">${esc(f)}</em>` : esc(f); }
function irrForms(v) { return `${irrHL(v.pres[2], v.presIrr[2])} · ${v.particle && !/[^t]e$/.test(v.prat[2].split(" ")[0]) || !v.particle ? `<em class="irr">${esc(v.prat[2])}</em>` : esc(v.prat[2])} · ${esc(v.aux)} ${esc(v.part)}`; }
function conjTable(v, only, mark) {
  const cols = only ? [only] : ["pres", "prat", "perf"];
  return `<div class="tbl ctable"><table><thead><tr><th></th>${cols.map(c => `<th>${TENSES[c]}</th>`).join("")}</tr></thead><tbody>
    ${PERSONS.map((pn, k) => `<tr${mark === k ? ' class="mark"' : ""}><th lang="de">${pn}</th>${cols.map(c => `<td lang="de">${c === "pres" ? irrHL(v.pres[k], v.presIrr[k]) : esc(v[c][k])}</td>`).join("")}</tr>`).join("")}
  </tbody></table></div>`;
}
function verbSetChips() {
  const cur = settings.csep || "all";
  return `<div class="dirs" role="group" aria-label="Verbes">${[["all", "Tous les verbes"], ["irr", "Irréguliers"], ["sep", "Séparables"]].map(([k, l]) => `<button class="chip" data-csep="${k}" aria-pressed="${cur === k}">${l}</button>`).join("")}</div>`;
}
function irrTab() {
  return `
    ${levelChips()}
    ${trainLink("conj")}
    ${verbSetChips()}
    <input class="search" id="qi" type="search" placeholder="Chercher un verbe (allemand ou français)…" value="${esc(settings.qi || "")}" autocomplete="off">
    <p class="note">Touche un verbe pour voir toute sa conjugaison. <em class="irr">En couleur</em> : les formes qui ne suivent pas la règle. Le parfait indique l'auxiliaire : <b>hat</b> (haben) ou <b>ist</b> (sein). Pour les verbes séparables, la particule va à la fin de la phrase : ich <b>stehe</b> um 7 Uhr <b>auf</b>.</p>
    <div id="irrlist"></div>`;
}
function renderIrrList() {
  const el = document.getElementById("irrlist");
  if (!el) return;
  const q = norm(settings.qi || "");
  const list = activeIrr().filter(v => !q || norm(v.inf).includes(q) || norm(v.fr).includes(q) || v.pres.concat(v.prat).some(f => norm(f) === q) || norm(v.part).includes(q));
  const groups = ["A1", "A2", "B1", "B2"].map(l => ["Niveau " + l, list.filter(v => v.level === l && !v.particle)])
    .concat([["Verbes séparables", list.filter(v => v.particle)]]).filter(g => g[1].length);
  el.innerHTML = groups.map(([l, vs]) => `
    <section class="section" style="margin-bottom:18px">
      <span class="label">${l} · ${vs.length} verbe${vs.length > 1 ? "s" : ""}</span>
      <div class="lex vlist">${vs.map(v => {
        const s = vstat("irr", v.key);
        return `<details class="vrow"><summary>
          <div class="vmain" data-notr><b class="vinf">${v.particle ? `<u>${esc(v.particle)}</u>${esc(v.inf.slice(v.particle.length))}` : esc(v.inf)}</b>${v.particle ? `<span class="tag">${v.level}</span>` : ""}${s ? `<span class="vdot ${isWeak(s) ? "weak" : s[3] >= 2 ? "ok" : ""}" title="${s[0]}/${s[1]} bonnes réponses"></span>` : ""}<span class="vfr">${esc(v.fr)}</span></div>
          <div class="vforms" data-notr>${irrForms(v)}</div>
        </summary>
        <div class="vbody">${conjTable(v)}<div class="vsay">${spkBtn(`${v.inf}, ${v.pres[2]}, ${v.prat[2]}, ${v.aux} ${v.part}`, true)}<span class="note">Prétérit avec du : <b lang="de">${esc(v.prat[1])}</b>${v.pratAlt ? ` (à l'oral aussi <span lang="de">${esc(v.pratAlt)}</span>)` : ""}</span></div></div>
        </details>`;
      }).join("")}</div>
    </section>`).join("") || `<div class="lex"><div class="more" style="border:0">Aucun verbe ne correspond.</div></div>`;
}
function conjTab() {
  const items = activeIrr();
  const t = settings.ctense || "mix";
  return `
    ${levelChips()}
    <button class="cta" data-vx="conj">
      <div><h2>Conjugaison</h2><p>10 verbes à conjuguer${t === "mix" ? " au présent, au prétérit ou au parfait" : " au " + TENSES[t].toLowerCase()}.</p></div><span class="go">Jouer →</span>
    </button>
    <section class="section">
      <span class="label">Temps</span>
      <div class="dirs" role="group" aria-label="Temps">${[["mix", "Tout mélangé"], ["pres", "Présent"], ["prat", "Prétérit"], ["perf", "Parfait"]].map(([k, l]) => `<button class="chip" data-ctense="${k}" aria-pressed="${t === k}">${l}</button>`).join("")}</div>
      <span class="label">Verbes</span>
      ${verbSetChips()}
    </section>
    ${autoSwitch()}
    ${statsBox(items, "irr", "verbes")}
    <p class="note">Au présent, les questions portent surtout sur les personnes où le verbe change (souvent du et er/sie/es). Au parfait, écris l'auxiliaire et le participe : <b>bist gefahren</b>. Pour un verbe séparable, écris aussi la particule : <b>stehst auf</b>.</p>
    ${ficheLink(3, "Fiche :")}${ficheLink(12, "Fiche :")}${ficheLink(14, "Fiche :")}${ficheLink(15, "Fiche :")}`;
}
function vprepTab() {
  return `
    ${trainLink("prep")}
    <input class="search" id="qp" type="search" placeholder="Chercher un mot ou une préposition…" value="${esc(settings.qp || "")}" autocomplete="off">
    <div class="tipcard">
      <b>Repères pour le cas</b>
      <ul>
        <li><b>über</b> et <b>um</b> : toujours accusatif. <b>auf</b> : presque toujours accusatif (sauf bestehen auf + D).</li>
        <li><b>mit, von, zu, bei, nach, aus, vor</b> : toujours datif. <b>für, gegen</b> : toujours accusatif.</li>
        <li><b>an</b> : accusatif pour penser, se souvenir, s'habituer, croire, die Erinnerung ; datif pour participer, travailler, douter, souffrir, das Interesse, die Freude, interessiert.</li>
      </ul>
    </div>
    <div id="vplist"></div>
    ${ficheLink(21, "Fiche :")}`;
}
function vpHead(v) { return `<b class="vinf">${esc(v.verb)}</b> <span class="vprep">${esc(v.prep)}</span> <span class="case case-${v.cas}">+ ${v.cas === "A" ? "Akk." : "Dat."}</span>`; }
function renderVpList() {
  const el = document.getElementById("vplist");
  if (!el) return;
  const q = norm(settings.qp || "");
  const list = VP.filter(v => !q || norm(v.verb).includes(q) || norm(v.prep) === q || norm(v.fr).includes(q) || norm(v.verb + " " + v.prep).includes(q));
  const groups = PREPS.map(p => [p, list.filter(v => v.prep === p)]).filter(g => g[1].length);
  el.innerHTML = groups.map(([p, vs]) => `
    <section class="section" style="margin-bottom:18px">
      <span class="label"><span lang="de">${esc(p)}</span> · ${vs.length}</span>
      <div class="lex">${vs.map(v => {
        const s = vstat("vp", v.key);
        return `<div class="row" data-notr>
          <div class="de">${vpHead(v)}${s ? `<span class="vdot ${isWeak(s) ? "weak" : s[3] >= 2 ? "ok" : ""}"></span>` : ""}</div>
          <div class="fr">${esc(v.fr)}</div>
          <div class="lex-ex"><div><div class="ex-de" lang="de">${v.exHTML}</div><div class="ex-fr" data-notr>${esc(v.exfr)}</div></div>${spkBtn(v.ex, true)}</div>
        </div>`;
      }).join("")}</div>
    </section>`).join("") || `<div class="lex"><div class="more" style="border:0">Aucun mot ne correspond.</div></div>`;
}
function qprepTab() {
  return `
    <button class="cta" data-vx="prep">
      <div><h2>Quelle préposition ?</h2><p>15 phrases à compléter. Pour an, auf, in, über, vor et unter, choisis aussi le cas.</p></div><span class="go">Jouer →</span>
    </button>
    ${autoSwitch()}
    ${statsBox(VP, "vp", "mots")}
    <p class="note">Apprends toujours le mot avec sa préposition et son cas, comme un seul bloc : <b>warten auf + Akk.</b>, <b>stolz auf + Akk.</b> La liste complète est dans Verbes → Prépositions.</p>
    ${ficheLink(21, "Fiche :")}`;
}

/* declensions */
const DK_ART = {
  def: { m: { N: "der", A: "den", D: "dem", G: "des" }, f: { N: "die", A: "die", D: "der", G: "der" }, n: { N: "das", A: "das", D: "dem", G: "des" } },
  ein: { m: { N: "ein", A: "einen", D: "einem", G: "eines" }, f: { N: "eine", A: "eine", D: "einer", G: "einer" }, n: { N: "ein", A: "ein", D: "einem", G: "eines" } },
};
const DK_END = {
  def: { m: { N: "e", A: "en", D: "en", G: "en" }, f: { N: "e", A: "e", D: "en", G: "en" }, n: { N: "e", A: "e", D: "en", G: "en" } },
  ein: { m: { N: "er", A: "en", D: "en", G: "en" }, f: { N: "e", A: "e", D: "en", G: "en" }, n: { N: "es", A: "es", D: "en", G: "en" } },
};
const DK_CASES = { N: "Nominatif", A: "Accusatif", D: "Datif", G: "Génitif" };
const DK_GENDER = { m: "masculin", f: "féminin", n: "neutre" };
const DK_TPL = {
  N: ["Wo ist {X}?", "Hier ist {X}.", "Das ist {X}.", "{X} kostet zehn Euro."],
  A: ["Ich suche {X}.", "Wir brauchen {X}.", "Hast du {X} gesehen?", "Ich sehe {X}."],
  D: ["Was machst du mit {X}?", "Ich bin zufrieden mit {X}.", "Er wartet neben {X}.", "Das Foto liegt unter {X}."],
  G: ["Wegen {X} komme ich später.", "Trotz {X} bin ich zufrieden.", "Ich weiß den Preis {X} nicht mehr."],
};
const DK_ADJ = ["neu", "alt", "groß", "klein", "gut", "schön", "ganz", "wichtig", "ander", "richtig"];
const DK_SKIP = ["mine", "bases", "temps", "nombres", "outils", "b2gefuehle", "b2argumenter", "b2idiomes", "b2nuances"];
const DK_DETS = { def: ["", "dies"], ein: ["", "k", "m"] }; // der/dieser ; ein/kein/mein
function dkNouns() {
  return activeWords().filter(w => w.kind === "n" && !w.plOnly && ["der", "die", "das"].includes(w.art) && !/[\s(-]/.test(w.base) && !WEAK_NOUN(w) && !DK_SKIP.includes(w.theme));
}
function dkDet(type, pre, g, c) {
  const a = DK_ART[type][g][c];
  if (type === "ein") return pre + a;
  if (!pre) return a;
  return "dies" + { der: "er", die: "e", das: "es", den: "en", dem: "em", des: "es" }[a];
}
function dkQuestion(w, fc, ft) {
  const mode = settings.dkmode || "adj";
  const cases = settings.dkcase && settings.dkcase !== "all" ? [settings.dkcase] : ["N", "A", "D", "G", "A", "D"];
  const c = fc || cases[Math.floor(Math.random() * cases.length)];
  const g = { der: "m", die: "f", das: "n" }[w.art];
  const type = ft || (Math.random() < .5 ? "def" : "ein");
  const pre = DK_DETS[type][Math.floor(Math.random() * DK_DETS[type].length)];
  const adj = DK_ADJ[Math.floor(Math.random() * DK_ADJ.length)];
  const noun = c === "G" && g !== "f" ? w.base + (/(nis|bus)$/i.test(w.base) ? "ses" : /(s|ß|x|z|sch)$/.test(w.base) ? "es" : "s") : w.base;
  const det = dkDet(type, pre, g, c);
  const det0 = dkDet(type, pre, g, "N");
  const answer = mode === "adj" ? det + " " + adj + DK_END[type][g][c] : det;
  const tpl = DK_TPL[c][Math.floor(Math.random() * DK_TPL[c].length)];
  const cue = mode === "adj" ? `${det0} · ${adj}` : det0;
  const [before, after] = tpl.split("{X}");
  const cap = s => before === "" ? s[0].toUpperCase() + s.slice(1) : s;
  return {
    key: c + g + type, w, c, g, type, adj, noun, answer, mode,
    promptHTML: `${esc(before)}<span class="gap cue">${esc(cue)}</span> <span class="dknoun g-${g}">${esc(noun)}</span>${esc(after)}`,
    full: before + cap(answer) + " " + noun + after,
    fullHTML: `${esc(before)}<b>${esc(cap(answer))}</b> <span class="dknoun g-${g}">${esc(noun)}</span>${esc(after)}`,
  };
}
function dkTab() {
  const m = settings.dkmode || "adj", c = settings.dkcase || "all";
  const st = P.dk || {};
  const byCase = ["N", "A", "D", "G"].map(k => { let ok = 0, n = 0; for (const [key, s] of Object.entries(st)) if (key[0] === k) { ok += s[0]; n += s[1]; } return [k, ok, n]; });
  return `
    ${levelChips()}
    ${trainLink("dek")}
    <section class="section">
      <span class="label">Exercice</span>
      <div class="dirs" role="group" aria-label="Exercice">${[["art", "Articles seuls"], ["adj", "Article + adjectif"]].map(([k, l]) => `<button class="chip" data-dkmode="${k}" aria-pressed="${m === k}">${l}</button>`).join("")}</div>
      <span class="label">Genre du nom</span>
      <div class="dirs" role="group" aria-label="Genre du nom">${[["0", "Masqué"], ["1", "Affiché"]].map(([k, l]) => `<button class="chip" data-dkg="${k}" aria-pressed="${!!settings.dkgender === (k === "1")}">${l}</button>`).join("")}</div>
      <span class="label">Cas</span>
      <div class="dirs" role="group" aria-label="Cas">${[["all", "Tous"], ["N", "Nominatif"], ["A", "Accusatif"], ["D", "Datif"], ["G", "Génitif"]].map(([k, l]) => `<button class="chip" data-dkcase="${k}" aria-pressed="${c === k}">${l}</button>`).join("")}</div>
    </section>
    ${autoSwitch()}
    <section class="stats" style="grid-template-columns:repeat(4,1fr)" aria-label="Réussite par cas">
      ${byCase.map(([k, ok, n]) => `<div class="stat"><b>${n ? Math.round(ok / n * 100) + "%" : "–"}</b><span>${DK_CASES[k].toLowerCase()}${n ? ` · ${n} rép.` : ""}</span></div>`).join("")}
    </section>
    <section class="section">
      <span class="label">Le tableau à connaître</span>
      ${dkTables()}
    </section>
    ${ficheLink(7, "Fiche :")}${ficheLink(8, "Fiche :")}${ficheLink(18, "Fiche :")}${ficheLink(25, "Fiche :")}`;
}
function dkTables(mark) {
  const row = (type, c) => ["m", "f", "n"].map(g => {
    const on = mark && mark.c === c && mark.g === g && mark.type === type;
    return `<td lang="de"${on ? ' class="on"' : ""}>${DK_ART[type][g][c]} <i>-${DK_END[type][g][c]}</i></td>`;
  }).join("");
  const types = mark ? [mark.type] : ["def", "ein"];
  return types.map(type => `<div class="tbl dktable"><table><thead><tr><th>${type === "def" ? "der / dieser" : "ein / kein / mein"}</th><th>Masc.</th><th>Fém.</th><th>Neutre</th></tr></thead><tbody>
    ${["N", "A", "D", "G"].map(c => `<tr><th>${DK_CASES[c]}</th>${row(type, c)}</tr>`).join("")}
  </tbody></table></div>`).join("");
}

/* plurals */
function plNouns() { return activeWords().filter(w => w.kind === "n" && w.pl && !w.plOnly); }
function plType(w) {
  const plain = w.pl.replace(/ä/g, "a").replace(/ö/g, "o").replace(/ü/g, "u");
  const uml = plain !== w.pl && plain.startsWith(w.base.replace(/ä/g, "a").replace(/ö/g, "o").replace(/ü/g, "u")) && w.pl !== w.base;
  const baseP = w.base.replace(/ä/g, "a").replace(/ö/g, "o").replace(/ü/g, "u");
  if (!plain.startsWith(baseP)) return "pluriel irrégulier";
  const suf = plain.slice(baseP.length);
  const umlaut = uml && w.base !== w.pl.slice(0, w.base.length);
  if (!suf) return umlaut ? "umlaut, sans terminaison" : "pas de terminaison";
  return (umlaut ? "umlaut + " : "") + "-" + suf;
}

/* ---------- IKI: the words of each German class ---------- */
const IKI_ALL = { id: "iki", name: "Tous les cours", desc: "", level: "iki", words: [] };
THEME_BY_ID.iki = IKI_ALL;
let IKI_THEMES = [];
let IA = null;      // the lesson being added or edited
function isoToday() { return new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().slice(0, 10); }
function ikiDateName(d) {
  const [y, m, j] = d.split("-").map(Number);
  const loc = { fr: "fr-FR", en: "en-GB", es: "es-ES" }[uiLang()] || "fr-FR";
  try { const t = new Date(y, m - 1, j).toLocaleDateString(loc, { weekday: "long", day: "numeric", month: "long", year: "numeric" }); return t[0].toUpperCase() + t.slice(1); } catch (e) { return d; }
}
// one word of a lesson, shaped like the app's own words so every quiz mode works on it
function ikiWord(lid, x) {
  const w = x.kind === "n" && x.art && x.base
    ? { kind: "n", art: x.art, base: x.base, de: x.art + " " + x.base, pl: x.pl || "", plOnly: false, fr: x.fr }
    : { kind: x.kind === "v" ? "v" : / /.test(x.de) ? "p" : "w", de: x.de, forms: x.forms || "", fr: x.fr };
  w.theme = "iki-" + lid; w.level = "iki"; w.iki = lid; w.id = hash(w.de);
  // a word Claude seeded keeps its English and Spanish translations while its French is left as is
  const tr = IKI_TR[lid + "|" + w.de];
  const def = x.def !== undefined ? x.def : tr && tr.def;
  if (def) w.def = def;
  if (tr && tr.fr === x.fr) Object.defineProperty(w, "fr", { get: () => tr[uiLang()] || tr.fr, enumerable: true, configurable: true });
  return w;
}
// lessons Claude added from a photo of the board sent in the project: copied once into P.iki, then editable like the others
const IKI_SEED = [{"id": "k20261013", "date": "2026-10-13", "words": [{"de": "vertraut", "fr": "familier, de confiance", "pl": "", "forms": "", "tr": {"en": "familiar, trusted", "es": "familiar, de confianza"}, "def": "gut bekannt, man kennt es schon lange"}, {"de": "eine neue Richtung einschlagen", "fr": "prendre une nouvelle direction", "pl": "", "forms": "", "tr": {"en": "to take a new direction", "es": "tomar una nueva dirección"}, "def": "einen neuen Weg gehen, etwas ganz anders machen"}, {"de": "etwas wagen", "fr": "oser quelque chose (+ acc.)", "pl": "", "forms": "", "tr": {"en": "to dare (to do) something (+ acc.)", "es": "atreverse a algo (+ acus.)"}, "def": "den Mut haben, etwas Riskantes zu tun"}, {"de": "etwas hinterfragen", "fr": "remettre quelque chose en question (+ acc.)", "pl": "", "forms": "", "tr": {"en": "to question something (+ acc.)", "es": "cuestionar algo (+ acus.)"}, "def": "etwas kritisch prüfen, nicht einfach akzeptieren"}, {"de": "sich sehnen nach", "fr": "aspirer à, avoir la nostalgie de (+ datif)", "pl": "", "forms": "", "tr": {"en": "to long for, to yearn for (+ dative)", "es": "añorar, anhelar (+ dativo)"}, "def": "etwas sehr stark vermissen oder wünschen"}, {"de": "etwas verwirklichen", "fr": "réaliser quelque chose, un rêve, un projet (+ acc.)", "pl": "", "forms": "", "tr": {"en": "to make something real, a dream, a project (+ acc.)", "es": "hacer realidad algo, un sueño, un proyecto (+ acus.)"}, "def": "einen Traum oder Plan Realität werden lassen"}, {"de": "der Baukredit", "fr": "le prêt immobilier", "pl": "Baukredite", "forms": "", "tr": {"en": "the mortgage, home loan", "es": "el préstamo hipotecario"}, "def": "Geld von der Bank, um ein Haus zu bauen oder zu kaufen"}, {"de": "etwas klappt gut / nicht", "fr": "quelque chose marche bien / ne marche pas (sujet au nominatif)", "pl": "", "forms": "", "tr": {"en": "something works out well / doesn't work out (subject in nominative)", "es": "algo sale bien / no sale (sujeto en nominativo)"}, "def": "etwas funktioniert / funktioniert nicht"}, {"de": "etwas weitergeben an", "fr": "transmettre quelque chose à quelqu'un (an + acc.)", "pl": "", "forms": "", "tr": {"en": "to pass something on to someone (an + acc.)", "es": "pasar algo a alguien (an + acus.)"}, "def": "etwas, das man bekommen hat, einer anderen Person geben"}, {"de": "die Begeisterung", "fr": "l'enthousiasme", "pl": "", "forms": "", "tr": {"en": "enthusiasm", "es": "el entusiasmo"}, "def": "große Freude und Interesse an etwas"}, {"de": "Begeisterung haben für", "fr": "être passionné par (für + acc.)", "pl": "", "forms": "", "tr": {"en": "to be passionate about (für + acc.)", "es": "apasionarse por (für + acus.)"}, "def": "sich sehr für etwas interessieren, etwas lieben"}, {"de": "die Anregung", "fr": "la suggestion, l'idée qui stimule", "pl": "Anregungen", "forms": "", "tr": {"en": "suggestion, inspiring idea", "es": "la sugerencia, la idea que inspira"}, "def": "eine Idee oder ein Vorschlag, der zum Nachdenken bringt"}, {"de": "der Staub", "fr": "la poussière", "pl": "", "forms": "", "tr": {"en": "dust", "es": "el polvo"}, "def": "feiner Schmutz, der sich auf Möbeln sammelt"}, {"de": "Staub wischen", "fr": "faire la poussière", "pl": "", "forms": "", "tr": {"en": "to dust", "es": "quitar el polvo"}, "def": "Möbel mit einem Tuch sauber machen"}, {"de": "sich ansammeln", "fr": "s'accumuler", "pl": "", "forms": "sammelt sich an · sammelte sich an · hat sich angesammelt", "tr": {"en": "to accumulate, to pile up", "es": "acumularse"}, "def": "mit der Zeit immer mehr werden"}, {"de": "etwas feststellen", "fr": "constater quelque chose (+ acc.)", "pl": "", "forms": "", "tr": {"en": "to notice, to find something (+ acc.)", "es": "constatar algo (+ acus.)"}, "def": "etwas bemerken, erkennen"}, {"de": "sich eingesperrt fühlen", "fr": "se sentir enfermé", "pl": "", "forms": "", "tr": {"en": "to feel trapped", "es": "sentirse encerrado"}, "def": "das Gefühl haben, nicht frei zu sein"}, {"de": "etwas aufgeben", "fr": "abandonner, renoncer à quelque chose (+ acc.)", "pl": "", "forms": "", "tr": {"en": "to give something up (+ acc.)", "es": "abandonar, renunciar a algo (+ acus.)"}, "def": "mit etwas aufhören, nicht weitermachen"}, {"de": "den Mut zusammennehmen", "fr": "rassembler son courage", "pl": "", "forms": "", "tr": {"en": "to pluck up one's courage", "es": "armarse de valor"}, "def": "sich trauen, obwohl man Angst hat"}, {"de": "jemanden beraten", "fr": "conseiller quelqu'un (+ acc.)", "pl": "", "forms": "", "tr": {"en": "to advise someone (+ acc.)", "es": "aconsejar a alguien (+ acus.)"}, "def": "jemandem Tipps und Ratschläge geben"}, {"de": "der Hinweis", "fr": "l'indication, le conseil, l'indice", "pl": "Hinweise", "forms": "", "tr": {"en": "hint, tip, clue", "es": "la indicación, el consejo, la pista"}, "def": "ein Tipp, eine kleine Information"}, {"de": "einen Hinweis geben", "fr": "donner une indication", "pl": "", "forms": "", "tr": {"en": "to give a hint", "es": "dar una indicación"}, "def": "jemandem einen Tipp geben"}, {"de": "einen Hinweis bekommen", "fr": "recevoir une indication", "pl": "", "forms": "", "tr": {"en": "to get a hint", "es": "recibir una indicación"}, "def": "einen Tipp erhalten"}, {"de": "einen Hinweis brauchen", "fr": "avoir besoin d'une indication", "pl": "", "forms": "", "tr": {"en": "to need a hint", "es": "necesitar una indicación"}, "def": "einen Tipp nötig haben"}, {"de": "sich den Lebensunterhalt verdienen", "fr": "gagner sa vie", "pl": "", "forms": "", "tr": {"en": "to earn a living", "es": "ganarse la vida"}, "def": "mit Arbeit das Geld zum Leben bekommen"}, {"de": "steil", "fr": "raide, escarpé (une carrière : fulgurante)", "pl": "", "forms": "", "tr": {"en": "steep (a career: meteoric)", "es": "empinado (una carrera: meteórica)"}, "def": "sehr schräg, es geht schnell nach oben oder unten"}, {"de": "unter Druck stehen", "fr": "être sous pression", "pl": "", "forms": "", "tr": {"en": "to be under pressure", "es": "estar bajo presión"}, "def": "viel Stress haben, etwas schnell schaffen müssen"}, {"de": "erschöpft sein", "fr": "être épuisé", "pl": "", "forms": "", "tr": {"en": "to be exhausted", "es": "estar agotado"}, "def": "sehr müde sein, keine Kraft mehr haben"}, {"de": "etwas verursachen", "fr": "causer, provoquer quelque chose, un accident, le chaos (+ acc.)", "pl": "", "forms": "", "tr": {"en": "to cause something, an accident, chaos (+ acc.)", "es": "causar, provocar algo, un accidente, el caos (+ acus.)"}, "def": "der Grund für etwas sein, etwas auslösen"}, {"de": "der Wendepunkt", "fr": "le tournant", "pl": "Wendepunkte", "forms": "", "tr": {"en": "turning point", "es": "el punto de inflexión"}, "def": "der Moment, in dem sich alles ändert"}, {"de": "Wert legen auf", "fr": "accorder de l'importance à (auf + acc.)", "pl": "", "forms": "", "tr": {"en": "to attach importance to (auf + acc.)", "es": "dar importancia a (auf + acus.)"}, "def": "etwas sehr wichtig finden"}, {"de": "etwas umstellen", "fr": "changer, réorganiser quelque chose (+ acc.)", "pl": "", "forms": "", "tr": {"en": "to change, to rearrange something (+ acc.)", "es": "cambiar, reorganizar algo (+ acus.)"}, "def": "etwas anders organisieren, verändern"}, {"de": "etwas kommt gut / nicht gut an", "fr": "quelque chose est bien / mal reçu", "pl": "", "forms": "", "tr": {"en": "something goes down well / badly", "es": "algo es bien / mal recibido"}, "def": "etwas gefällt den Leuten / gefällt ihnen nicht"}]}, {"id": "k20261020", "date": "2026-10-20", "words": [{"de": "auswandern nach", "fr": "émigrer vers (un pays)", "pl": "", "forms": "", "tr": {"en": "to emigrate to (a country)", "es": "emigrar a (un país)"}, "def": "die Heimat verlassen und in einem anderen Land leben"}, {"de": "einwandern nach", "fr": "immigrer dans (un pays)", "pl": "", "forms": "", "tr": {"en": "to immigrate to (a country)", "es": "inmigrar a (un país)"}, "def": "in ein neues Land kommen, um dort zu leben"}, {"de": "etwas erforschen", "fr": "explorer, étudier quelque chose (+ acc.)", "pl": "", "forms": "", "tr": {"en": "to explore, to study something (+ acc.)", "es": "explorar, investigar algo (+ acus.)"}, "def": "etwas genau untersuchen, um es besser zu verstehen"}, {"de": "forschen", "fr": "faire de la recherche", "pl": "", "forms": "forscht · forschte · hat geforscht", "tr": {"en": "to do research", "es": "investigar, hacer investigación"}, "def": "wissenschaftlich arbeiten, Neues entdecken wollen"}, {"de": "der Forscher", "fr": "le chercheur (die Forscherin : la chercheuse)", "pl": "Forscher", "forms": "", "tr": {"en": "the researcher (die Forscherin: female researcher)", "es": "el investigador (die Forscherin: la investigadora)"}, "def": "jemand, der Neues untersucht und entdecken will"}, {"de": "der Wissenschaftler", "fr": "le scientifique", "pl": "Wissenschaftler", "forms": "", "tr": {"en": "the scientist", "es": "el científico"}, "def": "jemand, der an einer Universität oder in einem Labor arbeitet"}, {"de": "etwas herausfinden", "fr": "découvrir, trouver quelque chose (+ acc.)", "pl": "", "forms": "", "tr": {"en": "to find out, to discover something (+ acc.)", "es": "averiguar, descubrir algo (+ acus.)"}, "def": "etwas entdecken, eine Antwort finden"}, {"de": "das Fernweh", "fr": "l'envie de partir loin, le goût du voyage", "pl": "", "forms": "", "tr": {"en": "wanderlust", "es": "las ganas de viajar lejos"}, "def": "die Sehnsucht nach fernen Ländern"}, {"de": "das Heimweh", "fr": "le mal du pays", "pl": "", "forms": "", "tr": {"en": "homesickness", "es": "la nostalgia del hogar, la morriña"}, "def": "die Sehnsucht nach zu Hause"}, {"de": "Fernweh haben", "fr": "avoir envie de partir loin", "pl": "", "forms": "", "tr": {"en": "to have wanderlust", "es": "tener ganas de viajar lejos"}, "def": "unbedingt verreisen wollen"}, {"de": "Heimweh haben", "fr": "avoir le mal du pays", "pl": "", "forms": "", "tr": {"en": "to be homesick", "es": "echar de menos su tierra"}, "def": "sein Zuhause sehr vermissen"}, {"de": "sogenannt", "fr": "soi-disant, ce qu'on appelle", "pl": "", "forms": "", "tr": {"en": "so-called", "es": "el llamado, el supuesto"}, "def": "wie man es oft nennt"}, {"de": "zurückkehren nach", "fr": "retourner, rentrer (dans un pays, une ville)", "pl": "", "forms": "", "tr": {"en": "to return to (a country, a city)", "es": "volver, regresar a (un país, una ciudad)"}, "def": "wieder nach Hause oder an einen Ort kommen"}, {"de": "Asyl beantragen", "fr": "demander l'asile", "pl": "", "forms": "", "tr": {"en": "to apply for asylum", "es": "solicitar asilo"}, "def": "in einem Land um Schutz bitten"}, {"de": "einen Antrag stellen", "fr": "déposer une demande", "pl": "", "forms": "", "tr": {"en": "to submit an application", "es": "presentar una solicitud"}, "def": "offiziell um etwas bitten, meist mit einem Formular"}, {"de": "etwas nachweisen", "fr": "prouver, démontrer quelque chose (+ acc.)", "pl": "", "forms": "", "tr": {"en": "to prove, to demonstrate something (+ acc.)", "es": "demostrar, probar algo (+ acus.)"}, "def": "zeigen, dass etwas wahr ist; etwas beweisen"}, {"de": "der Vorfahre", "fr": "l'ancêtre", "pl": "Vorfahren", "forms": "", "tr": {"en": "the ancestor", "es": "el antepasado"}, "def": "ein Familienmitglied aus früheren Generationen"}, {"de": "der Siedler", "fr": "le colon, le pionnier", "pl": "Siedler", "forms": "", "tr": {"en": "the settler", "es": "el colono"}, "def": "eine Person, die in ein neues Gebiet zieht und dort wohnt"}, {"de": "siedeln", "fr": "s'installer, s'établir (pour vivre)", "pl": "", "forms": "siedelt · siedelte · hat gesiedelt", "tr": {"en": "to settle (to live somewhere)", "es": "asentarse, establecerse"}, "def": "sich an einem neuen Ort festsetzen, um dort zu leben"}, {"de": "sich niederlassen in", "fr": "s'installer, s'établir à / dans (+ datif)", "pl": "", "forms": "", "tr": {"en": "to settle in (+ dative)", "es": "establecerse en (+ dativo)"}, "def": "an einem Ort bleiben und dort wohnen"}]}, {"id": "k20261022", "date": "2026-10-22", "words": [{"de": "etwas erleben", "fr": "vivre, connaître quelque chose (une expérience) (+ acc.)", "pl": "", "forms": "", "tr": {"en": "to experience something (+ acc.)", "es": "vivir, experimentar algo (+ acus.)"}, "def": "eine Erfahrung machen, etwas mitmachen"}, {"de": "mit erhobenen Armen", "fr": "les bras levés", "pl": "", "forms": "", "tr": {"en": "with raised arms", "es": "con los brazos en alto"}, "def": "die Arme sind nach oben gestreckt"}, {"de": "unzählig", "fr": "innombrable", "pl": "", "forms": "", "tr": {"en": "countless, innumerable", "es": "innumerable, incontable"}, "def": "so viele, dass man sie nicht zählen kann"}, {"de": "die Abstammung", "fr": "l'origine, l'ascendance", "pl": "", "forms": "", "tr": {"en": "origin, descent, ancestry", "es": "el origen, la ascendencia"}, "def": "die Herkunft einer Person oder Familie"}, {"de": "abstammen von", "fr": "descendre de, être issu de (von + datif)", "pl": "", "forms": "", "tr": {"en": "to be descended from, to come from (von + dative)", "es": "descender de, proceder de (von + dativo)"}, "def": "seine Wurzeln bei jemandem oder irgendwo haben"}, {"de": "ehemalig", "fr": "ancien, ex- (der ehemalige Chef : l'ancien chef)", "pl": "", "forms": "", "tr": {"en": "former, ex- (der ehemalige Chef: the former boss)", "es": "antiguo, ex- (der ehemalige Chef: el antiguo jefe)"}, "def": "früher, nicht mehr aktuell"}, {"de": "allerdings", "fr": "toutefois, cependant (suivi du verbe : Allerdings ist …)", "pl": "", "forms": "", "tr": {"en": "however, though (followed by the verb: Allerdings ist …)", "es": "sin embargo, no obstante (seguido del verbo: Allerdings ist …)"}, "def": "aber, jedoch"}, {"de": "boomen", "fr": "être en plein essor", "pl": "", "forms": "boomt · boomte · hat geboomt", "tr": {"en": "to boom, to thrive", "es": "estar en auge"}, "def": "sehr schnell wachsen, großen Erfolg haben"}, {"de": "hin- und hergerissen sein", "fr": "être tiraillé, partagé", "pl": "", "forms": "", "tr": {"en": "to be torn, to be in two minds", "es": "estar dividido, no saber qué hacer"}, "def": "sich nicht entscheiden können"}, {"de": "etwas überwinden", "fr": "surmonter quelque chose (le mal du pays, une frontière…) (+ acc.)", "pl": "", "forms": "", "tr": {"en": "to overcome something (homesickness, a border…) (+ acc.)", "es": "superar algo (la nostalgia, una frontera…) (+ acus.)"}, "def": "mit einer Schwierigkeit fertig werden"}, {"de": "etwas pflegen", "fr": "entretenir, cultiver quelque chose (une tradition, une amitié…) (+ acc.)", "pl": "", "forms": "", "tr": {"en": "to maintain, to cultivate something (a tradition, a friendship…) (+ acc.)", "es": "cuidar, cultivar algo (una tradición, una amistad…) (+ acus.)"}, "def": "sich um etwas kümmern, damit es lebendig bleibt"}, {"de": "der Nachfahre", "fr": "le descendant", "pl": "Nachfahren", "forms": "", "tr": {"en": "the descendant", "es": "el descendiente"}, "def": "ein Mitglied einer späteren Generation einer Familie"}, {"de": "gelten als", "fr": "être considéré comme, passer pour", "pl": "", "forms": "", "tr": {"en": "to be regarded as, to be considered", "es": "ser considerado como, pasar por"}, "def": "von vielen so gesehen werden"}, {"de": "der Schutz", "fr": "la protection, l'abri", "pl": "", "forms": "", "tr": {"en": "protection, shelter", "es": "la protección, el refugio"}, "def": "Sicherheit vor einer Gefahr"}, {"de": "Schutz suchen", "fr": "chercher refuge, chercher protection", "pl": "", "forms": "", "tr": {"en": "to seek shelter, to seek protection", "es": "buscar refugio, buscar protección"}, "def": "einen sicheren Ort brauchen und ihn finden wollen"}, {"de": "Schutz finden", "fr": "trouver refuge, trouver protection", "pl": "", "forms": "", "tr": {"en": "to find shelter, to find protection", "es": "encontrar refugio, encontrar protección"}, "def": "an einen sicheren Ort kommen"}, {"de": "belastend", "fr": "pesant, éprouvant", "pl": "", "forms": "", "tr": {"en": "stressful, burdensome", "es": "agobiante, duro"}, "def": "schwer zu ertragen, macht Sorgen"}, {"de": "jemanden belasten mit", "fr": "accabler quelqu'un de, peser sur quelqu'un (mit + datif)", "pl": "", "forms": "", "tr": {"en": "to burden someone with (mit + dative)", "es": "cargar a alguien con, agobiar a alguien con (mit + dativo)"}, "def": "jemandem Sorgen oder Probleme geben"}, {"de": "etwas beherrschen", "fr": "maîtriser quelque chose (une langue…) (+ acc.)", "pl": "", "forms": "", "tr": {"en": "to master something (a language…) (+ acc.)", "es": "dominar algo (un idioma…) (+ acus.)"}, "def": "etwas sehr gut können"}, {"de": "etwas zurücklassen", "fr": "laisser quelque chose ou quelqu'un derrière soi (+ acc.)", "pl": "", "forms": "", "tr": {"en": "to leave something or someone behind (+ acc.)", "es": "dejar algo o a alguien atrás (+ acus.)"}, "def": "weggehen, ohne etwas oder jemanden mitzunehmen"}, {"de": "heimisch", "fr": "du pays, local", "pl": "", "forms": "", "tr": {"en": "native, local", "es": "autóctono, local"}, "def": "von hier, aus dieser Gegend"}, {"de": "sich heimisch fühlen", "fr": "se sentir chez soi", "pl": "", "forms": "", "tr": {"en": "to feel at home", "es": "sentirse como en casa"}, "def": "sich irgendwo wie zu Hause fühlen"}, {"de": "sich wohlfühlen", "fr": "se sentir bien (in + datif, mit + datif)", "pl": "", "forms": "fühlt sich wohl · fühlte sich wohl · hat sich wohlgefühlt", "tr": {"en": "to feel good, to feel comfortable (in + dative, mit + dative)", "es": "sentirse bien, sentirse a gusto (in + dativo, mit + dativo)"}, "def": "zufrieden und entspannt sein"}, {"de": "damals", "fr": "à l'époque, autrefois", "pl": "", "forms": "", "tr": {"en": "back then, at that time", "es": "entonces, en aquella época"}, "def": "in der Vergangenheit, zu dieser Zeit"}, {"de": "darunter", "fr": "parmi eux / elles, dont; en dessous", "pl": "", "forms": "", "tr": {"en": "among them, including; underneath", "es": "entre ellos / ellas; debajo"}, "def": "zwischen anderen, als Teil einer Gruppe"}]}, {"id": "k20261029", "date": "2026-10-29", "words": [{"de": "die Stadtführung", "fr": "la visite guidée de la ville", "pl": "Stadtführungen", "forms": "", "tr": {"en": "the guided city tour", "es": "la visita guiada por la ciudad"}, "def": "ein Rundgang mit einem Guide durch eine Stadt"}, {"de": "das Stammlokal", "fr": "le café ou bistrot où l'on a ses habitudes", "pl": "Stammlokale", "forms": "", "tr": {"en": "the regular haunt, one's local (café or pub)", "es": "el bar o café de siempre"}, "def": "ein Café oder eine Kneipe, wo man immer wieder hingeht"}, {"de": "der Stammgast", "fr": "l'habitué, le client régulier", "pl": "Stammgäste", "forms": "", "tr": {"en": "the regular (customer)", "es": "el cliente habitual"}, "def": "jemand, der oft in dasselbe Lokal kommt"}, {"de": "das Geräusch", "fr": "le bruit, le son", "pl": "Geräusche", "forms": "", "tr": {"en": "the sound, the noise", "es": "el ruido, el sonido"}, "def": "etwas, das man hört; ein Ton"}, {"de": "der Lärm", "fr": "le bruit fort, le vacarme", "pl": "", "forms": "", "tr": {"en": "the loud noise, the din", "es": "el ruido fuerte, el estruendo"}, "def": "sehr laute, unangenehme Geräusche"}, {"de": "außerhalb", "fr": "en dehors de, hors de (+ génitif)", "pl": "", "forms": "", "tr": {"en": "outside (of) (+ genitive)", "es": "fuera de (+ genitivo)"}, "def": "nicht drinnen, draußen"}, {"de": "innerhalb", "fr": "à l'intérieur de, en l'espace de (+ génitif)", "pl": "", "forms": "", "tr": {"en": "inside, within (+ genitive)", "es": "dentro de, en el plazo de (+ genitivo)"}, "def": "drinnen; in einer bestimmten Zeit"}, {"de": "übrigens", "fr": "d'ailleurs, au fait", "pl": "", "forms": "", "tr": {"en": "by the way, incidentally", "es": "por cierto, a propósito"}, "def": "nebenbei gesagt"}, {"de": "jemandem einen Heiratsantrag machen", "fr": "demander quelqu'un en mariage", "pl": "", "forms": "", "tr": {"en": "to propose to someone", "es": "pedirle matrimonio a alguien"}, "def": "jemanden fragen: „Willst du mich heiraten?“"}, {"de": "Fernost", "fr": "l'Extrême-Orient (in Fernost : en Extrême-Orient)", "pl": "", "forms": "", "tr": {"en": "the Far East (in Fernost: in the Far East)", "es": "el Extremo Oriente (in Fernost: en el Extremo Oriente)"}, "def": "die Länder in Ostasien, zum Beispiel China oder Japan"}, {"de": "bummeln durch", "fr": "flâner dans (durch + acc.)", "pl": "", "forms": "", "tr": {"en": "to stroll through (durch + acc.)", "es": "pasear por (durch + acus.)"}, "def": "langsam und ohne Ziel spazieren gehen"}, {"de": "etwas ist besetzt", "fr": "quelque chose est occupé (une place, une ligne) (sujet au nominatif)", "pl": "", "forms": "", "tr": {"en": "something is taken, occupied (a seat, a line) (subject in nominative)", "es": "algo está ocupado (un asiento, una línea) (sujeto en nominativo)"}, "def": "etwas ist nicht frei, jemand benutzt es schon"}, {"de": "das Pulsieren", "fr": "le bouillonnement, la pulsation (d'une ville)", "pl": "", "forms": "", "tr": {"en": "the pulsing, the buzz (of a city)", "es": "el bullicio, el latido (de una ciudad)"}, "def": "das lebendige, schnelle Leben einer Stadt"}, {"de": "die Melange", "fr": "le café viennois (café au lait mousseux)", "pl": "Melangen", "forms": "", "tr": {"en": "Viennese coffee (milky coffee with foam)", "es": "el café vienés (café con leche y espuma)"}, "def": "ein Wiener Kaffee mit Milch und Milchschaum"}, {"de": "die Jause", "fr": "le goûter, la collation (en Autriche)", "pl": "Jausen", "forms": "", "tr": {"en": "the snack, light meal (in Austria)", "es": "la merienda, el tentempié (en Austria)"}, "def": "ein kleines Essen zwischendurch (in Österreich)"}, {"de": "sich befinden", "fr": "se trouver (+ préposition de lieu)", "pl": "", "forms": "befindet sich · befand sich · hat sich befunden", "tr": {"en": "to be located (+ preposition of place)", "es": "encontrarse, estar situado (+ preposición de lugar)"}, "def": "irgendwo sein"}, {"de": "fehlerfrei", "fr": "sans faute", "pl": "", "forms": "", "tr": {"en": "error-free, without mistakes", "es": "sin errores"}, "def": "ohne Fehler, ganz richtig"}, {"de": "etwas abbrechen", "fr": "interrompre, abandonner quelque chose (des études…) (+ acc.)", "pl": "", "forms": "", "tr": {"en": "to break off, to drop something (studies…) (+ acc.)", "es": "interrumpir, abandonar algo (los estudios…) (+ acus.)"}, "def": "mit etwas aufhören, bevor es fertig ist"}, {"de": "sich orientieren", "fr": "s'orienter, se repérer", "pl": "", "forms": "orientiert sich · orientierte sich · hat sich orientiert", "tr": {"en": "to find one's way, to get one's bearings", "es": "orientarse"}, "def": "herausfinden, wo man ist und wohin man gehen muss"}, {"de": "etwas ablegen", "fr": "passer (un examen), poser, se défaire de quelque chose (+ acc.)", "pl": "", "forms": "", "tr": {"en": "to take (an exam), to put down, to give up something (+ acc.)", "es": "hacer (un examen), dejar, abandonar algo (+ acus.)"}, "def": "eine Prüfung machen; etwas hinlegen"}, {"de": "sich entschließen zu", "fr": "se décider à (zu + datif)", "pl": "", "forms": "", "tr": {"en": "to decide to (zu + dative)", "es": "decidirse a (zu + dativo)"}, "def": "eine Entscheidung treffen, etwas zu tun"}, {"de": "der Studiengang", "fr": "la filière d'études, le cursus", "pl": "Studiengänge", "forms": "", "tr": {"en": "the degree course, the study programme", "es": "la carrera, el programa de estudios"}, "def": "das Fach, das man an der Universität studiert"}, {"de": "vertraut sein mit", "fr": "bien connaître, être familier de (mit + datif)", "pl": "", "forms": "", "tr": {"en": "to be familiar with (mit + dative)", "es": "estar familiarizado con (mit + dativo)"}, "def": "etwas gut kennen"}, {"de": "hetzen", "fr": "se dépêcher, courir (zu / nach / durch)", "pl": "", "forms": "hetzt · hetzte · ist gehetzt", "tr": {"en": "to rush, to hurry (zu / nach / durch)", "es": "ir con prisas, correr (zu / nach / durch)"}, "def": "sich sehr beeilen, schnell laufen"}, {"de": "sich erinnern an", "fr": "se souvenir de (an + acc.)", "pl": "", "forms": "", "tr": {"en": "to remember (an + acc.)", "es": "acordarse de (an + acus.)"}, "def": "an etwas aus der Vergangenheit denken"}]}];
function seedIki() {
  P.iki = P.iki || {};
  for (const l of IKI_SEED) {
    if (P.iki[l.id]) continue;
    P.iki[l.id] = { date: l.date, t: 1, words: l.words.map(x => ikiParse(x.de, x.fr, { pl: x.pl, forms: x.forms, def: x.def })) };
  }
}
const IKI_TR = {};
for (const l of IKI_SEED) for (const x of l.words) if (x.tr || x.def) {
  const w = ikiParse(x.de, x.fr, { pl: x.pl, forms: x.forms });
  IKI_TR[l.id + "|" + (w.kind === "n" ? w.art + " " + w.base : w.de)] = { fr: x.fr, def: x.def, ...x.tr };
}
seedIki();
function syncIki() {
  for (let i = WORDS.length - 1; i >= 0; i--) if (WORDS[i].iki) WORDS.splice(i, 1);
  for (const t of IKI_THEMES) delete THEME_BY_ID[t.id];
  IKI_THEMES = []; IKI_ALL.words = [];
  const seen = new Set();
  Object.entries(P.iki || {}).filter(([, l]) => !l.del && l.date)
    .sort((a, b) => b[1].date.localeCompare(a[1].date) || b[1].t - a[1].t)
    .forEach(([lid, l]) => {
      const th = { id: "iki-" + lid, lid, date: l.date, get name() { return ikiDateName(this.date); }, desc: "", level: "iki", words: [] };
      const ids = new Set();
      for (const x of l.words || []) {
        if (!x || !x.fr || !(x.de || x.base)) continue;
        const w = ikiWord(lid, x);
        if (ids.has(w.id)) continue;
        ids.add(w.id); th.words.push(w); WORDS.push(w);
        if (!seen.has(w.id)) { seen.add(w.id); IKI_ALL.words.push(w); }
      }
      IKI_THEMES.push(th); THEME_BY_ID[th.id] = th;
    });
}
// "der Tisch" → noun, "abholen" → verb, anything else → word or expression
function ikiParse(de, fr, extra = {}) {
  de = de.trim().replace(/\s+/g, " "); fr = fr.trim();
  const m = /^(der|die|das)\s+(\S.*)$/i.exec(de);
  if (m) {
    const base = m[2][0].toUpperCase() + m[2].slice(1);
    const o = { kind: "n", art: m[1].toLowerCase(), base, fr };
    if (extra.pl && extra.base !== undefined ? extra.base === base : extra.pl) o.pl = extra.pl;
    if (extra.def !== undefined) o.def = String(extra.def).trim();
    return o;
  }
  const verb = extra.kind === "v" || /^(sich )?[a-zäöüß]+(e?n)$/.test(de) && de.length > 3;
  const o = { kind: verb ? "v" : "w", de, fr };
  if (verb && extra.forms) o.forms = extra.forms;
  if (extra.def !== undefined) o.def = String(extra.def).trim();
  return o;
}
function ikiRow(x, lid) {
  const de = x.kind === "n" ? x.art + " " + x.base : x.de, seed = lid && IKI_TR[lid + "|" + de];
  return { de, fr: x.fr || "", kind: x.kind, pl: x.pl || "", base: x.base, forms: x.forms || "", def: x.def !== undefined ? x.def : seed && seed.def || "" };
}
// the app already knows many words: fill in the translation, gender and plural
function ikiLookup(s) {
  const k = norm(s);
  return WORDS.find(w => !w.iki && (norm(w.de) === k || w.base && norm(w.base) === k));
}
function ikiAddRows(list) {
  const have = new Set(IA.rows.map(r => norm(r.de)));
  let n = 0;
  for (const r of list) {
    if (!r.de || have.has(norm(r.de))) continue;
    have.add(norm(r.de)); IA.rows.push(r); n++;
  }
  return n;
}
function ikiAddText() {
  const rows = [];
  for (const line of IA.text.split("\n")) {
    const raw = line.replace(/^[\s•·*\-–—\d.)]+/, "").trim();
    if (!raw) continue;
    // "=" separates German and translation; without it, ":" or " - " do
    const eq = raw.indexOf("=");
    const parts = eq >= 0 ? [raw.slice(0, eq), raw.slice(eq + 1)] : raw.split(/\s*(?::|\s[–—-]\s)\s*/);
    let de = parts[0].trim(), fr = (eq >= 0 ? parts[1] : parts.slice(1).join(" ")).trim(), def = "";
    if (eq >= 0 && fr.includes("=")) { const e2 = fr.indexOf("="); def = fr.slice(e2 + 1).trim(); fr = fr.slice(0, e2).trim(); }
    if (!de) continue;
    const known = ikiLookup(de);
    if (known) rows.push({ de: known.de, fr: fr || known.fr, kind: known.kind, pl: known.pl || "", base: known.base, forms: known.forms || "", def });
    else rows.push({ de, fr, kind: "", pl: "", forms: "", def });
  }
  const n = ikiAddRows(rows);
  IA.text = "";
  IA.msg = n ? (n === 1 ? "1 mot ajouté." : `${n} mots ajoutés.`) + (IA.rows.some(r => !r.fr) ? " Complète les traductions qui manquent." : "") : "Aucun nouveau mot.";
  render();
}

// photos of the board are no longer kept: free what older versions stored on this device
try { indexedDB.deleteDatabase("wortschatz-iki"); } catch (e) {}

/* the IKI page */
function ikiView() {
  if (IA) return ikiForm();
  const cta = `<button class="cta" data-ikiadd="1"><div><h2>Nouveau cours</h2><p>Ajoute la date du cours et ses mots, puis entraîne-toi dessus.</p></div><span class="go">Ajouter →</span></button>`;
  if (!IKI_THEMES.length) return cta + `<p class="note">Les mots de tes cours d'allemand. Chaque cours garde sa date et a son propre quiz. Ces mots restent séparés du reste de l'app.</p>`;
  return cta + quizView(IKI_ALL.words, { themes: IKI_THEMES, side: `
    <section class="section ikimine">
      <span class="label">Mes cours</span>
      <div class="ikil">${IKI_THEMES.map(t => `
        <div class="ikic">
          <div class="ikit"><b>${esc(t.name)}</b><span>${t.words.length} ${t.words.length > 1 ? "mots" : "mot"}</span></div>
          <button class="chip" data-ikiedit="${t.lid}">Voir les mots</button>
        </div>`).join("")}
      </div>
    </section>` });
}
function ikiForm() {
  if (IA.lid && !IA.editing) return ikiShow();
  const missing = IA.rows.filter(r => r.de.trim() && !r.fr.trim()).length;
  return `
    <section class="section ikiform">
      <h2>${IA.lid ? "Les mots du cours" : "Nouveau cours"}</h2>
      <label class="label" for="iki-date">Date du cours</label>
      <input type="date" id="iki-date" class="search" value="${esc(IA.date)}" max="2100-12-31">
      <p class="note">Sur iPhone, pour reprendre les mots d'une photo du tableau : ouvre la photo dans Photos, appuie longuement sur un mot, choisis « Tout sélectionner » puis « Copier », et colle le texte ci-dessous. Les mots que l'app connaît déjà reçoivent leur traduction automatiquement.</p>
      ${IA.msg ? `<p class="note ikimsg" role="status">${esc(IA.msg)}</p>` : ""}
      <details class="addbox" open><summary>+ Ajouter des mots à la main</summary>
        <div class="mform">
          <textarea id="iki-text" class="search" rows="4" lang="de" placeholder="Un mot par ligne, avec ou sans traduction, ex. der Tisch = la table">${esc(IA.text)}</textarea>
          <button class="secondary" id="iki-addtext">Ajouter ces mots</button>
        </div>
      </details>
      <span class="label">Mots du cours · ${IA.rows.length}${missing ? ` · ${missing} sans traduction` : ""}</span>
      ${IA.rows.length ? `<div class="ikirows">${IA.rows.map((r, i) => `
        <div class="ikirow${r.de.trim() && !r.fr.trim() ? " miss" : ""}">
          <input lang="de" data-ikide="${i}" value="${esc(r.de)}" placeholder="Allemand" aria-label="Allemand">
          <input data-ikifr="${i}" value="${esc(r.fr)}" placeholder="Traduction" aria-label="Traduction">
          <input lang="de" data-ikidf="${i}" value="${esc(r.def || "")}" placeholder="Synonyme ou définition en allemand (facultatif)" aria-label="Synonyme ou définition en allemand">
          <button class="del" data-ikidel="${i}" aria-label="Supprimer ce mot">✕</button>
        </div>`).join("")}</div>` : `<p class="note">Aucun mot pour l'instant.</p>`}
      <button class="chip" data-ikirow="1">+ Une ligne</button>
      <div class="row2"><button class="secondary" id="iki-cancel">Annuler</button><button class="primary" id="iki-save">Enregistrer</button></div>
      ${IA.lid ? `<button class="chip ikidanger" id="iki-delete">Supprimer ce cours</button>` : ""}
    </section>`;
}
// a saved lesson: its words in the same style as the Lexique, "Modifier" opens the editor
function ikiShow() {
  const th = THEME_BY_ID["iki-" + IA.lid];
  const words = th ? th.words : [];
  return `
    <section class="section ikiform">
      <h2>${esc(ikiDateName(IA.date))}</h2>
      <div class="row2"><button class="secondary" id="iki-cancel">Retour</button><button class="primary" id="iki-modify">Modifier</button></div>
      <span class="label">Les mots du cours · ${words.length}</span>
      <div class="lex">${words.map(wordRow).join("")}</div>
      <button class="secondary" id="iki-modify2">Modifier les mots</button>
    </section>`;
}
function ikiInput(el) {
  if (el.id === "iki-date") IA.date = el.value;
  else if (el.id === "iki-text") IA.text = el.value;
  else if (el.dataset.ikide !== undefined) IA.rows[+el.dataset.ikide].de = el.value;
  else if (el.dataset.ikidf !== undefined) IA.rows[+el.dataset.ikidf].def = el.value;
  else if (el.dataset.ikifr !== undefined) { IA.rows[+el.dataset.ikifr].fr = el.value; el.closest(".ikirow").classList.toggle("miss", !!IA.rows[+el.dataset.ikifr].de.trim() && !el.value.trim()); }
}
async function ikiEdit(lid) {
  const l = P.iki && P.iki[lid];
  if (!l) return;
  IA = { lid, date: l.date, rows: (l.words || []).map(x => ikiRow(x, lid)), text: "", msg: "", editing: false };
  render(); window.scrollTo(0, 0);
}
function ikiSave() {
  const rows = IA.rows.filter(r => r.de.trim());
  if (!IA.date) { IA.msg = "Indique la date du cours."; render(); return; }
  if (!rows.length) { IA.msg = "Ajoute au moins un mot."; render(); return; }
  const miss = rows.filter(r => !r.fr.trim()).length;
  if (miss) { IA.msg = miss === 1 ? "Il manque une traduction." : `Il manque ${miss} traductions.`; render(); return; }
  const lid = IA.lid || "c" + Date.now().toString(36);
  P.iki = P.iki || {};
  P.iki[lid] = { date: IA.date, t: Date.now(), words: rows.map(r => ikiParse(r.de, r.fr, r)) };
  syncIki(); persist();
  IA = null; render(); window.scrollTo(0, 0);
}
function ikiDelete() {
  const lid = IA.lid;
  if (!lid || !confirm(tr("Supprimer ce cours et ses mots ?"))) return;
  P.iki[lid] = { del: true, t: Date.now() };
  syncIki(); persist();
  IA = null; render(); window.scrollTo(0, 0);
}
function ikiClick(t) {
  if (t.dataset.ikiadd) { IA = { lid: null, date: isoToday(), rows: [], text: "", msg: "" }; render(); window.scrollTo(0, 0); return true; }
  if (t.dataset.ikiedit) { ikiEdit(t.dataset.ikiedit); return true; }
  if (!IA) return false;
  if (t.id === "iki-addtext") { ikiAddText(); return true; }
  if (t.dataset.ikirow) { IA.rows.push({ de: "", fr: "", kind: "", pl: "", forms: "", def: "" }); render(); const els = app.querySelectorAll("[data-ikide]"); els.length && els[els.length - 1].focus(); return true; }
  if (t.dataset.ikidel) { IA.rows.splice(+t.dataset.ikidel, 1); render(); return true; }
  if (t.id === "iki-cancel") { IA = null; render(); window.scrollTo(0, 0); return true; }
  if (t.id === "iki-save") { ikiSave(); return true; }
  if (t.id === "iki-modify" || t.id === "iki-modify2") { IA.editing = true; render(); window.scrollTo(0, 0); return true; }
  if (t.id === "iki-delete") { ikiDelete(); return true; }
  return false;
}

/* ---------- own words ---------- */
const MINE_THEME = { id: "mine", name: "Mes mots", desc: "Les mots que tu as ajoutés", level: "mine", words: [] };
THEMES.push(MINE_THEME);
THEME_BY_ID.mine = MINE_THEME;
function mineWord(id, m) {
  let w;
  if (m.kind === "n") w = { kind: "n", art: m.art, base: m.base, de: m.art + " " + m.base, pl: m.pl || "", plOnly: false, fr: m.fr };
  else if (m.kind === "v") w = { kind: "v", de: m.de, forms: m.forms || "", fr: m.fr };
  else w = { kind: / /.test(m.de) ? "p" : "w", de: m.de, fr: m.fr };
  w.theme = "mine"; w.level = "mine"; w.id = id; w.mine = true;
  return w;
}
function syncMine() {
  for (let i = WORDS.length - 1; i >= 0; i--) if (WORDS[i].mine) WORDS.splice(i, 1);
  MINE_THEME.words = [];
  const taken = new Set(WORDS.filter(w => !w.iki).map(w => w.id));
  const entries = Object.entries(P.mine || {}).filter(([, m]) => !m.del).sort((a, b) => a[1].t - b[1].t);
  for (const [id, m] of entries) {
    if (taken.has(id)) continue;
    const w = mineWord(id, m);
    MINE_THEME.words.push(w); WORDS.push(w);
  }
  syncIki();
}
syncMine();
function mineForm() {
  const k = settings.mkind || "n";
  return `<details class="addbox"${settings.mopen ? " open" : ""}><summary>+ Ajouter un mot à « Mes mots »</summary>
    <form id="mf" class="mform" autocomplete="off">
      <div class="dirs" role="group" aria-label="Type">${[["n", "Nom"], ["v", "Verbe"], ["w", "Autre / expression"]].map(([x, l]) => `<button type="button" class="chip" data-mkind="${x}" aria-pressed="${k === x}">${l}</button>`).join("")}</div>
      ${k === "n" ? `<div class="mrow"><select id="m-art" aria-label="Article"><option>der</option><option>die</option><option>das</option></select><input id="m-de" lang="de" placeholder="Nom (ex. Staubsauger)" required></div>
        <input id="m-pl" lang="de" placeholder="Pluriel (facultatif, ex. Staubsauger)">`
        : `<input id="m-de" lang="de" placeholder="${k === "v" ? "Infinitif (ex. abholen)" : "Mot ou expression en allemand"}" required>`}
      ${k === "v" ? `<input id="m-forms" lang="de" placeholder="Formes (facultatif) : holt ab · holte ab · hat abgeholt">` : ""}
      <input id="m-fr" placeholder="Traduction en français" required>
      <button class="primary" type="submit">Ajouter</button>
      <p class="note" id="m-msg">Tes mots sont enregistrés sur ton compte et reviennent dans la Révision du jour.</p>
    </form></details>`;
}
function addMine() {
  const v = id => { const el = document.getElementById(id); return el ? el.value.trim() : ""; };
  const k = settings.mkind || "n";
  const fr = v("m-fr");
  let de = v("m-de");
  if (!de || !fr) return;
  const m = { kind: k, fr, t: Date.now() };
  if (k === "n") { m.art = v("m-art"); m.base = de[0].toUpperCase() + de.slice(1); m.pl = v("m-pl"); de = m.art + " " + m.base; }
  else { m.de = de; if (k === "v") m.forms = v("m-forms"); }
  const id = hash(de);
  const existing = WORDS.find(w => w.id === id && !w.mine && !w.iki);
  const msg = document.getElementById("m-msg");
  if (existing) { msg.textContent = `« ${de} » est déjà dans l'app (thème « ${THEME_BY_ID[existing.theme].name} »).`; return; }
  P.mine = P.mine || {};
  P.mine[id] = m;
  syncMine(); persist();
  settings.mopen = true; saveSettings();
  render();
  const m2 = document.getElementById("m-msg"); if (m2) m2.textContent = `« ${de} » ajouté. Tu as ${MINE_THEME.words.length} mot${MINE_THEME.words.length > 1 ? "s" : ""} perso.`;
  const f = document.getElementById("m-de"); f && f.focus();
}
function delMine(id) {
  if (!P.mine || !P.mine[id]) return;
  P.mine[id] = { del: true, t: Date.now() };
  syncMine(); persist(); renderLex();
}

/* ---------- phrases tabs ---------- */
function phrTab() {
  const items = sitItems("psit");
  return `
    ${sitChips("psit")}
    ${trainLink("cards")}
    ${statsBox(items, "ph", "phrases")}
    <div id="phlist">${(settings.psit && settings.psit !== "all" ? [SIT_BY_ID[settings.psit]] : SITS).map(s => `
      <section class="section" style="margin-bottom:18px">
        <span class="label">${esc(s.name)} · ${esc(s.desc)}</span>
        <div class="lex">${s.items.map(it => `<div class="row" data-notr><div class="de" lang="de" style="font-weight:400">${esc(it.de)}</div><div class="fr">${esc(it.fr)}</div><div class="side">${spkBtn(it.de, true)}</div></div>`).join("")}</div>
      </section>`).join("")}</div>`;
}
function orderTab() {
  // always the whole set of phrases (Loris asked to drop the situation filter here)
  const items = PH;
  return `
    ${trainLink("order")}
    ${autoSwitch()}
    ${statsBox(items, "ord", "phrases")}
    <div class="tipcard"><b>Les 3 places du verbe</b><ul>
      <li>Phrase simple : le verbe conjugué est en <b>2e position</b>. Morgen <b>fahre</b> ich nach Berlin.</li>
      <li>Avec un modal, le parfait ou un verbe séparable : la 2e partie va <b>à la fin</b>. Ich <b>muss</b> heute <b>arbeiten</b>.</li>
      <li>Après weil, dass, ob, wenn : le verbe conjugué va <b>tout à la fin</b>. …, dass ich angerufen <b>habe</b>.</li>
    </ul></div>
    <p class="note">Parfois, plusieurs ordres sont corrects. L'exercice attend la phrase d'origine, qui est la plus naturelle.</p>
    ${ficheLink(4, "Fiche :")}${ficheLink(17, "Fiche :")}`;
}
function dictTab() {
  const items = sitItems("dsit");
  return `
    ${sitChips("dsit")}
    ${canSpeak ? `<button class="cta" data-vx="dict">
      <div><h2>Dictée</h2><p>8 phrases lues à voix haute : écris ce que tu entends.</p></div><span class="go">Jouer →</span>
    </button>` : `<div class="tipcard">Ton navigateur ne peut pas lire l'audio, la dictée n'est donc pas disponible ici. Essaie depuis un autre navigateur (Chrome, Safari ou Edge).</div>`}
    ${autoSwitch()}
    ${statsBox(items, "dic", "phrases")}
    <p class="note">Tu peux réécouter autant de fois que tu veux, et aussi au ralenti. Les majuscules et la ponctuation ne comptent pas, mais les umlauts et le ß, si. La voix dépend de ton appareil.</p>`;
}

/* ---------- error notebook: every wrong answer stays listed until that item is answered right ---------- */
// P.err["cat:key"] = [time of last change, open (1) or corrected (0), times wrong, extra]
const ERR_CATS = [
  ["w", "Vocabulaire"], ["art", "Articles (der, die, das)"], ["pl", "Pluriels"], ["irr", "Conjugaison"],
  ["vp", "Mots à préposition"], ["dk", "Déclinaisons"], ["ord", "Ordre des mots"], ["dic", "Dictée"],
  ["ph", "Phrases du quotidien"], ["fx", "Exercices des fiches"],
];
const ERR_DRILL = { pl: "plural", irr: "conj", vp: "prep", dk: "dek", ord: "order", dic: "dict", ph: "cards" };
function noteErr(cat, key, ok, extra) {
  P.err = P.err || {};
  const k = cat + ":" + key, cur = P.err[k];
  if (ok) { if (cur && cur[1]) P.err[k] = [Date.now(), 0, cur[2], cur[3]]; }
  else P.err[k] = [Date.now(), 1, (cur && cur[1] ? cur[2] : 0) + 1, extra != null ? extra : cur ? cur[3] : 0];
}
function openErrs(cat) {
  return Object.entries(P.err || {}).filter(([k, e]) => e[1] && k.startsWith(cat + ":"))
    .sort((a, b) => b[1][0] - a[1][0]).map(([k, e]) => ({ key: k.slice(cat.length + 1), e }));
}
function errCount() { return ERR_CATS.reduce((n, [c]) => n + (c === "dic" && !canSpeak ? 0 : openErrs(c).filter(o => errItem(c, o.key, o.e)).length), 0); }
function mergeErr(other) {
  let changed = false;
  P.err = P.err || {};
  for (const [k, e] of Object.entries((other && other.err) || {})) {
    const cur = P.err[k];
    if (!cur || e[0] > cur[0]) { P.err[k] = e; changed = true; }
  }
  // forget corrected errors after two months so the store stays small
  const old = Date.now() - 60 * 864e5;
  for (const [k, e] of Object.entries(P.err)) if (!e[1] && e[0] < old) delete P.err[k];
  return changed;
}
const WORD_BY_ID = id => WORDS.find(w => w.id === id);
const PH_BY_KEY = k => PH.find(it => it.key === k);
// turn a stored error back into the item it was about (null if it no longer exists, e.g. a deleted own word)
function errItem(cat, key, e) {
  if (cat === "w" || cat === "art" || cat === "pl") { const w = WORD_BY_ID(key); return w ? { w } : null; }
  if (cat === "irr") { const v = IRR.find(x => x.key === key); return v ? { v, tense: e[3] || "pres" } : null; }
  if (cat === "vp") { const it = VP.find(x => x.key === key); return it ? { it } : null; }
  if (cat === "dk") { const [ck, id] = key.split("."); const w = WORD_BY_ID(id); return w ? { w, c: ck[0], type: ck.slice(2) } : null; }
  if (cat === "ord" || cat === "dic" || cat === "ph") { const it = PH_BY_KEY(key); return it ? { it } : null; }
  if (cat === "fx") { const [id, i] = key.split(".").map(Number); const f = FICHE_BY_ID[id]; return f && f.ex && f.ex.items[i] ? { f, item: f.ex.items[i] } : null; }
  return null;
}
function errRow(cat, x, e) {
  const n = e[2] > 1 ? `<span class="errn">×${e[2]}</span>` : "";
  const row = (de, fr, say, attrs) => `<div class="row errrow" ${attrs || ""}><div><div>${de}${n}</div><div class="fr" data-notr>${fr}</div></div>${say ? spkBtn(say, true) : ""}</div>`;
  if (cat === "w" || cat === "art") return row(`<b data-notr>${deHTML(x.w)}</b>`, esc(x.w.fr), x.w.de);
  if (cat === "pl") return row(`<b data-notr>${deHTML(x.w)} → <span class="art art-pl">die</span> ${esc(x.w.pl)}</b>`, esc(x.w.fr), "die " + x.w.pl);
  if (cat === "irr") return row(`<b lang="de">${esc(x.v.inf)}</b> <span class="tag">${TENSES[x.tense]}</span>`, esc(x.v.fr), x.v.inf);
  if (cat === "vp") return row(`<span data-notr>${vpHead(x.it)}</span>`, esc(x.it.fr), x.it.ex);
  if (cat === "dk") return row(`<b data-notr>${deHTML(x.w)}</b> <span class="tag">${DK_CASES[x.c]}</span>`, esc(x.w.fr), x.w.de);
  if (cat === "fx") return `<button class="row errrow fxrow" data-fiche="${x.f.id}"><div><div><span class="tag">${x.f.id}</span> <span data-notr>${esc(x.item.q)}</span>${n}</div><div class="fr" data-notr>→ ${esc(x.item.answers[0])}</div></div><span aria-hidden="true">→</span></button>`;
  return row(`<b lang="de">${esc(x.it.de)}</b>`, esc(x.it.fr), x.it.de);
}
function errView() {
  const groups = ERR_CATS.map(([cat, label]) => {
    const items = openErrs(cat).map(o => ({ o, x: errItem(cat, o.key, o.e) })).filter(r => r.x);
    return { cat, label, items };
  }).filter(g => g.items.length && (g.cat !== "dic" || canSpeak));
  const total = groups.reduce((s, g) => s + g.items.length, 0);
  if (!total) return `<section class="section"><div class="empty-err"><b>Aucune erreur en attente</b><p class="note">Chaque réponse fausse, dans n'importe quel exercice, s'ajoute ici. Elle disparaît dès que tu réponds juste à la même question.</p></div></section>`;
  return `<section class="section">
      <p class="note">${total > 1 ? `${total} erreurs à corriger. Chacune disparaît` : `${total} erreur à corriger. Elle disparaît`} dès que tu y réponds juste, ici ou dans un exercice.</p>
    </section>
    <div class="dgrid">${groups.map(g => {
      const SHOW = g.items.length <= 5 ? 5 : 4, more = g.items.length - SHOW;
      const rows = g.items.map(r => errRow(g.cat, r.x, r.o.e));
      return `<section class="section errgroup">
        <div class="errhead"><span class="label">${g.label} · ${g.items.length}</span>${g.cat !== "fx" ? `<button class="primary sm" data-errgo="${g.cat}">Corriger →</button>` : ""}</div>
        <div class="missed">${rows.slice(0, SHOW).join("")}</div>
        ${more > 0 ? `<details class="errmore"><summary>Voir les ${more} autres</summary><div class="missed">${rows.slice(SHOW).join("")}</div></details>` : ""}
      </section>`;
    }).join("")}</div>`;
}
// a session made only of the open errors of one category
function startErrSession(cat) {
  const list = openErrs(cat).map(o => ({ o, x: errItem(cat, o.key, o.e) })).filter(r => r.x).slice(0, 15);
  if (!list.length) return;
  if (cat === "w" || cat === "art") {
    const qs = list.map(({ o, x }) => {
      if (cat === "art") return buildQuestion("article", x.w);
      const type = ["de2fr", "fr2de", "type"].includes(o.e[3]) || o.e[3] === "dd" && x.w.def ? o.e[3] : "fr2de";
      const q = { w: x.w, type, answered: false };
      if (type === "de2fr" || type === "fr2de" || type === "dd") q.options = choicesFor(x.w, type);
      return q;
    });
    S = { mode: cat === "art" ? "article" : "qcm", themeId: "all", err: cat, qs: shuffle(qs), i: 0, results: [], streak: 0, best: 0 };
    view = "quiz"; render(); window.scrollTo(0, 0);
    return;
  }
  const kind = ERR_DRILL[cat];
  const qs = shuffle(list.map(({ x }) => {
    if (cat === "irr") return conjQuestion(x.v, x.tense);
    if (cat === "vp") return { it: x.it };
    if (cat === "pl") return { key: x.w.id, w: x.w };
    if (cat === "dk") return dkQuestion(x.w, x.c, x.type);
    if (cat === "ord") { const o = orderTokens(x.it.de); return { it: x.it, toks: o.toks, end: o.end, pool: shuffle(o.toks.map((t, i) => i)), built: [] }; }
    return { it: x.it };
  }));
  VX = { kind, weakOnly: true, err: cat, i: 0, results: [], qs };
  view = "vx"; render(); window.scrollTo(0, 0);
}

/* ---------- drill sessions ---------- */
let VX = null;
const VX_LABEL = { conj: "Conjugaison", prep: "Prépositions", dek: "Déclinaisons", plural: "Pluriels", order: "Ordre des mots", dict: "Dictée", cards: "Phrases du quotidien" };
function startVX(kind, themeId) {
  const weakOnly = kind.endsWith("-weak");
  const k = kind.replace("-weak", "");
  const unit = UNIT_OF_THEME(themeId);
  let qs = [];
  if (unit && k === "conj") qs = pickV(unit.verbs.map(x => x.v), "irr", 10, weakOnly).map(v => conjQuestion(v, unit.verbs.find(x => x.v === v).tense));
  else if (unit && k === "prep") qs = pickV(unit.vps, "vp", 15, weakOnly).map(it => ({ it }));
  else if (k === "conj") {
    const t = settings.ctense || "mix";
    qs = pickV(activeIrr(), "irr", 10, weakOnly).map(v => conjQuestion(v, t === "mix" ? ["pres", "prat", "perf"][Math.floor(Math.random() * 3)] : t));
  } else if (k === "prep") qs = pickV(VP, "vp", 15, weakOnly).map(it => ({ it }));
  else if (k === "dek") qs = shuffle(dkNouns()).slice(0, 10).map(w => dkQuestion(w));
  else if (k === "plural") qs = pickV((themeId && themeId !== "all" ? eligible("plural", THEME_BY_ID[themeId].words) : plNouns()).map(w => Object.assign({ key: w.id }, { w })), "pl", 10, weakOnly);
  else if (k === "order") qs = pickV(PH, "ord", 8, weakOnly).map(it => { const o = orderTokens(it.de); return { it, toks: o.toks, end: o.end, pool: shuffle(o.toks.map((t, i) => i)), built: [] }; });
  else if (k === "dict") qs = pickV(sitItems("dsit"), "dic", 8, weakOnly).map(it => ({ it }));
  else if (k === "cards") qs = pickV(sitItems("psit"), "ph", 10, weakOnly).map(it => ({ it }));
  if (!qs.length) return;
  VX = { kind: k, weakOnly, themeId, i: 0, results: [], qs };
  view = "vx"; render(); window.scrollTo(0, 0);
}
function conjQuestion(v, tense) {
  let k;
  if (tense === "pres") {
    const irr = [0, 1, 2, 3, 4, 5].filter(i => v.presIrr[i]);
    k = irr.length && Math.random() < .8 ? irr[Math.floor(Math.random() * irr.length)] : Math.floor(Math.random() * 6);
  } else k = Math.floor(Math.random() * 6);
  const answers = [v[tense][k]];
  if (tense === "prat" && k === 1 && v.pratAlt) answers.push(v.pratAlt);
  return { v, tense, k, answers };
}
const PRON_RE = /^(ich|du|er|sie|es|wir|ihr|man) /;
function typedCheck(q, val) {
  const got = norm(val);
  if (VX.kind === "conj") return q.answers.some(a => norm(a) === got.replace(PRON_RE, ""));
  if (VX.kind === "plural") return norm(q.w.pl) === got.replace(/^die /, "");
  if (VX.kind === "dek") return norm(q.answer) === got;
  return false;
}
function dictWords(s) { return s.replace(/[.,!?;:„“"«»]/g, " ").split(/\s+/).filter(Boolean); }
function dictCheck(target, typed) {
  const a = dictWords(target), b = dictWords(typed);
  const A = a.map(x => x.toLowerCase()), B = b.map(x => x.toLowerCase());
  // LCS alignment
  const L = Array.from({ length: A.length + 1 }, () => new Array(B.length + 1).fill(0));
  for (let i = A.length - 1; i >= 0; i--) for (let j = B.length - 1; j >= 0; j--) L[i][j] = A[i] === B[j] ? L[i + 1][j + 1] + 1 : Math.max(L[i + 1][j], L[i][j + 1]);
  const marks = []; let i = 0, j = 0;
  while (i < A.length) {
    if (j < B.length && A[i] === B[j]) { marks.push([a[i], true]); i++; j++; }
    else if (j < B.length && L[i][j + 1] >= L[i + 1][j]) j++;
    else { marks.push([a[i], false]); i++; }
  }
  const missing = marks.filter(m => !m[1]).length;
  const extra = B.length - (A.length - missing);
  return { ok: missing === 0 && extra === 0, marks, missing, extra };
}
function renderVX() {
  const q = VX.qs[VX.i];
  const k = VX.kind;
  const steps = VX.qs.map((_, n) => `<i class="${n < VX.results.length ? (VX.results[n] ? "ok" : "ko") : n === VX.i ? "cur" : ""}"></i>`).join("");
  const top = `<div class="qtop"><button class="x" id="quit" aria-label="Quitter">✕ Quitter</button><div class="steps" aria-hidden="true">${steps}</div><span class="qcount num">${VX.i + 1}/${VX.qs.length}</span></div>`;
  const umlauts = `<div class="umlauts">${["ä", "ö", "ü", "ß"].map(c => `<button type="button" data-ins="${c}">${c}</button>`).join("")}</div>`;
  const typeForm = (pron, ph) => `<form class="typebox" id="vf" autocomplete="off">
      <div class="pronin">${pron ? `<span class="pron">${esc(pron)}</span>` : ""}<input id="vi" type="text" lang="de" autocapitalize="off" autocorrect="off" spellcheck="false" placeholder="${esc(ph)}" value="${esc(q.typed || "")}" ${q.answered ? `disabled class="${q.ok ? "right" : "wrong"}"` : ""}></div>
      ${q.answered ? "" : `${umlauts}<div class="row2"><button type="button" class="secondary" id="vskip">Je ne sais pas</button><button class="primary" type="submit">Valider</button></div>`}
    </form>`;
  let card = "", answerHTML = "";
  if (k === "conj") {
    const v = q.v;
    card = `<div class="qcard">
      <div class="qkind"><span class="label">Conjugue</span><span class="theme-name">${TENSES[q.tense]} · ${v.level}${v.particle ? " · séparable" : ""}</span></div>
      <div class="prompt" lang="de">${esc(v.inf)}</div><div class="hint" data-notr>${esc(v.fr)}</div>
      <div class="cask"><span class="pill">${TENSES[q.tense]}</span><span class="pill pill-p" lang="de">${PERSONS[q.k]}</span></div>
    </div>`;
    answerHTML = typeForm(PERSONS[q.k].split("/")[0], q.tense === "perf" ? "auxiliaire + participe" : v.particle ? "verbe + particule" : "forme conjuguée");
  } else if (k === "prep") {
    const it = q.it;
    card = `<div class="qcard">
      <div class="qkind"><span class="label">Quelle préposition ?</span><span class="theme-name" data-notr>${esc(it.fr)}</span></div>
      <div class="prompt" lang="de">${esc(it.verb)} <span class="gap">${q.answered || q.step === "case" ? esc(it.prep) : "___"}</span></div>
      <div class="ex-de qsent" lang="de">${q.answered ? it.exHTML : it.gapHTML}</div>
      ${CONTR[it.token] && !q.answered ? `<div class="hint">Ici, la préposition est contractée avec l'article.</div>` : ""}
    </div>`;
    if (q.step === "case") {
      answerHTML = `<div class="hint" style="text-align:center"><b>${esc(it.prep)}</b> est juste. Avec quel cas ?</div><div class="cases">${["A", "D"].map(c => `<button class="choice" data-case="${c}">+ ${CASE_NAME[c]}</button>`).join("")}</div>`;
    } else if (q.answered && q.caseWrong) {
      answerHTML = `<div class="cases">${["A", "D"].map(c => `<button class="choice ${c === it.cas ? "right" : c === q.pickedCase ? "wrong" : ""}" disabled>+ ${CASE_NAME[c]}</button>`).join("")}</div>`;
    } else {
      answerHTML = `<div class="preps">${PREPS.map(p => {
        const cls = q.answered ? (p === it.prep ? "right" : p === q.picked ? "wrong" : "") : "";
        return `<button class="choice ${cls}" data-prep="${esc(p)}" ${q.answered ? "disabled" : ""}>${esc(p)}</button>`;
      }).join("")}</div>`;
    }
  } else if (k === "dek") {
    const sg = !!settings.dkgender;
    card = `<div class="qcard${sg ? " show-g" : ""}">
      <div class="qkind"><span class="label">${q.mode === "adj" ? "Article + adjectif" : "Article"}</span><span class="theme-name" data-notr>${esc(q.w.fr)}</span></div>
      <div class="ex-de qsent dksent" lang="de">${q.answered ? q.fullHTML : q.promptHTML}</div>
      ${sg ? `<div class="gline"><span class="gtag g-${q.g}">${DK_GENDER[q.g]}</span><span class="hint">Nom : <span lang="de" data-notr>${esc(q.w.de)}</span></span></div>` : ""}
      <div class="hint">Écris ${q.mode === "adj" ? "l'article et l'adjectif déclinés" : "l'article décliné"} à la place de l'encadré.</div>
      ${q.answered ? "" : `<button class="chip gchip" id="dkg" type="button" aria-pressed="${sg}">${sg ? "Masquer le genre du nom" : "Afficher le genre du nom"}</button>`}
    </div>`;
    answerHTML = (q.answered ? "" : `<button class="rulebtn" id="dkpop" type="button"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3.5" y="4" width="17" height="16" rx="2"/><path d="M3.5 9.5h17M3.5 14.5h17M10 4v16"/></svg>Voir les tableaux de la règle</button>`) + typeForm("", q.mode === "adj" ? "ex. dem neuen" : "ex. dem");
  } else if (k === "plural") {
    const w = q.w;
    card = `<div class="qcard">
      <div class="qkind"><span class="label">Le pluriel ?</span><span class="theme-name">${esc(THEME_BY_ID[w.theme].name)}</span></div>
      <div class="prompt" lang="de">${deHTML(w)}</div><div class="hint" data-notr>${esc(w.fr)}</div>
    </div>`;
    answerHTML = typeForm("die", "pluriel");
  } else if (k === "order") {
    const used = new Set(q.built);
    card = `<div class="qcard">
      <div class="qkind"><span class="label">Remets dans l'ordre</span><span class="theme-name">${esc(SIT_BY_ID[q.it.sit].name)}</span></div>
      <div class="hint fr-big" data-notr>${esc(q.it.fr)}</div>
      <div class="built ${q.answered ? (q.ok ? "right" : "wrong") : ""}">${q.built.length ? q.built.map((ti, n) => `<button class="tok on" data-unpick="${n}" ${q.answered ? "disabled" : ""}>${esc(q.toks[ti])}</button>`).join("") : `<span class="hint">Touche les mots ci-dessous…</span>`}<span class="tok-end">${esc(q.end)}</span></div>
    </div>`;
    answerHTML = q.answered ? "" : `<div class="pool">${q.pool.map(ti => used.has(ti) ? `<span class="tok ghost">${esc(q.toks[ti])}</span>` : `<button class="tok" data-pick-tok="${ti}">${esc(q.toks[ti])}</button>`).join("")}</div>
      <div class="row2"><button class="secondary" id="vclear">Effacer</button><button class="primary" id="vcheck" ${q.built.length === q.toks.length ? "" : "disabled"}>Valider</button></div>`;
  } else if (k === "dict") {
    card = `<div class="qcard">
      <div class="qkind"><span class="label">Écris ce que tu entends</span><span class="theme-name">${esc(SIT_BY_ID[q.it.sit].name)}</span></div>
      <div class="listen"><button class="secondary" data-listen="1">▶ Écouter</button><button class="secondary" data-listen="0.6">Au ralenti</button></div>
      ${q.answered ? `<div class="ex-de qsent" lang="de">${q.res.marks.map(([w, ok]) => ok ? esc(w) : `<b class="miss">${esc(w)}</b>`).join(" ")}</div>` : ""}
    </div>`;
    answerHTML = typeForm("", "Ta phrase en allemand");
  } else if (k === "cards") {
    card = `<div class="qcard">
      <div class="qkind"><span class="label">Dis-le en allemand</span><span class="theme-name">${esc(SIT_BY_ID[q.it.sit].name)}</span></div>
      <div class="prompt fr" data-notr>${esc(q.it.fr)}</div>
      ${q.flipped ? `<div class="card-back"><div class="ex-de qsent" lang="de">${esc(q.it.de)}</div></div>` : ""}
    </div>`;
    answerHTML = !q.flipped ? `<button class="primary" id="vflip">Voir la phrase</button>`
      : !q.answered ? `<div class="row2"><button class="secondary" data-vself="0">À revoir</button><button class="primary" data-vself="1">Je savais</button></div>` : "";
  }
  app.innerHTML = top + card + answerHTML + (q.answered ? vxFeedback(q) : "");
  const vi = document.getElementById("vi");
  if (vi && !q.answered) vi.focus({ preventScroll: true });
  if (q.answered) { const c = document.getElementById("vnext"); c && c.focus({ preventScroll: true }); }
  if (k === "dict" && !q.answered && !q.played) { q.played = true; setTimeout(() => speak(q.it.de, 0.9), 250); }
}
function vxFeedback(q) {
  const ok = q.ok, k = VX.kind;
  const title = ok ? ["Richtig!", "Genau!", "Sehr gut!", "Super!"][Math.floor(Math.random() * 4)] : k === "cards" ? "On la revoit bientôt" : "Pas tout à fait";
  const nextBtn = `<button class="primary" id="vnext">${VX.i + 1 < VX.qs.length ? "Continuer" : "Voir le résultat"}</button>`;
  const wrap = inner => `<div class="sheet ${ok ? "good" : "bad"}" role="status"><div class="sheet-in"><div class="verdict"><h3>${title}</h3></div>${inner}${nextBtn}</div></div>`;
  const yours = !ok && q.typed ? ` · ta réponse : <span data-notr>${esc(q.typed)}</span>` : "";
  if (k === "conj") {
    const v = q.v, pron = PERSONS[q.k].split("/")[0], full = pron + " " + q.answers[0];
    return wrap(`<div class="answer"><div><div class="de" lang="de">${esc(full)}</div><div class="sub"><span lang="de">${esc(v.inf)}</span> · ${TENSES[q.tense].toLowerCase()}${q.answers[1] ? ` · à l'oral aussi « <span lang="de">${esc(pron + " " + q.answers[1])}</span> »` : ""}${yours}</div></div>${spkBtn(full)}</div>${conjTable(v, q.tense, q.k)}`);
  }
  if (k === "prep") {
    const it = q.it;
    const why = !ok && q.caseWrong ? `La préposition était juste, mais le cas est le <span lang="de">${CASE_NAME[it.cas]}</span>.` : "";
    return wrap(`<div class="answer"><div><div class="de" lang="de">${vpHead(it)}</div><div class="sub" data-notr>${esc(it.fr)}</div>${why ? `<div class="sub">${why}</div>` : ""}${CONTR[it.token] ? `<div class="sub" lang="de">${esc(it.token)} = ${CONTR[it.token]}</div>` : ""}</div></div>
      <div class="ex"><div class="ex-text"><div class="ex-de" lang="de">${it.exHTML}</div><div class="ex-fr" data-notr>${esc(it.exfr)}</div></div>${spkBtn(it.ex, true)}</div>`);
  }
  if (k === "dek") {
    return wrap(`<div class="answer"><div><div class="de" lang="de">${esc(q.answer)}</div><div class="sub">${DK_CASES[q.c]} · ${DK_GENDER[q.g]} · après ${q.type === "def" ? "der / dieser" : "ein / kein / mein"}${yours}</div></div>${spkBtn(q.full)}</div>${dkTables(q)}`);
  }
  if (k === "plural") {
    const w = q.w;
    return wrap(`<div class="answer"><div><div class="de"><span class="art art-pl">die</span> ${esc(w.pl)}</div><div class="sub"><span lang="de">${deHTML(w)}</span> · ${esc(plType(w))}${yours}</div></div>${spkBtn("die " + w.pl)}</div>
      ${!ok ? `<div class="sub rule-hint">Tendances : masculins souvent en -e (der Tisch, die Tische), féminins en -(e)n (die Lampe, die Lampen), neutres courts en -er avec umlaut (das Buch, die Bücher), mots étrangers en -s (das Auto, die Autos).</div>` : ""}`);
  }
  if (k === "order") {
    return wrap(`<div class="ex"><div class="ex-text"><div class="ex-de" lang="de">${esc(q.it.de)}</div><div class="ex-fr" data-notr>${esc(q.it.fr)}</div></div>${spkBtn(q.it.de, true)}</div>`);
  }
  if (k === "dict") {
    return wrap(`<div class="ex"><div class="ex-text"><div class="ex-de" lang="de">${esc(q.it.de)}</div><div class="ex-fr" data-notr>${esc(q.it.fr)}</div></div>${spkBtn(q.it.de, true)}</div>
      ${!ok ? `<div class="sub">${q.res.missing ? `<span>${q.res.missing} mot${q.res.missing > 1 ? "s" : ""} manquant${q.res.missing > 1 ? "s" : ""} ou mal écrit${q.res.missing > 1 ? "s" : ""}, en couleur ci-dessus.</span>` : ""}${q.res.extra > 0 ? ` <span>${q.res.extra} mot${q.res.extra > 1 ? "s" : ""} en trop.</span>` : ""}</div>` : ""}`);
  }
  if (k === "cards") {
    return wrap(`<div class="ex"><div class="ex-text"><div class="ex-de" lang="de">${esc(q.it.de)}</div><div class="ex-fr" data-notr>${esc(q.it.fr)}</div></div>${spkBtn(q.it.de, true)}</div>`);
  }
  return "";
}
function vxSayText(q) {
  const k = VX.kind;
  if (k === "conj") return PERSONS[q.k].split("/")[0] + " " + q.answers[0];
  if (k === "prep") return q.it.ex;
  if (k === "dek") return q.full;
  if (k === "plural") return "die " + q.w.pl;
  return q.it.de;
}
function vxKey(q) {
  const k = VX.kind;
  if (k === "conj") return ["irr", q.v.key];
  if (k === "prep") return ["vp", q.it.key];
  if (k === "dek") return ["dk", q.key];
  if (k === "plural") return ["pl", q.key];
  if (k === "order") return ["ord", q.it.key];
  if (k === "dict") return ["dic", q.it.key];
  return ["ph", q.it.key];
}
function vxAnswer(ok, extra = {}) {
  const q = VX.qs[VX.i];
  if (q.answered) return;
  Object.assign(q, extra, { answered: true, ok });
  VX.results.push(ok);
  const [store, key] = vxKey(q);
  noteErr(store, store === "dk" ? key + "." + q.w.id : key, ok, store === "irr" ? q.tense : 0);
  gradeV(store, key, ok);
  renderVX();
  if (settings.autoSay !== false && canSpeak && VX.kind !== "dict") speak(vxSayText(q));
  if (settings.autoNext && ok && VX.kind !== "cards") { const at = VX.i, sess = VX; setTimeout(() => { if (view === "vx" && VX === sess && VX.i === at && ov.hidden && pop.hidden) vxNext(); }, VX.kind === "order" || VX.kind === "dict" ? 2200 : 1100); }
}
function vxNext() {
  if (VX.i + 1 < VX.qs.length) { VX.i++; renderVX(); window.scrollTo(0, 0); }
  else { view = "vxdone"; render(); window.scrollTo(0, 0); }
}
function vxRecap(q) {
  const k = VX.kind;
  if (k === "conj") { const s = PERSONS[q.k].split("/")[0] + " " + q.answers[0]; return [`<b>${esc(s)}</b>`, `${esc(q.v.inf)} · ${TENSES[q.tense].toLowerCase()} · ${esc(q.v.fr)}`, s]; }
  if (k === "prep") return [vpHead(q.it), q.it.exHTML, q.it.ex];
  if (k === "dek") return [q.fullHTML, `${DK_CASES[q.c]} · ${DK_GENDER[q.g]}`, q.full];
  if (k === "plural") return [`${deHTML(q.w)} → <span class="art art-pl">die</span> ${esc(q.w.pl)}`, esc(q.w.fr), "die " + q.w.pl];
  return [esc(q.it.de), esc(q.it.fr), q.it.de];
}
function renderVXDone() {
  const ok = VX.results.filter(Boolean).length, n = VX.results.length;
  const missed = VX.qs.filter(q => q.answered && !q.ok);
  const msg = ok === n ? "Sans faute. Ausgezeichnet !" : ok / n >= .7 ? "Bonne série. Les ratés reviendront plus souvent." : "Les ratés reviendront dans tes prochaines séries.";
  app.innerHTML = header() + `
    <section class="section">
      <span class="label">${VX_LABEL[VX.kind]}${VX.err ? " · mes erreurs" : VX.weakOnly ? " · à revoir" : ""}</span>
      <div class="score"><b>${ok}/${n}</b><span>${msg}</span></div>
    </section>
    ${missed.length ? `<section class="section"><span class="label">À retenir</span><div class="missed">${missed.map(q => { const [a, b, say] = vxRecap(q); return `<div class="row" data-notr><div><div lang="de">${a}</div><div class="fr">${b}</div></div>${spkBtn(say, true)}</div>`; }).join("")}</div></section>` : ""}
    <div class="row2"><button class="secondary" id="home">Retour</button>${VX.err ? `<button class="primary" data-go="mots:err">Mes erreurs</button>` : `<button class="primary" id="vagain">Encore une série</button>`}</div>`;
}
function vxClick(t) {
  if (t.id === "vagain") { if (VX.err) startErrSession(VX.err); else startVX(VX.kind + (VX.weakOnly ? "-weak" : ""), VX.themeId); return true; }
  if (view !== "vx") return false;
  const q = VX.qs[VX.i];
  if (t.id === "vnext") { vxNext(); return true; }
  if (t.id === "dkpop") { openDkPop(); return true; }
  if (t.id === "vskip") { if (VX.kind === "dict") vxAnswer(false, { typed: "", res: dictCheck(q.it.de, "") }); else vxAnswer(false, { typed: "" }); return true; }
  if (t.dataset.ins) { const ti = document.getElementById("vi"); if (!ti || ti.disabled) return true; const s = ti.selectionStart ?? ti.value.length, en = ti.selectionEnd ?? s; ti.value = ti.value.slice(0, s) + t.dataset.ins + ti.value.slice(en); ti.focus(); ti.setSelectionRange(s + 1, s + 1); return true; }
  if (t.dataset.listen) { speak(q.it.de, +t.dataset.listen === 1 ? 0.9 : 0.6); const vi = document.getElementById("vi"); vi && vi.focus({ preventScroll: true }); return true; }
  if (t.dataset.prep !== undefined && !q.answered && q.step !== "case") {
    const p = t.dataset.prep;
    if (p !== q.it.prep) { vxAnswer(false, { picked: p }); return true; }
    q.picked = p;
    if (TWO_WAY.includes(p)) { q.step = "case"; renderVX(); } else vxAnswer(true);
    return true;
  }
  if (t.dataset.case && !q.answered) { const c = t.dataset.case; q.step = null; vxAnswer(c === q.it.cas, { pickedCase: c, caseWrong: c !== q.it.cas }); return true; }
  if (t.dataset.pickTok !== undefined && !q.answered) { q.built.push(+t.dataset.pickTok); renderVX(); return true; }
  if (t.dataset.unpick !== undefined && !q.answered) { q.built.splice(+t.dataset.unpick, 1); renderVX(); return true; }
  if (t.id === "vclear" && !q.answered) { q.built = []; renderVX(); return true; }
  if (t.id === "vcheck" && !q.answered) { vxAnswer(q.built.map(i => q.toks[i]).join(" ") === q.toks.join(" ")); return true; }
  if (t.id === "vflip") { q.flipped = true; renderVX(); if (canSpeak) speak(q.it.de); return true; }
  if (t.dataset.vself !== undefined && !q.answered) { vxAnswer(t.dataset.vself === "1"); return true; }
  return false;
}
function vxSubmit() {
  const q = VX.qs[VX.i];
  const vi = document.getElementById("vi");
  if (!vi || q.answered) return;
  const val = vi.value;
  if (!val.trim()) return;
  if (VX.kind === "dict") { const res = dictCheck(q.it.de, val); vxAnswer(res.ok, { typed: val, res }); return; }
  vxAnswer(typedCheck(q, val), { typed: val });
}

/* declension rule tables in a pop-up, available during the drill */
const pop = document.getElementById("pop");
function openDkPop() {
  pop.innerHTML = `<div class="pop-card">
    <div class="pop-top"><h2>Les déclinaisons</h2><button class="x pop-close" id="popclose" aria-label="Fermer">✕ Fermer</button></div>
    <div class="tbl"><table><thead><tr><th>Cas</th><th>Quand ?</th></tr></thead><tbody>
      <tr><th>Nominatif</th><td>le sujet (Wer? Was?) · après sein, werden</td></tr>
      <tr><th>Accusatif</th><td>le COD (Wen? Was?) · après für, durch, gegen, ohne, um</td></tr>
      <tr><th>Datif</th><td>le COI (Wem?) · après mit, nach, bei, seit, von, zu, aus</td></tr>
      <tr><th>Génitif</th><td>la possession (Wessen?) · après wegen, trotz, während</td></tr>
    </tbody></table></div>
    <p class="note">Prépositions mixtes (in, an, auf, neben, unter, über, vor, hinter, zwischen) : <b>datif</b> pour le lieu où l'on est (Wo?), <b>accusatif</b> pour la direction (Wohin?).</p>
    ${dkTables()}
    <p class="note">Les terminaisons en couleur sont celles de l'adjectif. <b>dieser</b> se décline comme der (dieser, diese, dieses), <b>kein</b> et <b>mein</b> comme ein. Au génitif masculin et neutre, le nom prend -s ou -es : des Mannes, eines Kindes.</p>
  </div>`;
  pop.hidden = false;
  document.documentElement.style.overflow = "hidden";
  pop.querySelector(".pop-card").scrollTop = 0;
  document.getElementById("popclose").focus({ preventScroll: true });
}
function closeDkPop() {
  pop.hidden = true;
  document.documentElement.style.overflow = "";
  const vi = document.getElementById("vi"); vi && !vi.disabled && vi.focus({ preventScroll: true });
}
pop.addEventListener("click", e => { if (e.target === pop || e.target.closest("#popclose")) closeDkPop(); });
pop.addEventListener("keydown", e => { if (e.key === "Escape") closeDkPop(); });

/* ---------- programme: units, each with its own sheets, verbs, words and reserved exam sentences ---------- */
const PROGRAW = `// Unités du programme, dans l'ordre. L'identifiant d'une unité reste stable : la progression y est attachée.
// @id|niveau|titre|description
// F|fiches ; V|temps|verbes irréguliers (pres, prat ou perf) ; P|mots à préposition (mot>préposition) ; M|mots du vocabulaire
// T|phrase à trous réservée à l'examen, réponse entre crochets (a/b si plusieurs)|indice|traduction|fiche
// S|phrase à traduire vers l'allemand|versions acceptées séparées par ;|fiche|mots-clés séparés par ; (a/b si plusieurs formes ; chacun présent dans chaque version acceptée)
// Ces phrases sont réservées à l'examen : ni les fiches, ni les listes, ni les exercices, ni les gabarits des Déclinaisons ne les montrent, build.py le vérifie.
// N|mots qui gardent leur majuscule en tête de phrase sans être un nom du vocabulaire (prénoms…)

N|Anna;Lena;Maria;Max;Paul;Tom;Entschuldigung

@a1-presenter|A1|Se présenter|Saluer, dire qui on est, parler de sa famille, poser des questions simples.
F|1;2;27
V|pres|sein;haben;heißen;kommen;gehen;wissen;kennen;schreiben;bleiben
M|Hallo!;Guten Morgen!;Guten Tag!;Guten Abend!;Gute Nacht!;Tschüss!;Auf Wiedersehen!;Bis später!;Bis morgen!;Danke schön!;Bitte schön!;Entschuldigung!;ja;nein;bitte;Freut mich!;Alles klar!;Kein Problem.;Ich verstehe nicht.;Wie heißen Sie?;Woher kommen Sie?;Wie geht's?;Viel Glück!;Herzlich willkommen!;Guten Appetit!;Schönes Wochenende!
M|die Familie;die Eltern;die Mutter;der Vater;das Kind;der Sohn;die Tochter;der Bruder;die Schwester;die Geschwister;die Großeltern;die Oma;der Opa;der Onkel;die Tante;der Mann;die Frau;der Freund;die Freundin;der Nachbar;die Nachbarin;das Baby;der Junge;das Mädchen;die Leute;der Hund;die Katze;verheiratet;ledig;geschieden;heiraten;besuchen
T|[Die] Mutter heißt Julia.|der/die/das|La mère s'appelle Julia.|1
T|[Das] Kind ist zehn Jahre alt.|der/die/das|L'enfant a dix ans.|1
T|[Der] Bruder wohnt in Hamburg.|der/die/das|Le frère habite à Hambourg.|1
T|Wo wartet [die] Familie?|der/die/das|Où attend la famille ?|1
T|Da kommt [das] Mädchen.|der/die/das|Voilà la fille qui arrive.|1
T|Hier schläft [der] Hund.|der/die/das|Le chien dort ici.|1
T|Das ist [die] Katze von Anna.|der/die/das|C'est le chat d'Anna.|1
T|Wo wohnt [die] Tante?|der/die/das|Où habite la tante ?|1
T|[Der] Junge ist neun.|der/die/das|Le garçon a neuf ans.|1
T|Ich [bin] Student.|sein|Je suis étudiant.|2
T|Du [bist] sehr nett.|sein|Tu es très gentil.|2
T|Wir [sind] aus Frankreich.|sein|Nous venons de France.|2
T|Ihr [seid] heute hier.|sein|Vous êtes ici aujourd'hui.|2
T|Ich [habe] zwei Kinder.|haben|J'ai deux enfants.|2
T|Er [hat] eine Schwester.|haben|Il a une sœur.|2
T|[Hast] du Geschwister?|haben|As-tu des frères et sœurs ?|2
T|Wir [haben] einen Hund.|haben|Nous avons un chien.|2
T|Ich [heiße] Paul.|heißen|Je m'appelle Paul.|2
T|Wie [heißt] deine Mutter?|heißen|Comment s'appelle ta mère ?|2
T|Du [kommst] aus Italien.|kommen|Tu viens d'Italie.|2
T|Maria [kommt] aus Polen.|kommen|Maria vient de Pologne.|2
T|Wir [wohnen] in Köln.|wohnen|Nous habitons à Cologne.|2
T|Er [arbeitet] in Berlin.|arbeiten|Il travaille à Berlin.|2
T|Du [arbeitest] viel.|arbeiten|Tu travailles beaucoup.|2
T|[Wo] wohnt ihr? – In Bonn.|W-Frage|Où habitez-vous ? – À Bonn.|27
T|[Woher] kommst du? – Aus Spanien.|W-Frage|D'où viens-tu ? – D'Espagne.|27
T|[Wer] ist das? – Das ist mein Vater.|W-Frage|Qui est-ce ? – C'est mon père.|27
T|[Wie] heißt deine Schwester? – Lena.|W-Frage|Comment s'appelle ta sœur ? – Lena.|27
T|[Was] machst du? – Ich lerne Deutsch.|W-Frage|Que fais-tu ? – J'apprends l'allemand.|27
T|[Wann] kommst du? – Morgen.|W-Frage|Quand viens-tu ? – Demain.|27
T|[Wohin] gehst du? – Nach Hause.|W-Frage|Où vas-tu ? – À la maison.|27
S|Je m'appelle Anna.|Ich heiße Anna.;Mein Name ist Anna.|2|heiße/Name;Anna
S|Comment s'appelle le chien ?|Wie heißt der Hund?|27|Wie;heißt;Hund
S|D'où vient Maria ?|Woher kommt Maria?|27|Woher;kommt;Maria
S|Je viens d'Allemagne.|Ich komme aus Deutschland.|2|komme;aus;Deutschland
S|Nous habitons à Berlin.|Wir wohnen in Berlin.|2|Wir;wohnen;Berlin
S|J'ai une sœur.|Ich habe eine Schwester.|2|habe;Schwester
S|Le père est ici.|Der Vater ist hier.|1|Vater;hier
S|La mère travaille à Munich.|Die Mutter arbeitet in München.|2|Mutter;arbeitet;München
S|L'enfant s'appelle Max.|Das Kind heißt Max.|1|Kind;heißt;Max
S|Où habite le voisin ?|Wo wohnt der Nachbar?|27|Wo;wohnt;Nachbar
S|Qui est Anna ?|Wer ist Anna?|27|Wer;Anna
S|Le voisin vient de Pologne.|Der Nachbar kommt aus Polen.|2|Nachbar;kommt;Polen
S|La voisine est mariée.|Die Nachbarin ist verheiratet.|1|Nachbarin;verheiratet
S|Nous avons deux enfants.|Wir haben zwei Kinder.|2|haben;zwei;Kinder
S|As-tu une fille ?|Hast du eine Tochter?|2|Hast;Tochter
S|Les gens sont très gentils.|Die Leute sind sehr nett.|2|Leute;nett
S|Que fais-tu ?|Was machst du?|27|Was;machst
S|Où habite Anna ?|Wo wohnt Anna?|27|Wo;wohnt;Anna

@a1-journee|A1|Ma journée, mon logement|Raconter sa journée, donner l'heure, compter, décrire son logement.
F|3;4;26
V|pres|fahren;essen;lesen;sehen;sprechen;nehmen;schlafen;treffen;laufen
M|der Tag;die Woche;der Monat;das Jahr;die Stunde;die Minute;die Uhr;der Morgen;der Mittag;der Nachmittag;der Abend;die Nacht;der Montag;der Dienstag;der Mittwoch;der Donnerstag;der Freitag;der Samstag;der Sonntag;das Wochenende;der Termin;heute;morgen;gestern;jetzt;immer;oft;nie
M|zwei;drei;vier;fünf;sechs;sieben;acht;neun;zehn;zwölf;zwanzig;dreißig;hundert
M|die Wohnung;das Haus;das Zimmer;die Küche;das Bad;die Tür;das Fenster;der Schlüssel;das Bett;der Tisch;der Stuhl;der Schrank;das Sofa;die Lampe;die Miete;der Balkon;der Keller;die Toilette;die Treppe
T|Du [fährst] nach Berlin.|fahren|Tu vas à Berlin.|3
T|Er [fährt] mit dem Zug.|fahren|Il prend le train.|3
T|Was [isst] du zum Frühstück?|essen|Que manges-tu au petit-déjeuner ?|3
T|Anna [isst] gern Fisch.|essen|Anna aime manger du poisson.|3
T|Du [liest] ein Buch.|lesen|Tu lis un livre.|3
T|Maria [liest] die Zeitung.|lesen|Maria lit le journal.|3
T|[Siehst] du das Haus?|sehen|Vois-tu la maison ?|3
T|Er [sieht] den Schlüssel nicht.|sehen|Il ne voit pas la clé.|3
T|Du [sprichst] gut Deutsch.|sprechen|Tu parles bien allemand.|3
T|Der Lehrer [spricht] langsam.|sprechen|Le professeur parle lentement.|3
T|Du [nimmst] den Bus.|nehmen|Tu prends le bus.|3
T|Er [nimmt] ein Taxi.|nehmen|Il prend un taxi.|3
T|Das Kind [schläft] im Bett.|schlafen|L'enfant dort dans le lit.|3
T|[Schläfst] du gut?|schlafen|Dors-tu bien ?|3
T|Lena [trifft] heute Tom.|treffen|Lena voit Tom aujourd'hui.|3
T|Wann [triffst] du Anna?|treffen|Quand vois-tu Anna ?|3
T|Mein Vater [läuft] jeden Morgen.|laufen|Mon père court chaque matin.|3
T|Am Montag [fahren] wir nach Hamburg.|fahren|Lundi, nous allons à Hambourg.|4
T|Heute [habe] ich viel Zeit.|haben|Aujourd'hui, j'ai beaucoup de temps.|4
T|Morgen [arbeite] ich nicht.|arbeiten|Demain, je ne travaille pas.|4
T|Am Abend [lese] ich ein Buch.|lesen|Le soir, je lis un livre.|4
T|Jetzt [kocht] Paul.|kochen|Maintenant, Paul cuisine.|4
T|[Kommst] du morgen?|kommen|Tu viens demain ?|4
T|Es ist [halb] neun.|8:30|Il est 8 h 30.|26
T|Es ist [Viertel] vor drei.|14:45|Il est 14 h 45.|26
T|Es ist Viertel [nach] zehn.|10:15|Il est 10 h 15.|26
T|Es ist [halb] sieben.|6:30|Il est 6 h 30.|26
T|Das kostet [vierundzwanzig] Euro.|24|Ça coûte 24 euros.|26
T|Mein Bruder ist [fünfunddreißig] Jahre alt.|35|Mon frère a 35 ans.|26
T|Das Zimmer kostet [dreihundert] Euro.|300|La chambre coûte 300 euros.|26
T|Das Haus hat [dreizehn] Zimmer.|13|La maison a 13 pièces.|26
S|Que lis-tu ?|Was liest du?|3|Was;liest
S|Il parle allemand.|Er spricht Deutsch.|3|spricht;Deutsch
S|Lundi, je vais à Berlin.|Am Montag fahre ich nach Berlin.;Ich fahre am Montag nach Berlin.|4|Montag;fahre;Berlin
S|Aujourd'hui, il dort longtemps.|Heute schläft er lange.;Er schläft heute lange.|4|heute;schläft;lange
S|Anna prend le bus.|Anna nimmt den Bus.|3|Anna;nimmt;Bus
S|Vois-tu la porte ?|Siehst du die Tür?|4|Siehst;Tür
S|L'appartement a trois pièces.|Die Wohnung hat drei Zimmer.|26|Wohnung;drei;Zimmer
S|Il est dix heures.|Es ist zehn Uhr.|26|zehn;Uhr
S|Il est neuf heures et demie.|Es ist halb zehn.;Es ist neun Uhr dreißig.|26|halb/dreißig;zehn/neun
S|Le rendez-vous est mercredi.|Der Termin ist am Mittwoch.;Am Mittwoch ist der Termin.|4|Termin;Mittwoch
S|Demain, nous restons à la maison.|Morgen bleiben wir zu Hause.;Wir bleiben morgen zu Hause.|4|morgen;bleiben;Hause
S|Où dort l'enfant ?|Wo schläft das Kind?|3|Wo;schläft;Kind
S|Le week-end, je dors beaucoup.|Am Wochenende schlafe ich viel.;Ich schlafe am Wochenende viel.|4|Wochenende;schlafe
S|La nuit est longue.|Die Nacht ist lang.|1|Nacht;lang
S|Le loyer coûte huit cents euros.|Die Miete kostet achthundert Euro.|26|Miete;kostet;achthundert
S|Il lit souvent le soir.|Er liest oft am Abend.;Am Abend liest er oft.|4|liest;Abend
S|Nous mangeons à midi.|Wir essen am Mittag.;Am Mittag essen wir.;Wir essen mittags.;Mittags essen wir.|4|essen;Mittag/mittags
S|L'armoire et le lit sont neufs.|Der Schrank und das Bett sind neu.|1|Schrank;Bett;neu

@a1-courses|A1|Manger et faire les courses|Dire ce qu'on veut ou non, demander un prix, compter au pluriel.
F|5;6;7
V|pres|trinken;geben;finden;mögen;bekommen;einkaufen;helfen;bringen;vergessen
M|das Essen;das Frühstück;das Brot;das Brötchen;die Butter;der Käse;die Wurst;das Fleisch;der Fisch;das Ei;die Milch;das Gemüse;das Obst;der Apfel;die Banane;die Kartoffel;die Tomate;der Salat;der Reis;die Nudeln;das Salz;der Zucker;der Kuchen;das Wasser;der Saft;der Kaffee;der Tee;das Bier;der Wein;der Teller;die Tasse;das Glas;das Messer;die Gabel;der Löffel;kochen;lecker;Ich habe Hunger.;Ich habe Durst.
M|der Supermarkt;die Bäckerei;die Apotheke;der Markt;das Geschäft;die Kasse;die Tüte;die Flasche;die Packung;das Kilo;der Preis;das Bargeld;die Karte;der Euro;kaufen;bezahlen;kosten;billig;teuer;geöffnet;geschlossen;Wie viel kostet das?
T|Paul hat [kein] Auto.|nicht/kein|Paul n'a pas de voiture.|5
T|Wir kaufen [keine] Butter.|nicht/kein|Nous n'achetons pas de beurre.|5
T|Er trinkt [keinen] Kaffee.|nicht/kein|Il ne boit pas de café.|5
T|Hier gibt es [keinen] Salat.|nicht/kein|Ici, il n'y a pas de salade.|5
T|Das Brot ist [nicht] teuer.|nicht/kein|Le pain n'est pas cher.|5
T|Ich mag den Kuchen [nicht].|nicht/kein|Je n'aime pas le gâteau.|5
T|Sie haben [keine] Kinder.|nicht/kein|Ils n'ont pas d'enfants.|5
T|Der Supermarkt ist heute [nicht] geöffnet.|nicht/kein|Le supermarché n'est pas ouvert aujourd'hui.|5
T|Ich kaufe zwei [Äpfel].|der Apfel|J'achète deux pommes.|6
T|Wir brauchen drei [Flaschen].|die Flasche|Il nous faut trois bouteilles.|6
T|Hier sind fünf [Brötchen].|das Brötchen|Voici cinq petits pains.|6
T|Die [Eier] sind frisch.|das Ei|Les œufs sont frais.|6
T|Ich möchte zwei [Würste].|die Wurst|Je voudrais deux saucisses.|6
T|Wir nehmen vier [Gläser].|das Glas|Nous prenons quatre verres.|6
T|Die [Bananen] kosten zwei Euro.|die Banane|Les bananes coûtent deux euros.|6
T|Hier sind vier [Tassen].|die Tasse|Voici quatre tasses.|6
T|Die [Kartoffeln] sind billig.|die Kartoffel|Les pommes de terre sont bon marché.|6
T|Ich kaufe drei [Tomaten].|die Tomate|J'achète trois tomates.|6
T|In Köln gibt es viele [Supermärkte].|der Supermarkt|À Cologne, il y a beaucoup de supermarchés.|6
T|Wir nehmen [den] Salat.|der|Nous prenons la salade.|7
T|Wir kaufen [einen] Kuchen.|ein|Nous achetons un gâteau.|7
T|Hast du [den] Zucker?|der|As-tu le sucre ?|7
T|Anna isst [das] Brötchen.|das|Anna mange le petit pain.|7
T|Anna sucht [die] Apotheke.|die|Anna cherche la pharmacie.|7
T|Ich brauche [eine] Tüte.|ein|J'ai besoin d'un sac.|7
T|Wir suchen [einen] Markt.|ein|Nous cherchons un marché.|7
T|[Der] Wein ist gut.|der|Le vin est bon.|7
T|Er kauft [einen] Apfel.|ein|Il achète une pomme.|7
T|Möchtest du [den] Käse?|der|Veux-tu le fromage ?|7
T|Ich finde [den] Preis gut.|der|Je trouve le prix bien.|7
S|Je n'ai pas de pain.|Ich habe kein Brot.|5|habe;kein;Brot
S|Nous n'avons pas d'eau.|Wir haben kein Wasser.|5|haben;kein;Wasser
S|Le café n'est pas chaud.|Der Kaffee ist nicht heiß.;Der Kaffee ist nicht warm.|5|Kaffee;nicht;heiß/warm
S|Je bois du thé.|Ich trinke Tee.|2|trinke;Tee
S|Il achète un gâteau.|Er kauft einen Kuchen.|7|kauft;einen;Kuchen
S|Tu manges de la viande ?|Isst du Fleisch?|3|Isst;Fleisch
S|Les pommes sont bonnes.|Die Äpfel sind gut.;Die Äpfel sind lecker.|6|Äpfel;gut/lecker
S|Nous achetons trois bouteilles.|Wir kaufen drei Flaschen.|6|kaufen;drei;Flaschen
S|Paul cherche le supermarché.|Paul sucht den Supermarkt.|7|Paul;sucht;Supermarkt
S|La pharmacie est fermée.|Die Apotheke ist geschlossen.|7|Apotheke;geschlossen
S|J'aime le fromage.|Ich mag Käse.;Ich mag den Käse.|7|mag;Käse
S|Le pain coûte deux euros.|Das Brot kostet zwei Euro.|6|Brot;kostet;zwei
S|Il ne mange pas de poisson.|Er isst keinen Fisch.|5|isst;keinen;Fisch
S|Je ne trouve pas la clé.|Ich finde den Schlüssel nicht.|5|finde;Schlüssel;nicht
S|Les enfants boivent du lait.|Die Kinder trinken Milch.|6|Kinder;trinken;Milch
S|Nous prenons deux cafés.|Wir nehmen zwei Kaffee.;Wir nehmen zwei Kaffees.|6|nehmen;zwei;Kaffee/Kaffees
S|Paul paie le repas.|Paul bezahlt das Essen.|7|Paul;bezahlt;Essen
S|Les tomates ne sont pas chères.|Die Tomaten sind nicht teuer.;Die Tomaten sind billig.|5|Tomaten;teuer/billig

@a1-ville|A1|Se repérer en ville|Prendre les transports, demander son chemin, dire à qui l'on parle, compter jusqu'à mille.
F|8;10
V|pres|stehen;sitzen;liegen;fliegen;schwimmen;beginnen;gefallen;verstehen;werden
M|der Bahnhof;der Zug;der Bus;die Straßenbahn;die U-Bahn;die S-Bahn;die Haltestelle;das Gleis;die Fahrkarte;der Fahrplan;die Verspätung;das Auto;das Fahrrad;der Flughafen;die Straße;die Ampel;die Kreuzung;die Ecke;der Platz;die Brücke;die Stadt;das Dorf;die Innenstadt;die Kirche;der Park;die Post;umsteigen;einsteigen;aussteigen;links;rechts;geradeaus;weit;in der Nähe;Wo ist die Haltestelle?;Wie komme ich zum Bahnhof?;hin und zurück;Nächster Halt;werden
M|null;eins;elf;dreizehn;sechzehn;siebzehn;einundzwanzig;vierzig;fünfzig;sechzig;siebzig;achtzig;neunzig;tausend;die Million;die Zahl;die Hälfte;das Viertel;erste;zweite;dritte
T|Ich helfe [dem] Kind.|das (Dativ)|J'aide l'enfant.|8
T|Wir danken [der] Freundin.|die (Dativ)|Nous remercions l'amie.|8
T|Das Buch gehört [dem] Mann.|der (Dativ)|Le livre appartient à l'homme.|8
T|Das Auto gehört [der] Frau.|die (Dativ)|La voiture appartient à la femme.|8
T|Ich zeige [dem] Mädchen die Haltestelle.|das (Dativ)|Je montre l'arrêt à la fille.|8
T|Anna gibt [der] Mutter das Geld.|die (Dativ)|Anna donne l'argent à la mère.|8
T|Paul bringt [dem] Vater einen Kaffee.|der (Dativ)|Paul apporte un café au père.|8
T|Wir geben [den] Eltern den Schlüssel.|die, Plural (Dativ)|Nous donnons la clé aux parents.|8
T|Ich schenke [einem] Freund ein Buch.|ein (Dativ)|J'offre un livre à un ami.|8
T|Lena hilft [einer] Nachbarin.|eine (Dativ)|Lena aide une voisine.|8
T|Tom zeigt [einem] Kind den Bahnhof.|ein (Dativ)|Tom montre la gare à un enfant.|8
T|Die Stadt gefällt [dem] Bruder.|der (Dativ)|La ville plaît au frère.|8
T|Der Platz gefällt [der] Tante.|die (Dativ)|La place plaît à la tante.|8
T|Wir antworten [dem] Lehrer.|der (Dativ)|Nous répondons au professeur.|8
T|Wir fahren [mit] der U-Bahn.|mit/nach/von|Nous prenons le métro.|10
T|Der Zug fährt [nach] Berlin.|nach/zu/in|Le train va à Berlin.|10
T|Tom geht [zum] Bahnhof.|zu + der Bahnhof|Tom va à la gare.|10
T|Maria geht [zur] Post.|zu + die Post|Maria va à la poste.|10
T|Das Kind ist [im] Park.|in + der Park|L'enfant est dans le parc.|10
T|Wir gehen [ins] Kino.|in + das Kino|Nous allons au cinéma.|10
T|Der Schlüssel liegt auf [dem] Tisch.|der Tisch (Wo?)|La clé est sur la table.|10
T|Ich lege den Schlüssel auf [den] Tisch.|der Tisch (Wohin?)|Je pose la clé sur la table.|10
T|Die Kirche steht neben [der] Brücke.|die Brücke (Wo?)|L'église est à côté du pont.|10
T|Der Bus fährt über [die] Brücke.|die Brücke (Wohin?)|Le bus passe sur le pont.|10
T|Das Geschenk ist [für] den Vater.|für/mit/aus|Le cadeau est pour le père.|10
T|Er geht [ohne] den Hund in den Park.|ohne/mit/aus|Il va au parc sans le chien.|10
T|Wir gehen [durch] den Park.|durch/nach/aus|Nous traversons le parc.|10
T|Der Zug kommt [aus] Wien.|aus/zu/für|Le train vient de Vienne.|10
T|Anna wohnt [bei] der Oma.|bei/zu/nach|Anna habite chez la grand-mère.|10
T|Ich warte an [der] Ampel.|die Ampel (Wo?)|J'attends au feu.|10
T|Er arbeitet seit [einem] Monat in Köln.|ein Monat (Dativ)|Il travaille à Cologne depuis un mois.|10
S|Nous prenons le train.|Wir fahren mit dem Zug.;Wir nehmen den Zug.|10|Wir;Zug
S|Où va le bus ?|Wohin fährt der Bus?|10|Wohin;Bus
S|La gare est tout droit.|Der Bahnhof ist geradeaus.|10|Bahnhof;geradeaus
S|La poste est à droite.|Die Post ist rechts.|10|Post;rechts
S|Je vais à la poste.|Ich gehe zur Post.|10|zur;Post
S|Il va à la gare.|Er geht zum Bahnhof.;Er fährt zum Bahnhof.|10|zum;Bahnhof
S|Nous allons à Vienne.|Wir fahren nach Wien.;Wir gehen nach Wien.;Wir fliegen nach Wien.|10|nach;Wien
S|Le train a du retard.|Der Zug hat Verspätung.|8|Zug;Verspätung
S|J'aide la tante.|Ich helfe der Tante.|8|helfe;der;Tante
S|Le vélo appartient à Paul.|Das Fahrrad gehört Paul.|8|Fahrrad;gehört;Paul
S|La ville plaît à Anna.|Die Stadt gefällt Anna.;Anna gefällt die Stadt.|8|Stadt;gefällt;Anna
S|Anna donne la clé à l'enfant.|Anna gibt dem Kind den Schlüssel.|8|gibt;dem;Kind;Schlüssel
S|Le bus est devant l'église.|Der Bus steht vor der Kirche.;Der Bus ist vor der Kirche.|10|Bus;vor;Kirche
S|Il habite à côté du parc.|Er wohnt neben dem Park.|10|wohnt;neben;Park
S|Les enfants sont dans le parc.|Die Kinder sind im Park.|10|Kinder;im;Park
S|Nous allons en ville.|Wir gehen in die Stadt.;Wir fahren in die Stadt.|10|in;die;Stadt
S|Le billet coûte cent vingt euros.|Die Fahrkarte kostet hundertzwanzig Euro.;Die Fahrkarte kostet einhundertzwanzig Euro.|26|Fahrkarte;kostet;Euro
S|La troisième rue est à droite.|Die dritte Straße ist rechts.|26|dritte;Straße;rechts
S|L'enfant est assis sur la chaise.|Das Kind sitzt auf dem Stuhl.|10|Kind;sitzt;auf;Stuhl

@a1-restaurant|A1|Au restaurant|Commander, payer, dire ce qu'on veut, peut ou doit faire, parler de ses proches avec les pronoms.
F|9;11
V|pres|können;müssen;wollen;dürfen;sollen;empfehlen;bitten;tun;denken
M|das Restaurant;das Café;die Kneipe;die Speisekarte;die Rechnung;das Trinkgeld;der Kellner;die Kellnerin;die Vorspeise;das Hauptgericht;die Nachspeise;die Suppe;das Getränk;bestellen;reservieren;vegetarisch;scharf;Die Karte, bitte.;Ich hätte gern einen Kaffee.;Die Rechnung, bitte.;Zusammen oder getrennt?;Stimmt so.;Ist hier noch frei?;Einen Tisch für zwei, bitte.;Was empfehlen Sie?
M|das Mittagessen;das Abendessen;das Hähnchen;der Joghurt;die Zwiebel;der Pfeffer;der Topf;die Pfanne;die Metzgerei;die Drogerie;der Kassenbon;der Einkaufswagen;das Pfand;die Dose;das Gramm;das Angebot;der Cent;günstig;Kann ich mit Karte zahlen?;Brauchen Sie eine Tüte?;Ich schaue nur.
M|Mir geht es gut, danke.;Gern geschehen.;Es tut mir leid.;doch;Können Sie das wiederholen?;Sprechen Sie bitte langsamer.;Ich heiße …;Ich komme aus Frankreich.;Wie sagt man das auf Deutsch?;Was bedeutet das?;Prost!;können;müssen;wollen;dürfen;sollen
T|Ich besuche [ihn] morgen.|er (Akk.)|Je lui rends visite demain.|9
T|Kennst du [sie]? – Ja, das ist Anna.|sie (Akk.)|Tu la connais ? – Oui, c'est Anna.|9
T|Ich sehe [dich] morgen.|du (Akk.)|Je te vois demain.|9
T|Der Kellner bringt [uns] die Karte.|wir (Dativ)|Le serveur nous apporte la carte.|9
T|Kannst du [mir] das Salz geben?|ich (Dativ)|Peux-tu me donner le sel ?|9
T|Das Essen schmeckt [ihm] nicht.|er (Dativ)|Il n'aime pas ce plat.|9
T|Wie geht es [dir]? – Gut, danke.|du (Dativ)|Comment vas-tu ? – Bien, merci.|9
T|Ich gebe [Ihnen] die Rechnung.|Sie (Dativ)|Je vous donne l'addition.|9
T|Ich besuche [euch] am Sonntag.|ihr (Akk.)|Je vous rends visite dimanche.|9
T|[Mein] Kaffee ist kalt.|der Kaffee · mein|Mon café est froid.|9
T|Hast du [meine] Tasse?|die Tasse · mein|As-tu ma tasse ?|9
T|Paul nimmt [meinen] Schlüssel.|der Schlüssel · mein|Paul prend ma clé.|9
T|Anna bezahlt [ihren] Kaffee.|der Kaffee · ihr|Anna paie son café.|9
T|Paul trinkt [sein] Bier.|das Bier · sein|Paul boit sa bière.|9
T|Wir essen bei [unseren] Eltern.|die Eltern · unser|Nous mangeons chez nos parents.|9
T|Ist das [euer] Tisch?|der Tisch · euer|C'est votre table ?|9
T|Ich [kann] heute nicht kommen.|können|Je ne peux pas venir aujourd'hui.|11
T|[Kannst] du kochen?|können|Sais-tu cuisiner ?|11
T|Im Restaurant [darf] man nicht rauchen.|dürfen|On n'a pas le droit de fumer au restaurant.|11
T|[Darf] ich hier sitzen?|dürfen|Puis-je m'asseoir ici ?|11
T|Du [musst] nicht bezahlen.|müssen|Tu n'es pas obligé de payer.|11
T|Wir [müssen] heute kochen.|müssen|Nous devons cuisiner aujourd'hui.|11
T|Er [will] Wein trinken.|wollen|Il veut boire du vin.|11
T|Was [wollt] ihr essen?|wollen|Que voulez-vous manger ?|11
T|Der Arzt sagt, ich [soll] viel Wasser trinken.|sollen|Le médecin dit que je dois boire beaucoup d'eau.|11
T|[Soll] ich den Tisch reservieren?|sollen|Dois-je réserver la table ?|11
T|Ich [möchte] die Suppe.|möchten|Je voudrais la soupe.|11
T|[Möchtest] du einen Tee?|möchten|Veux-tu un thé ?|11
T|Sie [können] hier bezahlen.|können|Vous pouvez payer ici.|11
T|Ihr [dürft] das Essen mitnehmen.|dürfen|Vous avez le droit d'emporter le repas.|11
T|Die Kinder [wollen] Kuchen essen.|wollen|Les enfants veulent manger du gâteau.|11
T|Ich [muss] die Rechnung bezahlen.|müssen|Je dois payer l'addition.|11
S|Je voudrais une soupe.|Ich möchte eine Suppe.;Ich hätte gern eine Suppe.|11|eine;Suppe
S|Je dois payer.|Ich muss bezahlen.;Ich muss zahlen.|11|muss;bezahlen/zahlen
S|Tu peux venir aujourd'hui ?|Kannst du heute kommen?|11|Kannst;heute;kommen
S|Que veux-tu manger ?|Was willst du essen?;Was möchtest du essen?|11|willst/möchtest;essen
S|On n'a pas le droit de manger ici.|Hier darf man nicht essen.;Man darf hier nicht essen.|11|darf;nicht;essen
S|Tu n'es pas obligé d'attendre.|Du musst nicht warten.|11|musst;nicht;warten
S|Nous voulons réserver une table.|Wir wollen einen Tisch reservieren.;Wir möchten einen Tisch reservieren.|11|Tisch;reservieren
S|Il ne peut pas venir.|Er kann nicht kommen.|11|kann;nicht;kommen
S|Je veux payer maintenant.|Ich will jetzt bezahlen.;Ich möchte jetzt bezahlen.;Ich will jetzt zahlen.;Ich möchte jetzt zahlen.|11|jetzt;will/möchte;bezahlen/zahlen
S|Je vous donne la clé.|Ich gebe Ihnen den Schlüssel.;Ich gebe euch den Schlüssel.|9|gebe;den;Schlüssel
S|Il apporte un thé à sa sœur.|Er bringt seiner Schwester einen Tee.|9|bringt;seiner;Schwester;Tee
S|Je le connais bien.|Ich kenne ihn gut.|9|kenne;ihn;gut
S|Ma mère ne mange pas de viande.|Meine Mutter isst kein Fleisch.|9|Meine;Mutter;Fleisch
S|C'est notre voiture.|Das ist unser Auto.;Es ist unser Auto.|9|unser;Auto
S|Où est ton frère ?|Wo ist dein Bruder?|9|Wo;dein;Bruder
S|Ma voiture est à la gare.|Mein Auto ist am Bahnhof.|9|Mein;Auto;Bahnhof
S|Le repas te plaît ?|Schmeckt dir das Essen?|9|Schmeckt;dir;Essen
S|L'addition est pour moi.|Die Rechnung ist für mich.|9|Rechnung;für;mich

@a2-maison|A2|Chez soi, au quotidien|Organiser sa journée avec les verbes à particule, donner des consignes, parler de son logement et de ses vêtements.
F|12;13
V|pres|aufstehen;anfangen;anrufen;einsteigen;aussteigen;umsteigen;ankommen;mitkommen;fernsehen;abholen;aufmachen;zumachen
M|das Schlafzimmer;das Wohnzimmer;der Flur;das Stockwerk;der Aufzug;der Kühlschrank;die Waschmaschine;die Heizung;der Müll;die Mülltonne;der Briefkasten;umziehen;mieten;putzen;lüften;gemütlich
M|die Kleidung;die Hose;das Hemd;das T-Shirt;der Pullover;die Jacke;der Mantel;das Kleid;der Rock;der Schuh;die Socke;die Mütze;der Schal;der Regenschirm;die Tasche;die Größe;die Umkleidekabine;anziehen;anprobieren;passen;eng;bequem
M|machen;sagen;fragen;antworten;verstehen;hören;öffnen;schließen;anfangen;aufhören;aufstehen;anrufen;zeigen;mitbringen;suchen;brauchen;lernen;warten
T|Wir [stehen] früh auf.|aufstehen|Nous nous levons tôt.|12
T|Paul steht jeden Tag um sechs [auf].|aufstehen|Paul se lève tous les jours à six heures.|12
T|Wann [fängt] der Kurs an?|anfangen|Quand commence le cours ?|12
T|Der Unterricht fängt um neun [an].|anfangen|Le cours commence à neuf heures.|12
T|Ich [rufe] meine Mutter an.|anrufen|J'appelle ma mère.|12
T|Wann rufst du mich [an]?|anrufen|Quand m'appelles-tu ?|12
T|Wir [steigen] am Bahnhof ein.|einsteigen|Nous montons à la gare.|12
T|Hier [steigt] Maria aus.|aussteigen|Ici, Maria descend.|12
T|Du [steigst] in Köln um.|umsteigen|Tu changes à Cologne.|12
T|Der Zug [kommt] um acht Uhr an.|ankommen|Le train arrive à huit heures.|12
T|[Kommst] du heute mit?|mitkommen|Tu viens avec nous aujourd'hui ?|12
T|Wir [sehen] heute Abend fern.|fernsehen|Ce soir, nous regardons la télévision.|12
T|Anna holt die Kinder [ab].|abholen|Anna va chercher les enfants.|12
T|Er [holt] mich am Flughafen ab.|abholen|Il vient me chercher à l'aéroport.|12
T|Mach das Fenster [zu]!|zumachen|Ferme la fenêtre !|12
T|Wer [macht] die Tür auf?|aufmachen|Qui ouvre la porte ?|12
T|Wir [besuchen] heute die Oma.|besuchen|Nous rendons visite à la grand-mère aujourd'hui.|12
T|[Komm/Komme] bitte schnell!|kommen (du)|Viens vite, s'il te plaît !|13
T|[Nimm] den Schlüssel!|nehmen (du)|Prends la clé !|13
T|[Gib] mir bitte die Tasche!|geben (du)|Donne-moi le sac, s'il te plaît !|13
T|[Lies] das Buch!|lesen (du)|Lis le livre !|13
T|[Fahr/Fahre] langsam!|fahren (du)|Roule doucement !|13
T|[Warte] bitte hier!|warten (du)|Attends ici, s'il te plaît !|13
T|[Öffne] die Flasche!|öffnen (du)|Ouvre la bouteille !|13
T|[Seid] bitte leise!|sein (ihr)|Soyez calmes, s'il vous plaît !|13
T|[Kommt] um acht!|kommen (ihr)|Venez à huit heures !|13
T|[Nehmen] Sie bitte Platz!|nehmen (Sie)|Asseyez-vous, s'il vous plaît !|13
T|[Warten] Sie hier!|warten (Sie)|Attendez ici !|13
T|[Seien] Sie pünktlich!|sein (Sie)|Soyez à l'heure !|13
T|Steh bitte [auf]!|aufstehen (du)|Lève-toi, s'il te plaît !|13
T|[Ruf/Rufe] mich morgen an!|anrufen (du)|Appelle-moi demain !|13
S|Je me lève à sept heures.|Ich stehe um sieben Uhr auf.;Um sieben Uhr stehe ich auf.|12|stehe;sieben;auf
S|Le cours commence à dix heures.|Der Kurs fängt um zehn Uhr an.;Der Kurs beginnt um zehn Uhr.;Der Unterricht fängt um zehn Uhr an.;Der Unterricht beginnt um zehn Uhr.|12|Kurs/Unterricht;zehn;fängt/beginnt
S|Tu m'appelles demain ?|Rufst du mich morgen an?|12|Rufst;mich;an
S|Nous descendons ici.|Wir steigen hier aus.|12|steigen;hier;aus
S|Tu dois changer à Cologne.|Du musst in Köln umsteigen.|12|musst;Köln;umsteigen
S|Je vais chercher Anna à la gare.|Ich hole Anna am Bahnhof ab.;Ich hole Anna vom Bahnhof ab.|12|hole;Anna;ab
S|Ce soir, nous regardons la télévision.|Heute Abend sehen wir fern.;Wir sehen heute Abend fern.|12|sehen;fern
S|Je voudrais essayer la veste.|Ich möchte die Jacke anprobieren.|12|Jacke;anprobieren
S|Il met sa veste.|Er zieht seine Jacke an.|12|zieht;Jacke;an
S|Il déménage à Berlin.|Er zieht nach Berlin um.|12|zieht;Berlin;um
S|Le manteau me va bien.|Der Mantel passt mir gut.;Der Mantel steht mir gut.|8|Mantel;mir;gut
S|Ouvre la fenêtre !|Mach das Fenster auf!;Öffne das Fenster!|13|Fenster;auf/Öffne
S|Ferme la porte, s'il te plaît !|Mach bitte die Tür zu!;Mach die Tür bitte zu!;Schließ bitte die Tür!;Schließe bitte die Tür!;Schließ die Tür bitte!;Mach die Tür zu!|13|Tür;zu/Schließ/Schließe
S|Parle plus lentement, s'il te plaît.|Sprich bitte langsamer.;Sprich langsamer, bitte.|13|Sprich;bitte;langsamer
S|Aide-moi, s'il te plaît !|Hilf mir bitte!;Bitte hilf mir!|13|Hilf;mir;bitte
S|Prends ton manteau !|Nimm deinen Mantel!|13|Nimm;deinen;Mantel
S|Attendez ici, s'il vous plaît.|Warten Sie bitte hier.;Warten Sie hier, bitte.;Wartet bitte hier.;Wartet hier, bitte.|13|hier;bitte
S|Reste à la maison !|Bleib zu Hause!;Bleibe zu Hause!|13|zu;Hause

@a2-raconter|A2|Raconter le passé|Dire ce qu'on a fait au parfait, utiliser war, hatte et les modaux au prétérit, parler du temps et des loisirs.
F|14;15
V|perf|tragen;rufen;verlieren;rennen;halten;ausgehen;abfahren;zurückkommen;mitnehmen
V|prat|steigen;scheinen;gewinnen;singen
M|der Vormittag;der Januar;der Februar;der März;der April;der Mai;der Juni;der Juli;der August;der September;der Oktober;der November;der Dezember;der Frühling;der Sommer;der Herbst;der Winter;der Feiertag;der Geburtstag;übermorgen;bald;später;manchmal;Wie spät ist es?;Es ist halb drei.
M|das Wetter;die Sonne;der Regen;der Schnee;der Wind;die Wolke;das Gewitter;die Temperatur;sonnig;bewölkt;Es regnet.;Es ist kalt.;Es ist warm.;die Freizeit;das Hobby;der Sport;das Kino;der Film;das Buch;die Musik;das Konzert;das Museum;der Ausflug;die Reise;das Schwimmbad;der Verein;das Spiel;spazieren gehen;schwimmen;wandern;sich treffen;Hast du Lust?;wohnen;leben;verlieren;tragen
T|Ich [habe] gestern viel gearbeitet.|haben/sein|Hier, j'ai beaucoup travaillé.|14
T|Wir [sind] nach Hamburg gefahren.|haben/sein|Nous sommes allés à Hambourg.|14
T|Anna [ist] spät gekommen.|haben/sein|Anna est arrivée tard.|14
T|Er [hat] einen Apfel gegessen.|haben/sein|Il a mangé une pomme.|14
T|Paul [ist] zu Hause geblieben.|haben/sein|Paul est resté à la maison.|14
T|Gestern [ist] nichts passiert.|haben/sein|Hier, il ne s'est rien passé.|14
T|Ich [bin] früh aufgestanden.|haben/sein|Je me suis levé tôt.|14
T|Ich habe einen Film [gesehen].|sehen|J'ai vu un film.|14
T|Er hat ein Buch [gelesen].|lesen|Il a lu un livre.|14
T|Wir haben Kaffee [getrunken].|trinken|Nous avons bu du café.|14
T|Du hast viel [geschlafen].|schlafen|Tu as beaucoup dormi.|14
T|Sie hat den Brief [geschrieben].|schreiben|Elle a écrit la lettre.|14
T|Wir haben Obst [gekauft].|kaufen|Nous avons acheté des fruits.|14
T|Hast du die Miete [bezahlt]?|bezahlen|As-tu payé le loyer ?|14
T|Wir haben am Samstag [eingekauft].|einkaufen|Nous avons fait les courses samedi.|14
T|Der Film hat um acht [angefangen].|anfangen|Le film a commencé à huit heures.|14
T|Ich habe dich gestern [angerufen].|anrufen|Je t'ai appelé hier.|14
T|Ich [war] gestern im Kino.|sein (Präteritum)|Hier, j'étais au cinéma.|15
T|Wir [waren] am Wochenende in Wien.|sein (Präteritum)|Nous étions à Vienne ce week-end.|15
T|Wo [warst] du gestern?|sein (Präteritum)|Où étais-tu hier ?|15
T|Das Wetter [war] schön.|sein (Präteritum)|Il faisait beau.|15
T|Ich [hatte] keine Lust.|haben (Präteritum)|Je n'avais pas envie.|15
T|[Hattest] du Zeit?|haben (Präteritum)|Avais-tu le temps ?|15
T|Er [hatte] Fieber.|haben (Präteritum)|Il avait de la fièvre.|15
T|Ich [konnte] nicht kommen.|können (Präteritum)|Je n'ai pas pu venir.|15
T|Wir [mussten] lange warten.|müssen (Präteritum)|Nous avons dû attendre longtemps.|15
T|Anna [wollte] ins Kino gehen.|wollen (Präteritum)|Anna voulait aller au cinéma.|15
T|Früher [gab] es hier ein Kino.|geben (Präteritum)|Avant, il y avait un cinéma ici.|15
T|Er [wurde] krank.|werden (Präteritum)|Il est tombé malade.|15
T|Die Kinder [durften] nicht fernsehen.|dürfen (Präteritum)|Les enfants n'avaient pas le droit de regarder la télévision.|15
S|Hier, j'ai travaillé à la maison.|Gestern habe ich zu Hause gearbeitet.;Ich habe gestern zu Hause gearbeitet.|14|habe;Hause;gearbeitet
S|Nous sommes allés au cinéma.|Wir sind ins Kino gegangen.|14|sind;Kino;gegangen
S|Elle a lu un livre.|Sie hat ein Buch gelesen.|14|hat;Buch;gelesen
S|Il est arrivé hier.|Er ist gestern angekommen.;Gestern ist er angekommen.;Er ist gestern gekommen.;Gestern ist er gekommen.|14|gestern;angekommen/gekommen
S|Qu'as-tu mangé ?|Was hast du gegessen?|14|Was;gegessen
S|J'ai oublié la clé.|Ich habe den Schlüssel vergessen.|14|Schlüssel;vergessen
S|Nous avons gagné le jeu.|Wir haben das Spiel gewonnen.|14|Spiel;gewonnen
S|Il a perdu sa clé.|Er hat seinen Schlüssel verloren.|14|seinen;Schlüssel;verloren
S|Le soleil a brillé.|Die Sonne hat geschienen.;Die Sonne schien.|14|Sonne;geschienen/schien
S|Les enfants ont chanté.|Die Kinder haben gesungen.|14|Kinder;gesungen
S|Je suis sorti avec Anna.|Ich bin mit Anna ausgegangen.|14|bin;Anna;ausgegangen
S|Le bus est parti à huit heures.|Der Bus ist um acht Uhr abgefahren.;Der Bus fuhr um acht Uhr ab.|14|Bus;acht;abgefahren/ab
S|Il est rentré tard.|Er ist spät zurückgekommen.;Er ist spät nach Hause gekommen.|14|ist;spät
S|J'étais à la maison.|Ich war zu Hause.;Ich bin zu Hause gewesen.|15|Hause;war/gewesen
S|Hier, il y avait un concert.|Gestern gab es ein Konzert.;Es gab gestern ein Konzert.|15|gab;Konzert
S|Comment était le week-end ?|Wie war das Wochenende?|15|war;Wochenende
S|Je n'ai pas pu dormir.|Ich konnte nicht schlafen.|15|konnte;schlafen
S|Nous avons dû attendre.|Wir mussten warten.;Wir haben warten müssen.|15|warten;mussten/müssen
S|Elle n'avait pas le temps.|Sie hatte keine Zeit.|15|hatte;keine;Zeit

@a2-sante|A2|Santé et comparaisons|Parler de son corps et du médecin, utiliser les verbes pronominaux, comparer les choses et les gens.
F|16;19
V|pres|waschen;anziehen;umziehen;aussehen;kennenlernen;schneiden;fallen;treiben;sterben
M|der Körper;der Kopf;das Auge;das Ohr;die Nase;der Mund;der Zahn;der Hals;der Arm;die Hand;der Finger;der Bauch;der Rücken;das Bein;der Fuß;das Herz;der Arzt;die Ärztin;die Praxis;das Krankenhaus;das Medikament;das Rezept;das Fieber;die Erkältung;der Husten;die Schmerzen;krank;gesund;müde;Ich habe Kopfschmerzen.;Mir ist schlecht.;Ich brauche einen Termin.;Gute Besserung!
M|groß;klein;alt;neu;jung;gut;schlecht;schön;hässlich;lang;kurz;schnell;langsam;heiß;kalt;warm;leicht;schwer;einfach;schwierig;liegen;sitzen;stehen;früh;spät;nett;richtig;falsch
T|Ich wasche [mich] jeden Morgen.|sich (ich)|Je me lave chaque matin.|16
T|Ich putze [mir] die Zähne.|sich (ich, Dativ)|Je me brosse les dents.|16
T|Beeil [dich]!|sich (du)|Dépêche-toi !|16
T|Er fühlt [sich] heute schlecht.|sich|Il se sent mal aujourd'hui.|16
T|Wir treffen [uns] am Bahnhof.|sich (wir)|Nous nous retrouvons à la gare.|16
T|Ihr müsst [euch] beeilen.|sich (ihr)|Vous devez vous dépêcher.|16
T|Anna freut [sich] auf den Urlaub.|sich|Anna a hâte d'être en vacances.|16
T|Setzen Sie [sich] bitte!|sich (Sie)|Asseyez-vous, s'il vous plaît !|16
T|Hast du [dir] die Hände gewaschen?|sich (du, Dativ)|T'es-tu lavé les mains ?|16
T|Ich kaufe [mir] ein Fahrrad.|sich (ich, Dativ)|Je m'achète un vélo.|16
T|Hast du [dich] erkältet?|sich (du)|As-tu pris froid ?|16
T|Ich habe [mich] erkältet.|sich (ich)|J'ai pris froid.|16
T|Kannst du [dir] den Termin merken?|sich (du, Dativ)|Peux-tu retenir le rendez-vous ?|16
T|Er [fühlt] sich krank.|fühlen|Il se sent malade.|16
T|Ich [freue] mich auf morgen.|freuen|J'ai hâte d'être à demain.|16
T|Das Kind [wäscht] sich die Hände.|waschen|L'enfant se lave les mains.|16
T|Anna ist [jünger] als Paul.|jung|Anna est plus jeune que Paul.|19
T|Der Zug ist [schneller] als der Bus.|schnell|Le train est plus rapide que le bus.|19
T|Das Fieber ist heute [höher] als gestern.|hoch|La fièvre est plus élevée aujourd'hui qu'hier.|19
T|Heute geht es mir [besser].|gut|Je vais mieux aujourd'hui.|19
T|Tee trinke ich [lieber] als Kaffee.|gern|Je préfère le thé au café.|19
T|Mein Vater arbeitet [mehr] als ich.|viel|Mon père travaille plus que moi.|19
T|Die Wohnung ist [kleiner] als das Haus.|klein|L'appartement est plus petit que la maison.|19
T|Berlin ist [größer] als Bonn.|groß|Berlin est plus grand que Bonn.|19
T|Das Medikament ist so teuer [wie] das andere.|als/wie|Ce médicament est aussi cher que l'autre.|19
T|Meine Schwester ist größer [als] ich.|als/wie|Ma sœur est plus grande que moi.|19
T|Ist das [nächste] Krankenhaus weit?|nah|L'hôpital le plus proche est-il loin ?|19
T|Der Arm tut am [meisten] weh.|viel|C'est le bras qui fait le plus mal.|19
T|Im Winter ist es am [kältesten].|kalt|C'est en hiver qu'il fait le plus froid.|19
T|Am [liebsten] esse ich Fisch.|gern|Ce que je préfère manger, c'est le poisson.|19
T|Er ist der [beste] Arzt.|gut|C'est le meilleur médecin.|19
T|Anna ist am [jüngsten].|jung|C'est Anna la plus jeune.|19
S|Je me sens bien aujourd'hui.|Ich fühle mich heute gut.;Heute fühle ich mich gut.|16|fühle;mich;gut
S|Nous devons nous dépêcher.|Wir müssen uns beeilen.|16|müssen;uns;beeilen
S|Il se lave.|Er wäscht sich.|16|wäscht;sich
S|Nous nous voyons demain.|Wir treffen uns morgen.;Wir sehen uns morgen.;Morgen treffen wir uns.;Morgen sehen wir uns.|16|uns;morgen
S|Anna a pris froid.|Anna hat sich erkältet.|16|Anna;sich;erkältet
S|Je m'achète une veste.|Ich kaufe mir eine Jacke.|16|kaufe;mir;Jacke
S|J'ai hâte d'être à l'été.|Ich freue mich auf den Sommer.|16|freue;mich;Sommer
S|As-tu mal à la tête ?|Hast du Kopfschmerzen?;Tut dir der Kopf weh?|6|Kopfschmerzen/Kopf
S|Mon bras me fait mal.|Mein Arm tut weh.;Mein Arm tut mir weh.;Mir tut der Arm weh.|9|Arm;weh
S|J'ai de la fièvre.|Ich habe Fieber.|6|habe;Fieber
S|Elle est fatiguée et malade.|Sie ist müde und krank.|1|müde;krank
S|Le médecin est plus jeune que moi.|Der Arzt ist jünger als ich.|19|Arzt;jünger;als
S|La fièvre est plus forte aujourd'hui.|Das Fieber ist heute höher.;Heute ist das Fieber höher.;Das Fieber ist heute stärker.;Heute ist das Fieber stärker.|19|Fieber;heute;höher/stärker
S|Anna parle mieux allemand que Paul.|Anna spricht besser Deutsch als Paul.;Anna spricht Deutsch besser als Paul.|19|besser;Deutsch;als
S|Ce médicament est moins cher.|Das Medikament ist billiger.;Das Medikament ist günstiger.;Dieses Medikament ist billiger.;Dieses Medikament ist günstiger.|19|Medikament;billiger/günstiger
S|Je préfère boire de l'eau.|Ich trinke lieber Wasser.|19|trinke;lieber;Wasser
S|Paul est aussi grand que Tom.|Paul ist so groß wie Tom.|19|so;groß;wie
S|Le train est le plus rapide.|Der Zug ist am schnellsten.;Der Zug ist der schnellste.|19|Zug;schnellsten/schnellste
S|Le médecin le plus proche est à Bonn.|Der nächste Arzt ist in Bonn.|19|nächste;Arzt;Bonn

@a2-raisons|A2|Travail, raisons et projets|Relier ses idées, expliquer pourquoi, décrire avec des adjectifs, parler de l'avenir, demander poliment.
F|17;18;20
V|pres|aufhören;aufräumen;einladen;ausfüllen;zuhören;unterschreiben;schließen;nennen;lassen;werfen;ziehen
M|die Arbeit;der Job;der Beruf;die Firma;das Büro;der Chef;die Chefin;der Kollege;die Kollegin;der Urlaub;die Pause;der Feierabend;der Computer;das Handy;das Geld;die Adresse;gefallen;glauben;denken
M|wer?;was?;wo?;wohin?;woher?;wann?;warum?;wie?;wie viel?;welcher?;und;oder;aber;weil;dass;wenn;also;auch;noch;schon;nur;sehr;ziemlich;vielleicht;zusammen;allein;hier;dort;alles;nichts;etwas;jemand;niemand;viel;wenig;genug
T|Anna bleibt zu Hause, [weil] sie krank ist.|weil/wenn/dass|Anna reste à la maison parce qu'elle est malade.|17
T|Ich glaube, [dass] er heute kommt.|weil/dass/ob|Je crois qu'il vient aujourd'hui.|17
T|Ich komme nicht, [denn] ich muss arbeiten.|denn/weil/dass|Je ne viens pas, car je dois travailler.|17
T|Ich weiß nicht, [ob] er Zeit hat.|ob/dass/wenn|Je ne sais pas s'il a le temps.|17
T|[Wenn] es regnet, bleiben wir zu Hause.|wenn/als/ob|S'il pleut, nous restons à la maison.|17
T|[Als] ich ein Kind war, wohnte ich in Köln.|wenn/als/ob|Quand j'étais enfant, j'habitais à Cologne.|17
T|Ich trinke nicht Kaffee, [sondern] Tee.|aber/sondern/und|Je ne bois pas de café, mais du thé.|17
T|Es ist kalt, [trotzdem] gehen wir schwimmen.|deshalb/trotzdem/dann|Il fait froid, nous allons quand même nager.|17
T|Ich bin müde, [deshalb] gehe ich ins Bett.|deshalb/trotzdem/dann|Je suis fatigué, c'est pourquoi je vais me coucher.|17
T|Ich weiß, dass du heute [kommst].|kommen|Je sais que tu viens aujourd'hui.|17
T|Wir essen, wenn Paul [ankommt].|ankommen|Nous mangeons quand Paul arrive.|17
T|Ich lerne Deutsch, weil ich in Wien [arbeite].|arbeiten|J'apprends l'allemand parce que je travaille à Vienne.|17
T|Mein Bruder hat einen [guten] Job.|gut (der Job)|Mon frère a un bon travail.|18
T|Wir haben ein [schönes] Haus.|schön (das Haus)|Nous avons une belle maison.|18
T|Ich kaufe einen [neuen] Computer.|neu (der Computer)|J'achète un nouvel ordinateur.|18
T|Der [alte] Chef ist nett.|alt (der Chef)|Le vieux chef est gentil.|18
T|Ich nehme die [kleine] Tasche.|klein (die Tasche)|Je prends le petit sac.|18
T|Er arbeitet in einer [großen] Firma.|groß (die Firma)|Il travaille dans une grande entreprise.|18
T|Das [neue] Büro ist schön.|neu (das Büro)|Le nouveau bureau est beau.|18
T|Ich trinke [heißen] Kaffee.|heiß (der Kaffee)|Je bois du café chaud.|18
T|Ich möchte [frisches] Brot.|frisch (das Brot)|Je voudrais du pain frais.|18
T|Ich [werde] dir morgen schreiben.|werden|Je t'écrirai demain.|20
T|Wir [werden] nächstes Jahr umziehen.|werden|Nous déménagerons l'année prochaine.|20
T|Er [wird] bald kommen.|werden|Il viendra bientôt.|20
T|[Könnten] Sie mir das zeigen?|können (Konjunktiv II)|Pourriez-vous me montrer cela ?|20
T|[Würden] Sie mir bitte helfen?|werden (Konjunktiv II)|Voudriez-vous m'aider, s'il vous plaît ?|20
T|Du [solltest] mehr schlafen.|sollen (Konjunktiv II)|Tu devrais dormir plus.|20
T|Ich [würde] gern schwimmen gehen.|werden (Konjunktiv II)|J'aimerais bien aller nager.|20
T|Wir [hätten] gern einen Tisch.|haben (Konjunktiv II)|Nous voudrions une table.|20
T|Das [wäre] sehr nett.|sein (Konjunktiv II)|Ce serait très gentil.|20
S|Je reste à la maison parce que je suis fatigué.|Ich bleibe zu Hause, weil ich müde bin.;Ich bleibe zu Hause, denn ich bin müde.|17|bleibe;Hause;müde
S|Je crois qu'il est malade.|Ich glaube, dass er krank ist.;Ich glaube, er ist krank.|17|glaube;krank
S|Je ne sais pas si Anna vient.|Ich weiß nicht, ob Anna kommt.|17|weiß;ob;Anna
S|Quand j'ai le temps, je lis.|Wenn ich Zeit habe, lese ich.;Ich lese, wenn ich Zeit habe.|17|wenn;Zeit;lese
S|Quand j'étais enfant, j'habitais à Berlin.|Als ich ein Kind war, habe ich in Berlin gewohnt.;Als ich ein Kind war, wohnte ich in Berlin.;Als ich Kind war, habe ich in Berlin gewohnt.;Als ich Kind war, wohnte ich in Berlin.|17|Als;Berlin
S|Il pleut, c'est pourquoi je prends le bus.|Es regnet, deshalb nehme ich den Bus.;Es regnet, deswegen nehme ich den Bus.;Es regnet, deshalb fahre ich mit dem Bus.;Es regnet, deswegen fahre ich mit dem Bus.|17|regnet;Bus
S|Je ne bois pas de bière mais du vin.|Ich trinke kein Bier, sondern Wein.;Ich trinke nicht Bier, sondern Wein.|17|Bier;sondern;Wein
S|J'achète le pull vert.|Ich kaufe den grünen Pullover.|18|grünen;Pullover
S|Ils habitent dans une grande ville.|Sie wohnen in einer großen Stadt.;Sie leben in einer großen Stadt.|18|wohnen/leben;großen;Stadt
S|Il a une nouvelle voiture.|Er hat ein neues Auto.|18|neues;Auto
S|Nous avons une petite cuisine.|Wir haben eine kleine Küche.|18|kleine;Küche
S|Nous cherchons un appartement bon marché.|Wir suchen eine billige Wohnung.;Wir suchen eine günstige Wohnung.|18|suchen;Wohnung
S|Elle travaille dans une petite entreprise.|Sie arbeitet in einer kleinen Firma.|18|einer;kleinen;Firma
S|Je te rendrai visite demain.|Ich werde dich morgen besuchen.;Ich besuche dich morgen.|20|dich;morgen;besuchen/besuche
S|Pourriez-vous ouvrir la fenêtre ?|Könnten Sie das Fenster öffnen?;Könnten Sie das Fenster aufmachen?;Könntet ihr das Fenster öffnen?;Könntet ihr das Fenster aufmachen?;Würden Sie das Fenster öffnen?;Würden Sie das Fenster aufmachen?|20|Fenster;öffnen/aufmachen
S|Tu devrais moins travailler.|Du solltest weniger arbeiten.|20|solltest;weniger;arbeiten
S|J'aimerais un verre d'eau.|Ich hätte gern ein Glas Wasser.;Ich möchte ein Glas Wasser.|20|Glas;Wasser
S|Si j'avais le temps, je viendrais.|Wenn ich Zeit hätte, würde ich kommen.;Wenn ich Zeit hätte, käme ich.|20|Wenn;Zeit;hätte

@b1-echanger|B1|Échanger et s'entendre|Réagir et parler de ce qui nous touche avec les bonnes prépositions, décrire les gens et les choses, soigner la déclinaison faible.
F|21;37
V|pres|raten;leihen;riechen;lügen;vergleichen;entscheiden
V|prat|streiten;schreien;beißen;klingen;frieren;genießen;leiden
P|warten>auf;sich freuen>auf;sich freuen>über;denken>an;sich kümmern>um;sich interessieren>für;sich ärgern>über;fragen>nach;teilnehmen>an;Angst haben>vor;abhängen>von;sich gewöhnen>an;sich erinnern>an;träumen>von;sprechen>mit;sprechen>über;sich unterhalten>über;erzählen>von;bitten>um;antworten>auf
M|voll;leer;wichtig;laut;leise;sauber;schmutzig;nah;freundlich;glücklich;traurig;froh;böse;fertig;frei;besetzt;kaputt;sicher
M|sein;haben;mögen;gehen;kommen;sprechen;wissen;kennen;sehen;lesen;schreiben;essen;trinken;schlafen;geben
T|Wir warten schon lange [auf] den Zug.|warten|Nous attendons le train depuis longtemps.|21
T|Ich freue mich sehr [auf] die Ferien.|sich freuen (auf/über)|J'ai très hâte d'être en vacances.|21
T|Sie freut sich [über] die Blumen.|sich freuen (auf/über)|Elle est contente des fleurs.|21
T|Er denkt jeden Tag [an] seine Tochter.|denken|Il pense tous les jours à sa fille.|21
T|Meine Schwester kümmert sich [um] unsere Eltern.|sich kümmern|Ma sœur s'occupe de nos parents.|21
T|Interessierst du dich [für] Musik?|sich interessieren|Est-ce que tu t'intéresses à la musique ?|21
T|Mein Vater ärgert sich [über] die Nachbarn.|sich ärgern|Mon père est agacé par les voisins.|21
T|Der Tourist fragt [nach] dem Bahnhof.|fragen|Le touriste demande où est la gare.|21
T|Mein Bruder nimmt [an] einem Deutschkurs teil.|teilnehmen|Mon frère participe à un cours d'allemand.|21
T|Das Kind hat Angst [vor] dem Hund.|Angst haben|L'enfant a peur du chien.|21
T|Es hängt [von] dir ab.|abhängen|Ça dépend de toi.|21
T|Hast du dich schon [an] die Kälte gewöhnt?|sich gewöhnen|T'es-tu déjà habitué au froid ?|21
T|Ich erinnere mich gut [an] meine Oma.|sich erinnern|Je me souviens bien de ma grand-mère.|21
T|Er träumt [von] einem großen Haus.|träumen|Il rêve d'une grande maison.|21
T|[Worauf] wartet ihr?|wo- + auf|Qu'est-ce que vous attendez ?|21
T|[Woran] erinnerst du dich?|wo- + an|De quoi te souviens-tu ?|21
T|[Worüber] habt ihr gesprochen?|wo- + über|De quoi avez-vous parlé ?|21
T|[Wofür] interessiert sich Max?|wo- + für|À quoi Max s'intéresse-t-il ?|21
T|Das Geschenk ist schön, ich freue mich [darüber].|da- + über|Le cadeau est beau, j'en suis content.|21
T|Der Urlaub kommt bald, wir freuen uns schon [darauf].|da- + auf|Les vacances arrivent bientôt, nous avons déjà hâte d'y être.|21
T|Auf [wen] warten die Kinder?|auf (Person)|Qui les enfants attendent-ils ?|21
T|Ich sehe den [Kollegen] im Büro.|der Kollege|Je vois le collègue au bureau.|37
T|Wir sprechen mit dem [Studenten].|der Student|Nous parlons avec l'étudiant.|37
T|Morgen besuche ich meinen [Nachbarn].|der Nachbar|Demain je rends visite à mon voisin.|37
T|Der Arzt hilft dem [Jungen].|der Junge|Le médecin aide le garçon.|37
T|Der Kellner bringt dem [Kunden] die Rechnung.|der Kunde|Le serveur apporte l'addition au client.|37
T|Ich habe [Herrn] Weber geschrieben.|der Herr|J'ai écrit à monsieur Weber.|37
T|Der [Polizist] hat mir geholfen.|der Polizist|Le policier m'a aidé.|37
T|Ich kenne den [Polizisten] nicht.|der Polizist|Je ne connais pas le policier.|37
T|Hast du schon mit dem [Praktikanten] gesprochen?|der Praktikant|As-tu déjà parlé au stagiaire ?|37
T|Die [Studenten] wohnen in Köln.|der Student (Plural)|Les étudiants habitent à Cologne.|37
T|Ich verstehe diesen [Menschen] nicht.|der Mensch|Je ne comprends pas cette personne.|37
S|J'attends une réponse de ma collègue.|Ich warte auf eine Antwort von meiner Kollegin.|21|warte;auf;Antwort;Kollegin
S|Nous avons hâte d'être en été.|Wir freuen uns auf den Sommer.|21|freuen;auf;Sommer
S|Je suis content de ton cadeau.|Ich freue mich über dein Geschenk.;Ich bin froh über dein Geschenk.|21|über;dein;Geschenk
S|Mon frère pense souvent à son travail.|Mein Bruder denkt oft an seine Arbeit.;Mein Bruder denkt oft an seinen Job.|21|denkt;an;Arbeit/Job
S|Qui s'occupe de la grand-mère ?|Wer kümmert sich um die Oma?;Wer kümmert sich um die Großmutter?;Wer kümmert sich um Oma?|21|kümmert;um;Oma/Großmutter
S|Anna s'intéresse beaucoup au sport.|Anna interessiert sich sehr für Sport.;Anna interessiert sich sehr für den Sport.|21|interessiert;für;Sport
S|Je me souviens de cette ville.|Ich erinnere mich an diese Stadt.|21|erinnere;an;Stadt
S|Je ne me suis pas encore habitué au bruit.|Ich habe mich noch nicht an den Lärm gewöhnt.|21|an;Lärm;gewöhnt
S|As-tu peur des chiens ?|Hast du Angst vor Hunden?;Hast du Angst vor den Hunden?|21|Angst;vor;Hunden
S|Ça dépend du prix.|Das hängt vom Preis ab.;Das hängt von dem Preis ab.;Es hängt vom Preis ab.;Es hängt von dem Preis ab.|21|hängt;Preis;ab
S|De quoi rêves-tu ?|Wovon träumst du?|21|Wovon;träumst
S|J'y pense tous les jours.|Ich denke jeden Tag daran.;Jeden Tag denke ich daran.|21|denke;daran
S|Nous en avons parlé hier.|Wir haben gestern darüber gesprochen.;Gestern haben wir darüber gesprochen.|21|haben;darüber;gesprochen
S|Elle attend son voisin.|Sie wartet auf ihren Nachbarn.|37|wartet;auf;Nachbarn
S|Je connais ce client.|Ich kenne diesen Kunden.|37|kenne;diesen;Kunden
S|J'aide souvent le garçon.|Ich helfe dem Jungen oft.;Ich helfe oft dem Jungen.|37|helfe;dem;Jungen
S|Nous parlons avec les étudiants.|Wir sprechen mit den Studenten.|37|mit;den;Studenten
S|Connais-tu monsieur Schmidt ?|Kennst du Herrn Schmidt?|37|Kennst;Herrn;Schmidt
S|La médecin interroge le patient.|Die Ärztin fragt den Patienten.;Die Ärztin befragt den Patienten.|37|Ärztin;den;Patienten

@b1-travail|B1|Postuler et travailler|Chercher un poste, expliquer un but, préciser de qui on parle avec les relatives et l'infinitif avec zu.
F|22;23
V|pres|laden;messen;wachsen;schlagen;gelten;erhalten;verlassen;abgeben;vorschlagen;teilnehmen
V|prat|bieten;vorbereiten;feststellen
P|sich bewerben>um;sich bewerben>bei;sich vorbereiten>auf;sich konzentrieren>auf;sich beschäftigen>mit;arbeiten>an;anfangen>mit;aufhören>mit;helfen>bei;telefonieren>mit;einladen>zu;sich verabreden>mit;sich treffen>mit;sich entscheiden>für;sich bedanken>für;zufrieden>mit;zuständig>für;stolz>auf;fertig>mit;die Lust>auf
M|die Stelle;das Gehalt;der Vertrag;die Bewerbung;der Lebenslauf;das Vorstellungsgespräch;die Besprechung;die Überstunde;die E-Mail;die Aufgabe;arbeiten;verdienen;sich bewerben;kündigen;pünktlich;krankgeschrieben;Schönen Feierabend!
M|die Notaufnahme;die Krankenkasse;die Versichertenkarte;die Krankmeldung;der Führerschein;fahren;einkaufen;helfen;nehmen;bringen;finden;bleiben;vergessen;laufen
T|Die Chefin, [die] heute kommt, ist sehr nett.|die/der/den|La chef qui vient aujourd'hui est très gentille.|22
T|Der Kollege, [der] neben mir sitzt, heißt Jan.|der/den/dem|Le collègue assis à côté de moi s'appelle Jan.|22
T|Das Buch, [das] ich lese, ist sehr gut.|das/dem/die|Le livre que je lis est très bon.|22
T|Der Vertrag, [den] ich unterschreibe, ist neu.|der/den/dem|Le contrat que je signe est nouveau.|22
T|Die Stelle, [die] ich suche, ist in Hamburg.|die/der/den|Le poste que je cherche est à Hambourg.|22
T|Der Mann, [dem] ich helfe, kommt aus Polen.|der/den/dem|L'homme que j'aide vient de Pologne.|22
T|Die Kollegin, [der] ich die E-Mail schicke, arbeitet in Bonn.|die/der/den|La collègue à qui j'envoie l'e-mail travaille à Bonn.|22
T|Das Kind, [dem] wir helfen, ist neun Jahre alt.|das/den/dem|L'enfant que nous aidons a neuf ans.|22
T|Die Leute, [die] hier arbeiten, sind freundlich.|der/die/denen|Les gens qui travaillent ici sont aimables.|22
T|Die Kunden, [denen] ich schreibe, wohnen in Wien.|die/denen/der|Les clients à qui j'écris habitent à Vienne.|22
T|Die Firma, in [der] ich arbeite, ist klein.|die/der/das|L'entreprise dans laquelle je travaille est petite.|22
T|Der Kollege, mit [dem] ich spreche, ist mein Freund.|der/den/dem|Le collègue avec qui je parle est mon ami.|22
T|Die Besprechung, auf [die] wir warten, beginnt um zehn.|die/der/den|La réunion que nous attendons commence à dix heures.|22
T|Das ist alles, [was] ich habe.|was/das/die|C'est tout ce que j'ai.|22
T|Der Mann, [dessen] Auto dort steht, ist mein Chef.|dessen/deren/dem|L'homme dont la voiture est là-bas est mon chef.|22
T|Die Frau, [deren] Sohn hier arbeitet, heißt Maria.|dessen/deren/der|La femme dont le fils travaille ici s'appelle Maria.|22
T|Der Kollege, der heute nicht [kommt], ist krank.|kommen|Le collègue qui ne vient pas aujourd'hui est malade.|22
T|Es ist wichtig, pünktlich [zu] sein.|zu/um/ohne|Il est important d'être ponctuel.|23
T|Hast du Zeit, mir [zu] helfen?|zu/um/ohne|As-tu le temps de m'aider ?|23
T|Es macht Spaß, im Team [zu] arbeiten.|zu/um/ohne|C'est amusant de travailler en équipe.|23
T|Ich versuche, heute früher [anzukommen].|ankommen|J'essaie d'arriver plus tôt aujourd'hui.|23
T|Hast du Lust, mit mir [einzukaufen]?|einkaufen|As-tu envie de faire les courses avec moi ?|23
T|Er hat angefangen, die Küche [aufzuräumen].|aufräumen|Il a commencé à ranger la cuisine.|23
T|Ich habe keine Zeit, dich [anzurufen].|anrufen|Je n'ai pas le temps de t'appeler.|23
T|Wir planen, nächstes Jahr [umzuziehen].|umziehen|Nous prévoyons de déménager l'année prochaine.|23
T|Ich lerne Deutsch, [um] hier zu arbeiten.|um/damit/ohne|J'apprends l'allemand pour travailler ici.|23
T|Er arbeitet viel, [um] mehr Geld zu verdienen.|um/damit/ohne|Il travaille beaucoup pour gagner plus d'argent.|23
T|Der Chef erklärt alles, [damit] wir es verstehen.|um/damit/ohne|Le chef explique tout pour que nous comprenions.|23
T|Er ist gegangen, [ohne] die Rechnung zu bezahlen.|um/ohne/statt|Il est parti sans payer la facture.|23
T|[Statt] zu lernen, spielt er Fußball.|um/ohne/statt|Au lieu d'étudier, il joue au foot.|23
T|Ich kann heute nicht lange [bleiben].|bleiben|Je ne peux pas rester longtemps aujourd'hui.|23
T|Ich gehe jeden Tag [schwimmen].|schwimmen|Je vais nager tous les jours.|23
S|L'homme qui travaille ici est mon collègue.|Der Mann, der hier arbeitet, ist mein Kollege.|22|der;arbeitet;Kollege
S|La candidature que j'ai écrite est bonne.|Die Bewerbung, die ich geschrieben habe, ist gut.|22|Bewerbung;die;geschrieben
S|Le contrat que je lis est long.|Der Vertrag, den ich lese, ist lang.|22|Vertrag;den;lese
S|La collègue avec qui je parle est gentille.|Die Kollegin, mit der ich spreche, ist nett.;Die Kollegin, mit der ich spreche, ist freundlich.|22|Kollegin;mit;der;spreche
S|Les gens que j'aide sont gentils.|Die Leute, denen ich helfe, sind nett.;Die Leute, denen ich helfe, sind freundlich.|22|Leute;denen;helfe
S|C'est la ville où j'habite.|Das ist die Stadt, in der ich wohne.;Das ist die Stadt, wo ich wohne.|22|Stadt;wohne
S|L'entreprise dans laquelle je travaille est à Berlin.|Die Firma, in der ich arbeite, ist in Berlin.;Die Firma, bei der ich arbeite, ist in Berlin.|22|Firma;der;arbeite
S|Le collègue dont la voiture est vieille s'appelle Jan.|Der Kollege, dessen Auto alt ist, heißt Jan.|22|Kollege;dessen;Auto
S|C'est tout ce que je veux.|Das ist alles, was ich möchte.;Das ist alles, was ich will.|22|alles;was
S|Il est important de parler allemand.|Es ist wichtig, Deutsch zu sprechen.|23|wichtig;zu;sprechen
S|J'ai oublié d'envoyer l'e-mail.|Ich habe vergessen, die E-Mail zu schicken.;Ich habe vergessen, die E-Mail zu senden.|23|vergessen;E-Mail;zu
S|As-tu envie de faire les courses ?|Hast du Lust, einzukaufen?|23|Lust;einzukaufen
S|Je travaille pour gagner de l'argent.|Ich arbeite, um Geld zu verdienen.|23|um;Geld;verdienen
S|Il est parti sans payer.|Er ist gegangen, ohne zu bezahlen.;Er ist gegangen, ohne zu zahlen.;Er ging, ohne zu bezahlen.;Er ging, ohne zu zahlen.|23|ohne;zu
S|Au lieu de travailler, il dort.|Statt zu arbeiten, schläft er.;Anstatt zu arbeiten, schläft er.;Er schläft, statt zu arbeiten.;Er schläft, anstatt zu arbeiten.|23|arbeiten;schläft
S|Je t'appelle pour que tu viennes.|Ich rufe dich an, damit du kommst.|23|rufe;damit;kommst
S|J'essaie de trouver un poste.|Ich versuche, eine Stelle zu finden.|23|versuche;Stelle;finden
S|Il a commencé à ranger l'appartement.|Er hat angefangen, die Wohnung aufzuräumen.|23|angefangen;Wohnung;aufzuräumen
S|Nous n'avons pas le temps de manger.|Wir haben keine Zeit zu essen.;Wir haben keine Zeit zum Essen.|23|keine;Zeit;essen

@b1-demarches|B1|Démarches et courriers|Comprendre les courriers officiels grâce au passif et au génitif, louer un appartement, gérer sa banque et ses papiers.
F|24;25
V|perf|stehlen;brechen;verbieten;brennen;hängen;wiegen;braten;gießen;fließen;springen;verschwinden;reiten;fangen
P|sich anmelden>für;sich informieren>über;sich erkundigen>nach;sich beschweren>über;sich beschweren>bei;sich entschuldigen>für;sich entschuldigen>bei;sich wenden>an;sich verlassen>auf;achten>auf;aufpassen>auf;ausgeben>für;bestehen>aus;suchen>nach;gehören>zu;die Frage>nach;die Antwort>auf;der Grund>für;die Einladung>zu;die Lösung>für
M|die Nebenkosten;der Vermieter;der Mieter;die Kaution;der Mietvertrag;das Amt;das Bürgeramt;die Anmeldung;die Behörde;das Formular;der Antrag;der Ausweis;der Reisepass;die Unterschrift;die Staatsangehörigkeit;der Wohnsitz;die Steuer
M|die Steuernummer;die Versicherung;die Bank;das Konto;die Überweisung;der Geldautomat;der Brief;das Paket;die Frist;die Gebühr;der Rundfunkbeitrag;ausfüllen;unterschreiben;sich anmelden;beantragen;überweisen
T|Das Paket [wird] heute gebracht.|werden|Le colis est apporté aujourd'hui.|24
T|Die Briefe [werden] am Montag geschickt.|werden|Les lettres sont envoyées lundi.|24
T|Im Büro [wird] nicht geraucht.|werden|Au bureau, on ne fume pas.|24
T|Das Formular wird vom Amt [geprüft].|prüfen|Le formulaire est vérifié par l'administration.|24
T|Der Vertrag wird heute [unterschrieben].|unterschreiben|Le contrat est signé aujourd'hui.|24
T|Das Konto [wurde] gestern geschlossen.|werden (Präteritum)|Le compte a été fermé hier.|24
T|Die Kaution [wurde] schon bezahlt.|werden (Präteritum)|La caution a déjà été payée.|24
T|Das Haus wurde 1950 [gebaut].|bauen|La maison a été construite en 1950.|24
T|Der Antrag [ist] abgelehnt worden.|sein (Perfekt Passiv)|La demande a été refusée.|24
T|Die Rechnung ist schon bezahlt [worden].|werden (Perfekt Passiv)|La facture a déjà été payée.|24
T|Das Paket ist gestern abgeholt [worden].|werden (Perfekt Passiv)|Le colis a été retiré hier.|24
T|Die Gebühr [muss] pünktlich bezahlt werden.|müssen|La taxe doit être payée à temps.|24
T|Das Formular muss heute ausgefüllt [werden].|werden|Le formulaire doit être rempli aujourd'hui.|24
T|Der Ausweis kann hier beantragt [werden].|werden|La carte d'identité peut être demandée ici.|24
T|Der Brief wird [von] der Chefin unterschrieben.|von/mit/durch|La lettre est signée par la chef.|24
T|Das Bürgeramt [ist] am Samstag geschlossen.|sein/werden|Le bureau des citoyens est fermé le samedi.|24
T|Das Bürgeramt [wird] um 16 Uhr geschlossen.|sein/werden|Le bureau des citoyens ferme à 16 h.|24
T|Das ist die Adresse [des] Vermieters.|der/des/dem|C'est l'adresse du propriétaire.|25
T|Der Name [der] Bank ist lang.|die/der/den|Le nom de la banque est long.|25
T|Die Unterschrift [des] Mieters fehlt.|der/des/dem|La signature du locataire manque.|25
T|Die Adresse [der] Eltern ist neu.|die/der/den|L'adresse des parents est nouvelle.|25
T|Das Ende [des] Vertrags ist im Mai.|der/des/dem|La fin du contrat est en mai.|25
T|Der Preis [eines] Autos ist hoch.|ein/eines/einem|Le prix d'une voiture est élevé.|25
T|Die Kosten [meiner] Wohnung sind hoch.|meine/meiner/meinem|Les frais de mon appartement sont élevés.|25
T|Das ist das Büro [meines] Chefs.|mein/meines/meinem|C'est le bureau de mon chef.|25
T|Das ist der Vertrag des [Kollegen].|der Kollege|C'est le contrat du collègue.|25
T|Das ist [Annas] Konto.|Anna|C'est le compte d'Anna.|25
T|[Wegen] des Streiks kommt die Post später.|wegen/trotz/während|À cause de la grève, le courrier arrive plus tard.|25
T|[Trotz] der Kälte gehen wir spazieren.|wegen/trotz/während|Malgré le froid, nous allons nous promener.|25
T|[Während] des Urlaubs arbeite ich nicht.|wegen/trotz/während|Pendant les vacances, je ne travaille pas.|25
T|Das Büro ist außerhalb [der] Stadt.|der/die/den|Le bureau est en dehors de la ville.|25
T|Statt [einer] E-Mail schreibe ich einen Brief.|eine/einer/einem|Au lieu d'un e-mail, j'écris une lettre.|25
S|La lettre est envoyée aujourd'hui.|Der Brief wird heute geschickt.;Heute wird der Brief geschickt.;Der Brief wird heute verschickt.;Heute wird der Brief verschickt.|24|Brief;wird
S|Le formulaire est signé par le locataire.|Das Formular wird vom Mieter unterschrieben.;Das Formular wird von dem Mieter unterschrieben.|24|Formular;Mieter;unterschrieben;wird
S|La banque est fermée aujourd'hui.|Die Bank ist heute geschlossen.;Heute ist die Bank geschlossen.|24|Bank;ist;geschlossen
S|Le colis a été livré hier.|Das Paket wurde gestern geliefert.;Das Paket ist gestern geliefert worden.;Gestern wurde das Paket geliefert.;Gestern ist das Paket geliefert worden.|24|Paket;geliefert
S|Le loyer a été payé.|Die Miete wurde bezahlt.;Die Miete ist bezahlt worden.|24|Miete;bezahlt
S|Le formulaire doit être rempli.|Das Formular muss ausgefüllt werden.|24|Formular;muss;ausgefüllt;werden
S|Le contrat peut être signé demain.|Der Vertrag kann morgen unterschrieben werden.;Morgen kann der Vertrag unterschrieben werden.|24|Vertrag;kann;unterschrieben;werden
S|Mon passeport a été volé.|Mein Reisepass wurde gestohlen.;Mein Reisepass ist gestohlen worden.|24|Reisepass;gestohlen
S|Ici, on parle français.|Hier wird Französisch gesprochen.;Hier spricht man Französisch.;Man spricht hier Französisch.|24|hier;Französisch
S|Ma demande a été refusée.|Mein Antrag wurde abgelehnt.;Mein Antrag ist abgelehnt worden.|24|Antrag;abgelehnt
S|C'est la voiture de mon propriétaire.|Das ist das Auto meines Vermieters.;Das ist das Auto von meinem Vermieter.|25|Auto;Vermieters/Vermieter
S|La date du contrat est fausse.|Das Datum des Vertrags ist falsch.;Das Datum des Vertrages ist falsch.;Das Datum vom Vertrag ist falsch.|25|Datum;falsch
S|Voici l'adresse de la banque.|Hier ist die Adresse der Bank.;Das ist die Adresse der Bank.;Hier ist die Adresse von der Bank.;Das ist die Adresse von der Bank.|25|Adresse;Bank
S|Les charges de l'appartement sont élevées.|Die Nebenkosten der Wohnung sind hoch.;Die Nebenkosten von der Wohnung sind hoch.|25|Nebenkosten;Wohnung;hoch
S|À cause de la pluie, je reste à la maison.|Wegen des Regens bleibe ich zu Hause.;Wegen dem Regen bleibe ich zu Hause.;Ich bleibe wegen des Regens zu Hause.;Ich bleibe wegen dem Regen zu Hause.|25|wegen;Hause
S|Malgré la pluie, je vais à la banque.|Trotz des Regens gehe ich zur Bank.;Trotz dem Regen gehe ich zur Bank.;Ich gehe trotz des Regens zur Bank.;Ich gehe trotz dem Regen zur Bank.|25|trotz;Bank
S|Pendant les vacances, la banque est fermée.|Während der Ferien ist die Bank geschlossen.;In den Ferien ist die Bank geschlossen.|25|Ferien;Bank;geschlossen
S|C'est le passeport de Lena.|Das ist Lenas Reisepass.;Das ist der Reisepass von Lena.|25|Reisepass;Lenas/Lena
`;
// the same units translated for the English and Spanish interface (same lines, same German)
const PROGRAW_I18N = {"en": "// Unités du programme, dans l'ordre. L'identifiant d'une unité reste stable : la progression y est attachée.\n// @id|niveau|titre|description\n// F|fiches ; V|temps|verbes irréguliers (pres, prat ou perf) ; P|mots à préposition (mot>préposition) ; M|mots du vocabulaire\n// T|phrase à trous réservée à l'examen, réponse entre crochets (a/b si plusieurs)|indice|traduction|fiche\n// S|phrase à traduire vers l'allemand|versions acceptées séparées par ;|fiche|mots-clés séparés par ; (a/b si plusieurs formes ; chacun présent dans chaque version acceptée)\n// Ces phrases sont réservées à l'examen : ni les fiches, ni les listes, ni les exercices, ni les gabarits des Déclinaisons ne les montrent, build.py le vérifie.\n// N|mots qui gardent leur majuscule en tête de phrase sans être un nom du vocabulaire (prénoms…)\n\nN|Anna;Lena;Maria;Max;Paul;Tom;Entschuldigung\n\n@a1-presenter|A1|Introducing yourself|Greeting people, saying who you are, talking about your family, asking simple questions.\nF|1;2;27\nV|pres|sein;haben;heißen;kommen;gehen;wissen;kennen;schreiben;bleiben\nM|Hallo!;Guten Morgen!;Guten Tag!;Guten Abend!;Gute Nacht!;Tschüss!;Auf Wiedersehen!;Bis später!;Bis morgen!;Danke schön!;Bitte schön!;Entschuldigung!;ja;nein;bitte;Freut mich!;Alles klar!;Kein Problem.;Ich verstehe nicht.;Wie heißen Sie?;Woher kommen Sie?;Wie geht's?;Viel Glück!;Herzlich willkommen!;Guten Appetit!;Schönes Wochenende!\nM|die Familie;die Eltern;die Mutter;der Vater;das Kind;der Sohn;die Tochter;der Bruder;die Schwester;die Geschwister;die Großeltern;die Oma;der Opa;der Onkel;die Tante;der Mann;die Frau;der Freund;die Freundin;der Nachbar;die Nachbarin;das Baby;der Junge;das Mädchen;die Leute;der Hund;die Katze;verheiratet;ledig;geschieden;heiraten;besuchen\nT|[Die] Mutter heißt Julia.|der/die/das|The mother is called Julia.|1\nT|[Das] Kind ist zehn Jahre alt.|der/die/das|The child is ten years old.|1\nT|[Der] Bruder wohnt in Hamburg.|der/die/das|The brother lives in Hamburg.|1\nT|Wo wartet [die] Familie?|der/die/das|Where is the family waiting?|1\nT|Da kommt [das] Mädchen.|der/die/das|Here comes the girl.|1\nT|Hier schläft [der] Hund.|der/die/das|The dog sleeps here.|1\nT|Das ist [die] Katze von Anna.|der/die/das|That is Anna's cat.|1\nT|Wo wohnt [die] Tante?|der/die/das|Where does the aunt live?|1\nT|[Der] Junge ist neun.|der/die/das|The boy is nine.|1\nT|Ich [bin] Student.|sein|I am a student.|2\nT|Du [bist] sehr nett.|sein|You are very kind.|2\nT|Wir [sind] aus Frankreich.|sein|We are from France.|2\nT|Ihr [seid] heute hier.|sein|You (all) are here today.|2\nT|Ich [habe] zwei Kinder.|haben|I have two children.|2\nT|Er [hat] eine Schwester.|haben|He has a sister.|2\nT|[Hast] du Geschwister?|haben|Do you have brothers and sisters?|2\nT|Wir [haben] einen Hund.|haben|We have a dog.|2\nT|Ich [heiße] Paul.|heißen|My name is Paul.|2\nT|Wie [heißt] deine Mutter?|heißen|What is your mother's name?|2\nT|Du [kommst] aus Italien.|kommen|You come from Italy.|2\nT|Maria [kommt] aus Polen.|kommen|Maria comes from Poland.|2\nT|Wir [wohnen] in Köln.|wohnen|We live in Cologne.|2\nT|Er [arbeitet] in Berlin.|arbeiten|He works in Berlin.|2\nT|Du [arbeitest] viel.|arbeiten|You work a lot.|2\nT|[Wo] wohnt ihr? – In Bonn.|W-Frage|Where do you (all) live? – In Bonn.|27\nT|[Woher] kommst du? – Aus Spanien.|W-Frage|Where are you from? – From Spain.|27\nT|[Wer] ist das? – Das ist mein Vater.|W-Frage|Who is that? – That is my father.|27\nT|[Wie] heißt deine Schwester? – Lena.|W-Frage|What is your sister's name? – Lena.|27\nT|[Was] machst du? – Ich lerne Deutsch.|W-Frage|What are you doing? – I am learning German.|27\nT|[Wann] kommst du? – Morgen.|W-Frage|When are you coming? – Tomorrow.|27\nT|[Wohin] gehst du? – Nach Hause.|W-Frage|Where are you going? – Home.|27\nS|My name is Anna.|Ich heiße Anna.;Mein Name ist Anna.|2|heiße/Name;Anna\nS|What is the dog called?|Wie heißt der Hund?|27|Wie;heißt;Hund\nS|Where does Maria come from?|Woher kommt Maria?|27|Woher;kommt;Maria\nS|I come from Germany.|Ich komme aus Deutschland.|2|komme;aus;Deutschland\nS|We live in Berlin.|Wir wohnen in Berlin.|2|Wir;wohnen;Berlin\nS|I have a sister.|Ich habe eine Schwester.|2|habe;Schwester\nS|The father is here.|Der Vater ist hier.|1|Vater;hier\nS|The mother works in Munich.|Die Mutter arbeitet in München.|2|Mutter;arbeitet;München\nS|The child is called Max.|Das Kind heißt Max.|1|Kind;heißt;Max\nS|Where does the neighbour (man) live?|Wo wohnt der Nachbar?|27|Wo;wohnt;Nachbar\nS|Who is Anna?|Wer ist Anna?|27|Wer;Anna\nS|The neighbour (man) comes from Poland.|Der Nachbar kommt aus Polen.|2|Nachbar;kommt;Polen\nS|The neighbour (woman) is married.|Die Nachbarin ist verheiratet.|1|Nachbarin;verheiratet\nS|We have two children.|Wir haben zwei Kinder.|2|haben;zwei;Kinder\nS|Do you have a daughter? (du)|Hast du eine Tochter?|2|Hast;Tochter\nS|The people are very kind.|Die Leute sind sehr nett.|2|Leute;nett\nS|What are you doing? (du)|Was machst du?|27|Was;machst\nS|Where does Anna live?|Wo wohnt Anna?|27|Wo;wohnt;Anna\n\n@a1-journee|A1|My day, my home|Talking about your day, telling the time, counting, describing your home.\nF|3;4;26\nV|pres|fahren;essen;lesen;sehen;sprechen;nehmen;schlafen;treffen;laufen\nM|der Tag;die Woche;der Monat;das Jahr;die Stunde;die Minute;die Uhr;der Morgen;der Mittag;der Nachmittag;der Abend;die Nacht;der Montag;der Dienstag;der Mittwoch;der Donnerstag;der Freitag;der Samstag;der Sonntag;das Wochenende;der Termin;heute;morgen;gestern;jetzt;immer;oft;nie\nM|zwei;drei;vier;fünf;sechs;sieben;acht;neun;zehn;zwölf;zwanzig;dreißig;hundert\nM|die Wohnung;das Haus;das Zimmer;die Küche;das Bad;die Tür;das Fenster;der Schlüssel;das Bett;der Tisch;der Stuhl;der Schrank;das Sofa;die Lampe;die Miete;der Balkon;der Keller;die Toilette;die Treppe\nT|Du [fährst] nach Berlin.|fahren|You are going to Berlin.|3\nT|Er [fährt] mit dem Zug.|fahren|He is going by train.|3\nT|Was [isst] du zum Frühstück?|essen|What do you eat for breakfast?|3\nT|Anna [isst] gern Fisch.|essen|Anna likes eating fish.|3\nT|Du [liest] ein Buch.|lesen|You are reading a book.|3\nT|Maria [liest] die Zeitung.|lesen|Maria is reading the newspaper.|3\nT|[Siehst] du das Haus?|sehen|Do you see the house?|3\nT|Er [sieht] den Schlüssel nicht.|sehen|He doesn't see the key.|3\nT|Du [sprichst] gut Deutsch.|sprechen|You speak German well.|3\nT|Der Lehrer [spricht] langsam.|sprechen|The teacher speaks slowly.|3\nT|Du [nimmst] den Bus.|nehmen|You take the bus.|3\nT|Er [nimmt] ein Taxi.|nehmen|He takes a taxi.|3\nT|Das Kind [schläft] im Bett.|schlafen|The child is sleeping in the bed.|3\nT|[Schläfst] du gut?|schlafen|Do you sleep well?|3\nT|Lena [trifft] heute Tom.|treffen|Lena is meeting Tom today.|3\nT|Wann [triffst] du Anna?|treffen|When are you meeting Anna?|3\nT|Mein Vater [läuft] jeden Morgen.|laufen|My father runs every morning.|3\nT|Am Montag [fahren] wir nach Hamburg.|fahren|On Monday we are going to Hamburg.|4\nT|Heute [habe] ich viel Zeit.|haben|Today I have a lot of time.|4\nT|Morgen [arbeite] ich nicht.|arbeiten|Tomorrow I am not working.|4\nT|Am Abend [lese] ich ein Buch.|lesen|In the evening I read a book.|4\nT|Jetzt [kocht] Paul.|kochen|Now Paul is cooking.|4\nT|[Kommst] du morgen?|kommen|Are you coming tomorrow?|4\nT|Es ist [halb] neun.|8:30|It is half past eight.|26\nT|Es ist [Viertel] vor drei.|14:45|It is a quarter to three.|26\nT|Es ist Viertel [nach] zehn.|10:15|It is a quarter past ten.|26\nT|Es ist [halb] sieben.|6:30|It is half past six.|26\nT|Das kostet [vierundzwanzig] Euro.|24|That costs 24 euros.|26\nT|Mein Bruder ist [fünfunddreißig] Jahre alt.|35|My brother is 35 years old.|26\nT|Das Zimmer kostet [dreihundert] Euro.|300|The room costs 300 euros.|26\nT|Das Haus hat [dreizehn] Zimmer.|13|The house has 13 rooms.|26\nS|What are you reading? (du)|Was liest du?|3|Was;liest\nS|He speaks German.|Er spricht Deutsch.|3|spricht;Deutsch\nS|On Monday I am going to Berlin.|Am Montag fahre ich nach Berlin.;Ich fahre am Montag nach Berlin.|4|Montag;fahre;Berlin\nS|Today he is sleeping for a long time.|Heute schläft er lange.;Er schläft heute lange.|4|heute;schläft;lange\nS|Anna takes the bus.|Anna nimmt den Bus.|3|Anna;nimmt;Bus\nS|Do you see the door? (du)|Siehst du die Tür?|4|Siehst;Tür\nS|The flat has three rooms.|Die Wohnung hat drei Zimmer.|26|Wohnung;drei;Zimmer\nS|It is ten o'clock.|Es ist zehn Uhr.|26|zehn;Uhr\nS|It is half past nine.|Es ist halb zehn.;Es ist neun Uhr dreißig.|26|halb/dreißig;zehn/neun\nS|The appointment is on Wednesday.|Der Termin ist am Mittwoch.;Am Mittwoch ist der Termin.|4|Termin;Mittwoch\nS|Tomorrow we are staying at home.|Morgen bleiben wir zu Hause.;Wir bleiben morgen zu Hause.|4|morgen;bleiben;Hause\nS|Where is the child sleeping?|Wo schläft das Kind?|3|Wo;schläft;Kind\nS|At the weekend I sleep a lot.|Am Wochenende schlafe ich viel.;Ich schlafe am Wochenende viel.|4|Wochenende;schlafe\nS|The night is long.|Die Nacht ist lang.|1|Nacht;lang\nS|The rent costs eight hundred euros.|Die Miete kostet achthundert Euro.|26|Miete;kostet;achthundert\nS|He often reads in the evening.|Er liest oft am Abend.;Am Abend liest er oft.|4|liest;Abend\nS|We eat at noon.|Wir essen am Mittag.;Am Mittag essen wir.;Wir essen mittags.;Mittags essen wir.|4|essen;Mittag/mittags\nS|The wardrobe and the bed are new.|Der Schrank und das Bett sind neu.|1|Schrank;Bett;neu\n\n@a1-courses|A1|Eating and shopping|Saying what you want or don't want, asking a price, counting in the plural.\nF|5;6;7\nV|pres|trinken;geben;finden;mögen;bekommen;einkaufen;helfen;bringen;vergessen\nM|das Essen;das Frühstück;das Brot;das Brötchen;die Butter;der Käse;die Wurst;das Fleisch;der Fisch;das Ei;die Milch;das Gemüse;das Obst;der Apfel;die Banane;die Kartoffel;die Tomate;der Salat;der Reis;die Nudeln;das Salz;der Zucker;der Kuchen;das Wasser;der Saft;der Kaffee;der Tee;das Bier;der Wein;der Teller;die Tasse;das Glas;das Messer;die Gabel;der Löffel;kochen;lecker;Ich habe Hunger.;Ich habe Durst.\nM|der Supermarkt;die Bäckerei;die Apotheke;der Markt;das Geschäft;die Kasse;die Tüte;die Flasche;die Packung;das Kilo;der Preis;das Bargeld;die Karte;der Euro;kaufen;bezahlen;kosten;billig;teuer;geöffnet;geschlossen;Wie viel kostet das?\nT|Paul hat [kein] Auto.|nicht/kein|Paul doesn't have a car.|5\nT|Wir kaufen [keine] Butter.|nicht/kein|We are not buying any butter.|5\nT|Er trinkt [keinen] Kaffee.|nicht/kein|He doesn't drink coffee.|5\nT|Hier gibt es [keinen] Salat.|nicht/kein|There is no salad here.|5\nT|Das Brot ist [nicht] teuer.|nicht/kein|The bread is not expensive.|5\nT|Ich mag den Kuchen [nicht].|nicht/kein|I don't like the cake.|5\nT|Sie haben [keine] Kinder.|nicht/kein|They have no children.|5\nT|Der Supermarkt ist heute [nicht] geöffnet.|nicht/kein|The supermarket is not open today.|5\nT|Ich kaufe zwei [Äpfel].|der Apfel|I am buying two apples.|6\nT|Wir brauchen drei [Flaschen].|die Flasche|We need three bottles.|6\nT|Hier sind fünf [Brötchen].|das Brötchen|Here are five bread rolls.|6\nT|Die [Eier] sind frisch.|das Ei|The eggs are fresh.|6\nT|Ich möchte zwei [Würste].|die Wurst|I would like two sausages.|6\nT|Wir nehmen vier [Gläser].|das Glas|We are taking four glasses.|6\nT|Die [Bananen] kosten zwei Euro.|die Banane|The bananas cost two euros.|6\nT|Hier sind vier [Tassen].|die Tasse|Here are four cups.|6\nT|Die [Kartoffeln] sind billig.|die Kartoffel|The potatoes are cheap.|6\nT|Ich kaufe drei [Tomaten].|die Tomate|I am buying three tomatoes.|6\nT|In Köln gibt es viele [Supermärkte].|der Supermarkt|There are many supermarkets in Cologne.|6\nT|Wir nehmen [den] Salat.|der|We'll have the salad.|7\nT|Wir kaufen [einen] Kuchen.|ein|We are buying a cake.|7\nT|Hast du [den] Zucker?|der|Do you have the sugar?|7\nT|Anna isst [das] Brötchen.|das|Anna is eating the bread roll.|7\nT|Anna sucht [die] Apotheke.|die|Anna is looking for the pharmacy.|7\nT|Ich brauche [eine] Tüte.|ein|I need a bag.|7\nT|Wir suchen [einen] Markt.|ein|We are looking for a market.|7\nT|[Der] Wein ist gut.|der|The wine is good.|7\nT|Er kauft [einen] Apfel.|ein|He is buying an apple.|7\nT|Möchtest du [den] Käse?|der|Would you like the cheese?|7\nT|Ich finde [den] Preis gut.|der|I think the price is good.|7\nS|I don't have any bread.|Ich habe kein Brot.|5|habe;kein;Brot\nS|We don't have any water.|Wir haben kein Wasser.|5|haben;kein;Wasser\nS|The coffee is not hot.|Der Kaffee ist nicht heiß.;Der Kaffee ist nicht warm.|5|Kaffee;nicht;heiß/warm\nS|I drink tea.|Ich trinke Tee.|2|trinke;Tee\nS|He is buying a cake.|Er kauft einen Kuchen.|7|kauft;einen;Kuchen\nS|Do you eat meat? (du)|Isst du Fleisch?|3|Isst;Fleisch\nS|The apples are good.|Die Äpfel sind gut.;Die Äpfel sind lecker.|6|Äpfel;gut/lecker\nS|We are buying three bottles.|Wir kaufen drei Flaschen.|6|kaufen;drei;Flaschen\nS|Paul is looking for the supermarket.|Paul sucht den Supermarkt.|7|Paul;sucht;Supermarkt\nS|The pharmacy is closed.|Die Apotheke ist geschlossen.|7|Apotheke;geschlossen\nS|I like cheese.|Ich mag Käse.;Ich mag den Käse.|7|mag;Käse\nS|The bread costs two euros.|Das Brot kostet zwei Euro.|6|Brot;kostet;zwei\nS|He doesn't eat fish.|Er isst keinen Fisch.|5|isst;keinen;Fisch\nS|I can't find the key.|Ich finde den Schlüssel nicht.|5|finde;Schlüssel;nicht\nS|The children drink milk.|Die Kinder trinken Milch.|6|Kinder;trinken;Milch\nS|We'll have two coffees.|Wir nehmen zwei Kaffee.;Wir nehmen zwei Kaffees.|6|nehmen;zwei;Kaffee/Kaffees\nS|Paul is paying for the meal.|Paul bezahlt das Essen.|7|Paul;bezahlt;Essen\nS|The tomatoes are not expensive.|Die Tomaten sind nicht teuer.;Die Tomaten sind billig.|5|Tomaten;teuer/billig\n\n@a1-ville|A1|Getting around town|Taking public transport, asking the way, saying who you are talking to, counting up to a thousand.\nF|8;10\nV|pres|stehen;sitzen;liegen;fliegen;schwimmen;beginnen;gefallen;verstehen;werden\nM|der Bahnhof;der Zug;der Bus;die Straßenbahn;die U-Bahn;die S-Bahn;die Haltestelle;das Gleis;die Fahrkarte;der Fahrplan;die Verspätung;das Auto;das Fahrrad;der Flughafen;die Straße;die Ampel;die Kreuzung;die Ecke;der Platz;die Brücke;die Stadt;das Dorf;die Innenstadt;die Kirche;der Park;die Post;umsteigen;einsteigen;aussteigen;links;rechts;geradeaus;weit;in der Nähe;Wo ist die Haltestelle?;Wie komme ich zum Bahnhof?;hin und zurück;Nächster Halt;werden\nM|null;eins;elf;dreizehn;sechzehn;siebzehn;einundzwanzig;vierzig;fünfzig;sechzig;siebzig;achtzig;neunzig;tausend;die Million;die Zahl;die Hälfte;das Viertel;erste;zweite;dritte\nT|Ich helfe [dem] Kind.|das (Dativ)|I help the child.|8\nT|Wir danken [der] Freundin.|die (Dativ)|We thank the friend.|8\nT|Das Buch gehört [dem] Mann.|der (Dativ)|The book belongs to the man.|8\nT|Das Auto gehört [der] Frau.|die (Dativ)|The car belongs to the woman.|8\nT|Ich zeige [dem] Mädchen die Haltestelle.|das (Dativ)|I show the girl the stop.|8\nT|Anna gibt [der] Mutter das Geld.|die (Dativ)|Anna gives the mother the money.|8\nT|Paul bringt [dem] Vater einen Kaffee.|der (Dativ)|Paul brings the father a coffee.|8\nT|Wir geben [den] Eltern den Schlüssel.|die, Plural (Dativ)|We give the parents the key.|8\nT|Ich schenke [einem] Freund ein Buch.|ein (Dativ)|I give a friend a book.|8\nT|Lena hilft [einer] Nachbarin.|eine (Dativ)|Lena helps a neighbour.|8\nT|Tom zeigt [einem] Kind den Bahnhof.|ein (Dativ)|Tom shows a child the station.|8\nT|Die Stadt gefällt [dem] Bruder.|der (Dativ)|The brother likes the town.|8\nT|Der Platz gefällt [der] Tante.|die (Dativ)|The aunt likes the square.|8\nT|Wir antworten [dem] Lehrer.|der (Dativ)|We answer the teacher.|8\nT|Wir fahren [mit] der U-Bahn.|mit/nach/von|We take the underground.|10\nT|Der Zug fährt [nach] Berlin.|nach/zu/in|The train goes to Berlin.|10\nT|Tom geht [zum] Bahnhof.|zu + der Bahnhof|Tom walks to the station.|10\nT|Maria geht [zur] Post.|zu + die Post|Maria goes to the post office.|10\nT|Das Kind ist [im] Park.|in + der Park|The child is in the park.|10\nT|Wir gehen [ins] Kino.|in + das Kino|We are going to the cinema.|10\nT|Der Schlüssel liegt auf [dem] Tisch.|der Tisch (Wo?)|The key is on the table.|10\nT|Ich lege den Schlüssel auf [den] Tisch.|der Tisch (Wohin?)|I put the key on the table.|10\nT|Die Kirche steht neben [der] Brücke.|die Brücke (Wo?)|The church stands next to the bridge.|10\nT|Der Bus fährt über [die] Brücke.|die Brücke (Wohin?)|The bus goes over the bridge.|10\nT|Das Geschenk ist [für] den Vater.|für/mit/aus|The present is for the father.|10\nT|Er geht [ohne] den Hund in den Park.|ohne/mit/aus|He goes to the park without the dog.|10\nT|Wir gehen [durch] den Park.|durch/nach/aus|We walk through the park.|10\nT|Der Zug kommt [aus] Wien.|aus/zu/für|The train comes from Vienna.|10\nT|Anna wohnt [bei] der Oma.|bei/zu/nach|Anna lives at her grandmother's.|10\nT|Ich warte an [der] Ampel.|die Ampel (Wo?)|I am waiting at the traffic lights.|10\nT|Er arbeitet seit [einem] Monat in Köln.|ein Monat (Dativ)|He has been working in Cologne for a month.|10\nS|We are taking the train.|Wir fahren mit dem Zug.;Wir nehmen den Zug.|10|Wir;Zug\nS|Where is the bus going?|Wohin fährt der Bus?|10|Wohin;Bus\nS|The station is straight ahead.|Der Bahnhof ist geradeaus.|10|Bahnhof;geradeaus\nS|The post office is on the right.|Die Post ist rechts.|10|Post;rechts\nS|I am going to the post office.|Ich gehe zur Post.|10|zur;Post\nS|He is going to the station.|Er geht zum Bahnhof.;Er fährt zum Bahnhof.|10|zum;Bahnhof\nS|We are going to Vienna.|Wir fahren nach Wien.;Wir gehen nach Wien.;Wir fliegen nach Wien.|10|nach;Wien\nS|The train is late.|Der Zug hat Verspätung.|8|Zug;Verspätung\nS|I help the aunt.|Ich helfe der Tante.|8|helfe;der;Tante\nS|The bike belongs to Paul.|Das Fahrrad gehört Paul.|8|Fahrrad;gehört;Paul\nS|Anna likes the town. (gefallen)|Die Stadt gefällt Anna.;Anna gefällt die Stadt.|8|Stadt;gefällt;Anna\nS|Anna gives the child the key.|Anna gibt dem Kind den Schlüssel.|8|gibt;dem;Kind;Schlüssel\nS|The bus is in front of the church.|Der Bus steht vor der Kirche.;Der Bus ist vor der Kirche.|10|Bus;vor;Kirche\nS|He lives next to the park.|Er wohnt neben dem Park.|10|wohnt;neben;Park\nS|The children are in the park.|Die Kinder sind im Park.|10|Kinder;im;Park\nS|We are going into town.|Wir gehen in die Stadt.;Wir fahren in die Stadt.|10|in;die;Stadt\nS|The ticket costs a hundred and twenty euros.|Die Fahrkarte kostet hundertzwanzig Euro.;Die Fahrkarte kostet einhundertzwanzig Euro.|26|Fahrkarte;kostet;Euro\nS|The third street is on the right.|Die dritte Straße ist rechts.|26|dritte;Straße;rechts\nS|The child is sitting on the chair.|Das Kind sitzt auf dem Stuhl.|10|Kind;sitzt;auf;Stuhl\n\n@a1-restaurant|A1|At the restaurant|Ordering, paying, saying what you want to, can or must do, talking about people with pronouns.\nF|9;11\nV|pres|können;müssen;wollen;dürfen;sollen;empfehlen;bitten;tun;denken\nM|das Restaurant;das Café;die Kneipe;die Speisekarte;die Rechnung;das Trinkgeld;der Kellner;die Kellnerin;die Vorspeise;das Hauptgericht;die Nachspeise;die Suppe;das Getränk;bestellen;reservieren;vegetarisch;scharf;Die Karte, bitte.;Ich hätte gern einen Kaffee.;Die Rechnung, bitte.;Zusammen oder getrennt?;Stimmt so.;Ist hier noch frei?;Einen Tisch für zwei, bitte.;Was empfehlen Sie?\nM|das Mittagessen;das Abendessen;das Hähnchen;der Joghurt;die Zwiebel;der Pfeffer;der Topf;die Pfanne;die Metzgerei;die Drogerie;der Kassenbon;der Einkaufswagen;das Pfand;die Dose;das Gramm;das Angebot;der Cent;günstig;Kann ich mit Karte zahlen?;Brauchen Sie eine Tüte?;Ich schaue nur.\nM|Mir geht es gut, danke.;Gern geschehen.;Es tut mir leid.;doch;Können Sie das wiederholen?;Sprechen Sie bitte langsamer.;Ich heiße …;Ich komme aus Frankreich.;Wie sagt man das auf Deutsch?;Was bedeutet das?;Prost!;können;müssen;wollen;dürfen;sollen\nT|Ich besuche [ihn] morgen.|er (Akk.)|I am visiting him tomorrow.|9\nT|Kennst du [sie]? – Ja, das ist Anna.|sie (Akk.)|Do you know her? – Yes, that's Anna.|9\nT|Ich sehe [dich] morgen.|du (Akk.)|I'll see you tomorrow.|9\nT|Der Kellner bringt [uns] die Karte.|wir (Dativ)|The waiter brings us the menu.|9\nT|Kannst du [mir] das Salz geben?|ich (Dativ)|Can you give me the salt?|9\nT|Das Essen schmeckt [ihm] nicht.|er (Dativ)|He doesn't like the food.|9\nT|Wie geht es [dir]? – Gut, danke.|du (Dativ)|How are you? – Fine, thanks.|9\nT|Ich gebe [Ihnen] die Rechnung.|Sie (Dativ)|I'll give you the bill.|9\nT|Ich besuche [euch] am Sonntag.|ihr (Akk.)|I am visiting you on Sunday.|9\nT|[Mein] Kaffee ist kalt.|der Kaffee · mein|My coffee is cold.|9\nT|Hast du [meine] Tasse?|die Tasse · mein|Do you have my cup?|9\nT|Paul nimmt [meinen] Schlüssel.|der Schlüssel · mein|Paul takes my key.|9\nT|Anna bezahlt [ihren] Kaffee.|der Kaffee · ihr|Anna pays for her coffee.|9\nT|Paul trinkt [sein] Bier.|das Bier · sein|Paul drinks his beer.|9\nT|Wir essen bei [unseren] Eltern.|die Eltern · unser|We eat at our parents' house.|9\nT|Ist das [euer] Tisch?|der Tisch · euer|Is that your table?|9\nT|Ich [kann] heute nicht kommen.|können|I can't come today.|11\nT|[Kannst] du kochen?|können|Can you cook?|11\nT|Im Restaurant [darf] man nicht rauchen.|dürfen|You are not allowed to smoke in the restaurant.|11\nT|[Darf] ich hier sitzen?|dürfen|May I sit here?|11\nT|Du [musst] nicht bezahlen.|müssen|You don't have to pay.|11\nT|Wir [müssen] heute kochen.|müssen|We have to cook today.|11\nT|Er [will] Wein trinken.|wollen|He wants to drink wine.|11\nT|Was [wollt] ihr essen?|wollen|What do you want to eat?|11\nT|Der Arzt sagt, ich [soll] viel Wasser trinken.|sollen|The doctor says I should drink a lot of water.|11\nT|[Soll] ich den Tisch reservieren?|sollen|Shall I book the table?|11\nT|Ich [möchte] die Suppe.|möchten|I would like the soup.|11\nT|[Möchtest] du einen Tee?|möchten|Would you like a tea?|11\nT|Sie [können] hier bezahlen.|können|You can pay here.|11\nT|Ihr [dürft] das Essen mitnehmen.|dürfen|You are allowed to take the food with you.|11\nT|Die Kinder [wollen] Kuchen essen.|wollen|The children want to eat cake.|11\nT|Ich [muss] die Rechnung bezahlen.|müssen|I have to pay the bill.|11\nS|I would like a soup.|Ich möchte eine Suppe.;Ich hätte gern eine Suppe.|11|eine;Suppe\nS|I have to pay.|Ich muss bezahlen.;Ich muss zahlen.|11|muss;bezahlen/zahlen\nS|Can you come today? (du)|Kannst du heute kommen?|11|Kannst;heute;kommen\nS|What do you want to eat? (du)|Was willst du essen?;Was möchtest du essen?|11|willst/möchtest;essen\nS|Eating is not allowed here. (man)|Hier darf man nicht essen.;Man darf hier nicht essen.|11|darf;nicht;essen\nS|You don't have to wait. (du)|Du musst nicht warten.|11|musst;nicht;warten\nS|We want to book a table.|Wir wollen einen Tisch reservieren.;Wir möchten einen Tisch reservieren.|11|Tisch;reservieren\nS|He can't come.|Er kann nicht kommen.|11|kann;nicht;kommen\nS|I want to pay now.|Ich will jetzt bezahlen.;Ich möchte jetzt bezahlen.;Ich will jetzt zahlen.;Ich möchte jetzt zahlen.|11|jetzt;will/möchte;bezahlen/zahlen\nS|I'll give you the key. (Sie or ihr)|Ich gebe Ihnen den Schlüssel.;Ich gebe euch den Schlüssel.|9|gebe;den;Schlüssel\nS|He brings his sister a tea.|Er bringt seiner Schwester einen Tee.|9|bringt;seiner;Schwester;Tee\nS|I know him well.|Ich kenne ihn gut.|9|kenne;ihn;gut\nS|My mother doesn't eat meat.|Meine Mutter isst kein Fleisch.|9|Meine;Mutter;Fleisch\nS|It is our car.|Das ist unser Auto.;Es ist unser Auto.|9|unser;Auto\nS|Where is your brother? (du)|Wo ist dein Bruder?|9|Wo;dein;Bruder\nS|My car is at the station.|Mein Auto ist am Bahnhof.|9|Mein;Auto;Bahnhof\nS|Do you like the food? (du)|Schmeckt dir das Essen?|9|Schmeckt;dir;Essen\nS|The bill is for me.|Die Rechnung ist für mich.|9|Rechnung;für;mich\n\n@a2-maison|A2|Home and everyday life|Organising your day with separable verbs, giving instructions, talking about your home and your clothes.\nF|12;13\nV|pres|aufstehen;anfangen;anrufen;einsteigen;aussteigen;umsteigen;ankommen;mitkommen;fernsehen;abholen;aufmachen;zumachen\nM|das Schlafzimmer;das Wohnzimmer;der Flur;das Stockwerk;der Aufzug;der Kühlschrank;die Waschmaschine;die Heizung;der Müll;die Mülltonne;der Briefkasten;umziehen;mieten;putzen;lüften;gemütlich\nM|die Kleidung;die Hose;das Hemd;das T-Shirt;der Pullover;die Jacke;der Mantel;das Kleid;der Rock;der Schuh;die Socke;die Mütze;der Schal;der Regenschirm;die Tasche;die Größe;die Umkleidekabine;anziehen;anprobieren;passen;eng;bequem\nM|machen;sagen;fragen;antworten;verstehen;hören;öffnen;schließen;anfangen;aufhören;aufstehen;anrufen;zeigen;mitbringen;suchen;brauchen;lernen;warten\nT|Wir [stehen] früh auf.|aufstehen|We get up early.|12\nT|Paul steht jeden Tag um sechs [auf].|aufstehen|Paul gets up at six every day.|12\nT|Wann [fängt] der Kurs an?|anfangen|When does the course start?|12\nT|Der Unterricht fängt um neun [an].|anfangen|The lesson starts at nine.|12\nT|Ich [rufe] meine Mutter an.|anrufen|I am calling my mother.|12\nT|Wann rufst du mich [an]?|anrufen|When are you calling me?|12\nT|Wir [steigen] am Bahnhof ein.|einsteigen|We get on at the station.|12\nT|Hier [steigt] Maria aus.|aussteigen|Maria gets off here.|12\nT|Du [steigst] in Köln um.|umsteigen|You change in Cologne.|12\nT|Der Zug [kommt] um acht Uhr an.|ankommen|The train arrives at eight o'clock.|12\nT|[Kommst] du heute mit?|mitkommen|Are you coming along today?|12\nT|Wir [sehen] heute Abend fern.|fernsehen|We are watching TV tonight.|12\nT|Anna holt die Kinder [ab].|abholen|Anna picks up the children.|12\nT|Er [holt] mich am Flughafen ab.|abholen|He is picking me up at the airport.|12\nT|Mach das Fenster [zu]!|zumachen|Close the window!|12\nT|Wer [macht] die Tür auf?|aufmachen|Who opens the door?|12\nT|Wir [besuchen] heute die Oma.|besuchen|We are visiting grandma today.|12\nT|[Komm/Komme] bitte schnell!|kommen (du)|Come quickly, please!|13\nT|[Nimm] den Schlüssel!|nehmen (du)|Take the key!|13\nT|[Gib] mir bitte die Tasche!|geben (du)|Give me the bag, please!|13\nT|[Lies] das Buch!|lesen (du)|Read the book!|13\nT|[Fahr/Fahre] langsam!|fahren (du)|Drive slowly!|13\nT|[Warte] bitte hier!|warten (du)|Wait here, please!|13\nT|[Öffne] die Flasche!|öffnen (du)|Open the bottle!|13\nT|[Seid] bitte leise!|sein (ihr)|Be quiet, please!|13\nT|[Kommt] um acht!|kommen (ihr)|Come at eight!|13\nT|[Nehmen] Sie bitte Platz!|nehmen (Sie)|Please take a seat!|13\nT|[Warten] Sie hier!|warten (Sie)|Wait here!|13\nT|[Seien] Sie pünktlich!|sein (Sie)|Be on time!|13\nT|Steh bitte [auf]!|aufstehen (du)|Get up, please!|13\nT|[Ruf/Rufe] mich morgen an!|anrufen (du)|Call me tomorrow!|13\nS|I get up at seven o'clock.|Ich stehe um sieben Uhr auf.;Um sieben Uhr stehe ich auf.|12|stehe;sieben;auf\nS|The course starts at ten o'clock.|Der Kurs fängt um zehn Uhr an.;Der Kurs beginnt um zehn Uhr.;Der Unterricht fängt um zehn Uhr an.;Der Unterricht beginnt um zehn Uhr.|12|Kurs/Unterricht;zehn;fängt/beginnt\nS|Will you call me tomorrow? (du)|Rufst du mich morgen an?|12|Rufst;mich;an\nS|We get off here.|Wir steigen hier aus.|12|steigen;hier;aus\nS|You have to change in Cologne. (du)|Du musst in Köln umsteigen.|12|musst;Köln;umsteigen\nS|I am picking Anna up at the station.|Ich hole Anna am Bahnhof ab.;Ich hole Anna vom Bahnhof ab.|12|hole;Anna;ab\nS|We are watching TV this evening.|Heute Abend sehen wir fern.;Wir sehen heute Abend fern.|12|sehen;fern\nS|I would like to try on the jacket.|Ich möchte die Jacke anprobieren.|12|Jacke;anprobieren\nS|He puts on his jacket.|Er zieht seine Jacke an.|12|zieht;Jacke;an\nS|He is moving to Berlin.|Er zieht nach Berlin um.|12|zieht;Berlin;um\nS|The coat suits me.|Der Mantel passt mir gut.;Der Mantel steht mir gut.|8|Mantel;mir;gut\nS|Open the window! (du)|Mach das Fenster auf!;Öffne das Fenster!|13|Fenster;auf/Öffne\nS|Close the door, please! (du)|Mach bitte die Tür zu!;Mach die Tür bitte zu!;Schließ bitte die Tür!;Schließe bitte die Tür!;Schließ die Tür bitte!;Mach die Tür zu!|13|Tür;zu/Schließ/Schließe\nS|Speak more slowly, please. (du)|Sprich bitte langsamer.;Sprich langsamer, bitte.|13|Sprich;bitte;langsamer\nS|Help me, please! (du)|Hilf mir bitte!;Bitte hilf mir!|13|Hilf;mir;bitte\nS|Take your coat! (du)|Nimm deinen Mantel!|13|Nimm;deinen;Mantel\nS|Wait here, please. (Sie or ihr)|Warten Sie bitte hier.;Warten Sie hier, bitte.;Wartet bitte hier.;Wartet hier, bitte.|13|hier;bitte\nS|Stay at home! (du)|Bleib zu Hause!;Bleibe zu Hause!|13|zu;Hause\n\n@a2-raconter|A2|Talking about the past|Saying what you did in the perfect, using war, hatte and the modals in the preterite, talking about the weather and free time.\nF|14;15\nV|perf|tragen;rufen;verlieren;rennen;halten;ausgehen;abfahren;zurückkommen;mitnehmen\nV|prat|steigen;scheinen;gewinnen;singen\nM|der Vormittag;der Januar;der Februar;der März;der April;der Mai;der Juni;der Juli;der August;der September;der Oktober;der November;der Dezember;der Frühling;der Sommer;der Herbst;der Winter;der Feiertag;der Geburtstag;übermorgen;bald;später;manchmal;Wie spät ist es?;Es ist halb drei.\nM|das Wetter;die Sonne;der Regen;der Schnee;der Wind;die Wolke;das Gewitter;die Temperatur;sonnig;bewölkt;Es regnet.;Es ist kalt.;Es ist warm.;die Freizeit;das Hobby;der Sport;das Kino;der Film;das Buch;die Musik;das Konzert;das Museum;der Ausflug;die Reise;das Schwimmbad;der Verein;das Spiel;spazieren gehen;schwimmen;wandern;sich treffen;Hast du Lust?;wohnen;leben;verlieren;tragen\nT|Ich [habe] gestern viel gearbeitet.|haben/sein|I worked a lot yesterday.|14\nT|Wir [sind] nach Hamburg gefahren.|haben/sein|We went to Hamburg.|14\nT|Anna [ist] spät gekommen.|haben/sein|Anna came late.|14\nT|Er [hat] einen Apfel gegessen.|haben/sein|He ate an apple.|14\nT|Paul [ist] zu Hause geblieben.|haben/sein|Paul stayed at home.|14\nT|Gestern [ist] nichts passiert.|haben/sein|Nothing happened yesterday.|14\nT|Ich [bin] früh aufgestanden.|haben/sein|I got up early.|14\nT|Ich habe einen Film [gesehen].|sehen|I saw a film.|14\nT|Er hat ein Buch [gelesen].|lesen|He read a book.|14\nT|Wir haben Kaffee [getrunken].|trinken|We drank coffee.|14\nT|Du hast viel [geschlafen].|schlafen|You slept a lot.|14\nT|Sie hat den Brief [geschrieben].|schreiben|She wrote the letter.|14\nT|Wir haben Obst [gekauft].|kaufen|We bought fruit.|14\nT|Hast du die Miete [bezahlt]?|bezahlen|Did you pay the rent?|14\nT|Wir haben am Samstag [eingekauft].|einkaufen|We did the shopping on Saturday.|14\nT|Der Film hat um acht [angefangen].|anfangen|The film started at eight.|14\nT|Ich habe dich gestern [angerufen].|anrufen|I called you yesterday.|14\nT|Ich [war] gestern im Kino.|sein (Präteritum)|I was at the cinema yesterday.|15\nT|Wir [waren] am Wochenende in Wien.|sein (Präteritum)|We were in Vienna at the weekend.|15\nT|Wo [warst] du gestern?|sein (Präteritum)|Where were you yesterday?|15\nT|Das Wetter [war] schön.|sein (Präteritum)|The weather was nice.|15\nT|Ich [hatte] keine Lust.|haben (Präteritum)|I didn't feel like it.|15\nT|[Hattest] du Zeit?|haben (Präteritum)|Did you have time?|15\nT|Er [hatte] Fieber.|haben (Präteritum)|He had a temperature.|15\nT|Ich [konnte] nicht kommen.|können (Präteritum)|I couldn't come.|15\nT|Wir [mussten] lange warten.|müssen (Präteritum)|We had to wait a long time.|15\nT|Anna [wollte] ins Kino gehen.|wollen (Präteritum)|Anna wanted to go to the cinema.|15\nT|Früher [gab] es hier ein Kino.|geben (Präteritum)|There used to be a cinema here.|15\nT|Er [wurde] krank.|werden (Präteritum)|He fell ill.|15\nT|Die Kinder [durften] nicht fernsehen.|dürfen (Präteritum)|The children were not allowed to watch TV.|15\nS|Yesterday I worked at home.|Gestern habe ich zu Hause gearbeitet.;Ich habe gestern zu Hause gearbeitet.|14|habe;Hause;gearbeitet\nS|We went to the cinema.|Wir sind ins Kino gegangen.|14|sind;Kino;gegangen\nS|She read a book.|Sie hat ein Buch gelesen.|14|hat;Buch;gelesen\nS|He arrived yesterday.|Er ist gestern angekommen.;Gestern ist er angekommen.;Er ist gestern gekommen.;Gestern ist er gekommen.|14|gestern;angekommen/gekommen\nS|What did you eat? (du)|Was hast du gegessen?|14|Was;gegessen\nS|I forgot the key.|Ich habe den Schlüssel vergessen.|14|Schlüssel;vergessen\nS|We won the game.|Wir haben das Spiel gewonnen.|14|Spiel;gewonnen\nS|He lost his key.|Er hat seinen Schlüssel verloren.|14|seinen;Schlüssel;verloren\nS|The sun was shining.|Die Sonne hat geschienen.;Die Sonne schien.|14|Sonne;geschienen/schien\nS|The children sang.|Die Kinder haben gesungen.|14|Kinder;gesungen\nS|I went out with Anna.|Ich bin mit Anna ausgegangen.|14|bin;Anna;ausgegangen\nS|The bus left at eight o'clock.|Der Bus ist um acht Uhr abgefahren.;Der Bus fuhr um acht Uhr ab.|14|Bus;acht;abgefahren/ab\nS|He came back late.|Er ist spät zurückgekommen.;Er ist spät nach Hause gekommen.|14|ist;spät\nS|I was at home.|Ich war zu Hause.;Ich bin zu Hause gewesen.|15|Hause;war/gewesen\nS|Yesterday there was a concert.|Gestern gab es ein Konzert.;Es gab gestern ein Konzert.|15|gab;Konzert\nS|How was the weekend?|Wie war das Wochenende?|15|war;Wochenende\nS|I couldn't sleep.|Ich konnte nicht schlafen.|15|konnte;schlafen\nS|We had to wait.|Wir mussten warten.;Wir haben warten müssen.|15|warten;mussten/müssen\nS|She didn't have time.|Sie hatte keine Zeit.|15|hatte;keine;Zeit\n\n@a2-sante|A2|Health and comparisons|Talking about your body and the doctor, using reflexive verbs, comparing things and people.\nF|16;19\nV|pres|waschen;anziehen;umziehen;aussehen;kennenlernen;schneiden;fallen;treiben;sterben\nM|der Körper;der Kopf;das Auge;das Ohr;die Nase;der Mund;der Zahn;der Hals;der Arm;die Hand;der Finger;der Bauch;der Rücken;das Bein;der Fuß;das Herz;der Arzt;die Ärztin;die Praxis;das Krankenhaus;das Medikament;das Rezept;das Fieber;die Erkältung;der Husten;die Schmerzen;krank;gesund;müde;Ich habe Kopfschmerzen.;Mir ist schlecht.;Ich brauche einen Termin.;Gute Besserung!\nM|groß;klein;alt;neu;jung;gut;schlecht;schön;hässlich;lang;kurz;schnell;langsam;heiß;kalt;warm;leicht;schwer;einfach;schwierig;liegen;sitzen;stehen;früh;spät;nett;richtig;falsch\nT|Ich wasche [mich] jeden Morgen.|sich (ich)|I wash every morning.|16\nT|Ich putze [mir] die Zähne.|sich (ich, Dativ)|I brush my teeth.|16\nT|Beeil [dich]!|sich (du)|Hurry up!|16\nT|Er fühlt [sich] heute schlecht.|sich|He feels bad today.|16\nT|Wir treffen [uns] am Bahnhof.|sich (wir)|We are meeting at the station.|16\nT|Ihr müsst [euch] beeilen.|sich (ihr)|You have to hurry.|16\nT|Anna freut [sich] auf den Urlaub.|sich|Anna is looking forward to the holidays.|16\nT|Setzen Sie [sich] bitte!|sich (Sie)|Please sit down!|16\nT|Hast du [dir] die Hände gewaschen?|sich (du, Dativ)|Did you wash your hands?|16\nT|Ich kaufe [mir] ein Fahrrad.|sich (ich, Dativ)|I am buying myself a bike.|16\nT|Hast du [dich] erkältet?|sich (du)|Have you caught a cold?|16\nT|Ich habe [mich] erkältet.|sich (ich)|I have caught a cold.|16\nT|Kannst du [dir] den Termin merken?|sich (du, Dativ)|Can you remember the appointment?|16\nT|Er [fühlt] sich krank.|fühlen|He feels ill.|16\nT|Ich [freue] mich auf morgen.|freuen|I am looking forward to tomorrow.|16\nT|Das Kind [wäscht] sich die Hände.|waschen|The child washes its hands.|16\nT|Anna ist [jünger] als Paul.|jung|Anna is younger than Paul.|19\nT|Der Zug ist [schneller] als der Bus.|schnell|The train is faster than the bus.|19\nT|Das Fieber ist heute [höher] als gestern.|hoch|The temperature is higher today than yesterday.|19\nT|Heute geht es mir [besser].|gut|I am better today.|19\nT|Tee trinke ich [lieber] als Kaffee.|gern|I prefer tea to coffee.|19\nT|Mein Vater arbeitet [mehr] als ich.|viel|My father works more than I do.|19\nT|Die Wohnung ist [kleiner] als das Haus.|klein|The flat is smaller than the house.|19\nT|Berlin ist [größer] als Bonn.|groß|Berlin is bigger than Bonn.|19\nT|Das Medikament ist so teuer [wie] das andere.|als/wie|This medicine is as expensive as the other one.|19\nT|Meine Schwester ist größer [als] ich.|als/wie|My sister is taller than me.|19\nT|Ist das [nächste] Krankenhaus weit?|nah|Is the nearest hospital far?|19\nT|Der Arm tut am [meisten] weh.|viel|The arm hurts the most.|19\nT|Im Winter ist es am [kältesten].|kalt|It is coldest in winter.|19\nT|Am [liebsten] esse ich Fisch.|gern|I like eating fish best.|19\nT|Er ist der [beste] Arzt.|gut|He is the best doctor.|19\nT|Anna ist am [jüngsten].|jung|Anna is the youngest.|19\nS|I feel well today.|Ich fühle mich heute gut.;Heute fühle ich mich gut.|16|fühle;mich;gut\nS|We have to hurry.|Wir müssen uns beeilen.|16|müssen;uns;beeilen\nS|He is washing.|Er wäscht sich.|16|wäscht;sich\nS|We are meeting tomorrow.|Wir treffen uns morgen.;Wir sehen uns morgen.;Morgen treffen wir uns.;Morgen sehen wir uns.|16|uns;morgen\nS|Anna has caught a cold.|Anna hat sich erkältet.|16|Anna;sich;erkältet\nS|I am buying myself a jacket.|Ich kaufe mir eine Jacke.|16|kaufe;mir;Jacke\nS|I am looking forward to summer.|Ich freue mich auf den Sommer.|16|freue;mich;Sommer\nS|Do you have a headache? (du)|Hast du Kopfschmerzen?;Tut dir der Kopf weh?|6|Kopfschmerzen/Kopf\nS|My arm hurts.|Mein Arm tut weh.;Mein Arm tut mir weh.;Mir tut der Arm weh.|9|Arm;weh\nS|I have a temperature.|Ich habe Fieber.|6|habe;Fieber\nS|She is tired and ill.|Sie ist müde und krank.|1|müde;krank\nS|The doctor is younger than me.|Der Arzt ist jünger als ich.|19|Arzt;jünger;als\nS|The fever is higher today.|Das Fieber ist heute höher.;Heute ist das Fieber höher.;Das Fieber ist heute stärker.;Heute ist das Fieber stärker.|19|Fieber;heute;höher/stärker\nS|Anna speaks German better than Paul.|Anna spricht besser Deutsch als Paul.;Anna spricht Deutsch besser als Paul.|19|besser;Deutsch;als\nS|This medicine is cheaper.|Das Medikament ist billiger.;Das Medikament ist günstiger.;Dieses Medikament ist billiger.;Dieses Medikament ist günstiger.|19|Medikament;billiger/günstiger\nS|I prefer drinking water.|Ich trinke lieber Wasser.|19|trinke;lieber;Wasser\nS|Paul is as tall as Tom.|Paul ist so groß wie Tom.|19|so;groß;wie\nS|The train is the fastest.|Der Zug ist am schnellsten.;Der Zug ist der schnellste.|19|Zug;schnellsten/schnellste\nS|The nearest doctor is in Bonn.|Der nächste Arzt ist in Bonn.|19|nächste;Arzt;Bonn\n\n@a2-raisons|A2|Work, reasons and plans|Linking ideas, explaining why, describing with adjectives, talking about the future, asking politely.\nF|17;18;20\nV|pres|aufhören;aufräumen;einladen;ausfüllen;zuhören;unterschreiben;schließen;nennen;lassen;werfen;ziehen\nM|die Arbeit;der Job;der Beruf;die Firma;das Büro;der Chef;die Chefin;der Kollege;die Kollegin;der Urlaub;die Pause;der Feierabend;der Computer;das Handy;das Geld;die Adresse;gefallen;glauben;denken\nM|wer?;was?;wo?;wohin?;woher?;wann?;warum?;wie?;wie viel?;welcher?;und;oder;aber;weil;dass;wenn;also;auch;noch;schon;nur;sehr;ziemlich;vielleicht;zusammen;allein;hier;dort;alles;nichts;etwas;jemand;niemand;viel;wenig;genug\nT|Anna bleibt zu Hause, [weil] sie krank ist.|weil/wenn/dass|Anna is staying at home because she is ill.|17\nT|Ich glaube, [dass] er heute kommt.|weil/dass/ob|I think he is coming today.|17\nT|Ich komme nicht, [denn] ich muss arbeiten.|denn/weil/dass|I'm not coming because I have to work.|17\nT|Ich weiß nicht, [ob] er Zeit hat.|ob/dass/wenn|I don't know whether he has time.|17\nT|[Wenn] es regnet, bleiben wir zu Hause.|wenn/als/ob|If it rains, we stay at home.|17\nT|[Als] ich ein Kind war, wohnte ich in Köln.|wenn/als/ob|When I was a child, I lived in Cologne.|17\nT|Ich trinke nicht Kaffee, [sondern] Tee.|aber/sondern/und|I don't drink coffee, but tea.|17\nT|Es ist kalt, [trotzdem] gehen wir schwimmen.|deshalb/trotzdem/dann|It is cold, but we are going swimming anyway.|17\nT|Ich bin müde, [deshalb] gehe ich ins Bett.|deshalb/trotzdem/dann|I am tired, so I am going to bed.|17\nT|Ich weiß, dass du heute [kommst].|kommen|I know you are coming today.|17\nT|Wir essen, wenn Paul [ankommt].|ankommen|We will eat when Paul arrives.|17\nT|Ich lerne Deutsch, weil ich in Wien [arbeite].|arbeiten|I am learning German because I work in Vienna.|17\nT|Mein Bruder hat einen [guten] Job.|gut (der Job)|My brother has a good job.|18\nT|Wir haben ein [schönes] Haus.|schön (das Haus)|We have a beautiful house.|18\nT|Ich kaufe einen [neuen] Computer.|neu (der Computer)|I am buying a new computer.|18\nT|Der [alte] Chef ist nett.|alt (der Chef)|The old boss is nice.|18\nT|Ich nehme die [kleine] Tasche.|klein (die Tasche)|I'll take the small bag.|18\nT|Er arbeitet in einer [großen] Firma.|groß (die Firma)|He works for a big company.|18\nT|Das [neue] Büro ist schön.|neu (das Büro)|The new office is nice.|18\nT|Ich trinke [heißen] Kaffee.|heiß (der Kaffee)|I drink hot coffee.|18\nT|Ich möchte [frisches] Brot.|frisch (das Brot)|I would like fresh bread.|18\nT|Ich [werde] dir morgen schreiben.|werden|I will write to you tomorrow.|20\nT|Wir [werden] nächstes Jahr umziehen.|werden|We will move next year.|20\nT|Er [wird] bald kommen.|werden|He will come soon.|20\nT|[Könnten] Sie mir das zeigen?|können (Konjunktiv II)|Could you show me that?|20\nT|[Würden] Sie mir bitte helfen?|werden (Konjunktiv II)|Would you help me, please?|20\nT|Du [solltest] mehr schlafen.|sollen (Konjunktiv II)|You should sleep more.|20\nT|Ich [würde] gern schwimmen gehen.|werden (Konjunktiv II)|I would like to go swimming.|20\nT|Wir [hätten] gern einen Tisch.|haben (Konjunktiv II)|We would like a table.|20\nT|Das [wäre] sehr nett.|sein (Konjunktiv II)|That would be very kind.|20\nS|I am staying at home because I am tired.|Ich bleibe zu Hause, weil ich müde bin.;Ich bleibe zu Hause, denn ich bin müde.|17|bleibe;Hause;müde\nS|I think he is ill.|Ich glaube, dass er krank ist.;Ich glaube, er ist krank.|17|glaube;krank\nS|I don't know whether Anna is coming.|Ich weiß nicht, ob Anna kommt.|17|weiß;ob;Anna\nS|When I have time, I read.|Wenn ich Zeit habe, lese ich.;Ich lese, wenn ich Zeit habe.|17|wenn;Zeit;lese\nS|When I was a child, I lived in Berlin.|Als ich ein Kind war, habe ich in Berlin gewohnt.;Als ich ein Kind war, wohnte ich in Berlin.;Als ich Kind war, habe ich in Berlin gewohnt.;Als ich Kind war, wohnte ich in Berlin.|17|Als;Berlin\nS|It is raining, so I am taking the bus.|Es regnet, deshalb nehme ich den Bus.;Es regnet, deswegen nehme ich den Bus.;Es regnet, deshalb fahre ich mit dem Bus.;Es regnet, deswegen fahre ich mit dem Bus.|17|regnet;Bus\nS|I don't drink beer, but wine.|Ich trinke kein Bier, sondern Wein.;Ich trinke nicht Bier, sondern Wein.|17|Bier;sondern;Wein\nS|I am buying the green jumper.|Ich kaufe den grünen Pullover.|18|grünen;Pullover\nS|They live in a big city.|Sie wohnen in einer großen Stadt.;Sie leben in einer großen Stadt.|18|wohnen/leben;großen;Stadt\nS|He has a new car.|Er hat ein neues Auto.|18|neues;Auto\nS|We have a small kitchen.|Wir haben eine kleine Küche.|18|kleine;Küche\nS|We are looking for a cheap flat.|Wir suchen eine billige Wohnung.;Wir suchen eine günstige Wohnung.|18|suchen;Wohnung\nS|She works in a small company.|Sie arbeitet in einer kleinen Firma.|18|einer;kleinen;Firma\nS|I will visit you tomorrow. (du)|Ich werde dich morgen besuchen.;Ich besuche dich morgen.|20|dich;morgen;besuchen/besuche\nS|Could you open the window? (Sie or ihr)|Könnten Sie das Fenster öffnen?;Könnten Sie das Fenster aufmachen?;Könntet ihr das Fenster öffnen?;Könntet ihr das Fenster aufmachen?;Würden Sie das Fenster öffnen?;Würden Sie das Fenster aufmachen?|20|Fenster;öffnen/aufmachen\nS|You should work less. (du)|Du solltest weniger arbeiten.|20|solltest;weniger;arbeiten\nS|I would like a glass of water.|Ich hätte gern ein Glas Wasser.;Ich möchte ein Glas Wasser.|20|Glas;Wasser\nS|If I had time, I would come.|Wenn ich Zeit hätte, würde ich kommen.;Wenn ich Zeit hätte, käme ich.|20|Wenn;Zeit;hätte\n\n@b1-echanger|B1|Talking and getting along|React and talk about what matters using the right prepositions, describe people and things, and handle weak nouns.\nF|21;37\nV|pres|raten;leihen;riechen;lügen;vergleichen;entscheiden\nV|prat|streiten;schreien;beißen;klingen;frieren;genießen;leiden\nP|warten>auf;sich freuen>auf;sich freuen>über;denken>an;sich kümmern>um;sich interessieren>für;sich ärgern>über;fragen>nach;teilnehmen>an;Angst haben>vor;abhängen>von;sich gewöhnen>an;sich erinnern>an;träumen>von;sprechen>mit;sprechen>über;sich unterhalten>über;erzählen>von;bitten>um;antworten>auf\nM|voll;leer;wichtig;laut;leise;sauber;schmutzig;nah;freundlich;glücklich;traurig;froh;böse;fertig;frei;besetzt;kaputt;sicher\nM|sein;haben;mögen;gehen;kommen;sprechen;wissen;kennen;sehen;lesen;schreiben;essen;trinken;schlafen;geben\nT|Wir warten schon lange [auf] den Zug.|warten|We have been waiting for the train for a long time.|21\nT|Ich freue mich sehr [auf] die Ferien.|sich freuen (auf/über)|I am really looking forward to the holidays.|21\nT|Sie freut sich [über] die Blumen.|sich freuen (auf/über)|She is pleased with the flowers.|21\nT|Er denkt jeden Tag [an] seine Tochter.|denken|He thinks about his daughter every day.|21\nT|Meine Schwester kümmert sich [um] unsere Eltern.|sich kümmern|My sister takes care of our parents.|21\nT|Interessierst du dich [für] Musik?|sich interessieren|Are you interested in music?|21\nT|Mein Vater ärgert sich [über] die Nachbarn.|sich ärgern|My father is annoyed with the neighbours.|21\nT|Der Tourist fragt [nach] dem Bahnhof.|fragen|The tourist asks where the station is.|21\nT|Mein Bruder nimmt [an] einem Deutschkurs teil.|teilnehmen|My brother is taking part in a German course.|21\nT|Das Kind hat Angst [vor] dem Hund.|Angst haben|The child is afraid of the dog.|21\nT|Es hängt [von] dir ab.|abhängen|It depends on you.|21\nT|Hast du dich schon [an] die Kälte gewöhnt?|sich gewöhnen|Have you got used to the cold yet?|21\nT|Ich erinnere mich gut [an] meine Oma.|sich erinnern|I remember my grandma well.|21\nT|Er träumt [von] einem großen Haus.|träumen|He dreams of a big house.|21\nT|[Worauf] wartet ihr?|wo- + auf|What are you waiting for?|21\nT|[Woran] erinnerst du dich?|wo- + an|What do you remember?|21\nT|[Worüber] habt ihr gesprochen?|wo- + über|What did you talk about?|21\nT|[Wofür] interessiert sich Max?|wo- + für|What is Max interested in?|21\nT|Das Geschenk ist schön, ich freue mich [darüber].|da- + über|The present is lovely, I am pleased with it.|21\nT|Der Urlaub kommt bald, wir freuen uns schon [darauf].|da- + auf|The holidays are coming soon, we are already looking forward to them.|21\nT|Auf [wen] warten die Kinder?|auf (Person)|Who are the children waiting for?|21\nT|Ich sehe den [Kollegen] im Büro.|der Kollege|I see the colleague at the office.|37\nT|Wir sprechen mit dem [Studenten].|der Student|We are talking to the student.|37\nT|Morgen besuche ich meinen [Nachbarn].|der Nachbar|Tomorrow I am visiting my neighbour.|37\nT|Der Arzt hilft dem [Jungen].|der Junge|The doctor helps the boy.|37\nT|Der Kellner bringt dem [Kunden] die Rechnung.|der Kunde|The waiter brings the customer the bill.|37\nT|Ich habe [Herrn] Weber geschrieben.|der Herr|I wrote to Mr Weber.|37\nT|Der [Polizist] hat mir geholfen.|der Polizist|The policeman helped me.|37\nT|Ich kenne den [Polizisten] nicht.|der Polizist|I don't know the policeman.|37\nT|Hast du schon mit dem [Praktikanten] gesprochen?|der Praktikant|Have you already talked to the intern?|37\nT|Die [Studenten] wohnen in Köln.|der Student (Plural)|The students live in Cologne.|37\nT|Ich verstehe diesen [Menschen] nicht.|der Mensch|I don't understand this person.|37\nS|I am waiting for an answer from my colleague (woman).|Ich warte auf eine Antwort von meiner Kollegin.|21|warte;auf;Antwort;Kollegin\nS|We are looking forward to the summer.|Wir freuen uns auf den Sommer.|21|freuen;auf;Sommer\nS|I am pleased with your present. (du)|Ich freue mich über dein Geschenk.;Ich bin froh über dein Geschenk.|21|über;dein;Geschenk\nS|My brother often thinks about his work.|Mein Bruder denkt oft an seine Arbeit.;Mein Bruder denkt oft an seinen Job.|21|denkt;an;Arbeit/Job\nS|Who is taking care of grandmother?|Wer kümmert sich um die Oma?;Wer kümmert sich um die Großmutter?;Wer kümmert sich um Oma?|21|kümmert;um;Oma/Großmutter\nS|Anna is very interested in sport.|Anna interessiert sich sehr für Sport.;Anna interessiert sich sehr für den Sport.|21|interessiert;für;Sport\nS|I remember this town.|Ich erinnere mich an diese Stadt.|21|erinnere;an;Stadt\nS|I have not got used to the noise yet.|Ich habe mich noch nicht an den Lärm gewöhnt.|21|an;Lärm;gewöhnt\nS|Are you afraid of dogs? (du)|Hast du Angst vor Hunden?;Hast du Angst vor den Hunden?|21|Angst;vor;Hunden\nS|It depends on the price.|Das hängt vom Preis ab.;Das hängt von dem Preis ab.;Es hängt vom Preis ab.;Es hängt von dem Preis ab.|21|hängt;Preis;ab\nS|What do you dream of? (du)|Wovon träumst du?|21|Wovon;träumst\nS|I think about it every day.|Ich denke jeden Tag daran.;Jeden Tag denke ich daran.|21|denke;daran\nS|We talked about it yesterday.|Wir haben gestern darüber gesprochen.;Gestern haben wir darüber gesprochen.|21|haben;darüber;gesprochen\nS|She is waiting for her neighbour (man).|Sie wartet auf ihren Nachbarn.|37|wartet;auf;Nachbarn\nS|I know this customer (man).|Ich kenne diesen Kunden.|37|kenne;diesen;Kunden\nS|I often help the boy.|Ich helfe dem Jungen oft.;Ich helfe oft dem Jungen.|37|helfe;dem;Jungen\nS|We are talking to the students.|Wir sprechen mit den Studenten.|37|mit;den;Studenten\nS|Do you know Mr Schmidt? (du)|Kennst du Herrn Schmidt?|37|Kennst;Herrn;Schmidt\nS|The doctor (woman) questions the patient (man).|Die Ärztin fragt den Patienten.;Die Ärztin befragt den Patienten.|37|Ärztin;den;Patienten\n\n@b1-travail|B1|Applying and working|Look for a job, explain a goal, and say who you mean with relative clauses and the infinitive with zu.\nF|22;23\nV|pres|laden;messen;wachsen;schlagen;gelten;erhalten;verlassen;abgeben;vorschlagen;teilnehmen\nV|prat|bieten;vorbereiten;feststellen\nP|sich bewerben>um;sich bewerben>bei;sich vorbereiten>auf;sich konzentrieren>auf;sich beschäftigen>mit;arbeiten>an;anfangen>mit;aufhören>mit;helfen>bei;telefonieren>mit;einladen>zu;sich verabreden>mit;sich treffen>mit;sich entscheiden>für;sich bedanken>für;zufrieden>mit;zuständig>für;stolz>auf;fertig>mit;die Lust>auf\nM|die Stelle;das Gehalt;der Vertrag;die Bewerbung;der Lebenslauf;das Vorstellungsgespräch;die Besprechung;die Überstunde;die E-Mail;die Aufgabe;arbeiten;verdienen;sich bewerben;kündigen;pünktlich;krankgeschrieben;Schönen Feierabend!\nM|die Notaufnahme;die Krankenkasse;die Versichertenkarte;die Krankmeldung;der Führerschein;fahren;einkaufen;helfen;nehmen;bringen;finden;bleiben;vergessen;laufen\nT|Die Chefin, [die] heute kommt, ist sehr nett.|die/der/den|The boss (woman) who is coming today is very nice.|22\nT|Der Kollege, [der] neben mir sitzt, heißt Jan.|der/den/dem|The colleague (man) who sits next to me is called Jan.|22\nT|Das Buch, [das] ich lese, ist sehr gut.|das/dem/die|The book I am reading is very good.|22\nT|Der Vertrag, [den] ich unterschreibe, ist neu.|der/den/dem|The contract I am signing is new.|22\nT|Die Stelle, [die] ich suche, ist in Hamburg.|die/der/den|The job I am looking for is in Hamburg.|22\nT|Der Mann, [dem] ich helfe, kommt aus Polen.|der/den/dem|The man I am helping comes from Poland.|22\nT|Die Kollegin, [der] ich die E-Mail schicke, arbeitet in Bonn.|die/der/den|The colleague (woman) I am sending the e-mail to works in Bonn.|22\nT|Das Kind, [dem] wir helfen, ist neun Jahre alt.|das/den/dem|The child we are helping is nine years old.|22\nT|Die Leute, [die] hier arbeiten, sind freundlich.|der/die/denen|The people who work here are friendly.|22\nT|Die Kunden, [denen] ich schreibe, wohnen in Wien.|die/denen/der|The customers I am writing to live in Vienna.|22\nT|Die Firma, in [der] ich arbeite, ist klein.|die/der/das|The company I work for is small.|22\nT|Der Kollege, mit [dem] ich spreche, ist mein Freund.|der/den/dem|The colleague (man) I am talking to is my friend.|22\nT|Die Besprechung, auf [die] wir warten, beginnt um zehn.|die/der/den|The meeting we are waiting for starts at ten.|22\nT|Das ist alles, [was] ich habe.|was/das/die|That is all I have.|22\nT|Der Mann, [dessen] Auto dort steht, ist mein Chef.|dessen/deren/dem|The man whose car is over there is my boss.|22\nT|Die Frau, [deren] Sohn hier arbeitet, heißt Maria.|dessen/deren/der|The woman whose son works here is called Maria.|22\nT|Der Kollege, der heute nicht [kommt], ist krank.|kommen|The colleague (man) who is not coming today is ill.|22\nT|Es ist wichtig, pünktlich [zu] sein.|zu/um/ohne|It is important to be on time.|23\nT|Hast du Zeit, mir [zu] helfen?|zu/um/ohne|Do you have time to help me?|23\nT|Es macht Spaß, im Team [zu] arbeiten.|zu/um/ohne|It is fun to work in a team.|23\nT|Ich versuche, heute früher [anzukommen].|ankommen|I am trying to arrive earlier today.|23\nT|Hast du Lust, mit mir [einzukaufen]?|einkaufen|Do you feel like going shopping with me?|23\nT|Er hat angefangen, die Küche [aufzuräumen].|aufräumen|He has started tidying the kitchen.|23\nT|Ich habe keine Zeit, dich [anzurufen].|anrufen|I have no time to call you.|23\nT|Wir planen, nächstes Jahr [umzuziehen].|umziehen|We are planning to move next year.|23\nT|Ich lerne Deutsch, [um] hier zu arbeiten.|um/damit/ohne|I am learning German in order to work here.|23\nT|Er arbeitet viel, [um] mehr Geld zu verdienen.|um/damit/ohne|He works a lot in order to earn more money.|23\nT|Der Chef erklärt alles, [damit] wir es verstehen.|um/damit/ohne|The boss explains everything so that we understand it.|23\nT|Er ist gegangen, [ohne] die Rechnung zu bezahlen.|um/ohne/statt|He left without paying the bill.|23\nT|[Statt] zu lernen, spielt er Fußball.|um/ohne/statt|Instead of studying, he plays football.|23\nT|Ich kann heute nicht lange [bleiben].|bleiben|I can't stay long today.|23\nT|Ich gehe jeden Tag [schwimmen].|schwimmen|I go swimming every day.|23\nS|The man who works here is my colleague.|Der Mann, der hier arbeitet, ist mein Kollege.|22|der;arbeitet;Kollege\nS|The application I wrote is good.|Die Bewerbung, die ich geschrieben habe, ist gut.|22|Bewerbung;die;geschrieben\nS|The contract I am reading is long.|Der Vertrag, den ich lese, ist lang.|22|Vertrag;den;lese\nS|The colleague (woman) I am talking to is nice.|Die Kollegin, mit der ich spreche, ist nett.;Die Kollegin, mit der ich spreche, ist freundlich.|22|Kollegin;mit;der;spreche\nS|The people I help are nice.|Die Leute, denen ich helfe, sind nett.;Die Leute, denen ich helfe, sind freundlich.|22|Leute;denen;helfe\nS|This is the town where I live.|Das ist die Stadt, in der ich wohne.;Das ist die Stadt, wo ich wohne.|22|Stadt;wohne\nS|The company I work for is in Berlin.|Die Firma, in der ich arbeite, ist in Berlin.;Die Firma, bei der ich arbeite, ist in Berlin.|22|Firma;der;arbeite\nS|The colleague (man) whose car is old is called Jan.|Der Kollege, dessen Auto alt ist, heißt Jan.|22|Kollege;dessen;Auto\nS|That is all I want.|Das ist alles, was ich möchte.;Das ist alles, was ich will.|22|alles;was\nS|It is important to speak German.|Es ist wichtig, Deutsch zu sprechen.|23|wichtig;zu;sprechen\nS|I forgot to send the e-mail.|Ich habe vergessen, die E-Mail zu schicken.;Ich habe vergessen, die E-Mail zu senden.|23|vergessen;E-Mail;zu\nS|Do you feel like going shopping? (du)|Hast du Lust, einzukaufen?|23|Lust;einzukaufen\nS|I work in order to earn money.|Ich arbeite, um Geld zu verdienen.|23|um;Geld;verdienen\nS|He left without paying.|Er ist gegangen, ohne zu bezahlen.;Er ist gegangen, ohne zu zahlen.;Er ging, ohne zu bezahlen.;Er ging, ohne zu zahlen.|23|ohne;zu\nS|Instead of working, he is sleeping.|Statt zu arbeiten, schläft er.;Anstatt zu arbeiten, schläft er.;Er schläft, statt zu arbeiten.;Er schläft, anstatt zu arbeiten.|23|arbeiten;schläft\nS|I am calling you so that you come. (du)|Ich rufe dich an, damit du kommst.|23|rufe;damit;kommst\nS|I am trying to find a job.|Ich versuche, eine Stelle zu finden.|23|versuche;Stelle;finden\nS|He has started tidying the flat.|Er hat angefangen, die Wohnung aufzuräumen.|23|angefangen;Wohnung;aufzuräumen\nS|We have no time to eat.|Wir haben keine Zeit zu essen.;Wir haben keine Zeit zum Essen.|23|keine;Zeit;essen\n\n@b1-demarches|B1|Paperwork and letters|Understand official letters with the passive and the genitive, rent a flat, and manage your bank and your papers.\nF|24;25\nV|perf|stehlen;brechen;verbieten;brennen;hängen;wiegen;braten;gießen;fließen;springen;verschwinden;reiten;fangen\nP|sich anmelden>für;sich informieren>über;sich erkundigen>nach;sich beschweren>über;sich beschweren>bei;sich entschuldigen>für;sich entschuldigen>bei;sich wenden>an;sich verlassen>auf;achten>auf;aufpassen>auf;ausgeben>für;bestehen>aus;suchen>nach;gehören>zu;die Frage>nach;die Antwort>auf;der Grund>für;die Einladung>zu;die Lösung>für\nM|die Nebenkosten;der Vermieter;der Mieter;die Kaution;der Mietvertrag;das Amt;das Bürgeramt;die Anmeldung;die Behörde;das Formular;der Antrag;der Ausweis;der Reisepass;die Unterschrift;die Staatsangehörigkeit;der Wohnsitz;die Steuer\nM|die Steuernummer;die Versicherung;die Bank;das Konto;die Überweisung;der Geldautomat;der Brief;das Paket;die Frist;die Gebühr;der Rundfunkbeitrag;ausfüllen;unterschreiben;sich anmelden;beantragen;überweisen\nT|Das Paket [wird] heute gebracht.|werden|The parcel is being brought today.|24\nT|Die Briefe [werden] am Montag geschickt.|werden|The letters are being sent on Monday.|24\nT|Im Büro [wird] nicht geraucht.|werden|There is no smoking in the office.|24\nT|Das Formular wird vom Amt [geprüft].|prüfen|The form is checked by the office.|24\nT|Der Vertrag wird heute [unterschrieben].|unterschreiben|The contract is being signed today.|24\nT|Das Konto [wurde] gestern geschlossen.|werden (Präteritum)|The account was closed yesterday.|24\nT|Die Kaution [wurde] schon bezahlt.|werden (Präteritum)|The deposit has already been paid.|24\nT|Das Haus wurde 1950 [gebaut].|bauen|The house was built in 1950.|24\nT|Der Antrag [ist] abgelehnt worden.|sein (Perfekt Passiv)|The application has been refused.|24\nT|Die Rechnung ist schon bezahlt [worden].|werden (Perfekt Passiv)|The bill has already been paid.|24\nT|Das Paket ist gestern abgeholt [worden].|werden (Perfekt Passiv)|The parcel was collected yesterday.|24\nT|Die Gebühr [muss] pünktlich bezahlt werden.|müssen|The fee must be paid on time.|24\nT|Das Formular muss heute ausgefüllt [werden].|werden|The form must be filled in today.|24\nT|Der Ausweis kann hier beantragt [werden].|werden|The identity card can be applied for here.|24\nT|Der Brief wird [von] der Chefin unterschrieben.|von/mit/durch|The letter is signed by the boss (woman).|24\nT|Das Bürgeramt [ist] am Samstag geschlossen.|sein/werden|The citizens' office is closed on Saturdays.|24\nT|Das Bürgeramt [wird] um 16 Uhr geschlossen.|sein/werden|The citizens' office closes at 4 p.m.|24\nT|Das ist die Adresse [des] Vermieters.|der/des/dem|That is the landlord's address.|25\nT|Der Name [der] Bank ist lang.|die/der/den|The name of the bank is long.|25\nT|Die Unterschrift [des] Mieters fehlt.|der/des/dem|The tenant's signature is missing.|25\nT|Die Adresse [der] Eltern ist neu.|die/der/den|The parents' address is new.|25\nT|Das Ende [des] Vertrags ist im Mai.|der/des/dem|The end of the contract is in May.|25\nT|Der Preis [eines] Autos ist hoch.|ein/eines/einem|The price of a car is high.|25\nT|Die Kosten [meiner] Wohnung sind hoch.|meine/meiner/meinem|The costs of my flat are high.|25\nT|Das ist das Büro [meines] Chefs.|mein/meines/meinem|That is my boss's office.|25\nT|Das ist der Vertrag des [Kollegen].|der Kollege|That is the colleague's contract.|25\nT|Das ist [Annas] Konto.|Anna|That is Anna's account.|25\nT|[Wegen] des Streiks kommt die Post später.|wegen/trotz/während|Because of the strike, the post is coming later.|25\nT|[Trotz] der Kälte gehen wir spazieren.|wegen/trotz/während|Despite the cold, we are going for a walk.|25\nT|[Während] des Urlaubs arbeite ich nicht.|wegen/trotz/während|During the holidays, I don't work.|25\nT|Das Büro ist außerhalb [der] Stadt.|der/die/den|The office is outside the town.|25\nT|Statt [einer] E-Mail schreibe ich einen Brief.|eine/einer/einem|Instead of an e-mail, I am writing a letter.|25\nS|The letter is being sent today.|Der Brief wird heute geschickt.;Heute wird der Brief geschickt.;Der Brief wird heute verschickt.;Heute wird der Brief verschickt.|24|Brief;wird\nS|The form is signed by the tenant (man).|Das Formular wird vom Mieter unterschrieben.;Das Formular wird von dem Mieter unterschrieben.|24|Formular;Mieter;unterschrieben;wird\nS|The bank is closed today.|Die Bank ist heute geschlossen.;Heute ist die Bank geschlossen.|24|Bank;ist;geschlossen\nS|The parcel was delivered yesterday.|Das Paket wurde gestern geliefert.;Das Paket ist gestern geliefert worden.;Gestern wurde das Paket geliefert.;Gestern ist das Paket geliefert worden.|24|Paket;geliefert\nS|The rent has been paid.|Die Miete wurde bezahlt.;Die Miete ist bezahlt worden.|24|Miete;bezahlt\nS|The form must be filled in.|Das Formular muss ausgefüllt werden.|24|Formular;muss;ausgefüllt;werden\nS|The contract can be signed tomorrow.|Der Vertrag kann morgen unterschrieben werden.;Morgen kann der Vertrag unterschrieben werden.|24|Vertrag;kann;unterschrieben;werden\nS|My passport has been stolen.|Mein Reisepass wurde gestohlen.;Mein Reisepass ist gestohlen worden.|24|Reisepass;gestohlen\nS|French is spoken here.|Hier wird Französisch gesprochen.;Hier spricht man Französisch.;Man spricht hier Französisch.|24|hier;Französisch\nS|My application has been refused.|Mein Antrag wurde abgelehnt.;Mein Antrag ist abgelehnt worden.|24|Antrag;abgelehnt\nS|That is my landlord's car.|Das ist das Auto meines Vermieters.;Das ist das Auto von meinem Vermieter.|25|Auto;Vermieters/Vermieter\nS|The date of the contract is wrong.|Das Datum des Vertrags ist falsch.;Das Datum des Vertrages ist falsch.;Das Datum vom Vertrag ist falsch.|25|Datum;falsch\nS|Here is the address of the bank.|Hier ist die Adresse der Bank.;Das ist die Adresse der Bank.;Hier ist die Adresse von der Bank.;Das ist die Adresse von der Bank.|25|Adresse;Bank\nS|The service charges of the flat are high.|Die Nebenkosten der Wohnung sind hoch.;Die Nebenkosten von der Wohnung sind hoch.|25|Nebenkosten;Wohnung;hoch\nS|Because of the rain, I am staying at home.|Wegen des Regens bleibe ich zu Hause.;Wegen dem Regen bleibe ich zu Hause.;Ich bleibe wegen des Regens zu Hause.;Ich bleibe wegen dem Regen zu Hause.|25|wegen;Hause\nS|Despite the rain, I am going to the bank.|Trotz des Regens gehe ich zur Bank.;Trotz dem Regen gehe ich zur Bank.;Ich gehe trotz des Regens zur Bank.;Ich gehe trotz dem Regen zur Bank.|25|trotz;Bank\nS|During the holidays, the bank is closed.|Während der Ferien ist die Bank geschlossen.;In den Ferien ist die Bank geschlossen.|25|Ferien;Bank;geschlossen\nS|That is Lena's passport.|Das ist Lenas Reisepass.;Das ist der Reisepass von Lena.|25|Reisepass;Lenas/Lena\n", "es": "// Unités du programme, dans l'ordre. L'identifiant d'une unité reste stable : la progression y est attachée.\n// @id|niveau|titre|description\n// F|fiches ; V|temps|verbes irréguliers (pres, prat ou perf) ; P|mots à préposition (mot>préposition) ; M|mots du vocabulaire\n// T|phrase à trous réservée à l'examen, réponse entre crochets (a/b si plusieurs)|indice|traduction|fiche\n// S|phrase à traduire vers l'allemand|versions acceptées séparées par ;|fiche|mots-clés séparés par ; (a/b si plusieurs formes ; chacun présent dans chaque version acceptée)\n// Ces phrases sont réservées à l'examen : ni les fiches, ni les listes, ni les exercices, ni les gabarits des Déclinaisons ne les montrent, build.py le vérifie.\n// N|mots qui gardent leur majuscule en tête de phrase sans être un nom du vocabulaire (prénoms…)\n\nN|Anna;Lena;Maria;Max;Paul;Tom;Entschuldigung\n\n@a1-presenter|A1|Presentarse|Saludar, decir quién eres, hablar de tu familia, hacer preguntas sencillas.\nF|1;2;27\nV|pres|sein;haben;heißen;kommen;gehen;wissen;kennen;schreiben;bleiben\nM|Hallo!;Guten Morgen!;Guten Tag!;Guten Abend!;Gute Nacht!;Tschüss!;Auf Wiedersehen!;Bis später!;Bis morgen!;Danke schön!;Bitte schön!;Entschuldigung!;ja;nein;bitte;Freut mich!;Alles klar!;Kein Problem.;Ich verstehe nicht.;Wie heißen Sie?;Woher kommen Sie?;Wie geht's?;Viel Glück!;Herzlich willkommen!;Guten Appetit!;Schönes Wochenende!\nM|die Familie;die Eltern;die Mutter;der Vater;das Kind;der Sohn;die Tochter;der Bruder;die Schwester;die Geschwister;die Großeltern;die Oma;der Opa;der Onkel;die Tante;der Mann;die Frau;der Freund;die Freundin;der Nachbar;die Nachbarin;das Baby;der Junge;das Mädchen;die Leute;der Hund;die Katze;verheiratet;ledig;geschieden;heiraten;besuchen\nT|[Die] Mutter heißt Julia.|der/die/das|La madre se llama Julia.|1\nT|[Das] Kind ist zehn Jahre alt.|der/die/das|El niño tiene diez años.|1\nT|[Der] Bruder wohnt in Hamburg.|der/die/das|El hermano vive en Hamburgo.|1\nT|Wo wartet [die] Familie?|der/die/das|¿Dónde espera la familia?|1\nT|Da kommt [das] Mädchen.|der/die/das|Ahí viene la chica.|1\nT|Hier schläft [der] Hund.|der/die/das|El perro duerme aquí.|1\nT|Das ist [die] Katze von Anna.|der/die/das|Ese es el gato de Anna.|1\nT|Wo wohnt [die] Tante?|der/die/das|¿Dónde vive la tía?|1\nT|[Der] Junge ist neun.|der/die/das|El chico tiene nueve años.|1\nT|Ich [bin] Student.|sein|Soy estudiante.|2\nT|Du [bist] sehr nett.|sein|Eres muy amable.|2\nT|Wir [sind] aus Frankreich.|sein|Somos de Francia.|2\nT|Ihr [seid] heute hier.|sein|Hoy estáis aquí.|2\nT|Ich [habe] zwei Kinder.|haben|Tengo dos hijos.|2\nT|Er [hat] eine Schwester.|haben|Tiene una hermana.|2\nT|[Hast] du Geschwister?|haben|¿Tienes hermanos?|2\nT|Wir [haben] einen Hund.|haben|Tenemos un perro.|2\nT|Ich [heiße] Paul.|heißen|Me llamo Paul.|2\nT|Wie [heißt] deine Mutter?|heißen|¿Cómo se llama tu madre?|2\nT|Du [kommst] aus Italien.|kommen|Vienes de Italia.|2\nT|Maria [kommt] aus Polen.|kommen|María viene de Polonia.|2\nT|Wir [wohnen] in Köln.|wohnen|Vivimos en Colonia.|2\nT|Er [arbeitet] in Berlin.|arbeiten|Trabaja en Berlín.|2\nT|Du [arbeitest] viel.|arbeiten|Trabajas mucho.|2\nT|[Wo] wohnt ihr? – In Bonn.|W-Frage|¿Dónde vivís? – En Bonn.|27\nT|[Woher] kommst du? – Aus Spanien.|W-Frage|¿De dónde vienes? – De España.|27\nT|[Wer] ist das? – Das ist mein Vater.|W-Frage|¿Quién es? – Es mi padre.|27\nT|[Wie] heißt deine Schwester? – Lena.|W-Frage|¿Cómo se llama tu hermana? – Lena.|27\nT|[Was] machst du? – Ich lerne Deutsch.|W-Frage|¿Qué haces? – Aprendo alemán.|27\nT|[Wann] kommst du? – Morgen.|W-Frage|¿Cuándo vienes? – Mañana.|27\nT|[Wohin] gehst du? – Nach Hause.|W-Frage|¿Adónde vas? – A casa.|27\nS|Me llamo Anna.|Ich heiße Anna.;Mein Name ist Anna.|2|heiße/Name;Anna\nS|¿Cómo se llama el perro?|Wie heißt der Hund?|27|Wie;heißt;Hund\nS|¿De dónde viene María?|Woher kommt Maria?|27|Woher;kommt;Maria\nS|Vengo de Alemania.|Ich komme aus Deutschland.|2|komme;aus;Deutschland\nS|Vivimos en Berlín.|Wir wohnen in Berlin.|2|Wir;wohnen;Berlin\nS|Tengo una hermana.|Ich habe eine Schwester.|2|habe;Schwester\nS|El padre está aquí.|Der Vater ist hier.|1|Vater;hier\nS|La madre trabaja en Múnich.|Die Mutter arbeitet in München.|2|Mutter;arbeitet;München\nS|El niño se llama Max.|Das Kind heißt Max.|1|Kind;heißt;Max\nS|¿Dónde vive el vecino?|Wo wohnt der Nachbar?|27|Wo;wohnt;Nachbar\nS|¿Quién es Anna?|Wer ist Anna?|27|Wer;Anna\nS|El vecino viene de Polonia.|Der Nachbar kommt aus Polen.|2|Nachbar;kommt;Polen\nS|La vecina está casada.|Die Nachbarin ist verheiratet.|1|Nachbarin;verheiratet\nS|Tenemos dos hijos.|Wir haben zwei Kinder.|2|haben;zwei;Kinder\nS|¿Tienes una hija?|Hast du eine Tochter?|2|Hast;Tochter\nS|La gente es muy amable.|Die Leute sind sehr nett.|2|Leute;nett\nS|¿Qué haces?|Was machst du?|27|Was;machst\nS|¿Dónde vive Anna?|Wo wohnt Anna?|27|Wo;wohnt;Anna\n\n@a1-journee|A1|Mi día, mi casa|Contar tu día, decir la hora, contar, describir tu casa.\nF|3;4;26\nV|pres|fahren;essen;lesen;sehen;sprechen;nehmen;schlafen;treffen;laufen\nM|der Tag;die Woche;der Monat;das Jahr;die Stunde;die Minute;die Uhr;der Morgen;der Mittag;der Nachmittag;der Abend;die Nacht;der Montag;der Dienstag;der Mittwoch;der Donnerstag;der Freitag;der Samstag;der Sonntag;das Wochenende;der Termin;heute;morgen;gestern;jetzt;immer;oft;nie\nM|zwei;drei;vier;fünf;sechs;sieben;acht;neun;zehn;zwölf;zwanzig;dreißig;hundert\nM|die Wohnung;das Haus;das Zimmer;die Küche;das Bad;die Tür;das Fenster;der Schlüssel;das Bett;der Tisch;der Stuhl;der Schrank;das Sofa;die Lampe;die Miete;der Balkon;der Keller;die Toilette;die Treppe\nT|Du [fährst] nach Berlin.|fahren|Vas a Berlín.|3\nT|Er [fährt] mit dem Zug.|fahren|Va en tren.|3\nT|Was [isst] du zum Frühstück?|essen|¿Qué desayunas?|3\nT|Anna [isst] gern Fisch.|essen|A Anna le gusta comer pescado.|3\nT|Du [liest] ein Buch.|lesen|Lees un libro.|3\nT|Maria [liest] die Zeitung.|lesen|María lee el periódico.|3\nT|[Siehst] du das Haus?|sehen|¿Ves la casa?|3\nT|Er [sieht] den Schlüssel nicht.|sehen|No ve la llave.|3\nT|Du [sprichst] gut Deutsch.|sprechen|Hablas bien alemán.|3\nT|Der Lehrer [spricht] langsam.|sprechen|El profesor habla despacio.|3\nT|Du [nimmst] den Bus.|nehmen|Coges el autobús.|3\nT|Er [nimmt] ein Taxi.|nehmen|Coge un taxi.|3\nT|Das Kind [schläft] im Bett.|schlafen|El niño duerme en la cama.|3\nT|[Schläfst] du gut?|schlafen|¿Duermes bien?|3\nT|Lena [trifft] heute Tom.|treffen|Lena ve a Tom hoy.|3\nT|Wann [triffst] du Anna?|treffen|¿Cuándo ves a Anna?|3\nT|Mein Vater [läuft] jeden Morgen.|laufen|Mi padre corre cada mañana.|3\nT|Am Montag [fahren] wir nach Hamburg.|fahren|El lunes vamos a Hamburgo.|4\nT|Heute [habe] ich viel Zeit.|haben|Hoy tengo mucho tiempo.|4\nT|Morgen [arbeite] ich nicht.|arbeiten|Mañana no trabajo.|4\nT|Am Abend [lese] ich ein Buch.|lesen|Por la noche leo un libro.|4\nT|Jetzt [kocht] Paul.|kochen|Ahora cocina Paul.|4\nT|[Kommst] du morgen?|kommen|¿Vienes mañana?|4\nT|Es ist [halb] neun.|8:30|Son las ocho y media.|26\nT|Es ist [Viertel] vor drei.|14:45|Son las tres menos cuarto.|26\nT|Es ist Viertel [nach] zehn.|10:15|Son las diez y cuarto.|26\nT|Es ist [halb] sieben.|6:30|Son las seis y media.|26\nT|Das kostet [vierundzwanzig] Euro.|24|Cuesta 24 euros.|26\nT|Mein Bruder ist [fünfunddreißig] Jahre alt.|35|Mi hermano tiene 35 años.|26\nT|Das Zimmer kostet [dreihundert] Euro.|300|La habitación cuesta 300 euros.|26\nT|Das Haus hat [dreizehn] Zimmer.|13|La casa tiene 13 habitaciones.|26\nS|¿Qué lees?|Was liest du?|3|Was;liest\nS|Él habla alemán.|Er spricht Deutsch.|3|spricht;Deutsch\nS|El lunes voy a Berlín.|Am Montag fahre ich nach Berlin.;Ich fahre am Montag nach Berlin.|4|Montag;fahre;Berlin\nS|Hoy él duerme mucho tiempo.|Heute schläft er lange.;Er schläft heute lange.|4|heute;schläft;lange\nS|Anna coge el autobús.|Anna nimmt den Bus.|3|Anna;nimmt;Bus\nS|¿Ves la puerta?|Siehst du die Tür?|4|Siehst;Tür\nS|El piso tiene tres habitaciones.|Die Wohnung hat drei Zimmer.|26|Wohnung;drei;Zimmer\nS|Son las diez.|Es ist zehn Uhr.|26|zehn;Uhr\nS|Son las nueve y media.|Es ist halb zehn.;Es ist neun Uhr dreißig.|26|halb/dreißig;zehn/neun\nS|La cita es el miércoles.|Der Termin ist am Mittwoch.;Am Mittwoch ist der Termin.|4|Termin;Mittwoch\nS|Mañana nos quedamos en casa.|Morgen bleiben wir zu Hause.;Wir bleiben morgen zu Hause.|4|morgen;bleiben;Hause\nS|¿Dónde duerme el niño?|Wo schläft das Kind?|3|Wo;schläft;Kind\nS|El fin de semana duermo mucho.|Am Wochenende schlafe ich viel.;Ich schlafe am Wochenende viel.|4|Wochenende;schlafe\nS|La noche es larga.|Die Nacht ist lang.|1|Nacht;lang\nS|El alquiler cuesta ochocientos euros.|Die Miete kostet achthundert Euro.|26|Miete;kostet;achthundert\nS|Él suele leer por la noche.|Er liest oft am Abend.;Am Abend liest er oft.|4|liest;Abend\nS|Comemos a mediodía.|Wir essen am Mittag.;Am Mittag essen wir.;Wir essen mittags.;Mittags essen wir.|4|essen;Mittag/mittags\nS|El armario y la cama son nuevos.|Der Schrank und das Bett sind neu.|1|Schrank;Bett;neu\n\n@a1-courses|A1|Comer y hacer la compra|Decir lo que quieres o no, preguntar un precio, contar en plural.\nF|5;6;7\nV|pres|trinken;geben;finden;mögen;bekommen;einkaufen;helfen;bringen;vergessen\nM|das Essen;das Frühstück;das Brot;das Brötchen;die Butter;der Käse;die Wurst;das Fleisch;der Fisch;das Ei;die Milch;das Gemüse;das Obst;der Apfel;die Banane;die Kartoffel;die Tomate;der Salat;der Reis;die Nudeln;das Salz;der Zucker;der Kuchen;das Wasser;der Saft;der Kaffee;der Tee;das Bier;der Wein;der Teller;die Tasse;das Glas;das Messer;die Gabel;der Löffel;kochen;lecker;Ich habe Hunger.;Ich habe Durst.\nM|der Supermarkt;die Bäckerei;die Apotheke;der Markt;das Geschäft;die Kasse;die Tüte;die Flasche;die Packung;das Kilo;der Preis;das Bargeld;die Karte;der Euro;kaufen;bezahlen;kosten;billig;teuer;geöffnet;geschlossen;Wie viel kostet das?\nT|Paul hat [kein] Auto.|nicht/kein|Paul no tiene coche.|5\nT|Wir kaufen [keine] Butter.|nicht/kein|No compramos mantequilla.|5\nT|Er trinkt [keinen] Kaffee.|nicht/kein|No bebe café.|5\nT|Hier gibt es [keinen] Salat.|nicht/kein|Aquí no hay ensalada.|5\nT|Das Brot ist [nicht] teuer.|nicht/kein|El pan no es caro.|5\nT|Ich mag den Kuchen [nicht].|nicht/kein|No me gusta el pastel.|5\nT|Sie haben [keine] Kinder.|nicht/kein|No tienen hijos.|5\nT|Der Supermarkt ist heute [nicht] geöffnet.|nicht/kein|El supermercado no abre hoy.|5\nT|Ich kaufe zwei [Äpfel].|der Apfel|Compro dos manzanas.|6\nT|Wir brauchen drei [Flaschen].|die Flasche|Necesitamos tres botellas.|6\nT|Hier sind fünf [Brötchen].|das Brötchen|Aquí hay cinco panecillos.|6\nT|Die [Eier] sind frisch.|das Ei|Los huevos están frescos.|6\nT|Ich möchte zwei [Würste].|die Wurst|Quisiera dos salchichas.|6\nT|Wir nehmen vier [Gläser].|das Glas|Cogemos cuatro vasos.|6\nT|Die [Bananen] kosten zwei Euro.|die Banane|Los plátanos cuestan dos euros.|6\nT|Hier sind vier [Tassen].|die Tasse|Aquí hay cuatro tazas.|6\nT|Die [Kartoffeln] sind billig.|die Kartoffel|Las patatas son baratas.|6\nT|Ich kaufe drei [Tomaten].|die Tomate|Compro tres tomates.|6\nT|In Köln gibt es viele [Supermärkte].|der Supermarkt|En Colonia hay muchos supermercados.|6\nT|Wir nehmen [den] Salat.|der|Tomamos la ensalada.|7\nT|Wir kaufen [einen] Kuchen.|ein|Compramos un pastel.|7\nT|Hast du [den] Zucker?|der|¿Tienes el azúcar?|7\nT|Anna isst [das] Brötchen.|das|Anna come el panecillo.|7\nT|Anna sucht [die] Apotheke.|die|Anna busca la farmacia.|7\nT|Ich brauche [eine] Tüte.|ein|Necesito una bolsa.|7\nT|Wir suchen [einen] Markt.|ein|Buscamos un mercado.|7\nT|[Der] Wein ist gut.|der|El vino es bueno.|7\nT|Er kauft [einen] Apfel.|ein|Compra una manzana.|7\nT|Möchtest du [den] Käse?|der|¿Quieres el queso?|7\nT|Ich finde [den] Preis gut.|der|El precio me parece bien.|7\nS|No tengo pan.|Ich habe kein Brot.|5|habe;kein;Brot\nS|No tenemos agua.|Wir haben kein Wasser.|5|haben;kein;Wasser\nS|El café no está caliente.|Der Kaffee ist nicht heiß.;Der Kaffee ist nicht warm.|5|Kaffee;nicht;heiß/warm\nS|Bebo té.|Ich trinke Tee.|2|trinke;Tee\nS|Él compra un pastel.|Er kauft einen Kuchen.|7|kauft;einen;Kuchen\nS|¿Comes carne?|Isst du Fleisch?|3|Isst;Fleisch\nS|Las manzanas están buenas.|Die Äpfel sind gut.;Die Äpfel sind lecker.|6|Äpfel;gut/lecker\nS|Compramos tres botellas.|Wir kaufen drei Flaschen.|6|kaufen;drei;Flaschen\nS|Paul busca el supermercado.|Paul sucht den Supermarkt.|7|Paul;sucht;Supermarkt\nS|La farmacia está cerrada.|Die Apotheke ist geschlossen.|7|Apotheke;geschlossen\nS|Me gusta el queso.|Ich mag Käse.;Ich mag den Käse.|7|mag;Käse\nS|El pan cuesta dos euros.|Das Brot kostet zwei Euro.|6|Brot;kostet;zwei\nS|Él no come pescado.|Er isst keinen Fisch.|5|isst;keinen;Fisch\nS|No encuentro la llave.|Ich finde den Schlüssel nicht.|5|finde;Schlüssel;nicht\nS|Los niños beben leche.|Die Kinder trinken Milch.|6|Kinder;trinken;Milch\nS|Tomamos dos cafés.|Wir nehmen zwei Kaffee.;Wir nehmen zwei Kaffees.|6|nehmen;zwei;Kaffee/Kaffees\nS|Paul paga la comida.|Paul bezahlt das Essen.|7|Paul;bezahlt;Essen\nS|Los tomates no son caros.|Die Tomaten sind nicht teuer.;Die Tomaten sind billig.|5|Tomaten;teuer/billig\n\n@a1-ville|A1|Orientarse en la ciudad|Usar el transporte, preguntar el camino, decir a quién hablas, contar hasta mil.\nF|8;10\nV|pres|stehen;sitzen;liegen;fliegen;schwimmen;beginnen;gefallen;verstehen;werden\nM|der Bahnhof;der Zug;der Bus;die Straßenbahn;die U-Bahn;die S-Bahn;die Haltestelle;das Gleis;die Fahrkarte;der Fahrplan;die Verspätung;das Auto;das Fahrrad;der Flughafen;die Straße;die Ampel;die Kreuzung;die Ecke;der Platz;die Brücke;die Stadt;das Dorf;die Innenstadt;die Kirche;der Park;die Post;umsteigen;einsteigen;aussteigen;links;rechts;geradeaus;weit;in der Nähe;Wo ist die Haltestelle?;Wie komme ich zum Bahnhof?;hin und zurück;Nächster Halt;werden\nM|null;eins;elf;dreizehn;sechzehn;siebzehn;einundzwanzig;vierzig;fünfzig;sechzig;siebzig;achtzig;neunzig;tausend;die Million;die Zahl;die Hälfte;das Viertel;erste;zweite;dritte\nT|Ich helfe [dem] Kind.|das (Dativ)|Ayudo al niño.|8\nT|Wir danken [der] Freundin.|die (Dativ)|Damos las gracias a la amiga.|8\nT|Das Buch gehört [dem] Mann.|der (Dativ)|El libro pertenece al hombre.|8\nT|Das Auto gehört [der] Frau.|die (Dativ)|El coche pertenece a la mujer.|8\nT|Ich zeige [dem] Mädchen die Haltestelle.|das (Dativ)|Le enseño la parada a la chica.|8\nT|Anna gibt [der] Mutter das Geld.|die (Dativ)|Anna da el dinero a la madre.|8\nT|Paul bringt [dem] Vater einen Kaffee.|der (Dativ)|Paul le trae un café al padre.|8\nT|Wir geben [den] Eltern den Schlüssel.|die, Plural (Dativ)|Damos la llave a los padres.|8\nT|Ich schenke [einem] Freund ein Buch.|ein (Dativ)|Le regalo un libro a un amigo.|8\nT|Lena hilft [einer] Nachbarin.|eine (Dativ)|Lena ayuda a una vecina.|8\nT|Tom zeigt [einem] Kind den Bahnhof.|ein (Dativ)|Tom le enseña la estación a un niño.|8\nT|Die Stadt gefällt [dem] Bruder.|der (Dativ)|Al hermano le gusta la ciudad.|8\nT|Der Platz gefällt [der] Tante.|die (Dativ)|A la tía le gusta la plaza.|8\nT|Wir antworten [dem] Lehrer.|der (Dativ)|Respondemos al profesor.|8\nT|Wir fahren [mit] der U-Bahn.|mit/nach/von|Vamos en metro.|10\nT|Der Zug fährt [nach] Berlin.|nach/zu/in|El tren va a Berlín.|10\nT|Tom geht [zum] Bahnhof.|zu + der Bahnhof|Tom va a la estación.|10\nT|Maria geht [zur] Post.|zu + die Post|Maria va a correos.|10\nT|Das Kind ist [im] Park.|in + der Park|El niño está en el parque.|10\nT|Wir gehen [ins] Kino.|in + das Kino|Vamos al cine.|10\nT|Der Schlüssel liegt auf [dem] Tisch.|der Tisch (Wo?)|La llave está sobre la mesa.|10\nT|Ich lege den Schlüssel auf [den] Tisch.|der Tisch (Wohin?)|Pongo la llave sobre la mesa.|10\nT|Die Kirche steht neben [der] Brücke.|die Brücke (Wo?)|La iglesia está al lado del puente.|10\nT|Der Bus fährt über [die] Brücke.|die Brücke (Wohin?)|El autobús pasa por el puente.|10\nT|Das Geschenk ist [für] den Vater.|für/mit/aus|El regalo es para el padre.|10\nT|Er geht [ohne] den Hund in den Park.|ohne/mit/aus|Va al parque sin el perro.|10\nT|Wir gehen [durch] den Park.|durch/nach/aus|Cruzamos el parque.|10\nT|Der Zug kommt [aus] Wien.|aus/zu/für|El tren viene de Viena.|10\nT|Anna wohnt [bei] der Oma.|bei/zu/nach|Anna vive en casa de la abuela.|10\nT|Ich warte an [der] Ampel.|die Ampel (Wo?)|Espero en el semáforo.|10\nT|Er arbeitet seit [einem] Monat in Köln.|ein Monat (Dativ)|Trabaja en Colonia desde hace un mes.|10\nS|Vamos en tren.|Wir fahren mit dem Zug.;Wir nehmen den Zug.|10|Wir;Zug\nS|¿Adónde va el autobús?|Wohin fährt der Bus?|10|Wohin;Bus\nS|La estación está todo recto.|Der Bahnhof ist geradeaus.|10|Bahnhof;geradeaus\nS|Correos está a la derecha.|Die Post ist rechts.|10|Post;rechts\nS|Voy a correos.|Ich gehe zur Post.|10|zur;Post\nS|Va a la estación. (él)|Er geht zum Bahnhof.;Er fährt zum Bahnhof.|10|zum;Bahnhof\nS|Vamos a Viena.|Wir fahren nach Wien.;Wir gehen nach Wien.;Wir fliegen nach Wien.|10|nach;Wien\nS|El tren lleva retraso.|Der Zug hat Verspätung.|8|Zug;Verspätung\nS|Ayudo a la tía.|Ich helfe der Tante.|8|helfe;der;Tante\nS|La bicicleta es de Paul.|Das Fahrrad gehört Paul.|8|Fahrrad;gehört;Paul\nS|A Anna le gusta la ciudad.|Die Stadt gefällt Anna.;Anna gefällt die Stadt.|8|Stadt;gefällt;Anna\nS|Anna le da la llave al niño.|Anna gibt dem Kind den Schlüssel.|8|gibt;dem;Kind;Schlüssel\nS|El autobús está delante de la iglesia.|Der Bus steht vor der Kirche.;Der Bus ist vor der Kirche.|10|Bus;vor;Kirche\nS|Vive al lado del parque. (él)|Er wohnt neben dem Park.|10|wohnt;neben;Park\nS|Los niños están en el parque.|Die Kinder sind im Park.|10|Kinder;im;Park\nS|Vamos a la ciudad.|Wir gehen in die Stadt.;Wir fahren in die Stadt.|10|in;die;Stadt\nS|El billete cuesta ciento veinte euros.|Die Fahrkarte kostet hundertzwanzig Euro.;Die Fahrkarte kostet einhundertzwanzig Euro.|26|Fahrkarte;kostet;Euro\nS|La tercera calle está a la derecha.|Die dritte Straße ist rechts.|26|dritte;Straße;rechts\nS|El niño está sentado en la silla.|Das Kind sitzt auf dem Stuhl.|10|Kind;sitzt;auf;Stuhl\n\n@a1-restaurant|A1|En el restaurante|Pedir, pagar, decir lo que quieres, puedes o debes hacer, hablar de los tuyos con pronombres.\nF|9;11\nV|pres|können;müssen;wollen;dürfen;sollen;empfehlen;bitten;tun;denken\nM|das Restaurant;das Café;die Kneipe;die Speisekarte;die Rechnung;das Trinkgeld;der Kellner;die Kellnerin;die Vorspeise;das Hauptgericht;die Nachspeise;die Suppe;das Getränk;bestellen;reservieren;vegetarisch;scharf;Die Karte, bitte.;Ich hätte gern einen Kaffee.;Die Rechnung, bitte.;Zusammen oder getrennt?;Stimmt so.;Ist hier noch frei?;Einen Tisch für zwei, bitte.;Was empfehlen Sie?\nM|das Mittagessen;das Abendessen;das Hähnchen;der Joghurt;die Zwiebel;der Pfeffer;der Topf;die Pfanne;die Metzgerei;die Drogerie;der Kassenbon;der Einkaufswagen;das Pfand;die Dose;das Gramm;das Angebot;der Cent;günstig;Kann ich mit Karte zahlen?;Brauchen Sie eine Tüte?;Ich schaue nur.\nM|Mir geht es gut, danke.;Gern geschehen.;Es tut mir leid.;doch;Können Sie das wiederholen?;Sprechen Sie bitte langsamer.;Ich heiße …;Ich komme aus Frankreich.;Wie sagt man das auf Deutsch?;Was bedeutet das?;Prost!;können;müssen;wollen;dürfen;sollen\nT|Ich besuche [ihn] morgen.|er (Akk.)|Lo visito mañana.|9\nT|Kennst du [sie]? – Ja, das ist Anna.|sie (Akk.)|¿La conoces? – Sí, es Anna.|9\nT|Ich sehe [dich] morgen.|du (Akk.)|Te veo mañana.|9\nT|Der Kellner bringt [uns] die Karte.|wir (Dativ)|El camarero nos trae la carta.|9\nT|Kannst du [mir] das Salz geben?|ich (Dativ)|¿Puedes darme la sal?|9\nT|Das Essen schmeckt [ihm] nicht.|er (Dativ)|No le gusta la comida.|9\nT|Wie geht es [dir]? – Gut, danke.|du (Dativ)|¿Cómo estás? – Bien, gracias.|9\nT|Ich gebe [Ihnen] die Rechnung.|Sie (Dativ)|Le doy la cuenta.|9\nT|Ich besuche [euch] am Sonntag.|ihr (Akk.)|Os visito el domingo.|9\nT|[Mein] Kaffee ist kalt.|der Kaffee · mein|Mi café está frío.|9\nT|Hast du [meine] Tasse?|die Tasse · mein|¿Tienes mi taza?|9\nT|Paul nimmt [meinen] Schlüssel.|der Schlüssel · mein|Paul coge mi llave.|9\nT|Anna bezahlt [ihren] Kaffee.|der Kaffee · ihr|Anna paga su café.|9\nT|Paul trinkt [sein] Bier.|das Bier · sein|Paul bebe su cerveza.|9\nT|Wir essen bei [unseren] Eltern.|die Eltern · unser|Comemos en casa de nuestros padres.|9\nT|Ist das [euer] Tisch?|der Tisch · euer|¿Es vuestra mesa?|9\nT|Ich [kann] heute nicht kommen.|können|Hoy no puedo venir.|11\nT|[Kannst] du kochen?|können|¿Sabes cocinar?|11\nT|Im Restaurant [darf] man nicht rauchen.|dürfen|En el restaurante no se puede fumar.|11\nT|[Darf] ich hier sitzen?|dürfen|¿Puedo sentarme aquí?|11\nT|Du [musst] nicht bezahlen.|müssen|No tienes que pagar.|11\nT|Wir [müssen] heute kochen.|müssen|Hoy tenemos que cocinar.|11\nT|Er [will] Wein trinken.|wollen|Quiere beber vino.|11\nT|Was [wollt] ihr essen?|wollen|¿Qué queréis comer?|11\nT|Der Arzt sagt, ich [soll] viel Wasser trinken.|sollen|El médico dice que debo beber mucha agua.|11\nT|[Soll] ich den Tisch reservieren?|sollen|¿Reservo la mesa?|11\nT|Ich [möchte] die Suppe.|möchten|Quisiera la sopa.|11\nT|[Möchtest] du einen Tee?|möchten|¿Quieres un té?|11\nT|Sie [können] hier bezahlen.|können|Puede pagar aquí.|11\nT|Ihr [dürft] das Essen mitnehmen.|dürfen|Podéis llevaros la comida.|11\nT|Die Kinder [wollen] Kuchen essen.|wollen|Los niños quieren comer pastel.|11\nT|Ich [muss] die Rechnung bezahlen.|müssen|Tengo que pagar la cuenta.|11\nS|Quisiera una sopa.|Ich möchte eine Suppe.;Ich hätte gern eine Suppe.|11|eine;Suppe\nS|Tengo que pagar.|Ich muss bezahlen.;Ich muss zahlen.|11|muss;bezahlen/zahlen\nS|¿Puedes venir hoy?|Kannst du heute kommen?|11|Kannst;heute;kommen\nS|¿Qué quieres comer?|Was willst du essen?;Was möchtest du essen?|11|willst/möchtest;essen\nS|Aquí no se puede comer.|Hier darf man nicht essen.;Man darf hier nicht essen.|11|darf;nicht;essen\nS|No tienes que esperar.|Du musst nicht warten.|11|musst;nicht;warten\nS|Queremos reservar una mesa.|Wir wollen einen Tisch reservieren.;Wir möchten einen Tisch reservieren.|11|Tisch;reservieren\nS|No puede venir. (él)|Er kann nicht kommen.|11|kann;nicht;kommen\nS|Quiero pagar ahora.|Ich will jetzt bezahlen.;Ich möchte jetzt bezahlen.;Ich will jetzt zahlen.;Ich möchte jetzt zahlen.|11|jetzt;will/möchte;bezahlen/zahlen\nS|Os doy la llave.|Ich gebe Ihnen den Schlüssel.;Ich gebe euch den Schlüssel.|9|gebe;den;Schlüssel\nS|Le lleva un té a su hermana. (él)|Er bringt seiner Schwester einen Tee.|9|bringt;seiner;Schwester;Tee\nS|Lo conozco bien.|Ich kenne ihn gut.|9|kenne;ihn;gut\nS|Mi madre no come carne.|Meine Mutter isst kein Fleisch.|9|Meine;Mutter;Fleisch\nS|Es nuestro coche.|Das ist unser Auto.;Es ist unser Auto.|9|unser;Auto\nS|¿Dónde está tu hermano?|Wo ist dein Bruder?|9|Wo;dein;Bruder\nS|Mi coche está en la estación.|Mein Auto ist am Bahnhof.|9|Mein;Auto;Bahnhof\nS|¿Te gusta la comida?|Schmeckt dir das Essen?|9|Schmeckt;dir;Essen\nS|La cuenta es para mí.|Die Rechnung ist für mich.|9|Rechnung;für;mich\n\n@a2-maison|A2|En casa y en el día a día|Organizar el día con verbos separables, dar instrucciones, hablar de tu casa y tu ropa.\nF|12;13\nV|pres|aufstehen;anfangen;anrufen;einsteigen;aussteigen;umsteigen;ankommen;mitkommen;fernsehen;abholen;aufmachen;zumachen\nM|das Schlafzimmer;das Wohnzimmer;der Flur;das Stockwerk;der Aufzug;der Kühlschrank;die Waschmaschine;die Heizung;der Müll;die Mülltonne;der Briefkasten;umziehen;mieten;putzen;lüften;gemütlich\nM|die Kleidung;die Hose;das Hemd;das T-Shirt;der Pullover;die Jacke;der Mantel;das Kleid;der Rock;der Schuh;die Socke;die Mütze;der Schal;der Regenschirm;die Tasche;die Größe;die Umkleidekabine;anziehen;anprobieren;passen;eng;bequem\nM|machen;sagen;fragen;antworten;verstehen;hören;öffnen;schließen;anfangen;aufhören;aufstehen;anrufen;zeigen;mitbringen;suchen;brauchen;lernen;warten\nT|Wir [stehen] früh auf.|aufstehen|Nos levantamos temprano.|12\nT|Paul steht jeden Tag um sechs [auf].|aufstehen|Paul se levanta todos los días a las seis.|12\nT|Wann [fängt] der Kurs an?|anfangen|¿Cuándo empieza el curso?|12\nT|Der Unterricht fängt um neun [an].|anfangen|La clase empieza a las nueve.|12\nT|Ich [rufe] meine Mutter an.|anrufen|Llamo a mi madre.|12\nT|Wann rufst du mich [an]?|anrufen|¿Cuándo me llamas?|12\nT|Wir [steigen] am Bahnhof ein.|einsteigen|Subimos en la estación.|12\nT|Hier [steigt] Maria aus.|aussteigen|Aquí se baja Maria.|12\nT|Du [steigst] in Köln um.|umsteigen|Haces transbordo en Colonia.|12\nT|Der Zug [kommt] um acht Uhr an.|ankommen|El tren llega a las ocho.|12\nT|[Kommst] du heute mit?|mitkommen|¿Vienes con nosotros hoy?|12\nT|Wir [sehen] heute Abend fern.|fernsehen|Esta noche vemos la tele.|12\nT|Anna holt die Kinder [ab].|abholen|Anna recoge a los niños.|12\nT|Er [holt] mich am Flughafen ab.|abholen|Me recoge en el aeropuerto.|12\nT|Mach das Fenster [zu]!|zumachen|¡Cierra la ventana!|12\nT|Wer [macht] die Tür auf?|aufmachen|¿Quién abre la puerta?|12\nT|Wir [besuchen] heute die Oma.|besuchen|Hoy visitamos a la abuela.|12\nT|[Komm/Komme] bitte schnell!|kommen (du)|¡Ven rápido, por favor!|13\nT|[Nimm] den Schlüssel!|nehmen (du)|¡Coge la llave!|13\nT|[Gib] mir bitte die Tasche!|geben (du)|¡Dame el bolso, por favor!|13\nT|[Lies] das Buch!|lesen (du)|¡Lee el libro!|13\nT|[Fahr/Fahre] langsam!|fahren (du)|¡Conduce despacio!|13\nT|[Warte] bitte hier!|warten (du)|¡Espera aquí, por favor!|13\nT|[Öffne] die Flasche!|öffnen (du)|¡Abre la botella!|13\nT|[Seid] bitte leise!|sein (ihr)|¡Callaos, por favor!|13\nT|[Kommt] um acht!|kommen (ihr)|¡Venid a las ocho!|13\nT|[Nehmen] Sie bitte Platz!|nehmen (Sie)|¡Siéntese, por favor!|13\nT|[Warten] Sie hier!|warten (Sie)|¡Espere aquí!|13\nT|[Seien] Sie pünktlich!|sein (Sie)|¡Sea puntual!|13\nT|Steh bitte [auf]!|aufstehen (du)|¡Levántate, por favor!|13\nT|[Ruf/Rufe] mich morgen an!|anrufen (du)|¡Llámame mañana!|13\nS|Me levanto a las siete.|Ich stehe um sieben Uhr auf.;Um sieben Uhr stehe ich auf.|12|stehe;sieben;auf\nS|El curso empieza a las diez.|Der Kurs fängt um zehn Uhr an.;Der Kurs beginnt um zehn Uhr.;Der Unterricht fängt um zehn Uhr an.;Der Unterricht beginnt um zehn Uhr.|12|Kurs/Unterricht;zehn;fängt/beginnt\nS|¿Me llamas mañana?|Rufst du mich morgen an?|12|Rufst;mich;an\nS|Nos bajamos aquí.|Wir steigen hier aus.|12|steigen;hier;aus\nS|Tienes que hacer transbordo en Colonia.|Du musst in Köln umsteigen.|12|musst;Köln;umsteigen\nS|Recojo a Anna en la estación.|Ich hole Anna am Bahnhof ab.;Ich hole Anna vom Bahnhof ab.|12|hole;Anna;ab\nS|Esta noche vemos la televisión.|Heute Abend sehen wir fern.;Wir sehen heute Abend fern.|12|sehen;fern\nS|Quisiera probarme la chaqueta.|Ich möchte die Jacke anprobieren.|12|Jacke;anprobieren\nS|Se pone la chaqueta. (él)|Er zieht seine Jacke an.|12|zieht;Jacke;an\nS|Se muda a Berlín. (él)|Er zieht nach Berlin um.|12|zieht;Berlin;um\nS|El abrigo me queda bien.|Der Mantel passt mir gut.;Der Mantel steht mir gut.|8|Mantel;mir;gut\nS|¡Abre la ventana!|Mach das Fenster auf!;Öffne das Fenster!|13|Fenster;auf/Öffne\nS|¡Cierra la puerta, por favor!|Mach bitte die Tür zu!;Mach die Tür bitte zu!;Schließ bitte die Tür!;Schließe bitte die Tür!;Schließ die Tür bitte!;Mach die Tür zu!|13|Tür;zu/Schließ/Schließe\nS|Habla más despacio, por favor.|Sprich bitte langsamer.;Sprich langsamer, bitte.|13|Sprich;bitte;langsamer\nS|¡Ayúdame, por favor!|Hilf mir bitte!;Bitte hilf mir!|13|Hilf;mir;bitte\nS|¡Coge tu abrigo!|Nimm deinen Mantel!|13|Nimm;deinen;Mantel\nS|Esperen aquí, por favor.|Warten Sie bitte hier.;Warten Sie hier, bitte.;Wartet bitte hier.;Wartet hier, bitte.|13|hier;bitte\nS|¡Quédate en casa!|Bleib zu Hause!;Bleibe zu Hause!|13|zu;Hause\n\n@a2-raconter|A2|Contar el pasado|Decir lo que has hecho en perfecto, usar war, hatte y los modales en pretérito, hablar del tiempo y del ocio.\nF|14;15\nV|perf|tragen;rufen;verlieren;rennen;halten;ausgehen;abfahren;zurückkommen;mitnehmen\nV|prat|steigen;scheinen;gewinnen;singen\nM|der Vormittag;der Januar;der Februar;der März;der April;der Mai;der Juni;der Juli;der August;der September;der Oktober;der November;der Dezember;der Frühling;der Sommer;der Herbst;der Winter;der Feiertag;der Geburtstag;übermorgen;bald;später;manchmal;Wie spät ist es?;Es ist halb drei.\nM|das Wetter;die Sonne;der Regen;der Schnee;der Wind;die Wolke;das Gewitter;die Temperatur;sonnig;bewölkt;Es regnet.;Es ist kalt.;Es ist warm.;die Freizeit;das Hobby;der Sport;das Kino;der Film;das Buch;die Musik;das Konzert;das Museum;der Ausflug;die Reise;das Schwimmbad;der Verein;das Spiel;spazieren gehen;schwimmen;wandern;sich treffen;Hast du Lust?;wohnen;leben;verlieren;tragen\nT|Ich [habe] gestern viel gearbeitet.|haben/sein|Ayer trabajé mucho.|14\nT|Wir [sind] nach Hamburg gefahren.|haben/sein|Fuimos a Hamburgo.|14\nT|Anna [ist] spät gekommen.|haben/sein|Anna llegó tarde.|14\nT|Er [hat] einen Apfel gegessen.|haben/sein|Se comió una manzana.|14\nT|Paul [ist] zu Hause geblieben.|haben/sein|Paul se quedó en casa.|14\nT|Gestern [ist] nichts passiert.|haben/sein|Ayer no pasó nada.|14\nT|Ich [bin] früh aufgestanden.|haben/sein|Me levanté temprano.|14\nT|Ich habe einen Film [gesehen].|sehen|Vi una película.|14\nT|Er hat ein Buch [gelesen].|lesen|Leyó un libro.|14\nT|Wir haben Kaffee [getrunken].|trinken|Bebimos café.|14\nT|Du hast viel [geschlafen].|schlafen|Dormiste mucho.|14\nT|Sie hat den Brief [geschrieben].|schreiben|Escribió la carta.|14\nT|Wir haben Obst [gekauft].|kaufen|Compramos fruta.|14\nT|Hast du die Miete [bezahlt]?|bezahlen|¿Has pagado el alquiler?|14\nT|Wir haben am Samstag [eingekauft].|einkaufen|Hicimos la compra el sábado.|14\nT|Der Film hat um acht [angefangen].|anfangen|La película empezó a las ocho.|14\nT|Ich habe dich gestern [angerufen].|anrufen|Te llamé ayer.|14\nT|Ich [war] gestern im Kino.|sein (Präteritum)|Ayer estuve en el cine.|15\nT|Wir [waren] am Wochenende in Wien.|sein (Präteritum)|El fin de semana estuvimos en Viena.|15\nT|Wo [warst] du gestern?|sein (Präteritum)|¿Dónde estuviste ayer?|15\nT|Das Wetter [war] schön.|sein (Präteritum)|Hizo buen tiempo.|15\nT|Ich [hatte] keine Lust.|haben (Präteritum)|No tenía ganas.|15\nT|[Hattest] du Zeit?|haben (Präteritum)|¿Tuviste tiempo?|15\nT|Er [hatte] Fieber.|haben (Präteritum)|Tenía fiebre.|15\nT|Ich [konnte] nicht kommen.|können (Präteritum)|No pude venir.|15\nT|Wir [mussten] lange warten.|müssen (Präteritum)|Tuvimos que esperar mucho.|15\nT|Anna [wollte] ins Kino gehen.|wollen (Präteritum)|Anna quería ir al cine.|15\nT|Früher [gab] es hier ein Kino.|geben (Präteritum)|Antes había un cine aquí.|15\nT|Er [wurde] krank.|werden (Präteritum)|Se puso enfermo.|15\nT|Die Kinder [durften] nicht fernsehen.|dürfen (Präteritum)|Los niños no podían ver la tele.|15\nS|Ayer trabajé en casa.|Gestern habe ich zu Hause gearbeitet.;Ich habe gestern zu Hause gearbeitet.|14|habe;Hause;gearbeitet\nS|Fuimos al cine.|Wir sind ins Kino gegangen.|14|sind;Kino;gegangen\nS|Leyó un libro. (ella)|Sie hat ein Buch gelesen.|14|hat;Buch;gelesen\nS|Llegó ayer. (él)|Er ist gestern angekommen.;Gestern ist er angekommen.;Er ist gestern gekommen.;Gestern ist er gekommen.|14|gestern;angekommen/gekommen\nS|¿Qué has comido?|Was hast du gegessen?|14|Was;gegessen\nS|Olvidé la llave.|Ich habe den Schlüssel vergessen.|14|Schlüssel;vergessen\nS|Ganamos el juego.|Wir haben das Spiel gewonnen.|14|Spiel;gewonnen\nS|Perdió su llave. (él)|Er hat seinen Schlüssel verloren.|14|seinen;Schlüssel;verloren\nS|Brilló el sol.|Die Sonne hat geschienen.;Die Sonne schien.|14|Sonne;geschienen/schien\nS|Los niños cantaron.|Die Kinder haben gesungen.|14|Kinder;gesungen\nS|Salí con Anna.|Ich bin mit Anna ausgegangen.|14|bin;Anna;ausgegangen\nS|El autobús salió a las ocho.|Der Bus ist um acht Uhr abgefahren.;Der Bus fuhr um acht Uhr ab.|14|Bus;acht;abgefahren/ab\nS|Volvió tarde. (él)|Er ist spät zurückgekommen.;Er ist spät nach Hause gekommen.|14|ist;spät\nS|Estuve en casa.|Ich war zu Hause.;Ich bin zu Hause gewesen.|15|Hause;war/gewesen\nS|Ayer hubo un concierto.|Gestern gab es ein Konzert.;Es gab gestern ein Konzert.|15|gab;Konzert\nS|¿Qué tal fue el fin de semana?|Wie war das Wochenende?|15|war;Wochenende\nS|No pude dormir.|Ich konnte nicht schlafen.|15|konnte;schlafen\nS|Tuvimos que esperar.|Wir mussten warten.;Wir haben warten müssen.|15|warten;mussten/müssen\nS|No tenía tiempo. (ella)|Sie hatte keine Zeit.|15|hatte;keine;Zeit\n\n@a2-sante|A2|Salud y comparaciones|Hablar del cuerpo y del médico, usar verbos pronominales, comparar cosas y personas.\nF|16;19\nV|pres|waschen;anziehen;umziehen;aussehen;kennenlernen;schneiden;fallen;treiben;sterben\nM|der Körper;der Kopf;das Auge;das Ohr;die Nase;der Mund;der Zahn;der Hals;der Arm;die Hand;der Finger;der Bauch;der Rücken;das Bein;der Fuß;das Herz;der Arzt;die Ärztin;die Praxis;das Krankenhaus;das Medikament;das Rezept;das Fieber;die Erkältung;der Husten;die Schmerzen;krank;gesund;müde;Ich habe Kopfschmerzen.;Mir ist schlecht.;Ich brauche einen Termin.;Gute Besserung!\nM|groß;klein;alt;neu;jung;gut;schlecht;schön;hässlich;lang;kurz;schnell;langsam;heiß;kalt;warm;leicht;schwer;einfach;schwierig;liegen;sitzen;stehen;früh;spät;nett;richtig;falsch\nT|Ich wasche [mich] jeden Morgen.|sich (ich)|Me lavo cada mañana.|16\nT|Ich putze [mir] die Zähne.|sich (ich, Dativ)|Me lavo los dientes.|16\nT|Beeil [dich]!|sich (du)|¡Date prisa!|16\nT|Er fühlt [sich] heute schlecht.|sich|Hoy se siente mal.|16\nT|Wir treffen [uns] am Bahnhof.|sich (wir)|Quedamos en la estación.|16\nT|Ihr müsst [euch] beeilen.|sich (ihr)|Tenéis que daros prisa.|16\nT|Anna freut [sich] auf den Urlaub.|sich|Anna tiene ganas de que lleguen las vacaciones.|16\nT|Setzen Sie [sich] bitte!|sich (Sie)|¡Siéntese, por favor!|16\nT|Hast du [dir] die Hände gewaschen?|sich (du, Dativ)|¿Te has lavado las manos?|16\nT|Ich kaufe [mir] ein Fahrrad.|sich (ich, Dativ)|Me compro una bicicleta.|16\nT|Hast du [dich] erkältet?|sich (du)|¿Te has resfriado?|16\nT|Ich habe [mich] erkältet.|sich (ich)|Me he resfriado.|16\nT|Kannst du [dir] den Termin merken?|sich (du, Dativ)|¿Puedes acordarte de la cita?|16\nT|Er [fühlt] sich krank.|fühlen|Se siente enfermo.|16\nT|Ich [freue] mich auf morgen.|freuen|Tengo ganas de que llegue mañana.|16\nT|Das Kind [wäscht] sich die Hände.|waschen|El niño se lava las manos.|16\nT|Anna ist [jünger] als Paul.|jung|Anna es más joven que Paul.|19\nT|Der Zug ist [schneller] als der Bus.|schnell|El tren es más rápido que el autobús.|19\nT|Das Fieber ist heute [höher] als gestern.|hoch|Hoy la fiebre es más alta que ayer.|19\nT|Heute geht es mir [besser].|gut|Hoy estoy mejor.|19\nT|Tee trinke ich [lieber] als Kaffee.|gern|Prefiero el té al café.|19\nT|Mein Vater arbeitet [mehr] als ich.|viel|Mi padre trabaja más que yo.|19\nT|Die Wohnung ist [kleiner] als das Haus.|klein|El piso es más pequeño que la casa.|19\nT|Berlin ist [größer] als Bonn.|groß|Berlín es más grande que Bonn.|19\nT|Das Medikament ist so teuer [wie] das andere.|als/wie|Este medicamento es tan caro como el otro.|19\nT|Meine Schwester ist größer [als] ich.|als/wie|Mi hermana es más alta que yo.|19\nT|Ist das [nächste] Krankenhaus weit?|nah|¿Está lejos el hospital más cercano?|19\nT|Der Arm tut am [meisten] weh.|viel|El brazo es lo que más duele.|19\nT|Im Winter ist es am [kältesten].|kalt|En invierno es cuando más frío hace.|19\nT|Am [liebsten] esse ich Fisch.|gern|Lo que más me gusta comer es pescado.|19\nT|Er ist der [beste] Arzt.|gut|Es el mejor médico.|19\nT|Anna ist am [jüngsten].|jung|Anna es la más joven.|19\nS|Hoy me siento bien.|Ich fühle mich heute gut.;Heute fühle ich mich gut.|16|fühle;mich;gut\nS|Tenemos que darnos prisa.|Wir müssen uns beeilen.|16|müssen;uns;beeilen\nS|Se lava. (él)|Er wäscht sich.|16|wäscht;sich\nS|Nos vemos mañana.|Wir treffen uns morgen.;Wir sehen uns morgen.;Morgen treffen wir uns.;Morgen sehen wir uns.|16|uns;morgen\nS|Anna se ha resfriado.|Anna hat sich erkältet.|16|Anna;sich;erkältet\nS|Me compro una chaqueta.|Ich kaufe mir eine Jacke.|16|kaufe;mir;Jacke\nS|Tengo ganas de que llegue el verano.|Ich freue mich auf den Sommer.|16|freue;mich;Sommer\nS|¿Te duele la cabeza?|Hast du Kopfschmerzen?;Tut dir der Kopf weh?|6|Kopfschmerzen/Kopf\nS|Me duele el brazo.|Mein Arm tut weh.;Mein Arm tut mir weh.;Mir tut der Arm weh.|9|Arm;weh\nS|Tengo fiebre.|Ich habe Fieber.|6|habe;Fieber\nS|Está cansada y enferma.|Sie ist müde und krank.|1|müde;krank\nS|El médico es más joven que yo.|Der Arzt ist jünger als ich.|19|Arzt;jünger;als\nS|Hoy la fiebre es más alta.|Das Fieber ist heute höher.;Heute ist das Fieber höher.;Das Fieber ist heute stärker.;Heute ist das Fieber stärker.|19|Fieber;heute;höher/stärker\nS|Anna habla alemán mejor que Paul.|Anna spricht besser Deutsch als Paul.;Anna spricht Deutsch besser als Paul.|19|besser;Deutsch;als\nS|Este medicamento es más barato.|Das Medikament ist billiger.;Das Medikament ist günstiger.;Dieses Medikament ist billiger.;Dieses Medikament ist günstiger.|19|Medikament;billiger/günstiger\nS|Prefiero beber agua.|Ich trinke lieber Wasser.|19|trinke;lieber;Wasser\nS|Paul es tan alto como Tom.|Paul ist so groß wie Tom.|19|so;groß;wie\nS|El tren es el más rápido.|Der Zug ist am schnellsten.;Der Zug ist der schnellste.|19|Zug;schnellsten/schnellste\nS|El médico más cercano está en Bonn.|Der nächste Arzt ist in Bonn.|19|nächste;Arzt;Bonn\n\n@a2-raisons|A2|Trabajo, razones y planes|Enlazar ideas, explicar por qué, describir con adjetivos, hablar del futuro, pedir con cortesía.\nF|17;18;20\nV|pres|aufhören;aufräumen;einladen;ausfüllen;zuhören;unterschreiben;schließen;nennen;lassen;werfen;ziehen\nM|die Arbeit;der Job;der Beruf;die Firma;das Büro;der Chef;die Chefin;der Kollege;die Kollegin;der Urlaub;die Pause;der Feierabend;der Computer;das Handy;das Geld;die Adresse;gefallen;glauben;denken\nM|wer?;was?;wo?;wohin?;woher?;wann?;warum?;wie?;wie viel?;welcher?;und;oder;aber;weil;dass;wenn;also;auch;noch;schon;nur;sehr;ziemlich;vielleicht;zusammen;allein;hier;dort;alles;nichts;etwas;jemand;niemand;viel;wenig;genug\nT|Anna bleibt zu Hause, [weil] sie krank ist.|weil/wenn/dass|Anna se queda en casa porque está enferma.|17\nT|Ich glaube, [dass] er heute kommt.|weil/dass/ob|Creo que viene hoy.|17\nT|Ich komme nicht, [denn] ich muss arbeiten.|denn/weil/dass|No voy, porque tengo que trabajar.|17\nT|Ich weiß nicht, [ob] er Zeit hat.|ob/dass/wenn|No sé si tiene tiempo.|17\nT|[Wenn] es regnet, bleiben wir zu Hause.|wenn/als/ob|Si llueve, nos quedamos en casa.|17\nT|[Als] ich ein Kind war, wohnte ich in Köln.|wenn/als/ob|Cuando era niño, vivía en Colonia.|17\nT|Ich trinke nicht Kaffee, [sondern] Tee.|aber/sondern/und|No bebo café, sino té.|17\nT|Es ist kalt, [trotzdem] gehen wir schwimmen.|deshalb/trotzdem/dann|Hace frío, pero aun así vamos a nadar.|17\nT|Ich bin müde, [deshalb] gehe ich ins Bett.|deshalb/trotzdem/dann|Estoy cansado, por eso me voy a la cama.|17\nT|Ich weiß, dass du heute [kommst].|kommen|Sé que vienes hoy.|17\nT|Wir essen, wenn Paul [ankommt].|ankommen|Comemos cuando llegue Paul.|17\nT|Ich lerne Deutsch, weil ich in Wien [arbeite].|arbeiten|Aprendo alemán porque trabajo en Viena.|17\nT|Mein Bruder hat einen [guten] Job.|gut (der Job)|Mi hermano tiene un buen trabajo.|18\nT|Wir haben ein [schönes] Haus.|schön (das Haus)|Tenemos una casa bonita.|18\nT|Ich kaufe einen [neuen] Computer.|neu (der Computer)|Compro un ordenador nuevo.|18\nT|Der [alte] Chef ist nett.|alt (der Chef)|El jefe mayor es simpático.|18\nT|Ich nehme die [kleine] Tasche.|klein (die Tasche)|Me llevo el bolso pequeño.|18\nT|Er arbeitet in einer [großen] Firma.|groß (die Firma)|Trabaja en una empresa grande.|18\nT|Das [neue] Büro ist schön.|neu (das Büro)|La oficina nueva es bonita.|18\nT|Ich trinke [heißen] Kaffee.|heiß (der Kaffee)|Bebo café caliente.|18\nT|Ich möchte [frisches] Brot.|frisch (das Brot)|Quisiera pan fresco.|18\nT|Ich [werde] dir morgen schreiben.|werden|Te escribiré mañana.|20\nT|Wir [werden] nächstes Jahr umziehen.|werden|Nos mudaremos el año que viene.|20\nT|Er [wird] bald kommen.|werden|Vendrá pronto.|20\nT|[Könnten] Sie mir das zeigen?|können (Konjunktiv II)|¿Podría enseñarme eso?|20\nT|[Würden] Sie mir bitte helfen?|werden (Konjunktiv II)|¿Me ayudaría, por favor?|20\nT|Du [solltest] mehr schlafen.|sollen (Konjunktiv II)|Deberías dormir más.|20\nT|Ich [würde] gern schwimmen gehen.|werden (Konjunktiv II)|Me gustaría ir a nadar.|20\nT|Wir [hätten] gern einen Tisch.|haben (Konjunktiv II)|Quisiéramos una mesa.|20\nT|Das [wäre] sehr nett.|sein (Konjunktiv II)|Sería muy amable.|20\nS|Me quedo en casa porque estoy cansado.|Ich bleibe zu Hause, weil ich müde bin.;Ich bleibe zu Hause, denn ich bin müde.|17|bleibe;Hause;müde\nS|Creo que está enfermo.|Ich glaube, dass er krank ist.;Ich glaube, er ist krank.|17|glaube;krank\nS|No sé si viene Anna.|Ich weiß nicht, ob Anna kommt.|17|weiß;ob;Anna\nS|Cuando tengo tiempo, leo.|Wenn ich Zeit habe, lese ich.;Ich lese, wenn ich Zeit habe.|17|wenn;Zeit;lese\nS|Cuando era niño, vivía en Berlín.|Als ich ein Kind war, habe ich in Berlin gewohnt.;Als ich ein Kind war, wohnte ich in Berlin.;Als ich Kind war, habe ich in Berlin gewohnt.;Als ich Kind war, wohnte ich in Berlin.|17|Als;Berlin\nS|Llueve, por eso cojo el autobús.|Es regnet, deshalb nehme ich den Bus.;Es regnet, deswegen nehme ich den Bus.;Es regnet, deshalb fahre ich mit dem Bus.;Es regnet, deswegen fahre ich mit dem Bus.|17|regnet;Bus\nS|No bebo cerveza, sino vino.|Ich trinke kein Bier, sondern Wein.;Ich trinke nicht Bier, sondern Wein.|17|Bier;sondern;Wein\nS|Compro el jersey verde.|Ich kaufe den grünen Pullover.|18|grünen;Pullover\nS|Viven en una ciudad grande. (ellos)|Sie wohnen in einer großen Stadt.;Sie leben in einer großen Stadt.|18|wohnen/leben;großen;Stadt\nS|Tiene un coche nuevo. (él)|Er hat ein neues Auto.|18|neues;Auto\nS|Tenemos una cocina pequeña.|Wir haben eine kleine Küche.|18|kleine;Küche\nS|Buscamos un piso barato.|Wir suchen eine billige Wohnung.;Wir suchen eine günstige Wohnung.|18|suchen;Wohnung\nS|Trabaja en una empresa pequeña. (ella)|Sie arbeitet in einer kleinen Firma.|18|einer;kleinen;Firma\nS|Te visitaré mañana.|Ich werde dich morgen besuchen.;Ich besuche dich morgen.|20|dich;morgen;besuchen/besuche\nS|¿Podría abrir la ventana? (usted)|Könnten Sie das Fenster öffnen?;Könnten Sie das Fenster aufmachen?;Könntet ihr das Fenster öffnen?;Könntet ihr das Fenster aufmachen?;Würden Sie das Fenster öffnen?;Würden Sie das Fenster aufmachen?|20|Fenster;öffnen/aufmachen\nS|Deberías trabajar menos.|Du solltest weniger arbeiten.|20|solltest;weniger;arbeiten\nS|Quisiera un vaso de agua.|Ich hätte gern ein Glas Wasser.;Ich möchte ein Glas Wasser.|20|Glas;Wasser\nS|Si tuviera tiempo, vendría.|Wenn ich Zeit hätte, würde ich kommen.;Wenn ich Zeit hätte, käme ich.|20|Wenn;Zeit;hätte\n\n@b1-echanger|B1|Conversar y entenderse|Reaccionar y hablar de lo que importa con las preposiciones adecuadas, describir a personas y cosas, y dominar la declinación débil.\nF|21;37\nV|pres|raten;leihen;riechen;lügen;vergleichen;entscheiden\nV|prat|streiten;schreien;beißen;klingen;frieren;genießen;leiden\nP|warten>auf;sich freuen>auf;sich freuen>über;denken>an;sich kümmern>um;sich interessieren>für;sich ärgern>über;fragen>nach;teilnehmen>an;Angst haben>vor;abhängen>von;sich gewöhnen>an;sich erinnern>an;träumen>von;sprechen>mit;sprechen>über;sich unterhalten>über;erzählen>von;bitten>um;antworten>auf\nM|voll;leer;wichtig;laut;leise;sauber;schmutzig;nah;freundlich;glücklich;traurig;froh;böse;fertig;frei;besetzt;kaputt;sicher\nM|sein;haben;mögen;gehen;kommen;sprechen;wissen;kennen;sehen;lesen;schreiben;essen;trinken;schlafen;geben\nT|Wir warten schon lange [auf] den Zug.|warten|Llevamos mucho tiempo esperando el tren.|21\nT|Ich freue mich sehr [auf] die Ferien.|sich freuen (auf/über)|Tengo muchas ganas de que lleguen las vacaciones.|21\nT|Sie freut sich [über] die Blumen.|sich freuen (auf/über)|Está contenta con las flores.|21\nT|Er denkt jeden Tag [an] seine Tochter.|denken|Piensa en su hija todos los días.|21\nT|Meine Schwester kümmert sich [um] unsere Eltern.|sich kümmern|Mi hermana cuida de nuestros padres.|21\nT|Interessierst du dich [für] Musik?|sich interessieren|¿Te interesa la música?|21\nT|Mein Vater ärgert sich [über] die Nachbarn.|sich ärgern|A mi padre le molestan los vecinos.|21\nT|Der Tourist fragt [nach] dem Bahnhof.|fragen|El turista pregunta dónde está la estación.|21\nT|Mein Bruder nimmt [an] einem Deutschkurs teil.|teilnehmen|Mi hermano participa en un curso de alemán.|21\nT|Das Kind hat Angst [vor] dem Hund.|Angst haben|El niño tiene miedo del perro.|21\nT|Es hängt [von] dir ab.|abhängen|Depende de ti.|21\nT|Hast du dich schon [an] die Kälte gewöhnt?|sich gewöhnen|¿Ya te has acostumbrado al frío?|21\nT|Ich erinnere mich gut [an] meine Oma.|sich erinnern|Me acuerdo bien de mi abuela.|21\nT|Er träumt [von] einem großen Haus.|träumen|Sueña con una casa grande.|21\nT|[Worauf] wartet ihr?|wo- + auf|¿Qué estáis esperando?|21\nT|[Woran] erinnerst du dich?|wo- + an|¿De qué te acuerdas?|21\nT|[Worüber] habt ihr gesprochen?|wo- + über|¿De qué habéis hablado?|21\nT|[Wofür] interessiert sich Max?|wo- + für|¿Qué le interesa a Max?|21\nT|Das Geschenk ist schön, ich freue mich [darüber].|da- + über|El regalo es bonito, estoy contento con él.|21\nT|Der Urlaub kommt bald, wir freuen uns schon [darauf].|da- + auf|Las vacaciones llegan pronto, ya tenemos ganas de que empiecen.|21\nT|Auf [wen] warten die Kinder?|auf (Person)|¿A quién esperan los niños?|21\nT|Ich sehe den [Kollegen] im Büro.|der Kollege|Veo al compañero en la oficina.|37\nT|Wir sprechen mit dem [Studenten].|der Student|Hablamos con el estudiante.|37\nT|Morgen besuche ich meinen [Nachbarn].|der Nachbar|Mañana visito a mi vecino.|37\nT|Der Arzt hilft dem [Jungen].|der Junge|El médico ayuda al chico.|37\nT|Der Kellner bringt dem [Kunden] die Rechnung.|der Kunde|El camarero le trae la cuenta al cliente.|37\nT|Ich habe [Herrn] Weber geschrieben.|der Herr|Le he escrito al señor Weber.|37\nT|Der [Polizist] hat mir geholfen.|der Polizist|El policía me ha ayudado.|37\nT|Ich kenne den [Polizisten] nicht.|der Polizist|No conozco al policía.|37\nT|Hast du schon mit dem [Praktikanten] gesprochen?|der Praktikant|¿Ya has hablado con el becario?|37\nT|Die [Studenten] wohnen in Köln.|der Student (Plural)|Los estudiantes viven en Colonia.|37\nT|Ich verstehe diesen [Menschen] nicht.|der Mensch|No entiendo a esta persona.|37\nS|Espero una respuesta de mi compañera.|Ich warte auf eine Antwort von meiner Kollegin.|21|warte;auf;Antwort;Kollegin\nS|Tenemos ganas de que llegue el verano.|Wir freuen uns auf den Sommer.|21|freuen;auf;Sommer\nS|Estoy contento con tu regalo.|Ich freue mich über dein Geschenk.;Ich bin froh über dein Geschenk.|21|über;dein;Geschenk\nS|Mi hermano piensa a menudo en su trabajo.|Mein Bruder denkt oft an seine Arbeit.;Mein Bruder denkt oft an seinen Job.|21|denkt;an;Arbeit/Job\nS|¿Quién cuida de la abuela?|Wer kümmert sich um die Oma?;Wer kümmert sich um die Großmutter?;Wer kümmert sich um Oma?|21|kümmert;um;Oma/Großmutter\nS|A Anna le interesa mucho el deporte.|Anna interessiert sich sehr für Sport.;Anna interessiert sich sehr für den Sport.|21|interessiert;für;Sport\nS|Me acuerdo de esta ciudad.|Ich erinnere mich an diese Stadt.|21|erinnere;an;Stadt\nS|Todavía no me he acostumbrado al ruido.|Ich habe mich noch nicht an den Lärm gewöhnt.|21|an;Lärm;gewöhnt\nS|¿Tienes miedo de los perros?|Hast du Angst vor Hunden?;Hast du Angst vor den Hunden?|21|Angst;vor;Hunden\nS|Depende del precio.|Das hängt vom Preis ab.;Das hängt von dem Preis ab.;Es hängt vom Preis ab.;Es hängt von dem Preis ab.|21|hängt;Preis;ab\nS|¿Con qué sueñas?|Wovon träumst du?|21|Wovon;träumst\nS|Pienso en ello todos los días.|Ich denke jeden Tag daran.;Jeden Tag denke ich daran.|21|denke;daran\nS|Hablamos de ello ayer.|Wir haben gestern darüber gesprochen.;Gestern haben wir darüber gesprochen.|21|haben;darüber;gesprochen\nS|Espera a su vecino.|Sie wartet auf ihren Nachbarn.|37|wartet;auf;Nachbarn\nS|Conozco a este cliente.|Ich kenne diesen Kunden.|37|kenne;diesen;Kunden\nS|Ayudo a menudo al chico.|Ich helfe dem Jungen oft.;Ich helfe oft dem Jungen.|37|helfe;dem;Jungen\nS|Hablamos con los estudiantes.|Wir sprechen mit den Studenten.|37|mit;den;Studenten\nS|¿Conoces al señor Schmidt?|Kennst du Herrn Schmidt?|37|Kennst;Herrn;Schmidt\nS|La médica interroga al paciente.|Die Ärztin fragt den Patienten.;Die Ärztin befragt den Patienten.|37|Ärztin;den;Patienten\n\n@b1-travail|B1|Buscar trabajo y trabajar|Buscar un puesto, explicar un objetivo y precisar de quién se habla con oraciones de relativo y el infinitivo con zu.\nF|22;23\nV|pres|laden;messen;wachsen;schlagen;gelten;erhalten;verlassen;abgeben;vorschlagen;teilnehmen\nV|prat|bieten;vorbereiten;feststellen\nP|sich bewerben>um;sich bewerben>bei;sich vorbereiten>auf;sich konzentrieren>auf;sich beschäftigen>mit;arbeiten>an;anfangen>mit;aufhören>mit;helfen>bei;telefonieren>mit;einladen>zu;sich verabreden>mit;sich treffen>mit;sich entscheiden>für;sich bedanken>für;zufrieden>mit;zuständig>für;stolz>auf;fertig>mit;die Lust>auf\nM|die Stelle;das Gehalt;der Vertrag;die Bewerbung;der Lebenslauf;das Vorstellungsgespräch;die Besprechung;die Überstunde;die E-Mail;die Aufgabe;arbeiten;verdienen;sich bewerben;kündigen;pünktlich;krankgeschrieben;Schönen Feierabend!\nM|die Notaufnahme;die Krankenkasse;die Versichertenkarte;die Krankmeldung;der Führerschein;fahren;einkaufen;helfen;nehmen;bringen;finden;bleiben;vergessen;laufen\nT|Die Chefin, [die] heute kommt, ist sehr nett.|die/der/den|La jefa que viene hoy es muy simpática.|22\nT|Der Kollege, [der] neben mir sitzt, heißt Jan.|der/den/dem|El compañero que se sienta a mi lado se llama Jan.|22\nT|Das Buch, [das] ich lese, ist sehr gut.|das/dem/die|El libro que estoy leyendo es muy bueno.|22\nT|Der Vertrag, [den] ich unterschreibe, ist neu.|der/den/dem|El contrato que firmo es nuevo.|22\nT|Die Stelle, [die] ich suche, ist in Hamburg.|die/der/den|El puesto que busco está en Hamburgo.|22\nT|Der Mann, [dem] ich helfe, kommt aus Polen.|der/den/dem|El hombre al que ayudo viene de Polonia.|22\nT|Die Kollegin, [der] ich die E-Mail schicke, arbeitet in Bonn.|die/der/den|La compañera a la que envío el correo trabaja en Bonn.|22\nT|Das Kind, [dem] wir helfen, ist neun Jahre alt.|das/den/dem|El niño al que ayudamos tiene nueve años.|22\nT|Die Leute, [die] hier arbeiten, sind freundlich.|der/die/denen|La gente que trabaja aquí es amable.|22\nT|Die Kunden, [denen] ich schreibe, wohnen in Wien.|die/denen/der|Los clientes a los que escribo viven en Viena.|22\nT|Die Firma, in [der] ich arbeite, ist klein.|die/der/das|La empresa en la que trabajo es pequeña.|22\nT|Der Kollege, mit [dem] ich spreche, ist mein Freund.|der/den/dem|El compañero con el que hablo es mi amigo.|22\nT|Die Besprechung, auf [die] wir warten, beginnt um zehn.|die/der/den|La reunión que esperamos empieza a las diez.|22\nT|Das ist alles, [was] ich habe.|was/das/die|Eso es todo lo que tengo.|22\nT|Der Mann, [dessen] Auto dort steht, ist mein Chef.|dessen/deren/dem|El hombre cuyo coche está allí es mi jefe.|22\nT|Die Frau, [deren] Sohn hier arbeitet, heißt Maria.|dessen/deren/der|La mujer cuyo hijo trabaja aquí se llama Maria.|22\nT|Der Kollege, der heute nicht [kommt], ist krank.|kommen|El compañero que no viene hoy está enfermo.|22\nT|Es ist wichtig, pünktlich [zu] sein.|zu/um/ohne|Es importante ser puntual.|23\nT|Hast du Zeit, mir [zu] helfen?|zu/um/ohne|¿Tienes tiempo para ayudarme?|23\nT|Es macht Spaß, im Team [zu] arbeiten.|zu/um/ohne|Es divertido trabajar en equipo.|23\nT|Ich versuche, heute früher [anzukommen].|ankommen|Intento llegar antes hoy.|23\nT|Hast du Lust, mit mir [einzukaufen]?|einkaufen|¿Te apetece hacer la compra conmigo?|23\nT|Er hat angefangen, die Küche [aufzuräumen].|aufräumen|Ha empezado a ordenar la cocina.|23\nT|Ich habe keine Zeit, dich [anzurufen].|anrufen|No tengo tiempo de llamarte.|23\nT|Wir planen, nächstes Jahr [umzuziehen].|umziehen|Tenemos previsto mudarnos el año que viene.|23\nT|Ich lerne Deutsch, [um] hier zu arbeiten.|um/damit/ohne|Aprendo alemán para trabajar aquí.|23\nT|Er arbeitet viel, [um] mehr Geld zu verdienen.|um/damit/ohne|Trabaja mucho para ganar más dinero.|23\nT|Der Chef erklärt alles, [damit] wir es verstehen.|um/damit/ohne|El jefe lo explica todo para que lo entendamos.|23\nT|Er ist gegangen, [ohne] die Rechnung zu bezahlen.|um/ohne/statt|Se fue sin pagar la factura.|23\nT|[Statt] zu lernen, spielt er Fußball.|um/ohne/statt|En lugar de estudiar, juega al fútbol.|23\nT|Ich kann heute nicht lange [bleiben].|bleiben|Hoy no puedo quedarme mucho tiempo.|23\nT|Ich gehe jeden Tag [schwimmen].|schwimmen|Voy a nadar todos los días.|23\nS|El hombre que trabaja aquí es mi compañero.|Der Mann, der hier arbeitet, ist mein Kollege.|22|der;arbeitet;Kollege\nS|La candidatura que he escrito es buena.|Die Bewerbung, die ich geschrieben habe, ist gut.|22|Bewerbung;die;geschrieben\nS|El contrato que leo es largo.|Der Vertrag, den ich lese, ist lang.|22|Vertrag;den;lese\nS|La compañera con la que hablo es simpática.|Die Kollegin, mit der ich spreche, ist nett.;Die Kollegin, mit der ich spreche, ist freundlich.|22|Kollegin;mit;der;spreche\nS|La gente a la que ayudo es simpática.|Die Leute, denen ich helfe, sind nett.;Die Leute, denen ich helfe, sind freundlich.|22|Leute;denen;helfe\nS|Esta es la ciudad donde vivo.|Das ist die Stadt, in der ich wohne.;Das ist die Stadt, wo ich wohne.|22|Stadt;wohne\nS|La empresa en la que trabajo está en Berlín.|Die Firma, in der ich arbeite, ist in Berlin.;Die Firma, bei der ich arbeite, ist in Berlin.|22|Firma;der;arbeite\nS|El compañero cuyo coche es viejo se llama Jan.|Der Kollege, dessen Auto alt ist, heißt Jan.|22|Kollege;dessen;Auto\nS|Eso es todo lo que quiero.|Das ist alles, was ich möchte.;Das ist alles, was ich will.|22|alles;was\nS|Es importante hablar alemán.|Es ist wichtig, Deutsch zu sprechen.|23|wichtig;zu;sprechen\nS|Se me ha olvidado enviar el correo.|Ich habe vergessen, die E-Mail zu schicken.;Ich habe vergessen, die E-Mail zu senden.|23|vergessen;E-Mail;zu\nS|¿Te apetece hacer la compra?|Hast du Lust, einzukaufen?|23|Lust;einzukaufen\nS|Trabajo para ganar dinero.|Ich arbeite, um Geld zu verdienen.|23|um;Geld;verdienen\nS|Se fue sin pagar.|Er ist gegangen, ohne zu bezahlen.;Er ist gegangen, ohne zu zahlen.;Er ging, ohne zu bezahlen.;Er ging, ohne zu zahlen.|23|ohne;zu\nS|En lugar de trabajar, duerme.|Statt zu arbeiten, schläft er.;Anstatt zu arbeiten, schläft er.;Er schläft, statt zu arbeiten.;Er schläft, anstatt zu arbeiten.|23|arbeiten;schläft\nS|Te llamo para que vengas.|Ich rufe dich an, damit du kommst.|23|rufe;damit;kommst\nS|Intento encontrar un puesto.|Ich versuche, eine Stelle zu finden.|23|versuche;Stelle;finden\nS|Ha empezado a ordenar el piso.|Er hat angefangen, die Wohnung aufzuräumen.|23|angefangen;Wohnung;aufzuräumen\nS|No tenemos tiempo de comer.|Wir haben keine Zeit zu essen.;Wir haben keine Zeit zum Essen.|23|keine;Zeit;essen\n\n@b1-demarches|B1|Trámites y cartas|Entender las cartas oficiales con la pasiva y el genitivo, alquilar un piso y gestionar el banco y los papeles.\nF|24;25\nV|perf|stehlen;brechen;verbieten;brennen;hängen;wiegen;braten;gießen;fließen;springen;verschwinden;reiten;fangen\nP|sich anmelden>für;sich informieren>über;sich erkundigen>nach;sich beschweren>über;sich beschweren>bei;sich entschuldigen>für;sich entschuldigen>bei;sich wenden>an;sich verlassen>auf;achten>auf;aufpassen>auf;ausgeben>für;bestehen>aus;suchen>nach;gehören>zu;die Frage>nach;die Antwort>auf;der Grund>für;die Einladung>zu;die Lösung>für\nM|die Nebenkosten;der Vermieter;der Mieter;die Kaution;der Mietvertrag;das Amt;das Bürgeramt;die Anmeldung;die Behörde;das Formular;der Antrag;der Ausweis;der Reisepass;die Unterschrift;die Staatsangehörigkeit;der Wohnsitz;die Steuer\nM|die Steuernummer;die Versicherung;die Bank;das Konto;die Überweisung;der Geldautomat;der Brief;das Paket;die Frist;die Gebühr;der Rundfunkbeitrag;ausfüllen;unterschreiben;sich anmelden;beantragen;überweisen\nT|Das Paket [wird] heute gebracht.|werden|El paquete se trae hoy.|24\nT|Die Briefe [werden] am Montag geschickt.|werden|Las cartas se envían el lunes.|24\nT|Im Büro [wird] nicht geraucht.|werden|En la oficina no se fuma.|24\nT|Das Formular wird vom Amt [geprüft].|prüfen|El formulario lo revisa la administración.|24\nT|Der Vertrag wird heute [unterschrieben].|unterschreiben|El contrato se firma hoy.|24\nT|Das Konto [wurde] gestern geschlossen.|werden (Präteritum)|La cuenta se cerró ayer.|24\nT|Die Kaution [wurde] schon bezahlt.|werden (Präteritum)|La fianza ya se pagó.|24\nT|Das Haus wurde 1950 [gebaut].|bauen|La casa se construyó en 1950.|24\nT|Der Antrag [ist] abgelehnt worden.|sein (Perfekt Passiv)|La solicitud ha sido rechazada.|24\nT|Die Rechnung ist schon bezahlt [worden].|werden (Perfekt Passiv)|La factura ya ha sido pagada.|24\nT|Das Paket ist gestern abgeholt [worden].|werden (Perfekt Passiv)|El paquete fue recogido ayer.|24\nT|Die Gebühr [muss] pünktlich bezahlt werden.|müssen|La tasa debe pagarse a tiempo.|24\nT|Das Formular muss heute ausgefüllt [werden].|werden|El formulario debe rellenarse hoy.|24\nT|Der Ausweis kann hier beantragt [werden].|werden|El documento de identidad se puede solicitar aquí.|24\nT|Der Brief wird [von] der Chefin unterschrieben.|von/mit/durch|La carta la firma la jefa.|24\nT|Das Bürgeramt [ist] am Samstag geschlossen.|sein/werden|La oficina de atención ciudadana está cerrada los sábados.|24\nT|Das Bürgeramt [wird] um 16 Uhr geschlossen.|sein/werden|La oficina de atención ciudadana cierra a las 16 h.|24\nT|Das ist die Adresse [des] Vermieters.|der/des/dem|Esa es la dirección del casero.|25\nT|Der Name [der] Bank ist lang.|die/der/den|El nombre del banco es largo.|25\nT|Die Unterschrift [des] Mieters fehlt.|der/des/dem|Falta la firma del inquilino.|25\nT|Die Adresse [der] Eltern ist neu.|die/der/den|La dirección de los padres es nueva.|25\nT|Das Ende [des] Vertrags ist im Mai.|der/des/dem|El final del contrato es en mayo.|25\nT|Der Preis [eines] Autos ist hoch.|ein/eines/einem|El precio de un coche es alto.|25\nT|Die Kosten [meiner] Wohnung sind hoch.|meine/meiner/meinem|Los gastos de mi piso son altos.|25\nT|Das ist das Büro [meines] Chefs.|mein/meines/meinem|Esa es la oficina de mi jefe.|25\nT|Das ist der Vertrag des [Kollegen].|der Kollege|Ese es el contrato del compañero.|25\nT|Das ist [Annas] Konto.|Anna|Esa es la cuenta de Anna.|25\nT|[Wegen] des Streiks kommt die Post später.|wegen/trotz/während|Por la huelga, el correo llega más tarde.|25\nT|[Trotz] der Kälte gehen wir spazieren.|wegen/trotz/während|A pesar del frío, vamos a pasear.|25\nT|[Während] des Urlaubs arbeite ich nicht.|wegen/trotz/während|Durante las vacaciones no trabajo.|25\nT|Das Büro ist außerhalb [der] Stadt.|der/die/den|La oficina está fuera de la ciudad.|25\nT|Statt [einer] E-Mail schreibe ich einen Brief.|eine/einer/einem|En lugar de un correo, escribo una carta.|25\nS|La carta se envía hoy.|Der Brief wird heute geschickt.;Heute wird der Brief geschickt.;Der Brief wird heute verschickt.;Heute wird der Brief verschickt.|24|Brief;wird\nS|El formulario lo firma el inquilino.|Das Formular wird vom Mieter unterschrieben.;Das Formular wird von dem Mieter unterschrieben.|24|Formular;Mieter;unterschrieben;wird\nS|El banco está cerrado hoy.|Die Bank ist heute geschlossen.;Heute ist die Bank geschlossen.|24|Bank;ist;geschlossen\nS|El paquete se entregó ayer.|Das Paket wurde gestern geliefert.;Das Paket ist gestern geliefert worden.;Gestern wurde das Paket geliefert.;Gestern ist das Paket geliefert worden.|24|Paket;geliefert\nS|El alquiler se ha pagado.|Die Miete wurde bezahlt.;Die Miete ist bezahlt worden.|24|Miete;bezahlt\nS|El formulario debe rellenarse.|Das Formular muss ausgefüllt werden.|24|Formular;muss;ausgefüllt;werden\nS|El contrato se puede firmar mañana.|Der Vertrag kann morgen unterschrieben werden.;Morgen kann der Vertrag unterschrieben werden.|24|Vertrag;kann;unterschrieben;werden\nS|Me han robado el pasaporte.|Mein Reisepass wurde gestohlen.;Mein Reisepass ist gestohlen worden.|24|Reisepass;gestohlen\nS|Aquí se habla francés.|Hier wird Französisch gesprochen.;Hier spricht man Französisch.;Man spricht hier Französisch.|24|hier;Französisch\nS|Mi solicitud ha sido rechazada.|Mein Antrag wurde abgelehnt.;Mein Antrag ist abgelehnt worden.|24|Antrag;abgelehnt\nS|Ese es el coche de mi casero.|Das ist das Auto meines Vermieters.;Das ist das Auto von meinem Vermieter.|25|Auto;Vermieters/Vermieter\nS|La fecha del contrato es incorrecta.|Das Datum des Vertrags ist falsch.;Das Datum des Vertrages ist falsch.;Das Datum vom Vertrag ist falsch.|25|Datum;falsch\nS|Aquí está la dirección del banco.|Hier ist die Adresse der Bank.;Das ist die Adresse der Bank.;Hier ist die Adresse von der Bank.;Das ist die Adresse von der Bank.|25|Adresse;Bank\nS|Los gastos de comunidad del piso son altos.|Die Nebenkosten der Wohnung sind hoch.;Die Nebenkosten von der Wohnung sind hoch.|25|Nebenkosten;Wohnung;hoch\nS|Por la lluvia me quedo en casa.|Wegen des Regens bleibe ich zu Hause.;Wegen dem Regen bleibe ich zu Hause.;Ich bleibe wegen des Regens zu Hause.;Ich bleibe wegen dem Regen zu Hause.|25|wegen;Hause\nS|A pesar de la lluvia, voy al banco.|Trotz des Regens gehe ich zur Bank.;Trotz dem Regen gehe ich zur Bank.;Ich gehe trotz des Regens zur Bank.;Ich gehe trotz dem Regen zur Bank.|25|trotz;Bank\nS|Durante las vacaciones, el banco está cerrado.|Während der Ferien ist die Bank geschlossen.;In den Ferien ist die Bank geschlossen.|25|Ferien;Bank;geschlossen\nS|Ese es el pasaporte de Lena.|Das ist Lenas Reisepass.;Das ist der Reisepass von Lena.|25|Reisepass;Lenas/Lena\n"};
const UNITS = [];
const UNIT_BY_ID = {};
const CAPITALS = new Set(); // words that keep their capital at the start of a sentence
// a noun or a name, unless the same word also exists in lowercase (der Morgen, morgen)
function keepsCapital(word) {
  if (!CAPITALS.has(word)) return false;
  const low = word[0].toLowerCase() + word.slice(1);
  return !WORDS.some(w => !w.iki && !w.mine && w.kind !== "n" && w.de === low) && !IRR.some(v => v.inf === low);
}
const UNIT_OF_THEME = id => String(id || "").startsWith("u-") ? UNIT_BY_ID[id.slice(2)] : null;
function loadProgramme(lang) {
  const wordOf = de => WORDS.find(w => !w.iki && !w.mine && w.de === de);
  UNITS.length = 0;
  for (const k in UNIT_BY_ID) delete UNIT_BY_ID[k];
  CAPITALS.clear();
  for (const w of WORDS) if (w.kind === "n" && !w.iki && !w.mine) { CAPITALS.add(w.base); if (w.pl) CAPITALS.add(w.pl); }
  let u = null;
  for (const raw of (PROGRAW_I18N[lang] || PROGRAW).split("\n")) {
    const line = raw.trim();
    if (!line || line.startsWith("//")) continue;
    const f = line.split("|");
    if (f[0] === "N") for (const k of f[1].split(";")) CAPITALS.add(k);
    else if (f[0][0] === "@") {
      u = { id: f[0].slice(1), level: f[1], title: f[2], desc: f[3], fiches: [], verbs: [], vps: [], words: [], gaps: {}, sents: {} };
      UNITS.push(u); UNIT_BY_ID[u.id] = u;
      // a session limited to the unit is an ordinary session on this theme; it stays out of THEMES, so out of the free training lists
      THEME_BY_ID["u-" + u.id] = { id: "u-" + u.id, name: u.title, desc: u.desc, level: u.level, words: u.words };
    }
    else if (f[0] === "F") u.fiches = f[1].split(";").map(Number);
    else if (f[0] === "V") for (const k of f[2].split(";")) u.verbs.push({ v: IRR.find(x => x.key === k), tense: f[1] });
    else if (f[0] === "P") for (const k of f[1].split(";")) u.vps.push(VP.find(x => x.key === k.replace(">", "|")));
    else if (f[0] === "M") for (const de of f[1].split(";")) u.words.push(wordOf(de));
    else if (f[0] === "T") {
      const m = f[1].match(/^(.*)\[(.+?)\](.*)$/);
      u.gaps["g:" + u.id + ":" + hash(f[1])] = { before: m[1], after: m[3], answers: m[2].split("/"), cue: f[2], fr: f[3], fiche: +f[4] };
    }
    else if (f[0] === "S") u.sents["s:" + u.id + ":" + hash(f[2])] = { fr: f[1], accepted: f[2].split(";"), fiche: +f[3], keywords: f[4].split(";").map(k => k.split("/")) };
  }
}
function unitIds() { return UNITS.map(u => u.id); }
function progress() { return P.prog || {}; }

/* the personal work: ticks itself from the progress already kept (and synchronised), never blocks the exam */
function ficheDone(id) { const g = (P.g || {})[id]; return !!g && g[0] / g[1] >= .8; }
function unitWork(u) {
  const right = (store, key) => { const s = (P[store] || {})[key]; return !!s && s[0] >= 1; };
  const items = [];
  for (const id of u.fiches) items.push({ done: ficheDone(id), attrs: `data-fiche="${id}"`, title: `Fiche ${id}`, sub: `<span data-notr>${esc(FICHE_BY_ID[id].title)}</span>` });
  const counted = (done, n, unitName, attrs, title) => items.push({ done: done === n, attrs, title, sub: `${done}/${n} ${unitName}` });
  counted(u.words.filter(w => P.w[w.id] && P.w[w.id][3] >= 1).length, u.words.length, "mots réussis", `data-start="qcm" data-theme="u-${u.id}"`, "S'entraîner sur les mots");
  counted(u.verbs.filter(x => right("irr", x.v.key)).length, u.verbs.length, "verbes réussis", `data-uvx="conj:u-${u.id}"`, "S'entraîner sur les verbes");
  if (u.vps.length) counted(u.vps.filter(x => right("vp", x.key)).length, u.vps.length, "prépositions réussies", `data-uvx="prep:u-${u.id}"`, "S'entraîner sur les prépositions");
  return items;
}

/* ---------- exam marking: its own rules, stricter than norm() and checkTyped() (issue #20) ---------- */
const EXAM_PASS = 32;
const UML_ALT = { ä: "ae", ö: "oe", ü: "ue", ß: "ss", Ä: "Ae", Ö: "Oe", Ü: "Ue" };
function deTokens(s) { return String(s || "").normalize("NFC").replace(/[.,!?;:„“"«»()…]/g, " ").split(/\s+/).filter(Boolean); }
// target as written, or with ae/oe/ue/ss for its umlauts and ß; free: the first letter may differ in case
function deWordEq(target, typed, free) {
  if (free && typed) typed = (target[0] === target[0].toUpperCase() ? typed[0].toUpperCase() : typed[0].toLowerCase()) + typed.slice(1);
  let j = 0;
  for (const c of target) {
    if (typed[j] === c) j++;
    else if (UML_ALT[c] && typed.startsWith(UML_ALT[c], j)) j += 2;
    else return false;
  }
  return j === typed.length;
}
// a lowercase first word can take a capital; a capitalised one can lose it only at the start of a sentence
function deMatch(target, typed, atStart) {
  const T = deTokens(target), U = deTokens(typed);
  if (!T.length || T.length !== U.length) return false;
  return T.every((t, i) => deWordEq(t, U[i], i === 0 && (atStart || t[0] === t[0].toLowerCase())));
}
function markShort(answers, typed, atStart) { return { pts: answers.some(a => deMatch(a, typed, atStart)) ? 1 : 0 }; }
// one wrong letter, in place: never an umlaut or ß on either side, never just a missing capital
function oneLetterOff(t, u) {
  if (deTokens(t).join("").length < 5 || !u) return false;
  if (t[0] !== u[0] && t[0].toLowerCase() === u[0].toLowerCase()) return false;
  let j = 0, off = 0;
  for (const c of t) {
    if (u[j] === c) j++;
    else if (UML_ALT[c] && u.startsWith(UML_ALT[c], j)) j += 2;
    else if (UML_ALT[c] || UML_ALT[u[j]] || j >= u.length || ++off > 1) return false;
    else j++;
  }
  return off === 1 && j === u.length;
}
function markWordOne(w, typed, typedPl, keeps) {
  const noun = w.kind === "n";
  const T = deTokens(w.de), U = deTokens(typed);
  if (T.length !== U.length || !T.length) return { pts: 0 };
  let near = false;
  const free = !noun && !keeps(T[0]);
  if (!deMatch(w.de, typed, free)) {
    // the article is what's being tested, so only the other words can carry the wrong letter
    const off = T.map((t, i) => deWordEq(t, U[i], i === 0 && (free || t[0] === t[0].toLowerCase())) ? 0 : 1);
    const k = off.indexOf(1);
    if (off.reduce((a, b) => a + b, 0) !== 1 || (noun && k === 0) || !oneLetterOff(T[k], U[k])) return { pts: 0 };
    near = true;
  }
  if (noun && w.pl && !w.plOnly && !deMatch(w.pl, String(typedPl || "").replace(/^\s*die\s+/i, ""))) return { pts: 0 };
  return near ? { pts: 1, near } : { pts: 1 };
}
// alts: other words with the same meaning; an exact answer wins over a tolerated one
function markWord(w, typed, typedPl, alts = [], keeps = () => false) {
  let best = { pts: 0 };
  for (const o of [w, ...alts]) {
    const r = markWordOne(o, typed, typedPl, keeps);
    if (r.pts && !r.near) return r;
    if (r.pts && !best.pts) best = r;
  }
  return best;
}
// fewest words to change, add or remove, with the words of the accepted version marked right or wrong
function sentenceDiff(target, typed, isNoun) {
  const T = deTokens(target), U = deTokens(typed);
  const eq = (i, j) => deWordEq(T[i], U[j], i === 0 && j === 0 && !isNoun(T[0]));
  const d = Array.from({ length: T.length + 1 }, (_, i) => Array.from({ length: U.length + 1 }, (_, j) => i === T.length ? U.length - j : j === U.length ? T.length - i : 0));
  for (let i = T.length - 1; i >= 0; i--) for (let j = U.length - 1; j >= 0; j--)
    d[i][j] = Math.min(d[i + 1][j] + 1, d[i][j + 1] + 1, d[i + 1][j + 1] + (eq(i, j) ? 0 : 1));
  const marks = [], extra = [];
  let i = 0, j = 0;
  while (i < T.length || j < U.length) {
    if (i < T.length && j < U.length && d[i][j] === d[i + 1][j + 1] + (eq(i, j) ? 0 : 1)) { marks.push([T[i], eq(i, j)]); i++; j++; }
    else if (i < T.length && d[i][j] === d[i + 1][j] + 1) { marks.push([T[i], false]); i++; }
    else { extra.push(U[j]); j++; }
  }
  return { dist: d[0][0], marks, extra };
}
function markSentence(accepted, typed, isNoun = () => false) {
  if (!deTokens(typed).length) return { pts: 0, best: accepted[0], marks: deTokens(accepted[0]).map(w => [w, false]), extra: [] };
  let best = null;
  for (const a of accepted) {
    const r = sentenceDiff(a, typed, isNoun);
    if (!best || r.dist < best.dist) best = Object.assign(r, { best: a });
  }
  return { pts: best.dist === 0 ? 1 : best.dist === 1 ? .5 : 0, best: best.best, marks: best.marks, extra: best.extra };
}
function examPassed(score) { return score >= EXAM_PASS; }

/* ---------- exam draw, unit status, results ---------- */
const EXAM_QUOTA = { gap: 12, form: 8, word: 12, sent: 8 };
const EXAM_CAT = { g: "gap", c: "form", p: "form", w: "word", s: "sent" };
// c:sein:pres:2 and c:sein:pres:0 are one point: the same verb and tense, at another person
const pointKey = id => id.split(":").slice(0, 3).join(":");
// pools: { gap, form, word, sent }, lists of { id }. carry: the ids a new exam must take up.
function drawExam(pools, carry = []) {
  const out = [];
  for (const [cat, n] of Object.entries(EXAM_QUOTA)) {
    const keys = new Set(pools[cat].map(x => pointKey(x.id)));
    const kept = carry.filter(id => EXAM_CAT[id[0]] === cat && keys.has(pointKey(id))).slice(0, n);
    const taken = new Set(kept.map(pointKey));
    const rest = shuffle(pools[cat].filter(x => !taken.has(pointKey(x.id)))).map(x => x.id);
    out.push(...shuffle(kept.concat(rest.slice(0, n - kept.length))));
  }
  return out;
}
// current: the unit after the last validated one. Earlier units left unvalidated stay open; only the one right after current can be tried directly.
function unitStatus(ids, prog) {
  let last = -1;
  ids.forEach((id, i) => { if (prog[id] && prog[id].ok) last = i; });
  const state = {};
  ids.forEach((id, i) => { state[id] = prog[id] && prog[id].ok ? "done" : i <= last ? "open" : i === last + 1 ? "current" : i === last + 2 ? "next" : "locked"; });
  return { state, current: ids[last + 1] || null };
}
function recordExam(prog, id, score) {
  const cur = prog[id] || { ok: 0, best: 0 };
  prog[id] = { ok: cur.ok || examPassed(score) ? 1 : 0, best: Math.max(cur.best, score) };
}
function mergeProg(mine, other) {
  let changed = false;
  for (const [id, e] of Object.entries(other || {})) {
    const cur = mine[id] || { ok: 0, best: 0 };
    const ok = cur.ok || e.ok ? 1 : 0, best = Math.max(cur.best, e.best || 0);
    if (!mine[id] || ok !== cur.ok || best !== cur.best) { mine[id] = { ok, best }; changed = true; }
  }
  return changed;
}

/* ---------- the exam in progress: kept on this device only, never in P ---------- */
const EXAM_KEY = "wortschatz-exam-v1";
const EXAM_MS = 60 * 60000;
// exams[unit] = { ids, a: { id: answer }, i, ms }; last[unit] = the last marked paper, with what is left to rewrite
let XD = { exams: {}, last: {} };
try { const s = localStorage.getItem(EXAM_KEY); if (s) XD = Object.assign(XD, JSON.parse(s)); } catch (e) {}
function saveXD() { try { localStorage.setItem(EXAM_KEY, JSON.stringify(XD)); } catch (e) {} }
let EX = null; // { u, screen: "q" | "over" | "check" | "result" | "fix", lt: why the last check stopped }
let exTick = Date.now(), exSaved = 0;

function examPools(u) {
  return {
    gap: Object.keys(u.gaps).map(id => ({ id })),
    sent: Object.keys(u.sents).map(id => ({ id })),
    word: u.words.map(w => ({ id: "w:" + w.id })),
    form: u.verbs.map(x => ({ id: `c:${x.v.key}:${x.tense}:${conjQuestion(x.v, x.tense).k}` })).concat(u.vps.map(it => ({ id: "p:" + it.key }))),
  };
}
// a question from its id; null if the content it came from is gone
function examQuestion(u, id) {
  const [kind, a, b, c] = id.split(":");
  if (kind === "g") return u.gaps[id] ? { id, cat: "gap", g: u.gaps[id] } : null;
  if (kind === "s") return u.sents[id] ? { id, cat: "sent", s: u.sents[id] } : null;
  if (kind === "w") { const w = u.words.find(x => x.id === a); return w ? { id, cat: "word", w } : null; }
  if (kind === "p") { const it = u.vps.find(x => x.key === id.slice(2)); return it ? { id, cat: "form", it } : null; }
  const x = kind === "c" && u.verbs.find(y => y.v.key === a && y.tense === b);
  if (!x || !x.v[b][+c]) return null;
  const answers = [x.v[b][+c]];
  if (b === "prat" && +c === 1 && x.v.pratAlt) answers.push(x.v.pratAlt);
  return { id, cat: "form", v: x.v, tense: b, k: +c, answers };
}
function hasPlural(q) { return q.cat === "word" && q.w.kind === "n" && q.w.pl && !q.w.plOnly; }
// a noun with a plural is only answered once both fields are filled
function answered(q, a) {
  const [main, pl] = Array.isArray(a) ? a : [a, ""];
  return !!(main && main.trim()) && (!hasPlural(q) || !!(pl && pl.trim()));
}
function examMark(q, a) {
  const main = Array.isArray(a) ? a[0] : a || "";
  if (q.cat === "gap") return markShort(q.g.answers, main, !q.g.before && !keepsCapital(q.g.answers[0]));
  if (q.cat === "sent") return markSentence(q.s.accepted, main, keepsCapital);
  if (q.cat === "word") return markWord(q.w, main, Array.isArray(a) ? a[1] : "", WORDS.filter(o => !o.iki && !o.mine && o !== q.w && o.fr === q.w.fr), keepsCapital);
  if (q.it) return markShort([q.it.token], main, q.it.ex.startsWith(q.it.token));
  return markShort(q.answers, main.replace(/^\s*(ich|du|er|sie|es|wir|ihr|man)\s+/i, ""));
}
const EX_LABEL = { gap: "Complète la phrase", form: "Écris la forme", word: "Écris en allemand", sent: "Traduis en allemand" };
function examPrompt(q) {
  if (q.cat === "gap") return `<div class="ex-de qsent" lang="de">${esc(q.g.before)}<span class="gap">___</span>${esc(q.g.after)} <span class="hint">(${esc(q.g.cue)})</span></div><div class="hint" data-notr>${esc(q.g.fr)}</div>`;
  if (q.cat === "sent") return `<div class="prompt fr" data-notr>${esc(q.s.fr)}</div>`;
  if (q.cat === "word") return `<div class="prompt fr" data-notr>${esc(q.w.fr)}</div><div class="hint">${q.w.kind === "n" ? (hasPlural(q) ? "Avec l'article, puis le pluriel" : "Avec l'article") : q.w.kind === "v" ? "À l'infinitif" : ""}</div>`;
  if (q.it) return `<div class="prompt" lang="de">${esc(q.it.verb)} <span class="gap">___</span></div><div class="ex-de qsent" lang="de">${q.it.gapHTML}</div><div class="hint" data-notr>${esc(q.it.exfr)}</div>`;
  return `<div class="prompt" lang="de">${esc(q.v.inf)}</div><div class="hint" data-notr>${esc(q.v.fr)}</div><div class="cask"><span class="pill">${TENSES[q.tense]}</span><span class="pill pill-p" lang="de">${PERSONS[q.k]}</span></div>`;
}
function examAnswerText(q) {
  if (q.cat === "gap") return q.g.before + q.g.answers[0] + q.g.after;
  if (q.cat === "sent") return q.s.accepted[0];
  if (q.cat === "word") return q.w.de + (hasPlural(q) ? " · die " + q.w.pl : "");
  if (q.it) return q.it.ex;
  return PERSONS[q.k].split("/")[0] + " " + q.answers[0];
}
function examFiche(q) {
  if (q.cat === "gap") return q.g.fiche;
  if (q.cat === "sent") return q.s.fiche;
  if (q.cat === "word") return q.w.kind === "n" ? (hasPlural(q) ? 6 : 1) : 0;
  if (q.it) return 21;
  if (q.tense === "perf") return 14;
  if (q.tense === "prat") return 15;
  if (q.v.particle) return 12;
  return q.v.presIrr.some(Boolean) ? 3 : 2;
}
function examFields(q, a, prefix, disabled) {
  const main = Array.isArray(a) ? a[0] : a || "", pl = Array.isArray(a) ? a[1] : "";
  const field = (n, label, val) => `<label class="exlab" for="${prefix}${n}">${label}</label><input id="${prefix}${n}" class="${q.cat === "sent" ? "exlong" : ""}" data-exa="${n}" data-exid="${esc(q.id)}" type="text" lang="de" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" value="${esc(val || "")}"${disabled ? " disabled" : ""}>`;
  return field(0, q.cat === "sent" ? "Ta phrase en allemand" : "Ta réponse", main) + (hasPlural(q) ? field(1, "Pluriel", pl) : "");
}
const UML_KEYS = `<div class="umlauts">${["ä", "ö", "ü", "ß", "Ä", "Ö", "Ü"].map(c => `<button type="button" data-exins="${c}">${c}</button>`).join("")}</div>`;

/* opening: resume, or rewrite what was missed, or draw a new paper that takes it up */
function missedIds(last) { return last.ids.filter(id => last.pts[id] && last.pts[id][0] < 1); }
// what is left to rewrite; a point whose content has since changed cannot be rewritten, so it no longer counts
function rewriteLeft(id) {
  const last = XD.last[id];
  return missedIds(last).filter(q => examQuestion(UNIT_BY_ID[id], q) && !last.fixed[q]);
}
function mustRewrite(id) {
  const last = XD.last[id];
  return !!last && !!last.fix && !(progress()[id] || {}).ok && rewriteLeft(id).length > 0;
}
function openExam(id) {
  const u = UNIT_BY_ID[id];
  if (!u || unitStatus(unitIds(), progress()).state[id] === "locked") return;
  if (!XD.exams[id] && mustRewrite(id)) { EX = { u: id, screen: "fix" }; view = "exam"; render(); window.scrollTo(0, 0); return; }
  const pools = examPools(u);
  let x = XD.exams[id];
  if (!x) {
    const last = XD.last[id];
    const carry = last && last.fix && !(progress()[id] || {}).ok ? missedIds(last) : [];
    if (last) last.fix = 0;
    x = XD.exams[id] = { ids: drawExam(pools, carry), a: {}, i: 0, ms: 0 };
  } else if (x.ids.some(q => !examQuestion(u, q))) {
    // the unit's content changed during the exam: keep what still exists, draw the rest
    x.ids = drawExam(pools, x.ids.filter(q => examQuestion(u, q)));
    x.i = Math.min(x.i, x.ids.length - 1);
  }
  saveXD();
  exTick = Date.now();
  EX = { u: id, screen: "q" };
  view = "exam"; render(); window.scrollTo(0, 0);
}
function examClock(ms) {
  const m = Math.floor(ms / 60000), s = Math.floor(ms / 1000) % 60;
  return ms > EXAM_MS ? `Temps indicatif dépassé de ${m - 60} min` : `${m}:${String(s).padStart(2, "0")} / 60:00`;
}
// the clock only runs while the exam is on screen; a phone asleep without warning costs at most a few seconds
function examTickNow() {
  const now = Date.now(), x = EX && XD.exams[EX.u];
  if (view !== "exam" || !x || document.hidden || (EX.screen !== "q" && EX.screen !== "over")) { exTick = now; return; }
  x.ms += Math.min(now - exTick, 5000);
  exTick = now;
  const el = document.getElementById("extime");
  if (el) { const t = examClock(x.ms); if (el.dataset.t !== t) { el.dataset.t = t; el.textContent = t; el.classList.toggle("over", x.ms > EXAM_MS); } }
  if (now - exSaved > 5000) { exSaved = now; saveXD(); }
}
setInterval(examTickNow, 1000);
document.addEventListener("visibilitychange", () => { exTick = Date.now(); if (document.hidden) saveXD(); });
window.addEventListener("pagehide", saveXD);

function renderExam() {
  const u = UNIT_BY_ID[EX.u];
  if (EX.screen === "check") app.innerHTML = `<section class="section"><span class="label">${LT_WAIT}</span></section>`;
  else if (EX.screen === "result") app.innerHTML = examResultView(u);
  else if (EX.screen === "fix") app.innerHTML = examFixView(u);
  else {
    const x = XD.exams[EX.u];
    const qs = x.ids.map(id => examQuestion(u, id));
    const top = `<div class="qtop"><button class="x" id="quit">✕ Quitter</button><div class="steps fine" aria-hidden="true">${qs.map((q, n) => `<i class="${n === x.i && EX.screen === "q" ? "cur" : answered(q, x.a[q.id]) ? "on" : ""}"></i>`).join("")}</div><span class="qcount num">${x.i + 1}/${qs.length}</span></div>
      <div class="extime${x.ms > EXAM_MS ? " over" : ""}" id="extime">${examClock(x.ms)}</div>`;
    app.innerHTML = top + (EX.screen === "over" ? examOverView(x, qs) : examQuestionView(x, qs));
    if (EX.screen === "q") { const i = document.getElementById("ex0"); if (i) i.focus({ preventScroll: true }); }
  }
}
function examQuestionView(x, qs) {
  const q = qs[x.i], todo = qs.filter(o => !answered(o, x.a[o.id])).length;
  return `<div class="qcard"><div class="qkind"><span class="label">${EX_LABEL[q.cat]}</span></div>${examPrompt(q)}</div>
    <form class="typebox" id="exf" autocomplete="off">${examFields(q, x.a[q.id], "ex", false)}${UML_KEYS}
      <div class="row2"><button type="button" class="secondary" id="exprev"${x.i ? "" : " disabled"}>← Précédente</button><button class="primary" type="submit">${x.i + 1 < qs.length ? "Suivante →" : "Vue d'ensemble"}</button></div>
    </form>
    <button class="trainlink" id="exover">Vue d'ensemble · ${todo} sans réponse</button>`;
}
function examOverView(x, qs) {
  const todo = qs.filter(o => !answered(o, x.a[o.id])).length;
  return `<section class="section">
      <span class="label">Vue d'ensemble</span>
      <p class="note">${todo ? `${todo} sans réponse, en pointillés. Elles comptent 0 point.` : "Tu as répondu à toutes les questions."} Rien n'est corrigé avant que tu rendes ta copie.</p>
      <div class="exgrid">${qs.map((q, n) => `<button class="num${answered(q, x.a[q.id]) ? "" : " todo"}${n === x.i ? " cur" : ""}" data-exgo="${n}" aria-label="Question ${n + 1}">${n + 1}</button>`).join("")}</div>
    </section>
    <button class="primary" id="exsubmit">Rendre ma copie</button>
    <button class="secondary" id="exback">← Continuer l'examen</button>`;
}
/* ---------- LanguageTool (issue #22): a second opinion on free translations, never the only judge ---------- */
const LT_URL = "https://api.languagetool.org/v2/check";
// the public API allows 20 requests and 75 KB a minute per IP, 20 KB a request: https://dev.languagetool.org/public-http-api
const LT_MAX = { reqs: 15, bytes: 60000, perReq: 18000, ms: 60000 };
const LT_TIMEOUT = 6000;
const LT_INFO = "À la remise de la copie, tes phrases à traduire non reconnues sont envoyées à LanguageTool (Learneo, Inc., États-Unis) avec ton adresse IP, sans identifiant ni progression. Sa politique ne précise ni la durée de conservation ni si ces textes entraînent ses modèles. Désactivable dans les réglages.";
const LT_PRIVACY = "Politique de confidentialité";
const LT_OFF = "LanguageTool est désactivé : la correction se fait sur les seules réponses connues.";
const LT_WAIT = "Correction en cours…";
const LT_PEND = "Des phrases n'ont pas pu être vérifiées par LanguageTool. Pour l'instant, la note compte les seules réponses connues.";
const LT_ASK = "Vérifier avec LanguageTool";
const LT_RETURN = "Hors ligne : la vérification sera proposée au retour du réseau.";
const LT_LIMIT = "Trop de vérifications en une minute. Réessaie dans un instant.";
const LT_FAIL = "LanguageTool ne répond pas pour l'instant. Réessaie plus tard.";
const LT_OK = "Phrase acceptée : elle contient les mots attendus et LanguageTool n'y signale aucune erreur. Autre version possible :";
const LT_KW = "LanguageTool n'y signale aucune erreur, mais il manque des mots attendus.";
const LT_BY = "Explications fournies par";
const LT_SET_T = "Correction avec LanguageTool";
const LT_SET_D = "À la remise d'un examen, envoie tes phrases à traduire à languagetool.org. Désactivé, seules les réponses connues comptent.";
const LT_LINK = `<a href="https://languagetool.org" target="_blank" rel="noopener" data-notr>languagetool.org</a>`;
function ltOn() { return settings.lt !== false; }
function ltBytes(s) { return new TextEncoder().encode(String(s || "")).length; }
// log: [time, bytes] of the recent calls
function ltAllowed(log, bytes, now) {
  const recent = log.filter(e => now - e[0] < LT_MAX.ms);
  return bytes <= LT_MAX.perReq && recent.length < LT_MAX.reqs && recent.reduce((n, e) => n + e[1], bytes) <= LT_MAX.bytes;
}
// keywords: [[form, other form], …]; case is free, ae/oe/ue/ss stand for umlauts and ß as in the rest of the exam
function hasKeywords(keywords, typed) {
  const U = deTokens(typed).map(t => t.toLowerCase());
  return keywords.every(forms => forms.some(f => U.some(t => deWordEq(f.toLowerCase(), t))));
}
// short answers and sentences already right never leave the device
function ltQueue(last, u) {
  if (!ltOn()) return [];
  return last.ids.filter(id => {
    const q = examQuestion(u, id);
    return !!q && q.cat === "sent" && last.pts[id][0] < 1 && answered(q, last.a[id]) && ltBytes(last.a[id]) <= LT_MAX.perReq;
  });
}
// the form body keeps the request simple, so no CORS preflight (the API answers 400 to OPTIONS)
async function ltCheck(text) {
  const ctl = new AbortController(), timer = setTimeout(() => ctl.abort(), LT_TIMEOUT);
  try {
    const res = await fetch(LT_URL, { method: "POST", body: new URLSearchParams({ text, language: "de-DE" }), credentials: "omit", referrerPolicy: "no-referrer", cache: "no-store", signal: ctl.signal });
    if (!res.ok) throw Object.assign(new Error("LanguageTool " + res.status), { status: res.status });
    const data = await res.json();
    if (!Array.isArray(data.matches)) throw new Error("LanguageTool: unexpected answer");
    return data.matches;
  } finally { clearTimeout(timer); }
}
// the point needs both a clean sentence and the keywords; a known mark is never lowered
function ltApply(last, id, q, matches) {
  const text = last.a[id];
  last.lt = last.lt || {};
  if (matches.length) last.lt[id] = { m: matches.slice(0, 5).map(m => [m.message, text.substr(m.offset, m.length), ((m.replacements || [])[0] || {}).value || ""]) };
  else if (!hasKeywords(q.s.keywords, text)) last.lt[id] = { kw: 1 };
  else { last.score += 1 - last.pts[id][0]; last.pts[id] = [1]; last.lt[id] = { ok: 1 }; }
}
async function ltLoop(uid) {
  const last = XD.last[uid], u = UNIT_BY_ID[uid];
  if (!last || !last.pend) return "done";
  const before = last.score;
  let status = "done";
  while (last.pend.length) {
    const id = last.pend[0], q = examQuestion(u, id);
    if (!q) { last.pend.shift(); continue; }
    const text = last.a[id], now = Date.now(), bytes = ltBytes(text);
    XD.ltLog = (XD.ltLog || []).filter(e => now - e[0] < LT_MAX.ms);
    if (!ltAllowed(XD.ltLog, bytes, now)) { status = "limit"; break; }
    XD.ltLog.push([now, bytes]);
    let matches;
    try { matches = await ltCheck(text); } catch (e) { status = e.status === 429 ? "limit" : "error"; break; }
    ltApply(last, id, q, matches);
    last.pend.shift();
  }
  if (last.score !== before) { P.prog = P.prog || {}; recordExam(P.prog, uid, last.score); persist(); }
  saveXD();
  return status;
}
let ltRunning = null;
function ltVerify(uid) {
  if (!ltRunning) ltRunning = ltLoop(uid).catch(() => { saveXD(); return "error"; }).finally(() => { ltRunning = null; });
  return ltRunning;
}
// the paper is already marked and saved on the known answers: closing the app here loses nothing
function ltRun(uid) {
  EX = { u: uid, screen: "check" };
  view = "exam"; render(); window.scrollTo(0, 0);
  return ltVerify(uid).then(status => {
    if (view !== "exam" || !EX || EX.u !== uid || EX.screen !== "check") return;
    EX.screen = "result"; EX.lt = status;
    render(); window.scrollTo(0, 0);
  });
}
const ltPending = uid => ltOn() && XD.last[uid] && XD.last[uid].pend ? XD.last[uid].pend.length : 0;
function ltInfoHTML() {
  return ltOn() ? `<p class="note"><span>${LT_INFO}</span> ${LT_LINK} · <a href="https://languagetool.org/legal/privacy" target="_blank" rel="noopener">${LT_PRIVACY}</a></p>` : `<p class="note">${LT_OFF}</p>`;
}
function ltPendingHTML(uid) {
  const n = ltPending(uid);
  if (!n) return "";
  const why = !navigator.onLine ? "" : EX && EX.lt === "limit" ? LT_LIMIT : EX && EX.lt === "error" ? LT_FAIL : "";
  return `<p class="note">${LT_PEND}</p>${why ? `<p class="note">${why}</p>` : ""}${navigator.onLine ? `<button class="secondary" id="exlt" data-exlt="${uid}">${LT_ASK} · ${n}</button>` : `<p class="note">${LT_RETURN}</p>`}`;
}
window.addEventListener("online", ltNetworkChanged);
window.addEventListener("offline", ltNetworkChanged);
function ltNetworkChanged() { if (view === "exam" ? EX && EX.screen === "result" : view === "home" && settings.sec === "prog") render(); }

// marked at once on the known answers and saved; LanguageTool can only add to that
function examSubmit() {
  const u = UNIT_BY_ID[EX.u], x = XD.exams[EX.u];
  const pts = {}, uid = EX.u;
  let score = 0;
  for (const id of x.ids) {
    const r = examMark(examQuestion(u, id), x.a[id]);
    pts[id] = r.near ? [r.pts, 1] : [r.pts];
    score += r.pts;
  }
  P.prog = P.prog || {};
  const wasOk = !!(P.prog[uid] || {}).ok;
  recordExam(P.prog, uid, score);
  const last = XD.last[uid] = { ids: x.ids, a: x.a, pts, score, ms: x.ms, fix: !wasOk && !examPassed(score) ? 1 : 0, fixed: {}, fixA: {}, pend: [] };
  last.pend = ltQueue(last, u);
  delete XD.exams[uid];
  saveXD();
  persist(); // only P.prog changed: no Leitner box, no error notebook, no daily goal
  if (last.pend.length) return ltRun(uid);
  EX.screen = "result";
  render(); window.scrollTo(0, 0);
  return Promise.resolve();
}
function scoreText(n) { return uiLang() === "en" ? String(n) : String(n).replace(".", ","); }
function examCorrRow(u, last, id) {
  const q = examQuestion(u, id);
  if (!q) return "";
  const p = last.pts[id], a = last.a[id];
  const typed = Array.isArray(a) ? a.filter(Boolean).join(" · ") : a;
  const v = (last.lt || {})[id];
  const diff = q.cat === "sent" && answered(q, a) && !(v && v.ok) ? examMark(q, a) : null;
  const right = diff ? diff.marks.map(([w, ok]) => ok ? esc(w) : `<b class="miss">${esc(w)}</b>`).join(" ") : esc(examAnswerText(q));
  const f = examFiche(q);
  return `<div class="corr">
    <span class="pill${p[0] === 1 ? " pill-ok" : ""} pts num">${scoreText(p[0])} pt</span>
    ${examPrompt(q)}
    <div class="yours">Ta réponse : <span lang="de">${typed ? esc(typed) : "–"}</span></div>
    ${v && v.ok ? `<div class="yours">${LT_OK}</div>` : ""}
    <div class="right" lang="de">${right}</div>
    ${v && v.kw ? `<div class="yours">${LT_KW}</div>` : ""}
    ${v && v.m ? `<ul class="ltm" lang="de">${v.m.map(([msg, bad, fix]) => `<li>${esc(msg)}${bad && fix ? ` <b>${esc(bad)} → ${esc(fix)}</b>` : ""}</li>`).join("")}</ul>` : ""}
    ${diff && diff.extra.length ? `<div class="yours">En trop : <span lang="de">${esc(diff.extra.join(" "))}</span></div>` : ""}
    ${p[1] ? `<div class="yours">Une lettre fausse, comptée juste. Orthographe exacte ci-dessus.</div>` : ""}
    ${f ? ficheLink(f) : ""}
  </div>`;
}
function examResultView(u) {
  const last = XD.last[u.id], ok = examPassed(last.score), rec = progress()[u.id] || {};
  const rows = last.ids.filter(id => last.pts[id][0] < 1 || last.pts[id][1] || ((last.lt || {})[id] || {}).ok);
  const over = last.ms > EXAM_MS;
  const fix = mustRewrite(u.id), n = rewriteLeft(u.id).length;
  return `<section class="section">
      <span class="label" data-notr>${esc(u.title)}</span>
      <div class="score"><b>${scoreText(last.score)}/40</b><span>${ok ? "Examen réussi." : `Il faut ${EXAM_PASS} points sur 40 pour valider.`}</span></div>
      ${rec.ok ? `<p class="note good-note">Unité validée · meilleur score : ${scoreText(rec.best)}/40</p>` : ""}
      ${over ? `<p class="note">Temps indicatif dépassé de ${Math.floor(last.ms / 60000) - 60} min, sans pénalité.</p>` : ""}
    </section>
    ${ltPendingHTML(u.id)}
    ${fix ? `<p class="note">Pour repasser l'examen, réécris d'abord chaque point manqué. Le nouvel examen les reprendra.</p><button class="primary" id="exfix">Réécrire mes erreurs · ${n}</button>` : ""}
    ${rows.length ? `<section class="section"><span class="label">Corrigé</span>${Object.keys(last.lt || {}).length ? `<p class="note">${LT_BY} ${LT_LINK}</p>` : ""}<div class="missed">${rows.map(id => examCorrRow(u, last, id)).join("")}</div></section>` : ""}
    <div class="row2"><button class="secondary" id="home">Programme</button>${fix ? "" : `<button class="primary" data-exam="${u.id}">Repasser l'examen</button>`}</div>`;
}
function examFixView(u) {
  const last = XD.last[u.id], ids = missedIds(last).filter(id => examQuestion(u, id));
  const left = rewriteLeft(u.id).length;
  return `<button class="backlink" id="home">← Programme</button>
    <section class="section">
      <span class="label">Réécrire mes erreurs · ${left}</span>
      <p class="note">Recopie chaque point correctement. Le nouvel examen s'ouvre quand tout est juste.</p>
    </section>
    ${ltPendingHTML(u.id)}
    ${ids.map((id, n) => {
      const q = examQuestion(u, id), done = last.fixed[id], f = examFiche(q);
      return `<section class="exo"><div class="qkind"><span class="label">${EX_LABEL[q.cat]}</span></div>${examPrompt(q)}
        <div class="right" lang="de"><b>${esc(examAnswerText(q))}</b></div>
        <div class="exo-item typebox ${done ? "r-ok" : last.tried && last.tried[id] ? "r-ko" : ""}">${examFields(q, last.fixA[id], "fix" + n + "-", !!done)}
          ${done ? `<div class="exo-fb">Juste</div>` : last.tried && last.tried[id] ? `<div class="exo-fb">Pas encore</div>` : ""}</div>
        ${f ? ficheLink(f) : ""}</section>`;
    }).join("")}
    ${left ? `${UML_KEYS}<button class="primary" id="excheck">Vérifier</button>` : `<button class="primary" data-exam="${u.id}">Passer le nouvel examen</button>`}`;
}
function examInput(el) {
  const id = el.dataset.exid;
  if (!id || !EX) return;
  // an answer is a string, or [word, plural] when the question has a second field
  const q = examQuestion(UNIT_BY_ID[EX.u], id);
  const store = EX.screen === "fix" ? XD.last[EX.u].fixA : XD.exams[EX.u].a;
  if (hasPlural(q)) { const cur = store[id] || ["", ""]; cur[+el.dataset.exa] = el.value; store[id] = cur; }
  else store[id] = el.value;
  if (EX.screen !== "fix") {
    const x = XD.exams[EX.u], left = document.getElementById("exover");
    if (left) left.textContent = `Vue d'ensemble · ${x.ids.filter(q => !answered(examQuestion(UNIT_BY_ID[EX.u], q), x.a[q])).length} sans réponse`;
  }
  saveXD();
}
function examGo(step) {
  const x = XD.exams[EX.u];
  if (!x || EX.screen !== "q") return;
  if (x.i + step >= x.ids.length) { EX.screen = "over"; render(); window.scrollTo(0, 0); return; }
  x.i = Math.max(0, x.i + step);
  saveXD(); render(); window.scrollTo(0, 0);
}
let exLastInput = null;
app.addEventListener("focusin", e => { if (e.target.dataset && e.target.dataset.exid) exLastInput = e.target; });
function programmeClick(t) {
  if (t.dataset.exam) { openExam(t.dataset.exam); return true; }
  if (t.dataset.exlt) { ltRun(t.dataset.exlt); return true; }
  if (t.dataset.exlast) { EX = { u: t.dataset.exlast, screen: "result" }; view = "exam"; render(); window.scrollTo(0, 0); return true; }
  if (t.dataset.punit !== undefined) { progUnit = t.dataset.punit || null; render(); window.scrollTo(0, 0); return true; }
  if (t.dataset.uvx) { const [k, th] = t.dataset.uvx.split(":"); startVX(k, th); return true; }
  if (view !== "exam" || !EX) return false;
  if (t.dataset.exins) {
    const ti = exLastInput && document.contains(exLastInput) && !exLastInput.disabled ? exLastInput : app.querySelector("[data-exid]:not(:disabled)");
    if (!ti) return true;
    const s = ti.selectionStart ?? ti.value.length, en = ti.selectionEnd ?? s;
    ti.value = ti.value.slice(0, s) + t.dataset.exins + ti.value.slice(en);
    ti.focus(); ti.setSelectionRange(s + 1, s + 1);
    examInput(ti);
    return true;
  }
  if (t.id === "exprev") { examGo(-1); return true; }
  if (t.id === "exover") { EX.screen = "over"; render(); window.scrollTo(0, 0); return true; }
  if (t.id === "exback") { EX.screen = "q"; render(); return true; }
  if (t.dataset.exgo !== undefined) { XD.exams[EX.u].i = +t.dataset.exgo; EX.screen = "q"; saveXD(); render(); window.scrollTo(0, 0); return true; }
  if (t.id === "exsubmit") { examSubmit(); return true; }
  if (t.id === "exfix") { EX.screen = "fix"; render(); window.scrollTo(0, 0); return true; }
  if (t.id === "excheck") {
    const u = UNIT_BY_ID[EX.u], last = XD.last[EX.u];
    last.tried = last.tried || {};
    for (const id of rewriteLeft(EX.u)) {
      const r = examMark(examQuestion(u, id), last.fixA[id]);
      // a rewrite must be right as written: no tolerated letter
      if (r.pts === 1 && !r.near) last.fixed[id] = 1; else last.tried[id] = 1;
    }
    saveXD(); render();
    return true;
  }
  return false;
}

/* ---------- the Programme page ---------- */
let progUnit = null; // the unit opened from the list; otherwise the current one
function unitCard(u, state) {
  const rec = progress()[u.id] || {}, running = XD.exams[u.id], last = XD.last[u.id];
  const fix = mustRewrite(u.id), left = fix ? rewriteLeft(u.id).length : 0;
  const examBtn = running ? `Reprendre l'examen · ${running.i + 1}/${running.ids.length}`
    : fix ? `Réécrire mes erreurs · ${left}` : rec.ok ? "Repasser l'examen" : "Passer l'examen";
  const work = state === "next" ? [] : unitWork(u);
  const nextStep = work.findIndex(w => !w.done);
  return `<section class="section ucard">
      <span class="label">${state === "done" ? "Unité validée" : state === "next" ? "Prochaine unité" : "Unité en cours"} · <span data-notr>${esc(u.level)}</span></span>
      <h2 data-notr>${esc(u.title)}</h2>
      <p data-notr>${esc(u.desc)}</p>
      ${rec.best ? `<p>Meilleur score : ${scoreText(rec.best)}/40</p>` : ""}
      ${state === "next" ? `<p>Unité encore verrouillée. Tu peux passer son examen directement : le réussir la valide.</p>` : ""}
      ${work.length ? `<span class="label">Travail personnel</span><div class="plan">${work.map((w, i) => step(i + 1, w.done, w.attrs, w.title, w.sub, !rec.ok && i === nextStep)).join("")}</div>` : ""}
      <span class="label">Examen écrit</span>
      <p>40 questions écrites, durée indicative de 60 minutes, ${EXAM_PASS} points pour valider. Tu peux le passer quand tu veux.</p>
      ${ltInfoHTML()}
      <button class="cta" data-exam="${u.id}"><div><h2>${examBtn}</h2></div><span class="go">→</span></button>
      ${last && !running ? `<button class="trainlink" data-exlast="${u.id}">Voir mon dernier corrigé</button>` : ""}
      ${ltPending(u.id) && navigator.onLine ? `<button class="trainlink" data-exlt="${u.id}">${LT_ASK} · ${ltPending(u.id)}</button>` : ""}
    </section>`;
}
function programmeView() {
  const st = unitStatus(unitIds(), progress());
  // past the last unit, a unit skipped by an exam taken directly is what is left to do
  const home = st.current || unitIds().find(id => st.state[id] === "open");
  const focus = progUnit && UNIT_BY_ID[progUnit] && st.state[progUnit] !== "locked" ? progUnit : home;
  const AW = activeWords(), due = dueCount(AW), doneN = P.days[String(today())] || 0, nErr = errCount(), days = streak();
  const pills = { done: "Validée", current: "En cours", open: "Ouverte", next: "Examen possible", locked: "Verrouillée" };
  const list = UNITS.map((u, i) => {
    const s = st.state[u.id], rec = progress()[u.id] || {};
    return `<button class="frow urow" data-punit="${u.id}"${s === "locked" ? " disabled" : ""}><span class="fnum">${i + 1}</span><span class="ftitle"><span data-notr>${esc(u.title)}</span><small data-notr>${esc(u.level)}</small></span><span class="pill${s === "done" ? " pill-ok" : ""}">${XD.exams[u.id] ? "Examen en cours" : pills[s]}${rec.best ? ` · ${scoreText(rec.best)}/40` : ""}</span></button>`;
  }).join("");
  return `<div class="dcols"><div class="dcol">
      ${focus && focus !== home ? `<button class="backlink" data-punit="">← Unité en cours</button>` : ""}
      ${focus ? unitCard(UNIT_BY_ID[focus], st.state[focus]) : `<section class="section ucard"><span class="label">Programme</span><h2>Toutes les unités disponibles sont validées</h2><p>Bravo. D'autres unités arriveront : en attendant, les autres rubriques restent ouvertes pour t'entraîner.</p></section>`}
    </div>
    <div class="dcol">
      <section class="stats" aria-label="Aujourd'hui">
        <div class="stat"><b>${days}</b><span>jour${days > 1 ? "s" : ""} de suite</span></div>
        <div class="stat"><b class="num">${Math.min(doneN, GOAL)}/${GOAL}</b><span>objectif du jour</span></div>
        <button class="stat" data-start="review"><b>${due}</b><span>mots à revoir</span></button>
      </section>
      ${nErr ? hubCard('data-go="mots:err"', "Revoir mes erreurs", nErr > 1 ? "erreurs à corriger" : "erreur à corriger", `<i class="bbadge num">${Math.min(nErr, 99)}</i>`) : ""}
      <section class="section"><span class="label">Toutes les unités</span><div class="flist">${list}</div></section>
    </div></div>`;
}

/* ---------- backup: export / import progress ---------- */
function backupText() { return JSON.stringify({ app: "wortschatz-alltag", v: 1, exported: new Date().toISOString(), P }); }
function bmsg(t) { const el = document.getElementById("bmsg"); if (el) el.textContent = t; }
async function exportProgress() {
  const text = backupText();
  const name = "wortschatz-progression-" + new Date().toISOString().slice(0, 10) + ".json";
  const ta0 = document.getElementById("bcode"); if (ta0) ta0.value = text;
  if (window.claude && window.claude.use) {
    // inside claude.ai the page cannot download directly: the viewer confirms the save
    const dl = await window.claude.use("downloads").catch(() => null);
    if (dl) {
      try { await dl.save({ filename: name, data: text }); bmsg("Fichier « " + name + " » enregistré."); }
      catch (e) { bmsg(e && e.code === "declined" ? "Enregistrement annulé." : "L'enregistrement n'est pas possible ici : utilise le copier-coller ci-dessus."); }
      return;
    }
    bmsg("L'enregistrement de fichier n'est pas possible ici : utilise le copier-coller ci-dessus.");
    return;
  }
  try {
    const file = new File([text], name, { type: "application/json" });
    if (navigator.canShare && navigator.canShare({ files: [file] })) { await navigator.share({ files: [file], title: "Progression Wortschatz Alltag" }); bmsg("Sauvegarde prête. Choisis « Enregistrer dans Fichiers » pour la garder."); return; }
  } catch (e) { if (e && e.name === "AbortError") return; }
  try {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([text], { type: "application/json" }));
    a.download = name; document.body.appendChild(a); a.click(); a.remove();
    bmsg("Fichier « " + name + " » téléchargé. Si rien ne s'est passé, utilise le copier-coller ci-dessus.");
  } catch (e) { bmsg("Le téléchargement n'est pas possible ici : utilise le copier-coller ci-dessus."); }
  const ta = document.getElementById("bcode"); if (ta) ta.value = text;
}
function importProgress(text) {
  let data;
  try { data = JSON.parse(text.trim()); } catch (e) { bmsg("Ce fichier ou ce code n'est pas une sauvegarde valide."); return; }
  const other = data && data.P ? data.P : data;
  if (!other || typeof other !== "object" || !other.w) { bmsg("Ce fichier ou ce code n'est pas une sauvegarde de Wortschatz Alltag."); return; }
  merge(other);
  syncMine(); persist(); render();
  bmsg(`Progression importée : ${Object.keys(other.w).length} mots, ${Object.keys(other.g || {}).length} fiches. Elle a été fusionnée avec celle de cet appareil.`);
}

/* ---------- interface language: French source, English and Spanish translated at display time ---------- */
// Each rendered text node and placeholder/aria-label/title is looked up in the dictionary; content
// (German, word translations, sheets) is marked lang="de" or data-notr and never translated.
const I18N = {"en": {"W": "W", "Wortschatz Alltag": "Wortschatz Alltag", "Tous niveaux": "All levels", "Réglages": "Settings", "jour de suite": "day in a row", "mots maîtrisés / {n}": "words mastered / {n}", "fiches acquises / {n}": "sheets learned / {n}", "Objectif du jour": "Today's goal", "Révision des mots": "Word review", "{n} nouveaux mots à découvrir": "{n} new words to discover", "Fiche du jour": "Today's sheet", "Phrases du quotidien": "Everyday phrases", "{n} phrases à dire en allemand": "{n} phrases to say in German", "À revoir": "To review", "Rien à revoir pour l'instant. Les erreurs de chaque exercice apparaîtront ici.": "Nothing to review for now. Mistakes from each exercise will show up here.", "Aujourd'hui": "Today", "Mots": "Words", "Grammaire": "Grammar", "Verbes": "Verbs", "Phrases": "Phrases", "Progression": "Progress", "Rubriques": "Sections", "Fiche de grammaire": "Grammar sheet", "Tableaux des déclinaisons": "Declension tables", "Niveau": "Level", "A1 → B1": "A1 → B1", "B2": "B2", "Passage automatique": "Auto-advance", "Après une bonne réponse, la question suivante s'affiche seule.": "After a correct answer, the next question shows up on its own.", "Lecture à voix haute": "Read aloud", "La bonne réponse est prononcée après chaque question.": "The correct answer is read aloud after each question.", "Afficher IKI": "Show IKI", "Ajoute la rubrique IKI (cours de l'école) à la barre de navigation.": "Adds the IKI section (school lessons) to the navigation bar.", "Progression enregistrée sur cet appareil": "Progress saved on this device", "Sauvegarde": "Backup", "Enregistre ta progression dans un fichier (Fichiers, iCloud Drive…) ou recharge-la, par exemple sur un nouveau téléphone.": "Save your progress to a file (Files, iCloud Drive…) or load it back, for example on a new phone.", "Exporter": "Export", "Importer": "Import", "Ou par copier-coller": "Or by copy and paste", "Copie ce code et colle-le dans l'autre version de l'app, puis touche «{q}».": "Copy this code and paste it into the other version of the app, then tap “{q}”.", "Copier le code": "Copy code", "Importer ce code": "Import this code", "Fermer": "Close", "Code de sauvegarde": "Backup code", "Ce fichier ou ce code n'est pas une sauvegarde valide.": "This file or code isn't a valid backup.", "Ce fichier ou ce code n'est pas une sauvegarde de Wortschatz Alltag.": "This file or code isn't a Wortschatz Alltag backup.", "Quiz": "Quiz", "Genre": "Gender", "Pluriels": "Plurals", "Lexique": "Word list", "QCM": "Multiple choice", "{n} choix": "{n} choices", "Article": "Article", "der, die, das": "der, die, das", "Saisie": "Typing", "écrire le mot": "write the word", "Cartes": "Cards", "auto-évaluation": "self-assessment", "Les deux sens": "Both ways", "Allemand → français": "German → English", "Français → allemand": "English → German", "Choisis un thème · {n} questions": "Choose a topic · {n} questions", "Tous les thèmes": "All topics", "Premiers pas": "First steps", "Temps & calendrier": "Time & calendar", "Nombres": "Numbers", "Famille & entourage": "Family & friends", "Logement": "Housing", "Cuisine & aliments": "Kitchen & food", "Courses": "Shopping", "Restaurant & café": "Restaurant & café", "Transports & ville": "Transport & city", "Travail": "Work", "Santé & corps": "Health & body", "Administration & argent": "Admin & money", "Vêtements": "Clothes", "Loisirs & météo": "Leisure & weather", "Verbes essentiels": "Essential verbs", "Adjectifs utiles": "Useful adjectives", "Mots-outils": "Function words", "Monde du travail": "World of work", "Droit & démarches": "Law & paperwork", "Santé & bien-être": "Health & wellbeing", "Société, politique & médias": "Society, politics & media", "Environnement & énergie": "Environment & energy", "Sentiments & relations": "Feelings & relationships", "Argumenter & nuancer": "Arguing & nuance", "Mots à préposition": "Words with prepositions", "Verbes à préposition": "Verbs with prepositions", "Adjectifs & adverbes nuancés": "Nuanced adjectives & adverbs", "Expressions idiomatiques": "Idioms", "maîtrisé": "mastered", "en cours": "in progress", "Un mot est maîtrisé après {n} bonnes réponses espacées dans le temps.": "A word is mastered after {n} correct answers spaced out over time.", "Type d'exercice": "Exercise type", "Sens": "Direction", "Saluer, remercier, se faire comprendre": "Greeting, thanking, making yourself understood", "Jours, mois, saisons, moments de la journée": "Days, months, seasons, times of day", "Compter, payer, donner l'heure": "Counting, paying, telling the time", "Les proches, les voisins, la situation familiale": "Relatives, neighbors, family status", "Appartement, meubles, location": "Apartment, furniture, renting", "Ce qu'on mange, ce qu'on boit, la vaisselle": "What we eat and drink, dishes", "Magasins, caisse, prix": "Shops, checkout, prices", "Commander, payer, réserver": "Ordering, paying, booking", "Se déplacer, s'orienter": "Getting around, finding your way", "Bureau, contrat, candidature": "Office, contract, job application", "Chez le médecin, à la pharmacie": "At the doctor's, at the pharmacy", "Démarches, banque, courrier": "Paperwork, bank, mail", "S'habiller, essayer, acheter": "Getting dressed, trying on, buying", "Temps qu'il fait, sorties, sport": "Weather, going out, sports", "Les {n} verbes du quotidien, avec leurs formes": "The {n} everyday verbs, with their forms", "Décrire les choses et les gens": "Describing things and people", "Questions, liaisons, quantités": "Questions, linking words, quantities", "Carrière, contrat, négociation": "Career, contract, negotiation", "Contrats, recours, assurances, impôts": "Contracts, appeals, insurance, taxes", "Symptômes, traitements, prévention": "Symptoms, treatments, prevention", "Actualité, débats, institutions": "News, debates, institutions", "Climat, tri, consommation": "Climate, recycling, consumption", "Caractère, émotions, vie à deux": "Personality, emotions, life as a couple", "Connecteurs et formules pour donner son avis": "Connectors and phrases for giving your opinion", "Les rections à connaître par cœur": "The verb + case combos to know by heart", "Pour décrire avec précision": "For describing things precisely", "Ce que les Allemands disent vraiment": "What Germans really say", "der, die ou das ?": "der, die or das?", "{n} noms à la suite. Une bonne réponse passe directement au nom suivant.": "{n} nouns in a row. A correct answer moves straight to the next noun.", "Jouer →": "Play →", "record de bonnes réponses d'affilée": "best streak of correct answers", "noms à entraîner": "nouns to practice", "Les terminaisons qui donnent le genre": "Endings that give away the gender", "der": "der", "· Masculin": "· Masculine", "jours, mois, saisons": "days, months, seasons", "-ling": "-ling", "-ismus": "-ismus", "-or": "-or", "die": "die", "· Féminin": "· Feminine", "-ung": "-ung", "-heit, -keit": "-heit, -keit", "-schaft": "-schaft", "-ion, -tät": "-ion, -tät", "-ik, -ie, -ei": "-ik, -ie, -ei", "-e (souvent)": "-e (often)", "das": "das", "· Neutre": "· Neuter", "-chen, -lein": "-chen, -lein", "-ment": "-ment", "-um": "-um", "-nis (souvent)": "-nis (often)", "Ge- (souvent)": "Ge- (often)", "Mot composé : c'est le dernier mot qui décide. das Haus + die Tür →": "Compound word: the last word decides. das Haus + die Tür →", "Haustür.": "Haustür.", "Fiche complète :": "Full sheet:", "S'entraîner par thème": "Practice by topic", "Temps & calendrier · {n}": "Time & calendar · {n}", "Nombres · {n}": "Numbers · {n}", "Famille & entourage · {n}": "Family & friends · {n}", "Logement · {n}": "Housing · {n}", "Cuisine & aliments · {n}": "Kitchen & food · {n}", "Courses · {n}": "Shopping · {n}", "Restaurant & café · {n}": "Restaurant & café · {n}", "Transports & ville · {n}": "Transport & city · {n}", "Travail · {n}": "Work · {n}", "Santé & corps · {n}": "Health & body · {n}", "Administration & argent · {n}": "Admin & money · {n}", "Vêtements · {n}": "Clothes · {n}", "Loisirs & météo · {n}": "Leisure & weather · {n}", "Monde du travail · {n}": "World of work · {n}", "Droit & démarches · {n}": "Law & paperwork · {n}", "Santé & bien-être · {n}": "Health & wellbeing · {n}", "Société, politique & médias · {n}": "Society, politics & media · {n}", "Environnement & énergie · {n}": "Environment & energy · {n}", "Sentiments & relations · {n}": "Feelings & relationships · {n}", "Trouve le pluriel": "Find the plural", "{n} noms : écris leur forme au pluriel.": "{n} nouns: write their plural form.", "noms travaillés / {n}": "nouns practiced / {n}", "réussis {n} fois de suite": "right {n} times in a row", "à revoir": "to review", "Les tendances à connaître": "Patterns to know", "Masculins : souvent": "Masculine: often", "-e": "-e", ", parfois avec umlaut. der Tisch → die Tische, der Stuhl → die Stühle.": ", sometimes with umlaut. der Tisch → die Tische, der Stuhl → die Stühle.", "Féminins : presque toujours": "Feminine: almost always", "-(e)n": "-(e)n", ". die Lampe → die Lampen, die Wohnung → die Wohnungen.": ". die Lampe → die Lampen, die Wohnung → die Wohnungen.", "Neutres courts : souvent": "Short neuter nouns: often", "-er": "-er", "avec umlaut. das Buch → die Bücher.": "with umlaut. das Buch → die Bücher.", "Mots en -er, -el, -en : souvent": "Words ending in -er, -el, -en: often", "sans terminaison": "no ending", ". der Lehrer → die Lehrer.": ". der Lehrer → die Lehrer.", "Mots étrangers et mots en voyelle :": "Foreign words and words ending in a vowel:", "-s": "-s", ". das Auto → die Autos.": ". das Auto → die Autos.", "Fiche :": "Sheet:", "+ Ajouter un mot à «{q}»": "+ Add a word to “{q}”", "Nom": "Noun", "Verbe": "Verb", "Autre / expression": "Other / expression", "Ajouter": "Add", "Tes mots sont enregistrés sur ton compte et reviennent dans la Révision du jour.": "Your words are saved to your account and come back in Today's review.", "masculin": "masculine", "féminin": "feminine", "neutre": "neuter", "pluriel": "plural", "Monde du travail · B2": "World of work · B2", "Droit & démarches · B2": "Law & paperwork · B2", "Santé & bien-être · B2": "Health & wellbeing · B2", "Société, politique & médias · B2": "Society, politics & media · B2", "Environnement & énergie · B2": "Environment & energy · B2", "Sentiments & relations · B2": "Feelings & relationships · B2", "Argumenter & nuancer · B2": "Arguing & nuance · B2", "Verbes à préposition · B2": "Verbs with prepositions · B2", "Adjectifs & adverbes nuancés · B2": "Nuanced adjectives & adverbs · B2", "Expressions idiomatiques · B2": "Idioms · B2", "Type": "Type", "Nom (ex. Staubsauger)": "Noun (e.g. Staubsauger)", "Pluriel (facultatif, ex. Staubsauger)": "Plural (optional, e.g. Staubsauger)", "Traduction en français": "Translation (in English)", "Chercher en allemand ou en français…": "Search in German or English…", "Fiches": "Sheets", "Déclinaisons": "Declension", "Fiche {n} ·": "Sheet {n} ·", "(nouvelle)": "(new)", "Ouvrir →": "Open →", "Fiches acquises": "Sheets learned", "Chaque fiche se termine par un exercice corrigé automatiquement. Une fiche est acquise à partir de {n} % de bonnes réponses ; elle te sera reproposée à relire trois semaines plus tard.": "Each sheet ends with an auto-graded exercise. A sheet counts as learned once you score {n}%; you'll be asked to reread it three weeks later.", "A1 · les bases": "A1 · the basics", "A1": "A1", "À découvrir": "To discover", "A1–A2": "A1–A2", "A2 · raconter, demander": "A2 · telling, asking", "A2": "A2", "A2–B1": "A2–B1", "B1 · argumenter, lire le courrier": "B1 · arguing, reading mail", "B1": "B1", "Pratique": "Practice", "B2 · nuancer, écrire, convaincre": "B2 · nuancing, writing, persuading", "B1–B2": "B1–B2", "{n} phrases : écris l'article et l'adjectif au bon cas.": "{n} sentences: write the article and adjective in the right case.", "Exercice": "Exercise", "Articles seuls": "Articles only", "Article + adjectif": "Article + adjective", "Cas": "Case", "Tous": "All", "Nominatif": "Nominative", "Accusatif": "Accusative", "Datif": "Dative", "Génitif": "Genitive", "nominatif": "nominative", "accusatif": "accusative", "datif": "dative", "génitif": "genitive", "Le tableau à connaître": "The table to know", "der / dieser": "der / dieser", "Masc.": "Masc.", "Fém.": "Fem.", "Neutre": "Neuter", "ein / kein / mein": "ein / kein / mein", "Réussite par cas": "Success by case", "Toutes": "All", "Chez le médecin": "At the doctor's", "Administration": "Admin", "Au téléphone": "On the phone", "Courses & magasins": "Shopping & stores", "Café & restaurant": "Café & restaurant", "Transports": "Transport", "Au travail": "At work", "Voisins & small talk": "Neighbors & small talk", "Banque & poste": "Bank & post office", "Remets la phrase dans l'ordre": "Put the sentence in order", "{n} phrases du quotidien : touche les mots dans le bon ordre.": "{n} everyday sentences: tap the words in the right order.", "phrases travaillés / {n}": "sentences practiced / {n}", "Les {n} places du verbe": "The {n} positions of the verb", "Phrase simple : le verbe conjugué est en": "Simple sentence: the conjugated verb goes in", "2e position": "2nd position", ". Morgen": ". Morgen", "fahre": "fahre", "ich nach Berlin.": "ich nach Berlin.", "Avec un modal, le parfait ou un verbe séparable : la 2e partie va": "With a modal, the present perfect or a separable verb: the 2nd part goes", "à la fin": "at the end", ". Ich": ". Ich", "muss": "muss", "Après weil, dass, ob, wenn : le verbe conjugué va": "After weil, dass, ob, wenn: the conjugated verb goes", "tout à la fin": "at the very end", ". …, dass ich angerufen": ". …, dass ich angerufen", "habe": "habe", "Parfois, plusieurs ordres sont corrects. L'exercice attend la phrase d'origine, qui est la plus naturelle.": "Sometimes several orders are correct. The exercise expects the original sentence, which is the most natural one.", "Situation": "Situation", "Conjugaison": "Conjugation", "Irréguliers": "Irregulars", "Quiz prép.": "Prep quiz", "{n} verbes à conjuguer au présent, au prétérit ou au parfait.": "{n} verbs to conjugate in the present, simple past or present perfect.", "Temps": "Tense", "Tout mélangé": "All mixed", "Présent": "Present", "Prétérit": "Simple past", "Parfait": "Present perfect", "Tous les verbes": "All verbs", "Séparables": "Separable", "verbes travaillés / {n}": "verbs practiced / {n}", "mots travaillés / {n}": "words practiced / {n}", "Au présent, les questions portent surtout sur les personnes où le verbe change (souvent du et er/sie/es). Au parfait, écris l'auxiliaire et le participe :": "In the present, questions mostly cover the persons where the verb changes (often du and er/sie/es). In the present perfect, write the auxiliary and the participle:", "bist gefahren": "bist gefahren", ". Pour un verbe séparable, écris aussi la particule :": ". For a separable verb, write the particle too:", "stehst auf": "stehst auf", "Touche un verbe pour voir toute sa conjugaison.": "Tap a verb to see its full conjugation.", "En couleur": "In color", ": les formes qui ne suivent pas la règle. Le parfait indique l'auxiliaire :": ": forms that don't follow the rule. The present perfect shows the auxiliary:", "hat": "hat", "(haben) ou": "(haben) or", "ist": "ist", "(sein). Pour les verbes séparables, la particule va à la fin de la phrase : ich": "(sein). For separable verbs, the particle goes at the end of the sentence: ich", "stehe": "stehe", "um {n} Uhr": "um {n} Uhr", "Niveau A1 · {n} verbes": "Level A1 · {n} verbs", "Prétérit avec du :": "Simple past with du:", "(à l'oral aussi": "(colloquially also", "Niveau A2 · {n} verbes": "Level A2 · {n} verbs", "Niveau B1 · {n} verbes": "Level B1 · {n} verbs", "Niveau B2 · {n} verbes": "Level B2 · {n} verbs", "Verbes séparables · {n} verbes": "Separable verbs · {n} verbs", "Chercher un verbe (allemand ou français)…": "Search for a verb (German or English)…", "Écouter": "Listen", "Quelle préposition ?": "Which preposition?", "{n} phrases à compléter. Pour an, auf, in, über, vor et unter, choisis aussi le cas.": "{n} sentences to complete. For an, auf, in, über, vor and unter, choose the case too.", "Apprends toujours le mot avec sa préposition et son cas, comme un seul bloc :": "Always learn the word with its preposition and case, as one block:", "warten auf + Akk.": "warten auf + Akk.", "La liste complète est dans l'onglet Prépositions.": "The full list is in the Prepositions tab.", "Repères pour le cas": "Case guidelines", ": toujours accusatif.": ": always accusative.", ": presque toujours accusatif (sauf bestehen auf + D).": ": almost always accusative (except bestehen auf + D).", "mit, von, zu, bei, nach, aus, vor": "mit, von, zu, bei, nach, aus, vor", ": toujours datif.": ": always dative.", "für, gegen": "für, gegen", ": accusatif pour penser, se souvenir, s'habituer, croire, die Erinnerung ; datif pour participer, travailler, douter, souffrir, das Interesse, die Freude, interessiert.": ": accusative for thinking, remembering, getting used to, believing, die Erinnerung; dative for taking part, working, doubting, suffering, das Interesse, die Freude, interessiert.", "Chercher un mot ou une préposition…": "Search for a word or preposition…", "Situations": "Situations", "Dictée": "Dictation", "Apprendre ces phrases": "Learn these phrases", "{n} cartes : tu lis la phrase en français, tu la dis en allemand, puis tu vérifies.": "{n} cards: read the sentence in English, say it in German, then check.", "Chez le médecin · Rendez-vous, symptômes, pharmacie": "At the doctor's · Appointments, symptoms, pharmacy", "Administration · Bürgeramt, papiers, formulaires": "Admin · Bürgeramt, papers, forms", "Logement · Propriétaire, réparations, voisinage": "Housing · Landlord, repairs, neighbors", "Au téléphone · Appeler, laisser un message": "On the phone · Calling, leaving a message", "Courses & magasins · Supermarché, boulangerie, retours": "Shopping & stores · Supermarket, bakery, returns", "Café & restaurant · Réserver, commander, payer": "Café & restaurant · Booking, ordering, paying", "Transports · Train, bus, trajets": "Transport · Train, bus, journeys", "Au travail · Collègues, réunions, absences": "At work · Colleagues, meetings, absences", "Voisins & small talk · Se présenter, discuter, rendre service": "Neighbors & small talk · Introducing yourself, chatting, helping out", "Banque & poste · Compte, colis, courrier": "Bank & post office · Account, parcels, mail", "{n} phrases lues à voix haute : écris ce que tu entends.": "{n} sentences read aloud: write what you hear.", "Tu peux réécouter autant de fois que tu veux, et aussi au ralenti. Les majuscules et la ponctuation ne comptent pas, mais les umlauts et le ß, si. La voix dépend de ton appareil.": "You can replay as many times as you like, slowed down too. Capitals and punctuation don't count, but umlauts and ß do. The voice depends on your device.", "noms à entraîner (A1 → B1)": "nouns to practice (A1 → B1)", "noms à entraîner (B2)": "nouns to practice (B2)", "{n} verbes à conjuguer au présent.": "{n} verbs to conjugate in the present.", "{n} verbes à conjuguer au prétérit.": "{n} verbs to conjugate in the simple past.", "{n} verbes à conjuguer au parfait.": "{n} verbs to conjugate in the present perfect.", "Aucun verbe ne correspond.": "No matching verbs.", "{n} phrases : écris l'article au bon cas.": "{n} sentences: write the article in the right case.", "Infinitif (ex. abholen)": "Infinitive (e.g. abholen)", "Formes (facultatif) : holt ab · holte ab · hat abgeholt": "Forms (optional): holt ab · holte ab · hat abgeholt", "Mot ou expression en allemand": "Word or expression in German", "{n} résultat": "{n} result", "Aucun mot ne correspond.": "No matching words.", "«{q}» est déjà dans l'app (thème Logement).": "“{q}” is already in the app (Housing topic).", "«{q}» ajouté. Tu as {n} mot perso.": "“{q}” added. You have {n} custom word.", "Mes mots": "My words", "✕ Quitter": "✕ Quit", "Traduis en allemand": "Translate into German", "Quitter": "Quit", "Super!": "Super!", "Continuer": "Continue", "Traduis en français": "Translate into English", "Pas tout à fait": "Not quite", "· pluriel :": "· plural:", "Revoir la règle": "Review the rule", "Genau!": "Genau!", "Exemple": "Example", "Voir le résultat": "See results", "QCM · Tous les thèmes": "Multiple choice · All topics", "Les mots ratés reviendront dans ta prochaine révision.": "Missed words will come back in your next review.", "À retenir": "Remember", "Accueil": "Home", "Encore une série": "One more round", "Richtig!": "Richtig!", "· toujours au pluriel": "· always plural", "Quel article ?": "Which article?", "· pas de pluriel courant": "· no common plural", "Exception : les noms commençant par Ge- sont souvent neutres, mais pas ce mot.": "Exception: nouns starting with Ge- are often neuter, but not this one.", "Règle : les noms en -ung sont toujours féminins.": "Rule: nouns ending in -ung are always feminine.", "Exception : les noms en -e sont souvent féminins, mais pas ce mot.": "Exception: nouns ending in -e are often feminine, but not this one.", "Règle : les noms en -e sont souvent féminins.": "Rule: nouns ending in -e are often feminine.", "Article · Tous les thèmes": "Article · All topics", "Sehr gut!": "Sehr gut!", "Règle : les noms en -heit sont toujours féminins.": "Rule: nouns ending in -heit are always feminine.", "Règle : les noms commençant par Ge- sont souvent neutres.": "Rule: nouns starting with Ge- are often neuter.", "Écris en allemand": "Write in German", "Avec l'article : der, die ou das": "With the article: der, die or das", "ä": "ä", "ö": "ö", "ü": "ü", "ß": "ß", "Je ne sais pas": "I don't know", "Valider": "Check", "der / die / das …": "der / die / das …", "Ta réponse": "Your answer", "Mauvais article.": "Wrong article.", "Il manque l'article.": "The article is missing.", "À l'infinitif": "In the infinitive", "Presque parfait": "Almost perfect", "Orthographe exacte ci-dessous.": "Exact spelling below.", "Saisie · Tous les thèmes": "Typing · All topics", "Tu connais ce mot ?": "Do you know this word?", "Voir la traduction": "See translation", "Je savais": "I knew it", "pluriel :": "plural:", "Cartes · Tous les thèmes": "Cards · All topics", "Sans faute. Ausgezeichnet !": "No mistakes. Ausgezeichnet!", "Série": "Streak", "· record {n}": "· best {n}", "Zzzwort": "Zzzwort", "Règle : les noms en -keit sont toujours féminins.": "Rule: nouns ending in -keit are always feminine.", "Règle : les jours, les mois et les saisons sont toujours masculins.": "Rule: days, months and seasons are always masculine.", "Genre · Tous les thèmes": "Gender · All topics", "Meilleure série de la partie :": "Best streak this round:", "· record :": "· best:", "Règle : les noms en -ie sont souvent féminins.": "Rule: nouns ending in -ie are often feminine.", "Règle : les noms en -schaft sont toujours féminins.": "Rule: nouns ending in -schaft are always feminine.", "Révision du jour": "Today's review", "Conjugue": "Conjugate", "Parfait · A1 · séparable": "Present perfect · A1 · separable", "wir": "wir", "auxiliaire + participe": "auxiliary + participle", "· parfait": "· present perfect", "er": "er", "· parfait · ta réponse :": "· present perfect · your answer:", "Parfait · B1 · séparable": "Present perfect · B1 · separable", "ihr": "ihr", "ich": "ich", "Parfait · A2 · séparable": "Present perfect · A2 · separable", "sie": "sie", "du": "du", "Les ratés reviendront dans tes prochaines séries.": "Missed ones will come back in your next rounds.", "Retour": "Back", "est juste. Avec quel cas ?": "is right. Which case?", "+ Akkusativ": "+ Akkusativ", "+ Dativ": "+ Dativ", "La préposition était juste, mais le cas est le akkusativ.": "The preposition was right, but the case is akkusativ.", "La préposition était juste, mais le cas est le dativ.": "The preposition was right, but the case is dativ.", "Ici, la préposition est contractée avec l'article.": "Here, the preposition is contracted with the article.", "Écris l'article et l'adjectif déclinés à la place de l'encadré.": "Write the declined article and adjective in place of the box.", "Voir les tableaux de la règle": "See the rule tables", "ex. dem neuen": "e.g. dem neuen", "Génitif · neutre · après ein / kein / mein": "Genitive · neuter · after ein / kein / mein", "Génitif · masculin · après der / dieser · ta réponse :": "Genitive · masculine · after der / dieser · your answer:", "Génitif · masculin · après ein / kein / mein": "Genitive · masculine · after ein / kein / mein", "Génitif · neutre · après ein / kein / mein · ta réponse :": "Genitive · neuter · after ein / kein / mein · your answer:", "Génitif · féminin · après der / dieser": "Genitive · feminine · after der / dieser", "Génitif · féminin · après ein / kein / mein · ta réponse :": "Genitive · feminine · after ein / kein / mein · your answer:", "Génitif · masculin · après der / dieser": "Genitive · masculine · after der / dieser", "Génitif · féminin · après der / dieser · ta réponse :": "Genitive · feminine · after der / dieser · your answer:", "Le pluriel ?": "The plural?", "· -n": "· -n", "· -s · ta réponse :": "· -s · your answer:", "Tendances : masculins souvent en -e (der Tisch, die Tische), féminins en -(e)n (die Lampe, die Lampen), neutres courts en -er avec umlaut (das Buch, die Bücher), mots étrangers en -s (das Auto, die Autos).": "Patterns: masculine nouns often take -e (der Tisch, die Tische), feminine nouns -(e)n (die Lampe, die Lampen), short neuter nouns -er with umlaut (das Buch, die Bücher), foreign words -s (das Auto, die Autos).", "· -en": "· -en", "· -n · ta réponse :": "· -n · your answer:", "· -en · ta réponse :": "· -en · your answer:", "· -e": "· -e", "· -e · ta réponse :": "· -e · your answer:", "· pluriel irrégulier": "· irregular plural", "Remets dans l'ordre": "Put it in order", "Touche les mots ci-dessous…": "Tap the words below…", "eröffnen": "eröffnen", "möchte": "möchte", "ein": "ein", "Girokonto": "Girokonto", "Effacer": "Clear", "schicken": "schicken", "dieses": "dieses", "Frankreich": "Frankreich", "mir": "mir", "einmal": "einmal", "Sie": "Sie", "Kontonummer": "Kontonummer", "meine": "meine", "gesperrt": "gesperrt", "lange": "lange", "Paris": "Paris", "wie": "wie", "braucht": "braucht", "brauche": "brauche", "meinen": "meinen", "dafür": "dafür", "eine": "eine", "Postkarte": "Postkarte", "Briefmarke": "Briefmarke", "sind": "sind", "hoch": "hoch", "Écris ce que tu entends": "Write what you hear", "▶ Écouter": "▶ Listen", "Au ralenti": "Slow", "Ta phrase en allemand": "Your sentence in German", "{n} mots manquants ou mal écrits, en couleur ci-dessus. {n} mots en trop.": "{n} words missing or misspelled, highlighted above. {n} extra words.", "Dis-le en allemand": "Say it in German", "Voir la phrase": "See the sentence", "On la revoit bientôt": "We'll review it soon", "Conjugaison · à revoir": "Conjugation · to review", "Prépositions · à revoir": "Prepositions · to review", "Les déclinaisons": "Declension", "✕ Fermer": "✕ Close", "Quand ?": "When?", "le sujet (Wer? Was?) · après sein, werden": "the subject (Wer? Was?) · after sein, werden", "le COD (Wen? Was?) · après für, durch, gegen, ohne, um": "the direct object (Wen? Was?) · after für, durch, gegen, ohne, um", "le COI (Wem?) · après mit, nach, bei, seit, von, zu, aus": "the indirect object (Wem?) · after mit, nach, bei, seit, von, zu, aus", "la possession (Wessen?) · après wegen, trotz, während": "possession (Wessen?) · after wegen, trotz, während", "Prépositions mixtes (in, an, auf, neben, unter, über, vor, hinter, zwischen) :": "Two-way prepositions (in, an, auf, neben, unter, über, vor, hinter, zwischen):", "pour le lieu où l'on est (Wo?),": "for where you are (Wo?),", "pour la direction (Wohin?).": "for direction (Wohin?).", "Les terminaisons en couleur sont celles de l'adjectif.": "The colored endings are the adjective's.", "dieser": "dieser", "se décline comme der (dieser, diese, dieses),": "is declined like der (dieser, diese, dieses),", "kein": "kein", "mein": "mein", "comme ein. Au génitif masculin et neutre, le nom prend -s ou -es : des Mannes, eines Kindes.": "like ein. In the masculine and neuter genitive, the noun takes -s or -es: des Mannes, eines Kindes.", "Fiche {n} · A1": "Sheet {n} · A1", "Ä": "Ä", "Ö": "Ö", "Ü": "Ü", "Vérifier mes réponses": "Check my answers", "Fiche {n} →": "Sheet {n} →", "Réponse :": "Answer:", "Relis la règle et réessaie : il faut {n} % pour acquérir la fiche.": "Reread the rule and try again: you need {n}% to learn the sheet.", "Recommencer l'exercice": "Restart the exercise", "Juste": "Correct", "Fiche acquise. Elle reviendra à relire dans trois semaines.": "Sheet learned. It'll come back for review in three weeks.", "Fiche {n} · A2": "Sheet {n} · A2", "← Fiche {n}": "← Sheet {n}", "Fiche {n} · B2": "Sheet {n} · B2", "(à retravailler · {n}/{n})": "(needs work · {n}/{n})", "À retravailler · {n}/{n}": "Needs work · {n}/{n}", "À relire": "To reread", "Acquise · {n}/{n}": "Learned · {n}/{n}", "{n} mots à revoir, puis quelques nouveaux": "{n} words to review, then a few new ones", "Refaire": "Redo", "mots à revoir aujourd'hui": "words to review today", "pluriels ratés": "missed plurals", "phrases à remettre dans l'ordre": "sentences to put in order", "dictées à refaire": "dictations to redo", "phrases du quotidien à revoir": "everyday phrases to review", "fiches à retravailler": "sheets that need work", "Exception : les jours, les mois et les saisons sont toujours masculins, mais pas ce mot.": "Exception: days, months and seasons are always masculine, but not this one.", "Exception : les noms en -ung sont toujours féminins, mais pas ce mot.": "Exception: nouns ending in -ung are always feminine, but not this one.", "Exception : les noms en -heit sont toujours féminins, mais pas ce mot.": "Exception: nouns ending in -heit are always feminine, but not this one.", "Exception : les noms en -keit sont toujours féminins, mais pas ce mot.": "Exception: nouns ending in -keit are always feminine, but not this one.", "Exception : les noms en -schaft sont toujours féminins, mais pas ce mot.": "Exception: nouns ending in -schaft are always feminine, but not this one.", "Règle : les noms en -ion sont toujours féminins.": "Rule: nouns ending in -ion are always feminine.", "Exception : les noms en -ion sont toujours féminins, mais pas ce mot.": "Exception: nouns ending in -ion are always feminine, but not this one.", "Règle : les noms en -tät sont toujours féminins.": "Rule: nouns ending in -tät are always feminine.", "Exception : les noms en -tät sont toujours féminins, mais pas ce mot.": "Exception: nouns ending in -tät are always feminine, but not this one.", "Règle : les noms en -chen sont toujours neutres.": "Rule: nouns ending in -chen are always neuter.", "Exception : les noms en -chen sont toujours neutres, mais pas ce mot.": "Exception: nouns ending in -chen are always neuter, but not this one.", "Règle : les noms en -lein sont toujours neutres.": "Rule: nouns ending in -lein are always neuter.", "Exception : les noms en -lein sont toujours neutres, mais pas ce mot.": "Exception: nouns ending in -lein are always neuter, but not this one.", "Règle : les noms en -ling sont toujours masculins.": "Rule: nouns ending in -ling are always masculine.", "Exception : les noms en -ling sont toujours masculins, mais pas ce mot.": "Exception: nouns ending in -ling are always masculine, but not this one.", "Règle : les noms en -ismus sont toujours masculins.": "Rule: nouns ending in -ismus are always masculine.", "Exception : les noms en -ismus sont toujours masculins, mais pas ce mot.": "Exception: nouns ending in -ismus are always masculine, but not this one.", "Règle : les noms en -ik sont presque toujours féminins.": "Rule: nouns ending in -ik are almost always feminine.", "Exception : les noms en -ik sont presque toujours féminins, mais pas ce mot.": "Exception: nouns ending in -ik are almost always feminine, but not this one.", "Règle : les noms en -ment sont souvent neutres.": "Rule: nouns ending in -ment are often neuter.", "Exception : les noms en -ment sont souvent neutres, mais pas ce mot.": "Exception: nouns ending in -ment are often neuter, but not this one.", "Règle : les noms en -um sont souvent neutres.": "Rule: nouns ending in -um are often neuter.", "Exception : les noms en -um sont souvent neutres, mais pas ce mot.": "Exception: nouns ending in -um are often neuter, but not this one.", "Règle : les noms en -nis sont souvent neutres.": "Rule: nouns ending in -nis are often neuter.", "Exception : les noms en -nis sont souvent neutres, mais pas ce mot.": "Exception: nouns ending in -nis are often neuter, but not this one.", "Règle : les noms en -or sont souvent masculins.": "Rule: nouns ending in -or are often masculine.", "Exception : les noms en -or sont souvent masculins, mais pas ce mot.": "Exception: nouns ending in -or are often masculine, but not this one.", "Exception : les noms en -ie sont souvent féminins, mais pas ce mot.": "Exception: nouns ending in -ie are often feminine, but not this one.", "Règle : les noms en -ei sont souvent féminins.": "Rule: nouns ending in -ei are often feminine.", "Exception : les noms en -ei sont souvent féminins, mais pas ce mot.": "Exception: nouns ending in -ei are often feminine, but not this one.", "{n} verbes à conjuguer": "{n} verbs to conjugate", "{n} phrases au bon cas": "{n} sentences in the right case", "{n} phrases à compléter": "{n} sentences to complete", "Ordre des mots": "Word order", "{n} phrases à remettre dans l'ordre": "{n} sentences to put in order", "{n} noms à mettre au pluriel": "{n} nouns to make plural", "{n} phrases à écrire": "{n} sentences to write", "Prépositions": "Prepositions", "Déclinaisons · à revoir": "Declension · to review", "Pluriels · à revoir": "Plurals · to review", "Ordre des mots · à revoir": "Word order · to review", "Dictée · à revoir": "Dictation · to review", "Phrases du quotidien · à revoir": "Everyday phrases · to review", "présent": "present", "prétérit": "simple past", "parfait": "present perfect", "-n": "-n", "-en": "-en", "pas de terminaison": "no ending", "umlaut + -e": "umlaut + -e", "umlaut, sans terminaison": "umlaut, no ending", "umlaut + -er": "umlaut + -er", "-nen": "-nen", "pluriel irrégulier": "irregular plural", "-se": "-se", "Rendez-vous, symptômes, pharmacie": "Appointments, symptoms, pharmacy", "Bürgeramt, papiers, formulaires": "Bürgeramt, papers, forms", "Propriétaire, réparations, voisinage": "Landlord, repairs, neighbors", "Appeler, laisser un message": "Calling, leaving a message", "Supermarché, boulangerie, retours": "Supermarket, bakery, returns", "Réserver, commander, payer": "Booking, ordering, paying", "Train, bus, trajets": "Train, bus, journeys", "Collègues, réunions, absences": "Colleagues, meetings, absences", "Se présenter, discuter, rendre service": "Introducing yourself, chatting, helping out", "Compte, colis, courrier": "Account, parcels, mail", "Premiers pas · B2": "First steps · B2", "Temps & calendrier · B2": "Time & calendar · B2", "Nombres · B2": "Numbers · B2", "Famille & entourage · B2": "Family & friends · B2", "Logement · B2": "Housing · B2", "Cuisine & aliments · B2": "Kitchen & food · B2", "Courses · B2": "Shopping · B2", "Restaurant & café · B2": "Restaurant & café · B2", "Transports & ville · B2": "Transport & city · B2", "Travail · B2": "Work · B2", "Santé & corps · B2": "Health & body · B2", "Administration & argent · B2": "Admin & money · B2", "Vêtements · B2": "Clothes · B2", "Loisirs & météo · B2": "Leisure & weather · B2", "Verbes essentiels · B2": "Essential verbs · B2", "Adjectifs utiles · B2": "Useful adjectives · B2", "Mots-outils · B2": "Function words · B2", "Les mots que tu as ajoutés": "Words you've added", "Mes mots · B2": "My words · B2", "jours de suite": "days in a row", "{n} mot à revoir, puis quelques nouveaux": "{n} word to review, then a few new ones", "Entraînement libre sur tes mots": "Free practice with your words", "{n} résultats": "{n} results", "Niveau A1 · {n} verbe": "Level A1 · {n} verb", "Verbes séparables · {n} verbe": "Separable verbs · {n} verb", "«{q}» ajouté. Tu as {n} mots perso.": "“{q}” added. You have {n} custom words.", "«{q}» est déjà dans l'app (thème «{q}»).": "“{q}” is already in the app (topic “{q}”).", "{n} mot manquant ou mal écrit, en couleur ci-dessus.": "{n} word missing or misspelled, highlighted above.", "{n} mots manquants ou mal écrits, en couleur ci-dessus.": "{n} words missing or misspelled, highlighted above.", "{n} mot en trop.": "{n} extra word.", "{n} mots en trop.": "{n} extra words.", "Fichier «{q}» enregistré.": "File “{q}” saved.", "Enregistrement annulé.": "Save canceled.", "L'enregistrement n'est pas possible ici : utilise le copier-coller ci-dessus.": "Saving isn't possible here: use copy and paste above.", "L'enregistrement de fichier n'est pas possible ici : utilise le copier-coller ci-dessus.": "Saving files isn't possible here: use copy and paste above.", "Sauvegarde prête. Choisis «{q}» pour la garder.": "Backup ready. Choose “{q}” to keep it.", "Enregistrer dans Fichiers": "Save to Files", "Fichier «{q}» téléchargé. Si rien ne s'est passé, utilise le copier-coller ci-dessus.": "File “{q}” downloaded. If nothing happened, use copy and paste above.", "Le téléchargement n'est pas possible ici : utilise le copier-coller ci-dessus.": "Downloading isn't possible here: use copy and paste above.", "Progression importée : {n} mots, {n} fiches. Elle a été fusionnée avec celle de cet appareil.": "Progress imported: {n} words, {n} sheets. It's been merged with the progress on this device.", "Colle d'abord un code de sauvegarde dans le champ.": "Paste a backup code into the field first.", "Code copié.": "Code copied.", "Sélectionne le code et copie-le à la main.": "Select the code and copy it manually.", "Progression synchronisée sur ton compte": "Progress synced to your account", "Bonne série. Les mots ratés reviendront demain.": "Nice round. Missed words will come back tomorrow.", "Bonne série. Les ratés reviendront plus souvent.": "Nice round. Missed ones will come back more often.", "après der / dieser": "after der / dieser", "après ein / kein / mein": "after ein / kein / mein", "ta réponse :": "your answer:", "séparable": "separable", "à l'oral aussi «{q}»": "colloquially also “{q}”", "verbes à reconjuguer": "verbs to conjugate again", "verbes à préposition ratés": "missed verbs with prepositions", "Écris l'article décliné à la place de l'encadré.": "Write the declined article in place of the box.", "ex. dem": "e.g. dem", "Pas de noms à article dans ce thème": "No nouns with articles in this topic", "Mélange des {n} mots disponibles pour cet exercice": "Mix of the {n} words available for this exercise", "Ton navigateur ne peut pas lire l'audio, la dictée n'est donc pas disponible ici. Essaie depuis un autre navigateur (Chrome, Safari ou Edge).": "Your browser can't play audio, so dictation isn't available here. Try another browser (Chrome, Safari or Edge).", "Grammaire du jour · Fiche {n} :": "Today's grammar · Sheet {n}:", "verbe + particule": "verb + particle", "forme conjuguée": "conjugated form", "La préposition était juste, mais le cas est le": "The preposition was right, but the case is", "Revoir les ratés": "Review mistakes", "On le revoit bientôt": "We'll review it soon", "Langue de l'interface": "Interface language", "Langue": "Language", "et": "and", "Erreurs": "Mistakes", "Vocabulaire": "Vocabulary", "Articles (der, die, das)": "Articles (der, die, das)", "Exercices des fiches": "Sheet exercises", "Corriger →": "Fix →", "Voir les {n} autres": "Show {n} more", "Aucune erreur en attente": "No mistakes to fix", "Chaque réponse fausse, dans n'importe quel exercice, s'ajoute ici. Elle disparaît dès que tu réponds juste à la même question.": "Every wrong answer, in any exercise, is added here. It disappears as soon as you answer the same question correctly.", "Mes erreurs": "My mistakes", "mes erreurs": "my mistakes", "erreurs à corriger": "mistakes to fix", "erreur à corriger": "mistake to fix", "{n} erreurs à corriger. Chacune disparaît dès que tu y réponds juste, ici ou dans un exercice.": "{n} mistakes to fix. Each one disappears as soon as you answer it correctly, here or in an exercise.", "{n} erreur à corriger. Elle disparaît dès que tu y réponds juste, ici ou dans un exercice.": "{n} mistake to fix. It disappears as soon as you answer it correctly, here or in an exercise.", "Automatique": "Automatic", "Automatique : la langue du téléphone, ou l'anglais si elle n'est pas proposée.": "Automatic: your phone's language, or English if it isn't available.", "Genre du nom": "Noun gender", "Masqué": "Hidden", "Affiché": "Shown", "Afficher le genre du nom": "Show the noun's gender", "Masquer le genre du nom": "Hide the noun's gender", "Nom :": "Noun:", "forme au pluriel": "plural form", "Un pluriel est maîtrisé après {n} bonnes réponses d'affilée.": "A plural is mastered after {n} correct answers in a row.", "présent, prétérit, parfait": "present, simple past, perfect", "mot + préposition + cas": "word + preposition + case", "La liste complète est dans Verbes → Prépositions.": "The full list is in Verbs → Prepositions.", "Tous les cours": "All classes", "Choisis un cours · {n} questions": "Choose a class · {n} questions", "Choisis un cours": "Choose a class", "Nouveau cours": "New class", "Ajoute la photo du tableau et la date du cours, puis entraîne-toi sur ses mots.": "Add the photo of the board and the date of the class, then practice its words.", "Ajouter →": "Add →", "Les mots de tes cours d'allemand. Chaque cours garde sa date et la photo du tableau, et a son propre quiz. Ces mots restent séparés du reste de l'app.": "The words from your German classes. Each class keeps its date and the photo of the board, and has its own quiz. These words stay separate from the rest of the app.", "Mes cours": "My classes", "Voir la photo": "See the photo", "{n} mots": "{n} words", "{n} mot": "{n} word", "Voir les mots": "See the words", "Les mots du cours": "The class words", "Date du cours": "Date of the class", "Photo du tableau": "Photo of the board", "Agrandir la photo": "Enlarge the photo", "Changer la photo": "Change the photo", "Prendre ou choisir une photo": "Take or choose a photo", "Lecture en cours…": "Reading…", "Lire les mots sur la photo": "Read the words on the photo", "Ici, l'app ne peut pas lire la photo toute seule (seulement dans la version claude.ai). Sur iPhone : ouvre la photo dans Photos, appuie longuement sur un mot, choisis « Tout sélectionner » puis « Copier », et colle le texte ci-dessous. Les mots que l'app connaît déjà reçoivent leur traduction automatiquement.": "Here the app can't read the photo by itself (only in the claude.ai version). On iPhone: open the photo in Photos, press and hold a word, choose “Select All” then “Copy”, and paste the text below. Words the app already knows get their translation automatically.", "+ Ajouter des mots à la main": "+ Add words by hand", "Un mot par ligne, avec ou sans traduction, ex. der Tisch = la table": "One word per line, with or without translation, e.g. der Tisch = the table", "Ajouter ces mots": "Add these words", "Mots du cours · {n}": "Class words · {n}", "Mots du cours · {n} · {n} sans traduction": "Class words · {n} · {n} without translation", "Mots du cours": "Class words", "{n} sans traduction": "{n} without translation", "Allemand": "German", "Traduction": "Translation", "Supprimer ce mot": "Delete this word", "Aucun mot pour l'instant.": "No words yet.", "+ Une ligne": "+ One line", "Annuler": "Cancel", "Enregistrer": "Save", "Supprimer ce cours": "Delete this class", "Supprimer ce cours et ses mots ?": "Delete this class and its words?", "{n} mot ajouté.": "{n} word added.", "{n} mots ajoutés.": "{n} words added.", "{n} mot ajouté. Complète les traductions qui manquent.": "{n} word added. Fill in the missing translations.", "{n} mots ajoutés. Complète les traductions qui manquent.": "{n} words added. Fill in the missing translations.", "Aucun nouveau mot.": "No new words.", "Lecture de la photo… (jusqu'à une minute)": "Reading the photo… (up to a minute)", "{n} mots trouvés sur la photo. Vérifie-les, corrige si besoin, puis enregistre.": "{n} words found on the photo. Check them, correct if needed, then save.", "Aucun nouveau mot trouvé sur la photo. Tu peux les écrire ci-dessous.": "No new words found on the photo. You can type them below.", "Lecture non autorisée. Tu peux écrire les mots ci-dessous.": "Reading not allowed. You can type the words below.", "Trop de demandes pour l'instant : réessaie dans un moment.": "Too many requests right now: try again in a moment.", "La lecture n'a pas marché. Réessaie, ou écris les mots ci-dessous.": "Reading didn't work. Try again, or type the words below.", "Indique la date du cours.": "Enter the date of the class.", "Ajoute au moins un mot.": "Add at least one word.", "Il manque une traduction.": "One translation is missing.", "Il manque {n} traductions.": "{n} translations are missing.", "Recharger l'app": "Reload the app", "Modifier": "Modify", "Modifier les mots": "Edit the words", "Allemand → allemand": "German → German", "Choisis le synonyme ou la définition": "Choose the synonym or definition", "Le mot en allemand, et à choisir : son synonyme ou sa définition, en allemand aussi.": "The word in German; pick its synonym or definition, also in German.", "Synonyme ou définition en allemand (facultatif)": "Synonym or definition in German (optional)", "Synonyme ou définition en allemand": "Synonym or definition in German", "Ajoute la date du cours et ses mots, puis entraîne-toi dessus.": "Add the date of the class and its words, then practice them.", "Les mots de tes cours d'allemand. Chaque cours garde sa date et a son propre quiz. Ces mots restent séparés du reste de l'app.": "The words from your German classes. Each class keeps its date and has its own quiz. These words stay separate from the rest of the app.", "Sur iPhone, pour reprendre les mots d'une photo du tableau : ouvre la photo dans Photos, appuie longuement sur un mot, choisis « Tout sélectionner » puis « Copier », et colle le texte ci-dessous. Les mots que l'app connaît déjà reçoivent leur traduction automatiquement.": "On iPhone, to take the words from a photo of the board: open the photo in Photos, press and hold a word, choose “Select All” then “Copy”, and paste the text below. Words the app already knows get their translation automatically.", "Écoute et révision": "Listening and review", "QCM, saisie, genre, pluriels": "Multiple choice, typing, gender, plurals", "Conjugaison, mots à préposition": "Conjugation, words with prepositions", "10 phrases au bon cas": "10 sentences in the right case", "10 cartes à dire en allemand": "10 cards to say in German", "Chaque erreur s'ajoute ici": "Every mistake is added here", "Rien à revoir": "Nothing to review", "← Quiz": "← Quiz", "Listes": "Lists", "S'entraîner →": "Practise →", "Revoir mes erreurs": "Review my mistakes", "Programme": "Programme", "Unité en cours": "Current unit", "Unité validée": "Unit passed", "Prochaine unité": "Next unit", "Travail personnel": "Your own work", "Fiche {n}": "Sheet {n}", "S'entraîner sur les mots": "Practise the words", "S'entraîner sur les verbes": "Practise the verbs", "S'entraîner sur les prépositions": "Practise the prepositions", "{n}/{n} mots réussis": "{n}/{n} words right", "{n}/{n} verbes réussis": "{n}/{n} verbs right", "{n}/{n} prépositions réussies": "{n}/{n} prepositions right", "Examen écrit": "Written exam", "{n} questions écrites, durée indicative de {n} minutes, {n} points pour valider. Tu peux le passer quand tu veux.": "{n} written questions, about {n} minutes, {n} points to pass. You can take it whenever you want.", "Passer l'examen": "Take the exam", "Repasser l'examen": "Retake the exam", "Reprendre l'examen": "Resume the exam", "Passer le nouvel examen": "Take the new exam", "Voir mon dernier corrigé": "See my last corrected paper", "objectif du jour": "daily goal", "mots à revoir": "words to review", "Toutes les unités": "All units", "En cours": "In progress", "Examen possible": "Exam available", "Verrouillée": "Locked", "Validée": "Passed", "Ouverte": "Open", "Unité encore verrouillée. Tu peux passer son examen directement : le réussir la valide.": "This unit is still locked. You can take its exam directly: passing it validates the unit.", "Meilleur score : {n}/{n}": "Best score: {n}/{n}", "meilleur score : {n}/{n}": "best score: {n}/{n}", "← Unité en cours": "← Current unit", "Toutes les unités disponibles sont validées": "All available units are passed", "Bravo. D'autres unités arriveront : en attendant, les autres rubriques restent ouvertes pour t'entraîner.": "Well done. More units will come: until then, the other sections stay open for practice.", "Complète la phrase": "Complete the sentence", "Écris la forme": "Write the form", "Avec l'article": "With the article", "Avec l'article, puis le pluriel": "With the article, then the plural", "Pluriel": "Plural", "← Précédente": "← Previous", "Suivante →": "Next →", "Vue d'ensemble": "Overview", "{n} sans réponse": "{n} unanswered", "{n} sans réponse, en pointillés. Elles comptent {n} point. Rien n'est corrigé avant que tu rendes ta copie.": "{n} unanswered, with a dotted border. They count for {n} points. Nothing is marked until you hand in your paper.", "Tu as répondu à toutes les questions. Rien n'est corrigé avant que tu rendes ta copie.": "You have answered every question. Nothing is marked until you hand in your paper.", "Rendre ma copie": "Hand in my paper", "← Continuer l'examen": "← Back to the exam", "Question {n}": "Question {n}", "Temps indicatif dépassé de {n} min": "Suggested time exceeded by {n} min", "Temps indicatif dépassé de {n} min, sans pénalité.": "Suggested time exceeded by {n} min, with no penalty.", "Il faut {n} points sur {n} pour valider.": "You need {n} points out of {n} to pass.", "Examen réussi.": "Exam passed.", "Pour repasser l'examen, réécris d'abord chaque point manqué. Le nouvel examen les reprendra.": "To retake the exam, first rewrite each point you missed. The new exam will include them.", "Réécrire mes erreurs": "Rewrite my mistakes", "Corrigé": "Corrected answers", "{n} pt": "{n} pt", "Ta réponse :": "Your answer:", "En trop :": "Extra:", "Une lettre fausse, comptée juste. Orthographe exacte ci-dessus.": "One wrong letter, counted as right. Exact spelling above.", "← Programme": "← Programme", "Recopie chaque point correctement. Le nouvel examen s'ouvre quand tout est juste.": "Copy each point correctly. The new exam opens once everything is right.", "Vérifier": "Check", "Pas encore": "Not yet", "Le niveau filtre les mots, les verbes, les fiches et les exercices de l'entraînement libre. Il ne s'applique pas au programme.": "The level filters the words, verbs, sheets and exercises of free practice. It does not apply to the programme.", "Examen en cours": "Exam in progress", "À la remise de la copie, tes phrases à traduire non reconnues sont envoyées à LanguageTool (Learneo, Inc., États-Unis) avec ton adresse IP, sans identifiant ni progression. Sa politique ne précise ni la durée de conservation ni si ces textes entraînent ses modèles. Désactivable dans les réglages.": "When you hand in your paper, your translated sentences that were not recognised are sent to LanguageTool (Learneo, Inc., United States) with your IP address, without any identifier or progress. Its policy does not say how long texts are kept or whether they train its models. Can be turned off in the settings.", "Politique de confidentialité": "Privacy policy", "LanguageTool est désactivé : la correction se fait sur les seules réponses connues.": "LanguageTool is off: marking uses the known answers only.", "Correction en cours…": "Marking in progress…", "Des phrases n'ont pas pu être vérifiées par LanguageTool. Pour l'instant, la note compte les seules réponses connues.": "Some sentences could not be checked by LanguageTool. For now, the mark counts the known answers only.", "Vérifier avec LanguageTool": "Check with LanguageTool", "Hors ligne : la vérification sera proposée au retour du réseau.": "Offline: the check will be offered when the network is back.", "Trop de vérifications en une minute. Réessaie dans un instant.": "Too many checks in one minute. Try again in a moment.", "LanguageTool ne répond pas pour l'instant. Réessaie plus tard.": "LanguageTool is not responding right now. Try again later.", "Phrase acceptée : elle contient les mots attendus et LanguageTool n'y signale aucune erreur. Autre version possible :": "Sentence accepted: it has the expected words and LanguageTool reports no error. Another possible version:", "LanguageTool n'y signale aucune erreur, mais il manque des mots attendus.": "LanguageTool reports no error, but expected words are missing.", "Explications fournies par": "Explanations provided by", "Correction avec LanguageTool": "Marking with LanguageTool", "À la remise d'un examen, envoie tes phrases à traduire à languagetool.org. Désactivé, seules les réponses connues comptent.": "When you hand in an exam, sends your translated sentences to languagetool.org. When off, only known answers count."}, "es": {"W": "W", "Wortschatz Alltag": "Wortschatz Alltag", "Tous niveaux": "Todos los niveles", "Réglages": "Ajustes", "jour de suite": "día seguido", "mots maîtrisés / {n}": "palabras dominadas / {n}", "fiches acquises / {n}": "fichas superadas / {n}", "Objectif du jour": "Objetivo del día", "Révision des mots": "Repaso de palabras", "{n} nouveaux mots à découvrir": "{n} palabras nuevas por descubrir", "Fiche du jour": "Ficha del día", "Phrases du quotidien": "Frases del día a día", "{n} phrases à dire en allemand": "{n} frases para decir en alemán", "À revoir": "Para repasar", "Rien à revoir pour l'instant. Les erreurs de chaque exercice apparaîtront ici.": "Nada que repasar por ahora. Los errores de cada ejercicio aparecerán aquí.", "Aujourd'hui": "Hoy", "Mots": "Palabras", "Grammaire": "Gramática", "Verbes": "Verbos", "Phrases": "Frases", "Progression": "Progreso", "Rubriques": "Secciones", "Fiche de grammaire": "Ficha de gramática", "Tableaux des déclinaisons": "Tablas de declinación", "Niveau": "Nivel", "A1 → B1": "A1 → B1", "B2": "B2", "Passage automatique": "Avance automático", "Après une bonne réponse, la question suivante s'affiche seule.": "Tras una respuesta correcta, la siguiente pregunta aparece sola.", "Lecture à voix haute": "Lectura en voz alta", "La bonne réponse est prononcée après chaque question.": "La respuesta correcta se pronuncia después de cada pregunta.", "Afficher IKI": "Mostrar IKI", "Ajoute la rubrique IKI (cours de l'école) à la barre de navigation.": "Añade la sección IKI (clases de la escuela) a la barra de navegación.", "Progression enregistrée sur cet appareil": "Progreso guardado en este dispositivo", "Sauvegarde": "Copia de seguridad", "Enregistre ta progression dans un fichier (Fichiers, iCloud Drive…) ou recharge-la, par exemple sur un nouveau téléphone.": "Guarda tu progreso en un archivo (Archivos, iCloud Drive…) o vuelve a cargarlo, por ejemplo en un teléfono nuevo.", "Exporter": "Exportar", "Importer": "Importar", "Ou par copier-coller": "O copiando y pegando", "Copie ce code et colle-le dans l'autre version de l'app, puis touche «{q}».": "Copia este código y pégalo en la otra versión de la app; luego toca «{q}».", "Copier le code": "Copiar el código", "Importer ce code": "Importar este código", "Fermer": "Cerrar", "Code de sauvegarde": "Código de copia de seguridad", "Ce fichier ou ce code n'est pas une sauvegarde valide.": "Este archivo o código no es una copia de seguridad válida.", "Ce fichier ou ce code n'est pas une sauvegarde de Wortschatz Alltag.": "Este archivo o código no es una copia de seguridad de Wortschatz Alltag.", "Quiz": "Quiz", "Genre": "Género", "Pluriels": "Plurales", "Lexique": "Léxico", "QCM": "Opciones", "{n} choix": "{n} opciones", "Article": "Artículo", "der, die, das": "der, die, das", "Saisie": "Escribir", "écrire le mot": "escribir la palabra", "Cartes": "Tarjetas", "auto-évaluation": "autoevaluación", "Les deux sens": "Ambos sentidos", "Allemand → français": "Alemán → español", "Français → allemand": "Español → alemán", "Choisis un thème · {n} questions": "Elige un tema · {n} preguntas", "Tous les thèmes": "Todos los temas", "Premiers pas": "Primeros pasos", "Temps & calendrier": "Tiempo y calendario", "Nombres": "Números", "Famille & entourage": "Familia y entorno", "Logement": "Vivienda", "Cuisine & aliments": "Cocina y alimentos", "Courses": "Compras", "Restaurant & café": "Restaurante y café", "Transports & ville": "Transporte y ciudad", "Travail": "Trabajo", "Santé & corps": "Salud y cuerpo", "Administration & argent": "Administración y dinero", "Vêtements": "Ropa", "Loisirs & météo": "Ocio y clima", "Verbes essentiels": "Verbos esenciales", "Adjectifs utiles": "Adjetivos útiles", "Mots-outils": "Palabras funcionales", "Monde du travail": "Mundo laboral", "Droit & démarches": "Derecho y trámites", "Santé & bien-être": "Salud y bienestar", "Société, politique & médias": "Sociedad, política y medios", "Environnement & énergie": "Medio ambiente y energía", "Sentiments & relations": "Sentimientos y relaciones", "Argumenter & nuancer": "Argumentar y matizar", "Mots à préposition": "Palabras con preposición", "Verbes à préposition": "Verbos con preposición", "Adjectifs & adverbes nuancés": "Adjetivos y adverbios con matices", "Expressions idiomatiques": "Expresiones idiomáticas", "maîtrisé": "dominada", "en cours": "en progreso", "Un mot est maîtrisé après {n} bonnes réponses espacées dans le temps.": "Una palabra está dominada tras {n} respuestas correctas espaciadas en el tiempo.", "Type d'exercice": "Tipo de ejercicio", "Sens": "Sentido", "Saluer, remercier, se faire comprendre": "Saludar, dar las gracias, hacerte entender", "Jours, mois, saisons, moments de la journée": "Días, meses, estaciones, momentos del día", "Compter, payer, donner l'heure": "Contar, pagar, decir la hora", "Les proches, les voisins, la situation familiale": "Los allegados, los vecinos, la situación familiar", "Appartement, meubles, location": "Apartamento, muebles, alquiler", "Ce qu'on mange, ce qu'on boit, la vaisselle": "Lo que se come, lo que se bebe, la vajilla", "Magasins, caisse, prix": "Tiendas, caja, precios", "Commander, payer, réserver": "Pedir, pagar, reservar", "Se déplacer, s'orienter": "Desplazarte, orientarte", "Bureau, contrat, candidature": "Oficina, contrato, candidatura", "Chez le médecin, à la pharmacie": "En el médico, en la farmacia", "Démarches, banque, courrier": "Trámites, banco, correo", "S'habiller, essayer, acheter": "Vestirte, probarte ropa, comprar", "Temps qu'il fait, sorties, sport": "El tiempo que hace, salidas, deporte", "Les {n} verbes du quotidien, avec leurs formes": "Los {n} verbos del día a día, con sus formas", "Décrire les choses et les gens": "Describir cosas y personas", "Questions, liaisons, quantités": "Preguntas, conectores, cantidades", "Carrière, contrat, négociation": "Carrera, contrato, negociación", "Contrats, recours, assurances, impôts": "Contratos, recursos, seguros, impuestos", "Symptômes, traitements, prévention": "Síntomas, tratamientos, prevención", "Actualité, débats, institutions": "Actualidad, debates, instituciones", "Climat, tri, consommation": "Clima, reciclaje, consumo", "Caractère, émotions, vie à deux": "Carácter, emociones, vida en pareja", "Connecteurs et formules pour donner son avis": "Conectores y fórmulas para dar tu opinión", "Les rections à connaître par cœur": "Los regímenes que debes saber de memoria", "Pour décrire avec précision": "Para describir con precisión", "Ce que les Allemands disent vraiment": "Lo que los alemanes dicen de verdad", "der, die ou das ?": "¿der, die o das?", "{n} noms à la suite. Une bonne réponse passe directement au nom suivant.": "{n} sustantivos seguidos. Si aciertas, pasas directamente al siguiente.", "Jouer →": "Jugar →", "record de bonnes réponses d'affilée": "récord de aciertos seguidos", "noms à entraîner": "sustantivos para practicar", "Les terminaisons qui donnent le genre": "Las terminaciones que indican el género", "der": "der", "· Masculin": "· Masculino", "jours, mois, saisons": "días, meses, estaciones", "-ling": "-ling", "-ismus": "-ismus", "-or": "-or", "die": "die", "· Féminin": "· Femenino", "-ung": "-ung", "-heit, -keit": "-heit, -keit", "-schaft": "-schaft", "-ion, -tät": "-ion, -tät", "-ik, -ie, -ei": "-ik, -ie, -ei", "-e (souvent)": "-e (a menudo)", "das": "das", "· Neutre": "· Neutro", "-chen, -lein": "-chen, -lein", "-ment": "-ment", "-um": "-um", "-nis (souvent)": "-nis (a menudo)", "Ge- (souvent)": "Ge- (a menudo)", "Mot composé : c'est le dernier mot qui décide. das Haus + die Tür →": "Palabra compuesta: decide la última palabra. das Haus + die Tür →", "Haustür.": "Haustür.", "Fiche complète :": "Ficha completa:", "S'entraîner par thème": "Practicar por tema", "Temps & calendrier · {n}": "Tiempo y calendario · {n}", "Nombres · {n}": "Números · {n}", "Famille & entourage · {n}": "Familia y entorno · {n}", "Logement · {n}": "Vivienda · {n}", "Cuisine & aliments · {n}": "Cocina y alimentos · {n}", "Courses · {n}": "Compras · {n}", "Restaurant & café · {n}": "Restaurante y café · {n}", "Transports & ville · {n}": "Transporte y ciudad · {n}", "Travail · {n}": "Trabajo · {n}", "Santé & corps · {n}": "Salud y cuerpo · {n}", "Administration & argent · {n}": "Administración y dinero · {n}", "Vêtements · {n}": "Ropa · {n}", "Loisirs & météo · {n}": "Ocio y clima · {n}", "Monde du travail · {n}": "Mundo laboral · {n}", "Droit & démarches · {n}": "Derecho y trámites · {n}", "Santé & bien-être · {n}": "Salud y bienestar · {n}", "Société, politique & médias · {n}": "Sociedad, política y medios · {n}", "Environnement & énergie · {n}": "Medio ambiente y energía · {n}", "Sentiments & relations · {n}": "Sentimientos y relaciones · {n}", "Trouve le pluriel": "Encuentra el plural", "{n} noms : écris leur forme au pluriel.": "{n} sustantivos: escribe su forma en plural.", "noms travaillés / {n}": "sustantivos trabajados / {n}", "réussis {n} fois de suite": "acertados {n} veces seguidas", "à revoir": "para repasar", "Les tendances à connaître": "Las tendencias que debes conocer", "Masculins : souvent": "Masculinos: a menudo", "-e": "-e", ", parfois avec umlaut. der Tisch → die Tische, der Stuhl → die Stühle.": ", a veces con umlaut. der Tisch → die Tische, der Stuhl → die Stühle.", "Féminins : presque toujours": "Femeninos: casi siempre", "-(e)n": "-(e)n", ". die Lampe → die Lampen, die Wohnung → die Wohnungen.": ". die Lampe → die Lampen, die Wohnung → die Wohnungen.", "Neutres courts : souvent": "Neutros cortos: a menudo", "-er": "-er", "avec umlaut. das Buch → die Bücher.": "con umlaut. das Buch → die Bücher.", "Mots en -er, -el, -en : souvent": "Palabras en -er, -el, -en: a menudo", "sans terminaison": "sin terminación", ". der Lehrer → die Lehrer.": ". der Lehrer → die Lehrer.", "Mots étrangers et mots en voyelle :": "Palabras extranjeras y terminadas en vocal:", "-s": "-s", ". das Auto → die Autos.": ". das Auto → die Autos.", "Fiche :": "Ficha:", "+ Ajouter un mot à «{q}»": "+ Añadir una palabra a «{q}»", "Nom": "Sustantivo", "Verbe": "Verbo", "Autre / expression": "Otro / expresión", "Ajouter": "Añadir", "Tes mots sont enregistrés sur ton compte et reviennent dans la Révision du jour.": "Tus palabras se guardan en tu cuenta y vuelven en el Repaso del día.", "masculin": "masculino", "féminin": "femenino", "neutre": "neutro", "pluriel": "plural", "Monde du travail · B2": "Mundo laboral · B2", "Droit & démarches · B2": "Derecho y trámites · B2", "Santé & bien-être · B2": "Salud y bienestar · B2", "Société, politique & médias · B2": "Sociedad, política y medios · B2", "Environnement & énergie · B2": "Medio ambiente y energía · B2", "Sentiments & relations · B2": "Sentimientos y relaciones · B2", "Argumenter & nuancer · B2": "Argumentar y matizar · B2", "Verbes à préposition · B2": "Verbos con preposición · B2", "Adjectifs & adverbes nuancés · B2": "Adjetivos y adverbios con matices · B2", "Expressions idiomatiques · B2": "Expresiones idiomáticas · B2", "Type": "Tipo", "Nom (ex. Staubsauger)": "Sustantivo (p. ej. Staubsauger)", "Pluriel (facultatif, ex. Staubsauger)": "Plural (opcional, p. ej. Staubsauger)", "Traduction en français": "Traducción (en español)", "Chercher en allemand ou en français…": "Buscar en alemán o en español…", "Fiches": "Fichas", "Déclinaisons": "Declinación", "Fiche {n} ·": "Ficha {n} ·", "(nouvelle)": "(nueva)", "Ouvrir →": "Abrir →", "Fiches acquises": "Fichas superadas", "Chaque fiche se termine par un exercice corrigé automatiquement. Une fiche est acquise à partir de {n} % de bonnes réponses ; elle te sera reproposée à relire trois semaines plus tard.": "Cada ficha termina con un ejercicio que se corrige automáticamente. Una ficha se supera a partir del {n} % de aciertos; te la volveremos a proponer para releerla tres semanas después.", "A1 · les bases": "A1 · las bases", "A1": "A1", "À découvrir": "Por descubrir", "A1–A2": "A1–A2", "A2 · raconter, demander": "A2 · narrar, preguntar", "A2": "A2", "A2–B1": "A2–B1", "B1 · argumenter, lire le courrier": "B1 · argumentar, leer el correo", "B1": "B1", "Pratique": "Práctica", "B2 · nuancer, écrire, convaincre": "B2 · matizar, escribir, convencer", "B1–B2": "B1–B2", "{n} phrases : écris l'article et l'adjectif au bon cas.": "{n} frases: escribe el artículo y el adjetivo en el caso correcto.", "Exercice": "Ejercicio", "Articles seuls": "Solo artículos", "Article + adjectif": "Artículo + adjetivo", "Cas": "Caso", "Tous": "Todos", "Nominatif": "Nominativo", "Accusatif": "Acusativo", "Datif": "Dativo", "Génitif": "Genitivo", "nominatif": "nominativo", "accusatif": "acusativo", "datif": "dativo", "génitif": "genitivo", "Le tableau à connaître": "La tabla que debes conocer", "der / dieser": "der / dieser", "Masc.": "Masc.", "Fém.": "Fem.", "Neutre": "Neutro", "ein / kein / mein": "ein / kein / mein", "Réussite par cas": "Aciertos por caso", "Toutes": "Todas", "Chez le médecin": "En el médico", "Administration": "Administración", "Au téléphone": "Al teléfono", "Courses & magasins": "Compras y tiendas", "Café & restaurant": "Café y restaurante", "Transports": "Transporte", "Au travail": "En el trabajo", "Voisins & small talk": "Vecinos y charla", "Banque & poste": "Banco y correos", "Remets la phrase dans l'ordre": "Ordena la frase", "{n} phrases du quotidien : touche les mots dans le bon ordre.": "{n} frases del día a día: toca las palabras en el orden correcto.", "phrases travaillés / {n}": "frases trabajadas / {n}", "Les {n} places du verbe": "Las {n} posiciones del verbo", "Phrase simple : le verbe conjugué est en": "Frase simple: el verbo conjugado va en", "2e position": "2.ª posición", ". Morgen": ". Morgen", "fahre": "fahre", "ich nach Berlin.": "ich nach Berlin.", "Avec un modal, le parfait ou un verbe séparable : la 2e partie va": "Con un modal, el perfecto o un verbo separable: la 2.ª parte va", "à la fin": "al final", ". Ich": ". Ich", "muss": "muss", "Après weil, dass, ob, wenn : le verbe conjugué va": "Después de weil, dass, ob, wenn: el verbo conjugado va", "tout à la fin": "justo al final", ". …, dass ich angerufen": ". …, dass ich angerufen", "habe": "habe", "Parfois, plusieurs ordres sont corrects. L'exercice attend la phrase d'origine, qui est la plus naturelle.": "A veces hay varios órdenes correctos. El ejercicio espera la frase original, que es la más natural.", "Situation": "Situación", "Conjugaison": "Conjugación", "Irréguliers": "Irregulares", "Quiz prép.": "Quiz prep.", "{n} verbes à conjuguer au présent, au prétérit ou au parfait.": "{n} verbos para conjugar en presente, pretérito o perfecto.", "Temps": "Tiempo", "Tout mélangé": "Todo mezclado", "Présent": "Presente", "Prétérit": "Pretérito", "Parfait": "Perfecto", "Tous les verbes": "Todos los verbos", "Séparables": "Separables", "verbes travaillés / {n}": "verbos trabajados / {n}", "mots travaillés / {n}": "palabras trabajadas / {n}", "Au présent, les questions portent surtout sur les personnes où le verbe change (souvent du et er/sie/es). Au parfait, écris l'auxiliaire et le participe :": "En presente, las preguntas se centran sobre todo en las personas en las que el verbo cambia (a menudo du y er/sie/es). En perfecto, escribe el auxiliar y el participio:", "bist gefahren": "bist gefahren", ". Pour un verbe séparable, écris aussi la particule :": ". Con un verbo separable, escribe también la partícula:", "stehst auf": "stehst auf", "Touche un verbe pour voir toute sa conjugaison.": "Toca un verbo para ver toda su conjugación.", "En couleur": "En color", ": les formes qui ne suivent pas la règle. Le parfait indique l'auxiliaire :": ": las formas que no siguen la regla. El perfecto indica el auxiliar:", "hat": "hat", "(haben) ou": "(haben) o", "ist": "ist", "(sein). Pour les verbes séparables, la particule va à la fin de la phrase : ich": "(sein). En los verbos separables, la partícula va al final de la frase: ich", "stehe": "stehe", "um {n} Uhr": "um {n} Uhr", "Niveau A1 · {n} verbes": "Nivel A1 · {n} verbos", "Prétérit avec du :": "Pretérito con du:", "(à l'oral aussi": "(al hablar también", "Niveau A2 · {n} verbes": "Nivel A2 · {n} verbos", "Niveau B1 · {n} verbes": "Nivel B1 · {n} verbos", "Niveau B2 · {n} verbes": "Nivel B2 · {n} verbos", "Verbes séparables · {n} verbes": "Verbos separables · {n} verbos", "Chercher un verbe (allemand ou français)…": "Buscar un verbo (alemán o español)…", "Écouter": "Escuchar", "Quelle préposition ?": "¿Qué preposición?", "{n} phrases à compléter. Pour an, auf, in, über, vor et unter, choisis aussi le cas.": "{n} frases para completar. Con an, auf, in, über, vor y unter, elige también el caso.", "Apprends toujours le mot avec sa préposition et son cas, comme un seul bloc :": "Aprende siempre la palabra con su preposición y su caso, como un solo bloque:", "warten auf + Akk.": "warten auf + Akk.", "La liste complète est dans l'onglet Prépositions.": "La lista completa está en la pestaña Preposiciones.", "Repères pour le cas": "Pistas para el caso", ": toujours accusatif.": ": siempre acusativo.", ": presque toujours accusatif (sauf bestehen auf + D).": ": casi siempre acusativo (salvo bestehen auf + D).", "mit, von, zu, bei, nach, aus, vor": "mit, von, zu, bei, nach, aus, vor", ": toujours datif.": ": siempre dativo.", "für, gegen": "für, gegen", ": accusatif pour penser, se souvenir, s'habituer, croire, die Erinnerung ; datif pour participer, travailler, douter, souffrir, das Interesse, die Freude, interessiert.": ": acusativo para pensar, recordar, acostumbrarse, creer, die Erinnerung; dativo para participar, trabajar, dudar, sufrir, das Interesse, die Freude, interessiert.", "Chercher un mot ou une préposition…": "Buscar una palabra o una preposición…", "Situations": "Situaciones", "Dictée": "Dictado", "Apprendre ces phrases": "Aprender estas frases", "{n} cartes : tu lis la phrase en français, tu la dis en allemand, puis tu vérifies.": "{n} tarjetas: lees la frase en español, la dices en alemán y luego compruebas.", "Chez le médecin · Rendez-vous, symptômes, pharmacie": "En el médico · Citas, síntomas, farmacia", "Administration · Bürgeramt, papiers, formulaires": "Administración · Bürgeramt, papeles, formularios", "Logement · Propriétaire, réparations, voisinage": "Vivienda · Propietario, reparaciones, vecindario", "Au téléphone · Appeler, laisser un message": "Al teléfono · Llamar, dejar un mensaje", "Courses & magasins · Supermarché, boulangerie, retours": "Compras y tiendas · Supermercado, panadería, devoluciones", "Café & restaurant · Réserver, commander, payer": "Café y restaurante · Reservar, pedir, pagar", "Transports · Train, bus, trajets": "Transporte · Tren, autobús, trayectos", "Au travail · Collègues, réunions, absences": "En el trabajo · Compañeros, reuniones, ausencias", "Voisins & small talk · Se présenter, discuter, rendre service": "Vecinos y charla · Presentarte, charlar, hacer favores", "Banque & poste · Compte, colis, courrier": "Banco y correos · Cuenta, paquetes, correo", "{n} phrases lues à voix haute : écris ce que tu entends.": "{n} frases leídas en voz alta: escribe lo que oyes.", "Tu peux réécouter autant de fois que tu veux, et aussi au ralenti. Les majuscules et la ponctuation ne comptent pas, mais les umlauts et le ß, si. La voix dépend de ton appareil.": "Puedes volver a escucharlas todas las veces que quieras, también más lento. Las mayúsculas y la puntuación no cuentan, pero los umlauts y la ß sí. La voz depende de tu dispositivo.", "noms à entraîner (A1 → B1)": "sustantivos para practicar (A1 → B1)", "noms à entraîner (B2)": "sustantivos para practicar (B2)", "{n} verbes à conjuguer au présent.": "{n} verbos para conjugar en presente.", "{n} verbes à conjuguer au prétérit.": "{n} verbos para conjugar en pretérito.", "{n} verbes à conjuguer au parfait.": "{n} verbos para conjugar en perfecto.", "Aucun verbe ne correspond.": "Ningún verbo coincide.", "{n} phrases : écris l'article au bon cas.": "{n} frases: escribe el artículo en el caso correcto.", "Infinitif (ex. abholen)": "Infinitivo (p. ej. abholen)", "Formes (facultatif) : holt ab · holte ab · hat abgeholt": "Formas (opcional): holt ab · holte ab · hat abgeholt", "Mot ou expression en allemand": "Palabra o expresión en alemán", "{n} résultat": "{n} resultado", "Aucun mot ne correspond.": "Ninguna palabra coincide.", "«{q}» est déjà dans l'app (thème Logement).": "«{q}» ya está en la app (tema Vivienda).", "«{q}» ajouté. Tu as {n} mot perso.": "«{q}» añadida. Tienes {n} palabra propia.", "Mes mots": "Mis palabras", "✕ Quitter": "✕ Salir", "Traduis en allemand": "Traduce al alemán", "Quitter": "Salir", "Super!": "Super!", "Continuer": "Continuar", "Traduis en français": "Traduce al español", "Pas tout à fait": "No del todo", "· pluriel :": "· plural:", "Revoir la règle": "Repasar la regla", "Genau!": "Genau!", "Exemple": "Ejemplo", "Voir le résultat": "Ver el resultado", "QCM · Tous les thèmes": "Opciones · Todos los temas", "Les mots ratés reviendront dans ta prochaine révision.": "Las palabras falladas volverán en tu próximo repaso.", "À retenir": "Para recordar", "Accueil": "Inicio", "Encore une série": "Otra ronda", "Richtig!": "Richtig!", "· toujours au pluriel": "· siempre en plural", "Quel article ?": "¿Qué artículo?", "· pas de pluriel courant": "· sin plural habitual", "Exception : les noms commençant par Ge- sont souvent neutres, mais pas ce mot.": "Excepción: los sustantivos que empiezan por Ge- suelen ser neutros, pero esta palabra no.", "Règle : les noms en -ung sont toujours féminins.": "Regla: los sustantivos en -ung son siempre femeninos.", "Exception : les noms en -e sont souvent féminins, mais pas ce mot.": "Excepción: los sustantivos en -e suelen ser femeninos, pero esta palabra no.", "Règle : les noms en -e sont souvent féminins.": "Regla: los sustantivos en -e suelen ser femeninos.", "Article · Tous les thèmes": "Artículo · Todos los temas", "Sehr gut!": "Sehr gut!", "Règle : les noms en -heit sont toujours féminins.": "Regla: los sustantivos en -heit son siempre femeninos.", "Règle : les noms commençant par Ge- sont souvent neutres.": "Regla: los sustantivos que empiezan por Ge- suelen ser neutros.", "Écris en allemand": "Escribe en alemán", "Avec l'article : der, die ou das": "Con el artículo: der, die o das", "ä": "ä", "ö": "ö", "ü": "ü", "ß": "ß", "Je ne sais pas": "No lo sé", "Valider": "Comprobar", "der / die / das …": "der / die / das …", "Ta réponse": "Tu respuesta", "Mauvais article.": "Artículo incorrecto.", "Il manque l'article.": "Falta el artículo.", "À l'infinitif": "En infinitivo", "Presque parfait": "Casi perfecto", "Orthographe exacte ci-dessous.": "Ortografía exacta abajo.", "Saisie · Tous les thèmes": "Escribir · Todos los temas", "Tu connais ce mot ?": "¿Conoces esta palabra?", "Voir la traduction": "Ver la traducción", "Je savais": "Lo sabía", "pluriel :": "plural:", "Cartes · Tous les thèmes": "Tarjetas · Todos los temas", "Sans faute. Ausgezeichnet !": "Sin errores. Ausgezeichnet!", "Série": "Racha", "· record {n}": "· récord {n}", "Zzzwort": "Zzzwort", "Règle : les noms en -keit sont toujours féminins.": "Regla: los sustantivos en -keit son siempre femeninos.", "Règle : les jours, les mois et les saisons sont toujours masculins.": "Regla: los días, los meses y las estaciones son siempre masculinos.", "Genre · Tous les thèmes": "Género · Todos los temas", "Meilleure série de la partie :": "Mejor racha de la partida:", "· record :": "· récord:", "Règle : les noms en -ie sont souvent féminins.": "Regla: los sustantivos en -ie suelen ser femeninos.", "Règle : les noms en -schaft sont toujours féminins.": "Regla: los sustantivos en -schaft son siempre femeninos.", "Révision du jour": "Repaso del día", "Conjugue": "Conjuga", "Parfait · A1 · séparable": "Perfecto · A1 · separable", "wir": "wir", "auxiliaire + participe": "auxiliar + participio", "· parfait": "· perfecto", "er": "er", "· parfait · ta réponse :": "· perfecto · tu respuesta:", "Parfait · B1 · séparable": "Perfecto · B1 · separable", "ihr": "ihr", "ich": "ich", "Parfait · A2 · séparable": "Perfecto · A2 · separable", "sie": "sie", "du": "du", "Les ratés reviendront dans tes prochaines séries.": "Los fallos volverán en tus próximas rondas.", "Retour": "Volver", "est juste. Avec quel cas ?": "es correcta. ¿Con qué caso?", "+ Akkusativ": "+ Akkusativ", "+ Dativ": "+ Dativ", "La préposition était juste, mais le cas est le akkusativ.": "La preposición era correcta, pero el caso es el akkusativ.", "La préposition était juste, mais le cas est le dativ.": "La preposición era correcta, pero el caso es el dativ.", "Ici, la préposition est contractée avec l'article.": "Aquí, la preposición se contrae con el artículo.", "Écris l'article et l'adjectif déclinés à la place de l'encadré.": "Escribe el artículo y el adjetivo declinados en lugar del recuadro.", "Voir les tableaux de la règle": "Ver las tablas de la regla", "ex. dem neuen": "p. ej. dem neuen", "Génitif · neutre · après ein / kein / mein": "Genitivo · neutro · tras ein / kein / mein", "Génitif · masculin · après der / dieser · ta réponse :": "Genitivo · masculino · tras der / dieser · tu respuesta:", "Génitif · masculin · après ein / kein / mein": "Genitivo · masculino · tras ein / kein / mein", "Génitif · neutre · après ein / kein / mein · ta réponse :": "Genitivo · neutro · tras ein / kein / mein · tu respuesta:", "Génitif · féminin · après der / dieser": "Genitivo · femenino · tras der / dieser", "Génitif · féminin · après ein / kein / mein · ta réponse :": "Genitivo · femenino · tras ein / kein / mein · tu respuesta:", "Génitif · masculin · après der / dieser": "Genitivo · masculino · tras der / dieser", "Génitif · féminin · après der / dieser · ta réponse :": "Genitivo · femenino · tras der / dieser · tu respuesta:", "Le pluriel ?": "¿El plural?", "· -n": "· -n", "· -s · ta réponse :": "· -s · tu respuesta:", "Tendances : masculins souvent en -e (der Tisch, die Tische), féminins en -(e)n (die Lampe, die Lampen), neutres courts en -er avec umlaut (das Buch, die Bücher), mots étrangers en -s (das Auto, die Autos).": "Tendencias: masculinos a menudo en -e (der Tisch, die Tische), femeninos en -(e)n (die Lampe, die Lampen), neutros cortos en -er con umlaut (das Buch, die Bücher), palabras extranjeras en -s (das Auto, die Autos).", "· -en": "· -en", "· -n · ta réponse :": "· -n · tu respuesta:", "· -en · ta réponse :": "· -en · tu respuesta:", "· -e": "· -e", "· -e · ta réponse :": "· -e · tu respuesta:", "· pluriel irrégulier": "· plural irregular", "Remets dans l'ordre": "Ponlo en orden", "Touche les mots ci-dessous…": "Toca las palabras de abajo…", "eröffnen": "eröffnen", "möchte": "möchte", "ein": "ein", "Girokonto": "Girokonto", "Effacer": "Borrar", "schicken": "schicken", "dieses": "dieses", "Frankreich": "Frankreich", "mir": "mir", "einmal": "einmal", "Sie": "Sie", "Kontonummer": "Kontonummer", "meine": "meine", "gesperrt": "gesperrt", "lange": "lange", "Paris": "Paris", "wie": "wie", "braucht": "braucht", "brauche": "brauche", "meinen": "meinen", "dafür": "dafür", "eine": "eine", "Postkarte": "Postkarte", "Briefmarke": "Briefmarke", "sind": "sind", "hoch": "hoch", "Écris ce que tu entends": "Escribe lo que oyes", "▶ Écouter": "▶ Escuchar", "Au ralenti": "Más lento", "Ta phrase en allemand": "Tu frase en alemán", "{n} mots manquants ou mal écrits, en couleur ci-dessus. {n} mots en trop.": "{n} palabras que faltan o mal escritas, en color arriba. {n} palabras de más.", "Dis-le en allemand": "Dilo en alemán", "Voir la phrase": "Ver la frase", "On la revoit bientôt": "La repasamos pronto", "Conjugaison · à revoir": "Conjugación · para repasar", "Prépositions · à revoir": "Preposiciones · para repasar", "Les déclinaisons": "Las declinaciones", "✕ Fermer": "✕ Cerrar", "Quand ?": "¿Cuándo?", "le sujet (Wer? Was?) · après sein, werden": "el sujeto (Wer? Was?) · tras sein, werden", "le COD (Wen? Was?) · après für, durch, gegen, ohne, um": "el complemento directo (Wen? Was?) · tras für, durch, gegen, ohne, um", "le COI (Wem?) · après mit, nach, bei, seit, von, zu, aus": "el complemento indirecto (Wem?) · tras mit, nach, bei, seit, von, zu, aus", "la possession (Wessen?) · après wegen, trotz, während": "la posesión (Wessen?) · tras wegen, trotz, während", "Prépositions mixtes (in, an, auf, neben, unter, über, vor, hinter, zwischen) :": "Preposiciones mixtas (in, an, auf, neben, unter, über, vor, hinter, zwischen):", "pour le lieu où l'on est (Wo?),": "para el lugar donde se está (Wo?),", "pour la direction (Wohin?).": "para la dirección (Wohin?).", "Les terminaisons en couleur sont celles de l'adjectif.": "Las terminaciones en color son las del adjetivo.", "dieser": "dieser", "se décline comme der (dieser, diese, dieses),": "se declina como der (dieser, diese, dieses),", "kein": "kein", "mein": "mein", "comme ein. Au génitif masculin et neutre, le nom prend -s ou -es : des Mannes, eines Kindes.": "como ein. En genitivo masculino y neutro, el sustantivo toma -s o -es: des Mannes, eines Kindes.", "Fiche {n} · A1": "Ficha {n} · A1", "Ä": "Ä", "Ö": "Ö", "Ü": "Ü", "Vérifier mes réponses": "Comprobar mis respuestas", "Fiche {n} →": "Ficha {n} →", "Réponse :": "Respuesta:", "Relis la règle et réessaie : il faut {n} % pour acquérir la fiche.": "Relee la regla y vuelve a intentarlo: necesitas el {n} % para superar la ficha.", "Recommencer l'exercice": "Repetir el ejercicio", "Juste": "Correcto", "Fiche acquise. Elle reviendra à relire dans trois semaines.": "Ficha superada. Volverá para que la releas dentro de tres semanas.", "Fiche {n} · A2": "Ficha {n} · A2", "← Fiche {n}": "← Ficha {n}", "Fiche {n} · B2": "Ficha {n} · B2", "(à retravailler · {n}/{n})": "(para reforzar · {n}/{n})", "À retravailler · {n}/{n}": "Para reforzar · {n}/{n}", "À relire": "Para releer", "Acquise · {n}/{n}": "Superada · {n}/{n}", "{n} mots à revoir, puis quelques nouveaux": "{n} palabras para repasar y luego algunas nuevas", "Refaire": "Rehacer", "mots à revoir aujourd'hui": "palabras para repasar hoy", "pluriels ratés": "plurales fallados", "phrases à remettre dans l'ordre": "frases para ordenar", "dictées à refaire": "dictados para repetir", "phrases du quotidien à revoir": "frases del día a día para repasar", "fiches à retravailler": "fichas para reforzar", "Exception : les jours, les mois et les saisons sont toujours masculins, mais pas ce mot.": "Excepción: los días, los meses y las estaciones son siempre masculinos, pero esta palabra no.", "Exception : les noms en -ung sont toujours féminins, mais pas ce mot.": "Excepción: los sustantivos en -ung son siempre femeninos, pero esta palabra no.", "Exception : les noms en -heit sont toujours féminins, mais pas ce mot.": "Excepción: los sustantivos en -heit son siempre femeninos, pero esta palabra no.", "Exception : les noms en -keit sont toujours féminins, mais pas ce mot.": "Excepción: los sustantivos en -keit son siempre femeninos, pero esta palabra no.", "Exception : les noms en -schaft sont toujours féminins, mais pas ce mot.": "Excepción: los sustantivos en -schaft son siempre femeninos, pero esta palabra no.", "Règle : les noms en -ion sont toujours féminins.": "Regla: los sustantivos en -ion son siempre femeninos.", "Exception : les noms en -ion sont toujours féminins, mais pas ce mot.": "Excepción: los sustantivos en -ion son siempre femeninos, pero esta palabra no.", "Règle : les noms en -tät sont toujours féminins.": "Regla: los sustantivos en -tät son siempre femeninos.", "Exception : les noms en -tät sont toujours féminins, mais pas ce mot.": "Excepción: los sustantivos en -tät son siempre femeninos, pero esta palabra no.", "Règle : les noms en -chen sont toujours neutres.": "Regla: los sustantivos en -chen son siempre neutros.", "Exception : les noms en -chen sont toujours neutres, mais pas ce mot.": "Excepción: los sustantivos en -chen son siempre neutros, pero esta palabra no.", "Règle : les noms en -lein sont toujours neutres.": "Regla: los sustantivos en -lein son siempre neutros.", "Exception : les noms en -lein sont toujours neutres, mais pas ce mot.": "Excepción: los sustantivos en -lein son siempre neutros, pero esta palabra no.", "Règle : les noms en -ling sont toujours masculins.": "Regla: los sustantivos en -ling son siempre masculinos.", "Exception : les noms en -ling sont toujours masculins, mais pas ce mot.": "Excepción: los sustantivos en -ling son siempre masculinos, pero esta palabra no.", "Règle : les noms en -ismus sont toujours masculins.": "Regla: los sustantivos en -ismus son siempre masculinos.", "Exception : les noms en -ismus sont toujours masculins, mais pas ce mot.": "Excepción: los sustantivos en -ismus son siempre masculinos, pero esta palabra no.", "Règle : les noms en -ik sont presque toujours féminins.": "Regla: los sustantivos en -ik son casi siempre femeninos.", "Exception : les noms en -ik sont presque toujours féminins, mais pas ce mot.": "Excepción: los sustantivos en -ik son casi siempre femeninos, pero esta palabra no.", "Règle : les noms en -ment sont souvent neutres.": "Regla: los sustantivos en -ment suelen ser neutros.", "Exception : les noms en -ment sont souvent neutres, mais pas ce mot.": "Excepción: los sustantivos en -ment suelen ser neutros, pero esta palabra no.", "Règle : les noms en -um sont souvent neutres.": "Regla: los sustantivos en -um suelen ser neutros.", "Exception : les noms en -um sont souvent neutres, mais pas ce mot.": "Excepción: los sustantivos en -um suelen ser neutros, pero esta palabra no.", "Règle : les noms en -nis sont souvent neutres.": "Regla: los sustantivos en -nis suelen ser neutros.", "Exception : les noms en -nis sont souvent neutres, mais pas ce mot.": "Excepción: los sustantivos en -nis suelen ser neutros, pero esta palabra no.", "Règle : les noms en -or sont souvent masculins.": "Regla: los sustantivos en -or suelen ser masculinos.", "Exception : les noms en -or sont souvent masculins, mais pas ce mot.": "Excepción: los sustantivos en -or suelen ser masculinos, pero esta palabra no.", "Exception : les noms en -ie sont souvent féminins, mais pas ce mot.": "Excepción: los sustantivos en -ie suelen ser femeninos, pero esta palabra no.", "Règle : les noms en -ei sont souvent féminins.": "Regla: los sustantivos en -ei suelen ser femeninos.", "Exception : les noms en -ei sont souvent féminins, mais pas ce mot.": "Excepción: los sustantivos en -ei suelen ser femeninos, pero esta palabra no.", "{n} verbes à conjuguer": "{n} verbos para conjugar", "{n} phrases au bon cas": "{n} frases en el caso correcto", "{n} phrases à compléter": "{n} frases para completar", "Ordre des mots": "Orden de las palabras", "{n} phrases à remettre dans l'ordre": "{n} frases para ordenar", "{n} noms à mettre au pluriel": "{n} sustantivos para poner en plural", "{n} phrases à écrire": "{n} frases para escribir", "Prépositions": "Preposiciones", "Déclinaisons · à revoir": "Declinación · para repasar", "Pluriels · à revoir": "Plurales · para repasar", "Ordre des mots · à revoir": "Orden de las palabras · para repasar", "Dictée · à revoir": "Dictado · para repasar", "Phrases du quotidien · à revoir": "Frases del día a día · para repasar", "présent": "presente", "prétérit": "pretérito", "parfait": "perfecto", "-n": "-n", "-en": "-en", "pas de terminaison": "sin terminación", "umlaut + -e": "umlaut + -e", "umlaut, sans terminaison": "umlaut, sin terminación", "umlaut + -er": "umlaut + -er", "-nen": "-nen", "pluriel irrégulier": "plural irregular", "-se": "-se", "Rendez-vous, symptômes, pharmacie": "Citas, síntomas, farmacia", "Bürgeramt, papiers, formulaires": "Bürgeramt, papeles, formularios", "Propriétaire, réparations, voisinage": "Propietario, reparaciones, vecindario", "Appeler, laisser un message": "Llamar, dejar un mensaje", "Supermarché, boulangerie, retours": "Supermercado, panadería, devoluciones", "Réserver, commander, payer": "Reservar, pedir, pagar", "Train, bus, trajets": "Tren, autobús, trayectos", "Collègues, réunions, absences": "Compañeros, reuniones, ausencias", "Se présenter, discuter, rendre service": "Presentarte, charlar, hacer favores", "Compte, colis, courrier": "Cuenta, paquetes, correo", "Premiers pas · B2": "Primeros pasos · B2", "Temps & calendrier · B2": "Tiempo y calendario · B2", "Nombres · B2": "Números · B2", "Famille & entourage · B2": "Familia y entorno · B2", "Logement · B2": "Vivienda · B2", "Cuisine & aliments · B2": "Cocina y alimentos · B2", "Courses · B2": "Compras · B2", "Restaurant & café · B2": "Restaurante y café · B2", "Transports & ville · B2": "Transporte y ciudad · B2", "Travail · B2": "Trabajo · B2", "Santé & corps · B2": "Salud y cuerpo · B2", "Administration & argent · B2": "Administración y dinero · B2", "Vêtements · B2": "Ropa · B2", "Loisirs & météo · B2": "Ocio y clima · B2", "Verbes essentiels · B2": "Verbos esenciales · B2", "Adjectifs utiles · B2": "Adjetivos útiles · B2", "Mots-outils · B2": "Palabras funcionales · B2", "Les mots que tu as ajoutés": "Las palabras que has añadido", "Mes mots · B2": "Mis palabras · B2", "jours de suite": "días seguidos", "{n} mot à revoir, puis quelques nouveaux": "{n} palabra para repasar y luego algunas nuevas", "Entraînement libre sur tes mots": "Práctica libre con tus palabras", "{n} résultats": "{n} resultados", "Niveau A1 · {n} verbe": "Nivel A1 · {n} verbo", "Verbes séparables · {n} verbe": "Verbos separables · {n} verbo", "«{q}» ajouté. Tu as {n} mots perso.": "«{q}» añadida. Tienes {n} palabras propias.", "«{q}» est déjà dans l'app (thème «{q}»).": "«{q}» ya está en la app (tema «{q}»).", "{n} mot manquant ou mal écrit, en couleur ci-dessus.": "{n} palabra que falta o mal escrita, en color arriba.", "{n} mots manquants ou mal écrits, en couleur ci-dessus.": "{n} palabras que faltan o mal escritas, en color arriba.", "{n} mot en trop.": "{n} palabra de más.", "{n} mots en trop.": "{n} palabras de más.", "Fichier «{q}» enregistré.": "Archivo «{q}» guardado.", "Enregistrement annulé.": "Guardado cancelado.", "L'enregistrement n'est pas possible ici : utilise le copier-coller ci-dessus.": "Aquí no se puede guardar: usa copiar y pegar (arriba).", "L'enregistrement de fichier n'est pas possible ici : utilise le copier-coller ci-dessus.": "Aquí no se puede guardar el archivo: usa copiar y pegar (arriba).", "Sauvegarde prête. Choisis «{q}» pour la garder.": "Copia de seguridad lista. Elige «{q}» para guardarla.", "Enregistrer dans Fichiers": "Guardar en Archivos", "Fichier «{q}» téléchargé. Si rien ne s'est passé, utilise le copier-coller ci-dessus.": "Archivo «{q}» descargado. Si no pasó nada, usa copiar y pegar (arriba).", "Le téléchargement n'est pas possible ici : utilise le copier-coller ci-dessus.": "Aquí no se puede descargar: usa copiar y pegar (arriba).", "Progression importée : {n} mots, {n} fiches. Elle a été fusionnée avec celle de cet appareil.": "Progreso importado: {n} palabras, {n} fichas. Se ha combinado con el de este dispositivo.", "Colle d'abord un code de sauvegarde dans le champ.": "Primero pega un código de copia de seguridad en el campo.", "Code copié.": "Código copiado.", "Sélectionne le code et copie-le à la main.": "Selecciona el código y cópialo a mano.", "Progression synchronisée sur ton compte": "Progreso sincronizado en tu cuenta", "Bonne série. Les mots ratés reviendront demain.": "Buena ronda. Las palabras falladas volverán mañana.", "Bonne série. Les ratés reviendront plus souvent.": "Buena ronda. Los fallos volverán más a menudo.", "après der / dieser": "tras der / dieser", "après ein / kein / mein": "tras ein / kein / mein", "ta réponse :": "tu respuesta:", "séparable": "separable", "à l'oral aussi «{q}»": "al hablar también «{q}»", "verbes à reconjuguer": "verbos para volver a conjugar", "verbes à préposition ratés": "verbos con preposición fallados", "Écris l'article décliné à la place de l'encadré.": "Escribe el artículo declinado en lugar del recuadro.", "ex. dem": "p. ej. dem", "Pas de noms à article dans ce thème": "No hay sustantivos con artículo en este tema", "Mélange des {n} mots disponibles pour cet exercice": "Mezcla de las {n} palabras disponibles para este ejercicio", "Ton navigateur ne peut pas lire l'audio, la dictée n'est donc pas disponible ici. Essaie depuis un autre navigateur (Chrome, Safari ou Edge).": "Tu navegador no puede reproducir audio, así que el dictado no está disponible aquí. Prueba desde otro navegador (Chrome, Safari o Edge).", "Grammaire du jour · Fiche {n} :": "Gramática del día · Ficha {n}:", "verbe + particule": "verbo + partícula", "forme conjuguée": "forma conjugada", "La préposition était juste, mais le cas est le": "La preposición era correcta, pero el caso es el", "Revoir les ratés": "Repasar los fallos", "On le revoit bientôt": "Lo repasamos pronto", "Langue de l'interface": "Idioma de la interfaz", "Langue": "Idioma", "et": "y", "Erreurs": "Errores", "Vocabulaire": "Vocabulario", "Articles (der, die, das)": "Artículos (der, die, das)", "Exercices des fiches": "Ejercicios de las fichas", "Corriger →": "Corregir →", "Voir les {n} autres": "Ver {n} más", "Aucune erreur en attente": "No hay errores pendientes", "Chaque réponse fausse, dans n'importe quel exercice, s'ajoute ici. Elle disparaît dès que tu réponds juste à la même question.": "Cada respuesta incorrecta, en cualquier ejercicio, se añade aquí. Desaparece en cuanto respondes bien a la misma pregunta.", "Mes erreurs": "Mis errores", "mes erreurs": "mis errores", "erreurs à corriger": "errores por corregir", "erreur à corriger": "error por corregir", "{n} erreurs à corriger. Chacune disparaît dès que tu y réponds juste, ici ou dans un exercice.": "{n} errores por corregir. Cada uno desaparece en cuanto lo respondes bien, aquí o en un ejercicio.", "{n} erreur à corriger. Elle disparaît dès que tu y réponds juste, ici ou dans un exercice.": "{n} error por corregir. Desaparece en cuanto lo respondes bien, aquí o en un ejercicio.", "Automatique": "Automático", "Automatique : la langue du téléphone, ou l'anglais si elle n'est pas proposée.": "Automático: el idioma del teléfono, o el inglés si no está disponible.", "Genre du nom": "Género del sustantivo", "Masqué": "Oculto", "Affiché": "Visible", "Afficher le genre du nom": "Mostrar el género del sustantivo", "Masquer le genre du nom": "Ocultar el género del sustantivo", "Nom :": "Sustantivo:", "forme au pluriel": "forma en plural", "Un pluriel est maîtrisé après {n} bonnes réponses d'affilée.": "Un plural se domina tras {n} respuestas correctas seguidas.", "présent, prétérit, parfait": "presente, pretérito, perfecto", "mot + préposition + cas": "palabra + preposición + caso", "La liste complète est dans Verbes → Prépositions.": "La lista completa está en Verbos → Preposiciones.", "Tous les cours": "Todas las clases", "Choisis un cours · {n} questions": "Elige una clase · {n} preguntas", "Choisis un cours": "Elige una clase", "Nouveau cours": "Nueva clase", "Ajoute la photo du tableau et la date du cours, puis entraîne-toi sur ses mots.": "Añade la foto de la pizarra y la fecha de la clase, y luego practica sus palabras.", "Ajouter →": "Añadir →", "Les mots de tes cours d'allemand. Chaque cours garde sa date et la photo du tableau, et a son propre quiz. Ces mots restent séparés du reste de l'app.": "Las palabras de tus clases de alemán. Cada clase guarda su fecha y la foto de la pizarra, y tiene su propio quiz. Estas palabras se quedan separadas del resto de la app.", "Mes cours": "Mis clases", "Voir la photo": "Ver la foto", "{n} mots": "{n} palabras", "{n} mot": "{n} palabra", "Voir les mots": "Ver las palabras", "Les mots du cours": "Las palabras de la clase", "Date du cours": "Fecha de la clase", "Photo du tableau": "Foto de la pizarra", "Agrandir la photo": "Ampliar la foto", "Changer la photo": "Cambiar la foto", "Prendre ou choisir une photo": "Hacer o elegir una foto", "Lecture en cours…": "Leyendo…", "Lire les mots sur la photo": "Leer las palabras de la foto", "Ici, l'app ne peut pas lire la photo toute seule (seulement dans la version claude.ai). Sur iPhone : ouvre la photo dans Photos, appuie longuement sur un mot, choisis « Tout sélectionner » puis « Copier », et colle le texte ci-dessous. Les mots que l'app connaît déjà reçoivent leur traduction automatiquement.": "Aquí la app no puede leer la foto sola (solo en la versión de claude.ai). En el iPhone: abre la foto en Fotos, mantén pulsada una palabra, elige «Seleccionar todo» y luego «Copiar», y pega el texto abajo. Las palabras que la app ya conoce reciben su traducción automáticamente.", "+ Ajouter des mots à la main": "+ Añadir palabras a mano", "Un mot par ligne, avec ou sans traduction, ex. der Tisch = la table": "Una palabra por línea, con o sin traducción, p. ej. der Tisch = la mesa", "Ajouter ces mots": "Añadir estas palabras", "Mots du cours · {n}": "Palabras de la clase · {n}", "Mots du cours · {n} · {n} sans traduction": "Palabras de la clase · {n} · {n} sin traducción", "Mots du cours": "Palabras de la clase", "{n} sans traduction": "{n} sin traducción", "Allemand": "Alemán", "Traduction": "Traducción", "Supprimer ce mot": "Borrar esta palabra", "Aucun mot pour l'instant.": "Todavía no hay palabras.", "+ Une ligne": "+ Una línea", "Annuler": "Cancelar", "Enregistrer": "Guardar", "Supprimer ce cours": "Borrar esta clase", "Supprimer ce cours et ses mots ?": "¿Borrar esta clase y sus palabras?", "{n} mot ajouté.": "{n} palabra añadida.", "{n} mots ajoutés.": "{n} palabras añadidas.", "{n} mot ajouté. Complète les traductions qui manquent.": "{n} palabra añadida. Completa las traducciones que faltan.", "{n} mots ajoutés. Complète les traductions qui manquent.": "{n} palabras añadidas. Completa las traducciones que faltan.", "Aucun nouveau mot.": "Ninguna palabra nueva.", "Lecture de la photo… (jusqu'à une minute)": "Leyendo la foto… (hasta un minuto)", "{n} mots trouvés sur la photo. Vérifie-les, corrige si besoin, puis enregistre.": "{n} palabras encontradas en la foto. Revísalas, corrige si hace falta y guarda.", "Aucun nouveau mot trouvé sur la photo. Tu peux les écrire ci-dessous.": "No se encontró ninguna palabra nueva en la foto. Puedes escribirlas abajo.", "Lecture non autorisée. Tu peux écrire les mots ci-dessous.": "Lectura no autorizada. Puedes escribir las palabras abajo.", "Trop de demandes pour l'instant : réessaie dans un moment.": "Demasiadas solicitudes por ahora: inténtalo de nuevo en un momento.", "La lecture n'a pas marché. Réessaie, ou écris les mots ci-dessous.": "La lectura no funcionó. Inténtalo de nuevo o escribe las palabras abajo.", "Indique la date du cours.": "Indica la fecha de la clase.", "Ajoute au moins un mot.": "Añade al menos una palabra.", "Il manque une traduction.": "Falta una traducción.", "Il manque {n} traductions.": "Faltan {n} traducciones.", "Recharger l'app": "Recargar la app", "Modifier": "Modificar", "Modifier les mots": "Modificar las palabras", "Allemand → allemand": "Alemán → alemán", "Choisis le synonyme ou la définition": "Elige el sinónimo o la definición", "Le mot en allemand, et à choisir : son synonyme ou sa définition, en allemand aussi.": "La palabra en alemán; elige su sinónimo o su definición, también en alemán.", "Synonyme ou définition en allemand (facultatif)": "Sinónimo o definición en alemán (opcional)", "Synonyme ou définition en allemand": "Sinónimo o definición en alemán", "Ajoute la date du cours et ses mots, puis entraîne-toi dessus.": "Añade la fecha de la clase y sus palabras, y luego practícalas.", "Les mots de tes cours d'allemand. Chaque cours garde sa date et a son propre quiz. Ces mots restent séparés du reste de l'app.": "Las palabras de tus clases de alemán. Cada clase guarda su fecha y tiene su propio quiz. Estas palabras se quedan separadas del resto de la app.", "Sur iPhone, pour reprendre les mots d'une photo du tableau : ouvre la photo dans Photos, appuie longuement sur un mot, choisis « Tout sélectionner » puis « Copier », et colle le texte ci-dessous. Les mots que l'app connaît déjà reçoivent leur traduction automatiquement.": "En el iPhone, para tomar las palabras de una foto de la pizarra: abre la foto en Fotos, mantén pulsada una palabra, elige «Seleccionar todo» y luego «Copiar», y pega el texto abajo. Las palabras que la app ya conoce reciben su traducción automáticamente.", "Écoute et révision": "Escucha y repaso", "QCM, saisie, genre, pluriels": "Opción múltiple, escritura, género, plurales", "Conjugaison, mots à préposition": "Conjugación, palabras con preposición", "10 phrases au bon cas": "10 frases con el caso correcto", "10 cartes à dire en allemand": "10 tarjetas para decir en alemán", "Chaque erreur s'ajoute ici": "Cada error se añade aquí", "Rien à revoir": "Nada que repasar", "← Quiz": "← Quiz", "Listes": "Listas", "S'entraîner →": "Practicar →", "Revoir mes erreurs": "Repasar mis errores", "Programme": "Programa", "Unité en cours": "Unidad en curso", "Unité validée": "Unidad validada", "Prochaine unité": "Próxima unidad", "Travail personnel": "Trabajo personal", "Fiche {n}": "Ficha {n}", "S'entraîner sur les mots": "Practicar las palabras", "S'entraîner sur les verbes": "Practicar los verbos", "S'entraîner sur les prépositions": "Practicar las preposiciones", "{n}/{n} mots réussis": "{n}/{n} palabras acertadas", "{n}/{n} verbes réussis": "{n}/{n} verbos acertados", "{n}/{n} prépositions réussies": "{n}/{n} preposiciones acertadas", "Examen écrit": "Examen escrito", "{n} questions écrites, durée indicative de {n} minutes, {n} points pour valider. Tu peux le passer quand tu veux.": "{n} preguntas escritas, unos {n} minutos, {n} puntos para aprobar. Puedes hacerlo cuando quieras.", "Passer l'examen": "Hacer el examen", "Repasser l'examen": "Repetir el examen", "Reprendre l'examen": "Continuar el examen", "Passer le nouvel examen": "Hacer el nuevo examen", "Voir mon dernier corrigé": "Ver mi última corrección", "objectif du jour": "objetivo del día", "mots à revoir": "palabras por repasar", "Toutes les unités": "Todas las unidades", "En cours": "En curso", "Examen possible": "Examen disponible", "Verrouillée": "Bloqueada", "Validée": "Validada", "Ouverte": "Abierta", "Unité encore verrouillée. Tu peux passer son examen directement : le réussir la valide.": "Esta unidad sigue bloqueada. Puedes hacer su examen directamente: aprobarlo la valida.", "Meilleur score : {n}/{n}": "Mejor puntuación: {n}/{n}", "meilleur score : {n}/{n}": "mejor puntuación: {n}/{n}", "← Unité en cours": "← Unidad en curso", "Toutes les unités disponibles sont validées": "Todas las unidades disponibles están validadas", "Bravo. D'autres unités arriveront : en attendant, les autres rubriques restent ouvertes pour t'entraîner.": "Enhorabuena. Llegarán más unidades: mientras tanto, las demás secciones siguen abiertas para practicar.", "Complète la phrase": "Completa la frase", "Écris la forme": "Escribe la forma", "Avec l'article": "Con el artículo", "Avec l'article, puis le pluriel": "Con el artículo y luego el plural", "Pluriel": "Plural", "← Précédente": "← Anterior", "Suivante →": "Siguiente →", "Vue d'ensemble": "Vista general", "{n} sans réponse": "{n} sin responder", "{n} sans réponse, en pointillés. Elles comptent {n} point. Rien n'est corrigé avant que tu rendes ta copie.": "{n} sin responder, con borde punteado. Cuentan {n} puntos. No se corrige nada hasta que entregues el examen.", "Tu as répondu à toutes les questions. Rien n'est corrigé avant que tu rendes ta copie.": "Has respondido a todas las preguntas. No se corrige nada hasta que entregues el examen.", "Rendre ma copie": "Entregar el examen", "← Continuer l'examen": "← Seguir con el examen", "Question {n}": "Pregunta {n}", "Temps indicatif dépassé de {n} min": "Tiempo orientativo superado en {n} min", "Temps indicatif dépassé de {n} min, sans pénalité.": "Tiempo orientativo superado en {n} min, sin penalización.", "Il faut {n} points sur {n} pour valider.": "Hacen falta {n} puntos de {n} para aprobar.", "Examen réussi.": "Examen aprobado.", "Pour repasser l'examen, réécris d'abord chaque point manqué. Le nouvel examen les reprendra.": "Para repetir el examen, primero reescribe cada punto fallado. El nuevo examen los incluirá.", "Réécrire mes erreurs": "Reescribir mis errores", "Corrigé": "Corrección", "{n} pt": "{n} pt", "Ta réponse :": "Tu respuesta:", "En trop :": "De más:", "Une lettre fausse, comptée juste. Orthographe exacte ci-dessus.": "Una letra incorrecta, contada como correcta. Ortografía exacta arriba.", "← Programme": "← Programa", "Recopie chaque point correctement. Le nouvel examen s'ouvre quand tout est juste.": "Copia cada punto correctamente. El nuevo examen se abre cuando todo esté bien.", "Vérifier": "Comprobar", "Pas encore": "Todavía no", "Le niveau filtre les mots, les verbes, les fiches et les exercices de l'entraînement libre. Il ne s'applique pas au programme.": "El nivel filtra las palabras, los verbos, las fichas y los ejercicios de la práctica libre. No se aplica al programa.", "Examen en cours": "Examen en curso", "À la remise de la copie, tes phrases à traduire non reconnues sont envoyées à LanguageTool (Learneo, Inc., États-Unis) avec ton adresse IP, sans identifiant ni progression. Sa politique ne précise ni la durée de conservation ni si ces textes entraînent ses modèles. Désactivable dans les réglages.": "Al entregar el examen, tus frases traducidas no reconocidas se envían a LanguageTool (Learneo, Inc., Estados Unidos) con tu dirección IP, sin identificador ni progreso. Su política no indica cuánto tiempo se conservan los textos ni si entrenan sus modelos. Se puede desactivar en los ajustes.", "Politique de confidentialité": "Política de privacidad", "LanguageTool est désactivé : la correction se fait sur les seules réponses connues.": "LanguageTool está desactivado: la corrección usa solo las respuestas conocidas.", "Correction en cours…": "Corrigiendo…", "Des phrases n'ont pas pu être vérifiées par LanguageTool. Pour l'instant, la note compte les seules réponses connues.": "LanguageTool no ha podido comprobar algunas frases. Por ahora, la nota cuenta solo las respuestas conocidas.", "Vérifier avec LanguageTool": "Comprobar con LanguageTool", "Hors ligne : la vérification sera proposée au retour du réseau.": "Sin conexión: la comprobación se ofrecerá cuando vuelva la red.", "Trop de vérifications en une minute. Réessaie dans un instant.": "Demasiadas comprobaciones en un minuto. Vuelve a intentarlo en un momento.", "LanguageTool ne répond pas pour l'instant. Réessaie plus tard.": "LanguageTool no responde por ahora. Vuelve a intentarlo más tarde.", "Phrase acceptée : elle contient les mots attendus et LanguageTool n'y signale aucune erreur. Autre version possible :": "Frase aceptada: contiene las palabras esperadas y LanguageTool no señala ningún error. Otra versión posible:", "LanguageTool n'y signale aucune erreur, mais il manque des mots attendus.": "LanguageTool no señala ningún error, pero faltan palabras esperadas.", "Explications fournies par": "Explicaciones proporcionadas por", "Correction avec LanguageTool": "Corrección con LanguageTool", "À la remise d'un examen, envoie tes phrases à traduire à languagetool.org. Désactivé, seules les réponses connues comptent.": "Al entregar un examen, envía tus frases traducidas a languagetool.org. Desactivado, solo cuentan las respuestas conocidas."}};
const UI_LANGS = [["fr", "Français"], ["en", "English"], ["es", "Español"]];
const NUM_RE = /(?<![A-Za-zÀ-ÿ\d])\d+(?:[.,]\d+)?(?![A-Za-zÀ-ÿ\d])/g;
const Q_RE = /«\s*([^»]*?)\s*»/g;
let DICT = null;
function setDict() {
  const lang = uiLang();
  DICT = lang !== "fr" ? I18N[lang] || null : null;
  loadFiches(lang);
  loadContent(lang);
  loadProgramme(lang);
  document.documentElement.lang = lang;
  // these two dialogs sit in the static page, outside what render() rebuilds
  document.getElementById("ov").setAttribute("aria-label", tr("Fiche de grammaire"));
  document.getElementById("pop").setAttribute("aria-label", tr("Tableaux des déclinaisons"));
}
function trCore(s) {
  if (DICT[s] !== undefined) return DICT[s];
  const qs = [], ns = [];
  const key = s.replace(Q_RE, (m, v) => { qs.push(v); return "«{q}»"; }).replace(NUM_RE, m => { ns.push(m); return "{n}"; });
  if (key !== s && DICT[key] !== undefined) {
    let qi = 0, ni = 0;
    return DICT[key].replace(/\{q\}/g, () => { const v = qs[qi++] ?? ""; return DICT[v] !== undefined ? DICT[v] : v; }).replace(/\{n\}/g, () => ns[ni++] ?? "");
  }
  if (s.includes("·")) {
    const parts = s.split(/(\s*·\s*)/), out = parts.map((x, i) => i % 2 || !/[A-Za-zÀ-ÿ]/.test(x) ? x : trCore(x));
    if (out.some((t, i) => t !== parts[i])) return out.join("");
  }
  return s;
}
function tr(s) {
  if (!DICT || !s) return s;
  const m = s.match(/^(\s*)([\s\S]*?)(\s*)$/);
  if (!m[2] || !/[A-Za-zÀ-ÿ]/.test(m[2])) return s;
  const core = m[2].replace(/\s+/g, " ");
  const t = trCore(core);
  if (t === core) return s;
  // French puts a space before : ; ? ! but English and Spanish don't
  return (/^[:;?!]/.test(t) ? m[1].replace(/ $/, "") : m[1]) + t + m[3];
}
function skipTr(el) { const c = el && el.closest && el.closest("[data-notr],[data-tr],[lang=de],script,style,textarea"); return !!c && !c.hasAttribute("data-tr"); }
function trText(t) { if (!skipTr(t.parentElement)) { const v = tr(t.nodeValue); if (v !== t.nodeValue) t.nodeValue = v; } }
function trTree(root) {
  if (root.nodeType === 3) { trText(root); return; }
  if (root.nodeType !== 1) return;
  const tw = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const nodes = []; let n; while ((n = tw.nextNode())) nodes.push(n);
  nodes.forEach(trText);
  for (const el of [root, ...root.querySelectorAll("[placeholder],[aria-label],[title]")]) {
    for (const a of ["placeholder", "aria-label", "title"]) {
      const v = el.getAttribute(a);
      if (v) { const t = tr(v); if (t !== v) el.setAttribute(a, t); }
    }
  }
}
const trObs = new MutationObserver(muts => {
  if (!DICT) return;
  trObs.disconnect();
  for (const m of muts) {
    if (m.type === "characterData") trText(m.target);
    else m.addedNodes.forEach(trTree);
  }
  watchTr();
});
function watchTr() { trObs.observe(document.body, { childList: true, subtree: true, characterData: true }); }
setDict();
watchTr();

/* ---------- events ---------- */
app.addEventListener("click", e => {
  const t = e.target.closest("button");
  if (!t) return;
  if (t.dataset.say) { speak(t.dataset.say); return; }
  if (t.dataset.fiche) { openFiche(+t.dataset.fiche); return; }
  if (t.id === "reloadbtn") { reloadApp(); return; }
  if (t.id === "autoNext") { settings.autoNext = !settings.autoNext; saveSettings(); render(); return; }
  if (t.dataset.sec) { if (!ov.hidden) closeFiche(); view = "home"; settings.sec = t.dataset.sec; if (settings.sec === "mots") settings.sub.mots = "hub"; setOpen = false; saveSettings(); render(); window.scrollTo(0, 0); return; }
  if (t.dataset.sub) { const [a, b] = t.dataset.sub.split(":"); settings.sub[a] = b; saveSettings(); render(); return; }
  if (t.dataset.go) { const [a, b] = t.dataset.go.split(":"); settings.sec = a; settings.sub[a] = b; saveSettings(); render(); window.scrollTo(0, 0); return; }
  if (t.id === "setbtn") { setOpen = !setOpen; render(); return; }
  if (t.id === "setclose") { setOpen = false; render(); return; }
  if (t.dataset.uilang) { if (t.dataset.uilang === "auto") delete settings.lang; else settings.lang = t.dataset.uilang; saveSettings(); setDict(); render(); return; }
  if (t.id === "bexport") { exportProgress(); return; }
  if (t.id === "bimport") { document.getElementById("bfile").click(); return; }
  if (t.id === "bcopy") { const ta = document.getElementById("bcode"); if (!ta.value) ta.value = backupText(); ta.select(); let ok = false; try { ok = document.execCommand("copy"); } catch (e) {} if (navigator.clipboard) navigator.clipboard.writeText(ta.value).then(() => bmsg("Code copié."), () => bmsg(ok ? "Code copié." : "Sélectionne le code et copie-le à la main.")); else bmsg(ok ? "Code copié." : "Sélectionne le code et copie-le à la main."); return; }
  if (t.id === "bpaste") { const ta = document.getElementById("bcode"); if (!ta.value.trim()) { bmsg("Colle d'abord un code de sauvegarde dans le champ."); return; } importProgress(ta.value); return; }
  if (t.id === "ltOn") { settings.lt = !ltOn(); saveSettings(); render(); return; }
  if (t.id === "showIki") { settings.showIki = !showIki(); saveSettings(); render(); return; }
  if (t.id === "autoSay") { settings.autoSay = settings.autoSay === false; saveSettings(); render(); return; }
  if (ikiClick(t)) return;
  if (programmeClick(t)) return;
  if (t.dataset.mode) { settings.mode = t.dataset.mode; saveSettings(); render(); return; }
  if (t.dataset.ikimode) { settings.ikimode = t.dataset.ikimode; saveSettings(); render(); return; }
  if (t.dataset.vmode) { settings.vmode = t.dataset.vmode; saveSettings(); render(); return; }
  if (t.dataset.level) { settings.level = t.dataset.level; saveSettings(); render(); return; }
  if (t.dataset.dir) { settings.dir = t.dataset.dir; saveSettings(); render(); return; }
  if (t.dataset.ikidir) { settings.ikidir = t.dataset.ikidir; saveSettings(); render(); return; }
  if (t.dataset.start) { startSession(t.dataset.start, t.dataset.theme); return; }
  if (t.dataset.errgo) { startErrSession(t.dataset.errgo); return; }
  if (t.dataset.gopen) { settings.gopen[t.dataset.gopen] = !partOpen(t.dataset.gopen); saveSettings(); render(); return; }
  if (t.dataset.vx) { startVX(t.dataset.vx); return; }
  if (t.dataset.ctense) { settings.ctense = t.dataset.ctense; saveSettings(); render(); return; }
  if (t.dataset.csep) { settings.csep = t.dataset.csep; saveSettings(); render(); return; }
  if (t.dataset.sit) { const [k, v] = t.dataset.sit.split(":"); settings[k] = v; saveSettings(); render(); return; }
  if (t.dataset.dkmode) { settings.dkmode = t.dataset.dkmode; saveSettings(); render(); return; }
  if (t.dataset.dkg) { settings.dkgender = t.dataset.dkg === "1"; saveSettings(); render(); return; }
  if (t.id === "dkg") {
    // keep what was already typed while the card re-renders
    const vi = document.getElementById("vi"), typed = vi ? vi.value : "";
    settings.dkgender = !settings.dkgender; saveSettings(); renderVX();
    const v2 = document.getElementById("vi"); if (v2) { v2.value = typed; v2.focus({ preventScroll: true }); }
    return;
  }
  if (t.dataset.dkcase) { settings.dkcase = t.dataset.dkcase; saveSettings(); render(); return; }
  if (t.dataset.mkind) { settings.mkind = t.dataset.mkind; settings.mopen = true; saveSettings(); render(); const f = document.getElementById("m-de"); f && f.focus(); return; }
  if (t.dataset.delmine) { delMine(t.dataset.delmine); return; }
  if (vxClick(t)) return;
  if (t.id === "quit" || t.id === "home") { view = "home"; render(); window.scrollTo(0, 0); return; }
  if (t.id === "again") { if (S.err) startErrSession(S.err); else startSession(S.mode, S.themeId); return; }
  if (t.id === "next") { next(); return; }
  if (view !== "quiz") return;
  const q = S.qs[S.i];
  if (t.dataset.pick !== undefined) { const o = q.options[+t.dataset.pick]; answer(o === q.w, { picked: o }); return; }
  if (t.dataset.art) { answer(t.dataset.art === q.w.art, { picked: t.dataset.art }); return; }
  if (t.dataset.ins) { const ti = document.getElementById("ti"); const s = ti.selectionStart ?? ti.value.length, en = ti.selectionEnd ?? s; ti.value = ti.value.slice(0, s) + t.dataset.ins + ti.value.slice(en); ti.focus(); ti.setSelectionRange(s + 1, s + 1); return; }
  if (t.id === "skip") { answer(false, { typed: "" }); return; }
  if (t.id === "flip") { q.flipped = true; renderQuiz(); if (canSpeak) speak(q.w.de); return; }
  if (t.dataset.self !== undefined) { answer(t.dataset.self === "1"); return; }
});
app.addEventListener("submit", e => {
  e.preventDefault();
  if (e.target.id === "mf") { addMine(); return; }
  if (view === "exam") { examGo(1); return; }
  if (view === "vx") { vxSubmit(); return; }
  const q = S.qs[S.i];
  const val = document.getElementById("ti").value;
  if (!val.trim()) return;
  const r = checkTyped(q.w, val);
  answer(r.ok, { typed: val, near: r.ok && !r.exact, why: r.why });
});
app.addEventListener("change", e => {
  if (e.target.id === "bfile" && e.target.files[0]) { e.target.files[0].text().then(importProgress); e.target.value = ""; }
});
app.addEventListener("toggle", e => { if (e.target.classList && e.target.classList.contains("bcode") && e.target.open) { const ta = document.getElementById("bcode"); if (ta && !ta.value) ta.value = backupText(); } }, true);
app.addEventListener("input", e => {
  if (e.target.id === "q") { settings.q = e.target.value; renderLex(); }
  if (IA) ikiInput(e.target);
  if (view === "exam") examInput(e.target);
  if (e.target.id === "qi") { settings.qi = e.target.value; saveSettings(); renderIrrList(); }
  if (e.target.id === "qp") { settings.qp = e.target.value; saveSettings(); renderVpList(); }
});
document.addEventListener("keydown", e => {
  if (view === "vx") {
    if (!ov.hidden || !pop.hidden || e.target.tagName === "BUTTON") return;
    const vq = VX.qs[VX.i];
    if (vq.answered && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); vxNext(); }
    return;
  }
  if (!ov.hidden || view !== "quiz" || e.target.tagName === "BUTTON" || e.target.tagName === "INPUT" && !S.qs[S.i].answered) return;
  const q = S.qs[S.i];
  if (q.answered && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); next(); return; }
  if (!q.answered && q.options && /^[1-4]$/.test(e.key)) { const o = q.options[+e.key - 1]; if (o) answer(o === q.w, { picked: o }); }
  if (!q.answered && q.type === "article" && /^[1-3]$/.test(e.key)) { const a = ["der", "die", "das"][+e.key - 1]; answer(a === q.w.art, { picked: a }); }
});

render();
initRemote();
