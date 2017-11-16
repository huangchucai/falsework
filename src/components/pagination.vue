<template>
  <div class="hcc">
    <ul class="pagination">
      <li @click="changeNum(-1)" v-if="curPage !== 1"><a href="javascript:;">上一页</a></li>
      <li :class="{active: curPage === 1}" @click="changeNum(1,'first')"><a href="javascript:;">1</a></li>
      <li v-if="curPage >= showNumber" @click="changeNum(-1,'jump')"><a href="javascript:;" :title="`后退${showNumber}页`">...</a>
      </li>
      <li v-for="item in num" :class="{active: item === curPage}" @click="changeNum(item, 'middle')">
        <a href="javascript:;">
          {{ item }}
        </a>
      </li>
      <li v-if="curPage < (this.pageNumber-(this.showNumber -1))" @click="changeNum(1,'jump')"><a href="javascript:;"
                                                                                                  :title="`前进${showNumber}页`">...</a>
      </li>
      <li :class="{active: pageNumber === curPage}" @click="changeNum(1,'last')"><a
          href="javascript:;">{{pageNumber}}</a></li>
      <li @click="changeNum(1)" v-if="curPage !== pageNumber"><a href="javascript:;">下一页</a></li>
    </ul>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        curPage: this.curNumber
      };
    },
    props: {
      pageNumber: {
        type: Number,
        required: true,
        validator (val) {
          return val > 1;
        }
      },
      curNumber: {
        type: Number,
        default: 1,
        validator (val) {
          return val > 1;
        }
      },
      showNumber: {
        type: Number,
        default: 3,
        validator (val) {
          return val > 1;
        }
      }
    },
    watch: {
      curPage(val) {
        console.log(`这里发送请求  ${val}`)
      }
    },
    methods: {
      changeNum (num, type) {
        if (type === 'first') {
          return this.curPage = 1;
        }
        if (type === 'last') {
          return this.curPage = this.pageNumber;
        }
        if (type === 'middle') {
          return this.curPage = num
        }
        if (type === 'jump') {
          return this.curPage += (this.showNumber * num);
        }
        this.curPage += num;
        if (this.curPage > this.pageNumber) {
          this.curPage = this.pageNumber;
        } else if (this.curPage < 1) {
          this.curPage = 1;
        }
        return this.curPage;
      }
    },
    computed: {
      // 渲染的页面数
      num () {
        if (this.curPage === 1) {
          return [this.curPage + 1, this.curPage + 2];
        } else if (this.curPage === 2 && this.showNumber === 3) {
          return [this.curPage, this.curPage + 1];
        } else if (this.curPage === 2 && this.showNumber === 5) {
          return [this.curPage, this.curPage + 1, this.curPage + 2];
        }  else if (this.curPage === 3 && this.showNumber === 5) {
          return [this.curPage-1, this.curPage, this.curPage + 1, this.curPage + 2];
        }
        else if (this.curPage === this.pageNumber) {
          return [this.curPage - 2, this.curPage - 1];
        } else if (this.curPage === this.pageNumber - 1 && this.showNumber === 3) {
          return [this.curPage - 1, this.curPage];
        } else if (this.curPage === this.pageNumber - 1 && this.showNumber === 5) {
          return [this.curPage - 2, this.curPage - 1, this.curPage];
        } else if (this.curPage === this.pageNumber - 2 && this.showNumber === 5) {
          return [this.curPage - 2, this.curPage - 1, this.curPage, this.curPage + 1];
        }
        else {
          let arr = [this.curPage], index = 1;
          while (arr.length < this.showNumber) {
            arr.push(this.curPage + index);
            arr.unshift(this.curPage - index);
            ++index
          }
          return arr
        }
      }
    },
    template: '<div>safla</div>'
  };
</script>
<style scoped>
  .pagination {
    display: flex;
  }

  .pagination li {
    list-style: none;
  }

  .pagination li a {
    text-decoration: none;
    display: block;
    padding: 0.5rem 1rem;
    border: 1px solid #ddd;
    background-color: #fff;
    color: #71777c;
    margin: 0 5px;
    cursor: pointer;
  }

  .pagination li a:hover {
    background-color: #007fff;
  }

  .pagination li.active a {
    background: #007fff;
    color: #fff;
  }
</style>
