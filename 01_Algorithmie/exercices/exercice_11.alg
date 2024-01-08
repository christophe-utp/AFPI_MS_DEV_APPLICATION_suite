<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="AFFICHER &quot; ans pour doubler le capital&quot;" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2etat="inactif" F2para="" F2defaut="" F2lignes=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param epaisseurLigne="2" totalAffichages="1000" nbDecimales="8" epaisseurPoint="2" arrondiAuto="vrai" totalBoucles="5000000" maxBoucle="500000"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#capital_initial" algoitem="capital_initial EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#capital_final" algoitem="capital_final EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#annee" algoitem="annee EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#taux" algoitem="taux EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="4#Veuillez saisir le capital initial : #0" algoitem="AFFICHER &quot;Veuillez saisir le capital initial : &quot;"/>
        <item code="2#capital_initial#pasliste" algoitem="LIRE capital_initial"/>
        <item code="4#Veuillez saisir le taux : #0" algoitem="AFFICHER &quot;Veuillez saisir le taux : &quot;"/>
        <item code="2#taux#pasliste" algoitem="LIRE taux"/>
        <item code="5#taux#taux/100#pasliste" algoitem="taux PREND_LA_VALEUR taux/100"/>
        <item code="5#annee#0#pasliste" algoitem="annee PREND_LA_VALEUR 0"/>
        <item code="15#capital_final &lt; capital_initial*2" algoitem="TANT_QUE (capital_final &lt; capital_initial*2) FAIRE">
            <item code="16#debuttantque" algoitem="DEBUT_TANT_QUE"/>
            <item code="5#annee#annee + 1#pasliste" algoitem="annee PREND_LA_VALEUR annee + 1"/>
            <item code="5#capital_final#capital_initial*pow(1+taux,annee)#pasliste" algoitem="capital_final PREND_LA_VALEUR capital_initial*pow(1+taux,annee)"/>
            <item code="3#capital_final#1#pasliste" algoitem="AFFICHER capital_final"/>
            <item code="3#annee#1#pasliste" algoitem="AFFICHER annee"/>
            <item code="17#fintantque" algoitem="FIN_TANT_QUE"/>
        </item>
        <item code="4#Il faudra #0" algoitem="AFFICHER &quot;Il faudra &quot;"/>
        <item code="3#annee#0#pasliste" algoitem="AFFICHER annee"/>
        <item code="4# ans pour doubler le capital#0" algoitem="AFFICHER &quot; ans pour doubler le capital&quot;"/>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
