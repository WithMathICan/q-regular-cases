<template>
   <q-input label="Название" v-model="item.title" autofocus />
   <q-input label="Описание" v-model="item.description" />
   <q-input label="Регулярность (количество дней)" v-model.number="item.days" />
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
   props: ['item'],
})
</script>