const spongebob = (string) => {
    let count = 0;
    let newString = '';
    const strings = string.split(' ')
    for (let word of strings) {
        for (let char of word) {
            newString += !(count++ % 2) ? char : char.toUpperCase();
        }
        newString += ' ';
    }
    console.log(newString)
    return newString;
}

document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('spongebob-input')
    const button = document.getElementById('spongebob-submit')
    button.addEventListener('click', (event) => {
        event.preventDefault()
        const returnString = spongebob(input.value)
        document.querySelector('#result-field').textContent = returnString
    })
});
