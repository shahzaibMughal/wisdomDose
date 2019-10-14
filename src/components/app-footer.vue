<template>
    <footer>
        <h3 class="heading">Don't Wana Miss Wisdom Doses! Subscribe</h3>
        <div class="subscription-container">
            <input type="text" placeholder="Enter Email">
            <button class="btn">Subscribe</button>
        </div>


        <ul class="footer-nav">
            <li>Copyright @2019 WhatsMyQuote</li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Policy</a></li>
            <li><a href="#">Pages</a></li>
        </ul>
    </footer>
</template>

<script>
    export default {
        data() {
            return {

            }
        }
    }
</script>

<style lang="scss">
    @import "../resources/stylesheets/partials/variables";

    footer{
        background: $black;
        padding: gap(4);
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        color: $white
    }


    .heading{
        font-size: 2.5em;
        font-weight: $font-light;
        padding: 0;
        margin: 0;
        &:before{
            content: "";
            width: 50px;
            height: 50px;
            /*background: red;*/
            display: inline-block;
            background-size: 50px 50px;
            background-image: url('../assets/stars.svg');
            background-repeat: no-repeat;
            margin-right: gap(1);
        }
        &:after{
            content: "";
            width: 50px;
            height: 50px;
            /*background: red;*/
            display: inline-block;
            background-size: 50px 50px;
            background-image: url('../assets/stars.svg');
            background-repeat: no-repeat;
            margin-left: gap(1);
            transform: scale(-1,-1);
        }
    }

    .subscription-container{
        position: relative;
        input{
            padding: gap(2) gap(8) gap(2) gap(3);
            border-radius: gap(10);
            border: none;

            position: relative;
            top: 0;
            left: 0;
        }
        .btn{
            display: inline;
            padding: gap(2) gap(3);
            font-weight: $font-light;
            font-size: 1em;
            position: relative;
            top: 0;
            right: 50px;
            @include onclickBtnEffect;
        }
    }
    .footer-nav{
        padding: 0;
        list-style: none;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        li{
            padding: gap(1);
        }
        a{
            color: $white;
            text-decoration: underline
        }
    }
</style>
