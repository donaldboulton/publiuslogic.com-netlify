const parent = document.createElement('div')
parent.innerHTML = 'Parent of the document'

let childPara = document.createElement('p')
childPara.innerHTML = 'Child ParaGraph'
parent.appendChild(childPara)
console.log(parent.outerHTML)

let childDiv = document.createElement('div')
childDiv.innerHTML = 'Child Div'
childPara.replaceWith(childDiv)
console.log(parent.outerHTML)
