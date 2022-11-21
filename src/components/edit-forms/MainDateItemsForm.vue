<template>
   <q-input label="Название" v-model="item.title" autofocus />
   <q-input label="Описание" v-model="item.description" />
   <SelectDate :item="item" />
   <q-checkbox v-model="item.use_year" label="Год играет роль" />
</template>

<script>
import { defineComponent } from 'vue';
import SelectDate from './SelectDate.vue';

export default defineComponent({
   props: ['item'],
   components: { SelectDate }
})
</script>