<template>
  <div class="page">

    <dashboard-card-component/>

    <el-row>
      <div class="container">
        <div class="container-title">
          用户数量
        </div>
        <div class="container-body">
          <line01-component :id="'a1'"/>
        </div>
      </div>
    </el-row>

    <el-row>
      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
        <div class="container">
          <div class="container-title">
            站点数据
          </div>
          <div class="container-body">
            <funnel01-component/>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
        <div class="container">
          <div class="container-title">
            用户数量
          </div>
          <div class="container-body">
            <line01-component :id="'a3'"/>
          </div>
        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>

  const DashboardCardComponent = () => import('@/components/general-component/dashboard-card/dashboard-card.component');
  // g2
  const Line01Component = () => import('@/components/general-component/g2-line/line-basic.component');
  const Funnel01Component = () => import('@/components/general-component/g2-funnel/funnel-basic.componeent');

  export default {

    components: {
      DashboardCardComponent,
      Line01Component,
      Funnel01Component
    }

  };
</script>

