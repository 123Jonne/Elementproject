const path=require('path');
module.exports={
    lintOnSave:false,
    pages:{
        index:{
            entry:"src/main.js",
            template:'public/index.html',
            filename:'index.html'
        }
    },

    chainWebpack:config=>{
        config.module
        .rule('js')
        .include.add(path.resolve(__dirname,'packages')).end()
        .use('babel')
        .loader('babel-loader')
        //修改配置
        .tap(options=>{
            return options
        })
    }
}