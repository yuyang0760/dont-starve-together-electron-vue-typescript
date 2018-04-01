<template>
    <div>
        <img :src="src" :alt="alt" />
        <select>
            <option v-for="opt in option" :key="opt.id" v-bind:value="opt.value">{{opt.text}}</option>
        </select>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  props: {
    src: String,
    alt: String,
    option: Array
  }
})
export default class selectwithpic extends Vue {


}
</script>

<style>

</style>
