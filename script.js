const inputBox=document.getElementById("input-box");
const listConatiner=document.getElementById("list-container");

function addTask(){
    if(inputBox.value===''){
        alert("You must write something");
    }else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listConatiner.appendChild(li); //display the li
        let span=document.createElement("span");//cross icon for deletion
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    //after adding the text we should rempove the txt from th box
    inputBox.value=""; 
    saveData();// called   bcz to update the value

}
//click function, add and remove the task

listConatiner.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

//to store the list after refresh also

function saveData(){
    localStorage.setItem("data",listConatiner.innerHTML);

}
//display the saved data
function showTask(){
    listConatiner.innerHTML=localStorage.getItem("data");
}
showTask();