

export const msInDay = 1000 * 60 * 60 * 24
export function formatDate(num) {
   let date = new Date(num)
   try{
      return new Intl.DateTimeFormat("ru", { dateStyle: 'long' }).format(date)
   } catch(e){
      console.log(e);
      return 'Ошибка в дате'
   }
}
export function hoursToString(hours) {
   if (hours < 0) hours = -hours
   if (hours <= 24) return `${hours} ч.`
   else return `${Math.floor(hours / 24)} д. ${hours % 24} ч.`
}

export const DoneAt = item => formatDate(item.done_at)
export const MsToShoudDo = item => item.done_at + item.days * msInDay - Date.now()
export const HoursAgo = item => Math.floor((Date.now() - item.done_at) / 3600000)
export const HoursToShouldDo = item => Math.floor((item.done_at + item.days * msInDay - Date.now()) / 3600000)
export function ClassOfToShouldDo(item) {
   let hours = HoursToShouldDo(item)
   if (hours > 0) return 'text-positive'
   else if (hours > -24) return 'text-primary'
   return 'text-negative'
}
export function TextToShouldDo(item) {
   let hours = HoursToShouldDo(item)
   if (hours == 0) return "Нужно сделать сейчас"
   let label = (hours > 0) ? 'Время до выполнения' : 'Просроченное время'
   if (hours < 0) hours = -hours
   return `${label}: ${hoursToString(hours)}`
}

export class Item {
   constructor({ title, description = '', done_at = 0, days = 0, id=Date.now() }) {
      this.id = id.toString() + Math.random()
      this.title = title
      this.description = description
      this.done_at = +done_at
      this.days = +days
   }
}


