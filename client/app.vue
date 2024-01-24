<!-- the HTML structure of the component -->
<template>
    <div id="app">
        <div>
            <Navbar />
        </div>
        <div>
            <Homepage />
        </div>
        <div>
            <Footer />
        </div>
    </div>
</template>

<script>
/* Import the components */
import Navbar from "./components/navbar.vue"; // Navigation Bar
import Footer from "./components/footer.vue"; // Footer
import Homepage from "./components/homepage.vue"; // Homepage

/* Import the stylesheet */
import "public/main.css";

/* Export a Vue.js component */
export default {
    name: "JkpgCity",
    components: {
        Navbar,
        Homepage,
        Footer,
    },
};
</script>
