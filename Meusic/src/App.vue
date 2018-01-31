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
        <div id="line" style="position:absolute; width:100%; z-index:999999">
            <div id="p-slider"></div>
        </div>
        <div class="col s4">
            <div class="left" style="width:30%">
                <div style="margin-left:-1.5rem">
                    <img class="album-img" src="https://is4-ssl.mzstatic.com/image/thumb/Music127/v4/fa/d4/84/fad484a0-e13f-b1ac-92a2-8efb468bfe2c/0617465883354.png/1200x630bb.jpg" alt="img" />
                </div>
            </div>
            <div class="right" style="width:70%;">
                <h5>Title</h5>
                <h6>Artist - Album</h6>
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
  methods:{
    play(){
      if(player.paused){
        player.play();
        $("#control").text("pause");
        lineMovement();
      }
      else{
        player.pause();
         $("#control").text("play_arrow");
      }
    }
  }
}
</script>

<style>

</style>
