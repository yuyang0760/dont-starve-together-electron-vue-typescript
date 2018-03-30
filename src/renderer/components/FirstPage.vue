<template>
  <div>
    <label>游戏风格</label>
    <select v-model="gamestyle_selected" @change='changeType'>
      <option v-for="opt in gamestyle_options" :key="opt.id" v-bind:value="opt.value">{{opt.text}}</option>
    </select>
  </div>
</template>

<script>
import { readFromFile, writeFile } from "../dst/baseSetDao";
import { BaseSet } from "../dst/model/baseSet";
let baseset = readFromFile("./resources/cluster.ini");

let gamestyle_options = [
  { text: "交际", value: "social" },
  { text: "合作", value: "cooperative" },
  { text: "竞争", value: "competitive" },
  { text: "疯狂", value: "madness" }
];

export default {
  name: "first-page",
  data: function name() {
    return {
      gamestyle_selected: "",
      gamestyle_options: []
    };
  },
  created: function() {
    this.gamestyle_options = gamestyle_options;
    this.gamestyle_selected = baseset.gameStyle;
  },
  methods: {
    changeType: function(ele) {
      baseset.gameStyle = ele.target.value;
      writeFile("./resources/cluster1.ini",baseset);
    }
  }
};
</script>

<style>

</style>
