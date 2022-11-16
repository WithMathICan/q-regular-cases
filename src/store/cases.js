export const msInDay = 1000 * 60 * 60 * 24
export function formatDate(num) {
   let date = new Date(num)
   return new Intl.DateTimeFormat("ru", { dateStyle: 'long' }).format(date)
}

export class Cases {
   constructor({ title, days = 1, created_at = Date.now(), done_at = Date.now(), done_times = 0 }) {
      this.id = Date.now().toString()
      this.title = title
      this.creted_at = +created_at
      this.days = parseInt(days)
      this.done_at = +done_at
      this.done_times = +done_times
   }

   get DoneAt() {
      return formatDate(this.done_at)
   }

   get ShouldDo() {
      return formatDate(this.done_at + msInDay * this.days)
   }

   get MsToShoudDo() {
      return this.done_at + this.days * msInDay - Date.now()
   }

   get HoursToShouldDo(){
      return Math.floor(this.MsToShoudDo / 3600000)
   }

   get ClassOfToShouldDo(){
      if (this.HoursToShouldDo > 0) return 'text-positive'
      else if (this.HoursToShouldDo > -24) return 'text-primary'
      return 'text-negative'
   }

   get TimeToShouldDo(){
      let hours = this.HoursToShouldDo
      if (hours == 0) return "Нужно сделать сейчас"
      let label = (hours > 0) ? 'Время до выполнения' : 'Просроченное время'
      if (hours < 0) hours = -hours
      if (hours <= 24) return `${label}: ${hours} ч.`
      else return `${label}: ${Math.floor(hours/24)} д. ${hours % 24} ч.`
   }

   static Compare(a,b){
      let res = Math.sign(a.MsToShoudDo - b.MsToShoudDo)
      return res
   }
}