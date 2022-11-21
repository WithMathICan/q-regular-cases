<template>
   <div class="">
      <div class="q-mb-sm">Выбрать дату</div>

      <q-btn icon="event" color="primary" :label="formatDate(item.done_at)">
         <q-popup-proxy @before-show="updateProxy" cover transition-show="scale" transition-hide="scale">
            <q-date v-model="proxyDate" mask="YYYY-MM-DD">
               <div class="row items-center justify-end q-gutter-sm">
                  <q-btn label="Отмена" color="primary" flat v-close-popup />
                  <q-btn label="OK" color="primary" flat @click="save" v-close-popup />
               </div>
            </q-date>
         </q-popup-proxy>
      </q-btn>
   </div>
</template>

<script>
import { Item } from 'src/store/items';
import { defineComponent, ref } from 'vue';

export default defineComponent({
   props: ['item'],
   setup(props) {
      function formatDate(date){
         return new Date(date).toISOString().substring(0,10)
      }
      const proxyDate = ref(formatDate(props.item.done_at))

      return {
         proxyDate,
         formatDate,
         updateProxy() {
            proxyDate.value = formatDate(props.item.done_at)
         },
         save() {
            props.item.done_at = new Date(proxyDate.value).getTime()
         }
      }
   }
})
</script>