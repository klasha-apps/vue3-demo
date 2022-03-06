<template>
  <div class="col-3" style="padding: 16px">
    <img :src="require(`../assets/images/${image}`)" alt="boot" class="img-fluid" />
    <div style="margin-top: 12px">
      <p style="font-weight: 400; font-size: 16px; color: #686873">
        {{name}}
      </p>
      <p style="font-weight: 700; font-size: 24px; margin-top: 12px">
        ₦ {{new Intl.NumberFormat('en-US', {minimumFractionDigits: 2}).format(price)}}
      </p>
      <p
        style="
          font-weight: 400;
          font-size: 14px;
          margin-top: 12px;
          color: #686873;
        "
      >
        {{shipping}}
      </p>
    </div>
    <div class="row">
      <div class="col-6 d-flex" style="color: #fb8200; font-size: 10px">
        <span class="justify-content-center align-self-center">
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star-o"></span>
          <span
            style="
              margin-left: 10px;
              font-weight: 500;
              color: #4f4f5b;
              font-size: 14px;
            "
            >{{rating}}</span
          >
        </span>
      </div>
      <div class="col-6">
        <button style="background: #ef2c5a; color: white; padding: 6px; border: none" @click="addToCart()">
          <img src="../assets/images/shopping-cart-white.svg" alt="" />
          <span style="font-size: 12px; padding-left: 8px">Add to Cart</span>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProductCard",
  props: [
      'name', 'price', 'shipping', 'image', 'rating'
  ],
  methods:{
      addToCart(){
          this.$store.dispatch('addToCart', {name: this.name})
      }
  }
};
</script>