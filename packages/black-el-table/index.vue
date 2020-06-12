<template>
    <el-table
            ref="elTable"
            @cell-dblclick="rowDoubleClick"
            @row-click="rowClick"
            @selection-change="$emit('selection-change', $event)"
            class="base-table full-width"
            :data="data"
            :border="border"
            :stripe="stripe"
            :default-sort="defaultSort"
            :height="height"
            :show-summary="showSummary"
            :tree-props="treeProps"
            row-key="id"
            highlight-current-row
    >
        <el-table-column
                v-if="selection"
                width="50"
                type="selection"
        ></el-table-column>
        <el-table-column
                v-if="order"
                align="center"
                label="序号"
                width="60"
                type="index"
        ></el-table-column>
        <el-table-column
                v-for="item in columns"
                :key="item.prop"
                :prop="item.prop"
                :label="item.label"
                :width="item.width"
                :fixed="item.fixed"
                :sortable="item.sortable"
                show-overflow-tooltip
                :align="item.align"
        >
            <template slot-scope="{ row }">
                <template v-if="item.clickEnable">
                    <el-button @click="$emit('click', row, item)" type="text">
                        {{ formatData(item, row) }}
                    </el-button>
                </template>
                <template v-else-if="item.type === 'dic'">
                    <dictionary-span
                            :type="item.dicType"
                            :binddata="row[item.prop]"
                    ></dictionary-span>
                </template>
                <template v-else-if="item.render">
                    <expand-dom
                            :column="item"
                            :row="row"
                            :render="item.render"
                    ></expand-dom>
                </template>
                <template v-else>
                    {{ formatData(item, row) }}
                </template>
            </template>
        </el-table-column>
        <slot></slot>
    </el-table>
</template>

<script>
	import {format} from 'date-fns';

	/**
	 * 基础表格
	 *
	 * @prop {Array} data 表格数据，example：[{ [prop]: String }]
	 * @prop {Array} columns 表格栏目
	 * - example：[{
     *     prop: String, label: String, width: Number, sortable: Boolean,
     *     clickEnable: Boolean, type: String, dateFormat: String, formatter: Function
     *   }]
	 * - sortable 是否排序
	 * - clickEnable 是否可点击，会触发表格的 click 事件，详情见下面的 click 事件
	 * - type 数据类型，date 为时间戳 dic为字典
	 * - dateFormat 时间转换格式， 默认 'yyyy-MM-dd HH:mm:ss'
	 * - formatter(value) 格式化单元格数据，参数为当前单元格数据，需返回展示的内容
	 *
	 * @prop {Boolean} border 是否有边框，默认无
	 * @prop {Boolean} stripe 是否斑马条纹，默认有
	 * @prop {String} size 表格大小，默认 mini
	 * @prop {Boolean} order 是否有序号，默认无
	 * @prop {Object} defaultSort 默认排序，example：{ prop: 'area', order: 'descending' }
	 * @prop {String} height 表格高度
	 * @prop {Boolean} showSummary 是否展示总计行，默认 false
	 * @prop {Boolean} selection 是否展示复选框，默认 false
	 * @prop {Object} treeProps 树形菜单的 props 对应参数，默认 { children: 'children' }
	 *
	 * @event selection-change 复选框勾选事件
	 * @event click(data, column) 栏目点击事件，data 当前行的数据，column 当前栏目的数据
	 * @event row-click(row, column, cell, event 行点击事件
	 *
	 * @method setCurrentRow(row) 设置当前行
	 */
	export default {
		name: 'BlackElTable',
		props: {
			data: Array,
			columns: Array,
			border: {
				type: Boolean,
				default: false
			},
			stripe: {
				type: Boolean,
				default: true
			},
			size: {
				type: String,
				default: 'small'
			},
			defaultSort: Object,
			height: {
				type: String,
				default: 'auto'
			},
			showSummary: {
				type: Boolean,
				default: false
			},
			order: {
				type: Boolean,
				default: true
			},
			selection: {
				type: Boolean,
				default: false
			},
			treeProps: {
				type: Object,
				default () {
					return {children: 'children'};
				}
			}
		},
		components: {
			expandDom: {
				functional: false,
				props: {
					row: Object,
					render: Function,
					index: Number,
					column: {
						type: Object,
						default: null
					}
				},
				render: function (h) {
					return this.render(h, this.row);
				}
			}
		},
		methods: {
			// 单元格数据格式化
			formatData (column, row) {
				const value = row[column.prop];
				if (value) {
					if (column.type === 'date') {
						return format(value, column.dateFormat || 'yyyy-MM-dd HH:mm:ss');
					} else if (column.formatter instanceof Function) {
						return column.formatter(value, row);
					} else {
						return value;
					}
				} else {
					return value;
				}
			},

			// 双击事件
			rowDoubleClick (row, column, cell, event) {
				this.$emit('cell-dblclick', row, column, cell, event);
			},

			// 表格行点击事件
			rowClick (row, column, cell, event) {
				this.$emit('row-click', row, column, cell, event);
			},

			// 设置当前行
			setCurrentRow (row) {
				this.$refs.elTable.setCurrentRow(row);
			},

			toggleSelection (row) {
				this.$refs.elTable.toggleRowSelection(row);
			},
			// 清空勾选
			clearSelection () {
				this.$refs.elTable.clearSelection();
			}
		}
	};
</script>

<style scoped>
</style>
