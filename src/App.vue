<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="column">
          <h1>MoodSeeker<span>alpha</span></h1>
        </div>
      </div>
      <div class="row" v-for="mood in moods" :key="mood.id">
        <div class="column">{{ mood.url }}</div>
        <div class="column">
          <a class="button" href="#" v-for="tag in mood.tags" :key="tag.id">{{
            tag
          }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "./firebase";

export default {
  name: "App",
  data: function() {
    return { moods: [] };
  },
  firestore() {
    return {
      moods: db.collection("moods"),
    };
  },
};
</script>

<style>
h1 {
  text-align: center;
  line-height: 2;
}
h1 span {
  font-family: monospace;
  font-size: 10px;
}
a {
  margin: 0 0.1em;
}
</style>
