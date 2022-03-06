<template>
  <div class="row p-1">
    <div class="col-8">
      <div class="row">
        <img
          class="col-3 pr-0"
          :src="require(`../assets/images/${image}`)"
          style="object-fit: contain"
          alt=""
        />
        <span class="col-9">
          <p class="mb-0" style="font-weight: 500; font-size: 18px">
            {{name}}
          </p>
          <p
            class="mb-0"
            style="font-weight: 400; color: #81818a; font-size: 10px"
          >
            {{shipping}}
          </p>
        </span>
      </div>
    </div>

    <div class="col-4">
      <p style="font-weight: 700; font-size: 16px; float: right">
        ₦ {{new Intl.NumberFormat('en-US', {minimumFractionDigits: 2}).format(price)}}
      </p>
    </div>
  </div>
</template>
<script>
export default {
    props: ['shipping', 'price', 'name', 'image']
};
</script>