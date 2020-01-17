<template>
    <div class="wrap">
        <h3>Redirecting to Payment Gateway. Don't refresh this page.</h3>
        <form :action="action" method="POST" name="f1">
            <input
                v-for="(x, idx) in Object.keys(params)"
                :key="idx"
                type="hidden"
                :name="x"
                :value="params[x]"
            />
            <input
                type='hidden'
                name='CHECKSUMHASH'
                :value="checksum"
            />
        </form>
    </div>
</template>
<style scoped>
    .wrap {
        margin-top: 5rem;
        text-align: center;
        color: rgb(34, 16, 100);
    }
</style>
<script>
export default {
    props: {
        action: String,
        params: Object,
        checksum: String,
    }
}
</script>