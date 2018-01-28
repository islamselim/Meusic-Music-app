<template>
    <div>
        <h1>Home Page</h1>
        <ul>
            <li v-for="(l, index) in list" :key="index">
                {{ l.index }}&nbsp;{{ l.name }}
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            list: this.$router.options.data.list.list
        }
    },
  created(){
      var r = this.$router.options.data.list;
      //this.lst = r;
      //alert(r);
  }
}
</script>