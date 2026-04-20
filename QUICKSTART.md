# 🚀 GUIDE DE DÉMARRAGE RAPIDE

## ⚡ Étapes en 5 minutes

### 1. Personnalisez vos infos (OBLIGATOIRE)

Ouvrez `index.html` et remplacez :

**Ligne 30-31 + 47-58** → Vos liens GitHub et LinkedIn :
```html
href="https://github.com/VOTRE-USERNAME"
href="https://linkedin.com/in/VOTRE-PROFIL"
```

**Ligne 277** → Votre email :
```html
mailto:votre.email@example.com
```

**Lignes 145-198** → Liens vers vos projets réels

### 2. Ajoutez votre CV

- Renommez votre CV en : `cv-alexandre-pelaprat-flore.pdf`
- Placez-le dans le même dossier que `index.html`
- OU modifiez le nom ligne 305 de `index.html`

### 3. (Optionnel) Changez la couleur

Dans `style.css`, ligne 8 :
```css
--accent-color: #00ff88;  /* Changez cette valeur */
```

Suggestions :
- `#00d9ff` → Cyan
- `#bd00ff` → Violet
- `#ff0066` → Rose

### 4. Testez en local

Double-cliquez sur `index.html` → Le portfolio s'ouvre dans votre navigateur.

### 5. Mettez en ligne (GitHub Pages)

#### Option A : Sans Git (plus simple)

1. Créez un compte sur [github.com](https://github.com)
2. Créez un nouveau repository nommé : `votre-username.github.io`
3. Uploadez tous les fichiers via l'interface web
4. Allez dans Settings → Pages
5. Source : `main` branch, `/ (root)` folder
6. Votre site sera sur : `https://votre-username.github.io`

#### Option B : Avec Git

```bash
git init
git add .
git commit -m "Premier commit"
git remote add origin https://github.com/VOTRE-USERNAME/votre-username.github.io.git
git branch -M main
git push -u origin main
```

Puis activez GitHub Pages dans Settings → Pages.

---

## 🎨 Personnalisation avancée

### Ajouter des images de projets

1. Créez un dossier `images/` 
2. Ajoutez vos screenshots : `projet-wordpress.jpg`, `projet-pwa.jpg`
3. Dans `index.html`, remplacez les placeholders :

```html
<!-- Remplacez : -->
<div class="project-image-placeholder">
    <svg>...</svg>
</div>

<!-- Par : -->
<img src="images/projet-wordpress.jpg" alt="Mon projet WordPress" style="width:100%; height:100%; object-fit:cover;">
```

### Modifier les pourcentages de compétences

Lignes 230-260 de `index.html`, changez `--progress: XX%` :

```html
<div class="skill-progress" style="--progress: 85%"></div>
```

### Ajouter une nouvelle section

Copiez la structure d'une section existante et modifiez :
- L'attribut `id="nouvelle-section"`
- Le numéro de section
- Le contenu

N'oubliez pas d'ajouter le lien dans la navigation (ligne 26).

---

## ✅ Checklist avant publication

- [ ] Liens GitHub/LinkedIn changés
- [ ] Email mis à jour
- [ ] Liens projets fonctionnels
- [ ] CV uploadé
- [ ] Couleur choisie
- [ ] Testé en local
- [ ] Tous les liens cliquables testés
- [ ] Vérifié sur mobile (F12 dans Chrome)

---

## 🆘 Problèmes fréquents

**Le site ne s'affiche pas sur GitHub Pages ?**
- Vérifiez que le fichier s'appelle bien `index.html` (pas `Index.html`)
- Attendez 5 minutes après activation
- Videz le cache du navigateur (Ctrl + F5)

**Les animations ne fonctionnent pas ?**
- Vérifiez votre connexion internet (AOS et Google Fonts)
- Ouvrez la console (F12) pour voir les erreurs

**Le CV ne se télécharge pas ?**
- Vérifiez le nom du fichier
- Assurez-vous qu'il est au bon endroit (même dossier que index.html)

**Comment changer uniquement la couleur d'accent ?**
- Fichier : `style.css`
- Ligne : 8
- Variable : `--accent-color`

---

## 🎓 Pour aller plus loin

- Ajoutez Google Analytics pour tracker les visiteurs
- Connectez un nom de domaine personnalisé
- Ajoutez un dark/light mode toggle
- Intégrez un formulaire de contact avec Formspree

Plus d'infos dans le `README.md` complet.

---

**Bon courage ! 💪**

N'oubliez pas de mettre à jour vos liens sociaux et ton email ! 🎯
