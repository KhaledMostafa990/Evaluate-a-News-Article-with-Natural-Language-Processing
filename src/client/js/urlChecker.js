function urlChecker(inputText) {
    console.log("::: Running checkForURL :::", inputText);
    let validUrl = /^(ftp|http|https):\/\/[^ "]+$/.test(inputText);

    return validUrl
}

export { urlChecker }
