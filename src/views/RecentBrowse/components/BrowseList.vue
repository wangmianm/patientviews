<template>
  <div class="infoList">
    <el-form :inline="true" ref="formData" :model="formInline" class="demo-form-inline">
      <el-form-item label="患者姓名：">
        <el-input v-model="formInline.name" placeholder="患者姓名"></el-input>
      </el-form-item>
      <el-form-item label="就诊类型：">
        <el-select v-model="formInline.ClinicType" placeholder="请选择">
          <el-option label="门诊" value="01"></el-option>
          <el-option label="住院" value="02"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="科室：">
        <el-select v-model="formInline.Departments" placeholder="请选择">
          <el-option label="内科" value="1"></el-option>
          <el-option label="外科" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">搜索</el-button>
        <el-button type="danger" icon="el-icon-delete" @click="clear('formInline')">清空记录</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" stripe size="medium" style="width: 100%">
        <el-table-column prop="BrowseDate" label="浏览日期"></el-table-column>
        <el-table-column prop="name" label="患者姓名"></el-table-column>
        <el-table-column prop="age" label="患者年龄"></el-table-column>
        <el-table-column prop="sex" label="患者性别"></el-table-column>
        <el-table-column prop="ClinicTypes" label="就诊类型"></el-table-column>
        <el-table-column prop="diagnose" label="诊断结果"></el-table-column>
        <el-table-column label="患者详情">
        <template slot-scope="scope">
          <el-button @click.native.prevent="detailClick(scope.row)" type="text" size="medium">患者详情</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
        align="right"
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 40,50]"
        :page-size="pagesize"
        layout=" prev, pager, next, sizes, jumper"
        :total="tableData.length"
    ></el-pagination>
  </div>
</template>
<script>
import "@/styles/record.scss"
export default {
  data() {
    return {
        formInline: {
            name: "",
            ClinicType: "",
            Departments: ""
        },
        tableData:[
            {BrowseDate: '2020-01-21',name: '小明', age: 29, sex:"男", ClinicTypes: '门诊', diagnose: '肠胃炎'},
            {BrowseDate: '2020-02-01',name: '翠芬', age: 24, sex:"女", ClinicTypes: '门诊', diagnose: '过敏性鼻炎'},
            {BrowseDate: '2020-01-11',name: '明明', age: 34, sex:"男", ClinicTypes: '住院', diagnose: '哮喘'},
            {BrowseDate: '2020-01-03',name: '大华', age: 40, sex:"男", ClinicTypes: '门诊', diagnose: '扁桃体发炎'},
            {BrowseDate: '2020-01-19',name: '小红', age: 20, sex:"女", ClinicTypes: '住院', diagnose: '急性阑尾炎'},
        ],
        currentPage: 1,
        pagesize: 10,
    };
  },
  methods: {
    //查询数据
    onSubmit() {
        
    },
    //清空记录
    clear(formInline) {
      this.formInline = Object.assign({}, formInline);
      this.$nextTick(() => {
        this.$refs["formData"].resetFields();
      });
    },
    //患者详情
    detailClick(row){
        console.log(row);
    },
     // 初始页currentPage、初始每页数据数pagesize
    handleSizeChange: function(size) {
        this.pagesize = size;
    },
    handleCurrentChange: function(currentPage) {
        this.currentPage = currentPage;
    },
  }
};
</script>
<style lang="scss" scoped>
.infoList{
    .el-form {
        float: left;
        margin-top: 10px;
    }
    .el-pagination {
        padding-top: 20px;
    }
}

</style>