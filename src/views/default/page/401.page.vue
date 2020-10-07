<template>
  <div class="not-found">
    <div>
      401
    </div>
    <div>
      Permission denied
    </div>
  </div>
</template>

<style scoped lang="scss">
  .not-found {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 80vh !important;

    div:first-child {
      color: #409eff;
      font-size: 120px;
      font-weight: bold;
    }

    div:last-child {
      color: #409eff;
      font-size: 60px;
    }
  }

</style>
