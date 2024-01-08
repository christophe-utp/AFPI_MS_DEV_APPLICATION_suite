<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="AFFICHER &quot;Merci&quot;"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2para="" F2etat="inactif" F2defaut="" F2lignes=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param totalBoucles="5000000" nbDecimales="8" epaisseurLigne="2" arrondiAuto="vrai" maxBoucle="500000" epaisseurPoint="2" totalAffichages="1000"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#reponse" algoitem="reponse EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="4#Saisir un nombre entre 1 et 3 :#0" algoitem="AFFICHER &quot;Saisir un nombre entre 1 et 3 :&quot;"/>
        <item code="2#reponse#pasliste" algoitem="LIRE reponse"/>
        <item code="15#reponse &lt; 1 OU reponse > 3" algoitem="TANT_QUE (reponse &lt; 1 OU reponse > 3) FAIRE">
            <item code="16#debuttantque" algoitem="DEBUT_TANT_QUE"/>
            <item code="4#Erreur saisie invalide, merci de saisir un nombre entre 1 et 3#0" algoitem="AFFICHER &quot;Erreur saisie invalide, merci de saisir un nombre entre 1 et 3&quot;"/>
            <item code="2#reponse#pasliste" algoitem="LIRE reponse"/>
            <item code="17#fintantque" algoitem="FIN_TANT_QUE"/>
        </item>
        <item code="4#Merci#0" algoitem="AFFICHER &quot;Merci&quot;"/>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
