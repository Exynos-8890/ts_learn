# 第零章：不用浏览器如何运行 JavaScript（用 Bun）

目标：
- 在本机安装并使用 Bun 运行 JavaScript。
- 了解如何运行单个脚本、如何运行测试。

为什么选择 Bun：
- 速度快，内置测试框架（兼容 expect 风格），无需额外配置。
- 内置包管理与运行器，体验类似 `python script.py` 或 C++ 可执行程序。

安装（macOS）：
- 选一：Homebrew（推荐）
  - `brew tap oven-sh/bun`
  - `brew install bun`
- 选二：官方脚本（可选）
  - `curl -fsSL https://bun.sh/install | bash`

验证安装：
- `bun --version`

在命令行运行脚本：
- 示例文件：`examples/hello.js`
- 运行：`bun run examples/hello.js`

运行测试：
- 本项目已包含 `tests/` 目录，直接运行：`bun test`
- 持续测试：`bun test --watch`

项目结构说明：
- `chapters/` 教程（含 Python/C++ 对比）
- `exercises/` 每章配套的填空练习（把 `___` 替换成正确答案）
- `tests/` 针对练习的自动化测试（帮助你验证答案）
- `examples/` 一些独立的小示例可直接运行

小贴士（对比 Python/C++ 运行方式）：
- Python：`python xxx.py`；C++：`g++ xxx.cpp && ./a.out`
- JS（Bun）：`bun run xxx.js` 直接执行，无需提前编译；
- 模块导入默认使用 ESM（`import`/`export`），与 Python 的 `import` 类似，但语法不同；与 C++ 的 `#include` 与链接阶段也不同。

遇到权限或路径问题：
- 确认 Bun 在 PATH 中：`which bun`
- 若使用官方脚本安装，可能需要在 shell 配置中添加 PATH 行；使用 Homebrew 通常会自动配置。
