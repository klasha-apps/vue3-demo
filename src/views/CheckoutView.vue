<template>
  <h3
    class="text-center"
    style="font-weight: 800; font-size: 64px; margin-top: 143px"
  >
  </h3>

  <div class="container">
    <div style="margin: 48px">
      <div>
        <div>
          <span class="h4" style="font-weight: 500; font-size: 24px"
            >1. Address details</span
          >
          <span
            class="float-right"
            style="font-weight: 500; font-size: 16px; color: #ef2c5a"
            >Change</span
          >
        </div>
        <div style="margin-top: 48px">
          <div style="font-weight: 500; font-size: 16px">Ada Adiche</div>
          <div style="font-weight: 400; font-size: 12px; color: #81818a">
            Plot 6 & 7 Elemo Layout, Off Oda Road, Akure-Oda Road, Ondo
          </div>
          <div style="font-weight: 400; font-size: 12px; color: #81818a">
            +2349071603960
          </div>
        </div>
      </div>
      <div style="margin-top: 166px">
        <div>
          <span class="h4" style="font-weight: 500; font-size: 24px"
            >2. Delivery method</span
          >
        </div>
        <div style="font-weight: 400; font-size: 12px; color: #81818a">
          How do you want your order delivered?
        </div>
        <div style="margin-top: 48px; font-size: 15px">
          <div class="form-check" style="display: inline-block">
            <input
              class="form-check-input"
              name="del"
              type="radio"
              id="radio1"
              value="option1"
              checked
              style="accent-color: #ef2c5a"
            />
            <label class="form-check-label" for="radio1"> Door delivery </label>
          </div>
          <div class="form-check ml-3" style="display: inline-block">
            <input
              class="form-check-input"
              name="del"
              type="radio"
              id="radio2"
              value="option2"
              style="accent-color: #ef2c5a"
            />
            <label class="form-check-label" for="radio2"> Door delivery </label>
          </div>
        </div>
      </div>

      <div style="margin-top: 166px">
        <div>
          <span class="h4" style="font-weight: 500; font-size: 24px"
            >3. Payment method</span
          >
        </div>
        <div style="font-weight: 400; font-size: 12px; color: #81818a">
          How do you want to pay?
        </div>
        <div style="margin-top: 48px; font-size: 15px">
          <div class="form-check" style="display: inline-block">
            <input
              class="form-check-input"
              name="pay"
              type="radio"
              id="radio1"
              value="option1"
              checked
              style="accent-color: #ef2c5a"
            />
            <label class="form-check-label" for="radio1">
              Pay with Klasha
            </label>
          </div>
          <div class="ml-4" style="display: inline-block">
            <img
              class="img-fluid"
              src="../assets/images/klasha-payment-methods.png"
              alt=""
              srcset=""
            />
          </div>
        </div>
      </div>

      <div style="text-align: center">
        <!-- to hide the button v-if='false' -->
        <button
          v-if="false"
          style="
            margin-top: 166px;
            margin-bottom: 12px;
            width: 60%;
            border: none;
            color: white;
            background: #ef2c5a;
            padding: 20px;
          "
        >
          Confirm order
        </button>

        <klasha
          :is-test-mode="isTestMode"
          :email="email"
          :phone-number="phoneNumber"
          :merchant-key="merchantKey"
          :amount="amount"
          :source-currency="sourceCurrency"
          :destination-currency="destinationCurrency"
          :tx-ref="txRef"
          :business-id="businessId"
          :fullname="fullname"
          :payment-type="paymentType"
          :payment-description="paymentDescription"
          :call-back="callBack"
          :on-close="onClose"
          :embed="false"
        />
      </div>
    </div>
  </div>
</template>
<style scoped>
.klashaPayButtonStyle {
  margin-top: 166px;
  margin-bottom: 12px;
  width: 60%;
  border: none;
  color: white;
  background: #ef2c5a;
  padding: 20px;
}
</style>
<script>
import { mapGetters } from "vuex";
import klasha from "vue3-klasha";
import { v4 as uuidv4 } from "uuid";

export default {
  components: {
    klasha,
  },
  data() {
    return {
      isTestMode: true,
      email: "adewale.moses.b@gmail.com",
      phoneNumber: "+2347032320477",
      merchantKey:
        "W2mbGtdx5vKCepFaUm2CqdzebaVW9z22shubB4xFbKTR3g4sL72+7qNQYHTUEfs0my1e/hAO1Nkdx9YbXTjUOg==",
      amount: this.cartAmount,
      sourceCurrency: "NGN",
      destinationCurrency: "NGN",
      txRef: uuidv4(),
      businessId: "1",
      fullname: "Moses Adewale",
      paymentDescription: "Some Shopping",
      paymentType: "",
    };
  },
  computed: {
    ...mapGetters(["cartAmount"]),
  },
  methods: {
      onClose(){
          console.log('Closed')
      },
      callback(){
          console.info('callback caled')
      }
  }
};
</script>