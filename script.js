function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("footer").style.marginLeft = "250px";
    document.getElementById("footer").style.width = "1230px";
    document.getElementById("map").style.width = "90%";
    document.getElementById("add").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.getElementById("footer").style.marginLeft = "0";
    document.getElementById("footer").style.width = "1480px";
    document.getElementById("map").style.width = "55%";
    document.getElementById("add").style.width = "45%";
  }
  function openNav4() {
    document.getElementById("mySidenav4").style.width = "250px";
  }
  function closeNav4() {
    document.getElementById("mySidenav4").style.width = "0";
  }
  const search = () => {
      const search_box = document.getElementById('search-item').value.toUpperCase();
      const store_items = document.getElementById('contents');
      const product = document.querySelectorAll('.images');
      const product_name = store_items.getElementsByTagName('h3');
  
      for(let i = 0; i < product_name.length; i++){
  
          let match = product[i].getElementsByTagName('h3')[0];
          
          if(match){
              let text_value = match.textContent || match.innerHTML;
              
              if(text_value.toUpperCase().indexOf(search_box) > -1){
                  product[i].style.display = "";
              }else{
                  product[i].style.display = "none";
              }
          }
      }
  }
  const search1 = () => {
    const search_box1 = document.getElementById('search-item').value.toUpperCase();
    const store_items1 = document.getElementById('contents');
    const product1 = document.querySelectorAll('.images2');
    const product_name1 = store_items1.getElementsByTagName('h3');

    for(let i = 0; i < product_name1.length; i++){

        let match = product1[i].getElementsByTagName('h3')[0];
        
        if(match){
            let text_value = match.textContent || match.innerHTML;
            
            if(text_value.toUpperCase().indexOf(search_box1) > -1){
                product1[i].style.display = "";
            }else{
                product1[i].style.display = "none";
            }
        }
    }
}
  /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  } 

  function openNav1() {
    document.getElementById("mySidepanel").style.width = "250px";
  }
  
  function closeNav1() {
    document.getElementById("mySidepanel").style.width = "0";
  }

  var mode = document.getElementById("road");
  mode.onclick = function(){
    var q = document.getElementById("stylesd");
    if(q.getAttribute("href")=="style.css"){
      q.href = "Enlarge.css";
    }
    else{
      q.href ="style.css";
    }
  }
  var pode = document.getElementById("road1");
  pode.onclick = function(){
    var r = document.getElementById("stylesd");
    if(r.getAttribute("href")=="style.css"){
      r.href = "line.css";
    }
    else{
      r.href ="style.css";
    }
  }
  var vode = document.getElementById("road2");
  vode.onclick = function(){
    var v = document.getElementById("stylesd");
    if(v.getAttribute("href")=="style.css"){
      v.href = "black.css";
    }
    else{
      v.href ="style.css";
    }
  }
  function openNav3() {
    document.getElementById("myNav").style.height = "100%";
  }
  
  function closeNav3() {
    document.getElementById("myNav").style.height = "0%";
  }
  window.addEventListener('load', () => {
    const form = document.querySelector("#task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#tasks");
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const tasks = input.value;
  
      const task_el = document.createElement('div');
      task_el.classList.add('task');
  
      const task_content_el = document.createElement('div');
      task_content_el.classList.add('content');
  
      task_el.appendChild(task_content_el);
  
      const task_input_el = document.createElement('input');
      task_input_el.classList.add('text');
      task_input_el.type = 'text';
      task_input_el.value = tasks;
      task_input_el.setAttribute('readonly', 'readonly');
  
      task_content_el.appendChild(task_input_el);
  
      const task_actions_el = document.createElement('div');
      task_actions_el.classList.add('actions');
      
      const task_edit_el = document.createElement('button');
      task_edit_el.classList.add('edit');
      task_edit_el.innerText = 'Edit';
  
      const task_delete_el = document.createElement('button');
      task_delete_el.classList.add('delete');
      task_delete_el.innerText = 'Delete';
  
      task_actions_el.appendChild(task_edit_el);
      task_actions_el.appendChild(task_delete_el);
  
      task_el.appendChild(task_actions_el);
  
      list_el.appendChild(task_el);
  
      input.value = '';
  
      task_edit_el.addEventListener('click', (e) => {
        if (task_edit_el.innerText.toLowerCase() == "edit") {
          task_edit_el.innerText = "Save";
          task_input_el.removeAttribute("readonly");
          task_input_el.focus();
        } else {
          task_edit_el.innerText = "Edit";
          task_input_el.setAttribute("readonly", "readonly");
        }
      });
  
      task_delete_el.addEventListener('click', (e) => {
        list_el.removeChild(task_el);
      });
    });
  });
  var myVar;

  function myFunction() {
    myVar = setTimeout(showPage, 3000);
  }
  
  function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
  }
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 3000); 
}
function mOver(obj) {
  obj.style.borderRadius="0";
  obj.style.transition = "0.5s";
}

function mOut(obj) {
  obj.style.borderRadius="65px";
  obj.style.transition = "0.5s";
}