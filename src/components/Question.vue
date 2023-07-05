<template>
  <div class="question-container">
    <h1 class="question">What is the chemical value of ?</h1>
    <div class="options-container">
      <div class="option">
        <p class="option-label">A</p>
        <div class="option-value">
          <p>NaCl</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.options-container {
  margin-top: 20px;
}

.option {
  display: flex;
  margin-bottom: 20px;
  cursor: pointer;
}

.option-label {
  background: blueviolet;
  width: 50px;
  height: 50px;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-content: center;
}

.option-value {
  background: rgb(95, 20, 165);
  width: 100%;
  font-size: 30px;
  padding: 0 20px;
}
</style>
