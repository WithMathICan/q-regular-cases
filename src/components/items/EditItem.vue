<template>
   <q-dialog v-model="prompt" persistent>
      <q-card style="min-width: 350px">
         <q-card-section>
            <div class="text-h6">Изменить</div>
         </q-card-section>

         <q-card-section class="q-pt-none" >
            <q-input label="Название" v-model="item.title" autofocus />
            <q-input label="Описание" v-model="item.description" />
            <q-input  v-if="usingDays" label="Регулярность (количество дней)" v-model.number="item.days" />
         </q-card-section>

         <q-card-actions align="right">
            <q-btn class="text-primary" flat label="Отмена" @click="undoChanges" v-close-popup />
            <q-btn  color="positive" label="Изменить" @click="saveItems" v-close-popup />
         </q-card-actions>
      </q-card>
   </q-dialog>
   <q-btn class="q-ma-xs" @click="changeItem" round color="green" icon="edit" />
</template>

<script>
import { usingDays, saveItems } from 'src/store/items'
import { defineComponent, ref, watch } from 'vue'
export default defineComponent({
   props: ['item', 'closeExpanded'],
   setup(props){
      let prompt = ref(false)
      let tempItem = {...props.item}
      watch(() => props.item, () => prompt.value = false)
      watch(() => prompt.value, (val) => props.closeExpanded(val))
      

      function changeItem(){
         tempItem = {...props.item}
         prompt.value = true
      }

      function undoChanges(){
         props.item.title = tempItem.title
         props.item.days = tempItem.days
         props.item.description = tempItem.description
      }

      return {
         prompt, usingDays, 
         changeItem, undoChanges, saveItems
      }
   }
})
</script>