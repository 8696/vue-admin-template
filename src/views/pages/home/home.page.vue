<template>
  <div class="page">

    <dashboard-card-component/>

    <el-row>
      <div class="card">
        <div class="card-title">
          用户数量
        </div>
        <div class="card-body">
<!--          <line01-component/>-->
        </div>
      </div>
    </el-row>

    <el-row>
      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
        <div class="card">
          <div class="card-title">
            站点数据
          </div>
          <div class="card-body">
<!--            <funnel-component/>-->
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
        <div class="card">
          <div class="card-title">
            用户数量
          </div>
          <div class="card-body">
<!--            <line01-component/>-->
          </div>
        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
  const DashboardCardComponent = () => import('@/views/general/dashboard-card/dashboard-card.component');
  // anvt-g2
  // const Line01Component = () => import('@/views/general/antv-g2/g2-line/line-basic.component');
  // const FunnelComponent = () => import('@/views/general/antv-g2/g2-funnel/funnel-basic.componeent');

  export default {

    components: {
      DashboardCardComponent,
      // Line01Component,
      // FunnelComponent
    }

  };
</script>

