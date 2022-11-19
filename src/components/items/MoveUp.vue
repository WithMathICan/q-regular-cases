<template>
   <q-btn class="q-ma-xs" @click="moveUpCategory" round color="grey-6" icon="arrow_upward" />
</template>

<script>
import { defineComponent } from 'vue';
import { allItems, CATEGORY_KEY, save } from 'src/store';

export default defineComponent({
   props: ['index'],
   setup(props){
      function moveUpCategory(){
         let categories = allItems[CATEGORY_KEY]
         if (props.index > 0 && props.index < categories.length){
            console.log(props.index);
            [categories[props.index-1], categories[props.index]] = [categories[props.index], categories[props.index-1]]
            save()
         }
      }

      return {moveUpCategory}
   }
})
</script>