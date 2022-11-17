<template>
   <q-dialog v-model="prompt" persistent>
      <q-card style="min-width: 350px">
         <q-card-section>
            <div class="text-h6">Добавить категорию</div>
         </q-card-section>

         <q-card-section class="q-pt-none">
            <CategoryForm  :item="newItem"/>
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
import { create } from 'src/store'
import { categoryTypes } from 'src/store/category'
import { defineComponent, ref } from 'vue'
import CategoryForm from '../edit-forms/CategoryForm.vue'
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

      return {prompt, newItem, openPrompt, addNewCategory}
   },
   components: {CategoryForm}
})
</script>