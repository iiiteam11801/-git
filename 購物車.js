const app = Vue.createApp({
  data() {
    return {
      itemList: [
        {
          id: "1",
          itemName: "幼犬1號 草原羊肉 2Kg",
          imgUrl:
            "https://rs.joo.com.tw/website/uploads_product/website_565/P0056500109589_1_496711.jpg?_42396",
          price: "910",
          count: "2",
        },
        {
          id: "2",
          itemName: "幼犬3號 海洋魚貝 2KG",
          imgUrl:
            "https://rs.joo.com.tw/website/uploads_product/website_565/P0056500109591_1_496730.jpg?_29632",
          price: "940",
          count: "3",
        },
        {
          id: "3",
          itemName: "貓糧 2號 森林燉雞 2kg",
          imgUrl:
            "https://rs.joo.com.tw/website/uploads_product/website_565/P0056500072298_1_349697.jpg?_37382",
          price: "820",
          count: "1",
        },
        {
          id: "4",
          itemName: "貓糧 3號 海洋魚貝 2kg",
          imgUrl:
            "https://rs.joo.com.tw/website/uploads_product/website_565/P0056500078135_1_349702.jpg?_17514",
          price: "850",
          count: "1",
        },
      ],
    };
  },
  methods: {
    handlePlus: function (item) {
      item.count++;
    },
    handleSub: function (item) {
      if (item.count > 1) {
        item.count--;
      }
    },
    handledelete: function (index) {
      console.log(this);
      this.itemList.splice(index, 1);
    },
  },
});
const vm = app.mount("#app");
