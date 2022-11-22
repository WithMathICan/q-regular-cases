<template>
   <q-item-label v-if="item" caption>Сделанно {{ DoneAt(item) }}</q-item-label>
</template>

<script>
import { defineComponent } from 'vue';
import {DoneAt} from 'src/store/items'

export default defineComponent({
   name: 'SubtitleDoneAt',
   props: ['item'],
   setup(){
      return {DoneAt}
   }
})
</script>