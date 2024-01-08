<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="AFFICHER &quot;saisie valide !&quot;"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2para="" F2etat="inactif" F2defaut="" F2lignes=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param totalBoucles="5000000" nbDecimales="8" epaisseurLigne="2" arrondiAuto="vrai" maxBoucle="500000" epaisseurPoint="2" totalAffichages="1000"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#CHAINE#C" algoitem="C EST_DU_TYPE CHAINE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="4#Entrez une lettre en majuscule #0" algoitem="AFFICHER &quot;Entrez une lettre en majuscule &quot;"/>
        <item code="2#C#pasliste" algoitem="LIRE C"/>
        <item code="15#C &lt; &quot;A&quot; OU C > &quot;Z&quot;" algoitem="TANT_QUE (C &lt; &quot;A&quot; OU C > &quot;Z&quot;) FAIRE">
            <item code="16#debuttantque" algoitem="DEBUT_TANT_QUE"/>
            <item code="4#Erreur, merci de saisir une lettre en majuscule !#0" algoitem="AFFICHER &quot;Erreur, merci de saisir une lettre en majuscule !&quot;"/>
            <item code="2#C#pasliste" algoitem="LIRE C"/>
            <item code="17#fintantque" algoitem="FIN_TANT_QUE"/>
        </item>
        <item code="4#saisie valide !#0" algoitem="AFFICHER &quot;saisie valide !&quot;"/>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
