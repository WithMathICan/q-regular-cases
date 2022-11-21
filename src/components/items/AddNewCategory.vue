<template>
   <q-dialog v-model="prompt" persistent>
      <q-card style="min-width: 350px">
         <q-card-section>
            <div class="text-h6">Добавить категорию</div>
         </q-card-section>

         <q-card-section class="q-pt-none">
            <CategoryForm  :item="newItem"/>
            <q-input label="Алиас" v-model="newItem.alias" :rules="[ val => val.trim().length > 2 || 'Минимальная длинна 3 символа']"/>
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
import { allItems, create } from 'src/store'
import { categoryTypes, CATEGORY_KEY } from 'src/store/category'
import { defineComponent, ref } from 'vue'
import CategoryForm from '../edit-forms/CategoryForm.vue'
import { useQuasar } from 'quasar'
import slugify from 'slugify'
export default defineComponent({
   setup(){
      let prompt = ref(false)
      let category0 = { title: '', description: '', alias: '', type: categoryTypes[0].id, icon: 'school' }
      const $q = useQuasar()
      let newItem = ref({})
      
      function openPrompt(){
         prompt.value = true
         newItem.value = {...category0}
      }

      function addNewCategory(){
         newItem.value.alias = slugify(newItem.value.alias, {lower: true})
         if (newItem.value.alias.length < 3){
            $q.notify({message: `Минимальная длина алиаса - три символа, не учитывая пробелы`, color: 'negative', timeout: 5000,})
            return
         }
         for (let cat of allItems[CATEGORY_KEY]){
            if (cat.alias === newItem.value.alias){
               $q.notify({message: `Данный алиас уже используется для категории ${cat.title}`, color: 'negative', timeout: 5000,})
               return
            }
         }
         create(newItem.value)
         prompt.value = false
      }

      return {prompt, newItem, openPrompt, addNewCategory, slugify}
   },
   components: {CategoryForm}
})
</script>