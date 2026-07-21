# skill-fronted

`skill-fronted` 是一套面向高质量产品展示页的网页展示 skill：它保留“证据优先、材质分章、克制动效”的工作方法，同时明确 React、TypeScript、Vite 的工程边界、降级策略与交付要求。它适用于需要叙事与真实信息密度、但不希望落入模板化 landing page 的产品展示页。

## 三种使用模式

- **Signature**：复用已提炼的视觉语法——暗色真实媒介开场、浅色地形/玻璃解释层、深色证据收束；迁移的是叙事和材质关系，不复制任何具体产品领域元素。
- **Adaptive**：先根据项目主题提出 2–3 套完整且有区分度的艺术方向，等你选择后再实现。适合希望得到新视觉身份的项目。
- **Starter**：从可运行的 React/TypeScript/Vite 起步模板开始，再选择 Signature 或 Adaptive 完成页面。

无论哪种模式，skill 都要求先确认主题、受众、主行动、内容章节、素材来源、关键交互与桌面/响应式范围；没有证据的内容会被明确标为假设。真实/授权素材优先，生成素材只能作为有标注的示意，不能伪装成产品证据。

## 调用方式

最小 brief 应包含：项目主题、目标受众、一个主要行动、章节列表、可用素材及来源，以及桌面或响应式的交付范围。若你想让 skill 从新的艺术方向开始，请原样使用下面这段调用：

```
Use frontend-showcase in adaptive mode. Build a React/TypeScript/Vite site for [topic].
Audience: [audience]. Primary action: [action]. Sections: [sections].
Assets: [paths or none]. Desktop/responsive scope: [scope].
Present 2-3 art directions and wait for my selection before coding.
```

如果已有视觉语言，可将第一句改为 `Use frontend-showcase in signature mode.`；如果只是希望先获得可运行项目，则写 `Use frontend-showcase in starter mode.`。具体规则、媒体政策、工程实现方式和交付要求都在 [SKILL.md](SKILL.md) 及 `references/` 中。

## 使用 starter

复制模板到你的新项目目录后安装并启动：

```bash
cp -R templates/vite-showcase-starter /path/to/your-project
cd /path/to/your-project
npm ci
npm run dev
```

模板已锁定依赖版本，需使用 Node.js `^20.19.0 || >=22.12.0`（与 Vite 8 的支持范围一致）。若你有意升级依赖，再以 `npm install` 更新锁文件并重新运行测试与构建。

模板故意只提供语义化骨架、可访问的主行动、分章节结构和 reduced-motion 基线；选择方向并补齐真实文案、素材与交互后，才是最终页面。

## 本地检查

在本仓库根目录执行：

```bash
npm run validate
(cd templates/vite-showcase-starter && npm test -- --run && npm run build)
```

第一条检查 skill 包的必需文件与 starter；第二条运行 starter 测试并生成 Vite 生产构建。页面交付前还应按 `references/acceptance.md` 检查键盘与鼠标交互、桌面截图、控制台、减少动效、媒体失败及 WebGL 禁用时的可读性。
