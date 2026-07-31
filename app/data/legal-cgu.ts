import type { LegalPageMeta, LegalRelatedLink, LegalSection } from '@/data/legal'

export const cguMeta: LegalPageMeta = {
  title: 'Conditions générales d’utilisation',
  shortTitle: 'CGU',
  description:
    'Conditions générales d’utilisation de la plateforme Afric-Educ : accès aux services, comptes, contenus, responsabilités et cadre juridique.',
  updatedAt: '28 juillet 2026',
  effectiveAt: '28 juillet 2026',
}

export const cguSections: LegalSection[] = [
  {
    id: 'objet',
    title: '1. Objet',
    paragraphs: [
      'Les présentes Conditions générales d’utilisation (ci-après les « CGU ») ont pour objet de définir les modalités d’accès et d’utilisation de la plateforme Afric-Educ (ci-après la « Plateforme »), accessible notamment via le site web et les applications associées.',
      'La Plateforme permet de découvrir, lire, acheter, louer, publier et diffuser des ouvrages numériques et physiques, ainsi que d’accéder à des services éditoriaux, institutionnels et professionnels.',
      'Toute utilisation de la Plateforme implique l’acceptation pleine et entière des présentes CGU. Si vous n’acceptez pas ces conditions, vous devez cesser d’utiliser la Plateforme.',
    ],
  },
  {
    id: 'editeur',
    title: '2. Éditeur de la Plateforme',
    paragraphs: [
      'La Plateforme est éditée et exploitée par Afric-Educ (ci-après « Afric-Educ », « nous »).',
      'Pour toute question relative aux présentes CGU, vous pouvez nous contacter à l’adresse contact@afric-educ.com ou via la page Contact.',
    ],
  },
  {
    id: 'definitions',
    title: '3. Définitions',
    paragraphs: [
      'Aux fins des présentes CGU, les termes suivants ont la signification indiquée ci-dessous :',
    ],
    bullets: [
      'Utilisateur : toute personne physique ou morale accédant à la Plateforme, qu’elle soit lecteur, auteur, éditeur, bibliothèque, librairie, institution ou partenaire.',
      'Compte : espace personnel créé sur la Plateforme permettant d’accéder à des services authentifiés.',
      'Contenu : textes, ouvrages, métadonnées, images, audio, vidéos, commentaires et tout autre élément publié ou mis à disposition sur la Plateforme.',
      'Services : ensemble des fonctionnalités proposées (catalogue, lecture, achat, location, publication, abonnements, devis institutionnels, outils auteurs, etc.).',
    ],
  },
  {
    id: 'acces',
    title: '4. Accès à la Plateforme',
    paragraphs: [
      'L’accès à certaines parties de la Plateforme est libre. D’autres fonctionnalités nécessitent la création d’un Compte et, le cas échéant, la souscription à une offre payante.',
      'Vous êtes responsable de disposer des équipements, connexions et logiciels nécessaires pour accéder aux Services. Afric-Educ s’efforce d’assurer une disponibilité continue, sans garantir une absence totale d’interruptions, de maintenance ou d’incidents techniques.',
      'Nous pouvons modifier, suspendre ou interrompre tout ou partie des Services, notamment pour des raisons de sécurité, de maintenance, d’évolution produit ou de conformité légale.',
    ],
  },
  {
    id: 'compte',
    title: '5. Création et gestion du Compte',
    paragraphs: [
      'Pour créer un Compte, vous devez fournir des informations exactes, complètes et à jour. Vous vous engagez à les maintenir à jour.',
      'Vous êtes responsable de la confidentialité de vos identifiants et de toute activité réalisée depuis votre Compte. Toute utilisation suspecte doit être signalée sans délai à support@afric-educ.com.',
      'Afric-Educ se réserve le droit de refuser, suspendre ou supprimer un Compte en cas d’informations inexactes, d’usage frauduleux, de non-respect des CGU ou de risque pour la sécurité de la Plateforme ou des tiers.',
    ],
  },
  {
    id: 'roles',
    title: '6. Profils et usages',
    paragraphs: [
      'La Plateforme propose plusieurs types d’espaces et d’usages, notamment :',
    ],
    bullets: [
      'Lecteur : consultation du catalogue, achat, location, lecture et gestion de bibliothèque personnelle.',
      'Auteur : dépôt, publication, promotion et suivi de performances d’ouvrages.',
      'Organisation / institution : commandes volume, devis, licences, location et gestion multi-utilisateurs.',
      'Partenaire (librairie, imprimerie, éditeur) : accès à des parcours professionnels dédiés.',
    ],
  },
  {
    id: 'obligations',
    title: '7. Obligations de l’Utilisateur',
    paragraphs: [
      'Vous vous engagez à utiliser la Plateforme de manière loyale, conforme aux lois applicables et au respect des droits des tiers. Il est notamment interdit de :',
    ],
    bullets: [
      'Usurper l’identité d’un tiers ou créer un Compte au nom d’autrui sans autorisation.',
      'Diffuser des Contenus illicites, diffamatoires, haineux, trompeurs, violents ou portant atteinte aux droits d’autrui.',
      'Contourner les mesures techniques de protection, copier ou redistribuer illégalement des ouvrages protégés.',
      'Perturber le fonctionnement de la Plateforme (attaques, scraping abusif, injection de code, surcharge volontaire).',
      'Utiliser la Plateforme à des fins commerciales non autorisées ou contraires aux présentes CGU.',
    ],
  },
  {
    id: 'auteurs',
    title: '8. Publication et Contenus des auteurs',
    paragraphs: [
      'Les auteurs et ayants droit garantissent disposer des droits nécessaires sur les Contenus qu’ils soumettent à la Plateforme (texte, couverture, métadonnées, éléments multimédias).',
      'En publiant un Contenu, l’auteur concède à Afric-Educ une licence non exclusive, mondiale et gratuite d’hébergement, d’affichage, de promotion et de distribution via les canaux de la Plateforme, dans la limite nécessaire à la fourniture des Services.',
      'Afric-Educ peut refuser, suspendre ou retirer un Contenu en cas de non-conformité légale, de signalement fondé, de violation de droits ou de non-respect des standards éditoriaux de la Plateforme.',
      'Les modalités de rémunération, de royalties et de distribution peuvent être précisées dans des conditions particulières, contrats auteurs ou grilles tarifaires applicables.',
    ],
  },
  {
    id: 'propriete',
    title: '9. Propriété intellectuelle',
    paragraphs: [
      'La Plateforme, sa structure, ses interfaces, marques, logos, bases de données et éléments graphiques sont protégés par le droit de la propriété intellectuelle et restent la propriété d’Afric-Educ ou de ses concédants.',
      'Les ouvrages et Contenus publiés restent la propriété de leurs auteurs ou ayants droit, sous réserve des licences accordées pour l’exploitation sur la Plateforme.',
      'Toute reproduction, représentation, adaptation ou exploitation non autorisée est interdite. Les signalements de contrefaçon peuvent être adressés selon la procédure décrite dans la page Droits d’auteur / DMCA.',
    ],
  },
  {
    id: 'achats',
    title: '10. Achats, abonnements et paiements',
    paragraphs: [
      'Les conditions commerciales applicables aux achats, locations, abonnements, packs et commandes institutionnelles sont précisées dans les Conditions de vente et, le cas échéant, dans les devis ou contrats spécifiques.',
      'Les prix affichés s’entendent dans la devise indiquée sur la Plateforme. Des taxes, frais de livraison ou commissions de paiement peuvent s’appliquer selon l’offre et le pays.',
      'En cas de litige relatif à un paiement, un remboursement ou une livraison, les règles de la Politique de remboursement et des Conditions de vente prévalent sur les présentes CGU pour les aspects commerciaux.',
    ],
  },
  {
    id: 'donnees',
    title: '11. Données personnelles et cookies',
    paragraphs: [
      'Le traitement des données personnelles collectées via la Plateforme est décrit dans la Politique de confidentialité.',
      'L’usage des cookies et traceurs est décrit dans la Politique de cookies. En utilisant la Plateforme, vous reconnaissez avoir pris connaissance de ces documents.',
    ],
  },
  {
    id: 'responsabilite',
    title: '12. Responsabilité',
    paragraphs: [
      'Afric-Educ met en œuvre des moyens raisonnables pour assurer la qualité, la sécurité et la disponibilité des Services. Toutefois, Afric-Educ ne saurait être tenue responsable :',
    ],
    bullets: [
      'des interruptions liées à Internet, aux réseaux des opérateurs ou aux équipements de l’Utilisateur ;',
      'des Contenus publiés par des tiers (auteurs, partenaires, utilisateurs) ;',
      'des dommages indirects, perte de données, perte d’opportunité ou préjudice commercial, dans les limites autorisées par la loi ;',
      'd’un usage non conforme des Services par l’Utilisateur.',
    ],
  },
  {
    id: 'suspension',
    title: '13. Suspension et résiliation',
    paragraphs: [
      'Vous pouvez demander la clôture de votre Compte à tout moment via votre espace ou en contactant le support.',
      'Afric-Educ peut suspendre ou résilier l’accès aux Services en cas de manquement aux CGU, de fraude, de risque de sécurité, d’inactivité prolongée ou d’obligation légale.',
      'La clôture du Compte n’entraîne pas automatiquement l’effacement de toutes les données lorsque leur conservation est requise pour des obligations légales, comptables ou de preuve.',
    ],
  },
  {
    id: 'modifications',
    title: '14. Modification des CGU',
    paragraphs: [
      'Afric-Educ peut mettre à jour les présentes CGU afin de refléter l’évolution des Services, des exigences légales ou des pratiques opérationnelles.',
      'La date de mise à jour est indiquée en tête de page. En cas de modification substantielle, une information peut être communiquée via la Plateforme ou par e-mail. La poursuite de l’utilisation après entrée en vigueur vaut acceptation des nouvelles CGU.',
    ],
  },
  {
    id: 'droit',
    title: '15. Droit applicable et litiges',
    paragraphs: [
      'Les présentes CGU sont régies par le droit applicable au siège d’exploitation d’Afric-Educ, sous réserve des dispositions impératives de protection des consommateurs éventuellement applicables dans le pays de résidence de l’Utilisateur.',
      'En cas de différend, les parties s’efforceront de rechercher une solution amiable. À défaut, les tribunaux compétents seront ceux désignés selon les règles de droit applicables.',
    ],
  },
  {
    id: 'contact',
    title: '16. Contact',
    paragraphs: [
      'Pour toute question relative aux présentes CGU : contact@afric-educ.com.',
      'Support technique : support@afric-educ.com. Contact commercial / institutions : via la page Contacter un conseiller.',
    ],
  },
]

export const cguRelatedLinks: LegalRelatedLink[] = [
  { label: 'Politique de confidentialité', href: '/legal/confidentialite' },
  { label: 'Politique de cookies', href: '/legal/cookies' },
  { label: 'Conditions de vente', href: '/legal/conditions-de-vente' },
  { label: 'Politique de remboursement', href: '/legal/remboursement' },
  { label: 'Droits d’auteur / DMCA', href: '/legal/dmca' },
  { label: 'Contact', href: '/partenaires/services/contact' },
]
