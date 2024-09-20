<template>
    <section class="header-title-wrapper">
        <h1 class="header-title-text">T O D O</h1>
        <img :src="accessibilityBtn"/>
    </section>
</template>

<script>
import accessibilityBtn from "../assets/images/icon-moon.svg"

    export default {
        name: "ToDoHeader",
        data() {
            return {
                accessibilityBtn: accessibilityBtn
            }
        },
    }
</script>

<style >
.header-title-wrapper {
    display: flex;
    margin-top: 120px;
    margin-left: 200px;
    margin-right: 200px;
}

.header-title-wrapper img {
    height: 26px;
    width: 26px;
    padding-left: 100px;
    margin-top: 26px
    
}

.header-title-text {
    color: white;
    font-weight: 700;
    font-size: 30px;
    margin-right: 300px
}
</style>