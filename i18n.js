'use strict';
// Use the browser's primary language; no selector or stored override.
const UI_LANGUAGE=/^zh\b/i.test(navigator.languages?.[0]||navigator.language||'')?'zh':'en';
const UI_LOCALE=UI_LANGUAGE==='zh'?'zh-CN':'en';
const messages={
 pageTitle:['NNotepad · Lightweight notes','NNotepad · 轻量记事本'],
 theme:['Toggle light / dark theme','切换深浅色'],hideSidebar:['Hide sidebar','隐藏侧栏'],showSidebar:['Show sidebar','展开侧栏'],
 newNote:['+ New note','＋ 新建笔记'],search:['Search titles and content…','搜索标题和内容…'],notes:['Notes','笔记列表'],
 openFile:['Open file','打开文件'],backup:['Back up all','备份全部'],restore:['Restore backup','恢复备份'],
 noteFormat:['Note format','笔记格式'],txtMode:['TXT Plain text','TXT 纯文本'],mdMode:['MD Markdown','MD Markdown'],markdownViews:['Markdown view','Markdown 视图'],
 edit:['Edit','编辑'],split:['Split','分屏'],preview:['Preview','预览'],untitled:['Untitled note','无标题笔记'],title:['Note title','笔记标题'],source:['Markdown source','Markdown 原文'],body:['Note text','笔记正文'],
 write:['Start writing…','从这里开始写…'],pasteMarkdown:['Paste Markdown to see the formatted result…','粘贴 Markdown，渲染结果会显示在预览中…'],
 richPlaceholder:['Write here, or paste Markdown…','在这里输入，或粘贴 Markdown…'],richEditor:['Formatted Markdown editor','Markdown 排版编辑区'],
 fontSize:['Font size','字号'],wrap:['Wrap lines','自动换行'],noteActions:['Note actions','笔记操作'],
 export:['Export','导出'],delete:['Delete','删除'],exportMd:['Export .md','导出 .md'],exportTxt:['Export .txt','导出 .txt'],noContent:['No content yet','还没有内容'],noMatches:['No matching notes','没有匹配的笔记'],
 stats:['{count} characters · {lines} lines','{count} 字符 · {lines} 行'],cursor:['Line {line}, column {column}','第 {line} 行，第 {column} 列'],edited:['Edited {date}','编辑于 {date}'],editingRich:['Editing formatted content','正在编辑排版内容'],
 readFailed:['Could not read saved notes. Export your current note.','无法读取保存数据，请导出当前笔记'],storageUnavailable:['Browser storage is unavailable. Export a backup.','浏览器保存不可用，请导出备份'],saveFailed:['Could not save. Export a backup now.','保存失败，请立即导出备份'],
 deleteConfirm:['Delete “{title}”? This cannot be undone.','删除“{title}”？此操作无法撤销。'],fileFailed:['Could not read the file. Please select it again.','读取文件失败，请重新选择。'],
 restoreConfirm:['Restoring will replace all current notes. Back up first. Continue?','恢复备份将替换当前全部笔记。建议先备份当前内容。继续？'],invalidBackup:['Invalid backup file. Your current notes were not changed.','备份文件无效，当前笔记未更改。'],
 otherWindow:['Another window changed these notes. Export unsaved edits, then reload.','其他窗口已更新笔记，请先导出未保存内容，再刷新'],missingComponents:['Preview components could not load. Keep vendor/ beside index.html.','预览组件未加载，请确保 vendor 文件夹和 index.html 放在一起。'],renderFailed:['Could not render this content. The source text has been kept.','无法渲染当前内容，原文已保留。'],richSaveFailed:['Could not save formatted content. Copy it before leaving.','排版内容保存失败，请先复制当前内容']
};
function t(key,values={}){const message=messages[key]?.[UI_LANGUAGE==='zh'?1:0]||key;return message.replace(/\{(\w+)\}/g,(match,name)=>String(values[name]??match));}
document.documentElement.lang=UI_LANGUAGE==='zh'?'zh-CN':'en';document.title=t('pageTitle');
document.querySelectorAll('[data-i18n]').forEach(node=>{node.textContent=t(node.dataset.i18n)});
document.querySelectorAll('[data-i18n-attrs]').forEach(node=>{node.dataset.i18nAttrs.split(',').forEach(pair=>{const [attribute,key]=pair.split(':');node.setAttribute(attribute,t(key))})});
