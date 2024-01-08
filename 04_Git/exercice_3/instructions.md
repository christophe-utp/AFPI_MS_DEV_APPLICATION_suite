# Initialiser le projet git
git init

# Ajouter un fichier et commit 
git add .
git commit -m "C1"

# Modifier un fichier et commit 
git add .
git commit -m "C2"

# Créer une branche à partir de C1
git checkout -b B1 5838f67fff85297c5a9d96e1a2630e4b4dbc6dd6

# Faire une modification et commit sur la branche B1
git add .
git commit -m "C3"

# Rebase de B1 vers la branche master
git checkout master
git rebase B1
git add .
git commit -m "un message"