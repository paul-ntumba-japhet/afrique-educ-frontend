import type { LegalPageMeta, LegalRelatedLink, LegalSection } from '@/data/legal'

export const refundMeta: LegalPageMeta = {
  title: 'Politique de remboursement',
  shortTitle: 'Remboursement',
  description:
    'Modalités d’annulation, de retour et de remboursement des ouvrages, abonnements, locations et services Afric-Educ.',
  updatedAt: '28 juillet 2026',
  effectiveAt: '28 juillet 2026',
}

export const refundSections: LegalSection[] = [
  {
    id: 'objet',
    title: '1. Objet',
    paragraphs: [
      'La présente Politique de remboursement précise les conditions dans lesquelles Afric-Educ traite les demandes d’annulation, de retour, d’avoir ou de remboursement relatives aux commandes passées sur la plateforme (ouvrages numériques et physiques, audio, locations, abonnements, packs et services).',
      'Elle complète les Conditions de vente. En cas de contradiction sur un point spécifique de remboursement, la présente politique prévaut pour ce point.',
    ],
  },
  {
    id: 'principes',
    title: '2. Principes généraux',
    paragraphs: [
      'Afric-Educ traite chaque demande de bonne foi, dans un souci d’équité et de conformité au droit applicable.',
      'Un remboursement n’est pas automatique : il dépend du type de produit ou service, de son état d’utilisation, des délais légaux ou contractuels, et des éléments fournis à l’appui de la demande.',
      'Lorsqu’un remboursement est accordé, il est en principe effectué via le moyen de paiement d’origine, sauf impossibilité technique ou accord sur un avoir.',
    ],
  },
  {
    id: 'demande',
    title: '3. Comment formuler une demande',
    paragraphs: [
      'Pour ouvrir une demande, contactez le support à support@afric-educ.com ou via votre espace compte, en indiquant :',
    ],
    bullets: [
      'le numéro de commande ;',
      'l’adresse e-mail du compte ;',
      'le produit ou service concerné ;',
      'le motif (erreur, défaut, non-réception, rétractation, double paiement, etc.) ;',
      'toute pièce utile (capture d’écran, photo du colis, preuve de paiement).',
    ],
  },
  {
    id: 'delais-traitement',
    title: '4. Délais de traitement',
    paragraphs: [
      'Afric-Educ s’efforce d’accuser réception sous 2 jours ouvrés et de traiter la demande sous 5 à 10 jours ouvrés, sous réserve de vérifications complémentaires (fraude, transporteur, prestataire de paiement).',
      'Le crédit effectif sur votre compte bancaire ou moyen de paiement peut prendre un délai supplémentaire selon votre établissement ou l’opérateur de paiement (souvent 3 à 10 jours ouvrés après validation).',
    ],
  },
  {
    id: 'numerique',
    title: '5. Ouvrages numériques et audio',
    paragraphs: [
      'Les contenus numériques (e-books, PDF, audio) sont fournis immédiatement ou rapidement après paiement. Dès lors que l’accès, le téléchargement ou la lecture a commencé, le remboursement peut être refusé, sauf :',
    ],
    bullets: [
      'fichier illisible ou corrompu non remplacé dans un délai raisonnable ;',
      'impossibilité d’accès imputable à Afric-Educ après signalement ;',
      'erreur manifeste de commande (mauvais titre livré numériquement) ;',
      'double facturation avérée ;',
      'cas prévu par une disposition légale impérative.',
    ],
  },
  {
    id: 'retractation-numerique',
    title: '6. Rétractation et contenus numériques',
    paragraphs: [
      'Lorsque le droit de rétractation s’applique au client consommateur, Afric-Educ peut demander, avant la fourniture du contenu numérique, une confirmation expresse :',
    ],
    bullets: [
      'que vous souhaitez accéder au contenu avant la fin du délai de rétractation ;',
      'que vous renoncez à votre droit de rétractation dès le début de l’exécution.',
    ],
  },
  {
    id: 'physique',
    title: '7. Ouvrages physiques',
    paragraphs: [
      'Pour les livres physiques, un retour peut être accepté si le produit est retourné dans son état d’origine, non endommagé, non annoté, dans un emballage adapté, et dans les délais indiqués ci-dessous.',
      'Sauf défaut ou erreur Afric-Educ, les frais de retour peuvent rester à la charge du client. Une fois le retour réceptionné et validé, le remboursement du prix du produit (et le cas échéant des frais de livraison initiaux, selon le cas) est déclenché.',
    ],
  },
  {
    id: 'delais-retour',
    title: '8. Délais de retour (physique)',
    paragraphs: [
      'Sauf disposition légale plus favorable :',
    ],
    bullets: [
      'rétractation consommateur (si applicable) : 14 jours à compter de la réception pour notifier la demande, puis retour du produit dans les délais impartis ;',
      'produit endommagé ou non conforme : signalement recommandé sous 48 à 72 heures après réception, avec photos ;',
      'erreur d’article : signalement dès constatation, idéalement sous 7 jours.',
    ],
  },
  {
    id: 'pod',
    title: '9. Impression à la demande (POD)',
    paragraphs: [
      'Les ouvrages imprimés à la demande sont fabriqués spécifiquement après commande. Sauf non-conformité, défaut d’impression ou erreur Afric-Educ, ils ne sont en principe ni repris ni remboursés.',
      'En cas de défaut d’impression avéré, Afric-Educ pourra proposer une réimpression, un remplacement ou un remboursement.',
    ],
  },
  {
    id: 'location',
    title: '10. Locations et prêts numériques',
    paragraphs: [
      'Les locations et prêts sont des accès temporaires. Une fois l’accès ouvert, la période commencée n’est en principe pas remboursable.',
      'Un remboursement partiel ou total peut toutefois être étudié en cas d’impossibilité d’accès imputable à Afric-Educ pendant une part significative de la période louée.',
    ],
  },
  {
    id: 'abonnements',
    title: '11. Abonnements et packs',
    paragraphs: [
      'Les abonnements peuvent être résiliés pour l’avenir selon les modalités de l’espace compte ou sur demande au support. La résiliation ne donne pas automatiquement lieu au remboursement de la période déjà entamée.',
      'Un remboursement peut être accordé notamment en cas de :',
    ],
    bullets: [
      'double souscription involontaire ;',
      'prélèvement après résiliation effective déjà prise en compte ;',
      'indisponibilité majeure du service couvert par l’abonnement, non résolue dans un délai raisonnable ;',
      'erreur de facturation.',
    ],
  },
  {
    id: 'services',
    title: '12. Services éditoriaux et packs auteurs',
    paragraphs: [
      'Pour les services (correction, couverture, ISBN, marketing, packs auteurs, etc.) :',
    ],
    bullets: [
      'avant démarrage de la prestation : annulation et remboursement possibles, sous réserve de frais déjà engagés ;',
      'prestation commencée : remboursement partiel au prorata du reste à faire, ou avoir, selon l’état d’avancement ;',
      'prestation intégralement livrée : pas de remboursement, sauf non-conformité substantielle non corrigée.',
    ],
  },
  {
    id: 'institutions',
    title: '13. Commandes institutionnelles',
    paragraphs: [
      'Les commandes sur devis (écoles, bibliothèques, entreprises) suivent les conditions du devis accepté.',
      'Les annulations, avoirs ou remboursements institutionnels sont traités au cas par cas, en tenant compte des licences déjà activées, des volumes préparés ou expédiés, et des éventuels frais de production ou logistique.',
    ],
  },
  {
    id: 'non-remboursable',
    title: '14. Cas généralement non remboursables',
    paragraphs: [
      'Sauf obligation légale contraire ou défaut imputable à Afric-Educ, ne sont généralement pas remboursables :',
    ],
    bullets: [
      'contenus numériques déjà téléchargés, ouverts ou lus ;',
      'locations dont la période a commencé ;',
      'abonnements pour la période déjà consommée ;',
      'ouvrages POD sans défaut ;',
      'produits endommagés par le client après réception ;',
      'changement d’avis après accès complet au service ;',
      'incompatibilité liée à l’équipement ou au logiciel du client, lorsque les prérequis étaient indiqués.',
    ],
  },
  {
    id: 'modes',
    title: '15. Modes de remboursement',
    paragraphs: [
      'Selon le cas, Afric-Educ peut proposer :',
    ],
    bullets: [
      'remboursement sur le moyen de paiement d’origine ;',
      'avoir utilisable sur la Plateforme ;',
      'remplacement du produit ou nouvel accès au fichier ;',
      'avoir partiel en cas de geste commercial.',
    ],
  },
  {
    id: 'fraude',
    title: '16. Fraude et abus',
    paragraphs: [
      'Toute demande frauduleuse, répétitive de mauvaise foi, ou fondée sur de fausses déclarations pourra être refusée. Afric-Educ se réserve le droit de suspendre le compte concerné et d’alerter le prestataire de paiement si nécessaire.',
      'Les contestations de paiement (chargebacks) injustifiées peuvent entraîner la suspension de l’accès aux contenus numériques liés à la commande contestée.',
    ],
  },
  {
    id: 'force-majeure',
    title: '17. Retards indépendants d’Afric-Educ',
    paragraphs: [
      'Les retards de livraison dus au transporteur, aux douanes, à une adresse inexacte fournie par le client, ou à un cas de force majeure ne donnent pas automatiquement droit à un remboursement immédiat. Une solution (attente, réexpédition, avoir, remboursement) est proposée selon la situation.',
    ],
  },
  {
    id: 'litiges',
    title: '18. Litiges',
    paragraphs: [
      'En cas de désaccord sur une décision de remboursement, contactez d’abord le support afin de rechercher une solution amiable. À défaut, les règles de droit applicable et les juridictions compétentes prévues dans les Conditions de vente s’appliquent.',
    ],
  },
  {
    id: 'modifications',
    title: '19. Modifications',
    paragraphs: [
      'Afric-Educ peut mettre à jour la présente politique. La version applicable est celle en vigueur à la date de la demande de remboursement, sauf disposition légale contraire. La date de mise à jour figure en tête de page.',
    ],
  },
  {
    id: 'contact',
    title: '20. Contact',
    paragraphs: [
      'Demandes de remboursement / SAV : support@afric-educ.com.',
      'Confidentialité / données de paiement : privacy@afric-educ.com. Institutions : page Contacter un conseiller.',
    ],
  },
]

export const refundRelatedLinks: LegalRelatedLink[] = [
  { label: 'Conditions de vente', href: '/legal/conditions-de-vente' },
  { label: 'Conditions générales d’utilisation', href: '/legal/cgu' },
  { label: 'Politique de confidentialité', href: '/legal/confidentialite' },
  { label: 'Politique de cookies', href: '/legal/cookies' },
  { label: 'Droits d’auteur / DMCA', href: '/legal/dmca' },
  { label: 'Contact', href: '/partenaires/services/contact' },
]
