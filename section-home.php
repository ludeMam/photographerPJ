<link rel="stylesheet" href="./css/section-home-1.css">
<link rel="stylesheet" href="./css/section-home-2.css">
<script src="./js/section-home-1.js"></script>
<script src="./js/section-home-2.js"></script>
<!--section-container------------------------------------------------------------------------>
<section class="section-home section-container section-container1" data-section-number="1">
  <a class="btn-page" href="#home" data-section=".section-home" data-section-number="1">home</a>
  <!-- video section ------------------------------------------------------------------------------------->
  <section class="section-video-intro">
    <video src="./video/video-home.mp4" muted autoplay loop playsinline></video>
    <img class="video-mask-img" src="./img/icons/video-mask-home.png" alt="">
    <?php //include "section-photo2-svg.php" 
    ?>
    <h6>
      <span>
        DARK AND MOODY & <br>
        LOW LIGHT PHOTOGRAPHY
      </span>
    </h6>
  </section>
  <!--home-section-1--------------------------------------------------------------->
  <section class="yj-home-section-1">
    <div class="inner-center">

      <div class="home-figure-wrap">
        <img class="deco" src="./img/home/visualMaskbg.png" alt="">
        <figure class="home-figure">
          <img class="bg" src="./img/home/visualImg1.png" alt="">
          <img class="man" src="./img/home/visualImg2.png" alt="">
        </figure>
      </div>

      <div class="textbox">
        <figure class="textbox-bg">
          <img class="bg" src="./img/home/profile4-bg.jpg" alt="">
          <img class="man" src="./img/home/profile4-man.png" alt="">
        </figure>
        <img class="photo" src="./img/home/man.png" alt="">
        <h2><span>What is Photo</span></h2>
        <p class="icon-font">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        </p>
      </div>
    </div><!-- inner-center -->
  </section>
  <!--home-section-2--------------------------------------------------------------->
  <section class="yj-home-section-2">
    <h2 class="hidden">identify</h2>
    <img src="./img/home/section2-bg-2.png" class="section-bg section-bg-2" alt="">
    <img src="./img/home/section2-bg.png" class="section-bg section-bg-1" alt="">
    <div class="camera-gallery">
      <div class="camera-gallery-inner">
        <figure class="img-back-container">
          <script>
            for (i = 1; i <= 10; i++) {
              if (i === 1) {
                document.write('<img class="active img-back-1" src="./img/home/photo1.jpg" alt="">')
              } else {
                document.write('<img class="img-back-' + i + '" src="./img/home/photo' + i + '.jpg" alt="">')
              }
            }
          </script>
        </figure>
        <!--img-back-container-->
        <img class="camera-img" src="./img/home/section2-camera.png" alt="">
        <figure class="img-lenz-container">
        <script>
            for (i = 1; i <= 10; i++) {
              if (i === 1) {
                document.write('<img class="active img-lenz-1" src="./img/home/photo1.jpg" alt="">')
              } else {
                document.write('<img class="img-lenz-' + i + '" src="./img/home/photo' + i + '.jpg" alt="">')
              }
            }
          </script>       
        </figure>      
      </div>
    </div><!-- camera -->
    <div class="inner-center clearfix">
      <!-- textbox ------------------------------------------------------------------>
      <div class="textbox textbox1">
        <div class="textbox-inner">
          <h3>What is Lorem Ipsum?</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          </p>
        </div><!-- inner -->
        <span class="line"></span>
      </div>
      <!--textbox-->
      <div class="textbox textbox2">
        <div class="textbox-inner">
          <h3>What is Lorem Ipsum?</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          </p>
        </div><!-- inner -->
        <span class="line"></span>
      </div>
      <!--textbox-->
      <div class="textbox textbox3">
        <div class="textbox-inner">
          <h3>What is Lorem Ipsum?</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          </p>
        </div><!-- inner -->
        <span class="line"></span>
      </div>
      <!--textbox-->
      <div class="textbox textbox4">
        <div class="textbox-inner">
          <h3>What is Lorem Ipsum?</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          </p>
        </div><!-- inner -->
        <span class="line"></span>
      </div>
      <!--textbox-->
      <div class="textbox textbox5">
        <div class="textbox-inner">
          <h3>What is Lorem Ipsum?</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          </p>
        </div><!-- inner -->
        <span class="line"></span>
      </div>
      <!--textbox-->
      <div class="textbox textbox6">
        <div class="textbox-inner">
          <h3>What is Lorem Ipsum?</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          </p>
        </div><!-- inner -->
        <span class="line"></span>
      </div>
      <!--textbox-->
      <div class="textbox textbox7">
        <div class="textbox-inner">
          <h3>What is Lorem Ipsum?</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          </p>
        </div><!-- inner -->
        <span class="line"></span>
      </div>
      <!--textbox-->
      <div class="textbox textbox8">
        <div class="textbox-inner">
          <h3>What is Lorem Ipsum?</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          </p>
        </div><!-- inner -->
      </div>
      <!--textbox-->

    </div><!-- inner-center -->
  </section>
</section>