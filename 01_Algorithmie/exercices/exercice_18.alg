<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="FIN_TANT_QUE" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2etat="inactif" F2defaut="" F2para="" F2lignes=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param totalBoucles="5000000" arrondiAuto="vrai" epaisseurPoint="2" nbDecimales="8" totalAffichages="1000" epaisseurLigne="2" maxBoucle="500000"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#max" algoitem="max EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#min" algoitem="min EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#moyenne" algoitem="moyenne EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#sum" algoitem="sum EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#totalNote" algoitem="totalNote EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#note" algoitem="note EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#i" algoitem="i EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#choix" algoitem="choix EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="5#min#20#pasliste" algoitem="min PREND_LA_VALEUR 20"/>
        <item code="15#note != 777" algoitem="TANT_QUE (note != 777) FAIRE">
            <item code="16#debuttantque" algoitem="DEBUT_TANT_QUE"/>
            <item code="4#Merci de saisir la note n°#0" algoitem="AFFICHER &quot;Merci de saisir la note n°&quot;"/>
            <item code="3#i#0#pasliste" algoitem="AFFICHER i"/>
            <item code="2#note#pasliste" algoitem="LIRE note"/>
            <item code="6#note != 777" algoitem="SI (note != 777) ALORS">
                <item code="7#debutsi" algoitem="DEBUT_SI"/>
                <item code="5#sum#sum + note#pasliste" algoitem="sum PREND_LA_VALEUR sum + note"/>
                <item code="5#totalNote#totalNote + 1#pasliste" algoitem="totalNote PREND_LA_VALEUR totalNote + 1"/>
                <item code="6#note > max" algoitem="SI (note > max) ALORS">
                    <item code="7#debutsi" algoitem="DEBUT_SI"/>
                    <item code="5#max#note#pasliste" algoitem="max PREND_LA_VALEUR note"/>
                    <item code="8#finsi" algoitem="FIN_SI"/>
                </item>
                <item code="6#note &lt; min" algoitem="SI (note &lt; min) ALORS">
                    <item code="7#debutsi" algoitem="DEBUT_SI"/>
                    <item code="5#min#note#pasliste" algoitem="min PREND_LA_VALEUR note"/>
                    <item code="8#finsi" algoitem="FIN_SI"/>
                </item>
                <item code="8#finsi" algoitem="FIN_SI"/>
            </item>
            <item code="17#fintantque" algoitem="FIN_TANT_QUE"/>
        </item>
        <item code="5#choix#-1#pasliste" algoitem="choix PREND_LA_VALEUR -1"/>
        <item code="15#choix != 0" algoitem="TANT_QUE (choix != 0) FAIRE">
            <item code="16#debuttantque" algoitem="DEBUT_TANT_QUE"/>
            <item code="4#Veuillez faire votre choix : #1" algoitem="AFFICHER &quot;Veuillez faire votre choix : &quot;"/>
            <item code="4#\t 1) Afficher la plus petite note \n\t 2) Afficher la plus grande note \n\t 3) Afficher la moyenne \n\t 0) Quitter le programme #0" algoitem="AFFICHER &quot;\t 1) Afficher la plus petite note \n\t 2) Afficher la plus grande note \n\t 3) Afficher la moyenne \n\t 0) Quitter le programme &quot;"/>
            <item code="2#choix#pasliste" algoitem="LIRE choix"/>
            <item code="6#choix == 1" algoitem="SI (choix == 1) ALORS">
                <item code="7#debutsi" algoitem="DEBUT_SI"/>
                <item code="4#La plus petit note : #0" algoitem="AFFICHER &quot;La plus petit note : &quot;"/>
                <item code="3#min#1#pasliste" algoitem="AFFICHER min"/>
                <item code="8#finsi" algoitem="FIN_SI"/>
                <item code="9#sinon" algoitem="SINON">
                    <item code="10#debutsinon" algoitem="DEBUT_SINON"/>
                    <item code="6#choix == 2" algoitem="SI (choix == 2) ALORS">
                        <item code="7#debutsi" algoitem="DEBUT_SI"/>
                        <item code="4#La plus grande note : #0" algoitem="AFFICHER &quot;La plus grande note : &quot;"/>
                        <item code="3#max#1#pasliste" algoitem="AFFICHER max"/>
                        <item code="8#finsi" algoitem="FIN_SI"/>
                        <item code="9#sinon" algoitem="SINON">
                            <item code="10#debutsinon" algoitem="DEBUT_SINON"/>
                            <item code="6#choix == 3" algoitem="SI (choix == 3) ALORS">
                                <item code="7#debutsi" algoitem="DEBUT_SI"/>
                                <item code="4#La moyenne : #0" algoitem="AFFICHER &quot;La moyenne : &quot;"/>
                                <item code="20#sum/totalNote#1" algoitem="AFFICHERCALCUL sum/totalNote"/>
                                <item code="8#finsi" algoitem="FIN_SI"/>
                            </item>
                            <item code="11#finsinon" algoitem="FIN_SINON"/>
                        </item>
                    </item>
                    <item code="11#finsinon" algoitem="FIN_SINON"/>
                </item>
            </item>
            <item code="17#fintantque" algoitem="FIN_TANT_QUE"/>
        </item>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
