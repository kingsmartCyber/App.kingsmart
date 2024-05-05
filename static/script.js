//opening sidebar
function showSidebar(){
  const sidebar = document.querySelector(".sidebar")
  sidebar.style.display= "inline-block"
  }
  
//Closing sidebar
function hideSidebar(){
  const sidebar = document.querySelector(".sidebar")
  sidebar.style.display= "none"
    
  }
function handleClick(ev) {
  let answer = confirm('Do you really want to download this file?')
  console.log(answer);
        }
        
 function clickme(pp) {
  alert(`Please make sure you save my contact first to avoid unnecessary WhatsApp Bans`)
 }     
 function subscription(subme) {
  alert("Make sure to Subscribe and Like our videos")
}
 function sorry(sor) {
  alert("Oups! we don't have a channel yet.")
  
 }
 function follow(acc) {
  alert('Please follow us')
 }