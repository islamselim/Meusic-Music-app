<template>
    <div>
        <h1>Home Page</h1>
        <div class="row">
            <div class="col s6 m3" v-for="(s, index) in songs" :key="index">
                <div class="card">
                    <div class="card-image">
                        <img :src="s.img">
                        <a v-on:click="changeSong(s.src)" class="btn-floating halfway-fab waves-effect waves-light teal darken-3"><i class="material-icons">add</i></a>
                    </div>
                    <div class="card-content">
                        <span class="card-title">{{ s.name }}</span>
                        <p>
                            {{ s.artist }} - {{ s.album }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            songs: this.$router.options.data.songs.songs
        }
    },
    methods:{
        changeSong(src) {
            player.src = src;
            player.load();
            //currentSong = this.songs[0];
            player.play();
            $("#control").text("pause");
            setTimeout(function(){ move();},100);
        }
    },
  created(){
      var r = this.$router.options.data.songs;
      //this.lst = r;
      //alert(r);
  }
}
</script>