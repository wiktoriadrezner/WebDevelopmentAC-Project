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
const Navbar = require("./components/navbar.vue"); /* Navigation Bar */
const Footer = require("./components/footer.vue"); /* Footer */
const Homepage = require("./components/homepage.vue"); /* Homepage */

/* Import the stylesheet */
require("./public/main.css");

/* Export a Vue.js component */
module.exports = {
    name: "JkpgCity",
    components: {
        Navbar,
        Homepage,
        Footer,
    },
};
</script>
