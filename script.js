const button = document.getElementById("btnSubmit");

function countAge(yearBirthday, monthBirthday, dateBirthday) {
    const date = new Date();
    const yearActual = date.getFullYear();
    const monthActual = date.getMonth() + 1;
    const dateActual = date.getDate();

    let age = yearActual - yearBirthday;

    if (monthBirthday > monthActual || monthBirthday === monthActual && dateActual < dateBirthday) {
        return `${ age - 1 }`;
    } else {
        return age;
    }
}

button.addEventListener("click", () => {
    const name = document.getElementById("username").value;
    const yearBirthday = document.getElementById("year").value;
    const monthBirthday = document.getElementById("month").value;
    const dateBirthday = document.getElementById("date").value;

    document.getElementById("results").textContent = "Halo, " + name + " kamu lahir pada " + dateBirthday + " " + monthBirthday + " " + yearBirthday + "." + " Usia kamu saat ini " + countAge(yearBirthday, monthBirthday, dateBirthday) + " tahun.";
})
