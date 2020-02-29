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

document.querySelector('body *').addEventListener('mouseup', () => {
    const selection = window.getSelection()
    if (!selection || !selection.focusNode || !selection.focusNode.data) {
        return
    }

    const lower = Math.min(selection.anchorOffset, selection.focusOffset)
    const higher = Math.max(selection.anchorOffset, selection.focusOffset)

    const selectedText = selection.focusNode.data.slice(
        lower, higher
    )
    if (selectedText) {
        spongebob(selectedText)
    }
})
