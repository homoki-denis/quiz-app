<script setup>
import quizzes from "../data/quizzes.json";
import { useRoute } from "vue-router";

const route = useRoute();

const quizID = parseInt(route.params.id);

const quiz = quizzes.find((q) => q.id === quizID);
</script>

<template>
  <div>
    <h1>{{ quiz.img }}</h1>
    <h1>{{ quiz.name }}</h1>
    <h1>{{ quiz.questions }}</h1>
  </div>
</template>
