Vue.component("custom-input",{
    props:["inputTitle","sta"],
   template:`<div class="custom-input">
               <input type="text" v-model="inputTitle" @focus="focus">
           </div>`,
    data:function(){
       return {

       }
    },
    methods:{
       focus(){
           this.$emit("define");
       }
    }
})


Vue.component("custom-list",{
    props:["listData","sta"],
    template:`<ul class="custom-list" v-show="sta==true">
               <li v-for="v in listData" @click="click(v.title)">{{v.title}}</li>
           </ul>`,
    data:function(){
        return {

        }
    },
    methods:{
       click(val){
           this.$emit("define",val);
       }
    }
})

