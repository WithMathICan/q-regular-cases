<template>
    <q-dialog v-model="confirm" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="delete" color="negative" text-color="white" />
        </q-card-section>
        <q-card-section class="row items-center">
          <span class="q-ml-sm">Удалить {{item.title}}?</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Отмена" color="primary" v-close-popup />
          <q-btn label="Удалить" color="negative" @click="removeItem" />
        </q-card-actions>
      </q-card>
    </q-dialog>
   <q-btn class="q-ma-xs" @click="openConfirm" round color="negative" icon="delete" />
</template>

<script>
import { defineComponent, ref } from 'vue';
import { editItem, removeCase } from "../store"

export default defineComponent({
   props: ['item'],
   setup(props) {
      let confirm = ref(false)
      
      function openConfirm(){
         confirm.value = true
      }

      function removeItem(){
         removeCase(props.item)
         confirm.value = false
      }

      return {
         confirm, editItem,
         openConfirm, removeItem,
      }
   }
})
</script>