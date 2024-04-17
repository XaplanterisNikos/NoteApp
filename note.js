let noteId = 0
const daysGR = ['Κυριακή','Δευτέρα','Τρίτη','Τετάρτη','Πέμπτη','Παρασκευή','Σάββατο']
const monthsGR = ['Ιανουαρίου','Φεβρουαρίου','Μαρτίου','Απριλίου','Μαΐου','Ιουνίου','Ιουλίου','Αυγούστου','Σεπτεμβρίου','Οκτωβρίου','Νοεμβρίου','Δεκεμβρίου']

window.addEventListener('DOMContentLoaded',function() {
    this.setInterval(printGRDate,1000)
    this.document.querySelector('#addNoteBtn').addEventListener('click',function(){
        insertNote(document.querySelector('#inputNote').value.trim())
        reset()
    })

this.document.querySelector('#inputNote').addEventListener('keyup',function(e){
    if(e.key === 'Enter'){
        insertNote(this.value.trim())
        reset()
    }
})
})

function printGRDate(){
    const currentDate = new Date()
    const day = currentDate.getDay()
    const date = currentDate.getDate()
    const month = currentDate.getMonth()
    const year = currentDate.getFullYear()
    const hours = currentDate.getHours()
    const minutes = currentDate.getMinutes()
    const seconds = currentDate.getSeconds()

    let dayStr = daysGR[day]
    let monthsStr = monthsGR[month]
    let dateStr = `${dayStr} ${date} ${monthsStr} ${year}`
    let timeStr =  `${(hours < 10) ? '0':''}${hours}:${(minutes < 10) ? '0':''}${minutes}:${(seconds < 10) ? '0':''}${seconds}`

    document.querySelector('#dateTxt').innerHTML = dateStr + "<br>" + timeStr

}