# cocos_game

## protobuf

proto生成ts代码: [https://github.com/protobufjs/protobuf.js/tree/master/cli](https://github.com/protobufjs/protobuf.js/tree/master/cli)

```
pbjs -t static-module -w commonjs -o compiled.js game.proto

pbjs -t static-module game.proto | pbts -o bundle.d.ts -
```