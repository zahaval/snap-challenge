

const destinations = [
    { name: "Paris", price: "$1500 - $2500", bestTime: "April, May, June, September, October, November", imageURL: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34" },
    { name: "Tokyo", price: "$1200 - $2000", bestTime: "March, April, May, October, November", imageURL: "https://images.unsplash.com/photo-1549693578-d683be217e58" },
    { name: "Bali", price: "$1000 - $1500", bestTime: "April, May, June, July, August, September, October", imageURL: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "New York City", price: "$1200 - $2500", bestTime: "April, May, June, September, October, November", imageURL: "https://images.unsplash.com/photo-1490644658840-3f2e3f8c5625?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Rome", price: "$1400 - $2200", bestTime: "April, May, June, September, October", imageURL: "https://images.unsplash.com/photo-1529260830199-42c24126f198" },
    { name: "Sydney", price: "$1500 - $2500", bestTime: "September, October, November, March, April, May", imageURL: "https://images.unsplash.com/photo-1599352525889-6af336596438?q=80&w=2147&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "London", price: "$1300 - $2300", bestTime: "March, April, May, September, October, November", imageURL: "https://plus.unsplash.com/premium_photo-1694475262463-c27a8b6bc9f4?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Dubai", price: "$1000 - $2000", bestTime: "November, December, January, February, March", imageURL: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c" },
    { name: "Santorini", price: "$1600 - $3000", bestTime: "April to June, September to October", imageURL: "https://images.unsplash.com/photo-1501700072703-15ee3d019f07?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Maui", price: "$1800 - $2800", bestTime: "April, May, September, October, November", imageURL: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" },
    { name: "Cape Town", price: "$1200 - $2200", bestTime: "September, October, November, March, April, May", imageURL: "https://images.unsplash.com/photo-1591178675678-1e76fbc255ab?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Banff", price: "$1000 - $2000", bestTime: "June, July, August, December, January, February, March", imageURL: "https://images.unsplash.com/photo-1515444744559-7be63e1600de" },
    { name: "Kyoto", price: "$1200 - $2000", bestTime: "March, April, May, October, November", imageURL: "https://plus.unsplash.com/premium_photo-1664302959152-c51a246c88be?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Queenstown", price: "$1400 - $2400", bestTime: "December, January, February, June, July, August", imageURL: "https://images.unsplash.com/photo-1500534623283-312aade485b7" },
    { name: "Amsterdam", price: "$1300 - $2100", bestTime: "April, May, September, October, November", imageURL: "https://plus.unsplash.com/premium_photo-1694475042907-e46227724136?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Barcelona", price: "$1100 - $1900", bestTime: "May, June, September, October", imageURL: "https://plus.unsplash.com/premium_photo-1697729758146-9aa25d423094?q=80&w=2136&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Iceland", price: "$1500 - $2500", bestTime: "June, July, August, December, January, February", imageURL: "https://images.unsplash.com/photo-1505232530843-7e94d7faac73" },
    { name: "Machu Picchu", price: "$1800 - $3000", bestTime: "April, May, June, July, August, September, October", imageURL: "https://images.unsplash.com/photo-1557802906-69fe888cad6c?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Great Barrier Reef", price: "$2000 - $3500", bestTime: "June, July, August, September, October", imageURL: "https://plus.unsplash.com/premium_photo-1661963118875-6d1363a48560?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z3JlYXQlMjBiYXJyaWVyJTIwcmVlZiUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D" },
    { name: "Serengeti", price: "$2500 - $4500", bestTime: "June, July, August, September", imageURL: "https://images.unsplash.com/photo-1580687774199-51c183723dd8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2VyZW5nZXRpJTIwaW1hZ2VzfGVufDB8fDB8fHww" },
    { name: "Venice", price: "$1400 - $2400", bestTime: "April, May, June, September, October", imageURL: "https://images.unsplash.com/photo-1535644140847-d53f4723dfa0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmVuaWNlJTIwaW1hZ2VzfGVufDB8fDB8fHww" },
    { name: "Maldives", price: "$3000 - $6000", bestTime: "November, December, January, February, March, April", imageURL: "https://images.unsplash.com/photo-1512100356356-de1b84283e18?q=80&w=2150&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Bora Bora", price: "$4000 - $7000", bestTime: "May, June, July, August, September, October", imageURL: "https://images.unsplash.com/photo-1532408840957-031d8034aeef?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Cinque Terre", price: "$1500 - $2500", bestTime: "May, June, July, August, September", imageURL: "https://plus.unsplash.com/premium_photo-1661964465993-4f7a39821fa6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Santiago", price: "$1000 - $1800", bestTime: "September, October, November, March, April, May", imageURL: "https://images.unsplash.com/photo-1640027079253-8053ccc27df9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2FudGlhZ28lMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D" },
    { name: "Kruger National Park", price: "$2000 - $4000", bestTime: "May, June, July, August, September", imageURL: "https://images.unsplash.com/photo-1645183979830-b7f96b591026?q=80&w=2036&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Zermatt", price: "$1800 - $3000", bestTime: "June, July, August, September, December, january, February, March, April", imageURL: "https://images.unsplash.com/photo-1501785888041-af3ef285b470" },
    { name: "Antarctica", price: "$5000 - $15000", bestTime: "November, December, January, February, March", imageURL: "https://plus.unsplash.com/premium_photo-1664303875699-8e95cd12601a?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Havana", price: "$800 - $1500", bestTime: "November, December, January, February, March, April", imageURL: "https://images.unsplash.com/photo-1500759285222-a95626b934cb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Cairo", price: "$1000 - $2000", bestTime: "October, November, December, January, February, March, April", imageURL: "https://plus.unsplash.com/premium_photo-1694475184975-0e29231a27ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2Fpcm8lMjAlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D" }
];

// Function to update the content of a card with new data
function editCardContent(card, newTitle, newImageURL, bestTime, price) {
    // Make the card visible
    card.style.display = "block";

    // Update the title of the card
    const cardHeader = card.querySelector("h2");
    cardHeader.textContent = newTitle;

    // Update the image of the card
    const cardImage = card.querySelector("img");
    cardImage.src = newImageURL;
    cardImage.alt = newTitle + " Poster";

    // Update the list item for best months to visit
    const bestMonths = card.querySelectorAll("li")[0];
    bestMonths.textContent = "Best Months To Visit: " + bestTime;

    // Update the list item for estimated price
    const estimatedPrice = card.querySelectorAll("li")[1];
    estimatedPrice.textContent = "Estimated Price: " + price;

    // Log the updated card information to the console
    console.log("Updated card:", newTitle, "- HTML: ", card);
}

function showCards() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");

    for (let i = 0; i < destinations.length; i++) {
        let destination = destinations[i];
        let imageURL = destination.imageURL;
        let bestTime = destination.bestTime;
        let price = destination.price;

        const nextCard = templateCard.cloneNode(true);
        nextCard.style.display = "block";
        editCardContent(nextCard, destination.name, imageURL, bestTime, price);
        cardContainer.appendChild(nextCard);
    }
}

document.addEventListener("DOMContentLoaded", showCards);

function sortByPrice() {
    destinations.sort((a, b) => parseFloat(a.price.split(" - ")[0].slice(1)) - parseFloat(b.price.split(" - ")[0].slice(1)));
}

function sortAndShowCards() {
    sortByPrice();
    showCards();
}
function filterDestinationsByMonths() {
    const selectedMonths = prompt("Enter the months you want to travel (e.g., January, February):")
        .split(", ")
        .map(month => month.toLowerCase()); // Convert user input to lowercase
    const filteredDestinations = destinations.filter(destination => {
        const destinationMonths = destination.bestTime.split(", ").map(month => month.toLowerCase()); // Convert destination months to lowercase
        return selectedMonths.some(month => destinationMonths.includes(month));
    });
    showFilteredDestinations(filteredDestinations);
}


function showFilteredDestinations(filteredDestinations) {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");

    filteredDestinations.forEach(destination => {
        const nextCard = templateCard.cloneNode(true);
        nextCard.style.display = "block";
        editCardContent(nextCard, destination.name, destination.imageURL, destination.bestTime, destination.price);
        cardContainer.appendChild(nextCard);
    });
}
