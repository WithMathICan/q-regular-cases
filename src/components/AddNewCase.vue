<template>
   <q-dialog v-model="prompt" persistent>
      <q-card style="min-width: 350px">
         <q-card-section>
            <div class="text-h6">Добавить новое дело</div>
         </q-card-section>

         <q-card-section class="q-pt-none">
            <q-input label="Название" v-model="newItem.title" autofocus @keyup.enter="addNewCase" />
            <q-input label="Регулярность (количество дней)" v-model.number="newItem.days" @keyup.enter="addNewCase" />
         </q-card-section>

         <q-card-actions align="right">
            <q-btn class="text-secondary" flat label="Отмена" v-close-popup />
            <q-btn class="text-primary" label="Добавить" @click="addNewCase" v-close-popup />
         </q-card-actions>
      </q-card>
   </q-dialog>
   <q-btn label="Добавить новое дело" color="positive" @click="openPrompt" />
</template>

<script>
import { addCase } from 'src/store'
import { defineComponent, ref } from 'vue'
export default defineComponent({
   name: 'AddNewCase',
   setup() {
      let prompt = ref(false)
      let item0 = { title: '', days: 7 }
      let newItem = ref({})

      function openPrompt(){
         prompt.value = true
         newItem.value = {...item0}
      }

      function addNewCase(){
         addCase(newItem.value)
         prompt.value = false
      }

      return {
         prompt, newItem,
         openPrompt, addNewCase
      }
   }
})
</script>