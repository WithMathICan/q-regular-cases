<template>
   <q-page>
      <q-list bordered separator v-if="Array.isArray(sortedCategories)">
         <OneCategory :key="item" v-for="item in sortedCategories" :item="item"/>
      </q-list>
   </q-page>
</template>

<script>
const { defineComponent, onBeforeMount } = require('vue');
import {pageTitle, itemsKey } from '../store'
import {sortedCategories } from '../store/category'
import OneCategory from 'src/components/items/OneCategory.vue';

export default defineComponent({
   setup(){
      function initData(){
         itemsKey.value = 'categories'
         pageTitle.value = "Категории"
      }
      onBeforeMount(initData)
      return {sortedCategories}
   },
   components: {OneCategory}
})
</script>