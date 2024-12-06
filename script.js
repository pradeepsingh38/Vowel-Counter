txtarea = document.querySelector("textarea")
checkBtn = document.querySelector("#check")
resetBtn = document.querySelector("#reset")

checkBtn.addEventListener("click",handleCheck)

function handleCheck(){
    const txt = txtarea.value.toLowerCase();
    const vowels = ['a','e','i','o','u']
    let count = 0;
    for (let i = 0; i < txt.length; i++) {
        const char = txt[i]
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        count++;
        }
    }

    document.getElementById('result').textContent = `Vowel Count: ${count}`;

}

resetBtn.addEventListener("click",handleReset)

function handleReset(){
    document.getElementById('txtar').value = '';
    document.getElementById('result').textContent = 'Vowel Count: 0';
}
