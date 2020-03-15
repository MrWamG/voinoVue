<template>
    <div id="app">
        <div class="container">
            <div class="train_big_box">
                <div class="train_box" v-for="item in 3" v-bind:key="item">
                    <div class="train_window_box">
                        <div class="train_window" v-for="item in 6" v-bind:key="item"></div>
                    </div>
                </div>
                <div class="train_box">
                    <div class="train_head">
                    <div class="train_window_box train_head_window_box">
                        <div class="train_window" v-for="item in 3" v-bind:key="item"></div>
                    </div>
                    </div>
                </div>
            </div><!-- train_big_box -->
            <div class="bridge_big_box" ref="bridge_big_box">
                <div class="bridge_box" ref="bridge_box_1">
                    <svg :style="{width:bridge.width}" viewBox="0 0 1000 1458" v-for="{item,index} in bridge.count" :key="index">
                        <g transform="translate(0.000000,1458.000000) scale(0.100000,-0.100000)" fill="#0b2347">
                            <path class="bridge_path"/>
                        </g>
                    </svg>
                </div>
                <div class="bridge_box" ref="bridge_box_2"></div>
            </div><!-- 桥 -->
            <div class="frontFloor_big_box" ref="midFloor_big_box" style="bottom:0px">
                <div class="frontFloor_box" ref="midFloor_box_1">
                    <svg class="frontFloor" :style="{width:midFloor.width}" viewBox="0 0 689.000000 176.000000" v-for="{item,index} in midFloor.count" :key="index">
                        <g transform="translate(0.000000,176.000000) scale(0.100000,-0.100000)" fill="#1a355d">
                            <path/>
                        </g>
                    </svg>
                </div>
                <div class="frontFloor_box" ref="midFloor_box_2"></div>
            </div><!-- 中场景 -->
            <div class="frontFloor_big_box" ref="frontFloor_big_box">
                <div class="frontFloor_box" ref="frontFloor_box_1">
                    <svg class="frontFloor" :style="{width:frontFloor.width}" viewBox="0 0 689.000000 176.000000" v-for="{item,index} in frontFloor.count" :key="index">
                        <g transform="translate(0.000000,176.000000) scale(0.100000,-0.100000)" fill="#10213c">
                            <path/>
                        </g>
                    </svg>
                </div>
                <div class="frontFloor_box" ref="frontFloor_box_2"></div>
            </div><!-- 前场景 -->
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            bridge:{
                width:200,
                count:'',
            },
            midFloor:{
                width:300,
                count:'',
            },
            frontFloor:{
                width:600,
                count:'',
            },
            screenWidth: document.body.clientWidth,
        }
    },
    mounted(){
        const _this = this;
        const [bridge_box_1,bridge_box_2,bridge_big_box,frontFloor_box_1,frontFloor_box_2,frontFloor_big_box,midFloor_box_1,midFloor_box_2,midFloor_big_box] = [this.$refs.bridge_box_1,this.$refs.bridge_box_2,this.$refs.bridge_big_box,this.$refs.frontFloor_box_1,this.$refs.frontFloor_box_2,this.$refs.frontFloor_big_box,this.$refs.midFloor_box_1,this.$refs.midFloor_box_2,this.$refs.midFloor_big_box];
       //场景向后
        function crossMarquee(item,copy,box,spd){
            copy.innerHTML=item.innerHTML;
            function Marquee(){
                item.offsetWidth <= box.scrollLeft ? box.scrollLeft -= item.offsetWidth : box.scrollLeft += spd;
            }
            let myMar = setInterval(Marquee,1);
        }; 
        //对桥盒子进行填充,保证观众在大尺寸视窗情况下浏览时不会出现桥缺少情况
        function _fill_stage(thisName){
            let num = Math.ceil(_this.screenWidth / thisName.width)+1;
            for(let i = 0;i < num;i++){
                _this.$set(thisName,'count',i);
            }
        };
        const _fill_is_deal = new Promise(function(resolve,reject){
            _fill_stage(_this.bridge);
            _fill_stage(_this.frontFloor);
            _fill_stage(_this.midFloor);
            resolve();
        });
        _fill_is_deal.then(function(){
            crossMarquee(bridge_box_1,bridge_box_2,bridge_big_box,3);
            crossMarquee(midFloor_box_1,midFloor_box_2,midFloor_big_box,4);
            crossMarquee(frontFloor_box_1,frontFloor_box_2,frontFloor_big_box,6);
        });
    },
}
</script>

<style scoped>
@import url('../assets/css/train.css');
</style>>