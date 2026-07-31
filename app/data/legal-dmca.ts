import type { LegalPageMeta, LegalRelatedLink, LegalSection } from '@/data/legal'

export const dmcaMeta: LegalPageMeta = {
  title: 'Droits d’auteur / DMCA',
  shortTitle: 'DMCA',
  description:
    'Politique Afric-Educ relative au respect des droits d’auteur, au signalement de contrefaçon et à la procédure de notification / contre-notification.',
  updatedAt: '28 juillet 2026',
  effectiveAt: '28 juillet 2026',
}

export const dmcaSections: LegalSection[] = [
  {
    id: 'engagement',
    title: '1. Engagement d’Afric-Educ',
    paragraphs: [
      'Afric-Educ respecte la propriété intellectuelle des auteurs, éditeurs et ayants droit, et attend le même respect de la part de tous les utilisateurs de la plateforme (lecteurs, auteurs, organisations, partenaires).',
      'La présente page décrit la politique applicable aux signalements de contenus présumés contrefaisants, ainsi que la procédure de notification et, le cas échéant, de contre-notification, inspirée des pratiques internationales de type DMCA et des principes de protection du droit d’auteur.',
    ],
  },
  {
    id: 'propriete',
    title: '2. Propriété des contenus',
    paragraphs: [
      'Les ouvrages, textes, couvertures, illustrations, fichiers audio et métadonnées publiés sur la plateforme restent la propriété de leurs auteurs ou ayants droit, sous réserve des licences nécessaires à la distribution via Afric-Educ.',
      'La structure de la plateforme, ses marques, interfaces, bases de données et éléments graphiques sont protégés et restent la propriété d’Afric-Educ ou de ses concédants.',
      'Sauf autorisation expresse, il est interdit de copier, reproduire, extraire, redistribuer, revendre ou communiquer au public un contenu protégé au-delà de l’usage personnel autorisé par la licence d’achat, de location ou d’abonnement.',
    ],
  },
  {
    id: 'usages-autorises',
    title: '3. Usages autorisés',
    paragraphs: [
      'Selon l’offre acquise, l’utilisateur dispose d’un droit d’usage personnel et non exclusif, notamment pour :',
    ],
    bullets: [
      'lire ou écouter l’ouvrage sur ses appareils autorisés ;',
      'télécharger un fichier numérique lorsque l’offre le permet ;',
      'utiliser un accès temporaire dans le cadre d’une location ou d’un prêt ;',
      'accéder à une licence multi-utilisateurs lorsqu’elle a été souscrite par une institution.',
    ],
  },
  {
    id: 'usages-interdits',
    title: '4. Usages interdits',
    paragraphs: [
      'Sauf autorisation écrite de l’ayant droit ou disposition légale applicable (courte citation, exception pédagogique encadrée, etc.), sont notamment interdits :',
    ],
    bullets: [
      'la reproduction ou redistribution publique non autorisée ;',
      'le partage de fichiers protégés sur des réseaux, clouds publics ou groupes ;',
      'le contournement des mesures techniques de protection ;',
      'la revente ou la sous-licence d’un contenu numérique personnel ;',
      'l’utilisation commerciale non autorisée d’extraits, couvertures ou métadonnées ;',
      'le dépôt sur la plateforme d’un ouvrage dont vous n’êtes pas l’auteur ou l’ayant droit.',
    ],
  },
  {
    id: 'auteurs',
    title: '5. Obligations des auteurs et déposants',
    paragraphs: [
      'Tout auteur, éditeur ou partenaire qui publie un contenu sur Afric-Educ garantit :',
    ],
    bullets: [
      'disposer des droits nécessaires sur le texte, la couverture et les éléments associés ;',
      'ne pas porter atteinte aux droits de tiers (droit d’auteur, marque, image, vie privée) ;',
      'pouvoir présenter, sur demande, les justificatifs de droits (cession, autorisation, contrat) ;',
      'informer Afric-Educ sans délai en cas de litige portant sur le contenu publié.',
    ],
  },
  {
    id: 'signalement',
    title: '6. Signalement d’une atteinte',
    paragraphs: [
      'Si vous estimez qu’un contenu présent sur la plateforme porte atteinte à vos droits d’auteur, vous pouvez adresser une notification à : copyright@afric-educ.com.',
      'Afin de permettre un traitement rapide et loyal, votre notification doit contenir les éléments suivants :',
    ],
    bullets: [
      'vos nom, prénom (ou raison sociale), adresse e-mail et coordonnées de contact ;',
      'la description de l’œuvre protégée et la preuve de votre qualité d’ayant droit (ou de représentant habilité) ;',
      'l’URL ou la localisation précise du contenu litigieux sur Afric-Educ ;',
      'une déclaration de bonne foi indiquant que l’usage signalé n’est pas autorisé ;',
      'une déclaration d’exactitude des informations fournies ;',
      'votre signature (physique ou électronique).',
    ],
  },
  {
    id: 'traitement',
    title: '7. Traitement de la notification',
    paragraphs: [
      'Dès réception d’une notification complète et recevable, Afric-Educ peut :',
    ],
    bullets: [
      'accusé de réception et examen préliminaire ;',
      'retrait temporaire, restriction d’accès ou suspension du contenu concerné ;',
      'information du déposant / compte associé au contenu ;',
      'demande de pièces complémentaires si nécessaire ;',
      'décision de maintien du retrait, de restauration ou de mesures supplémentaires.',
    ],
  },
  {
    id: 'contre-notification',
    title: '8. Contre-notification',
    paragraphs: [
      'Si votre contenu a été retiré et que vous estimez que le retrait est injustifié (erreur, fausse notification, usage autorisé), vous pouvez adresser une contre-notification à copyright@afric-educ.com comprenant :',
    ],
    bullets: [
      'vos coordonnées complètes ;',
      'l’identification du contenu retiré et son emplacement initial ;',
      'les motifs justifiant la restauration (droits détenus, licence, erreur manifeste, etc.) ;',
      'une déclaration de bonne foi ;',
      'votre signature (physique ou électronique).',
    ],
  },
  {
    id: 'restauration',
    title: '9. Suite donnée à une contre-notification',
    paragraphs: [
      'Après examen, Afric-Educ peut restaurer le contenu, maintenir le retrait, ou demander des éléments complémentaires aux parties.',
      'Afric-Educ n’est pas un tribunal : en cas de litige persistant entre ayants droit, les parties sont invitées à résoudre le différend entre elles ou devant les autorités compétentes. Afric-Educ peut conserver le retrait tant que le litige n’est pas clarifié.',
    ],
  },
  {
    id: 'recidive',
    title: '10. Comptes contrevenants',
    paragraphs: [
      'En cas de manquement grave ou répété aux droits d’auteur, Afric-Educ se réserve le droit de :',
    ],
    bullets: [
      'suspendre ou supprimer les contenus concernés ;',
      'restreindre les fonctionnalités de publication ;',
      'suspendre ou clôturer le compte ;',
      'conserver les éléments nécessaires à la preuve et à la prévention de nouveaux abus.',
    ],
  },
  {
    id: 'fausse-notification',
    title: '11. Fausses notifications',
    paragraphs: [
      'Toute notification mensongère, abusive ou de mauvaise foi peut engager la responsabilité de son auteur. Afric-Educ se réserve le droit d’ignorer les signalements manifestement infondés et, le cas échéant, de prendre des mesures à l’encontre de leurs auteurs.',
    ],
  },
  {
    id: 'marques',
    title: '12. Marques et autres droits',
    paragraphs: [
      'Les signalements portant sur des marques, dessins, modèles ou autres droits de propriété intellectuelle peuvent être adressés au même contact copyright@afric-educ.com, avec les justificatifs adaptés.',
      'Afric-Educ traite ces demandes selon des principes analogues : examen, mesures proportionnées, information des parties concernées.',
    ],
  },
  {
    id: 'institutions',
    title: '13. Usages institutionnels et éducatifs',
    paragraphs: [
      'Les licences institutionnelles (écoles, bibliothèques, organisations) sont limitées au périmètre souscrit (nombre d’accès, durée, usages). Toute reproduction pédagogique doit respecter le droit applicable et les conditions de la licence.',
      'Les institutions sont responsables de sensibiliser leurs utilisateurs au respect du droit d’auteur.',
    ],
  },
  {
    id: 'limitation',
    title: '14. Rôle d’hébergeur / intermédiaire',
    paragraphs: [
      'Pour les contenus publiés par des tiers (auteurs, éditeurs, partenaires), Afric-Educ agit comme intermédiaire technique de mise à disposition. Dès qu’une atteinte est portée à sa connaissance de manière précise, Afric-Educ agit promptement pour retirer ou restreindre l’accès au contenu litigieux, dans les conditions prévues ci-dessus.',
    ],
  },
  {
    id: 'modifications',
    title: '15. Modifications',
    paragraphs: [
      'Afric-Educ peut mettre à jour la présente politique afin de refléter l’évolution des services ou du cadre juridique. La date de mise à jour figure en tête de page.',
    ],
  },
  {
    id: 'contact',
    title: '16. Contact droits d’auteur',
    paragraphs: [
      'Notifications et contre-notifications : copyright@afric-educ.com.',
      'Support général : support@afric-educ.com. Questions juridiques liées au compte auteur : via l’espace auteur ou la page Contact.',
    ],
  },
]

export const dmcaRelatedLinks: LegalRelatedLink[] = [
  { label: 'Conditions générales d’utilisation', href: '/legal/cgu' },
  { label: 'Conditions de vente', href: '/legal/conditions-de-vente' },
  { label: 'Politique de confidentialité', href: '/legal/confidentialite' },
  { label: 'Politique de cookies', href: '/legal/cookies' },
  { label: 'Politique de remboursement', href: '/legal/remboursement' },
  { label: 'Contact', href: '/partenaires/services/contact' },
]
