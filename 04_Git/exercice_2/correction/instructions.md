# Créer un nouveau repo
git init

# Ajouter un fichier et commit
git add .
git commit -m "C1"

# Ajouter un nouveau fichier et commit
git add .
git commit -m "C2"

# Modifier sur le deuxième fichier et commit
git commit -am "C3"

# Annuler les modifications du dernier commit
git reset --soft head~

# Créer une branche à partir du 1er commit
git branch branche_1 aa75b31fc7db913af2b0b37a6b6aeef7113427ff

# se rendre sur la branche
git checkout branche_1

# faire un commit sur la branche
git commit -am "commit 2 branche_1"

# Tagger la version
git tag -a mon_tag -m "mon premier tag"

# se rendre sur la branche master
git checkout master

# Supprimer la branche
git branch -d branche_1