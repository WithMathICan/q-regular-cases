<template>
   <q-btn class="q-ma-xs" @click="moveUpCategory" round color="grey-6" icon="arrow_upward" />
</template>

<script>
import { defineComponent } from 'vue';
import { allItems, itemsKey, save } from 'src/store';

export default defineComponent({
   props: ['index'],
   setup(props){
      function moveUpCategory(){
         let items = allItems[itemsKey.value]
         if (props.index > 0 && props.index < items.length){
            [items[props.index-1], items[props.index]] = [items[props.index], items[props.index-1]]
            save()
         }
      }

      return {moveUpCategory}
   }
})
</script>