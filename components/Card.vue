<script setup>

defineProps({
  card: {
    type: Object,
    default: {
  "lang": "en",
  "id": 5,
  "status": "published",
  "sort": 4,
  "date_created": null,
  "date_updated": "2025-03-21T01:33:06.416Z",
  "brow": "Professionally Accountable",
  "heading": "The Aurora Project",
  "tagline": null,
  "description": "<p>The Aurora Project is a child protection platform developed by UNICEF Romania in collaboration with NGO and government partners. The system enables social workers and community health care providers to diagnose and monitor vulnerabilities experienced by children and their families. Through the administration of a child protection questionnaire, the system supports the determination of a minimum package of services needed by children and their families. It also enables child protection evaluation and planning work at the national level. The Aurora Project reflects many of the RD4C Principles through its collection of data for clear and well- defined purposes and the various training and guidance materials provided to users. UNICEF Romania and counterparts in the Romanian Government are still working to address challenges related to sensitive group data and the potential for disproportionate data collection and retention.</p>",
  "url": "https://files.rd4c.org/RD4C_Romania_Aurora_Project.pdf",
  "principles": [
    "Professionally Accountable",
    "Protective of Children’s Rights",
    "Purpose-Driven"
  ],
  "publication_type": "case_study",
  "slug": "the-aurora-project",
  "heading": "The Aurora Project",
  "main_content": "<p>The Aurora Project is a child protection platform developed by UNICEF Romania in collaboration with NGO and government partners. The system enables social workers and community health care providers to diagnose and monitor vulnerabilities experienced by children and their families. Through the administration of a child protection questionnaire, the system supports the determination of a minimum package of services needed by children and their families. It also enables child protection evaluation and planning work at the national level. The Aurora Project reflects many of the RD4C Principles through its collection of data for clear and well- defined purposes and the various training and guidance materials provided to users. UNICEF Romania and counterparts in the Romanian Government are still working to address challenges related to sensitive group data and the potential for disproportionate data collection and retention.</p>",
  "cover_image": "https://cms.thegovlab.com/assets/b39ac192-ebac-4b9b-810a-96390eca18f4"
}
  }
})

const BAGDE_VARIANTS = [
  "primary",
  "success",
  "warning",
  "danger",
  "info",
  "neutral"
]

const isActive = ref(false); 


</script>

<template>
  <div :is-active="isActive" @click="isActive = !isActive">
    <sl-card class="card">
      <div class="row-container">
        <img
        slot="image" 
        :src="card.cover_image" 
        alt="Random Image" />
  
        <div class="content">
          <h4 class="brow">{{ card.brow }}</h4>
          <h3 class="heading">{{ card.heading }}</h3>
          <h5 class="tagline">{{ card.tagline }}</h5>
          <p class="main-text" v-html="card.description"></p>
          <div class="actions">
            <sl-button variant="warning" size="large" outline>Open Document</sl-button>
          </div>
        </div>
      </div>

      <div slot="footer" class="principles-list">
        <sl-badge v-for="(item, index) in card.principles" :variant="BAGDE_VARIANTS[index]" pill class="badge">{{ item }}</sl-badge>
      </div>
    </sl-card>
  
  </div>
</template>

<style lang="scss" scoped>

// you can define style to a component section using parts;
.card::part(base) {
  background-color: var(--custom-color-secondary-200);
}

// or add a class to the component
.row-container {
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  align-items: center;
  gap: 2rem;

  & img {
    width: 50%;
    height: 450px;
    transform: rotate(-5deg) scale(1);
    transition: all 0.5s;
    flex: 1;

    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
    object-fit: cover;
    
  }

  @media (max-width: 768px) {
    flex-direction: column;
    img {
      width: 100%;
    }
    .content {
      width: 100%;
      padding-right: 0;
    }
    
  }
  
}

[is-active="true"] img { 
  transform: rotate(0deg) scale(1.05);
  @media screen and (min-width: 768px) { transform: rotate(0deg) scale(1.1); }
}


.main-text {
  --lh: 1.40;
  --max-lines: 6;
  position: relative;
  max-height: calc(var(--lh) * var(--max-lines) * 1em);
  overflow: clip;
  transition: all calc(0.05s * var(--max-lines));

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    top: 0;
    left: 0;
    transition: all calc(0.5s);
    background: linear-gradient(to bottom, transparent, hsla(var(--white-hsl), 1) 75%);
  }
}

[is-active="true"] .main-text {
  --max-lines: 80;

  &::after {
    top: 100%;
    transition-delay: .15s;
  }
}

.content {
  width: 50%;
  padding-right: 2rem;
}
</style>
