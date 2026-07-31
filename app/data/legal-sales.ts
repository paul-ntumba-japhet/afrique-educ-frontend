import type { LegalPageMeta, LegalRelatedLink, LegalSection } from '@/data/legal'

export const salesMeta: LegalPageMeta = {
  title: 'Conditions de vente',
  shortTitle: 'Conditions de vente',
  description:
    'Conditions générales de vente d’Afric-Educ applicables aux achats d’ouvrages, abonnements, locations, packs et services proposés sur la plateforme.',
  updatedAt: '28 juillet 2026',
  effectiveAt: '28 juillet 2026',
}

export const salesSections: LegalSection[] = [
  {
    id: 'objet',
    title: '1. Objet',
    paragraphs: [
      'Les présentes Conditions de vente (ci-après les « CGV ») régissent les ventes de produits et services proposés sur la plateforme Afric-Educ (ci-après la « Plateforme »), notamment : ouvrages numériques et physiques, livres audio, locations, abonnements, packs, services éditoriaux et offres institutionnelles.',
      'Toute commande passée sur la Plateforme implique l’acceptation pleine et entière des présentes CGV, des Conditions générales d’utilisation et, le cas échéant, de conditions particulières affichées sur la fiche produit ou le devis.',
      'En cas de contradiction entre les présentes CGV et des conditions particulières acceptées lors de la commande (devis institutionnel, contrat partenaire), ces dernières prévalent pour l’opération concernée.',
    ],
  },
  {
    id: 'vendeur',
    title: '2. Identité du vendeur',
    paragraphs: [
      'Les produits et services sont proposés à la vente par Afric-Educ, éditeur et opérateur de la Plateforme.',
      'Pour toute question relative à une commande : support@afric-educ.com. Pour les commandes institutionnelles : via la page Contacter un conseiller ou l’espace organisation.',
    ],
  },
  {
    id: 'champ',
    title: '3. Champ d’application',
    paragraphs: [
      'Les CGV s’appliquent aux achats effectués par :',
    ],
    bullets: [
      'les particuliers (lecteurs) ;',
      'les auteurs achetant des services ou packs ;',
      'les organisations et institutions (écoles, bibliothèques, entreprises, etc.) ;',
      'les partenaires autorisés, sous réserve de conditions revendeurs spécifiques.',
    ],
  },
  {
    id: 'produits',
    title: '4. Produits et services proposés',
    paragraphs: [
      'La Plateforme propose notamment :',
    ],
    bullets: [
      'livres numériques (EPUB, PDF et formats associés) ;',
      'livres physiques neufs, occasion ou impression à la demande (POD) ;',
      'livres audio ;',
      'locations et prêts numériques ;',
      'abonnements et packs (individuels ou organisations) ;',
      'services à la carte (ISBN, correction, couverture, marketing, etc.) ;',
      'commandes institutionnelles et devis sur mesure.',
    ],
  },
  {
    id: 'disponibilite',
    title: '5. Disponibilité et informations produits',
    paragraphs: [
      'Les fiches produits présentent les caractéristiques essentielles (titre, format, prix, langue, disponibilité, délai indicatif). Afric-Educ s’efforce de maintenir ces informations exactes et à jour.',
      'La disponibilité d’un ouvrage physique ou POD peut varier. En cas d’indisponibilité après commande, le client est informé et peut obtenir un report, un avoir ou un remboursement selon les options proposées.',
      'Les visuels, extraits et descriptions sont fournis à titre illustratif. De légères différences (couverture, pagination, qualité d’impression POD) peuvent exister sans remettre en cause la conformité essentielle du produit.',
    ],
  },
  {
    id: 'prix',
    title: '6. Prix',
    paragraphs: [
      'Les prix sont indiqués dans la devise affichée sur la Plateforme, toutes taxes comprises ou hors taxes selon la mention portée sur la fiche ou le devis. Les éventuels frais de livraison, droits de douane, commissions de paiement ou taxes locales sont précisés avant validation de la commande lorsque cela est possible.',
      'Afric-Educ se réserve le droit de modifier ses prix à tout moment. Le prix applicable est celui affiché au moment de la validation de la commande.',
      'En cas d’erreur manifeste de prix (prix dérisoire ou incohérent), Afric-Educ peut annuler la commande et en informer le client, qui pourra repasser commande au prix corrigé.',
    ],
  },
  {
    id: 'commande',
    title: '7. Passation de la commande',
    paragraphs: [
      'Le parcours de commande type sur la Plateforme est le suivant :',
    ],
    bullets: [
      'sélection du produit ou service et ajout au panier (ou demande de devis) ;',
      'vérification du panier (articles, quantités, options) ;',
      'identification / connexion au compte ;',
      'choix de l’adresse de livraison le cas échéant ;',
      'choix du mode de paiement ;',
      'récapitulatif et acceptation des CGV ;',
      'confirmation et paiement.',
    ],
  },
  {
    id: 'formation',
    title: '8. Formation du contrat',
    paragraphs: [
      'Le contrat de vente est formé lorsque la commande est confirmée et le paiement accepté (ou, pour les devis institutionnels, lorsque le devis est accepté selon les modalités convenues).',
      'Un e-mail de confirmation récapitule la commande. Il appartient au client de vérifier l’exactitude des informations et de signaler toute anomalie sans délai.',
      'Afric-Educ se réserve le droit de refuser ou d’annuler une commande en cas de suspicion de fraude, d’erreur manifeste, d’indisponibilité, de non-paiement ou de non-conformité aux CGV / CGU.',
    ],
  },
  {
    id: 'paiement',
    title: '9. Paiement',
    paragraphs: [
      'Le paiement s’effectue selon les moyens proposés sur la Plateforme (carte bancaire, et le cas échéant mobile money, virement, facturation institutionnelle, etc.).',
      'Les données de carte bancaire sont traitées par des prestataires de paiement sécurisés. Afric-Educ ne conserve pas le numéro complet de carte ni le cryptogramme.',
      'La commande n’est considérée comme payée qu’après validation effective du paiement. En cas d’échec, d’opposition ou de chargeback, Afric-Educ peut suspendre l’accès aux contenus numériques et engager les démarches de recouvrement utiles.',
      'Pour les organisations, des conditions de paiement différé ou sur facture peuvent être convenues dans le devis ou le contrat.',
    ],
  },
  {
    id: 'numerique',
    title: '10. Livraison des contenus numériques',
    paragraphs: [
      'Les ouvrages numériques et audio sont en principe rendus disponibles dans l’espace compte du client dès confirmation du paiement, sous réserve de contrôles anti-fraude.',
      'L’accès peut être soumis à des conditions techniques (appareil compatible, connexion, application ou lecteur supporté). Le client est responsable de disposer d’un environnement compatible.',
      'Sauf mention contraire, l’achat d’un livre numérique confère un droit d’usage personnel et non exclusif, non cessible, dans les limites techniques et contractuelles de la Plateforme. Toute redistribution non autorisée est interdite.',
    ],
  },
  {
    id: 'physique',
    title: '11. Livraison des ouvrages physiques',
    paragraphs: [
      'Les délais de préparation et de livraison sont indiqués à titre estimatif lors de la commande. Ils peuvent varier selon le stock, l’impression POD, la destination et le transporteur.',
      'Les risques liés au transport sont transférés selon les modalités du transporteur et du droit applicable. Il appartient au client de vérifier le colis à réception et de signaler toute avarie dans les délais impartis.',
      'En cas de colis non réclamé, d’adresse inexacte fournie par le client ou d’échec de livraison imputable au client, des frais de represtation ou de retour peuvent s’appliquer.',
    ],
  },
  {
    id: 'location',
    title: '12. Location et prêt numérique',
    paragraphs: [
      'Les offres de location ou de prêt confèrent un droit d’accès temporaire à l’ouvrage, pour la durée et selon les conditions affichées au moment de la souscription.',
      'À l’expiration de la période, l’accès est automatiquement retiré. La location ne transfère aucun droit de propriété intellectuelle au client.',
    ],
  },
  {
    id: 'abonnements',
    title: '13. Abonnements et packs',
    paragraphs: [
      'Les abonnements (lecteurs, auteurs, organisations) et packs sont souscrits pour la durée indiquée à la commande. Le renouvellement peut être tacite ou manuel selon l’offre affichée.',
      'Le client peut résilier un abonnement selon les modalités prévues dans son espace compte ou en contactant le support, sous réserve des périodes déjà échues et non remboursables sauf disposition contraire.',
      'Afric-Educ peut modifier le contenu d’une offre d’abonnement, en informant les abonnés en cas de changement substantiel.',
    ],
  },
  {
    id: 'institutions',
    title: '14. Commandes institutionnelles',
    paragraphs: [
      'Les commandes passées par des écoles, bibliothèques, entreprises ou autres organisations peuvent faire l’objet d’un devis, de conditions volume, de licences multi-utilisateurs et de facturation dédiée.',
      'L’acceptation du devis vaut commande. Les délais, quantités, licences et modalités de paiement figurant au devis prévalent pour cette opération.',
    ],
  },
  {
    id: 'retractation',
    title: '15. Droit de rétractation',
    paragraphs: [
      'Lorsque le droit de rétractation est applicable au client consommateur selon le droit en vigueur :',
    ],
    bullets: [
      'pour les biens physiques : un délai de rétractation peut s’appliquer à compter de la réception, selon les conditions légales et la Politique de remboursement ;',
      'pour les contenus numériques fournis immédiatement : le client peut être invité à renoncer expressément à son droit de rétractation dès le début de l’exécution (téléchargement / accès) ;',
      'pour les services commencés avec accord du client avant la fin du délai : le droit de rétractation peut être limité à proportion du service déjà fourni.',
    ],
  },
  {
    id: 'remboursements',
    title: '16. Annulation, retours et remboursements',
    paragraphs: [
      'Les modalités détaillées d’annulation, de retour et de remboursement sont précisées dans la Politique de remboursement.',
      'De manière générale, un produit numérique déjà téléchargé ou consulté, un abonnement consommé ou un service entièrement exécuté peuvent ne pas être remboursables, sauf non-conformité, défaut d’accès imputable à Afric-Educ, ou disposition légale impérative.',
    ],
  },
  {
    id: 'garanties',
    title: '17. Garanties et non-conformité',
    paragraphs: [
      'Le client bénéficie des garanties légales applicables (conformité, vices cachés, selon le droit du pays concerné).',
      'En cas de fichier numérique défectueux, d’ouvrage physique endommagé à la livraison ou d’erreur d’article, le client doit contacter le support avec les éléments de la commande. Afric-Educ pourra proposer un nouvel accès, un remplacement, un avoir ou un remboursement.',
    ],
  },
  {
    id: 'propriete',
    title: '18. Réserve de propriété et licences',
    paragraphs: [
      'Pour les biens physiques, Afric-Educ conserve la propriété des produits jusqu’au paiement intégral du prix.',
      'Pour les contenus numériques, le client acquiert une licence d’usage personnelle dans les limites prévues, et non la propriété des droits d’auteur sur l’ouvrage.',
    ],
  },
  {
    id: 'responsabilite',
    title: '19. Responsabilité',
    paragraphs: [
      'Afric-Educ est responsable de la bonne exécution des obligations essentielles de la vente, dans les limites du droit applicable.',
      'Afric-Educ ne saurait être tenue responsable des retards imputables au client, aux transporteurs indépendants hors de son contrôle raisonnable, aux interruptions réseau de l’utilisateur, ou à un usage non conforme des contenus numériques.',
      'Les limitations de responsabilité des CGU s’appliquent également, sous réserve des dispositions impératives de protection des consommateurs.',
    ],
  },
  {
    id: 'force-majeure',
    title: '20. Force majeure',
    paragraphs: [
      'Afric-Educ ne pourra être tenue responsable d’un manquement résultant d’un événement de force majeure ou d’un cas fortuit (catastrophe, conflit, panne généralisée des réseaux, décision administrative, etc.) empêchant l’exécution normale de la commande.',
    ],
  },
  {
    id: 'donnees',
    title: '21. Données personnelles',
    paragraphs: [
      'Les données collectées pour le traitement des commandes (identité, contact, adresse, paiement, facturation) sont traitées conformément à la Politique de confidentialité.',
    ],
  },
  {
    id: 'preuve',
    title: '22. Preuve et archivage',
    paragraphs: [
      'Les registres informatisés d’Afric-Educ (commandes, paiements, logs techniques) font foi entre les parties, sauf preuve contraire, dans les conditions prévues par le droit applicable.',
      'Les factures et confirmations de commande sont mises à disposition dans l’espace compte ou transmises par e-mail.',
    ],
  },
  {
    id: 'modifications',
    title: '23. Modification des CGV',
    paragraphs: [
      'Afric-Educ peut modifier les présentes CGV à tout moment. La version applicable à une commande est celle en vigueur au jour de la validation de cette commande.',
      'La date de mise à jour est indiquée en tête de page.',
    ],
  },
  {
    id: 'droit',
    title: '24. Droit applicable et litiges',
    paragraphs: [
      'Les présentes CGV sont régies par le droit applicable au siège d’exploitation d’Afric-Educ, sous réserve des dispositions impératives de protection des consommateurs éventuellement applicables dans le pays de résidence du client.',
      'En cas de litige, une solution amiable sera recherchée en priorité via le support. À défaut, les juridictions compétentes seront saisies selon les règles de droit applicables.',
    ],
  },
  {
    id: 'contact',
    title: '25. Contact',
    paragraphs: [
      'Commandes et SAV : support@afric-educ.com.',
      'Contact général : contact@afric-educ.com. Institutions / devis : page Contacter un conseiller.',
    ],
  },
]

export const salesRelatedLinks: LegalRelatedLink[] = [
  { label: 'Politique de remboursement', href: '/legal/remboursement' },
  { label: 'Conditions générales d’utilisation', href: '/legal/cgu' },
  { label: 'Politique de confidentialité', href: '/legal/confidentialite' },
  { label: 'Politique de cookies', href: '/legal/cookies' },
  { label: 'Droits d’auteur / DMCA', href: '/legal/dmca' },
  { label: 'Contact', href: '/partenaires/services/contact' },
]
