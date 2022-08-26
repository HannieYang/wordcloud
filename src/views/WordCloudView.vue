<template>
    <div id="whole-wordcloud-page">
        <el-container>
            <el-main>
                <div id="wordcloud-container">
                    <p>Label Word Cloud</p>
                    <div id="wordcloud"></div>
                </div>
                <div id="search-container">
                    <el-row :gutter="20">
                        <!-- <el-col :sm="6" :xs="10">
                            <div id="net-selector" class="layout-search">
                                <p>net:</p>
                                <el-select v-model="netValue" placeholder="Select" @change="search">
                                    <el-option
                                    v-for="item in netOptions"
                                    :key="item"
                                    :value="item"
                                    />
                                </el-select>
                            </div>
                        </el-col> -->
                        <el-col :sm="10" :xs="24">
                            <div id="category-selector" class="layout-search">
                                <p>category:</p>
                                <el-select v-model="categoryValue" placeholder="Select" @change="categoryChange">
                                    <el-option
                                    v-for="item in categoryOptions"
                                    :key="item"
                                    :value="item"
                                    />
                                </el-select>
                            </div>
                        </el-col>
                        <el-col :sm="14" :xs="24">
                            <div id="label-input-box" class="layout-search">
                                <el-input v-model="searchContent" placeholder="Search Labels" @input="inputSearchContent" maxlength="64">
                                    <template #append>
                                        <el-button class="search-button" @click="clickSearchButton">Search</el-button>
                                    </template>
                                </el-input>
                            </div>
                        </el-col>
                    </el-row>
                </div>
                <div id="labels-container" v-show="labelsContainerIsShow">
                    <el-row justify="start">
                        <el-col :lg="6" :md="8" :sm="12" :xs="24" v-for="label in labels_list" :key="label.name">
                            <el-button class="label-button" @click="searchThisLabel(label.name)">{{label.name}}
                                <el-tag effect="dark" round size="small" style="margin-left:10px">{{ label.cnt }}</el-tag>
                            </el-button>
                        </el-col>
                    </el-row>
                </div>
                <div id="search-result-table" v-show="searchResultTableIsShow">
                    <div id="result-table">
                        <el-table :data="tableData" ref="dataTable">
                            <el-table-column type="expand">
                                <template #default="props">
                                    <div>
                                        <p v-for="(value,name) in props.row.info" :key="name">{{name}}:{{value}}</p>
                                    </div>
                                </template>
                            </el-table-column>
                            <el-table-column label="Label" prop="labels">
                                <template #default="scope">
                                    <el-tag v-for="item in scope.row.labels" v-bind:key="item" disable-transitions hit @click="searchThisLabel(item)"> {{item}}</el-tag>
                                </template>
                            </el-table-column>
                            <!-- <el-table-column label="Net" prop="net" /> -->
                            <el-table-column label="Category" prop="category" />
                            <el-table-column label="Address" prop="info.address" v-if="categoryValue=='Account'"/>
                            <el-table-column label="Txn Hash" prop="info.txn_hash" v-if="categoryValue=='Transaction'"/>
                            <el-table-column label="Block Number" prop="info.block_number" v-if="categoryValue=='Block'"/>
                        </el-table>
                    </div>
                    <div id="result-pagination">
                        <el-pagination
                            v-model:currentPage="currentPage"
                            v-model:page-size="pageSize"
                            :page-sizes="[10,25,50,100]"
                            :small="small"
                            :disabled="disabled"
                            :background="background"
                            layout="total, sizes, prev, pager, next, jumper"
                            :total="total"
                            @size-change="getTableData"
                            @current-change="getTableData"
                            @next-click="getTableData"
                            @prev-click="getTableData"
                        />
                    </div>
                </div>
                <el-empty description="No Data" v-show="emptyIsShow"/>
            </el-main>
        </el-container>
    </div>
</template>

<script>
import { WordCloud } from '@antv/g2plot';
import axios from 'axios';
import { ElMessage, ElMessageBox } from 'element-plus'
import Qs from 'qs'
import {mix} from '../assets/js/utils'
// axios.defaults.baseURL = 'http://8.134.73.140:58003'
axios.defaults.baseURL = window.location.origin
export default {
    data(){
        return{
            all_labels_data:[],
            labels:[],
            labels_list:[],
            searchContent:'',
            // netValue:"",
            // netOptions:[],
            categoryValue:"",
            categoryOptions:[],
            tableData:[],
            currentPage:1,
            pageSize:10,
            small:false,
            disabled:false,
            background:false,
            total:0,
        }
    },
    computed:{
        // netValue(){
        //     return this.netOptions[0]
        // },
        // categoryValue(){
        //     return this.categoryOptions[0]
        // },
        labelsContainerIsShow(){
            return this.searchContent==""
        },
        searchResultTableIsShow(){
            return this.tableData.length != 0
        },
        emptyIsShow(){
            return this.searchContent!="" && this.tableData.length == 0
        }
    },
    created(){
        window.clickTooltip = this.clickTooltip;
        const el = document.documentElement;
        const pri = `--el-color-primary`
        const color_primary = '#248054'
        getComputedStyle(el).getPropertyValue(pri);
        el.style.setProperty(pri, color_primary);
        const mixWhite = "#FFFFFF"
        for (let i = 1; i < 10; i += 1) {
            el.style.setProperty(`${pri}-light-${i}`, mix(color_primary, mixWhite, i * 0.1));
        }     
    },
    methods:{
        initChart(){
            const wordCloud = new WordCloud('wordcloud', {
                data:this.labels,
                autoFit:true,
                wordField: 'name',
                weightField: 'cnt',
                colorField:'name',
                wordStyle: {
                    fontFamily: 'Verdana',
                    fontSize: [15, 30],
                },
                // 设置交互类型
                interactions: [{ type: 'element-active' }],
                state: {
                    active: {
                    // 这里可以设置 active 时的样式
                        style: {
                            lineWidth: 3,
                        },
                    },
                },
                tooltip:{
                    enterable: true,
                    customContent: (title, data) => {
                        if (!data || data.length <= 0) return;
                        const d = data[0];
                        return `<div>
                            <ul style="padding:0; margin:0; text-align: left; list-style-type: none;">
                                ${d.data.datum.ctg.map((item)=>`<li class="g2-tooltip-list-item" onclick="clickTooltip('${d.data.datum.name}', '${item.category}')">
                                    <span class="g2-tooltip-marker" style="background-color: ${d.color};"></span>
                                    <span class="g2-tooltip-name">${item.category}</span>:
                                    <span class="g2-tooltip-value">${item.cnt}</span>
                                </li>`).join('')}
                            </ul>
                        </div>`;
                    }
                },
                random: () => 0.5,
            });

            wordCloud.render();
            // 图例名称添加点击事件
            wordCloud.on('element:click', (...args) => {
                // console.log(args[0].data.data.text);
                this.searchContent = args[0].data.data.text;
                this.search();
            });
        },
        clickTooltip(label, category){
            console.log(label, category)
            this.searchContent = label;
            this.categoryValue = category;
            this.search();
        },
        categoryChange(){
            if(this.searchContent.length == 0){
                this.labels_list = this.all_labels_data[this.categoryValue]
            }else{
                this.search()
            }
        },
        clickSearchButton(){
            if(this.searchContent.length == 0){
                ElMessageBox.alert('请输入查询内容', '提示', {
                    // if you want to disable its autofocus
                    // autofocus: false,
                    confirmButtonText: 'OK',
                    callback: (action) => {
                        ElMessage({
                            type: 'info',
                            message: `action: ${action}`,
                        })
                    },
                })
            }else{
                this.search();
            }
        },
        inputSearchContent(){
            if(this.searchContent.length == 0){
                this.tableData = []
            }else{
                this.search()
            }
        },
        search(){
            if(this.searchContent != ""){
                // console.log(this.searchContent)
                // console.log(this.netValue)
                // console.log(this.categoryValue)
                // 向后端请求数据
                axios({
                    method: 'get',
                    url:'/api/cloud/filter',
                    params:{
                        keyword: this.searchContent,
                        // net: this.netValue,
                        category: this.categoryValue,
                        page:1,
                        pagesize:this.pageSize
                    },
                    paramsSerializer: function (params) {
                        return Qs.stringify(params, {arrayFormat: 'brackets'})
                    },
                }).then((response)=>{
                    // console.log(response)
                    const data = response.data;
                    // console.log(data)
                    this.total = data.total;
                    this.tableData = data.data== null? []: data.data;
                    this.currentPage = data.page;
                }).catch((error)=>{
                    console.log(error)
                })
            }
        },
        searchThisLabel(label){
            this.searchContent = label;
            this.search()
        },
        getTableData(){
            // console.log(this.pageSize);
            // console.log(this.currentPage);
            //向后端请求数据
            axios({
                method: 'get',
                url:'/api/cloud/filter',
                params:{
                    keyword: this.searchContent,
                    // net: this.netValue,
                    category: this.categoryValue,
                    page:this.currentPage,
                    pagesize:this.pageSize
                },
                paramsSerializer: function (params) {
                    return Qs.stringify(params, {arrayFormat: 'brackets'})
                },
            }).then((response)=>{
                // console.log(response)
                const data = response.data;
                // console.log(data)
                this.total = data.total;
                this.tableData = data.data;
                this.currentPage = data.page;
            }).catch((error)=>{
                console.log(error)
            })
        },
        getAllLabelData(data){
            // console.log(data)
            let labels = [];
            for(let key in data){
                // console.log(key);
                const key_data = data[key];
                // console.log(key_data);
                key_data.forEach(element => {
                    // console.log(key)
                    // console.log(element);
                    this.element = element
                    let index = labels.findIndex((value)=>{
                        return value.name == this.element.name
                    }, this);
                    if(index == -1){
                        labels.push({
                            'name': element.name,
                            'cnt':element.cnt,
                            // 'ctg':[{
                            //    [key] : element.cnt
                            // }]
                            'ctg':[{
                                'category':key,
                                'cnt':element.cnt
                            }]
                        })
                    }else{
                        // let label = labels[index];
                        labels[index].cnt = labels[index].cnt + element.cnt;
                        // labels[index].ctg.push({[key]: element.cnt})
                        labels[index].ctg.push({
                            'category':key,
                            'cnt':element.cnt
                        })
                    }
                    // console.log(labels)
                });
            }
            return labels
        },
    },
    mounted(){
        axios({
            method: 'get',
            url: '/api/cloud'
        }).then((response)=>{
            // console.log(response)
            const data = response.data.data;
            // console.log(data)
            // 保留数据
            this.all_labels_data = data;
            // 处理数据，得到词云对应的数据
            this.labels = this.getAllLabelData(data);
            // console.log(this.labels)
            const category_list = Object.keys(data);
            this.categoryOptions = category_list;
            this.categoryValue = category_list[0];
            this.labels_list = data[this.categoryValue];
            this.initChart();
        }).catch((error)=>{
            console.log('here');
            console.log(error);
        })

        // console.log(this.$refs.dataTable)
    }
}
</script>

<style lang="less" scoped>
    // :root{
    //     --el-color-primary: green;
    // }
    @primary-color:#248054;
    #whole-wordcloud-page{
        width:100%;
        display: flex;
        flex-direction: column;
    }
    .el-main{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    #wordcloud-container{
        width: 80%;
        p{
            font-size: 30px;
        }
    }
    #search-container{
        width:80%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        .el-row{
            width:100%;
        }
    }
    .layout-search{
        width:100%;
        height:100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    #category-selector{
        .el-select{
            width:70%
        }
    }
    .label-button{
        width:80%;
    }
    #labels-container{
        width: 90%;
        .el-col{
            margin-top:10px
        }
    }
    #search-result-table{
        display: flex;
        flex-direction: column;
        align-items: center;
        width:90%;
        margin-top: 20px;
        .el-tag{
            margin-right: 5px;
            margin-bottom: 2px;
        }
    }
    #result-table{
        width:100%
    }
    #result-pagination{
        margin-top: 5px;
        align-self: flex-end;
    }
</style>