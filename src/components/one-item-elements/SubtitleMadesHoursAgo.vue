<template>
   <q-item-label caption>
      Сделанно {{ hoursToString(item.HoursAgo) }} назад
   </q-item-label>
</template>

<script>
import { defineComponent } from 'vue';
import { hoursToString } from 'src/store/items'


export default defineComponent({
   props: ['item'],
   setup(){
      return {hoursToString}
   }
})
</script>