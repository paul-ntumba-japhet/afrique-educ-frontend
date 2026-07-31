<script setup lang="ts">
import type { DiscoveryTrendItem } from './DiscoveryShelfRow.vue'
import coverDroit from '~/assets/images/explorer/tendances/droit_congolais.png'
import coverRevolution from '~/assets/images/explorer/tendances/futuristic_cityscape.png'
import coverAfriqueDemain from '~/assets/images/explorer/tendances/afrique-futur.png'
import coverHistoire from '~/assets/images/explorer/tendances/histoire_africaine.png'
import coverIA from '~/assets/images/explorer/tendances/intelligence_artificielle.png'
import coverRomans from '~/assets/images/explorer/tendances/romans_inspirants.png'
import coverEntreDeuxRives from '~/assets/images/explorer/tendances/romantic_sunset.png'
import coverSolitude from '~/assets/images/explorer/tendances/rompre_solitude.png'
import coverScience from '~/assets/images/explorer/tendances/science_lab.png'
import coverAuteursFrancais from '~/assets/images/explorer/scolaires/auteurs_francais.png'
import coverBiologie from '~/assets/images/explorer/scolaires/biologie_scientifique_3.png'
import coverChimie2 from '~/assets/images/explorer/scolaires/chimie_scientifique_2.png'
import coverChimie4 from '~/assets/images/explorer/scolaires/chimie_scientifique_4.png'
import coverComptabilite from '~/assets/images/explorer/scolaires/comptabilite_ohada_6.png'
import coverLatin from '~/assets/images/explorer/scolaires/latin_3.png'
import coverMaths4 from '~/assets/images/explorer/scolaires/maitriser_maths_scientifiques_4.png'
import coverMaths32 from '~/assets/images/explorer/scolaires/maitriser_maths_scintifique_3.2.png'
import coverMaths2 from '~/assets/images/explorer/scolaires/maitriser_maths_scintifiques_2.png'

const tendancesItems: DiscoveryTrendItem[] = [
  {
    title: "L'Afrique de demain",
    author: 'Aissatou Ndour',
    cover: coverAfriqueDemain,
    href: '/catalogue?tri=tendances',
    statusBadge: 'HOT',
    statusBadgeVariant: 'hot',
    rankBadge: '#1 TENDANCE',
    category: 'Essai',
    pages: 256,
    rating: 4.8,
  },
  {
    title: 'Révolution numérique africaine',
    author: 'Collectif Afric-Educ',
    cover: coverRevolution,
    href: '/catalogue?tri=tendances&theme=tech',
    statusBadge: 'NOUVEAU',
    statusBadgeVariant: 'new',
    rankBadge: 'TOP 10',
    category: 'Technologie',
    pages: 312,
    rating: 4.9,
  },
  {
    title: 'Entre deux rives',
    author: 'Marie Kouamé',
    cover: coverEntreDeuxRives,
    href: '/catalogue?tri=tendances&genre=roman',
    statusBadge: 'TOP',
    statusBadgeVariant: 'top',
    rankBadge: '#2 TENDANCE',
    category: 'Roman',
    pages: 224,
    rating: 4.7,
  },
  {
    title: 'Droit congolais contemporain',
    author: 'Prof. M. Kabongo',
    cover: coverDroit,
    href: '/catalogue?domaine=droit',
    statusBadge: 'TOP',
    statusBadgeVariant: 'top',
    rankBadge: 'TOP 10',
    category: 'Droit',
    pages: 384,
    rating: 4.6,
  },
  {
    title: 'Histoire africaine',
    author: 'Dr. Fatou Diallo',
    cover: coverHistoire,
    href: '/catalogue?domaine=histoire',
    statusBadge: 'HOT',
    statusBadgeVariant: 'hot',
    rankBadge: '#3 TENDANCE',
    category: 'Histoire',
    pages: 298,
    rating: 4.8,
  },
  {
    title: 'Intelligence artificielle',
    author: 'Institut Tech Africa',
    cover: coverIA,
    href: '/catalogue?domaine=tech',
    statusBadge: 'NOUVEAU',
    statusBadgeVariant: 'new',
    rankBadge: 'TOP 10',
    category: 'Technologie',
    pages: 276,
    rating: 4.7,
  },
  {
    title: 'Romans inspirants',
    author: 'Collectif Littéraire',
    cover: coverRomans,
    href: '/catalogue?genre=roman',
    statusBadge: 'TOP',
    statusBadgeVariant: 'top',
    rankBadge: '#4 TENDANCE',
    category: 'Roman',
    pages: 240,
    rating: 4.5,
  },
  {
    title: 'Rompre la solitude',
    author: 'Jean-Paul Mbemba',
    cover: coverSolitude,
    href: '/catalogue?genre=roman',
    statusBadge: 'NOUVEAU',
    statusBadgeVariant: 'new',
    rankBadge: 'TOP 10',
    category: 'Roman',
    pages: 198,
    rating: 4.6,
  },
  {
    title: 'Sciences & laboratoire',
    author: 'U. Sciences Kinshasa',
    cover: coverScience,
    href: '/catalogue?domaine=sciences',
    statusBadge: 'HOT',
    statusBadgeVariant: 'hot',
    rankBadge: '#5 TENDANCE',
    category: 'Sciences',
    pages: 320,
    rating: 4.8,
  },
]

const manuelsScolairesItems: DiscoveryTrendItem[] = [
  {
    title: 'Auteurs français',
    author: 'G. Pécheur',
    cover: coverAuteursFrancais,
    href: '/catalogue?categorie=manuels-scolaires&matiere=francais',
    statusBadge: 'TOP',
    statusBadgeVariant: 'top',
    rankBadge: '#1 SCOLAIRE',
    category: 'Français',
    pages: 312,
    rating: 4.7,
  },
  {
    title: 'Biologie cellulaire',
    author: 'F. Dufey',
    cover: coverBiologie,
    href: '/catalogue?categorie=manuels-scolaires&matiere=biologie',
    statusBadge: 'HOT',
    statusBadgeVariant: 'hot',
    rankBadge: 'TOP 10',
    category: 'Biologie',
    pages: 368,
    rating: 4.8,
  },
  {
    title: 'Maîtriser la Chimie 2',
    author: 'N. Mayengo Nzita & J. L. Nsoni Zeno',
    cover: coverChimie2,
    href: '/catalogue?categorie=manuels-scolaires&matiere=chimie',
    statusBadge: 'NOUVEAU',
    statusBadgeVariant: 'new',
    rankBadge: '#2 SCOLAIRE',
    category: 'Chimie',
    pages: 420,
    rating: 4.6,
  },
  {
    title: 'Maîtriser la Chimie 4',
    author: 'Collectif Éditions Loyola',
    cover: coverChimie4,
    href: '/catalogue?categorie=manuels-scolaires&matiere=chimie',
    statusBadge: 'TOP',
    statusBadgeVariant: 'top',
    rankBadge: 'TOP 10',
    category: 'Chimie',
    pages: 396,
    rating: 4.7,
  },
  {
    title: 'Comptabilité analytique',
    author: 'P. Alphonse Verhulst',
    cover: coverComptabilite,
    href: '/catalogue?categorie=manuels-scolaires&matiere=comptabilite',
    statusBadge: 'HOT',
    statusBadgeVariant: 'hot',
    rankBadge: '#3 SCOLAIRE',
    category: 'Comptabilité',
    pages: 344,
    rating: 4.8,
  },
  {
    title: 'Le Latin 3',
    author: 'Gaston Kankolongo Mupovi',
    cover: coverLatin,
    href: '/catalogue?categorie=manuels-scolaires&matiere=latin',
    statusBadge: 'NOUVEAU',
    statusBadgeVariant: 'new',
    rankBadge: 'TOP 10',
    category: 'Latin',
    pages: 288,
    rating: 4.6,
  },
  {
    title: 'Maîtriser les Maths 4H',
    author: 'Collectif Éditions Loyola',
    cover: coverMaths4,
    href: '/catalogue?categorie=manuels-scolaires&matiere=mathematiques',
    statusBadge: 'TOP',
    statusBadgeVariant: 'top',
    rankBadge: '#4 SCOLAIRE',
    category: 'Mathématiques',
    pages: 1344,
    rating: 4.9,
  },
  {
    title: 'Maîtriser les Maths 3.2H',
    author: 'Badety Lshima & Boma Kibir',
    cover: coverMaths32,
    href: '/catalogue?categorie=manuels-scolaires&matiere=mathematiques',
    statusBadge: 'HOT',
    statusBadgeVariant: 'hot',
    rankBadge: 'TOP 10',
    category: 'Mathématiques',
    pages: 512,
    rating: 4.7,
  },
  {
    title: 'Maîtriser les Maths 2H',
    author: 'Collectif Éditions Loyola',
    cover: coverMaths2,
    href: '/catalogue?categorie=manuels-scolaires&matiere=mathematiques',
    statusBadge: 'NOUVEAU',
    statusBadgeVariant: 'new',
    rankBadge: '#5 SCOLAIRE',
    category: 'Mathématiques',
    pages: 480,
    rating: 4.8,
  },
]
</script>

<template>
  <section class="discovery-section discovery-section--dark">
    <div class="page-container discovery-section__shelves">
      <DiscoveryShelfRow
        title="Tendances"
        subtitle="Les livres les plus populaires cette semaine"
        view-all-href="/tendances"
        :items="tendancesItems"
        :cards-per-view="3"
      />

      <DiscoveryShelfRow
        title="Manuels scolaires"
        subtitle="Ouvrages du secondaire : humanités, sciences et gestion"
        view-all-href="/manuels-scolaires"
        class="discovery-shelf-row--light-covers"
        :items="manuelsScolairesItems"
        :cards-per-view="3"
      />
    </div>
  </section>
</template>
