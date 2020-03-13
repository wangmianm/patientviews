<template>
  <div class="page-content-wrapper">
    <breadcrumb/>
    <div class="page-content">
        <div class="page-main">
            <div class="card-panel">
              <el-form :inline="true" :model="formInline" class="demo-form-inline">
                <el-form-item label="患者姓名：">
                  <el-input v-model="formInline.name" placeholder="患者姓名"></el-input>
                </el-form-item>
                <el-form-item label="就诊类型：">
                  <el-select v-model="formInline.ClinicType" placeholder="就诊类型">
                    <el-option label="门诊" value="01"></el-option>
                    <el-option label="住院" value="02"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="就诊时间：">
                  <el-date-picker
                    v-model="formInline.date"
                    type="date"
                    placeholder="选择日期">
                  </el-date-picker>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="onSubmit">搜索</el-button>
                </el-form-item>
              </el-form>
            </div>
          <el-table
              :data="tableData"
              stripe
              size="medium"
              style="width: 100%">
              <el-table-column
                label="收藏"
                width="100">
                <template slot-scope="scope">
                    <el-button type="text" @click="dialogFormVisible = true">
                        <i v-if="scope.row.collect == 0" style="font-size: 20px; cursor:pointer" class="el-icon-star-off"></i>
                        <i v-else class="el-icon-star-on" style="font-size: 24px; cursor:pointer"></i>
                    </el-button>
                    <el-dialog title="患者收藏" :visible.sync="dialogFormVisible" :close-on-click-modal="false" width="35%">
                        <el-table
                            :data="collectData"
                            stripe
                            size="medium"
                            :show-header="false"
                            style="width: 100%">
                            <el-table-column
                            prop="name"
                            label="标题">
                            </el-table-column>
                            <el-table-column
                            prop="state"
                            label="状态"
                            align="right">
                                <template slot-scope="scope">
                                    <el-button type="primary" v-if="scope.row.state==0" size="medium" plain @click="collectClick(scope.$index,scope.row)">收藏</el-button>
                                    <el-button type="primary" v-else size="medium" @click="collectClick(scope.$index,scope.row)">已收藏</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                        <el-dialog
                        width="30%"
                        title="创建收藏类型标题"
                        :visible.sync="innerVisible"
                        append-to-body
                        :close-on-click-modal="false"
                        >
                         <el-form  ref="dataForm">
                            <el-form-item :model="form" label="收藏标题:" :label-width="formLabelWidth">
                            <el-input v-model="form.title" size="medium" autocomplete="off" placeholder="收藏标题" style="width: 300px;"></el-input>
                            </el-form-item>
                        </el-form>
                        <div slot="footer" class="dialog-footer">
                            <el-button @click="innerVisible = false">返回</el-button>
                            <el-button type="primary" @click="affirm" :disabled="!isdisabled">确认创建</el-button>
                        </div>
                        </el-dialog>
                        <div slot="footer" class="dialog-footer">
                            <el-button type="primary" @click="handleCancel('form')">添加收藏类型</el-button>
                        </div>
                    </el-dialog>
                </template>
              </el-table-column>
              <el-table-column
                prop="ClinicTypes"
                label="就诊类型"
                width="130">
              </el-table-column>
              <el-table-column
                prop="date"
                label="就诊时间"
                width="180">
              </el-table-column>
              <el-table-column
                prop="hospital"
                label="就诊医院"
                 width='230'>
              </el-table-column>
              <el-table-column
                prop="Departments"
                label="科室"
                width='150'>
              </el-table-column>
              <el-table-column
                prop="name"
                label="患者姓名">
              </el-table-column>
              <el-table-column
                prop="age"
                label="患者年龄">
              </el-table-column>
              <el-table-column
                prop="diagnose"
                label="诊断结果"
                width='300'>
              </el-table-column>
              <el-table-column
                label="患者详情">
                <template slot-scope="scope">
                    <el-button
                    @click.native.prevent="detailClick(scope.row)"
                    type="text"
                    size="medium">
                    患者详情
                    </el-button>
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
                :total="tableData.length">
            </el-pagination>
        </div>
    </div>  
  </div>
</template>
<script>
import breadcrumb from '../../components/breadcrumb'
import "@/styles/record.scss"
import { formatDate } from "@/util/moment";
export default {
    components: {
        breadcrumb
    }, 
    data() {
      return {
        formInline: {
          name: '',
          ClinicType: '',
          date: ''
        },
        tableData:[
            {collect:0, ClinicTypes: "门诊", date: "2020-02-11", hospital: "第二中医院", Departments: "内科", name: "王二", age: "29", diagnose:"过敏性鼻炎"},
            {collect:1, ClinicTypes: "住院", date: "2020-02-01", hospital: "第三医院", Departments: "外科", name: "赵四", age: "40", diagnose:"肠胃炎"}
        ],
        dialogFormVisible: false,
        innerVisible: false,
        form: {
            title: ''
        },
        formLabelWidth: '80px',
        collectData:[],
        currentPage: 1,
        pagesize: 10,
      }
    },
     methods: {
      onSubmit() {
        let input = {};
        input.name = this.formInline.name;
        input.type = this.formInline.ClinicType;
        input.date = formatDate(new Date(this.formInline.date), "yyyy-MM-dd");
      },
      detailClick(row) {
          console.log(row);
      },
    //重置表单  
    handleCancel(form){ 
        this.innerVisible = true;
        this.form = Object.assign({}, form)
        this.$nextTick(()=>{
            this.$refs['dataForm'].resetFields();
        });
    },
      //确认创建收藏夹
      affirm(){
          let obj = {};
          obj.name = this.form.title;
          obj.state = 0;
          this.collectData.push(obj);
          this.innerVisible = false;
      },
      //收藏
      collectClick(index,row){
          if(row.state==0){
              row.state = 1;
          }else {
              row.state = 0;
          }
      },
      // 初始页currentPage、初始每页数据数pagesize
        handleSizeChange: function(size) {
            this.pagesize = size;
        },
        handleCurrentChange: function(currentPage) {
            this.currentPage = currentPage;
        },
    },
    computed: {
        isdisabled () {
            return !!this.form.title;
        }
    }
}
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