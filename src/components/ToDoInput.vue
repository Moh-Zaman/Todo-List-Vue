<template>
    <section>
        <form class="input-form-wrapper" @submit.prevent>
            <label class="checkbox-container">
                <input
                    class="input-checkbox-field"
                    type="checkbox">
                <span class="checkmark"></span>
            </label>
            <input
                class="input-text-field"
                :placeholder="'Enter Tasks Here'"
                type="text">
        </form>
    </section>
</template>

<script>
    export default {
        name: "ToDoInput"
    }
</script>

<style>
.input-form-wrapper {
    display: flex;
    position: relative;
    font-size: 18px;
}

.input-text-field {
    appearance: none;
    border: none;
    outline: none;
    background: transparent;
    color: white;
    text-align: left;
    font-size: 18px;
    caret-color: hsl(220, 98%, 61%);
    vertical-align: middle;
    padding-left: 20px;
    width: 400px;
}

.input-checkbox-field {
    position: absolute;
    opacity: 0;
}

.checkbox-container {
    display: inline-block;
    position: relative;
    width: 35px;
    height: 35px;
    margin-right: 10px;
    cursor: pointer;
}

.checkmark {
    width: 100%;
    height: 100%;
    background-color: transparent;
    border-radius: 50%;
    border: 2px solid hsl(234, 11%, 52%);
    display: inline-block;
    position: relative;
    transition: background-color 0.3s ease, border-color 0.3s ease;
}

.input-checkbox-field:checked + .checkmark {
    background: linear-gradient(to right, hsl(192, 100%, 67%), hsl(280, 87%, 65%));
    border: none;
}

.input-checkbox-field:checked + .checkmark:after {
    content: "";
    position: absolute;
    left: 12px;
    top: 5px;
    width: 8px;
    height: 16px;
    border: solid rgb(255, 255, 255);
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
}

.checkbox-container:hover .checkmark {
    background-color: hsl(234, 11%, 85%);
}
</style>
