<template>
   <q-input label="Название" v-model="item.title" autofocus />
   <q-input label="Описание" v-model="item.description" />
   <!-- <q-input label="За сколько дней нужно выполнить" v-model="item.days" /> -->
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
   props: ['item'],
})
</script>