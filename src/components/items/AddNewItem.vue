<template>
   <q-dialog v-model="prompt" persistent>
      <q-card style="min-width: 350px">
         <q-card-section>
            <div class="text-h6">Добавить</div>
         </q-card-section>

         <q-card-section class="q-pt-none">
            <RegularItemsForm v-if="itemsType === 'regular'" :item="newItem" />
            <MainDateItemsForm v-if="itemsType === 'main-date'" :item="newItem" />
            <ToDoItemsForm v-if="itemsType === 'to-do'" :item="newItem" />
            <RepeatedItemsForm v-if="itemsType === 'repeated'" :item="newItem" />
         </q-card-section>

         <q-card-actions align="right">
            <q-btn class="text-primary" flat label="Отмена" v-close-popup />
            <q-btn color="primary" label="Добавить" @click="addNewItem" v-close-popup />
         </q-card-actions>
      </q-card>
   </q-dialog>
   <q-btn flat round dense icon="add" @click="openPrompt" />
</template>

<script>
import { itemsType, create } from 'src/store'
import { defineComponent, ref } from 'vue'
import MainDateItemsForm from '../edit-forms/MainDateItemsForm.vue';
import RegularItemsForm from '../edit-forms/RegularItemsForm.vue'
import RepeatedItemsForm from '../edit-forms/RepeatedItemsForm.vue';
import ToDoItemsForm from '../edit-forms/ToDoItemsForm.vue';
export default defineComponent({
   setup() {
      let prompt = ref(false);
      let item0 = { title: "", description: "", days: 0, done_at: 0, use_year: false };
      let newItem = ref({...item0});
      function openPrompt() {
         prompt.value = true;
         newItem.value = { ...item0 };
      }
      function addNewItem() {
         create(newItem.value);
         prompt.value = false;
      }
      return { prompt, newItem, itemsType, openPrompt, addNewItem };
   },
   components: { RegularItemsForm, MainDateItemsForm, ToDoItemsForm, RepeatedItemsForm }
})
</script>