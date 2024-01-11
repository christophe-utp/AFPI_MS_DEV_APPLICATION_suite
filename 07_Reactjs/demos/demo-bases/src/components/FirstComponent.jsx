import classes from "./FirstComponent.module.css";
import lapin from "./images/lapin.jpg"
/*
Un composant React n'est ni plus ni moins qu'une fonction javascript exportée par 
défaut dans un fichier.L'utilisation de cette fonction à l'extérieur passera par un
appel sous la forme d'une balise HTML
*/

// Syntaxe function(){}

function FirstComponent(){

    let firstname = "Toto"

    

    return(
        // React Fragment
        <>
        <div className={classes.bgyellow}>
            <h2>Mon premier composant</h2>
            <p>Salut la forme {firstname} ?</p>
            <h3> test </h3>
            {/* <img src="/logo512.png" alt="logo react js" /> */}
            <img src={lapin} alt="mon jolie lapin" />
        </div>
        </>
        
    )
}

export default FirstComponent