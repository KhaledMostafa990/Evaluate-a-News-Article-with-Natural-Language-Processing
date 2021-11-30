import { urlChecker } from './urlChecker'

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
        // fetch('http://localhost:8000/test')
        // .then(res => res.json())
        // .then((res)=> {
        //     console.log(res)
        // })
    }else {
        alert('Invalid url, please try agein!')
    }
    
}
const postValidUrl = async (data = {}) => {
  // path to post data
  const response = await fetch('/api', {
    method: 'POST',
    credentials: 'same-origin',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })

  try {
    const serRes = await response.json();

    // console.log(serRes)

    return serRes; // Get data from the server
  } catch (error) {
    // catch error
    console.log('Something Went Wront', error);
  }
};

export { handleSubmit }
