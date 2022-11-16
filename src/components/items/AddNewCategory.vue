<template>
   <q-dialog v-model="prompt" persistent>
      <q-card style="min-width: 350px">
         <q-card-section>
            <div class="text-h6">Добавить категорию</div>
         </q-card-section>

         <q-card-section class="q-pt-none">
            <q-input label="Название" v-model="newItem.title" autofocus />
            <q-input label="Описание" v-model="newItem.description" />
            <q-input label="Алиас" v-model="newItem.alias" />
            <q-select v-model="newItem.type" option-value="id" option-label="title" :emit-value="true" :options="categoryTypes" label="Тип" />
         </q-card-section>

         <q-card-actions align="right">
            <q-btn class="text-primary" flat label="Отмена" v-close-popup />
            <q-btn color="primary" label="Добавить" @click="addNewCategory" v-close-popup />
         </q-card-actions>
      </q-card>
   </q-dialog>
   <q-btn flat round dense icon="add" @click="openPrompt"/>
</template>

<script>
import { categoryTypes, create } from 'src/store'
import { defineComponent, ref } from 'vue'
export default defineComponent({
   setup(){
      let prompt = ref(false)
      let category0 = { title: '', description: '', alias: '', type: categoryTypes[0].id }
      
      let newItem = ref({})
      
      function openPrompt(){
         prompt.value = true
         newItem.value = {...category0}
      }

      function addNewCategory(){
         create(newItem.value)
         prompt.value = false
      }

      return {prompt, newItem, categoryTypes, openPrompt, addNewCategory}
   }
})
</script>