function dlt(){
  console.log(event.target.parentNode.parentNode);
  var card =event.target.parentNode.parentNode
  card.remove()
}
function edt(){
    var card =event.target.parentNode.parentNode
    var title = card.childNodes[3].childNodes[1].innerHTML
    var description = card.childNodes[3].childNodes[3].innerHTML
    console.log(title, description);
    document.getElementById("title").value = title
    document.getElementById("description").value =description
   card.remove();
}

function post(){
    var title = document.getElementById("title").value
    var description = document.getElementById("description").value
    console.log(title,description);
    var post = document.getElementById("post")
 post.innerHTML += `
 <div class="card m-3">
            <div class="card-header">@Blog</div>
            <div class="card-body">
              <h5 class="card-title">${title}</h5>
              <p class="card-text">${description}</p>
            </div>
            <div class="ms-auto m-2">
              <button onclick="edt()" class="btn btn-success">Edit</button>
              <button onclick="dlt()" class="btn btn-danger">Delete</button>
            </div>
          </div>
 
 
 `
 document.getElementById("title").value=""
 document.getElementById("description").value=""
}