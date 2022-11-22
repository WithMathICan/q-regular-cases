<template>
   <q-item-label caption v-if="item">
      Сделанно {{ hoursToString(HoursAgo(item)) }} назад
   </q-item-label>
</template>

<script>
import { defineComponent } from 'vue';
import { hoursToString, HoursAgo } from 'src/store/items'


export default defineComponent({
   props: ['item'],
   setup(){
      return {hoursToString, HoursAgo}
   }
})
</script>