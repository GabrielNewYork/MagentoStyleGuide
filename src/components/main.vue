<template>

  <main class="mdl-layout__content">
    <div class="page-content">
      <div class="tw-mx-40">
        <render-component component-title="Product Carousel">
          <div class="tw-p-16">
            <product-carousel :items="10"/>
          </div>
        </render-component>
        <render-component component-title="Product Page">
          <div class="tw-p-16">
            <new-product-page></new-product-page>
          </div>
        </render-component>
        <render-component component-title="Find Nearest Store">
          <div class="tw-p-16">
            <find-nearest-store-form></find-nearest-store-form>
          </div>
        </render-component>
        <render-component component-title="Product Book Appointment">
          <div class="tw-p-16">
            <product-book-appointment></product-book-appointment>
          </div>
        </render-component>
        <render-component component-title="New Product Card">
          <div class="tw-p-16">
            <new-product-card/>
          </div>
        </render-component>
        <render-component component-title="Cart Sidebar">
          <div class="tw-p-16">
            <country-menu></country-menu>
          </div>
        </render-component>

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
import CountryMenu from "@/components/header/CountryMenu";
import NewProductCard from "@/components/main/product/NewProductCard";
import ProductBookAppointment from "@/components/main/BookAppointment/ProductBookAppointment";
import FindNearestStoreForm from "@/components/main/FindNearestStore/FindNearStoreForm";
import NewProductPage from "@/components/main/NewProductPage/NewProductPage";
import ProductCarousel from "@/components/main/NewProductPage/ProductCarousel";


export default {
  name: 'Main',
  components: {
    ProductCarousel,
    NewProductPage,
    FindNearestStoreForm,
    ProductBookAppointment,
    NewProductCard,
    CountryMenu,
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