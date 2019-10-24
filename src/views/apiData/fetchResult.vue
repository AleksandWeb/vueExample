<template>
    <div class="fetchResult">
        <span class="fetchResult__text">Result:</span>
        <div class="json-text">
            <pre>{{fetchResult}}</pre>
        </div>
    </div>

</template>

<script>

    export default {
        computed: {
            fetchResult() {
                let fetchResult = this.$store.state.categories.fetchResult;

                    console.log(fetchResult);

                let fetchResultJSON = JSON.stringify(fetchResult, null, 4);

                if(fetchResultJSON.length) {
                    return fetchResultJSON;
                }
                return "Пустой ответ";
            }
        }
    }
</script>
<style src="./fetchResult.css">

</style>