<template>
    <div id="app">
        <app-header
                :quote-of-the-day="quoteOfTheDay"
                :menu-items="menuItems">
        </app-header>
        <CategoriesBar :categories="categories"></CategoriesBar>
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
                categories:[
                    { name: "Category 1" ,link:"/abc", backgroundImage: "https://picsum.photos/193/62" },
                    { name: "Category 2" ,link:"/abc", backgroundImage: "https://picsum.photos/193/62" },
                    { name: "Category 3" ,link:"/abc", backgroundImage: "https://picsum.photos/193/62" },
                    { name: "Category 4" ,link:"/abc", backgroundImage: "https://picsum.photos/193/62" },
                    { name: "Category 5" ,link:"/abc", backgroundImage: "https://picsum.photos/193/62" },
                    { name: "Category 6" ,link:"/abc", backgroundImage: "https://picsum.photos/193/62" },
                    { name: "Category 7" ,link:"/abc", backgroundImage: "https://picsum.photos/193/62" },
                    { name: "Category 8" ,link:"/abc", backgroundImage: "https://picsum.photos/193/62" },
                    { name: "Category 9" ,link:"/abc", backgroundImage: "https://picsum.photos/193/62" },
                    { name: "Category 10" ,link:"/abc", backgroundImage: "https://picsum.photos/193/62" },
                    { name: "Category 11" ,link:"/abc", backgroundImage: "https://picsum.photos/193/62" },
                    { name: "Category 12" ,link:"/abc", backgroundImage: "https://picsum.photos/193/62" },
                    { name: "Category 13" ,link:"/abc", backgroundImage: "https://picsum.photos/193/62" },
                    { name: "Category 14" ,link:"/abc", backgroundImage: "https://picsum.photos/193/62" },
                    { name: "Category 15" ,link:"/abc", backgroundImage: "https://picsum.photos/193/62" },
                    { name: "Category 16" ,link:"/abc", backgroundImage: "https://picsum.photos/193/62" },

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
