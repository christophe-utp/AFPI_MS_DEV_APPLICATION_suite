# Etiquetage

### Lister les tag 
=> git tag

### Créer un tag
=> git tag -a nom_tag -m "message"

### Supprimer un tag
=> git tag -d nom_tag

# Branche

### Lister les branches
git branch

### Creation d'une nouvelle branche
git branch nom_branche

### Se positionner sur une branche
git checkout nom_branche

### Supprimer une branche
/!\ sortir de la branche avant
git branch -d nom_branch

Possible de forcer la suppression :
git branch -D nom_branch

# Historique des commits

### afficher l'historique 
git log

# Annuler une action

git reset [mode]

mode :
    - --soft: ne touche ni à l'index, ni à la working copy
    - --hard: reset l'index et la working copy
    - --mixed: reset l'index mais working copy.