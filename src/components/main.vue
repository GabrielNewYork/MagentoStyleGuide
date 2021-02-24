<template>

  <main class="mdl-layout__content">
    <div class="page-content">
      <div class="tw-mx-40">

        <Intro></Intro>
        <Designing></Designing>
        <Styles></Styles>
        <Header></Header>
        <Footer></Footer>
        <Storelocator></Storelocator>
        <StoreLocatorCard></StoreLocatorCard>
        <Product></Product>
        <login></Login>
        <OnBehalfRetailer></OnBehalfRetailer>
        <StoreHeader></StoreHeader>
        <PostCard></PostCard>

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
import Product from '../components/main/product'
import Login from '../components/main/login'
import OnBehalfRetailer from '@/components/main/checkout/OnBehalftRetailer'
import StoreHeader from "@/components/main/stores/StoreHeader";
import PostCard from "@/components/main/media_pages/PostCard";
import StoreLocatorCard from "@/components/main/store_locator/StoreLocatorCard";


export default {
  name: 'Main',
  components: {
    StoreHeader,
    Intro,
    Designing,
    Header,
    Footer,
    Storelocator,
    Styles,
    Product,
    Login,
    OnBehalfRetailer,
    PostCard,
    StoreLocatorCard
  },

}


</script>