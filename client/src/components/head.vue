<template>
    <div class=" ">

        <div class="text-center">

            <span class=" glyphicon glyphicon-star" aria-hidden="true"></span>

            <div class="row"><span class="heading"> Welcome to Chat app </span> <button class="btn info"  @click="showInfo"><span
                    class="info glyphicon glyphicon-info-sign" aria-hidden="true"></span>
            </button>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name:`Heading`,
        methods: {
            showInfo(){
                this.$router.push('/info');
            }
        }
    }
</script>

<style scoped>
  
    .btn{
        background-color: rgba(31, 153, 41, 0);
        margin-bottom: 3vh;
    }

    .heading {
        font-weight: bold;
        font-size: 6vh;
    }

    .info {
        font-size: 5vh;
    }

    .info:hover {
        background-color:#eeeeee;
        color: rgba(50, 151, 37, 0.82);
    }

    .vertical-center {

        display: flex;
        align-items: center;
    }

    .head {
        background-color: rgba(17, 122, 31, 0.82);
        min-height: 38vh;
        border-bottom: 5px outset #333;
    }

    .row {
        margin: 10px;
    }
</style>