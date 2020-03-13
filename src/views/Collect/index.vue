<template>
  <div class="page-content-wrapper">
    <breadcrumb />
    <div class="page-content">
      <div class="page-main">
        <div class="card-panel">
          <el-form :inline="true" ref="formData" :model="formInline" class="demo-form-inline">
            <el-form-item label="患者姓名：">
              <el-input v-model="formInline.name" placeholder="患者姓名"></el-input>
            </el-form-item>
            <el-form-item label="就诊类型：">
              <el-select v-model="formInline.CollectType" placeholder="请选择">
                <el-option label="肿瘤" value="01"></el-option>
                <el-option label="肝炎" value="02"></el-option>
                <el-option label="肺炎" value="03"></el-option>
                <el-option label="肠胃炎" value="04"></el-option>
                <el-option label="鼻炎" value="05"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">搜索</el-button>
            </el-form-item>
          </el-form>
        </div>
        <el-table :data="tableData" stripe size="medium" style="width: 100%">
          <el-table-column prop="name" label="患者姓名"></el-table-column>
          <el-table-column prop="CollectTypes" label="就诊类型"></el-table-column>
          <el-table-column prop="age" label="患者年龄"></el-table-column>
          <el-table-column prop="sex" label="患者性别"></el-table-column>
          <el-table-column prop="diagnose" label="诊断结果"></el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                @click.native.prevent="cancelClick(scope.index,scope.row)"
                type="text"
                size="medium"
              >取消收藏</el-button>
            </template>
          </el-table-column>
          <el-table-column label="患者详情">
            <template slot-scope="scope">
              <el-button
                @click.native.prevent="detailClick(scope.row)"
                type="text"
                size="medium"
              >患者详情</el-button>
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
    </div>
  </div>
</template>
<script>
import breadcrumb from "@/components/breadcrumb"
import "@/styles/record.scss"
export default {
  components: {
    breadcrumb
  },
  data() {
    return {
      formInline: {
        name: "",
        CollectType: ""
      },
      tableData: [
        {
          name: "小明",
          age: 29,
          sex: "男",
          CollectTypes: "肿瘤",
          diagnose: "肠胃炎"
        },
        {
          name: "翠芬",
          age: 24,
          sex: "女",
          CollectTypes: "肝炎",
          diagnose: "过敏性鼻炎"
        },
        {
          name: "明明",
          age: 34,
          sex: "男",
          CollectTypes: "肺炎",
          diagnose: "哮喘"
        },
        {
          name: "大华",
          age: 40,
          sex: "男",
          CollectTypes: "肠胃炎",
          diagnose: "扁桃体发炎"
        },
        {
          name: "小红",
          age: 20,
          sex: "女",
          CollectTypes: "鼻炎",
          diagnose: "急性阑尾炎"
        }
      ],
      currentPage: 1,
      pagesize: 10
    };
  },
  methods: {
    //查询数据
    onSubmit() {},
    //取消收藏
    cancelClick($index,row) {
        
    },
    //患者详情
    detailClick(row) {
      console.log(row);
    },
    // 初始页currentPage、初始每页数据数pagesize
    handleSizeChange: function(size) {
      this.pagesize = size;
    },
    handleCurrentChange: function(currentPage) {
      this.currentPage = currentPage;
    }
  }
};
</script>
<style lang="scss" scoped>
.page-content-wrapper {
  padding: 20px;
  .page-content {
    background-color: white;
    padding: 20px;
    overflow: hidden;
    .card-panel {
      float: left;
    }
    .el-pagination {
      padding-top: 20px;
    }
  }
}
</style>