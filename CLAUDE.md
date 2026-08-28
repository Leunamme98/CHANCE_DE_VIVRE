# CLAUDE.md — Chance de Vivre

Instructions pour Claude Code sur ce projet.

## Documents à lire avant tout développement

Voir `README.md` section "Documents de référence" — en particulier `docs/normes-codage.md` (structure de projet, règles de code) et `charte_graphique/design-system-chance-de-vivre.md` (valeurs visuelles non négociables).

## Stack technique

Toute dépendance ajoutée (nom, version exacte installée, rôle) doit être documentée dans `docs/stack-technique.md`.

## Git — commit et push automatiques

Ce dépôt (`https://github.com/Leunamme98/CHANCE_DE_VIVRE.git`, branche `main`) est suivi en continu. **Après chaque implémentation significative ou avancée** (ex. : fin d'une phase du backlog, une page terminée, une fonctionnalité transverse mise en place), Claude doit :

1. Vérifier `git status` (ne jamais committer un secret ou un fichier suspect).
2. Committer avec un message conforme à `docs/normes-codage.md` section 7 (`type: description courte`).
3. Pousser vers `origin main` — **sans redemander confirmation à chaque fois** (autorisation donnée explicitement par l'utilisateur).

Ne pas committer/pusher pour des micro-modifications triviales (typo, ajustement mineur) — grouper avec le prochain jalon significatif. En cas de doute sur ce qui constitue une étape "significative", committer plutôt que de laisser du travail non sauvegardé.
