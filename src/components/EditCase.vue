<template>
   <q-dialog v-model="prompt" persistent>
      <q-card style="min-width: 300px">
         <q-card-section>
            <div class="text-h6">Изменить</div>
         </q-card-section>

         <q-card-section class="q-pt-none">
            <q-input label="Название" v-model="editItem.title" autofocus @keyup.enter="saveCases" />
            <q-input label="Регулярность (количество дней)" v-model.number="editItem.days" @keyup.enter="saveCases" />
         </q-card-section>

         <q-card-actions align="right">
            <q-btn class="text-secondary" @click="undoChanges" flat label="Отмена" v-close-popup />
            <q-btn class="text-primary" @click="saveCases" label="Изменить" v-close-popup />
         </q-card-actions>
      </q-card>
   </q-dialog>
   <q-btn class="q-ma-xs" @click="changeItem" round color="green" icon="edit" />
</template>

<script>
import { defineComponent, ref } from 'vue';
import { editItem, saveCases } from "../store"

export default defineComponent({
   props: ['item'],
   setup(props) {
      let prompt = ref(false)
      let tempItem = {...props.item}
      

      function changeItem(){
         tempItem = {...props.item}
         editItem.value = props.item
         prompt.value = true
      }

      function undoChanges(){
         editItem.value.title = tempItem.title
         editItem.value.days = tempItem.days
      }

      return {
         prompt, editItem, 
         changeItem, saveCases, undoChanges
      }
   }
})
</script>