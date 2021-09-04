import Mock from "mockjs";
Mock.mock("/api/setting", "get", {
  code: 0,
  msg: "",
  data: {
    avatar: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fitem%2F201202%2F18%2F20120218194349_ZHW5V.thumb.700_0.jpg",
    siteTitle: "我的个人空间",
    github: "https://github.com/God-F",
    qq: "1132192506",
    qqQrCode:
      "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fitem%2F201202%2F18%2F20120218194349_ZHW5V.thumb.700_0.jpg",
    weixin: "15569694820",
    weixinQrCode:
      "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fitem%2F201202%2F18%2F20120218194349_ZHW5V.thumb.700_0.jpg",
    mail: "1132192506@qq.com",
    githubName: "God-F",
    favicon: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fitem%2F201202%2F18%2F20120218194349_ZHW5V.thumb.700_0.jpg",
  },
});
