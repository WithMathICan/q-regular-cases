import { ref, reactive } from 'vue'


export const pageTitle = ref("")
export const itemsKey = ref('')
export const isEditMode = ref(false)
export const categories = ref([])
export const isAppInit = ref(false)
export const itemsToShow = {
   cases: { title: 'Дела', usingDays: true },
   foodfirst: { title: 'Первые блюда', usingDays: false },
   foodsecond: { title: 'Вторые блюда', usingDays: false },
   cakes: { title: 'Десерты', usingDays: false },
}

export const store = reactive({})

export function initApp(){
   let data = readData('categories')
   console.log(data);
   store['categories'] = data
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

export const categoryTypes = [
   {id: 'regular', title: 'Регулярные дела'},
   {id: 'repeated', title: 'Повторяемые дела'},
   {id: 'to-do', title: 'Текущие одноразовые дела'},
   {id: 'main-date', title: 'Знаменательные даты'}
]

function saveData(dataKey){
   localStorage.setItem(dataKey, JSON.stringify(store[dataKey]))
}

export function init(){
   let dataKey = itemsKey.value
   let data = readData(dataKey)
   store[dataKey] = data
}

export function create(item){
   let dataKey = itemsKey.value
   store[dataKey] = [item, ...store[dataKey]]
   saveData(dataKey)
}

export function save(){
   let dataKey = itemsKey.value
   saveData(dataKey)
}

export function remove(item){
   let dataKey = itemsKey.value
   store[dataKey] = store[dataKey].filter(el => el !== item)
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



