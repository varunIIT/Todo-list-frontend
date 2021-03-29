
let addbtn=$('.addbtn')
let rstbtn=$('.rstbtn')
let srtbtn=$('.srtbtn')
let clnbtn=$('.clnbtn')
let tasklist=$('.tasklist')
let inp=$('.inp')

//////////////////////////////////////////////////////////////////////////////
let plusevent=function (){ //addtask function,name-plusevent
  let x=$('<li>',{
    'class':'list-group-item',      // creating new element and storing it in x
    text:inp.val()})

    tasklist.append(x);
    inp.val('')
    toggledisabled()

    x.click(()=>{
      x.toggleClass('clicked')// toggle class for enabling -disabling-..........

    })}

/////////////////////////////////////////////////////////////////////////////
addbtn.click(plusevent) //add task by add click
/////////////////////////////////////////////////////////////////////////////
inp.keypress((event)=>{ //add task by pressing enter
      if(event.which==13){
        plusevent()
      }
    })
/////////////////////////////////////////////////////////////////////////////
rstbtn.click(()=>{
      inp.val('')   // reseting input
      toggledisabled() //disabling add and reset when input box is empty

    })
/////////////////////////////////////////////////////////////////////////////
clnbtn.click(()=>{
  $('.clicked').remove()  // removing 'clicked' class elements
  toggledisabled()
})
/////////////////////////////////////////////////////////////////////////////
srtbtn.click(()=>{
  $('.tasklist').append($('.clicked'))
})
/////////////////////////////////////////////////////////////////////////////
function toggledisabled(){
  addbtn.prop('disabled',inp.val()=='')  //bul=bool
  rstbtn.prop('disabled',inp.val()=='')
  srtbtn.prop('disabled',tasklist.children().length==0)
  clnbtn.prop('disabled',tasklist.children().length==0)



}
/////////////////////////////////////////////////////////////////////////////
inp.on('input',()=>{
  toggledisabled()  //on changeing input box by keyboard
})


// function toggledisabled(bul){
//   addbtn.prop('disabled',bul)  //bul=bool
//   rstbtn.prop('disabled',bul)
//
// }
// //////////////////////////////////////////////////////////////////////////
// inp.on('input',()=>{
//   toggledisabled(inp.val()=='')  //on changeing input box by keyboard
// })
