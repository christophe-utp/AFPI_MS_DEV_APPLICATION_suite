<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="FIN_SINON"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2para="" F2etat="inactif" F2defaut="" F2lignes=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param totalBoucles="5000000" nbDecimales="8" epaisseurLigne="2" arrondiAuto="vrai" maxBoucle="500000" epaisseurPoint="2" totalAffichages="1000"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#taille" algoitem="taille EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#poids" algoitem="poids EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="4#Donner la taille en CM#0" algoitem="AFFICHER &quot;Donner la taille en CM&quot;"/>
        <item code="2#taille#pasliste" algoitem="LIRE taille"/>
        <item code="4#Donner un poids en KG#0" algoitem="AFFICHER &quot;Donner un poids en KG&quot;"/>
        <item code="2#poids#pasliste" algoitem="LIRE poids"/>
        <item code="6#(poids >= 43 ET poids &lt;= 47 ET taille >= 145 ET taille &lt;= 169) OU (poids >= 48 ET poids &lt;= 53 ET taille >= 145 et taille &lt;= 166) OU (poids >= 54 ET poids &lt;= 59 ET taille >= 145 ET taille &lt;= 163) OU (poids >= 60 et poids &lt;= 65 ET taille >= 145 ET taille &lt;= 160)" algoitem="SI ((poids >= 43 ET poids &lt;= 47 ET taille >= 145 ET taille &lt;= 169) OU (poids >= 48 ET poids &lt;= 53 ET taille >= 145 et taille &lt;= 166) OU (poids >= 54 ET poids &lt;= 59 ET taille >= 145 ET taille &lt;= 163) OU (poids >= 60 et poids &lt;= 65 ET taille >= 145 ET taille &lt;= 160)) ALORS">
            <item code="7#debutsi" algoitem="DEBUT_SI"/>
            <item code="4#Taille 1#0" algoitem="AFFICHER &quot;Taille 1&quot;"/>
            <item code="8#finsi" algoitem="FIN_SI"/>
            <item code="9#sinon" algoitem="SINON">
                <item code="10#debutsinon" algoitem="DEBUT_SINON"/>
                <item code="6#(poids >= 48 ET poids &lt;= 53 ET taille >= 169 ET taille &lt;= 178) OU (poids >= 54 ET poids &lt;= 59 ET taille >= 166 et taille &lt;= 175) OU (poids >= 60 ET poids &lt;= 65 ET taille >= 163 ET taille &lt;= 172) OU (poids >= 66 et poids &lt;= 71 ET taille >= 160 ET taille &lt;= 169)" algoitem="SI ((poids >= 48 ET poids &lt;= 53 ET taille >= 169 ET taille &lt;= 178) OU (poids >= 54 ET poids &lt;= 59 ET taille >= 166 et taille &lt;= 175) OU (poids >= 60 ET poids &lt;= 65 ET taille >= 163 ET taille &lt;= 172) OU (poids >= 66 et poids &lt;= 71 ET taille >= 160 ET taille &lt;= 169)) ALORS">
                    <item code="7#debutsi" algoitem="DEBUT_SI"/>
                    <item code="4#Taille 2#0" algoitem="AFFICHER &quot;Taille 2&quot;"/>
                    <item code="8#finsi" algoitem="FIN_SI"/>
                    <item code="9#sinon" algoitem="SINON">
                        <item code="10#debutsinon" algoitem="DEBUT_SINON"/>
                        <item code="6#(poids >= 54 ET poids &lt;= 59 ET taille >= 178 ET taille &lt;= 183) OU (poids >= 60 ET poids &lt;= 65 ET taille >= 175 et taille &lt;= 183) OU (poids >= 66 ET poids &lt;= 71 ET taille >= 172 ET taille &lt;= 183) OU (poids >= 72 et poids &lt;= 77 ET taille >= 163 ET taille &lt;= 183)" algoitem="SI ((poids >= 54 ET poids &lt;= 59 ET taille >= 178 ET taille &lt;= 183) OU (poids >= 60 ET poids &lt;= 65 ET taille >= 175 et taille &lt;= 183) OU (poids >= 66 ET poids &lt;= 71 ET taille >= 172 ET taille &lt;= 183) OU (poids >= 72 et poids &lt;= 77 ET taille >= 163 ET taille &lt;= 183)) ALORS">
                            <item code="7#debutsi" algoitem="DEBUT_SI"/>
                            <item code="4#Taille 3#0" algoitem="AFFICHER &quot;Taille 3&quot;"/>
                            <item code="8#finsi" algoitem="FIN_SI"/>
                            <item code="9#sinon" algoitem="SINON">
                                <item code="10#debutsinon" algoitem="DEBUT_SINON"/>
                                <item code="4#Aucune taille pour vous#0" algoitem="AFFICHER &quot;Aucune taille pour vous&quot;"/>
                                <item code="11#finsinon" algoitem="FIN_SINON"/>
                            </item>
                        </item>
                        <item code="11#finsinon" algoitem="FIN_SINON"/>
                    </item>
                </item>
                <item code="11#finsinon" algoitem="FIN_SINON"/>
            </item>
        </item>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
