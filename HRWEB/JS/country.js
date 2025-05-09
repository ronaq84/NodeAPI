const country_Link = "https://improved-yodel-r4wq66jj4xqpc5x59-6006.app.github.dev/country";
fetch(country_Link).then(response=>{
    if(!response.ok)
        throw new Error("Failed to fetch data from given URL");
    return response.json();
}).then(data=>{
    const tbody = document.querySelector("#countrytable tbody");

    data.forEach(c=>{
        const row = document.createElement("tr");

        row.innerHTML=`
        <td>${c.country_id}</td>
        <td>${c.country_name}</td>
        <td>${c.region_id}</td>
        `;

        tbody.appendChild(row);
    });
}).catch(err=>{
    console.log(err.message);
});