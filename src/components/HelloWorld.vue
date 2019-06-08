<template>
  <div class="hello">
    <van-nav-bar class="m_music" title="随译" style="background:  #99CCFF"/>
    <div class='content'>
      <van-field v-model="input_value" class="input_value" />
      <van-button type="default" @click="startSelect" class="source">{{source_type}}</van-button><br/>
      <van-actionsheet
        v-model="show"
        :actions="actions"
        @select="onSelect"
      />
      <van-button type="info" class='search' @click="translateGo">翻译</van-button>
    </div>
    
  </div>
</template>

<script>
import { Dialog } from 'vant';
export default {
  name: 'HelloWorld',
  data () {
    return {
      input_value:'',
      show: false,
      source_type: '中 → 英',
      from_to: '&from=1&to=3',
      actions: [
        {
          name: '英 → 中'
        },
        {
          name: '中 → 日'
        },
        {
          name: '中 → 英'
        },
        {
          name: '英 → 日'
        },
        {
          name: '日 → 英'
        }
      ]
    }
  },
  methods: {
    startSelect(){
      this.show = true;
    },
    onSelect(item) {
      // 点击选项时默认不会关闭菜单，可以手动关闭
      this.show = false;
      this.source_type = item.name;
    },
    //翻译
    translateGo(){
      if(this.input_value == ''){
        Dialog.alert({
          message: '内容不能为空'
        }).then(() => {
          // on close
        });
        return;
      }

    this.$toast.loading({
      mask: true,
      message: '翻译中...',
      duration: 0
    });

      switch(this.source_type){
        case this.actions[0].name:
          this.from_to = '&from=3&to=1';
          break;
        case this.actions[1].name:
          this.from_to = '&from=1&to=2';
          break;
        case this.actions[2].name:
          this.from_to = '&from=1&to=3';
          break;
        case this.actions[3].name:
          this.from_to = '&from=3&to=2';
          break;
        case this.actions[4].name:
          this.from_to = '&from=2&to=3';
          break;
      }
      this.$axios.get('http://api.shujuzhihui.cn/api/sjzhApi/searchFanyi?appKey=7d8873c553384574ba2a0c6afb17c41a&text='+this.input_value+this.from_to)
      .then((res) => {
        this.$toast.clear(true);   //关闭加载提示
        Dialog.alert({
          title: '结果',
          message: res.data.RESULT
        }).then(() => {
          this.input_value='';
        });
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.m_music{
  padding-top: 40px;
  font: bold;
}
.input_value{
  background: #99CCFF;
  border-radius: 20px;
  margin-bottom: 20px
}
.content{
  margin-top: 40px;
  padding: 50px;
}
button{
  margin-bottom: 10px;
}
.source{
  border: none;
  font: bold;
}

.search{
    width: 140px;
    height: 45px;
    border-radius: 20px;
    outline: none;
    background:  #99CCFF;
    border: none;
    font: bold;
}

</style>
