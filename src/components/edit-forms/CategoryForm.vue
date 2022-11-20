<template>
   <q-input label="Название" v-model="item.title" autofocus />
   <q-input label="Описание" v-model="item.description" />
   <q-input label="Иконка" v-model="item.icon" />
   <a href="https://fonts.google.com/icons?icon.platform=android">Доступные иконки</a>
   <q-select v-model="item.type" option-value="id" emit-value map-options :options="categoryTypes" label="Тип" />
   <!-- <q-input label="Порядковый номер" v-model="item.order" /> -->
</template>

<script>
import { defineComponent } from 'vue';
import { categoryTypes } from 'src/store/category'

export default defineComponent({
   props: ['item'],
   setup(){
      return {categoryTypes}
   }
})
</script>