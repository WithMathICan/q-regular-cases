<template>
   <q-input label="Название" v-model="item.title" autofocus />
   <q-input label="Описание" v-model="item.description" />
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
   props: ['item'],
})
</script>