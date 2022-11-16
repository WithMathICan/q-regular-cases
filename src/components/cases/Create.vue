<template>
   <q-page>
      <div class="q-ma-sm">
         <AddNewCase />
      </div>

      <q-list bordered separator>
         <q-item clickable v-ripple v-for="item in cases">
            <q-item-section>
               <q-item-label>{{ item.title }}</q-item-label>
               <q-item-label caption>Регулярность: {{ item.days }} дн.</q-item-label>
               <q-item-label caption>Выполнено {{ item.done_times }} раз</q-item-label>
               <q-item-label caption>Выполнено {{ item.DoneAt }}</q-item-label>
            </q-item-section>
            <q-item-section avatar>
               <div>
                  <EditCase :item="item" />
                  <RemoveCase :item="item" />
               </div>
            </q-item-section>
         </q-item>
      </q-list>
   </q-page>
</template>

<script>
import { cases} from 'src/store';
import { defineComponent } from 'vue'
import AddNewCase from "../AddNewCase.vue"
import EditCase from "../EditCase.vue"
import RemoveCase from "../RemoveCase.vue"

export default defineComponent({
   name: 'Create',
   components: { AddNewCase, EditCase, RemoveCase },
   setup() {
      return { cases }
   }
})
</script>
