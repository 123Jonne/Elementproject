<template>
<div>
    <div class="row">
    <wy-buttom>默认按钮</wy-buttom>
     <wy-buttom type="primary">主要按钮</wy-buttom>
     <wy-buttom type="success">成功按钮</wy-buttom>
     <wy-buttom type="info" >信息按钮</wy-buttom>
     <wy-buttom type="warning" @click="kl">警告按钮</wy-buttom>
     <wy-buttom type="danger"  @click="fn">危险按钮</wy-buttom>
    </div>

   
</div>
   
</template>
<script>
import WyButtom from '../packages/buttom'
export default {
    name:"WyTest",
    components:{
     WyButtom
    },
    methods:{
        fn(){
            alert(1)
        },
        kl(){
alert(2)
        }
    }
}
</script>
