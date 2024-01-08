# initialisation repo git
git init

# Ajouter un fichier et le commit
git add .
git commit -m "C1"

# Modifier la première ligne et commit
git commit -am "C2"

# Créer une branche B1 à partir de C1
git checkout -b B1 <id du commit C1>

# Modifier le fichier et commit
git commit -am "C3"

# Merge de B1 vers master
git checkout master
git merge B1
**Résoudre les conflits dans vsCode**
git commit -am "Fusion de branche B1 et master"