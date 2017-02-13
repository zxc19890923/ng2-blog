import {Component} from "@angular/core";
@Component({
    selector: "blog-charts",
    templateUrl: "../templates/charts.tpl.html"
})
export class ChartsComponent {
    option = {
        title : {
            text: '文章统计',
            x: 'center'
        },
        color: ['#3398DB'],
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                data : ['angular2', 'node', 'express', 'ionic2', 'react'],
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'文章数',
                type:'bar',
                barWidth: '60%',
                data:[100, 10, 50, 10, 10]
            }
        ]
    };
}