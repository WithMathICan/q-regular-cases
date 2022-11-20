<template>
   <q-page>
      <q-list bordered separator v-if="allItems && Array.isArray(allItems[CATEGORY_KEY])">
         <OneCategory :key="item" v-for="(item, i) in allItems[CATEGORY_KEY]" :item="item" :item_index="i"/>
      </q-list>
   </q-page>
</template>

<script>
const { defineComponent, onBeforeMount } = require('vue');
import {pageTitle, itemsKey, allItems, CATEGORY_KEY } from '../store'
import OneCategory from 'src/components/items/OneCategory.vue';

export default defineComponent({
   components: {OneCategory},
   setup(){
      function initData(){
         itemsKey.value = CATEGORY_KEY
         pageTitle.value = "Категории"
      }
      onBeforeMount(initData)
      return {allItems, CATEGORY_KEY}
   }
})
</script>