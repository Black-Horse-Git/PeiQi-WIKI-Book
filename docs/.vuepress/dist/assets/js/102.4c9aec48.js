(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{2738:function(s,t,a){"use strict";a.r(t);var n=a(75),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"高度修复"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#高度修复"}},[s._v("#")]),s._v(" 高度修复")]),s._v(" "),n("h2",{attrs:{id:"关于"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#关于"}},[s._v("#")]),s._v(" 关于")]),s._v(" "),n("p",[s._v("图片中可以通过修改数据块中的数据来减小文件的高度达到隐藏数据的目的.")]),s._v(" "),n("p",[n("img",{attrs:{src:a(957),alt:"img"}})]),s._v(" "),n("p",[s._v("如上图使用一张 PNG图片做演示，其中  000004B8 00000338 为 图片高度的数据段，通过修改这一部分就可以隐藏图片中的信息")]),s._v(" "),n("h2",{attrs:{id:"buuctf-大白-png高度修复"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#buuctf-大白-png高度修复"}},[s._v("#")]),s._v(" BuuCTF - 大白 (PNG高度修复)")]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token number"}},[s._v("89")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("50")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("E "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("47")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0D")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("A "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("A "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("A "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("PNG文件头"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("02")]),s._v(" A7 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("宽高"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("6D")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("C "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("71")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("35")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v("位IHDR数据块后的"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("字节"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[n("img",{attrs:{src:a(958),alt:"img"}}),s._v("找到CRC后通过脚本爆破高度")]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[s._v("#"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("usr"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("bin"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("env python\n#"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" coding"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("UTF"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("binascii")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("struct")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("os")]),s._v("\ncrcbp "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("open")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"BuuCTF - 大白.png"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rb"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("read")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("#填文件名\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" i in "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("range")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" j in "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("range")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n        data "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" crcbp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" struct"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("pack")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token char"}},[s._v("'>i'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" struct"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("pack")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token char"}},[s._v("'>i'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("j"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" crcbp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("24")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("29")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        crc32 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" binascii"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("crc32")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0xffffffff")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" crc32 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0x6D7C7135")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("#此处填CRC值\n            print "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            print "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("j"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            print "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("hex")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("hex")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("j"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("p",[n("img",{attrs:{src:a(959),alt:"img"}})]),s._v(" "),n("p",[s._v("修复高度就可以看到隐藏信息")]),s._v(" "),n("p",[n("img",{attrs:{src:a(960),alt:"img"}})])])}),[],!1,null,null,null);t.default=r.exports},957:function(s,t,a){s.exports=a.p+"assets/img/1667880998438-db228d22-1901-4af9-94d4-3fb7e05f1cd2.ccf9be88.png"},958:function(s,t,a){s.exports=a.p+"assets/img/1667882574021-ce1edb02-ba95-48c8-b86e-93e6a83068fd.3f556ce2.png"},959:function(s,t,a){s.exports=a.p+"assets/img/1667882738917-57a390c2-20e8-488b-8d0a-bf6aee57038e.7919e2b2.png"},960:function(s,t,a){s.exports=a.p+"assets/img/1667882818842-bfc7a9ed-c287-4b92-8ef4-9d101335ebc8.182def7e.png"}}]);