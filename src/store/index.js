import { computed, ref } from 'vue'
import { sortedCategories } from './category'
import { allItems } from './items'


export const pageTitle = ref("")
export const itemsKey = ref('')
export const isEditMode = ref(false)
export const categories = ref([])
export const isAppInit = ref(false)
// export const itemsToShow = {
//    cases: { title: 'Дела', type: 'regular' },
//    foodfirst: { title: 'Первые блюда', type: 'repeated' },
//    foodsecond: { title: 'Вторые блюда', type: 'repeated' },
//    cakes: { title: 'Десерты', type: 'repeated' },
// }

export const itemsToShow = computed(() => {
   let items = {}
   for(let cat of sortedCategories.value){
      items[cat.alias] = cat
   }
   return items
})

export function initApp(){
   let data = readData('categories')
   console.log(data);
   allItems['categories'] = data
   isAppInit.value = true
}

export function readData(dataKey){
   let data = localStorage.getItem(dataKey)
   if (!data) data = []
   else{
      try{
         data = JSON.parse(data)
      } catch(e){
         data = []
      }
   }
   if (!Array.isArray(data)) data = []
   return data
}



function saveData(dataKey){
   localStorage.setItem(dataKey, JSON.stringify(allItems[dataKey]))
}

export function init(){
   let dataKey = itemsKey.value
   let data = readData(dataKey)
   allItems[dataKey] = data
}

export function create(item){
   let dataKey = itemsKey.value
   allItems[dataKey] = [item, ...allItems[dataKey]]
   saveData(dataKey)
}

export function save(){
   let dataKey = itemsKey.value
   saveData(dataKey)
}

export function remove(item){
   let dataKey = itemsKey.value
   allItems[dataKey] = allItems[dataKey].filter(el => el !== item)
   saveData(dataKey)
}



// export function initCases(){
//    let data = readData('cases')
//    cases.value = data.map(v => new Cases(v))
// }

// export function saveCases(){
//    localStorage.setItem('cases', JSON.stringify(cases.value))
// }

// export function addCase({title, days}){
//    cases.value = [...cases.value, new Cases({title, days})]
//    saveCases()
// }

// export function removeCase(item){
//    cases.value = cases.value.filter(el => el !== item)
//    saveCases()
// }



