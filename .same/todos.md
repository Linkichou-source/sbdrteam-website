# SBDR Team - Project Todos

## Completed
- [x] Set up Next.js project with Tailwind
- [x] Create Header component with navigation
- [x] Create Hero section with CTA
- [x] Create Stats section
- [x] Create Constat section
- [x] Create Approche section with tabs
- [x] Create Methodologie section with 3 phases
- [x] Create Resultats section with case studies
- [x] Create Temoignages section
- [x] Create Ratings section (Trustpilot & Google)
- [x] Create Expertise section
- [x] Create Newsletter section
- [x] Create CTA section
- [x] Create Footer
- [x] Create Cookie Banner
- [x] Fix CSS import order issue
- [x] Create Contact page with form
- [x] Configure Netlify Forms for contact form
- [x] Configure Netlify Forms for newsletter
- [x] Create forms.html for Netlify detection
- [x] Configure GitHub repository
- [x] Fix Netlify Forms submission (changed endpoint from / to /forms.html)
- [x] Add proper URLSearchParams encoding for form data
- [x] Add data-netlify and form-name attributes to forms.html
- [x] Update netlify.toml with forms configuration

## GitHub Configuration
- **Repository**: https://github.com/Linkichou-source/sbdr-team-website
- **Branch**: main
- **Visibility**: Private

## Workflow
1. Modifier le code sur Same
2. Commiter et pousser sur GitHub (`git add . && git commit -m "message" && git push`)
3. Netlify détecte le changement et redéploie automatiquement

## Notes
- Site recreated from: https://same-qc8m4u33h6j-latest.netlify.app
- Netlify Forms configured for:
  - Contact form (name="contact")
  - Newsletter form (name="newsletter")
- Form submission endpoint: /forms.html
- Forms use URLSearchParams for proper encoding

## Troubleshooting Forms
- Forms only work on Netlify (not in local dev)
- Check Netlify dashboard > Forms to see submissions
- Ensure forms.html is deployed with the site
