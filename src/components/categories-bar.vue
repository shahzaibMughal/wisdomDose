<template>
    <!--  Categories  -->
    <carousel class="categories"
              :nav="false"
              :dots="false"
              autoWidth="true"
              autoHeight="true"
              :autoplay="true"
              :autoplayTimeout="3000"
              :autoplayHoverPause="true"
              :nestedItemSelector="nav-item"
              :responsive="{767:{items:5}}">

        <span class="category-container" v-for="category in categories"
              :style="{ backgroundImage: 'url(' + category.backgroundImage + ')' }">
                <a class="category-link" :href="category.link">{{ category.name }}</a>
        </span>

    </carousel>
</template>

<script>
    import carousel from 'vue-owl-carousel'

    export default {

        components: {carousel},
        props: ['categories'],

        data() {
            return {}
        }
    }
</script>

<style lang="scss">
    @import "../resources/stylesheets/partials/variables";

    /* Categories*/
    .categories{
        .owl-carousel .owl-stage-outer{
            /*overflow: visible;*/
            padding: gap(3);
        }
        .category-container{
            margin: gap(2);
            padding: gap(2.5) gap(8);
            background-size: cover;
            border-radius: gap(1);
            z-index: 0;
            position: relative;

            &:after{
                content: " ";
                width: 100%;
                height: 100%;
                display: block;
                position: absolute;
                top: 0;
                border-radius: gap(1);
                left: 0;
                background: rgba(black, 0.6);
                z-index: 1;
            }

            .category-link{
                text-decoration: none;
                color: $white;
                position: relative;
                font-weight: $font-medium;
                z-index: 2;
            }
        }
    }

</style>
