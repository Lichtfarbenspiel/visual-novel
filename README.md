# FUDGE_Story
A FUDGE module for the easy development of interactive stories, visual novels and simple adventure games

# Links
- [Zur Visual Novel](https://lichtfarbenspiel.github.io/visual-novel/Abschluss/)
- [Code](Abschluss/Source)
- [Konzept](Abschluss/Docs)
- [Gepacktes Archiv](https://drive.google.com/file/d/13Sc83oxJ4-kZUEhsbEV0V1qL7iOKTqpK/view?usp=sharing)

# Reference
- [APIs](https://jirkadelloro.github.io/FUDGE_Story/Documentation/Reference/#fudge-story-reference)

## Bewertungskriterien
© Prof. Dipl.-Ing. Jirka R. Dell'Oro-Friedl, HFU

| Nr | Bezeichnung           | Inhalt                                                                                                                                                                                                                                                                         |
|---:|-----------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|    | Titel                 | Wie die Meere Untergehen
|    | Name                  | Salome Dieterle
|    | Matrikelnummer        | 259263
|  1 | Konzeption     | [Konzept](Abschluss/Docs/Wie die Meere Untergehen - Konzept.pdf)
“Wie die Meere untergehen” ist eine Visual Novel die, neben dem klassischen Unterhaltungsaspekt, Wissen über die Weltmeere vermitteln soll. Dabei begegnen die Spieler einer Meerjungfrau, die sich darum bemüht, hilfsbedürftige Meeresbewohner zu unterstützen wo sie nur kann. Gleichzeitig versucht sie ihren Lebensraum und den vieler anderer Spezies von der konstanten und immer weiter ansteigenden, von Menschen verursachten, Verschmutzung zu befreien. Bei dieser, schier unmöglichen Aufgabe kann sie die Hilfe der Spieler sehr gut gebrauchen. Im Gegenzug begleitet sie dann die Spieler durch die Visual Novel hindurch und gibt dabei interessantes und teils auch sehr erschreckendes Wissen weiter, wie beispielsweise Informationen über die aktuellen Zustände dieser bewundernswerten und eindrucksvollen Unterwasserwelten.
Durch diese etwas andere Form des Japanischen Adventure Games, soll spielerisch Wissen vermittelt werden, wie auch ein Bewusstsein gegenüber unserer Natur – besonders gegenüber den Meeren – erschaffen bzw. verstärkt werden. So sollen die Spieler dann auch zum weiteren Nachdenken und vielleicht sogar zum eigenem Handeln angeregt werden.                                                                                                                          |
|  2 | Charakter-Konzept     | Muriel ist eine Meerjungfrau, die den User durch die Visual Novel begleitet.
Sie lebt in einer kleinen Gemeinschaft mit Fünf weiteren Meerjungfrauen im Atlantik. Sie ist sehr aufgeschlossen, empathisch und hilfsbereit anderen Lebewesen gegenüber. Sie fühlt sich sehr dazu verpflichtet, ihren Lebensraum und den vieler weiterer Lebewesen zu schützen. Sei es das Sammeln von Müll, oder Schildkröten in Not zu unterstützen – sie hilft, wo sie nur kann.
Ihr Wunsch ist es die Meere zu retten und sie hofft, den Menschen zeigen zu können, in welchem Zustand sich die Meere aktuell befinden.
Muriel den Archetypen „Held“ und „Betreuer“ zuzuordnen. Sie ist der einzige Character in dieser Visual Novel.                                                                                                                                                                                |
|  3 | Auswahlmöglichkeiten | Es stehen viele verschiedene Auswahlmöglichkeiten zur Gestaltung der Story zu verfügung. Dabei sind es meistens Zwei, höchstens Drei Optionen                                                                                                                                                    |
|  4 | Branching narratives      | Siehe hierzu das [UML Diagramm](Abschluss/Docs/Diagrams/structure.png)                                                                                                                                                          |
|  5 | Transitions            | Insgesamt werden Drei verschiedene Transitions eingesetzt. Diese sind immer zwischen den verschiedenen Szenen angebracht. Eine Ausnahme gibt es jedoch, hier wird die Transition verwendet, um den Strand von einem Müll-Anteil zu säubern.                                                                                                                              |
|  6 | Novel-Pages            | Novel Pages werden eingesetzt, um eine Kurzbeschreibung der Novel darzustellen, wie auch die Quellenangaben und Credits. Außerdem kommen Novel Pages zum Einsatz, um erweiterte, optionale Informationen darzustellen, sowie zur zusätzlichen visuellen Darstellung von Inhalten.                                                                                                                                                          |
|  7 |         Audio         | Es gibt eine gleichbleibende Hintergrundmusik. Ansonsten werden Sounds wie das Geschrei von Möven, den Wellen und im Sand laufender Schildkröten verwendet.                                                                                       |
|  8 |         GUI            | Ein grafisches Interface gibt dem User die Möglichkeit, Einstellungen beim Programmstart oder während des Programmlaufs vorzunehmen. Dabei handelt es sich um ein Ingame-Menu. Hier kann der User den Spielstand laden/speichern, die Lautstärke regeln, eine Beschreibung der Novel, wie auch die Angabe der Quellen und Credits einsehen.                                                                                                                                                                       |
|  9 | Input-Feld(er)          | Es werden insgesamt zwei Input-Felder verwendet. Einerseits direkt beim Start, hier wird der User aufgefordert einen Namen einzugeben. Des weiteren wird der User zu einem bestimmten Zeitpunkt aufgefordert, eine Schätzung abzugeben, hier kommt ebenfalls ein Input-Feld zum Einsatz.                                                                                                           |
|  10 | Punkteverteilungssystem     | Das Punkteverteilungssystem dient dem User als Orientierung, wie viele "Wissenspunkte" bereits gesamelt wurden. Beim Wegwerfen von bereits aufgesammelten Plastikflaschen, gibt es Strafpunkte, die von der Wissensskala abgezogen werden.                                                                                                                        |
|  11 | Inventory- und Item-System     | Das Inventarsystem übernimmt das Management von hinzugefügten, konsumierbaren sowie nicht-konsumierbaren Items. Es gibt insgesamt zwei Badges, die der User zur Belohnung erhält, sowie ein Plastikflaschen-Item, das der User beim Säubern des Strands erhält. Dieses Item kann ausgespielt werden, dabei verliert der User allerdings Wissenspunkte.                                                                                                                    |
| 12 | Animation     | Es wird eine Animation verwendet, um eine Baby-Schildkröte vom Strand an das Ufer laufen zu lassen.                                                                                                                                                  |
| 13 | Styling          | Sämtliche Elemente wurden mit css gestyled, um einen möglichst einheitlichen und stimmigen Look zu erhalten.                                                                                                                                                                                 |
| 14 | Enden          | Je nach gewähltem Pfad bekommt der User am Ende unterschiedliche Tipps, wie er oder sie im Alltag auf ihre Umwelt achten kann und was man selbst zum Umwelt- und Meeresschutz aktiv beitragen kann. Am Ende jedes Pfads wird dann allerdings auf den gleichen End Screen weitergeleitet. Hier wird dem User der erreichte Wissenspunktestand angezeigt. Es gibt hier auch die Option, direkt noch einmal zu spielen, um den Punktestand noch weiter zu erhöhen und mehr zu lernen. Dabei startet die Novel dann wieder in Szene Zwei.                                                                                                                                                                                 |
<br>

##  Abgabeformat

* Die Konzeption soll als .pdf-Dokument abgegeben werden.
* Platziere einen Link in der Readme-Datei deines VisualNovel-Repositories auf Github auf die fertige und in Github-Pages lauffähige Anwendung.
* Platziere ebenso Links zu den Stellen in deinem Repository, an denen der Quellcode und das Konzept-Dokument zu finden sind.
* Stelle zudem auf diese Art dort auch ein gepacktes Archiv zur Verfügung, welches folgende Daten enthält
  * Das Konzept-Dokument 
  * Die Projektordner inklusive aller erforderlichen Dateien, also auch Bild- und Audiodaten