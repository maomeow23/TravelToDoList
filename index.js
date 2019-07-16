var cardContainer = $(".card-container")
var button = $(".submit")

button.on("click", addToList);
function addToList(){
  var item= $(".item").val();
cardContainer.append(`
  <div class="pack-card">
  <p class="item-name">${item}</p>
<button class="delete-btn">Delete</button>
</div>
`)

$(".item").val("");
}
cardContainer.on("click",".delete-btn",deleteItem)
// var deletebtn =$(".delete-btn")
// deletebtn.on("click",deleteItem);
function deleteItem(event){
  // console.log("delete button pressed ")
  event.target.parentNode.remove();
}
//  var deletebtn = $(".delete-btn")
// deletebtn.on("click", deleteItem);
// funtion deleteItem(){
//
// }
