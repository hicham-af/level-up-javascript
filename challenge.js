document.addEventListener("DOMContentLoaded", function(){
  addWavyUnderline(findAllUnorderedListElements());
});

function addWavyUnderline(elements) {
  for(let i = 0; i < elements.length; i++){
    elements[i].style.textDecoration="wavy underline"
  }
}

document.addEventListener('DOMContentLoaded',displayProjects)

function displayProjects() {
  let div =  document.getElementById("#projects");
  div.innerHTML = prepareProjects("hi Im hicham ")
  return div
}

function findAllUnorderedListElements() {
   const nodeItems = document.querySelectorAll(".social-media-links");
  return  nodeItems
}
function prepareProjects(firstProject, secondProject, thirdProject) {
  let results = ""
  let list = [firstProject,secondProject,thirdProject]
  list.forEach((value,index) =>{
    if(value.length > 20){
      results += "<p>"+value+"</p></br>"
    } else{
      results += "<span>"+value+"</span>"+"<br>"
      
    }
  })
  return results;
}

const _findAllUnorderedListElements = findAllUnorderedListElements;
export { _findAllUnorderedListElements as findAllUnorderedListElements };
const _prepareProjects = prepareProjects;
export { _prepareProjects as prepareProjects };









