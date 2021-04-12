<template>
  <div class="about">
    <h1>About page</h1>
    <h2>About me!</h2>
    <p>This website was made by <i>Himar Manuel Barquín Carrasco</i>.</p>
    <div class="img-author">
      <div class="img" />
      <p class="img-footer">
        Himar Barquín
        <br>
        A Junior FullStack Web Developer
      </p>
    </div>
    <p>
      Hi! I'm Himar, a Junior FullStack Web Developer. I love learning new things,
      especially when are related to developing or programming. I also love good practices
      such as SOLID principles, testing and design patterns, and when I'm not doing programmer
      things I'm playing any playstation or PC game.
      <br>
      Those called <i>frikies</i>, that's me!
    </p>
    <h2>Check out my social media!</h2>
    <div class="social-media">
      <a
        target="_blank"
        class="twitter"
        :href="twitter"
      >
        <font-awesome-icon
          :icon="['fab', 'twitter-square']"
        />
      </a>
      <a
        target="_blank"
        class="linkedin"
        :href="linkedin"
      >
        <font-awesome-icon
          :icon="['fab', 'linkedin']"
        />
      </a>
      <a
        target="_blank"
        class="github"
        :href="github"
      >
        <font-awesome-icon
          :icon="['fab', 'github-square']"
        />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      twitter: 'https://twitter.com/BarquinHimar',
      github: 'https://github.com/XavYan',
      linkedin: 'https://linkedin.com/in/hbarquin'
    }
  }
}
</script>

<style lang="scss" scoped>
.about {
  padding: 0 50px 50px 50px;

  .img-author {
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    .img {
      width: 200px;
      height: 200px;
      background-image: url('../assets/himar.jpg');
      background-repeat: no-repeat;
      background-size: 110%;
      background-position-x: -9px;
      background-position-y: -9px;
      border-radius: 50%;
    }

    .img-footer {
      font-size: 14px;
      font-style: italic;
      opacity: .5;
      text-align: center;
    }
  }

  h2 {
    margin-bottom: 0;
  }

  .social-media {
    font-size: 50px;

    & > a {
      margin: 0;
    }

    a:first-child :first-child {
      margin-left: 0;
    }

    a:last-child :first-child {
      margin-right: 0;
    }

    & > a :nth-child(n) {
      margin: 0 10px;
      cursor: pointer;
    }

    .twitter {
      color: #00ACEE;

      &:hover {
        color: #57CFFF;
      }
    }

    .linkedin {
      color: #0E76A8;

      &:hover {
        color: #2FB2EE;
      }
    }

    .github {
      color: #171515;

      &:hover {
        color: #595656;
      }
    }
  }
}
</style>
