import type { LegalPageMeta, LegalRelatedLink, LegalSection } from '@/data/legal'

export const privacyMeta: LegalPageMeta = {
  title: 'Politique de confidentialité',
  shortTitle: 'Confidentialité',
  description:
    'Comment Afric-Educ collecte, utilise, protège et conserve vos données personnelles, y compris les informations d’identité, de contact, de paiement et les dossiers nécessaires à la création de compte.',
  updatedAt: '28 juillet 2026',
  effectiveAt: '28 juillet 2026',
}

export const privacySections: LegalSection[] = [
  {
    id: 'introduction',
    title: '1. Introduction',
    paragraphs: [
      'La présente Politique de confidentialité explique comment Afric-Educ (ci-après « Afric-Educ », « nous ») collecte, utilise, stocke, partage et protège les données personnelles des utilisateurs de la plateforme (lecteurs, auteurs, organisations, partenaires et visiteurs).',
      'En créant un compte, en passant commande, en souscrivant un abonnement ou en utilisant nos services, vous reconnaissez avoir pris connaissance de cette politique. Elle complète nos Conditions générales d’utilisation, nos Conditions de vente et notre Politique de cookies.',
      'Certaines données collectées sont particulièrement sensibles (identité, coordonnées, documents justificatifs, informations de paiement). Elles font l’objet de mesures de protection renforcées décrites ci-dessous.',
    ],
  },
  {
    id: 'responsable',
    title: '2. Responsable du traitement',
    paragraphs: [
      'Le responsable du traitement des données personnelles collectées via la plateforme est Afric-Educ.',
      'Pour toute question relative à vos données, vous pouvez contacter : privacy@afric-educ.com. Le support technique reste joignable à support@afric-educ.com.',
    ],
  },
  {
    id: 'donnees-collectees',
    title: '3. Données personnelles collectées',
    paragraphs: [
      'Selon votre profil (lecteur, auteur, organisation, partenaire) et les services utilisés, nous pouvons collecter les catégories de données suivantes :',
    ],
    bullets: [
      'Données d’identité : nom, prénom, raison sociale, nom d’auteur / nom public, date de naissance le cas échéant, pièce d’identité ou documents d’identité transmis pour vérification.',
      'Données de compte : adresse e-mail, mot de passe (stocké sous forme hachée / non réversible), identifiants de connexion, préférences de compte, type de profil.',
      'Coordonnées : numéro de téléphone / contact, adresse postale et adresse de livraison, pays, ville, code postal.',
      'Documents de création / vérification de compte : dossiers et pièces indispensables à l’ouverture ou à la validation d’un compte (pièce d’identité, justificatif de domicile, documents d’entreprise, mandat, registre, attestation, etc.).',
      'Données de paiement : informations relatives aux cartes bancaires et moyens de paiement, traitées principalement via des prestataires de paiement sécurisés ; Afric-Educ ne stocke pas le numéro complet de carte (PAN), le cryptogramme ni le code PIN.',
      'Données transactionnelles : historique d’achats, locations, abonnements, factures, remboursements, devis institutionnels.',
      'Données éditoriales et d’usage : ouvrages consultés, bibliothèque, listes, publications, statistiques d’auteur, interactions avec le catalogue.',
      'Données techniques : adresse IP, journaux de connexion, type d’appareil, navigateur, cookies et traceurs (voir Politique de cookies).',
      'Communications : messages envoyés au support, formulaires de contact, échanges avec un conseiller.',
    ],
  },
  {
    id: 'donnees-critiques',
    title: '4. Traitement des données critiques',
    paragraphs: [
      'Certaines données sont considérées comme critiques en raison de leur sensibilité et des risques associés à une utilisation abusive :',
    ],
    bullets: [
      'Identifiants de compte (e-mail + mot de passe) : le mot de passe est chiffré / haché ; il n’est jamais stocké en clair ni communiqué à des tiers.',
      'Adresses physiques et numéros de contact : utilisés pour la livraison, la facturation, la vérification d’identité et la relation client.',
      'Données de cartes bancaires : collectées et traitées par des prestataires de paiement conformes aux standards de sécurité (notamment PCI-DSS). Afric-Educ ne conserve pas les données complètes de carte.',
      'Dossiers et documents d’ouverture de compte : conservés de manière sécurisée, accessibles uniquement aux personnes habilitées, et utilisés exclusivement pour la vérification, la conformité et la prévention de la fraude.',
    ],
  },
  {
    id: 'finalites',
    title: '5. Finalités du traitement',
    paragraphs: [
      'Vos données sont traitées pour les finalités suivantes :',
    ],
    bullets: [
      'Créer, authentifier et sécuriser votre compte.',
      'Vérifier votre identité et la légitimité de votre organisation lorsque cela est requis.',
      'Fournir les services de catalogue, lecture, achat, location, publication, abonnement et commandes institutionnelles.',
      'Traiter les paiements, factures, livraisons et éventuels remboursements.',
      'Assurer le support client, le suivi commercial et l’accompagnement conseiller.',
      'Prévenir la fraude, les abus, les accès non autorisés et les activités illicites.',
      'Respecter nos obligations légales, comptables, fiscales et réglementaires.',
      'Améliorer la plateforme, la sécurité et l’expérience utilisateur (analyses agrégées lorsque possible).',
      'Vous envoyer des communications de service ; les communications marketing ne sont envoyées qu’avec votre consentement lorsque requis.',
    ],
  },
  {
    id: 'bases-legales',
    title: '6. Bases légales',
    paragraphs: [
      'Selon le cas, le traitement repose sur :',
    ],
    bullets: [
      'l’exécution d’un contrat (création de compte, commande, abonnement, publication) ;',
      'le respect d’obligations légales (facturation, conservation comptable, lutte contre la fraude) ;',
      'l’intérêt légitime d’Afric-Educ (sécurité de la plateforme, amélioration des services, prévention des abus), sous réserve de vos droits ;',
      'votre consentement, lorsque celui-ci est requis (cookies non essentiels, certaines communications marketing, certains traitements de documents).',
    ],
  },
  {
    id: 'sources',
    title: '7. Sources des données',
    paragraphs: [
      'Les données proviennent principalement de vous (formulaires d’inscription, espace compte, panier, devis, dépôt de documents, contact support).',
      'Elles peuvent aussi provenir de prestataires de paiement (statut de transaction), de partenaires logistiques (suivi de livraison) ou, le cas échéant, de sources nécessaires à la vérification d’une organisation, dans le respect du droit applicable.',
    ],
  },
  {
    id: 'destinataires',
    title: '8. Destinataires et sous-traitants',
    paragraphs: [
      'Vos données peuvent être communiquées, uniquement dans la mesure nécessaire, aux catégories de destinataires suivantes :',
    ],
    bullets: [
      'équipes internes habilitées (support, opérations, conformité, finance, technique) ;',
      'prestataires de paiement et de lutte contre la fraude ;',
      'hébergeurs, prestataires cloud et outils techniques assurant le fonctionnement sécurisé de la plateforme ;',
      'prestataires logistiques et de livraison pour les commandes physiques ;',
      'conseils professionnels (juridique, comptable) lorsqu’une obligation ou un litige l’exige ;',
      'autorités compétentes, uniquement sur réquisition légale ou obligation réglementaire.',
    ],
  },
  {
    id: 'transferts',
    title: '9. Transferts hors de votre pays',
    paragraphs: [
      'Certains prestataires techniques ou de paiement peuvent être situés hors de votre pays de résidence. Dans ce cas, Afric-Educ met en œuvre des garanties appropriées (clauses contractuelles, mesures de sécurité, sélection de prestataires de confiance) afin de protéger vos données.',
      'Les documents d’identité et dossiers de vérification ne sont transmis à des tiers que si cela est strictement nécessaire à la finalité poursuivie (par exemple vérification anti-fraude) et encadré contractuellement.',
    ],
  },
  {
    id: 'conservation',
    title: '10. Durées de conservation',
    paragraphs: [
      'Nous conservons vos données uniquement pendant la durée nécessaire aux finalités poursuivies, puis les archivons ou les supprimons de manière sécurisée :',
    ],
    bullets: [
      'Données de compte : pendant la durée d’activité du compte, puis pendant une période limitée après clôture pour sécurité, preuve et obligations légales.',
      'Mots de passe : conservés uniquement sous forme hachée pendant la vie du compte ; invalidés à la clôture ou au renouvellement.',
      'Documents de vérification : conservés le temps de la validation et, si nécessaire, pendant la durée légale ou contractuelle applicable, puis détruits ou anonymisés.',
      'Données de transaction et facturation : selon les durées légales de conservation comptable et fiscale.',
      'Données de paiement carte : non stockées en clair par Afric-Educ ; gérées par le prestataire de paiement selon ses propres règles et obligations.',
      'Journaux techniques de sécurité : durée limitée, proportionnée aux besoins de détection et d’investigation.',
    ],
  },
  {
    id: 'securite',
    title: '11. Sécurité des données',
    paragraphs: [
      'Afric-Educ met en œuvre des mesures techniques et organisationnelles destinées à protéger les données critiques contre l’accès non autorisé, la perte, l’altération ou la divulgation :',
    ],
    bullets: [
      'chiffrement des communications (HTTPS / TLS) ;',
      'hachage des mots de passe et politiques d’authentification ;',
      'contrôle d’accès strict (principe du moindre privilège) ;',
      'séparation des environnements et journalisation des accès sensibles ;',
      'prestataires de paiement certifiés pour les données bancaires ;',
      'stockage sécurisé et accès restreint aux dossiers d’identité et documents de compte ;',
      'procédures de gestion des incidents de sécurité.',
    ],
  },
  {
    id: 'mots-de-passe',
    title: '12. Mots de passe et sécurité du compte',
    paragraphs: [
      'Vous êtes responsable du choix d’un mot de passe robuste et de la confidentialité de vos identifiants. Afric-Educ ne vous demandera jamais votre mot de passe par e-mail ou message non sécurisé.',
      'En cas de suspicion d’accès non autorisé, changez immédiatement votre mot de passe et contactez support@afric-educ.com. Nous pouvons suspendre un compte pour protéger vos données en cas d’activité anormale.',
    ],
  },
  {
    id: 'paiement',
    title: '13. Données de paiement et cartes bancaires',
    paragraphs: [
      'Lorsque vous réglez un achat, un abonnement ou une commande institutionnelle, les informations de carte bancaire sont saisies dans un environnement sécurisé opéré par notre prestataire de paiement.',
      'Afric-Educ ne reçoit en principe que des informations limitées nécessaires au suivi de la transaction (statut, référence, montant, moyens partiellement masqués). Nous ne stockons pas le numéro complet de carte, le cryptogramme visuel ni les données d’authentification forte.',
      'Toute demande de remboursement ou litige de paiement est traitée conformément à la Politique de remboursement et aux Conditions de vente.',
    ],
  },
  {
    id: 'documents',
    title: '14. Dossiers et documents de création de compte',
    paragraphs: [
      'Pour certains profils (auteurs, organisations, partenaires), la création ou la validation d’un compte peut exiger le dépôt de dossiers et documents indispensables (identité, justificatifs, documents administratifs ou corporatifs).',
      'Ces documents sont utilisés exclusivement pour : vérifier l’identité, valider l’éligibilité au service, prévenir la fraude, respecter des obligations légales et assurer la sécurité des transactions.',
      'Ils ne sont pas exploités à des fins marketing. Leur accès est limité aux équipes et prestataires strictement habilités. Vous pouvez demander des informations sur leur conservation via privacy@afric-educ.com.',
    ],
  },
  {
    id: 'droits',
    title: '15. Vos droits',
    paragraphs: [
      'Selon le droit applicable, vous pouvez disposer des droits suivants concernant vos données personnelles :',
    ],
    bullets: [
      'droit d’accès ;',
      'droit de rectification ;',
      'droit d’effacement (dans les limites légales) ;',
      'droit à la limitation du traitement ;',
      'droit d’opposition ;',
      'droit à la portabilité, lorsque applicable ;',
      'droit de retirer votre consentement à tout moment, sans affecter la licéité du traitement antérieur ;',
      'droit d’introduire une réclamation auprès d’une autorité de protection des données compétente.',
    ],
  },
  {
    id: 'exercice',
    title: '16. Exercice de vos droits',
    paragraphs: [
      'Pour exercer vos droits, adressez votre demande à privacy@afric-educ.com en précisant votre identité et l’objet de la demande. Une vérification d’identité peut être exigée afin de protéger vos données contre toute usurpation.',
      'Nous nous efforçons de répondre dans un délai raisonnable et conforme au droit applicable. Certaines demandes peuvent être refusées ou limitées lorsqu’une conservation est obligatoire (ex. facturation, litige, prévention de la fraude).',
    ],
  },
  {
    id: 'mineurs',
    title: '17. Mineurs',
    paragraphs: [
      'La plateforme n’est pas destinée aux enfants sans supervision. Si un compte doit être créé pour un usage éducatif impliquant un mineur, le traitement s’effectue sous la responsabilité d’un parent, tuteur ou établissement dûment habilité.',
      'Si vous estimez que des données concernant un mineur ont été collectées sans autorisation appropriée, contactez-nous afin que nous puissions prendre les mesures nécessaires.',
    ],
  },
  {
    id: 'cookies',
    title: '18. Cookies et traceurs',
    paragraphs: [
      'La plateforme utilise des cookies et technologies similaires pour le fonctionnement, la sécurité, la mesure d’audience et, le cas échéant, la personnalisation. Le détail figure dans la Politique de cookies.',
    ],
  },
  {
    id: 'modifications',
    title: '19. Modifications de la politique',
    paragraphs: [
      'Nous pouvons mettre à jour la présente Politique de confidentialité pour refléter l’évolution de nos services, de nos prestataires ou des exigences légales. La date de mise à jour est indiquée en tête de page.',
      'En cas de changement substantiel portant sur le traitement de données critiques (identité, documents, paiement), une information adaptée pourra être communiquée via la plateforme ou par e-mail.',
    ],
  },
  {
    id: 'contact',
    title: '20. Contact',
    paragraphs: [
      'Délégué / contact confidentialité : privacy@afric-educ.com.',
      'Support : support@afric-educ.com. Contact général : contact@afric-educ.com. Pour un échange avec un conseiller : page Contact.',
    ],
  },
]

export const privacyRelatedLinks: LegalRelatedLink[] = [
  { label: 'Conditions générales d’utilisation', href: '/legal/cgu' },
  { label: 'Politique de cookies', href: '/legal/cookies' },
  { label: 'Conditions de vente', href: '/legal/conditions-de-vente' },
  { label: 'Politique de remboursement', href: '/legal/remboursement' },
  { label: 'Droits d’auteur / DMCA', href: '/legal/dmca' },
  { label: 'Contact', href: '/partenaires/services/contact' },
]
