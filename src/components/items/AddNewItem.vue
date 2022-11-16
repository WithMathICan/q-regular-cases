<template>
   <q-dialog v-model="prompt" persistent>
      <q-card style="min-width: 350px">
         <q-card-section>
            <div class="text-h6">Добавить</div>
         </q-card-section>

         <q-card-section class="q-pt-none">
            <q-input label="Название" v-model="newItem.title" autofocus />
            <q-input label="Описание" v-model="newItem.description" />
            <q-input  v-if="usingDays" label="Регулярность (количество дней)" v-model.number="newItem.days" />
         </q-card-section>

         <q-card-actions align="right">
            <q-btn class="text-primary" flat label="Отмена" v-close-popup />
            <q-btn color="primary" label="Добавить" @click="addNewItem" v-close-popup />
         </q-card-actions>
      </q-card>
   </q-dialog>
   <q-btn flat round dense icon="add" @click="openPrompt"/>
</template>

<script>
import { addItem, usingDays } from 'src/store/items'
import { defineComponent, ref } from 'vue'
export default defineComponent({
   setup(){
      let prompt = ref(false)
      let item0 = { title: '', description: '', days: 0 }
      let newItem = ref({})
      
      function openPrompt(){
         prompt.value = true
         newItem.value = {...item0}
      }

      function addNewItem(){
         addItem(newItem.value)
         prompt.value = false
      }

      return {prompt, newItem, usingDays, openPrompt, addNewItem}
   }
})
</script>