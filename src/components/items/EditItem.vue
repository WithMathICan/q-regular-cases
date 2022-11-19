<template>
   <q-dialog v-model="prompt" persistent>
      <q-card style="min-width: 350px">
         <q-card-section>
            <div class="text-h6">Изменить</div>
         </q-card-section>

         <q-card-section class="q-pt-none" >
            <CategoryForm v-if="itemsType === CATEGORY_KEY" :item="item" />
            <RegularItemsForm v-if="itemsType === 'regular'" :item="item" />
            <MainDateItemsForm v-if="itemsType === 'main-date'" :item="item" />
            <ToDoItemsForm v-if="itemsType === 'to-do'" :item="item" />
            <RepeatedItemsForm v-if="itemsType === 'repeated'" :item="item" />
         </q-card-section>

         <q-card-actions align="right">
            <q-btn class="text-primary" flat label="Отмена" @click="undoChanges" v-close-popup />
            <q-btn  color="positive" label="Изменить" @click="save" v-close-popup />
         </q-card-actions>
      </q-card>
   </q-dialog>
   <q-btn class="q-ma-xs" @click="changeItem" round color="green" icon="edit" />
</template>

<script>
import {save, itemsType, CATEGORY_KEY} from 'src/store'
import { defineComponent, ref, watch } from 'vue'
import MainDateItemsForm from '../edit-forms/MainDateItemsForm.vue';
import RegularItemsForm from '../edit-forms/RegularItemsForm.vue'
import RepeatedItemsForm from '../edit-forms/RepeatedItemsForm.vue';
import ToDoItemsForm from '../edit-forms/ToDoItemsForm.vue';
import CategoryForm from '../edit-forms/CategoryForm.vue';
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
         prompt, itemsType, CATEGORY_KEY,
         changeItem, undoChanges, save
      }
   },
   components: { RegularItemsForm, MainDateItemsForm, ToDoItemsForm, RepeatedItemsForm, CategoryForm }
})
</script>