<template>
    <div id="app">
        <black-el-table v-loading="loading" height="300px" :columns="tableColumns" :data="tableData">
            <el-table-column label="操作" width="300" align="center" fixed="right">
                <template slot-scope="{ row }">
                    <el-button
                            class="print-btn"
                            size="mini"
                            icon="el-icon-view"
                            type="primary"
                            @click="viewHandle(row)"
                    ></el-button>
                    <el-button
                            class="print-btn"
                            size="mini"
                            icon="el-icon-edit"
                            type="primary"
                            @click="editHandle(row)"
                    ></el-button>
                    <el-button
                            class="print-btn"
                            size="mini"
                            icon="el-icon-delete"
                            type="primary"
                            @click="deleteHandle(row)"
                    ></el-button>
                </template>
            </el-table-column>
        </black-el-table>
    </div>
</template>

<script>
	import {data} from './data/index';

	export default {
		name: 'App',
		data () {
			return {
				id: 0,
				loading: false,
				// 表格数据
				tableData: [],
				// 列表字段
				tableColumns: [
					{
						prop: 'p1',
						label: '普通列'
					},
					{
						prop: 'p2',
						width: '130px',
						label: '定宽列'
					},
					{
						prop: 'p3',
						label: '复杂单元格列',
						width: '100px',
						render: (h, row) => {
							return h('el-tag', {
								attrs: {
									effect: 'plain',
									size: 'mini'
								},
								domProps: {
									innerText: row.p3
								}
							});
						}
					}
				]
			};
		},
		methods: {
			viewHandle (row) {
				console.log('row', row);
			},
			editHandle (row) {
				console.log('row', row);
			},
			deleteHandle (row) {
				console.log('row', row);
			}
		},
		mounted () {
			this.loading = true;
			clearTimeout(this.id);
			this.id = setTimeout(() => {
				this.tableData = data;

				this.loading = false;
			}, 2000);
		},
		destroyed () {
			clearTimeout(this.id);
		}
	}
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
