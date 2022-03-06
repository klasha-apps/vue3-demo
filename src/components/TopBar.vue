<template>
  <div class="row" style="padding-right: 120px; padding-left: 120px">
    <div class="col-6 mx-auto" style="margin-top: 40px">
      <nav
        class="navbar navbar-light bg-light"
        style="background-color: transparent !important"
      >
        <router-link to='/' class="navbar-brand">
          <img
            src="../assets/images/klasha-logo.png"
            alt="Klasha logo"
            style="width: 40px; height: 40px"
          />
          <span style="margin-left: 12px; font-weight: 500">Store</span>
        </router-link>
        <span
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          style="cursor: pointer"
        >
          <img
            src="../assets/images/shopping-cart.svg"
            alt="Shopping Cart"
            style="width: 20px; height: 20px; font-weight: 400; font-size: 20"
          />
          Cart
          <span
            style="
              width: 22px;
              height: 22px;
              background-color: #ef2c5a;
              display: inline-block;
              border-radius: 22px;
              color: white;
              text-align: center;
              margin-left: 8px;
            "
            >{{ cartSize }}</span
          >
        </span>
        <div
          class="dropdown-menu dropdown-menu-right"
          style="width: 440px; padding: 20px"
        >

          <cart-product-card
            v-for="product in cart"
            :key="product.name"
            :name="product.name"
            :image="product.image"
            :shipping="product.shipping"
            :price="product.price"
          />

          <router-link to="/checkout" v-if="cartSize > 0"
            class="text-center text-white pt-2 pb-2"
            type="button"
            style="
              border: none;
              display: block;
              width: 100%;
              margin: auto;
              margin-top: 40px;
              background: #ef2c5a;
              text-decoration: none
            "
          >
            Proceed to checkout
          </router-link>

          <div v-if="cartSize == 0"
            class="text-center text-white pt-2 pb-2"
            type="button"
            style="
              border: none;
              display: block;
              width: 100%;
              margin: auto;
              margin-top: 40px;
              background: #ef2c5a;
              text-decoration: none;
              cursor: not-allowed
            "
          >
            Oh! cart empty 🙄
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import CartProductCard from "./CartProductCard.vue";
export default {
  name: "TopBar",
  components: {
    CartProductCard,
  },
  computed: {
    ...mapGetters(["cartSize", "cart"]),
  },
};
</script>