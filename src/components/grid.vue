<template>
    <ul class="grid effect-2" id="grid">
        <li v-for="quote in quotes"><a :href="quote.link"><img  :src="quote.img" :alt="quote.quoteString"></a></li>
<!--        <li><a href="http://drbl.in/fWPV"><img  src="../assets/tempImages/3.jpg"></a></li>-->
<!--        <li><a href="http://drbl.in/fWMT"><img  src="../assets/tempImages/4.jpg"></a></li>-->
<!--        <li><a href="http://drbl.in/fQdt"><img  src="../assets/tempImages/12.png"></a></li>-->
<!--        <li><a href="http://drbl.in/fHaa"><img  src="../assets/tempImages/13.png"></a></li>-->
<!--        <li><a href="http://drbl.in/gXMo"><img  src="../assets/tempImages/10.png"></a></li>-->
<!--        <li><a href="http://drbl.in/gXMn"><img  src="../assets/tempImages/9.jpg"></a></li>-->
<!--        <li><a href="http://drbl.in/fzYo"><img  src="../assets/tempImages/2.jpg"></a></li>-->
<!--        <li><a href="http://drbl.in/fARU"><img  src="../assets/tempImages/14.png"></a></li>-->
<!--        <li><a href="http://drbl.in/fGhI"><img  src="../assets/tempImages/5.jpg"></a></li>-->
<!--        <li><a href="http://drbl.in/fKCf"><img  src="../assets/tempImages/6.jpg"></a></li>-->
<!--        <li><a href="http://drbl.in/fLBG"><img  src="../assets/tempImages/7.jpg"></a></li>-->
<!--        <li><a href="http://drbl.in/fPEY"><img  src="../assets/tempImages/8.jpg"></a></li>-->
<!--        <li><a href="http://drbl.in/fWwG"><img  src="../assets/tempImages/9.jpg"></a></li>-->
<!--        <li><a href="http://drbl.in/fQdt"><img  src="../assets/tempImages/12.png"></a></li>-->
<!--        <li><a href="http://drbl.in/fHaa"><img  src="../assets/tempImages/13.png"></a></li>-->
        <!--        <li><a href="http://drbl.in/gXMo"><img  src="../assets/tempImages/10.png"></a></li>-->
        <!--        <li><a href="http://drbl.in/gXMn"><img  src="../assets/tempImages/11.png"></a></li>-->
        <!--        <li><a href="http://drbl.in/fzYo"><img  src="../assets/tempImages/2.jpg"></a></li>-->
        <!--        <li><a href="http://drbl.in/fARU"><img  src="../assets/tempImages/14.png"></a></li>-->
        <!--        <li><a href="http://drbl.in/fWMM"><img  src="../assets/tempImages/1.jpg"></a></li>-->
        <!--        <li><a href="http://drbl.in/fWPV"><img  src="../assets/tempImages/3.jpg"></a></li>-->
        <!--        <li><a href="http://drbl.in/fWMT"><img  src="../assets/tempImages/4.jpg"></a></li>-->
        <!--        <li><a href="http://drbl.in/fGhI"><img  src="../assets/tempImages/5.jpg"></a></li>-->
        <!--        <li><a href="http://drbl.in/fKCf"><img  src="../assets/tempImages/6.jpg"></a></li>-->
        <!--        <li><a href="http://drbl.in/fLBG"><img  src="../assets/tempImages/7.jpg"></a></li>-->
        <!--        <li><a href="http://drbl.in/fPEY"><img  src="../assets/tempImages/8.jpg"></a></li>-->
        <!--        <li><a href="http://drbl.in/fWwG"><img  src="../assets/tempImages/9.jpg"></a></li>-->
        <!--        <li><a href="http://drbl.in/fQdt"><img  src="../assets/tempImages/12.png"></a></li>-->
        <!--        <li><a href="http://drbl.in/fHaa"><img  src="../assets/tempImages/13.png"></a></li>-->
        <!--        <li><a href="http://drbl.in/gXMo"><img  src="../assets/tempImages/10.png"></a></li>-->
        <!--        <li><a href="http://drbl.in/gXMn"><img  src="../assets/tempImages/11.png"></a></li>-->
        <!--        <li><a href="http://drbl.in/fzYo"><img  src="../assets/tempImages/2.jpg"></a></li>-->
        <!--        <li><a href="http://drbl.in/fARU"><img  src="../assets/tempImages/14.png"></a></li>-->
        <!--        <li><a href="http://drbl.in/fWMM"><img  src="../assets/tempImages/1.jpg"></a></li>-->
        <!--        <li><a href="http://drbl.in/fWPV"><img  src="../assets/tempImages/3.jpg"></a></li>-->
        <!--        <li><a href="http://drbl.in/fWMT"><img  src="../assets/tempImages/4.jpg"></a></li>-->
        <!--        <li><a href="http://drbl.in/fGhI"><img  src="../assets/tempImages/5.jpg"></a></li>-->
        <!--        <li><a href="http://drbl.in/fKCf"><img  src="../assets/tempImages/6.jpg"></a></li>-->
        <!--        <li><a href="http://drbl.in/fLBG"><img  src="../assets/tempImages/7.jpg"></a></li>-->
        <!--        <li><a href="http://drbl.in/fPEY"><img  src="../assets/tempImages/8.jpg"></a></li>-->
        <!--        <li><a href="http://drbl.in/fWwG"><img  src="../assets/tempImages/9.jpg"></a></li>-->
        <!--        <li><a href="http://drbl.in/fQdt"><img  src="../assets/tempImages/12.png"></a></li>-->
        <!--        <li><a href="http://drbl.in/fHaa"><img  src="../assets/tempImages/13.png"></a></li>-->
        <!--        <li><a href="http://drbl.in/gXMo"><img  src="../assets/tempImages/10.png"></a></li>-->
        <!--        <li><a href="http://drbl.in/gXMn"><img  src="../assets/tempImages/11.png"></a></li>-->
        <!--        <li><a href="http://drbl.in/fzYo"><img  src="../assets/tempImages/2.jpg"></a></li>-->
        <!--        <li><a href="http://drbl.in/fARU"><img  src="../assets/tempImages/14.png"></a></li>-->
        <!--        <li><a href="http://drbl.in/fWMM"><img  src="../assets/tempImages/1.jpg"></a></li>-->
        <!--        <li><a href="http://drbl.in/fWPV"><img  src="../assets/tempImages/3.jpg"></a></li>-->
        <!--        <li><a href="http://drbl.in/fWMT"><img  src="../assets/tempImages/4.jpg"></a></li>-->
        <!--        <li><a href="http://drbl.in/fGhI"><img  src="../assets/tempImages/5.jpg"></a></li>-->
        <!--        <li><a href="http://drbl.in/fKCf"><img  src="../assets/tempImages/6.jpg"></a></li>-->
        <!--        <li><a href="http://drbl.in/fLBG"><img  src="../assets/tempImages/7.jpg"></a></li>-->
        <!--        <li><a href="http://drbl.in/fPEY"><img  src="../assets/tempImages/8.jpg"></a></li>-->
        <!--        <li><a href="http://drbl.in/fWwG"><img  src="../assets/tempImages/9.jpg"></a></li>-->
        <!--        <li><a href="http://drbl.in/fQdt"><img  src="../assets/tempImages/12.png"></a></li>-->
        <!--        <li><a href="http://drbl.in/fHaa"><img  src="../assets/tempImages/13.png"></a></li>-->
        <!--        <li><a href="http://drbl.in/gXMo"><img  src="../assets/tempImages/10.png"></a></li>-->
        <!--        <li><a href="http://drbl.in/gXMn"><img  src="../assets/tempImages/11.png"></a></li>-->
        <!--        <li><a href="http://drbl.in/fzYo"><img  src="../assets/tempImages/2.jpg"></a></li>-->
        <!--        <li><a href="http://drbl.in/fARU"><img  src="../assets/tempImages/14.png"></a></li>-->
        <!--        <li><a href="http://drbl.in/fWMM"><img  src="../assets/tempImages/1.jpg"></a></li>-->
        <!--        <li><a href="http://drbl.in/fWPV"><img  src="../assets/tempImages/3.jpg"></a></li>-->
        <!--        <li><a href="http://drbl.in/fWMT"><img  src="../assets/tempImages/4.jpg"></a></li>-->
        <!--        <li><a href="http://drbl.in/fGhI"><img  src="../assets/tempImages/5.jpg"></a></li>-->
        <!--        <li><a href="http://drbl.in/fKCf"><img  src="../assets/tempImages/6.jpg"></a></li>-->
        <!--        <li><a href="http://drbl.in/fLBG"><img  src="../assets/tempImages/7.jpg"></a></li>-->
        <!--        <li><a href="http://drbl.in/fPEY"><img  src="../assets/tempImages/8.jpg"></a></li>-->
        <!--        <li><a href="http://drbl.in/fWwG"><img  src="../assets/tempImages/9.jpg"></a></li>-->
        <!--        <li><a href="http://drbl.in/fQdt"><img  src="../assets/tempImages/12.png"></a></li>-->
        <!--        <li><a href="http://drbl.in/fHaa"><img  src="../assets/tempImages/13.png"></a></li>-->
        <!--        <li><a href="http://drbl.in/gXMo"><img  src="../assets/tempImages/10.png"></a></li>-->
        <!--        <li><a href="http://drbl.in/gXMn"><img  src="../assets/tempImages/11.png"></a></li>-->
        <!--        <li><a href="http://drbl.in/fzYo"><img  src="../assets/tempImages/2.jpg"></a></li>-->
        <!--        <li><a href="http://drbl.in/fARU"><img  src="../assets/tempImages/14.png"></a></li>-->
        <!--        <li><a href="http://drbl.in/fWMM"><img  src="../assets/tempImages/1.jpg"></a></li>-->
        <!--        <li><a href="http://drbl.in/fWPV"><img  src="../assets/tempImages/3.jpg"></a></li>-->
        <!--        <li><a href="http://drbl.in/fWMT"><img  src="../assets/tempImages/4.jpg"></a></li>-->
        <!--        <li><a href="http://drbl.in/fGhI"><img  src="../assets/tempImages/5.jpg"></a></li>-->
        <!--        <li><a href="http://drbl.in/fKCf"><img  src="../assets/tempImages/6.jpg"></a></li>-->
        <!--        <li><a href="http://drbl.in/fLBG"><img  src="../assets/tempImages/7.jpg"></a></li>-->
        <!--        <li><a href="http://drbl.in/fPEY"><img  src="../assets/tempImages/8.jpg"></a></li>-->
        <!--        <li><a href="http://drbl.in/fWwG"><img  src="../assets/tempImages/9.jpg"></a></li>-->
        <!--        <li><a href="http://drbl.in/fWPV"><img  src="../assets/tempImages/3.jpg"></a></li>-->
        <!--        <li><a href="http://drbl.in/fGhI"><img  src="../assets/tempImages/5.jpg"></a></li>-->
        <!--        <li><a href="http://drbl.in/fzYo"><img  src="../assets/tempImages/2.jpg"></a></li>-->
    </ul>
</template>

<script>
    export default {
        props: ['quotes'],
        data() {
            return {

            }
        }
    }
</script>

<style lang="scss">
    @import "../resources/stylesheets/partials/variables";


    .grid {
        max-width: 1000px;
        list-style: none;
        margin: 30px auto;
        padding: 0;
    }

    .grid li {
        box-sizing: border-box;
        display: block;
        float: left;
        padding: gap(1);
        width: 33%;
        opacity: 0;
        /*opacity: 1;*/
    }

    .grid li.shown,
    .no-js .grid li,
    .no-cssanimations .grid li {
        opacity: 1;
    }

    .grid li a,
    .grid li img {
        outline: none;
        border: none;
        display: block;
        border-radius: gap(1);
        max-width: 100%;
    }

    /* Effect 2: Move Up */
    .grid.effect-2 li.animate {
        -webkit-transform: translateY(200px);
        transform: translateY(200px);
        -webkit-animation: moveUp 0.65s ease forwards;
        animation: moveUp 0.65s ease forwards;
    }

    @-webkit-keyframes moveUp {
        0% { }
        100% { -webkit-transform: translateY(0); opacity: 1; }
    }

    @keyframes moveUp {
        0% { }
        100% { -webkit-transform: translateY(0); transform: translateY(0); opacity: 1; }
    }


    @media screen and (max-width: 900px) {
        .grid li {
            width: 50%;
        }
    }

    @media screen and (max-width: 400px) {
        .grid li {
            width: 100%;
        }
    }

</style>
