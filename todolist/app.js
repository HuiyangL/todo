var obj = new Vue({
    el:"#root",
    data:{
        all:localStorage['todo']?JSON.parse(localStorage['todo']):[],
        con:'',
        status:"all",

    },
    methods:{
        add(){
            var obj = {};
            obj.state=0;
            obj.title=this.con;
            obj.id=Math.random()+new Date().getTime();
            obj.flag=true,
                this.all.push(obj);
            localStorage['todo']=JSON.stringify(this.all);
            this.con='';

        },
        changeStatus(val){
            this.status=val;
        },
        changeState(item){
            item.state=!item.state;
        },
        del(id){
            this.all = this.all.filter(
                function(ele){
                    if(ele.id!=id){
                        return ele;
                    }
                }
            )
            localStorage['todo']=JSON.stringify(this.all);
        },
        edit(item){
            item.flag=!item.flag;
            localStorage['todo']=JSON.stringify(this.all);
        }
    },
    computed:{
        datas(){
            if(this.status=="all"){
                return this.all.filter((a)=>{
                    return a;
                })
            }else{
                if(this.status==0){
                    return this.all.filter((a)=>{
                        return a.state==0;
                    })
                }else{
                    return this.all.filter((a)=>{
                        return a.state==1;
                    })
                }
            }
        }
    },
    /* mounted(){
         this.$refs.abc.focus();
     }*/

})