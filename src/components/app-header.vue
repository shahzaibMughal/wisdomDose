<template>

    <header :style="{ backgroundImage: 'url(' + quoteOfTheDay.background + ')' }">
        <span id="nav_open_btn" @click="openNav"><svg class="icon" xmlns="http://www.w3.org/2000/svg"
                                                      viewBox="0 0 512 512"><path
                d="M417.4 224H94.6C77.7 224 64 238.3 64 256s13.7 32 30.6 32h322.8c16.9 0 30.6-14.3 30.6-32s-13.7-32-30.6-32zM417.4 96H94.6C77.7 96 64 110.3 64 128s13.7 32 30.6 32h322.8c16.9 0 30.6-14.3 30.6-32s-13.7-32-30.6-32zM417.4 352H94.6C77.7 352 64 366.3 64 384s13.7 32 30.6 32h322.8c16.9 0 30.6-14.3 30.6-32s-13.7-32-30.6-32z"/></svg></span>
        <img class="logo" src="../assets/logo_white.svg" alt="Wisdom Dose Logo">
        <div></div><!-- Flex box fix, to bring logo in center   -->
        <div class="quote-container">
            <div class="quote">
                <p class="quote-string">
                    {{ quoteOfTheDay.quote }}
                </p>
                <div class="quote-meta">
                    <p class="tag">#QuoteOfTheDay</p>
                    <p class="author"><a :href="quoteOfTheDay.authorUri"> {{quoteOfTheDay.author }}  </a></p>
                </div>
            </div>

        </div>

        <div class="container">
        <nav class="main-nav"
             :class="{opened: isNavOpen}">

            <span id="nav_close_btn" @click="closeNav"><svg class="icon" xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 512 512"><path
                    d="M437.5 386.6L306.9 256l130.6-130.6c14.1-14.1 14.1-36.8 0-50.9-14.1-14.1-36.8-14.1-50.9 0L256 205.1 125.4 74.5c-14.1-14.1-36.8-14.1-50.9 0-14.1 14.1-14.1 36.8 0 50.9L205.1 256 74.5 386.6c-14.1 14.1-14.1 36.8 0 50.9 14.1 14.1 36.8 14.1 50.9 0L256 306.9l130.6 130.6c14.1 14.1 36.8 14.1 50.9 0 14-14.1 14-36.9 0-50.9z"/></svg></span>
            <div class="search-box-container">
                <input v-model="searchQuery" class="search-input" :class="{opened: isSearchBoxOpen}" type="text" placeholder="Search">
                <span @click="handleSearchBox" ><svg id="search_btn" class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
                    <path fill="none" d="M-1-1h582v402H-1z"/>
                    <g>
                        <path stroke="null" fill-rule="evenodd"
                              d="M311.126 144.023c21.797 5.046 39.139 23.609 44.184 43.891 1.722 9.484 9.992 16.646 19.883 16.646 11.095 0 20.175-9.078 20.175-20.178 0-14.529-12.205-36.625-28.856-53.173-16.346-16.143-35.817-27.543-51.856-27.543-11.095 0-20.18 9.384-20.18 20.485-.001 9.882 7.163 18.158 16.65 19.872zM33.762 408.573c-15.647 15.636-15.647 41.066 0 56.702 15.636 15.65 41.068 15.65 56.597 0l115.93-115.83c27.037 16.859 58.926 26.642 93.23 26.642 97.567 0 176.567-79.004 176.567-176.57 0-97.564-79-176.568-176.566-176.568s-176.567 79.004-176.567 176.567c0 34.206 9.794 66.194 26.643 93.231L33.762 408.573zM173.4 199.516c0-69.615 56.498-126.12 126.12-126.12s126.12 56.505 126.12 126.12c0 69.623-56.499 126.12-126.12 126.12S173.4 269.14 173.4 199.516z"
                              clip-rule="evenodd"/>
                    </g>
                </svg></span>
            </div>
            <ul class="main-nav-items">
<!--                <li class="active"><a href="#">All Quotes</a></li>-->
                <li v-for="menuItem in menuItems"  :class="{active: isCurrentNav(menuItem)}"  ><a :href="menuItem.link">{{ menuItem.title}}</a></li>
            </ul>
            <ul class="social-nav">
                <li><a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 67 67">
                        <path d="M28.765 50.32h6.744V33.998h4.499l.596-5.624h-5.095l.007-2.816c0-1.466.14-2.253 2.244-2.253h2.812V17.68h-4.5c-5.405 0-7.307 2.729-7.307 7.317v3.377h-3.369v5.625h3.369V50.32zM33 64C16.432 64 3 50.568 3 34 3 17.431 16.432 4 33 4s30 13.431 30 30c0 16.568-13.432 30-30 30z"
                              fill-rule="evenodd" clip-rule="evenodd"/>
                    </svg>
                </a></li>
                <li><a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60">
                        <g fill-rule="evenodd">
                            <path d="M30 60c16.569 0 30-13.431 30-30C60 13.431 46.569 0 30 0 13.431 0 0 13.431 0 30c0 16.569 13.431 30 30 30z"/>
                            <path d="M32.76 39.084c6.605 0 11.086-6.147 11.086-14.376 0-6.22-5.163-12.016-13.007-12.016-9.763 0-14.685 7.146-14.685 13.104 0 3.608 1.337 6.817 4.208 8.014.47.196.891.006 1.028-.525.094-.369.32-1.298.419-1.684.138-.526.085-.71-.295-1.17-.827-.997-1.355-2.286-1.355-4.113 0-5.3 3.883-10.046 10.116-10.046 5.516 0 8.55 3.441 8.55 8.039 0 6.047-2.623 11.152-6.516 11.152-2.15 0-3.758-1.815-3.243-4.04.617-2.657 1.815-5.526 1.815-7.444 0-1.716-.903-3.15-2.772-3.15-2.198 0-3.963 2.322-3.963 5.43 0 1.98.657 3.32.657 3.32l-2.644 11.43c-.358 1.55-.412 3.254-.362 4.695.15 1.292 1.402 2.344 2.488.927.764-1.246 1.584-2.819 2.009-4.396.253-.932 1.446-5.765 1.446-5.765.715 1.39 2.801 2.614 5.02 2.614z"
                                  fill="#FFF"/>
                        </g>
                    </svg>
                </a></li>
                <li><a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.693 56.693">
                        <path d="M38.512 24.392v-4.537l-.59.002-3.947.014.015 4.536zM28.225 34.868a4.718 4.718 0 004.713-4.711 4.679 4.679 0 00-.893-2.748c-.855-1.186-2.248-1.965-3.82-1.965s-2.963.779-3.82 1.965a4.677 4.677 0 00-.891 2.748 4.716 4.716 0 004.711 4.711z"/>
                        <path d="M28.348 5.158c-13.6 0-24.625 11.023-24.625 24.623 0 13.6 11.025 24.625 24.625 24.625 13.598 0 24.623-11.025 24.623-24.625S41.945 5.158 28.348 5.158zm13.263 22.251V38.37a5.18 5.18 0 01-5.174 5.172H20.012a5.178 5.178 0 01-5.173-5.172V21.945a5.178 5.178 0 015.173-5.173h16.425a5.18 5.18 0 015.174 5.173v5.464z"/>
                        <path d="M35.545 30.157c0 4.035-3.283 7.32-7.32 7.32s-7.318-3.285-7.318-7.32c0-.973.193-1.898.537-2.748h-3.996V38.37a2.567 2.567 0 002.564 2.564h16.425a2.567 2.567 0 002.564-2.564V27.409h-3.998a7.25 7.25 0 01.542 2.748z"/>
                    </svg>
                </a></li>
            </ul>
        </nav>
        </div>
    </header>
</template>

<script>
    export default {
        props : ['quoteOfTheDay', 'menuItems'],
        data() {
            return {
                isNavOpen: false,
                isSearchBoxOpen: false,
                searchQuery: ""
            }


        },

        methods: {
            openNav() {
                this.isNavOpen = true;
            },
            closeNav() {
                this.isNavOpen = false;
            },
            handleSearchBox(){
              // if search query is entered, submit that
              // if search query is empty open the search box
                if(this.searchQuery.length>0){
                    console.log(" EMIT THIS QUERY:  "+this.searchQuery)
                    // clear the search box and also close the box (for desktop version)
                    this.searchQuery = "";
                    this.isSearchBoxOpen = false;



                }else if(!this.isSearchBoxOpen){  // if query is empty & search box is not opened open that
                    this.isSearchBoxOpen = true;
                    // bring focus to search box
                    console.log( document.querySelector('input.search-input').focus() );

                }else{
                    this.isSearchBoxOpen = false;   // close search box, because user doesn't entered any query
                }


            },
            isCurrentNav(menuItem){

                // console.log("Menu Item Link: "+ menuItem.link);
                // console.log("current Link: "+ this.$route.path);

                console.log( );

                // if current page is home '/', then return true for '/quote' nav (All Quotes Nav item)

                const currentPath = this.$route.path;




                if(this.$route.path.length === 1 && menuItem.link.match('\\all-quotes')){
                    return true;
                }


                // we will check nav link with menu links, and return true when link is matched
                if(this.$route.path.match(menuItem.link)){
                    return true
                }
                //
                //
                // // if current page is home '/', then return true for all quotes nav item whoes link in "/quotes"


            }

        }

    }
</script>


<style lang="scss">
    @import "../resources/stylesheets/partials/variables";

    .logo {
        width: 120px;
        height: 40px;
    }

    /**** Header Styles*/
    header {
        height: 300px;
        background-size: cover;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        position: relative;
        z-index: 0;
        padding-top: gap(1);
        margin-bottom: gap(4);

        &:after {
            content: " ";
            width: 100%;
            height: 100%;
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            background: rgba(black, 0.7);
            z-index: 1;
        }


        @media (min-width: 767px) {
            height: 400px;
        }
        @media (min-width: 1200px) {
            height: 450px;
        }

    }

    /**** Header overlay Fix*/
    .quote-container, .logo, .icon {
        position: relative;
        z-index: 100;
    }

    .main-nav,.main-nav .container {
        z-index: 1000;
    }

    #nav_open_btn .icon {
        fill: $white;
    }

    .logo {
        margin-left: gap(-4);
    }


    /**** Quotes Styles*/
    .quote-container {
        width: 100%;
        color: $white;

        display: flex;
        padding: gap(3);
        flex-direction: column;
        text-align: center;



        .quote-meta {
            max-width: 600px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
        }
        .quote{
            max-width: 650px;
            margin: 0 auto;

        }
        .quote-string{
            font-size: 1.2em;
            position: relative;
            font-weight: $font-medium;
            &:after{
                content: "";
                display:block;
                height:20px;
                width:20px;
                background-size: 20px 20px;
                background-image: url('../assets/quote.svg');
                background-repeat: no-repeat;
                position: absolute;
                top: -25px;
                left: -10px;
                opacity: 0.4;

            }
            &:before{
                content: "";
                display:block;
                height:20px;
                width:20px;
                background-size: 20px 20px;
                background-image: url('../assets/quote.svg');
                background-repeat: no-repeat;
                opacity: 0.4;
                position: absolute;
                transform: scale(-1,-1);
                bottom: -25px;
                right: -10px;
            }
        }

        .author:before{
            content: " - ";
            color: $primary-color;
        }
    }


    /**** Main Nav Styles*/
    .main-nav {
        background: $white;
        @include shadow;

        padding: gap(1);

        #nav_close_btn {
            align-self: flex-start;
            margin-bottom: gap(2);
        }


        /****  Main Nav Items Styles ***/
        .main-nav-items {
            list-style: none;
            display: flex;

            li {
                padding: gap(1) gap(3);
                margin: gap(0.5) 0;

                &.active {
                    background: $primary-color;
                    border-radius: gap(4);
                    color: $white;
                }
            }

            a {
                font-size: 1.1em;
                color: inherit;
            }
        }

        /****  Social Buttons Styles ***/
        .social-nav {
            padding: 0;
            list-style: none;
            margin: 0;

            svg {
                padding: gap(0.2);
                fill: $grey;
            }
        }


    }

    /*** Sticky Nav for desktop */
    @media (max-width: 766px) {
        .main-nav {
            width: 200px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            position: fixed;
            top: 0;
            left: 0;
            height: 100%;

            .main-nav-items {
                flex-direction: column;
                align-items: center;
                justify-content: center;
                text-align: center;
                padding: 0;
                margin-top: gap(4);
            }


            /**** Search Box Styles ***/
            .search-input {
                padding: gap(1) gap(4) gap(1) gap(2);
                width: 100%;
                border-radius: gap(2);
                @include shadow(2px, 2px, 4px);
                font-family: inherit;
                border: 1px solid rgba(black,0.1);
                outline: none;

            }

            #search_btn {
                fill: $grey;
                position: absolute;
                top: 8px;
                right: 5px;
                width: 18px;
                height: 18px;
                box-sizing: border-box;
                padding: 0;
            }

            .search-box-container {
                position: relative;
                display: flex;
                width: 100%;
            }
            .social-nav{
                display: flex;
            }

            /****  Opening Closing Nav  ***/
            transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
            transform: translateX(-220px);

            &.opened {
                transform: translateX(0);
            }
        }

    }

    @media (min-width: 767px) {
        #nav_open_btn{
            opacity: 0;
        }
        #nav_close_btn, .search-input , .social-nav{
            display: none;
        }
        header{
            margin-bottom: gap(5); // fix
        }
        .container{
            width: 100%;
            background: $white;
            align-self: flex-end;
            @include shadow();
            top: gap(4);
            z-index: 1000;
            position: relative;
        }
        .main-nav {
            position: static;
            background: none;
            box-shadow: none;
            display: flex;
            align-items: center;
            justify-content: space-between;
            max-width: 1000px;
            margin: 0 auto;
            flex-direction: row-reverse;
            padding: 0 gap(2);
        }
        .main-nav-items{
            display: flex;
            padding: 0;
            justify-content: flex-start;
            align-items: center;
        }

        .search-box-container, .social-nav{
            padding: 0;
            margin: 0;
        }


        .search-input{
            display: block;
            position: absolute;
            transform: translateX(-100%);
            top: 25%;
            padding: gap(1) gap(4) gap(1) gap(2);
            border: 1px solid rgba(black,0.1);
            border-radius: gap(2);
            @include shadow(2px, 2px, 4px);
            font-family: inherit;
            outline: none;
            opacity: 0;
            &.opened{
                opacity: 1;
            }
        }


    }

    @media (min-width: 819px){
        .social-nav{
            display: flex;
        }

    }









    // media queries
    @media  (min-width: 767px){
        .logo {
            width: 150px;
            height: 50px;
        }

        .quote-container{
            margin-top: gap(5);
        }
        .quote-container .quote-string{
            font-size: 1.6em;
        }

        .quote-meta{
            font-size: 1.2em;
        }
    }


</style>