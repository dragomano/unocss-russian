---
layout: page
title: Наша команда
description: Разработкой UnoCSS занимается международная команда.
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamPageSection,
  VPTeamMembers
} from 'vitepress/theme'
import { teamMembers, teamEmeritiMembers } from './.vitepress/contributors'
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>Наша команда</template>
    <template #lead>
      Разработкой UnoCSS занимается международная команда, некоторые участники
      которой представлены ниже.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers :members="teamMembers" />
  <VPTeamPageSection>
    <template #title>Почётные участники</template>
    <template #lead>
      Здесь мы отдаем дань уважения участникам, которые отошли от активной разработки,
      но внесли ценный вклад в прошлом.
    </template>
    <template #members>
      <VPTeamMembers size="small" :members="teamEmeritiMembers" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>
