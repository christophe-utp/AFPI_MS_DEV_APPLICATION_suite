# Création d'un nouveau projet sur gitHub
# Cloner le repo en local
git clone [url_projet]

# Modifier le fichier et commit
git commit -am "C2"

# Créer une nouvelle branche à partir de C1 et la pousser
git checkout -b B2 [id du commit]
git push origin --all

# Sur B2 modifier le fichier, commit et pousser
git commit -am "C3"
git push --set-upstream origin B2

# Lister toutes les branches
git branch

# Tagger C3
git tag T1

# Merge de B2 sur main
git checkout main
git merge B2
**Résoudre les conflit en ouvrant le fichier concerné sur VsCode**

# Commit et pousser le le repo distant
git commit -am "C4"
git push
