<template>

  <main class="mdl-layout__content">
    <div class="page-content">
      <div class="tw-mx-40">
        <render-component component-title="Cart Sidebar">
          <div class="tw-p-16">
            <CartSidebar></CartSidebar>
          </div>
        </render-component>
        <render-component component-title="Teste com João">
          <div class="tw-p-16">
            <TestJoao></TestJoao>
          </div>
        </render-component>
        <render-component component-title="Alert Messages">
          <div class="tw-p-16">
            <AlertMessageBlock></AlertMessageBlock>
          </div>
        </render-component>
        <render-component component-title="Reset Password">
          <div class="tw-p-16">
            <ResetPassword></ResetPassword>
          </div>
        </render-component>
        <render-component component-title="Filter Bar">
          <div class="tw-p-16">
            <FilterBar></FilterBar>
          </div>
        </render-component>
        <render-component component-title="Active Filters">
          <div class="tw-p-16">
            <ContentFilter></ContentFilter>
          </div>
        </render-component>
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
        <AlertMessages></AlertMessages>
        <breakpoint-test></breakpoint-test>

        <blog-posts></blog-posts>
        <render-component component-title="SEO Content">
          <div class="tw-py-16">
            <combo></combo>
          </div>
        </render-component>

        <render-component component-title="Contact form">
            <contact-form></contact-form>
        </render-component>

        <render-component component-title="Contact Page">
          <contact-page></contact-page>
        </render-component>

        <render-component component-title="Buttons">
          <buttons></buttons>
        </render-component>



      </div>
    </div>
  </main>

</template>


<script>
import RenderComponent from "@/components/support/RenderComponent";
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
import AlertMessages from "@/components/main/AlertMessages";
import BreakpointTest from "@/components/BreakpointTest";
import BlogPosts from "@/components/seo_contents/BlogPosts";
import Combo from "@/components/seo_contents/Combo";
import ContactForm from "@/components/forms/ContactForm";
import ContactPage from "@/components/main/ContactPage";
import Buttons from "@/components/Buttons";
import ContentFilter from "@/components/page-filter/ContentFilter";
import FilterBar from "@/components/page-filter/FilterBar";
import ResetPassword from "@/components/forms/ResetPassword";
import AlertMessageBlock from "@/components/AlertMessageBlock";
import TestJoao from "@/components/TestJoao";
import CartSidebar from "@/components/CartSidebar";


export default {
  name: 'Main',
  components: {
    CartSidebar,
    TestJoao,
    AlertMessageBlock,
    ResetPassword,
    FilterBar,
    ContentFilter,
    Buttons,
    ContactPage,
    ContactForm,
    RenderComponent,
    Combo,

    BlogPosts,
    BreakpointTest,

    AlertMessages,
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