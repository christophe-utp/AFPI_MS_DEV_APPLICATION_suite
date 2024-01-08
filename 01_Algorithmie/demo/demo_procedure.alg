<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="APPELER_FONCTION test()" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2lignes="" F2etat="inactif" F2defaut="" F2para=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param totalAffichages="1000" nbDecimales="8" arrondiAuto="vrai" maxBoucle="500000" totalBoucles="5000000" epaisseurLigne="2" epaisseurPoint="2"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES">
        <item code="201#test# " algoitem="FONCTION test( )">
            <item code="202#declarationsvariablesfonction" algoitem="VARIABLES_FONCTION"/>
            <item code="203#debutfonction" algoitem="DEBUT_FONCTION"/>
            <item code="4#Bonjour #1" algoitem="AFFICHER &quot;Bonjour &quot;"/>
            <item code="4#Je suis #1" algoitem="AFFICHER &quot;Je suis &quot;"/>
            <item code="4#Christophe#1" algoitem="AFFICHER &quot;Christophe&quot;"/>
            <item code="4#Bye#1" algoitem="AFFICHER &quot;Bye&quot;"/>
            <item code="204#finfonction" algoitem="FIN_FONCTION"/>
        </item>
    </item>
    <item code="100#declarationsvariables" algoitem="VARIABLES"/>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="206#test()" algoitem="APPELER_FONCTION test()"/>
        <item code="206#test()" algoitem="APPELER_FONCTION test()"/>
        <item code="206#test()" algoitem="APPELER_FONCTION test()"/>
        <item code="206#test()" algoitem="APPELER_FONCTION test()"/>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
