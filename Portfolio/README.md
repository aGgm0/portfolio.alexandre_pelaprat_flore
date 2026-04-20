# Portfolio Alexandre Pelaprat Flore 🚀

Portfolio personnel avec un design cyberpunk minimaliste, animations fluides et architecture moderne.

## ✨ Fonctionnalités

- 🎨 Design cyberpunk minimaliste avec grille animée en fond
- ⚡ Effet terminal au chargement avec animation typing
- 🎯 Navigation smooth avec indicateur de section active
- 📱 100% Responsive (mobile, tablet, desktop)
- 🌊 Animations au scroll (AOS)
- 💫 Effets parallax subtils
- 🎭 Cursor trail interactif
- 🔧 Variables CSS pour personnalisation facile
- 📄 Section CV téléchargeable

## 🎨 Personnalisation rapide

### Changer la couleur d'accent

Ouvrez `style.css` et modifiez la variable `--accent-color` (ligne 8) :

```css
:root {
    /* Essayez ces couleurs : */
    --accent-color: #00ff88;  /* Vert (actuel) */
    --accent-color: #00d9ff;  /* Cyan */
    --accent-color: #bd00ff;  /* Violet */
    --accent-color: #ff0066;  /* Rose/Rouge */
    --accent-color: #ffd700;  /* Jaune/Or */
}
```

### Modifier vos informations

#### 1. Dans `index.html` :

**Liens sociaux** (lignes 30-31 et 47-58) :
```html
<a href="https://github.com/VOTRE-USERNAME" target="_blank">
<a href="https://linkedin.com/in/VOTRE-PROFIL" target="_blank">
```

**Email** (ligne 277) :
```html
<a href="mailto:votre.email@example.com" class="contact-link email-link">
```

**Liens projets** (lignes 145-155 et 188-198) :
Remplacez les `href="#"` par vos vrais liens GitHub et démos.

**Pourcentages des compétences** (lignes 230-260) :
Ajustez `style="--progress: XX%"` selon votre niveau.

#### 2. Ajouter votre CV :

Placez votre fichier PDF dans le dossier et renommez-le :
```
cv-alexandre-pelaprat-flore.pdf
```
Ou modifiez le lien ligne 305 :
```html
<a href="./VOTRE-CV.pdf" download class="cv-download-btn">
```

### Ajouter des images à vos projets

Remplacez les placeholders SVG par de vraies images :

```html
<!-- Avant : -->
<div class="project-image-placeholder">
    <svg>...</svg>
</div>

<!-- Après : -->
<img src="images/projet-wordpress.jpg" alt="Projet WordPress">
```

Créez un dossier `images/` et ajoutez vos captures d'écran.

## 📦 Structure des fichiers

```
portfolio/
│
├── index.html          # Structure HTML
├── style.css           # Styles et animations
├── script.js           # Interactions JavaScript
├── cv-alexandre-pelaprat-flore.pdf  # Votre CV
├── images/            # (à créer) Vos images de projets
│   ├── projet-1.jpg
│   └── projet-2.jpg
└── README.md          # Ce fichier
```

## 🚀 Déploiement sur GitHub Pages (GRATUIT)

### Étape 1 : Créer un repository GitHub

1. Allez sur [GitHub](https://github.com) et connectez-vous
2. Cliquez sur le bouton **"New repository"** (ou le **+** en haut à droite)
3. Nommez votre repository : `votre-username.github.io` 
   *(remplacez `votre-username` par votre nom d'utilisateur GitHub)*
4. Cochez **"Public"**
5. Cliquez sur **"Create repository"**

### Étape 2 : Upload vos fichiers

**Méthode A : Via l'interface web (plus simple)**

1. Dans votre nouveau repository, cliquez sur **"uploading an existing file"**
2. Glissez-déposez tous vos fichiers :
   - `index.html`
   - `style.css`
   - `script.js`
   - `cv-alexandre-pelaprat-flore.pdf`
   - (+ dossier `images/` si vous en avez)
3. Scrollez en bas et cliquez sur **"Commit changes"**

**Méthode B : Via Git (plus professionnel)**

```bash
# Dans le terminal, naviguez vers votre dossier portfolio
cd chemin/vers/votre/portfolio

# Initialisez Git
git init

# Ajoutez tous les fichiers
git add .

# Premier commit
git commit -m "Premier commit - Portfolio en ligne"

# Connectez votre repository
git remote add origin https://github.com/VOTRE-USERNAME/votre-username.github.io.git

# Envoyez vers GitHub
git branch -M main
git push -u origin main
```

### Étape 3 : Activer GitHub Pages

1. Dans votre repository, allez dans **Settings** (roue crantée)
2. Dans le menu de gauche, cliquez sur **Pages**
3. Sous **"Source"**, sélectionnez :
   - Branch : `main`
   - Folder : `/ (root)`
4. Cliquez sur **Save**

⏰ **Patientez 2-5 minutes**, votre site sera disponible à :
```
https://votre-username.github.io
```

### Étape 4 : Mettre à jour votre site

Chaque fois que vous modifiez votre portfolio :

```bash
git add .
git commit -m "Description de vos changements"
git push
```

Les changements seront en ligne après 1-2 minutes.

## 🎯 Checklist avant publication

- [ ] Remplacez tous les liens GitHub/LinkedIn
- [ ] Changez l'email de contact
- [ ] Ajoutez vos vrais liens de projets
- [ ] Uploadez votre CV en PDF
- [ ] (Optionnel) Ajoutez des images de projets
- [ ] Testez tous les liens
- [ ] Vérifiez la responsivité (F12 → mode mobile dans le navigateur)

## 🛠️ Modification avancée

### Ajouter un 3ème projet

Copiez-collez ce bloc dans la section projets (ligne ~201) :

```html
<article class="project-card" data-aos="fade-up" data-aos-delay="300">
    <div class="project-image">
        <div class="project-image-placeholder">
            <!-- SVG icon -->
        </div>
    </div>
    <div class="project-content">
        <div class="project-tags">
            <span class="tag">Tech1</span>
            <span class="tag">Tech2</span>
        </div>
        <h3 class="project-title">Nom du projet</h3>
        <p class="project-description">Description...</p>
        <div class="project-links">
            <a href="#" class="project-link" target="_blank">
                <span>Voir le projet</span>
                <!-- SVG -->
            </a>
        </div>
    </div>
</article>
```

### Changer les polices

Les polices actuelles sont **JetBrains Mono** (code) et **Syne** (titres).

Pour changer, allez sur [Google Fonts](https://fonts.google.com), choisissez vos polices et :

1. Remplacez le lien ligne 11 de `index.html`
2. Modifiez les variables lignes 19-20 de `style.css`

### Désactiver le cursor trail

Dans `script.js`, commentez les lignes 94-155 (section "Cursor Trail Effect").

## 📱 Compatibilité

- ✅ Chrome / Edge / Brave (Chromium)
- ✅ Firefox
- ✅ Safari
- ✅ Mobile iOS / Android

## 🤝 Support

Des questions ? Problèmes ? 

1. Vérifiez la console du navigateur (F12)
2. Consultez la [documentation GitHub Pages](https://docs.github.com/en/pages)
3. Contactez-moi via les liens sur le portfolio

## 📄 Licence

Libre d'utilisation pour votre portfolio personnel. 
Si vous réutilisez le design, un petit crédit est apprécié 😊

---

**Créé par Alexandre Pelaprat Flore** | 2026
