import { computed, reactive, ref } from 'vue'
import { Category, CATEGORY_KEY, categoryTypes } from './category'
import { MsToShoudDo } from './items'
export {CATEGORY_KEY, categoryTypes, typeLabel} from './category'



export const pageTitle = ref("")
export const itemsKey = ref('')
export const isEditMode = ref(false)


/**
 * Read all categories, creates menu items
 */
export function initApp() {
   let data = readData(CATEGORY_KEY)
   allItems[CATEGORY_KEY] = data
}

export function readData(dataKey) {
   let data = localStorage.getItem(dataKey)
   if (!data) data = []
   else {
      try {
         data = JSON.parse(data)
      } catch (e) {
         data = []
      }
   }
   if (!Array.isArray(data)) data = []
   return data
}

export let itemsCategory = computed(() =>{
   let cat = allItems[CATEGORY_KEY].find(el => el.alias ===  itemsKey.value)
   if (cat) return cat
   return null
})

export let itemsType = computed(() => {
   let cat = itemsCategory.value
   if (cat) return cat.type
   return 'categories' 
})

export const sortedItems = computed(() => {
   let items = allItems[itemsKey.value]
   if (!Array.isArray(items)) return []
   if (itemsType.value === 'regular') items = items.sort((a,b) => Math.sign(MsToShoudDo(a) - MsToShoudDo(b)))
   else if (itemsType.value === 'repeated') items.sort((a,b) => Math.sign(a.done_at - b.done_at))
   return items
})

//----------------------------------------------

// export const sortedCategories = computed(() => {
//    let categories = allItems[CATEGORY_KEY]
//    return categories.sort((a, b) => Math.sign(a.order - b.order))
// })

// export const itemsInMenu = computed(() => {
//    let list = sortedCategories.value.map(item => ({
//       title: item.title,
//       caption: item.type,
//       icon: 'school',
//       link: `/items/${item.alias}`
//    }))
//    list.push({
//       title: 'Категории',
//       caption: 'Добавляйте и изменяйте категории',
//       icon: 'edit',
//       link: '/categories',
//    })
//    return list
// })

/** @param {Category[]} categoryItems */
let createMenuItems = (categoryItems) => categoryItems.map(el => ({
   icon: el.icon,
   link: `/items/${el.alias}`,
   title: el.title,
   caption: categoryTypes.find(type => type.id === el.type).label ?? ''
}))

export const menuItems = computed(() => createMenuItems(allItems[CATEGORY_KEY]))


//--------------------------------------------------

function saveData(dataKey) {
   localStorage.setItem(dataKey, JSON.stringify(allItems[dataKey]))
}

export function init() {
   let dataKey = itemsKey.value
   let data = readData(dataKey)
   allItems[dataKey] = data
}

export function create(item) {
   let dataKey = itemsKey.value
   allItems[dataKey] = [item, ...allItems[dataKey]]
   saveData(dataKey)
}

export function save() {
   let dataKey = itemsKey.value
   saveData(dataKey)
}

export function remove(item) {
   let dataKey = itemsKey.value
   allItems[dataKey] = allItems[dataKey].filter(el => el !== item)
   saveData(dataKey)
}

//-------------------------------------

export const allItems = reactive({

})




