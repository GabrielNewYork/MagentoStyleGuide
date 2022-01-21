<template>
  <div class="tw-border">
    <div class="tw-container">
      <div class="tw-grid tw-grid-cols-1 tw-gap-12 md:tw-grid-cols-2 lg:tw-grid-cols-12">
        <div class="-tw-bg-red-100 lg:tw-col-span-7">
          <ImageGallery/>
          <WhatsIncluded/>
          <ProductCarousel/>
        </div>
        <div class="lg:tw-col-span-5">
          <ProductTitle/>
          <ProductSku/>
          <!-- Form  -->
          <ProductPrice/>
          <ProductSaleInfo/>
          <ProductKlarna/>
          <ProductDetailSize/>
          <ProductDetailMetalType/>
          <ProductDetailShape/>
          <VariationIcon/>
          <ProductDetailCarat/>
          <ProductAsSelect/>
          <ProductShipping/>
          <ProductDescription/>
          <ProductDescriptionList/>
          <AttributeMeasurements/>
          <!-- Finish Form -->
        </div>
      </div>
    </div>
    <!-- Recently View -->
    <!-- Shop By Category -->
    <ShopByCategory/>
  </div>
</template>

<script>
import ShopByCategory from "@/components/main/NewProductPage/ShopByCategory";
import ImageGallery from "@/components/main/NewProductPage/ImageGallery";
import WhatsIncluded from "@/components/main/NewProductPage/WhatsIncluded";
import ProductTitle from "@/components/main/NewProductPage/ProductTitle";
import ProductSku from "@/components/main/NewProductPage/ProductSku";
import ProductPrice from "@/components/main/NewProductPage/ProductPrice";
import ProductKlarna from "@/components/main/NewProductPage/ProductKlarna";
import ProductSaleInfo from "@/components/main/NewProductPage/ProductSaleInfo";
import ProductDetailSize from "@/components/main/NewProductPage/ProductDetailSize";
import ProductDetailMetalType from "@/components/main/NewProductPage/ProductDetailMetalType";
import ProductDetailShape from "@/components/main/NewProductPage/ProductDetailShape";
import ProductDetailCarat from "@/components/main/NewProductPage/ProductDetailCarat";
import VariationIcon from "@/components/main/NewProductPage/VariationIcon";
import ProductAsSelect from "@/components/main/NewProductPage/ProductAsSelect";
import ProductShipping from "@/components/main/NewProductPage/ProductShipping";
import ProductDescription from "@/components/main/NewProductPage/ProductDescription";
import ProductDescriptionList from "@/components/main/NewProductPage/ProductDescriptionList";
import ProductCarousel from "@/components/main/NewProductPage/ProductCarousel";
import AttributeMeasurements from "@/comp/product/AttributeMeasurements";
export default {
  name: "NewProductPage",
  components: {
    AttributeMeasurements,
    ProductCarousel,
    ProductDescriptionList,
    ProductDescription,
    ProductShipping,
    ProductAsSelect,
    VariationIcon,
    ProductDetailCarat,
    ProductDetailShape,
    ProductDetailMetalType,
    ProductDetailSize,
    ProductSaleInfo,
    ProductKlarna, ProductPrice, ProductSku, ProductTitle, WhatsIncluded, ImageGallery, ShopByCategory}
}
</script>

<style scoped>

</style>