<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="AFFICHERCALCUL perimetreRectangle(100, 13)" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2lignes="" F2etat="inactif" F2defaut="" F2para=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param totalAffichages="1000" nbDecimales="8" arrondiAuto="vrai" maxBoucle="500000" totalBoucles="5000000" epaisseurLigne="2" epaisseurPoint="2"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES">
        <item code="201#perimetreRectangle #largeur, longueur" algoitem="FONCTION perimetreRectangle (largeur, longueur)">
            <item code="202#declarationsvariablesfonction" algoitem="VARIABLES_FONCTION">
                <item code="1#NOMBRE#perimetre" algoitem="perimetre EST_DU_TYPE NOMBRE"/>
            </item>
            <item code="203#debutfonction" algoitem="DEBUT_FONCTION"/>
            <item code="5#perimetre#2*(largeur+longueur)#pasliste" algoitem="perimetre PREND_LA_VALEUR 2*(largeur+longueur)"/>
            <item code="205#perimetre" algoitem="RENVOYER perimetre"/>
            <item code="204#finfonction" algoitem="FIN_FONCTION"/>
        </item>
    </item>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#resultat" algoitem="resultat EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#resultat2" algoitem="resultat2 EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#resultat3" algoitem="resultat3 EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="5#resultat#perimetreRectangle(5,10)#pasliste" algoitem="resultat PREND_LA_VALEUR perimetreRectangle(5,10)"/>
        <item code="3#resultat#1#pasliste" algoitem="AFFICHER resultat"/>
        <item code="5#resultat2#perimetreRectangle(3,25)#pasliste" algoitem="resultat2 PREND_LA_VALEUR perimetreRectangle(3,25)"/>
        <item code="3#resultat2#1#pasliste" algoitem="AFFICHER resultat2"/>
        <item code="5#resultat3#perimetreRectangle(20,35)#pasliste" algoitem="resultat3 PREND_LA_VALEUR perimetreRectangle(20,35)"/>
        <item code="3#resultat3#1#pasliste" algoitem="AFFICHER resultat3"/>
        <item code="20#perimetreRectangle(100, 13)#0" algoitem="AFFICHERCALCUL perimetreRectangle(100, 13)"/>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
