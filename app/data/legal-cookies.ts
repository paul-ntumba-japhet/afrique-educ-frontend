import type { LegalPageMeta, LegalRelatedLink, LegalSection } from '@/data/legal'

export const cookiesMeta: LegalPageMeta = {
  title: 'Politique de cookies',
  shortTitle: 'Cookies',
  description:
    'Comment Afric-Educ utilise les cookies et technologies similaires pour le fonctionnement, la sécurité, la mesure d’audience et, le cas échéant, la personnalisation de la plateforme.',
  updatedAt: '28 juillet 2026',
  effectiveAt: '28 juillet 2026',
}

export const cookiesSections: LegalSection[] = [
  {
    id: 'introduction',
    title: '1. Introduction',
    paragraphs: [
      'La présente Politique de cookies explique ce que sont les cookies, quels types de cookies et technologies similaires Afric-Educ utilise sur sa plateforme, à quelles finalités, et comment vous pouvez gérer vos préférences.',
      'Elle complète la Politique de confidentialité. En poursuivant votre navigation ou en configurant vos choix via le bandeau / centre de préférences (lorsqu’il est disponible), vous êtes informé(e) des dépôts de cookies selon les catégories décrites ci-dessous.',
    ],
  },
  {
    id: 'definition',
    title: '2. Qu’est-ce qu’un cookie ?',
    paragraphs: [
      'Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette, smartphone) lors de la visite d’un site ou de l’utilisation d’une application. Il permet de reconnaître votre navigateur, mémoriser certaines informations et assurer des fonctionnalités techniques.',
      'Des technologies similaires peuvent également être utilisées : pixels, balises, stockage local (localStorage / sessionStorage), identifiants de session, ou SDK d’applications. Dans la présente politique, le terme « cookies » désigne l’ensemble de ces technologies lorsqu’elles jouent un rôle équivalent.',
    ],
  },
  {
    id: 'emetteurs',
    title: '3. Qui dépose les cookies ?',
    paragraphs: [
      'Les cookies peuvent être déposés :',
    ],
    bullets: [
      'par Afric-Educ (cookies « first-party ») pour le fonctionnement de la plateforme ;',
      'par des prestataires techniques ou partenaires (cookies « third-party »), par exemple pour le paiement, la mesure d’audience, la prévention de la fraude ou l’hébergement de contenus multimédias.',
    ],
  },
  {
    id: 'categories',
    title: '4. Catégories de cookies utilisés',
    paragraphs: [
      'Afric-Educ classe les cookies selon les catégories suivantes.',
    ],
  },
  {
    id: 'essentiels',
    title: '5. Cookies strictement nécessaires',
    paragraphs: [
      'Ces cookies sont indispensables au fonctionnement de la plateforme. Ils ne peuvent pas être désactivés via nos outils de préférences, car sans eux certains services ne pourraient pas être fournis de manière fiable et sécurisée.',
    ],
    bullets: [
      'authentification et maintien de session (connexion à votre compte) ;',
      'sécurité, protection contre les abus et prévention de la fraude ;',
      'mémorisation de vos choix essentiels (par ex. préférences cookies déjà exprimées) ;',
      'fonctionnement du panier, du tunnel de commande et des formulaires ;',
      'équilibage de charge et stabilité technique.',
    ],
  },
  {
    id: 'fonctionnels',
    title: '6. Cookies de fonctionnalité',
    paragraphs: [
      'Ces cookies permettent d’améliorer votre expérience en mémorisant certains choix ou en activant des fonctionnalités optionnelles.',
    ],
    bullets: [
      'préférence de langue ou de région ;',
      'préférence d’affichage (par ex. thème clair / sombre) ;',
      'mémorisation de filtres catalogue ou de paramètres d’interface ;',
      'personnalisation légère de l’expérience de lecture ou de navigation.',
    ],
  },
  {
    id: 'mesure',
    title: '7. Cookies de mesure d’audience et de performance',
    paragraphs: [
      'Ces cookies nous aident à comprendre comment la plateforme est utilisée (pages consultées, parcours, erreurs techniques) afin d’améliorer les contenus, la performance et l’ergonomie.',
      'Selon la configuration retenue, ces cookies peuvent être déposés uniquement avec votre consentement, ou dans un cadre de mesure d’audience exempté lorsque les conditions légales applicables sont réunies (données agrégées / anonymisées autant que possible).',
    ],
    bullets: [
      'statistiques de fréquentation et de navigation ;',
      'mesure de performance des pages et détection d’incidents ;',
      'tests d’interface (A/B) destinés à améliorer l’expérience utilisateur.',
    ],
  },
  {
    id: 'marketing',
    title: '8. Cookies marketing et personnalisation',
    paragraphs: [
      'Ces cookies, lorsqu’ils sont activés, permettent de proposer des contenus, offres ou messages plus pertinents, y compris sur des canaux partenaires, et de mesurer l’efficacité de campagnes.',
      'Ils ne sont déposés qu’avec votre consentement préalable, lorsque celui-ci est requis. Vous pouvez le retirer à tout moment via les paramètres cookies.',
    ],
    bullets: [
      'personnalisation d’offres éditoriales ou promotionnelles ;',
      'mesure de campagnes (ouvertures, clics, conversions) ;',
      'limitation de la répétition d’annonces.',
    ],
  },
  {
    id: 'paiement',
    title: '9. Cookies liés au paiement et à la sécurité transactionnelle',
    paragraphs: [
      'Lors d’un achat, d’un abonnement ou d’une commande institutionnelle, des cookies ou technologies équivalentes peuvent être utilisés par nos prestataires de paiement et de lutte contre la fraude afin de sécuriser la transaction.',
      'Ces mécanismes contribuent à l’authentification du paiement, à la détection d’activités suspectes et à la protection de vos données bancaires. Les informations de carte ne sont pas stockées en clair par Afric-Educ ; elles sont traitées selon les règles du prestataire de paiement et la Politique de confidentialité.',
    ],
  },
  {
    id: 'duree',
    title: '10. Durée de conservation des cookies',
    paragraphs: [
      'La durée de vie d’un cookie dépend de sa finalité :',
    ],
    bullets: [
      'cookies de session : supprimés à la fermeture du navigateur ;',
      'cookies persistants : conservés pour une durée déterminée (de quelques heures à plusieurs mois), puis expirés automatiquement ;',
      'préférences cookies : conservées pendant une durée permettant de respecter vos choix sans vous solliciter excessivement.',
    ],
  },
  {
    id: 'gestion',
    title: '11. Comment gérer vos cookies ?',
    paragraphs: [
      'Vous pouvez gérer vos préférences de plusieurs manières :',
    ],
    bullets: [
      'via le bandeau cookies et le centre de préférences Afric-Educ (lorsque disponible) ;',
      'via les paramètres de votre navigateur (blocage, suppression, alertes) ;',
      'via les paramètres de votre appareil ou des applications mobiles, le cas échéant.',
    ],
  },
  {
    id: 'navigateurs',
    title: '12. Paramétrage des navigateurs',
    paragraphs: [
      'La plupart des navigateurs permettent de refuser ou supprimer les cookies. Attention : le blocage des cookies strictement nécessaires peut dégrader ou empêcher l’accès à certaines fonctionnalités (connexion, panier, paiement, lecture protégée).',
      'Consultez l’aide de votre navigateur (Chrome, Firefox, Safari, Edge, etc.) pour connaître la procédure de gestion des cookies et des données de sites.',
    ],
  },
  {
    id: 'consequences',
    title: '13. Conséquences d’un refus',
    paragraphs: [
      'Le refus des cookies non essentiels n’empêche pas, en principe, la consultation du catalogue public. En revanche, certaines fonctionnalités avancées (mesure personnalisée, recommandations, campagnes) peuvent être limitées.',
      'Le refus ou le blocage des cookies nécessaires peut empêcher la connexion à votre compte, la finalisation d’une commande ou le maintien sécurisé de votre session.',
    ],
  },
  {
    id: 'donnees',
    title: '14. Données personnelles et cookies',
    paragraphs: [
      'Certains cookies peuvent être associés à des données personnelles (identifiant de compte, adresse IP, identifiant technique). Dans ce cas, leur traitement est encadré par la Politique de confidentialité.',
      'Afric-Educ ne revend pas vos données personnelles issues des cookies. Les partages éventuels avec des prestataires techniques s’effectuent uniquement pour les finalités décrites et dans un cadre contractuel approprié.',
    ],
  },
  {
    id: 'mises-a-jour',
    title: '15. Mises à jour',
    paragraphs: [
      'Cette Politique de cookies peut être mise à jour pour refléter l’évolution de nos services, de nos prestataires ou des exigences légales. La date de mise à jour figure en tête de page.',
      'En cas de changement substantiel dans les catégories de cookies ou leurs finalités, une information adaptée pourra être affichée via le bandeau ou un autre moyen approprié.',
    ],
  },
  {
    id: 'contact',
    title: '16. Contact',
    paragraphs: [
      'Pour toute question relative aux cookies ou à vos préférences : privacy@afric-educ.com.',
      'Support technique : support@afric-educ.com. Contact général : contact@afric-educ.com.',
    ],
  },
]

export const cookiesRelatedLinks: LegalRelatedLink[] = [
  { label: 'Politique de confidentialité', href: '/legal/confidentialite' },
  { label: 'Conditions générales d’utilisation', href: '/legal/cgu' },
  { label: 'Conditions de vente', href: '/legal/conditions-de-vente' },
  { label: 'Politique de remboursement', href: '/legal/remboursement' },
  { label: 'Droits d’auteur / DMCA', href: '/legal/dmca' },
  { label: 'Contact', href: '/partenaires/services/contact' },
]
