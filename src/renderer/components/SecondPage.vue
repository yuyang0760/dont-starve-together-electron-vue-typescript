<template>
  <div>
    <selectwithpic :src="v_items.pic" :id="v_items.ID" @selectedinfo="whichselected" :yvalue="v_items.value" :alt="v_items.desc" :option="v_items.option" v-for="(v_items,k_items) in items" :key="k_items"></selectwithpic>

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
  filePath: "./src/renderer/resources/worldgenoverride-master.lua",
  forestOrCave: "forest"
});


@Component({
  components: {
    selectwithpic
  }
})
export default class second_page extends Vue {
  items = {};
  worldi:worldInterface = readFromFile(map);
  created() {
    console.log(this.worldi);
    // 遍历世界 取出所有数据 // 先取出mst中的试验吧
    this.items = this.worldi["world"]["mst"]["data"];
  }

  whichselected(selectedinfo:any){
    console.log(selectedinfo['id'],selectedinfo['selectedvalue']);
    this.worldi.world['mst'].data['alternatehunt'].value=selectedinfo['selectedvalue'];
    // console.log(this.worldi);
  }

}
</script>

<style>

</style>
