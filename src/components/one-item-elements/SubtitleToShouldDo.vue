<template>
   <q-item-label :class="ClassOfToShouldDo(item)" caption>{{ TextToShouldDo(item) }}</q-item-label>
</template>

<script>
import { defineComponent } from 'vue';
import {ClassOfToShouldDo, TextToShouldDo} from 'src/store/items'

export default defineComponent({
   props: ['item'],
   setup(){
      return {ClassOfToShouldDo, TextToShouldDo}
   }
})
</script>