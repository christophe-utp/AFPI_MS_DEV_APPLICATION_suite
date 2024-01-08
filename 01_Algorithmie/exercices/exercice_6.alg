<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="AFFICHER &quot; €&quot;"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2para="" F2etat="inactif" F2defaut="" F2lignes=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param totalBoucles="5000000" nbDecimales="8" epaisseurLigne="2" arrondiAuto="vrai" maxBoucle="500000" epaisseurPoint="2" totalAffichages="1000"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#c" algoitem="c EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#t" algoitem="t EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#n" algoitem="n EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#resultat" algoitem="resultat EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="4#Entrez la valeur du capital initial : #0" algoitem="AFFICHER &quot;Entrez la valeur du capital initial : &quot;"/>
        <item code="2#c#pasliste" algoitem="LIRE c"/>
        <item code="4#Entrez la valeur du taux d'intérêts : #0" algoitem="AFFICHER &quot;Entrez la valeur du taux d'intérêts : &quot;"/>
        <item code="2#t#pasliste" algoitem="LIRE t"/>
        <item code="5#t#t/100#pasliste" algoitem="t PREND_LA_VALEUR t/100"/>
        <item code="4#Entrez la durée de l'épargne : #0" algoitem="AFFICHER &quot;Entrez la durée de l'épargne : &quot;"/>
        <item code="2#n#pasliste" algoitem="LIRE n"/>
        <item code="5#resultat#c*pow(1+t,n)#pasliste" algoitem="resultat PREND_LA_VALEUR c*pow(1+t,n)"/>
        <item code="4#Après calcul : #0" algoitem="AFFICHER &quot;Après calcul : &quot;"/>
        <item code="3#resultat#0#pasliste" algoitem="AFFICHER resultat"/>
        <item code="4# €#0" algoitem="AFFICHER &quot; €&quot;"/>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
