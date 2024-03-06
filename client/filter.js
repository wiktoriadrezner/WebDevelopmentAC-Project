function filterByCategory(category) {
    const stores = document.querySelectorAll(".store");
    stores.forEach((store) => {
        // Access the category from the dataset
        const storeCategory = store.dataset.category.trim();
        if (category === "" || storeCategory === category) {
            // Show the store if it matches the category or if all is selected
            store.style.display = "block";
        } else {
            // Hide the store if it doesn't match the category
            store.style.display = "none";
        }
    });
}

function filterByDistrict(district) {
    const stores = document.querySelectorAll(".store");
    stores.forEach((store) => {
        const storeDistrict = store.dataset.district.trim();
        if (district === "" || storeDistrict === district) {
            // Show the store if it matches the district or if all is selected
            store.style.display = "block";
        } else {
            // Hide the store if it doesn't match the district
            store.style.display = "none";
        }
    });
}
