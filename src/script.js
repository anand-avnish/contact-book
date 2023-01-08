
const URL = "https://jsonplaceholder.typicode.com/users";
const main = document.getElementById("main");
const count = document.querySelector(".contacts");

main.innerHTML = "<p>Loading...</p>";

fetch(URL)
    .then((response) => {
        if(response.ok)
            return response.json()
        throw new Error('Unable to fetch data');
    })
    .then((user) => {
        count.innerHTML= user.length+ " contacts"
        main.innerHTML = getContacts(user)
    })
    .catch((error)=> main.innerHTML = error.message)


const getContacts = (user) => {
    console.log(user);
    const contacts = user
        .map((user) => 
            `<div class=\"p-2 mx-2 my-2 flex flex-col w-1/5 min-w-[220px] border border-orange-600 rounded-md shadow-md shadow-orange-400\">
                <span class=\"font-semibold text-xl\">${user.name} (${user.username})</span>
                <span class=\"mt-1 flex items-center\">
                    <a href="tel:${user.phone}" class=\"flex items-center\">
                        <span class="material-symbols-outlined text-orange-600 mr-1">
                            call
                        </span>
                        ${user.phone}
                    </a>
                </span>
                <span class=\"mt-1 flex items-center truncate\">
                    <a href="mailto:${user.email}" class=\"flex items-center\">
                        <span class="material-symbols-outlined text-orange-600 mr-1">
                            mail
                        </span>
                        ${user.email}
                    </a>
                </span>
                <span class=\"mt-1 flex items-center\">
                    <span class="material-symbols-outlined text-orange-600 mr-1">
                        travel_explore
                    </span>
                    <a href="${user.website}">${user.website}</a>
                </span>
                <span class=\"mt-1 flex items-center\">
                    <span class="material-symbols-outlined text-orange-600 mr-1">
                        home_pin
                    </span>
                    ${user.address.suite+", "+user.address.street+", "+user.address.city+", "+user.address.zipcode}
                </span>
                <span class=\"mt-1 flex items-center\">
                    <span class="material-symbols-outlined text-orange-600 mr-1">
                        domain
                    </span> 
                    ${user.company.name}
                </span>
            </div>`
        )
        .join("\n");

    return `<div class=\"flex flex-wrap justify-around\">${contacts}</div>`;
};