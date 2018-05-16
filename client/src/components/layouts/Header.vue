<template>
  <div align="center" style="background-color: #f2f9fb;">
    <div style="width: 1024px;">
      <el-row>
        <el-col :span="12" align="left"><img class="logo" src="/public/images/logo.jpg" style="height: 40px;"></el-col>
        <el-col :span="12" align="right">
          <el-menu :default-active="activeIndex" style="border-bottom: 0; background-color: transparent;" mode="horizontal" @select="handleSelect">
            <el-menu-item class="nav-item" index="1"><i class="el-icon-location"></i>导航1</el-menu-item>
            <el-menu-item class="nav-item" index="2">导航2</el-menu-item>
            <el-menu-item class="nav-item" index="3">导航3</el-menu-item>
            <el-menu-item class="nav-item" index="4">导航4</el-menu-item>
            <el-menu-item class="nav-item" index="5">导航5</el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      activeIndex: '1'
    }
  },
  computed: {

  },
  methods: {

  }
}
</script>

<style scoped>
  .nav-item {
    height: 40px;
    line-height: 40px;
  }
</style>
