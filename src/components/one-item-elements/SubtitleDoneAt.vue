<template>
   <q-item-label caption>Сделанно {{ item.DoneAt }}</q-item-label>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
   name: 'SubtitleDoneAt',
   props: ['item'],
})
</script>