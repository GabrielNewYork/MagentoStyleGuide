<template>
    <main class="mdl-layout__content">
        <div class="page-content">
            <div class="tw-mx-40">

                <Intro></Intro>
                <Designing></Designing>
                <Styles></Styles>
                <Typography></Typography>
                <Colors></Colors>
                <Header></Header>
                <Footer ></Footer>
                <Storelocator></Storelocator>

            </div>
        </div>
    </main>
</template>


<script>

import Intro from '../components/main/intro'
import Designing from '../components/main/designing'
import Header from '../components/main/header'
import Footer from '../components/main/footer'
import Storelocator from '../components/main/storelocator'
import Styles from '../components/main/styles'
import Typography from '../components/main/typography'
import Colors from '../components/main/colors'


export default {
    name: 'Main',
    components: {
        Intro,
        Designing,
        Header,
        Footer,
        Storelocator,
        Styles,
        Typography,
        Colors
  },

}


</script>