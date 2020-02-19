<template>
<div class="row">
    <button class="wy-buttom" :class="[`wy-buttom-${type}`,{'is-circle':circle}]" @click="handleClick">
        <i :class="icon"></i>
        <span>
            <slot></slot>
        </span>
    </button>

     </div>
   
</template>
<script>
export default {
    name:'WyButtom',
    props:
    {
        type:{
            type:String,
            default:"default"
        },
        icon:{
            type:String,
            default:"default"
        },
        circle:{
            type:Boolean,
            default:false
        }
    },
    created(){
        console.log(this.type)
        console.log(this.$slots)
    },
    methods:{
        handleClick(e){
            this.$emit('click',e);//向父组件派发click事件
        }
    }
}
</script>
<style scoped>

</style>