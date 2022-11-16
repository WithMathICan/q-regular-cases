<template>
   <Create v-if="isEditMode" />
   <NonCompleted v-else />
</template>

<script>
import { defineComponent, onBeforeMount } from 'vue';
import { initCases, isEditMode, pageTitle } from '../store'
import Create from '../components/cases/Create.vue'
import NonCompleted from '../components/cases/NonCompleted.vue'

export default defineComponent({
   components: { NonCompleted, Create },
   setup() {
      onBeforeMount(() => {
         pageTitle.value = "Дела"
         initCases()
      })
      return { isEditMode }
   }
})
</script>