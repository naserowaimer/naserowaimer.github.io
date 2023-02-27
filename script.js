let data = {
    expressions: [
        
    ],
}
async function working(){
    const response = await fetch("https://opensheet.elk.sh/1ubqWJzUzfBdwrCENswCGvfH6mhaPYfh_mCNAeZcUb_E/page");
    const resdata = await response.json();
    data.expressions=resdata;
    let columns = Object.keys(data.expressions[0]);   // Define an array of data.expressions objects keys for table columns


    shuffleArray(data.expressions);

    // Create the table
    let container = document.querySelector(".container");
    let table = document.createElement("table");
    table.classList = "table table-striped table-bordered";
    // create table header elemetns
    let thead = document.createElement("thead");
    let tr = document.createElement("tr");

    // make table columns
    columns.map(key => {
        let th = document.createElement("th");
        th.setAttribute("scope", "col");
        th.innerHTML = key;
        tr.appendChild(th)
    });
    thead.appendChild(tr);
    table.appendChild(thead);
    let tbody = document.createElement("tbody");    //create table body
    table.appendChild(tbody);   //append table body to its table

    // add data to table
    data.expressions.map(item=>{
        let tr = document.createElement("tr");  // tr data rows

        let values = Object.values(item);   // an array for each row values

        values.map(value=> {
            let td = document.createElement("td"); // make cells
            td.innerHTML = value;   //assign values to cells
            tr.appendChild(td);     //append cells into rows
        });
        tbody.appendChild(tr);      //append data rows into table body
        
    })

    container.appendChild(table);   //append table into page container

     const fase =  document.querySelectorAll(".container > table > tbody > tr");
     fase.forEach(el => el.addEventListener('click', event => {
            event.target.closest("tr").querySelectorAll("td")[1].classList.toggle("fontsizeIn")
     }))
}
document.addEventListener("DOMContentLoaded", working())

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}