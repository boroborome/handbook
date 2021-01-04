# Happy3w

欢迎来到happy3w的世界，这里为你讲解各种自研工具的使用说明。

- **persistence-excel**: 这个工具可以帮助你通过简单的注解完整Excel的解析和写入，极大地提升效率
  - 为什么用这个工具？
    - 上手快。引入库，添加注解，即完成所有的读写excel逻辑。不需要关注excel的行列位置，不需要关注excel中类型和自定义类型不匹配问题。
    - 流式读写，不占用大量内存。
    - 丰富的扩展接口。可以扩展，类型转换规则；excel单元格读取规则；自定义的数据个是或者样式
  - 怎么用这个工具
    - [persistence-excel手册](/handbook/persistence-excel/)
- **persistence-jpa**: 这个工具可以帮助你实现基于spring jpa的灵活数据访问，不在需要写各种repository，不需要写各种filter和条件的映射逻辑，极大地提升效率
  - 为什么用这个工具？
    - 提升开发效率。不需要繁琐的写各种Repository。
    - 灵活的条件查询。通过Repository或者EntityMananger实现多可选条件组合查询比较复杂，这个工具可以帮你实现。
    - 在设计上实现Service层和Domain层的解耦，利于长期维护和业务扩展。
  - 怎么用这个工具
    - [persistence-jpa手册](/handbook/persistence-jpa/)