<template>
<q-page>
   <q-list bordered separator v-if="itemsKey && Array.isArray(sortedItems)">
      <OneItem :key="item" v-for="item in sortedItems" :item="item"/>
   </q-list>
</q-page>
</template>

<script>
import {pageTitle, itemsKey, itemsToShow, init} from '../store'
import { sortedItems} from '../store/items'
import { defineComponent, onBeforeMount, watch } from 'vue';
import { useRoute } from 'vue-router';
import OneItem from 'src/components/items/OneItem.vue'

export default defineComponent({
   components: {OneItem},
   setup(){
      let route = useRoute()
      function initData(){
         if (!route.params.key) return
         itemsKey.value = route.params.key
         pageTitle.value = itemsToShow.value[itemsKey.value].title
         init()
      }
      onBeforeMount(initData)
      watch(() => route.params, initData)
      return {sortedItems, itemsKey}
   }
})
</script>