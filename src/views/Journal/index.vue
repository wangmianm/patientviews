<template>
  <div class="page-content-wrapper">
    <breadcrumb />
    <div class="page-content">
      <div class="page-main">
        <div class="card-panel card-main">
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span class="title">工作日志</span>
                    <el-button type="primary" style="float: right;" size="medium" @click="addClick('form')">新增</el-button>
                </div>
                <div class="text item">
                    <el-row :gutter="24">
                        <el-col :span="6">
                            <el-card class="box-card" shadow="never">
                                <div slot="header" class="clearfix">
                                    <span>进期待办事项</span>
                                </div>
                                <div class="text item">
                                    <div class="block">
                                        <el-timeline>
                                            <el-timeline-item
                                            v-for="(activity, index) in activities"
                                            :key="index"
                                            placement="top"
                                            :timestamp="activity.timestamp">
                                            {{activity.content}}
                                            </el-timeline-item>
                                        </el-timeline>
                                    </div>
                                </div>
                            </el-card>
                        </el-col>
                        <el-col :span="18">

                        </el-col>
                    </el-row>   
                </div>
            </el-card>
            <el-dialog title="新增工作日志" :visible.sync="dialogFormVisible" :close-on-click-modal="false" width="30%">
                <el-form :model="form" ref="dataForm">
                    <el-form-item label="标题：" :label-width="formLabelWidth">
                    <el-input v-model="form.name" clearable autocomplete="off" 
                    placeholder="输入2-18位文字"
                     :rules="[
                    { required: true, message: '标题不能为空'}
                    ]"></el-input>
                    </el-form-item>
                    <el-form-item label="日期：" :label-width="formLabelWidth">
                        <el-date-picker
                        v-model="form.date"
                        type="datetime"
                        placeholder="选择日期时间">
                        </el-date-picker>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button type="primary" @click="confirmClick">确 认</el-button>
                </div>
            </el-dialog>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
import breadcrumb from "@/components/breadcrumb"
import "@/styles/record.scss"
import { formatDate } from "@/util/moment";
export default {
  components: {
    breadcrumb
  },
  data() {
    return {
        activities: [{
          content: '支持使用图标',
          timestamp: '2018-04-12 20:46',
        }, {
          content: '支持自定义颜色',
          timestamp: '2018-04-03 20:46',
        }, {
          content: '支持自定义尺寸',
          timestamp: '2018-04-03 20:46',
        }, {
          content: '默认样式的节点',
          timestamp: '2018-04-03 20:46'
        }],
        dialogFormVisible: false,
        formLabelWidth: "100px",
        form: {
            name: "",
            date: ""
        }
    };
  },
  methods: {
      //新增
      addClick (form) {
        this.dialogFormVisible = true;
        this.form = Object.assign({}, form)
        this.$nextTick(()=>{
            this.$refs['dataForm'].resetFields();
        });
      },
      //确认
      confirmClick () {
            let input = {};
            let wk = new Date(this.form.date).getDay()
            let weeks = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
            input.name = this.form.name;
            input.timestamp = formatDate(new Date(this.form.date), "yyyy-MM-dd hh:mm");
            input.week = weeks[wk]
            this.dialogFormVisible = false;
      }
  }
};
</script>
<style lang="scss">
.page-content-wrapper {
  padding: 20px;
  .page-content {
    background-color: white;
    padding: 20px;
    overflow: hidden;
    .card-panel.card-main {
        .clearfix {
            overflow: hidden;
            .title {
                float: left;
                font-weight: bold;
                line-height: 36px;
            }
        }
        .text.item {
            .box-card {
                .el-card__header {
                    background-color:rgba(226, 234, 246, 1);
                    padding: 10px 20px;
                    span {
                        float: left;
                    }
                }
            }
        }
        .el-dialog {
            .el-dialog__header {
                overflow: hidden;
                .el-dialog__title {
                    float: left;
                }
            }
            .el-form {
                .el-form-item {
                    .el-date-editor {
                        width: 100%;
                    }
                }
            }
        }
    }

  }
}
</style>