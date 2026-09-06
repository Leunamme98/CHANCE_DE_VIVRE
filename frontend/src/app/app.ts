import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';
import { DOCUMENT } from '@angular/common';

@Component({
  imports: [RouterOutlet, Header, Footer],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App implements OnInit {
  private readonly doc = inject(DOCUMENT);

  ngOnInit(): void {
    // Supprimer le badge "Powered by Netlify" et les modales de promotion Netlify
    // Ces éléments sont injectés par Netlify après le chargement du DOM
    if (typeof window !== 'undefined') {
      const removeNetlifyBadges = () => {
        // Chercher et supprimer tous les liens et badges Netlify
        document.querySelectorAll('[href*="netlify"], .netlify-badge, [class*="netlify"]').forEach((el) => {
          const element = el as HTMLElement;
          if (element.textContent?.includes('Netlify') || element.href?.includes('netlify')) {
            element.remove();
          }
        });

        // Supprimer aussi les modales de promotion
        document.querySelectorAll('[class*="builder"], [data-testid*="netlify"]').forEach((el) => {
          (el as HTMLElement).remove();
        });
      };

      // Exécuter immédiatement et aussi après un délai (Netlify injecte lentement)
      removeNetlifyBadges();
      setTimeout(removeNetlifyBadges, 500);
      setTimeout(removeNetlifyBadges, 2000);

      // Observer pour supprimer les nouveaux éléments Netlify qui seraient ajoutés
      const observer = new MutationObserver(() => removeNetlifyBadges());
      observer.observe(document.body, {
        childList: true,
        subtree: true,
      });
    }
  }
}
