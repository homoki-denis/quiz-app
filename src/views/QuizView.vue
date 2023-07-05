<script setup>
import QuizHeader from "../components/QuizHeader.vue";
import Question from "../components/Question.vue";

import quizzes from "../data/quizzes.json";
import { useRoute } from "vue-router";

const route = useRoute();

const quizID = parseInt(route.params.id);

const quiz = quizzes.find((q) => q.id === quizID);
</script>

<template>
  <div class="container">
    <QuizHeader />
    <div>
      <Question />
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1100px;
  margin: 0 auto;
}
</style>
