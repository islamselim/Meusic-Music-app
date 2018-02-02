<template>
  <div id="app">
        <nav class="nav-extended">
        <div class="nav-wrapper">
            <router-link to="/" class="brand-logo"><i class="material-icons">equalizer</i> Meusic</router-link>
            <a href="#" data-activates="mobile-demo" class="button-collapse">
                <i class="material-icons">menu</i>
            </a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a href="#">Login</a></li>
                <li><a href="#">Create Account</a></li>
            </ul>
            <ul class="side-nav" id="mobile-demo">
                <li><a href="#">Login</a></li>
                <li><a href="#">Create Account</a></li>
            </ul>
        </div>
        <div class="nav-content">
            <ul class="tabs tabs-transparent">
                <li class="tab">
                    <router-link to="/">Home</router-link>
                </li>
                <li class="tab">
                    <router-link to="/songs">My library</router-link>
                </li>
                <li class="tab">
                    <router-link to="/users">Search</router-link>
                </li>
            </ul>
        </div>
    </nav>
    <div class="container">
        <router-view></router-view>
    </div>
    <div class="row white player">
        <div class="progress">
            <progress class="determinate" min="0" max="100" value="0"></progress>
        </div>
        <div class="col s4">
            <div class="left" style="width:30%">
                <div style="margin-left:-1.5rem">
                    <img class="album-img" :src="currentSong.img" alt="img" />
                </div>
            </div>
            <div class="right" style="width:70%;">
                <h5>{{ currentSong.name }}</h5>
                <h6>{{ currentSong.artist }} - {{ currentSong.album }}</h6>
            </div>
        </div>
        <div class="col s4 center">
            <button class="btn btn-player control waves-effect"><i class="material-icons">skip_previous</i></button>
            <button class="btn btn-player teal darken-3 waves-effect" v-on:click="play()"><i id="control" class="material-icons">play_arrow</i></button>
            <button class="btn btn-player control waves-effect"><i class="material-icons">skip_next</i></button>
        </div>
        <div class="col s4"></div>
    </div>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
      return {
          currentSong: this.$router.options.data.songs.songs[0]
      }
  },
  methods:{
    play(){
      if(player.paused){
        player.play();
        $("#control").text("pause");
        move();
      }
      else{
        player.pause();
         $("#control").text("play_arrow");
      }
    }
  },
  mounted(){
      var tmp = this.$data.currentSong.src;
      setTimeout(function(){
        player.src = tmp;
        player.load();
      },100);
  }
}
</script>

<style>

</style>
