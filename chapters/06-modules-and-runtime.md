# 第六章：模块与运行时（Bun/Node 与浏览器差异）

核心要点：
- 本项目使用 ESM 模块：通过 `export`/`import` 组织代码。
- 运行时差异：浏览器有 DOM，Bun/Node 没有；Bun/Node 有文件系统、进程 API 等。
- 包管理：Bun 内置包管理（`bun add xxx`），与 `npm`/`pnpm` 类似。

示例：
```js
// 导出
export const answer = 42;
export function hello(name) { return `Hello, ${name}`; }

// 导入
import { answer, hello } from "./m.js";
```

对比：
- Python 的模块/包与 `import` 机制相似；C++ 的 `#include` 是预处理级别，链接阶段不同于 JS 动态加载。

实用命令：
- 运行脚本：`bun run file.js`
- 运行测试：`bun test` / `bun test --watch`
- 安装依赖：`bun add <pkg>`
