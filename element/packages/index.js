import Buttom from "./buttom";


//把所有的组件存储起来
const components=[Buttom];

const install=Vue=>{
    //判断我们的组件是否安装，如果安装了就不安装了(按需引用)
    if(install.installed)return;
    install.installed=true;
    components.map(components=>Vue.use(components));
};

//检测到vue才去执行
if(typeof window!=="undefined"&&window.Vue)
{
    install(window.Vue);
}
export default{
    //所有组件必须有一个install的方法才能去使用Vue.use();
    install,
    ...components
};