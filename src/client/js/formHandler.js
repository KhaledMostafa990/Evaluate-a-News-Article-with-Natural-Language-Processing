import { urlChecker } from './urlChecker'
import { postValidUrl } from './postValidUrl'

const updateUI = (res)=> {
    document.getElementById('agreement').textContent = `Agreement : ${res.data.agreement}`
    document.getElementById('confidence').textContent = `confidence : ${res.data.confidence}`
    document.getElementById('irony').textContent =  `irony : ${res.data.irony}`
    document.getElementById('model').textContent = `model : ${res.data.model}`
    document.getElementById('score').textContent = `score : ${res.data.score_tag}`
}

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('urlInput').value
    if(urlChecker(formText)) {
        console.log('true')

        console.log("::: Form Submitted :::")
        postValidUrl({validUrlInput: formText})
            .then((res)=>{
                console.log('server res ', res.data)
                console.log(res.data.agreement)
                updateUI(res)
            })

    }else {
        alert('Invalid url, please try agein!')
    }
    
}


export { handleSubmit }
