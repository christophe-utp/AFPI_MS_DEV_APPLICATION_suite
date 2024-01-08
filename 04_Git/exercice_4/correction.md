# Créer un nouveau repository git
git init

# Ajouter un fichier et le commit 
git add .
git commit -m "C1"

# Créer une branche B1 à partir de C1
git checkout -b B1

# Faire une modification et commit
git add .
git commit -m "C2"

# Merge de B1 ver s master
git checkout master
git merge B1