<template>
<div>
            <button @click="open('https://simulatedgreg.gitbooks.io/electron-vue/content/')">Read the Docs</button><br><br>
    <div>{{msg}}</div>
</div>
</template>

<script>
export default {
  name: 'first-page',
  data:function () {
    return {
      msg:'yy'
    }
  },
  methods: {
    open (link) {
      Electron.shell.openExternal(link)
    }
  }
}
</script>

<style>

</style>
