<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="AFFICHER annee" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2etat="inactif" F2defaut="" F2para="" F2lignes=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param maxBoucle="500000" epaisseurLigne="2" totalAffichages="1000" totalBoucles="5000000" arrondiAuto="vrai" nbDecimales="8" epaisseurPoint="2"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="nbAnnee EST_DU_TYPE NOMBRE" code="1#NOMBRE#nbAnnee"/>
        <item algoitem="annee EST_DU_TYPE NOMBRE" code="1#NOMBRE#annee"/>
        <item algoitem="hab EST_DU_TYPE NOMBRE" code="1#NOMBRE#hab"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="hab PREND_LA_VALEUR 96809" code="5#hab#96809#pasliste"/>
        <item algoitem="annee PREND_LA_VALEUR 2015" code="5#annee#2015#pasliste"/>
        <item algoitem="TANT_QUE (hab &lt; 120000) FAIRE" code="15#hab &lt; 120000">
            <item algoitem="DEBUT_TANT_QUE" code="16#debuttantque"/>
            <item algoitem="nbAnnee PREND_LA_VALEUR nbAnnee + 1" code="5#nbAnnee#nbAnnee + 1#pasliste"/>
            <item algoitem="hab PREND_LA_VALEUR hab+(hab*0.0089)" code="5#hab#hab+(hab*0.0089)#pasliste"/>
            <item algoitem="FIN_TANT_QUE" code="17#fintantque"/>
        </item>
        <item algoitem="AFFICHER &quot;Il faudra &quot;" code="4#Il faudra #0"/>
        <item algoitem="AFFICHER nbAnnee" code="3#nbAnnee#0#pasliste"/>
        <item algoitem="AFFICHER &quot; années pour que la ville atteigne 120 000 habitants.&quot;" code="4# années pour que la ville atteigne 120 000 habitants.#1"/>
        <item algoitem="annee PREND_LA_VALEUR annee + nbAnnee" code="5#annee#annee + nbAnnee#pasliste"/>
        <item algoitem="AFFICHER &quot;Nous serons en : &quot;" code="4#Nous serons en : #0"/>
        <item algoitem="AFFICHER annee" code="3#annee#0#pasliste"/>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
