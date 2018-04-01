<template>
  <div>
    <selectwithpic :src="item.src" :alt="item.alt" :option="item.option" v-for="item in items" :key="item.id"></selectwithpic>

  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { readFromFile } from "../dst/worldDao";
import { worldmap, worldInterface } from "../dst/model/world";
import selectwithpic from "./SelectWithPic/SelectWithPic.vue";

let map: Map<string, worldmap> = new Map();
map.set("mst", {
  filePath: "./resources/worldgenoverride-master.lua",
  forestOrCave: "forest"
});
let worldi: worldInterface = readFromFile(map);

@Component({
  components: {
    selectwithpic
  }
})
export default class second_page extends Vue {
  items = [
    {
      src: "",
      alt: "你好",
      option: [
        { text: "name1", value: "n1" },
        { text: "name2", value: "n2" },
        { text: "name3", value: "n3" },
        { text: "name4", value: "n4" }
      ]
    }
  ];

  created() {
    console.log(worldi);
    // 遍历世界 取出所有数据 // 先取出mst中的试验吧

    // let datas = worldi.world["mst"].data;
    // for (const key in datas) {
    //   if (datas.hasOwnProperty(key)) {
    //     const value = datas[key];
        
    //   }
    // }
  }
}
</script>

<style>

</style>
