<template>
  <h3
    class="text-center"
    style="font-weight: 800; font-size: 64px; margin-top: 143px"
  >
    Nike Collections
  </h3>

  <div class="container">
    <div class="row">

      <product-card
        v-for="product in products"
        :key="product.name"
        :name="product.name"
        :price="product.price"
        :shipping="product.shipping"
        :image="product.image"
        :rating="product.rating"
      />

      <!-- start -->
    </div>
  </div>
</template>
<script>
import ProductCard from "../components/ProductCard.vue";
export default {
  name: "HomeView",
  components: {
    ProductCard,
  },
  data() {
    return {
      products: this.$store.getters.products,
    };
  },
};
</script>