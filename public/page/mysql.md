---
outline: deep
---

## mysql安装

[点击下载mysql](https://www.mysql.com/cn/downloads/)
::: tip
具体下载细节参考官网，此处不再重复
:::

## 登录mysql
如果我们要登录本机的myql数据库，只需要输入以下命令即可♨️
```md
mysql -u root -p
```
按回车确认, 如果安装正确且 MySQL 正在运行, 会得到以下响应:🗽
```md
Enter password:
```
## mysql的连接
```md
[root@host]# mysql -u root -p
Enter password:******
```
成功连接到 MySQL 后，你可以在命令行中直接执行 SQL 查询。列出所有可用的数据库：
```md
SHOW DATABASES;
```
选择要使用的数据库：
```md
USE your_database;
```
列出所选数据库中的所有表：
```md
SHOW TABLES;
```
退出 mysql> 命令提示窗口可以使用 exit 命令，如下所示：
```md
mysql> EXIT;
Bye
```
## 创建数据库

我们可以在登陆 MySQL 服务后，使用 **create** 命令创建数据库，语法如下:

```md
create database 数据库名;
```

建数据库的基本语法如下：

```md
CREATE DATABASE [IF NOT EXISTS] database_name
  [CHARACTER SET charset_name]
  [COLLATE collation_name];
```

## 删除数据库

drop 命令删除数据库

```md
DROP DATABASE <database_name>;        -- 直接删除数据库，不检查是否存在
或
DROP DATABASE [IF EXISTS] <database_name>;
#IF EXISTS 是一个可选的子句，表示如果数据库存在才执行删除操作，避免因为数据库不存在而引发错误。database_name 是你要删除的数据库的名称。
```



## 数据类型

mysql支持所有标准SQL数值类型，这些类型包括严格数值数据类型(INTEGER、SMALLINT、DECIMAL 和 NUMERIC)，以及近似数值数据类型(FLOAT、REAL 和 DOUBLE PRECISION)。

| 类型         | 大小    | 范围（有符号）                  | 范围（无符号）     | 用途                |
| ------------ | ------- | ------------------------------- | ------------------ | ------------------- |
| tinyint      | 1 Bytes | (-128，127)                     | (0，255)           | 小整数值            |
| smallint     | 2 Bytes | (-32 768，32 767)               | (0，65 535)        | 大整数值            |
| mediumint    | 3 Bytes | (-8 388 608，8 388 607)         | (0，16 777 215)    | 大整数值            |
| int或integer | 4 Bytes | (-2 147 483 648，2 147 483 647) | (0，4 294 967 295) | 大整数值            |
| bigint       | 8 Bytes |                                 |                    | 极大整数值          |
| float        | 4 Bytes |                                 |                    | 单精度<br/>浮点数值 |
| double       | 8Bytes  |                                 |                    | 双精度<br/>浮点数值 |
| decimal      |         |                                 |                    | 小数值              |

日期和时间类型

| 类型      | 大小 | 格式                | 用途                     |
| --------- | ---- | ------------------- | ------------------------ |
| date      | 3    | YYYY-MM-DD          | 日期值                   |
| time      | 3    | HH:MM:SS            | 时间值或持续时间         |
| year      | 1    | YYYY                | 年份值                   |
| datetime  | 8    | YYYY-MM-DD hh:mm:ss | 混合日期和时间值         |
| timestamp | 4    | YYYY-MM-DD hh:mm:ss | 混合日期和时间值，时间戳 |



字符串类型

| 类型       | 大小                  | 用途                            |
| ---------- | --------------------- | ------------------------------- |
| char       | 0-255 bytes           | 定长字符串                      |
| varchar    | 0-65535 bytes         | 变长字符串                      |
| tinyblob   | 0-255 bytes           | 不超过 255 个字符的二进制字符串 |
| tinytext   | 0-255 bytes           | 短文本字符串                    |
| blob       | 0-65 535 bytes        | 二进制形式的长文本数据          |
| text       | 0-65 535 bytes        | 长文本数据                      |
| mediumblob | 0-65 535 bytes        | 二进制形式的中等长度文本数据    |
| mediumtext | 0-16 777 215 bytes    | 中等长度文本数据                |
| longblob   | 0-4 294 967 295 bytes | 二进制形式的极大文本数据        |
| longtext   | 0-4 294 967 295 bytes | 极大文本数据                    |

:::tip

**注意**：char(n) 和 varchar(n) 中括号中 n 代表字符的个数，并不代表字节个数，比如 CHAR(30) 就可以存储 30 个字符。

:::

**枚举与集合类型（Enumeration and Set Types）**

- **ENUM**: 枚举类型，用于存储单一值，可以选择一个预定义的集合。
- **SET**: 集合类型，用于存储多个值，可以选择多个预定义的集合。

## More

⚠️项目持续施工

