# SOAGY ÉMERGENCE — Site Corporate Premium

Site web corporate haut de gamme conçu pour **SOAGY ÉMERGENCE**  
**Location & Travaux Publics** • Hôtellerie • Restauration • Habillement • Commerce général

---

## Structure

```
soagy-site/
├── index.html          # Page principale (one-page avec ancres)
├── css/styles.css      # Charte graphique & responsive
├── js/main.js          # Interactions (menu, filtres, form)
├── assets/images/
│   └── logo.jpg        # Logo officiel
└── README.md
```

## Charte graphique extraite du logo

| Rôle            | Couleur     | Hex       |
|-----------------|-------------|-----------|
| Primaire        | Navy        | `#01356E` |
| Secondaire      | Charcoal    | `#41494C` |
| Accent          | Gold        | `#FEAC02` |
| Fond clair      | Off-white   | `#F8F9FA` |

**Typographies**  
- Titres : Montserrat  
- Corps : Inter  

## Points importants (conformes au brief)

- **Aucune donnée inventée** : chiffres, projets, engins, tarifs, coordonnées, témoignages sont en **placeholders** clairement identifiés (`[X]`, `[Photo…]`, `[Nom du projet]`, etc.).
- BTP + Location d’engins mis en avant comme **cœur de marque**.
- Les 4 autres pôles (Hôtellerie, Restauration, Habillement, Commerce) sont présentés comme **complémentaires**.
- Architecture de navigation avec menu déroulant « Nos activités » pour éviter la surcharge.
- Formulaire de contact avec sélection de motif (devis BTP, location, chambre, restaurant…).
- Barre d’action mobile : Appeler | WhatsApp | Devis.
- SEO de base + Schema.org Organization.
- Accessibilité : focus visible, structure sémantique, contraste, reduced-motion.
- Design premium : grands espaces, typographie forte, micro-interactions sobres, grilles élégantes.

## À compléter avant mise en production

1. **Coordonnées** (téléphone, WhatsApp, email, adresse, horaires, réseaux sociaux)
2. **Chiffres de confiance** (années d’expérience, projets, parc d’engins, clients)
3. **Photos réelles** :
   - Chantiers / réalisations BTP
   - Engins du parc (avec noms + caractéristiques réelles)
   - Hôtel / chambres
   - Restaurant / plats
   - Collections habillement
   - Produits commerce
4. **Projets** (noms, localisations, années, descriptions)
5. **Textes spécifiques** (histoire, vision, mission si disponibles)
6. **Backend formulaire** (actuellement simulation front-end)
7. **Mentions légales** & politique de confidentialité
8. **Favicon** optimisé + Open Graph image

## Lancement local

Ouvrir simplement `index.html` dans un navigateur,  
ou servir avec un serveur local :

```bash
# Python
python3 -m http.server 8080

# Node
npx serve .
```

Puis aller sur `http://localhost:8080`.

## Prochaines étapes recommandées

- Version multi-pages (une page par activité) si le volume de contenu le justifie
- Intégration CMS (WordPress headless, Strapi, etc.) pour la gestion des engins / projets / menus
- Photos professionnelles + optimisation WebP/AVIF
- Tracking analytics + conversion (formulaires, clics WhatsApp)

---

*Conçu selon le brief PROMPT MASTER — Site Corporate Premium*  
*BTP • Location d’engins • Hôtellerie • Restauration • Habillement • Commerce*
