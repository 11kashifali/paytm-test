<template>
  <div class="mx-auto w-4/5 bg-gray shadow-md p-5 m-20">
    <h3 class="font-semibold border-b border-grey py-2">Check Payment</h3>
    <form @submit.prevent="pay" v-if="pgUrl==null">
      <div class="md:flex py-3 items-center">
        <div class="pr-2 font-semibold w-1/4">
          Customer Id:
        </div>
        <div>
          <input type="text" v-model="form.customerid" class="outline-none border p-2">
        </div>
      </div>
      <div class="md:flex py-3 items-center">
        <div class="pr-2 font-semibold w-1/4">
          Mobile Number:
        </div>
        <div>
          <input type="text" v-model="form.mobileNo" class="outline-none border p-2">
        </div>
      </div>
      <div class="md:flex py-3 items-center">
        <div class="pr-2 font-semibold w-1/4">
          Email:
        </div>
        <div>
          <input type="text" v-model="form.email" class="outline-none border p-2">
        </div>
      </div>
      <div class="md:flex py-3 items-center">
        <div class="pr-2 font-semibold w-1/4">
          Amount:
        </div>
        <div>
          <input type="text" v-model="form.amount" class="outline-none border p-2">
        </div>
      </div>
      <div class="md:flex py-3 items-center">
        <div class="pr-2 font-semibold w-1/4">

        </div>
        <div>
          <button class="bg-grey text-white px-3 py-2 rounded">Pay</button>
        </div>
      </div>
    </form>
    <payment-start
      v-else
      :action="pgUrl"
      :params="pgParams"
      :checksum="checkSum"
      />
  </div>
</template>
<script>
  import axios from 'axios'
  import PaymentStart from '@/components/PaymentStart.vue'
  export default {
    components: {
        PaymentStart
    },
    data() {
      return {
        form: {
          email: 'raj@gmail.com',
          amount: 1,
          customerid: 24689991,
          mobileNo: 9822062050
        },
        pgParams: {},
        pgUrl: null,
        checkSum: null
      }
    },
    methods: {
      async pay() {
        let result = await axios.post('http://bripl.ap-south-1.elasticbeanstalk.com/v1/api/pg/order/request/quickpay', this.form);
        result = result.data
        const {
        response: {
                redirect: REDIRECT_URL,
                parameters
            }
        } = result;
        console.log({
            REDIRECT_URL,
            parameters
        })
        const { CHECKSUMHASH, ...pgParams } = parameters;
        this.pgParams = pgParams;
        this.pgUrl = REDIRECT_URL;
        this.checkSum = CHECKSUMHASH;
        this.$nextTick(() => {
          document.f1.submit();
        });
      }
    }
  }

</script>
