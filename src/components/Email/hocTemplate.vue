<template>
  <div class="hocTemplate">
    <v-row no-gutters>
<div class= "paddingColumn" />
      <div>
          <div class="newsLetter">
          <img class="headerImage" src="https://res.cloudinary.com/nelsondsilva/image/upload/v1594842507/houseBlank.png" />
          <div style="background-color: rgba(255,255,255,.9)">
              <p class="letterGreeting" >Hello from House Of Clay</p>
        <img class="newsImage" :src="image1" />
                <p class="letterSectionTitle">{{intro}}</p>
       <p class="letterContent"> {{paragraph}}</p>
        
          </div>
          <div style="background-color: rgba(255,255,255,.8)">
        <img class="newsImage" :src="image2" />
  <p class="letterSectionTitle">
        {{secondHeadline}}</p>
    <p class="letterContent">      {{paragraph2}}</p>
          </div>
          <div style="background-color: rgba(255,255,255,.7)">
              <v-row>
                  <v-col>
                        <img :src="image3" />
                  </v-col>
                <v-col>
                    <p class="quote">              {{quote}}</p>
                  </v-col>
              </v-row>
          </div>
        {{shareParagraph}}
        </div>

      </div>
    </v-row>
  </div>
</template>
<script>
export default {
  props: {
    intro: String,
    paragraph: String,
    secondHeadline: String,
    paragraph2: String,
    quote: String,
    shareParagraph: String,
    image1: String,
    image2: String,
    image3: String
  }
};
</script>
<style scoped>
.newsImage{
    margin-left: 400px;
    width: 200px;
}
.hocTemplate {
  background-color: #ff4ffc;
  background-image: url("https://res.cloudinary.com/nelsondsilva/image/upload/v1594859508/Screen_Shot_2020-07-15_at_5.30.52_PM.png");
  background-attachment: fixed;
  background-size: cover;
  width: 1400px;
  margin: 0;
  padding: 0;
}
.headerImage{
    width: 600px;
    margin-left: 200px;
}
.paddingColumn {
width: 200px;
}
.newsLetter{
    width:1000px;
    margin: 0px;

}
.letterContent{
text-align: center;
}
.letterSectionTitle{
    font-weight: bold;
    font-size: 1.5em;
    text-align: center;
}
.letterGreeting{
    font-weight: bold;
    font-size: 2.8em;
    text-align: center;
}
</style>
