const projects = document.getElementById("projects");
const projectDialog = document.getElementById("project_dialog");
const closeDialog =document.getElementById("close_dialog")


projects.addEventListener("click", ()=>{
    projectDialog.showModal();
});

closeDialog.addEventListener("click", ()=>{
    projectDialog.close();
})