<template>
  <div id="voinoBtn">
    <section class="voi_container" ref="voi_container">
      <section class="voi_child_box">
        <div class="voi_child" id="voiUpBtn" ref="voi_song_list">
          <div class="voi_child_content">
            <svg class="voi_song_list_svg" viewBox="0 0 1024 1024" width="25">
              <path class="voi_song_list_path" />
            </svg>
            <div class="voi_song_list_box" ref="voi_song_list_box">
              <div class="voi_song_list_relative">
                <div class="voi_song_cover_box">
                  <div class="voi_song_cover_main">
                    <img src="../../static/img/april02.jpg" alt="april02" />
                  </div>
                </div>
                <div class="voi_song_list_operate_box" ref="voi_song_list_operate_box">
                  <div class="voi_song_list_content_box">
                    <div class="voi_song_list_song_info">
                      <div class="voi_song_list_operate_author" v-text="musicPlayer.songAuthor"></div>
                      <div
                        class="voi_song_list_operate_song_name"
                        :title="musicPlayer.songName"
                        v-text="musicPlayer.songName"
                      ></div>
                    </div>
                    <div class="voi_song_list_btn_box">
                      <div>
                        <svg viewBox="0 0 1024 1024" width="20">
                          <path
                            d="M934.4 489.6L707.2 262.4c-12.8-12.8-32-12.8-44.8 0-12.8 12.8-12.8 32 0 44.8L867.2 512 662.4 716.8c-12.8 12.8-12.8 32 0 44.8 12.8 12.8 32 12.8 44.8 0l227.2-227.2c6.4-6.4 9.6-16 9.6-22.4 0-9.6-3.2-16-9.6-22.4z"
                            fill="#ffffff"
                          />
                          <path
                            d="M646.4 489.6L419.2 262.4c-12.8-12.8-32-12.8-44.8 0-12.8 12.8-12.8 32 0 44.8L579.2 512 374.4 716.8c-12.8 12.8-12.8 32 0 44.8 12.8 12.8 32 12.8 44.8 0l227.2-227.2c6.4-6.4 9.6-16 9.6-22.4 0-9.6-3.2-16-9.6-22.4z"
                            fill="#ffffff"
                          />
                          <path
                            d="M358.4 489.6l-224-227.2c-12.8-12.8-32-12.8-44.8 0-12.8 12.8-12.8 32 0 44.8L291.2 512 86.4 716.8c-12.8 12.8-12.8 32 0 44.8 12.8 12.8 32 12.8 44.8 0l227.2-227.2c6.4-6.4 9.6-16 9.6-22.4 0-9.6-3.2-16-9.6-22.4z"
                            fill="#ffffff"
                          />
                        </svg>
                      </div>
                      <div class="voi_volume">
                        <svg viewBox="0 0 1024 1024" width="17">
                          <path
                            d="M843.225212 872.454971c-10.751505 0-19.455105-8.7036-19.455105-19.455105 0-6.143717 3.071859-11.775458 8.191623-15.359293l6.143717-6.655694c94.715643-90.619831 146.937241-211.446273 146.937241-341.488292 0-122.362371-46.589857-238.069049-131.577947-327.152951-4.095812-4.095812-6.655694-9.215576-6.655694-14.33534 0-10.751505 8.7036-19.455105 19.455105-19.455105 6.143717 0 12.287435 3.583835 15.87127 9.215576l6.655694 6.143717c87.035996 94.715643 135.161783 217.589991 135.161782 345.584103 0 139.769571-55.805433 270.323565-157.688746 368.111067 0-0.511976-16.895223 14.847317-23.03894 14.847317z m-114.682725-143.865382c-10.751505 0-19.455105-8.7036-19.455105-19.455105 0-5.631741 2.559882-11.263482 7.679647-14.847317l5.631741-7.679647c42.494045-51.709621 66.044962-116.73063 66.044962-183.799545 0-68.604844-24.062893-134.649806-68.604845-186.871404l0.511977-0.511977-5.631741-6.143717c-3.583835-3.583835-5.631741-8.191623-5.631741-13.311388 0-10.751505 8.7036-19.455105 19.455105-19.455105 8.191623 0 14.335341 4.095812 16.383246 7.167671l5.119765 7.16767c50.173692 59.389268 77.82042 134.13783 77.82042 211.95825s-27.646728 152.057005-77.308444 211.446273l-6.143717 6.143718c-4.607788 5.631741-10.239529 8.191623-15.87127 8.191623zM551.910612 1024c-27.134752 0-55.805433-13.311388-82.428208-38.91021l-225.269638-218.613944H110.074937C40.958116 766.475846 0 725.005754 0 654.86498V368.670145c0-70.65275 39.934163-111.610866 110.074937-111.610866h134.137829l225.269638-218.613943C506.344708 3.630937 548.838753-8.656498 583.653152 6.190819c36.862304 15.87127 58.365315 58.365315 58.365315 116.218654V901.125652c0 58.365315-20.991034 100.85936-58.365315 116.218654-10.751505 4.607788-20.991034 6.655694-31.74254 6.655694zM110.074937 308.256924c-40.958116 0-58.877292 17.919176-58.877292 60.413221v286.194835c0 40.958116 18.431152 60.413221 58.877292 60.413221h154.616887l240.116955 232.949285c21.503011 20.479058 43.006022 28.670681 58.365315 22.014987 16.895223-7.16767 27.134752-33.278469 27.134752-69.628797v-778.204203c0-35.838351-10.239529-61.94915-27.134752-69.11682-15.359293-6.655694-37.374281 1.535929-58.365315 22.014987L264.691824 308.256924H110.074937z"
                            p-id="6508"
                            fill="#ffffff"
                          />
                        </svg>
                      </div>
                      <div class="voi_off_btn" ref="voi_off_btn">
                        <div class="voi_off_btn_line"></div>
                        <div class="voi_off_btn_line" style="transform:rotate(-45deg)"></div>
                      </div>
                    </div>
                  </div>
                  <div class="voi_song_list_arg_deco"></div>
                </div>
              </div>
              <!-- voi_song_list_relative -->
            </div>
          </div>
        </div>
        <div class="voi_child" title="下一首" ref="voi_child_2">
          <div class="voi_arrow_right">
            <div class="voi_arrow_left_line"></div>
            <div class="voi_arrow_left_line"></div>
          </div>
          <div class="voi_child_content"></div>
        </div>
        <div class="voi_child" title="随机播放" ref="voi_child_3">
          <div class="voi_random_ico">
            <svg viewBox="0 0 1024 1024">
              <path
                d="M912 311.9c0 4.1-1.3 7.6-4 10.2l-142.9 143c-2.7 2.7-6.1 4-10.2 4-3.8 0-7.2-1.4-10-4.2-2.8-2.8-4.2-6.2-4.2-10v-85.7H626.3c-14.3 0-27.2 2.3-38.9 6.7-11.6 4.5-21.9 11.2-30.8 20.1-8.9 8.9-16.5 18.1-22.7 27.4-6.3 9.4-13 20.9-20.1 34.6-9.5 18.5-21.1 43.9-34.8 76.3-8.6 19.6-16 36.2-22.1 49.6-6.1 13.4-14.2 29-24.1 46.9s-19.5 32.8-28.5 44.6c-9.1 11.9-20.1 24.2-33.1 37.1-13 12.8-26.4 23-40.2 30.6-13.8 7.6-29.7 13.8-47.5 18.8-17.8 4.9-36.9 7.3-57.2 7.3h-100c-4.1 0-7.6-1.3-10.2-4-2.7-2.6-4-6-4-10.1v-85.7c0-4.1 1.3-7.6 4-10.2 2.7-2.7 6.1-4 10.2-4h100c14.3 0 27.2-2.3 38.9-6.7 11.6-4.5 21.9-11.2 30.8-20.1 8.9-8.9 16.5-18.1 22.7-27.4 6.3-9.4 13-20.9 20.1-34.6 9.5-18.4 21.1-43.9 34.8-76.3 8.6-19.6 16-36.2 22.1-49.6 6.1-13.4 14.2-29 24.1-46.9 10-17.8 19.5-32.8 28.5-44.6 9.1-11.9 20.1-24.2 33.1-37.1 13-12.8 26.4-23 40.2-30.6 13.8-7.6 29.7-13.8 47.5-18.8 17.8-4.9 36.9-7.3 57.2-7.3h114.3v-85.7c0-4.1 1.3-7.6 4-10.2 2.7-2.7 6.1-4 10.2-4 3.6 0 7.1 1.5 10.7 4.5L908 301.9c2.7 2.4 4 5.9 4 10z m-502.7 43.3c-17.8 27.4-38.2 68-61.1 121.9-6.6-13.4-12-24.1-16.5-32.4-4.5-8.2-10.5-17.7-18.1-28.4-7.6-10.7-15.2-19.2-22.7-25.3-7.6-6.1-17-11.3-28.2-15.6-11.2-4.3-23.3-6.5-36.4-6.5h-99.9c-4.1 0-7.6-1.3-10.2-4-2.7-2.7-4-6.1-4-10.2V269c0-4.1 1.3-7.6 4-10.2 2.7-2.7 6.1-4 10.2-4h100c74.2-0.1 135.3 33.4 182.9 100.4zM912 711.9c0 4.1-1.3 7.6-4 10.2l-142.9 143c-2.7 2.7-6.1 4-10.2 4-3.8 0-7.2-1.4-10-4.2s-4.2-6.2-4.2-10v-85.7c-9.5 0-22.2 0.1-37.9 0.2-15.8 0.2-27.8 0.3-36.2 0.5-8.4 0.2-19.2 0-32.6-0.5s-23.9-1.2-31.7-2.3c-7.7-1-17.3-2.6-28.5-4.7-11.3-2.1-20.7-4.8-28.2-8.3-7.4-3.4-16.1-7.7-25.9-12.8-9.9-5.1-18.6-11-26.4-17.8-7.7-6.9-16-14.8-24.6-23.8-8.6-9.1-17-19.4-25-31 17.6-27.7 37.8-68.3 60.8-121.9 6.6 13.4 12 24.2 16.5 32.4s10.5 17.7 18.1 28.4c7.6 10.7 15.2 19.2 22.7 25.3 7.6 6.1 17 11.4 28.2 15.6 11.2 4.3 23.3 6.5 36.4 6.5h114.3v-85.7c0-4.1 1.3-7.6 4-10.2 2.7-2.7 6.1-4 10.2-4 3.6 0 7.1 1.5 10.7 4.5L908 702c2.7 2.3 4 5.8 4 9.9z"
                fill="#ffffff"
              />
            </svg>
          </div>
          <div class="voi_child_content"></div>
        </div>
        <div class="voi_child" title="上一首" ref="voi_child_4">
          <div class="voi_arrow_left">
            <div class="voi_arrow_left_line"></div>
            <div class="voi_arrow_left_line"></div>
          </div>
          <div class="voi_child_content"></div>
        </div>
      </section>
      <!-- voi_child_box -->
      <section class="voi_main_box" ref="voi_main_box">
        <div class="voi_main_svg_box" ref="voi_main_svg_box">
          <svg viewBox="0 0 1024 1024" width="50">
            <path class="play_svg voi_svg" ref="play_svg" />
          </svg>
        </div>
        <div class="voi_main_content"></div>
      </section>
    </section>
    <audio ref="voinoAudio" autoplay :src="musicPlayer.songSrc"></audio>
    <!-- voi_container -->
  </div>
</template>
<script>
export default {
  name: "voinoBtn",
  data() {
    return {
      musicPlayer: {
        songName: "暂无",
        // songSrc:'http://www.sbeam.xyz/voinoVue/static/audios/april02.mp3',
        songSrc: "暂无",
        songAuthor: "暂无"
      }
    };
  },
  mounted() {
    let _this = this;
    let voi_is_on = true;
    this.$refs.voi_main_box.onmouseup = () => {
      if (voi_is_on) {
        play_svg.style.d = "path('M128 128h768v768H128z')";
        voi_main_svg_box.style.paddingLeft = "0px";
        startMusic(voi_is_on);
        voi_is_on = !voi_is_on;
      } else {
        play_svg.style.d =
          "path('M862.7 528L178.4 908.3c-7.9 4.4-14.7 5-20.4 1.5-5.6-3.5-8.5-9.6-8.5-18.5V132.8c0-8.9 2.8-15.1 8.5-18.5 5.6-3.5 12.5-2.9 20.4 1.5L862.7 496c7.9 4.4 11.8 9.8 11.8 15.9 0 6.3-4 11.7-11.8 16.1z')";
        voi_main_svg_box.style.paddingLeft = "10px";
        startMusic(voi_is_on);
        voi_is_on = !voi_is_on;
      }
    };
    //获取元素
    const [
      voi_song_list,
      voi_song_list_box,
      voi_song_list_operate_box,
      voi_off_btn,
      voi_container,
      play_svg,
      voi_main_svg_box
    ] = [
      this.$refs.voi_song_list,
      this.$refs.voi_song_list_box,
      this.$refs.voi_song_list_operate_box,
      this.$refs.voi_off_btn,
      this.$refs.voi_container,
      this.$refs.play_svg,
      this.$refs.voi_main_svg_box
    ];
    // let dragStage = document.getElementsByClassName('dragStage')[0];
    let [x, y, l, t, isDown] = [0, 0, 0, 0, false];
    //鼠标按下事件
    voi_container.onmousedown = function(e) {
      //获取x坐标和y坐标
      x = e.clientX;
      y = e.clientY;
      // dragStage.style.zIndex = 1;
      //获取左部和顶部的偏移量
      l = voi_container.offsetLeft;
      t = voi_container.offsetTop;
      //开关打开
      isDown = true;
      //设置样式
      voi_container.style.cursor = "move";
      voi_container.style.transition = "none";
    };
    //鼠标移动
    window.onmousemove = function(e) {
      if (isDown == false) {
        return;
      }
      //获取x和y
      // dragStage.style.zIndex = 1;
      let nx = e.clientX;
      let ny = e.clientY;
      //计算移动后的左偏移量和顶部的偏移量
      let nl = nx - (x - l);
      let nt = ny - (y - t);

      voi_container.style.left = nl + "px";
      voi_container.style.top = nt + "px";
    };
    //鼠标抬起事件
    voi_container.onmouseup = function() {
      //开关关闭
      isDown = false;
      // dragStage.style.zIndex = "-1";
      voi_container.style.cursor = "default";
      voi_container.style.transition = "all 0.3s ease";
    };

    // 以下为歌单操作
    let _songListIsOn = false;
    //歌单展开
    function _songListFun() {
      if (_songListIsOn == false) {
        voi_song_list.setAttribute("class", "voi_child_is_on");
        voi_song_list.style.cssText = "top:-60px;cursor:default;";
        voi_song_list_box.style.cssText = "opacity:1;pointer-events:auto;";
        voi_song_list_operate_box.style.width = "230px";
        //歌单详情展开后进行偏移
        voi_container.style.left = voi_container.offsetLeft - 170 + "px";
        voi_song_list.onmousedown = event => {
          window.event
            ? (window.event.cancelBubble = true)
            : e.stopPropagation();
        };
      }
      _songListIsOn = true;
    }
    voi_song_list.onclick = () => {
      _songListFun();
    };

    //歌单关闭
    function _songListOffFun() {
      voi_song_list.setAttribute("class", "voi_child");
      voi_song_list.style.cssText = "top:0px;cursor:pointer;";
      voi_song_list_box.style.cssText = "opacity:0;pointer-events:auto;";
      voi_song_list_operate_box.style.width = "0px";
      voi_container.style.left = voi_container.offsetLeft + 140 + "px";
      window.event ? (window.event.cancelBubble = true) : e.stopPropagation();
      _songListIsOn = false;
    }
    voi_off_btn.onclick = () => {
      _songListOffFun();
    };
    // 以上为歌单操作

    //开始音乐播放逻辑
    const vAudio = _this.$refs.voinoAudio;
    const songSrcArr = [
      "http://www.sbeam.xyz/voinoVue/static/audios/april02.mp3",
      "http://www.sbeam.xyz/voinoVue/static/audios/柏大輔 - Stella.mp3",
      "http://www.sbeam.xyz/voinoVue/static/audios/ササノマリイ - 共感覚おばけ.mp3",
      "http://www.sbeam.xyz/voinoVue/static/audios/アンクローズ・ヒューマン.mp3"
    ];
    const songNameArr = [
      "april.#02",
      "Stella",
      "ササノマリイ - 共感覚おばけ",
      "アンクローズ・ヒューマン"
    ];
    const songAuthorArr = ["柏大輔", "柏大輔", "ササノマリイ", "未知作者"];
    let songIndex = 0;
    //开始播放音乐
    function musicInfo() {
      _this.$set(_this.musicPlayer, "songSrc", songSrcArr[songIndex]);
      _this.$set(_this.musicPlayer, "songAuthor", songAuthorArr[songIndex]);
      _this.$set(_this.musicPlayer, "songName", songNameArr[songIndex]);
    }
    function startMusic(isPlay) {
      if (isPlay == true) {
        musicInfo();
        vAudio.play();
      } else {
        vAudio.pause();
      }
    }

    //下一曲
    function nextMusic() {
      if (songIndex < songSrcArr.length - 1) {
        songIndex++;
      } else {
        songIndex = 0;
      }
    }
    this.$refs.voi_child_2.onmousedown = function() {
      nextMusic();
      musicInfo();
      play_svg.style.d = "path('M128 128h768v768H128z')";
      voi_main_svg_box.style.paddingLeft = "0px";
      vAudio.play();
      voi_is_on = false;
      console.log(songIndex);
    };

    //上一首
    function previousMusic() {
      if (songIndex <= 0) {
        songIndex = songSrcArr.length - 1;
      } else {
        songIndex--;
      }
    }
    this.$refs.voi_child_4.onmousedown = function() {
      previousMusic();
      musicInfo();
      play_svg.style.d = "path('M128 128h768v768H128z')";
      voi_main_svg_box.style.paddingLeft = "0px";
      vAudio.play();
      voi_is_on = false;
      console.log(songIndex);
    };

    //随机播放
    function randomMusic() {
      songIndex = Math.ceil(Math.random() * songSrcArr.length - 1);
    }
    this.$refs.voi_child_3.onmousedown = function() {
      randomMusic();
      musicInfo();
      play_svg.style.d = "path('M128 128h768v768H128z')";
      voi_main_svg_box.style.paddingLeft = "0px";
      vAudio.play();
      voi_is_on = false;
      console.log(songIndex);
    };

    //解决在调用play()时音频文件未加载完毕导致报错问题
    vAudio.load();
    let playPromise = vAudio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          vAudio.play();
        })
        .catch(() => {});
    }
  }
};
</script>
<style scoped>
@import url("../assets/css/voinoBtn.css");
</style>