import { urlChecker } from './urlChecker'
function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('urlInput').value
    if(urlChecker(formText)) {
        console.log('true')

        console.log("::: Form Submitted :::")
        fetch('http://localhost:8000/test')
        .then(res => res.json())
        .then((res)=> {
            // document.getElementById('results').textContent = res
            console.log(res)
        })
    }else {
        alert('sorry there\'s somthing went wrong')
    }
    

    
}

export { handleSubmit }
