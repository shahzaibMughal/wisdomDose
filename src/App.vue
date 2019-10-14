<template>
    <div id="app">
        <app-header
                :quote-of-the-day="quoteOfTheDay"
                :menu-items="menuItems"
        ></app-header>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                quoteOfTheDay: {
                    background: "https://picsum.photos/685/400",
                    quote: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem doloremque expedita facere illum, magnam numquam saepe! Debitis deserunt ullam unde!",
                    author: 'm. shahzaib',
                    authorUri: '#',
                },
                menuItems: [
                    {
                        title: "All Quotes",
                        link: "/all-quotes"
                    },
                    {
                        title: "Book Summaries",
                        link: "/book-summaries"
                    },
                    {
                        title: "Categories",
                        link: "/categories"
                    },
                    {
                        title: "Authors",
                        link: "/authors"
                    },
                    {
                        title: "Popular Quotes",
                        link: "/category/popular-quotes"
                    }
                ],

            }
        }
    }
</script>

<style lang="scss">
    @import "./resources/stylesheets/partials/variables";
    @import "./resources/stylesheets/partials/components";

    html, body {
        margin: 0;
        padding: 0;
        font-family: 'Dosis', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        font-size: 16px;
    }

    #app {

    }
</style>
