/*
async function generateEmail(){
    const response = await fetch("https://flynn.boolean.careers/exercises/api/random/mail");
    const data = await response.json();
    const email = data.response;
    return email;
    
}


async function generateEmails(emailNumbers, listId){
    const ul = document.getElementById(listId)
    for (let index = 0; index < emailNumbers; index++) {
        const li = document.createElement("li");
        const email = await generateEmail();
        li.textContent = email;
        ul.appendChild(li);
    }

}
generateEmails(10, "email-list")*/

function generateRandomEmail(){
    return axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
    .then(response => response.json())
    .then(data => {
        const email = data.response;
        console.log(email);
        return email;
        
    })
}
async function generateEmails(emailNumbers, listId){
    const ul = document.getElementById(listId)
    for (let index = 0; index < emailNumbers; index++) {
        const li = document.createElement("li");
        const email = await generateRandomEmail();
        li.textContent = email;
        ul.appendChild(li);
    }

}
generateEmails(10, "email-list")