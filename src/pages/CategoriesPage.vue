<template>
   <q-page>
      Categories
   </q-page>
</template>

<script>
const { defineComponent } = require('vue');
import {pageTitle, itemsKey} from '../store'

export default defineComponent({
   setup(){
      pageTitle.value = "Категории"
      itemsKey.value = 'categories'
   }
})
</script>