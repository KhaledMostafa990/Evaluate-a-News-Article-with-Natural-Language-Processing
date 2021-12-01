const postValidUrl = async (data = {}) => {
  // path to post data
  const response = await fetch('http://localhost:8000/api', {
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
    console.log('Something Went Wrong', error);
  }
};

export {postValidUrl}