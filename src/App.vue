<template>
    <div id="app">
        <app-header
                :quote-of-the-day="quoteOfTheDay"
                :menu-items="menuItems">
        </app-header>
        <CategoriesBar :categories="categories"></CategoriesBar>
        <grid :quotes="quotes"></grid>
        <a href="#" class="btn"> View All Quotes</a>
        <app-footer></app-footer>
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
                quotes:[
                    {
                        quoteString: 'This is the Quote',
                        link:   "#",
                        img: 'https://i.pinimg.com/564x/24/a4/14/24a414f32bf6dbaa82a578c5f7577602.jpg'
                    },
                    {
                        quoteString: 'This is the Quote',
                        link:   "#",
                        img: 'https://i.pinimg.com/564x/b4/52/3c/b4523cf8c70b1e0a2b0fcd5ad991e3a2.jpg'
                    },
                    {
                        quoteString: 'This is the Quote',
                        link:   "#",
                        img: 'https://i.pinimg.com/564x/7a/70/d2/7a70d2d911152df944e2643b24ff48b5.jpg'
                    },
                    {
                        quoteString: 'This is the Quote',
                        link:   "#",
                        img: 'https://i.pinimg.com/564x/ff/2c/a4/ff2ca4a5aced507a88c90303dfa77902.jpg'
                    },
                    {
                        quoteString: 'This is the Quote',
                        link:   "#",
                        img: 'https://i.pinimg.com/564x/1e/ea/72/1eea72c82e7e23a3c5ea69d0edee7922.jpg'
                    },
                    {
                        quoteString: 'This is the Quote',
                        link:   "#",
                        img: 'https://i.pinimg.com/564x/eb/dd/10/ebdd104d7d545165f62f9f91412cd696.jpg'
                    },
                    {
                        quoteString: 'This is the Quote',
                        link:   "#",
                        img: 'https://i.pinimg.com/564x/24/a4/14/24a414f32bf6dbaa82a578c5f7577602.jpg'
                    },
                    {
                        quoteString: 'This is the Quote',
                        link:   "#",
                        img: 'https://i.pinimg.com/564x/b4/52/3c/b4523cf8c70b1e0a2b0fcd5ad991e3a2.jpg'
                    },
                    {
                        quoteString: 'This is the Quote',
                        link:   "#",
                        img: 'https://i.pinimg.com/564x/7a/70/d2/7a70d2d911152df944e2643b24ff48b5.jpg'
                    },
                    {
                        quoteString: 'This is the Quote',
                        link:   "#",
                        img: 'https://i.pinimg.com/564x/ff/2c/a4/ff2ca4a5aced507a88c90303dfa77902.jpg'
                    },
                    {
                        quoteString: 'This is the Quote',
                        link:   "#",
                        img: 'https://i.pinimg.com/564x/1e/ea/72/1eea72c82e7e23a3c5ea69d0edee7922.jpg'
                    },
                    {
                        quoteString: 'This is the Quote',
                        link:   "#",
                        img: 'https://i.pinimg.com/564x/eb/dd/10/ebdd104d7d545165f62f9f91412cd696.jpg'
                    },
                    {
                        quoteString: 'This is the Quote',
                        link:   "#",
                        img: 'https://i.pinimg.com/564x/24/a4/14/24a414f32bf6dbaa82a578c5f7577602.jpg'
                    },
                    {
                        quoteString: 'This is the Quote',
                        link:   "#",
                        img: 'https://i.pinimg.com/564x/b4/52/3c/b4523cf8c70b1e0a2b0fcd5ad991e3a2.jpg'
                    },
                    {
                        quoteString: 'This is the Quote',
                        link:   "#",
                        img: 'https://i.pinimg.com/564x/7a/70/d2/7a70d2d911152df944e2643b24ff48b5.jpg'
                    },
                    {
                        quoteString: 'This is the Quote',
                        link:   "#",
                        img: 'https://i.pinimg.com/564x/ff/2c/a4/ff2ca4a5aced507a88c90303dfa77902.jpg'
                    },
                    {
                        quoteString: 'This is the Quote',
                        link:   "#",
                        img: 'https://i.pinimg.com/564x/1e/ea/72/1eea72c82e7e23a3c5ea69d0edee7922.jpg'
                    },
                    {
                        quoteString: 'This is the Quote',
                        link:   "#",
                        img: 'https://i.pinimg.com/564x/eb/dd/10/ebdd104d7d545165f62f9f91412cd696.jpg'
                    },
                    {
                        quoteString: 'This is the Quote',
                        link:   "#",
                        img: 'https://i.pinimg.com/564x/24/a4/14/24a414f32bf6dbaa82a578c5f7577602.jpg'
                    },
                    {
                        quoteString: 'This is the Quote',
                        link:   "#",
                        img: 'https://i.pinimg.com/564x/b4/52/3c/b4523cf8c70b1e0a2b0fcd5ad991e3a2.jpg'
                    },
                    {
                        quoteString: 'This is the Quote',
                        link:   "#",
                        img: 'https://i.pinimg.com/564x/7a/70/d2/7a70d2d911152df944e2643b24ff48b5.jpg'
                    },
                    {
                        quoteString: 'This is the Quote',
                        link:   "#",
                        img: 'https://i.pinimg.com/564x/ff/2c/a4/ff2ca4a5aced507a88c90303dfa77902.jpg'
                    },
                    {
                        quoteString: 'This is the Quote',
                        link:   "#",
                        img: 'https://i.pinimg.com/564x/1e/ea/72/1eea72c82e7e23a3c5ea69d0edee7922.jpg'
                    },
                    {
                        quoteString: 'This is the Quote',
                        link:   "#",
                        img: 'https://i.pinimg.com/564x/eb/dd/10/ebdd104d7d545165f62f9f91412cd696.jpg'
                    },
                    {
                        quoteString: 'This is the Quote',
                        link:   "#",
                        img: 'https://i.pinimg.com/564x/24/a4/14/24a414f32bf6dbaa82a578c5f7577602.jpg'
                    },
                    {
                        quoteString: 'This is the Quote',
                        link:   "#",
                        img: 'https://i.pinimg.com/564x/b4/52/3c/b4523cf8c70b1e0a2b0fcd5ad991e3a2.jpg'
                    },
                    {
                        quoteString: 'This is the Quote',
                        link:   "#",
                        img: 'https://i.pinimg.com/564x/7a/70/d2/7a70d2d911152df944e2643b24ff48b5.jpg'
                    },
                    {
                        quoteString: 'This is the Quote',
                        link:   "#",
                        img: 'https://i.pinimg.com/564x/ff/2c/a4/ff2ca4a5aced507a88c90303dfa77902.jpg'
                    },
                    {
                        quoteString: 'This is the Quote',
                        link:   "#",
                        img: 'https://i.pinimg.com/564x/1e/ea/72/1eea72c82e7e23a3c5ea69d0edee7922.jpg'
                    },
                    {
                        quoteString: 'This is the Quote',
                        link:   "#",
                        img: 'https://i.pinimg.com/564x/eb/dd/10/ebdd104d7d545165f62f9f91412cd696.jpg'
                    },
                    {
                        quoteString: 'This is the Quote',
                        link:   "#",
                        img: 'https://i.pinimg.com/564x/24/a4/14/24a414f32bf6dbaa82a578c5f7577602.jpg'
                    },
                    {
                        quoteString: 'This is the Quote',
                        link:   "#",
                        img: 'https://i.pinimg.com/564x/b4/52/3c/b4523cf8c70b1e0a2b0fcd5ad991e3a2.jpg'
                    },
                    {
                        quoteString: 'This is the Quote',
                        link:   "#",
                        img: 'https://i.pinimg.com/564x/7a/70/d2/7a70d2d911152df944e2643b24ff48b5.jpg'
                    },
                    {
                        quoteString: 'This is the Quote',
                        link:   "#",
                        img: 'https://i.pinimg.com/564x/ff/2c/a4/ff2ca4a5aced507a88c90303dfa77902.jpg'
                    },
                    {
                        quoteString: 'This is the Quote',
                        link:   "#",
                        img: 'https://i.pinimg.com/564x/1e/ea/72/1eea72c82e7e23a3c5ea69d0edee7922.jpg'
                    },
                    {
                        quoteString: 'This is the Quote',
                        link:   "#",
                        img: 'https://i.pinimg.com/564x/eb/dd/10/ebdd104d7d545165f62f9f91412cd696.jpg'
                    },
                    {
                        quoteString: 'This is the Quote',
                        link:   "#",
                        img: 'https://i.pinimg.com/564x/24/a4/14/24a414f32bf6dbaa82a578c5f7577602.jpg'
                    },
                    {
                        quoteString: 'This is the Quote',
                        link:   "#",
                        img: 'https://i.pinimg.com/564x/b4/52/3c/b4523cf8c70b1e0a2b0fcd5ad991e3a2.jpg'
                    },
                    {
                        quoteString: 'This is the Quote',
                        link:   "#",
                        img: 'https://i.pinimg.com/564x/7a/70/d2/7a70d2d911152df944e2643b24ff48b5.jpg'
                    },
                    {
                        quoteString: 'This is the Quote',
                        link:   "#",
                        img: 'https://i.pinimg.com/564x/ff/2c/a4/ff2ca4a5aced507a88c90303dfa77902.jpg'
                    },
                    {
                        quoteString: 'This is the Quote',
                        link:   "#",
                        img: 'https://i.pinimg.com/564x/1e/ea/72/1eea72c82e7e23a3c5ea69d0edee7922.jpg'
                    },
                    {
                        quoteString: 'This is the Quote',
                        link:   "#",
                        img: 'https://i.pinimg.com/564x/eb/dd/10/ebdd104d7d545165f62f9f91412cd696.jpg'
                    },
                    {
                        quoteString: 'This is the Quote',
                        link:   "#",
                        img: 'https://i.pinimg.com/564x/24/a4/14/24a414f32bf6dbaa82a578c5f7577602.jpg'
                    },
                    {
                        quoteString: 'This is the Quote',
                        link:   "#",
                        img: 'https://i.pinimg.com/564x/b4/52/3c/b4523cf8c70b1e0a2b0fcd5ad991e3a2.jpg'
                    },
                    {
                        quoteString: 'This is the Quote',
                        link:   "#",
                        img: 'https://i.pinimg.com/564x/7a/70/d2/7a70d2d911152df944e2643b24ff48b5.jpg'
                    },
                    {
                        quoteString: 'This is the Quote',
                        link:   "#",
                        img: 'https://i.pinimg.com/564x/ff/2c/a4/ff2ca4a5aced507a88c90303dfa77902.jpg'
                    },
                    {
                        quoteString: 'This is the Quote',
                        link:   "#",
                        img: 'https://i.pinimg.com/564x/1e/ea/72/1eea72c82e7e23a3c5ea69d0edee7922.jpg'
                    },
                    {
                        quoteString: 'This is the Quote',
                        link:   "#",
                        img: 'https://i.pinimg.com/564x/eb/dd/10/ebdd104d7d545165f62f9f91412cd696.jpg'
                    },
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
