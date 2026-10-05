# NNotepad

[English](README.md) · [简体中文](README.zh-CN.md)

**Simple is enough.**

A lightweight notepad for plain text and Markdown. Write a note, paste an AI response, or edit its formatted result directly—without installing an app or creating an account.

**Open `index.html` and start writing.** No build step or server required.

## Features

| Feature | What it does |
| --- | --- |
| TXT & Markdown | Choose the format for each note. Switching keeps the source text. |
| Editable preview | Edit the source, use a split view, or type into the formatted Markdown. |
| Quiet autosave | Save notes in your browser as you type. Only errors show a message. |
| Multiple notes | Create notes and search their titles and content in the sidebar. |
| Import & export | Open files from the sidebar. Right-click a note to export or delete it. |
| Backup & restore | Download all notes as JSON and restore them later. |
| Simple appearance | Light and deep-purple dark themes, text-size controls, and a collapsible sidebar. |

Markdown supports headings, bold, italic, lists, task lists, quotes, tables, links, and code blocks. The libraries are included locally; editing and rendering work offline.

## Get started

1. Download this repository as a ZIP and extract it, or clone it:

   ```sh
   git clone https://github.com/Ahorns/NNotepad.git
   ```

2. Open **`index.html`** in a modern browser. Keep `vendor/` beside it.
3. Create a note. Choose **MD Markdown** to paste Markdown and see the result.
4. Use **Split** to compare source and formatting, or **Preview** to edit formatted content directly.

Importing `.md` or `.markdown` selects Markdown mode automatically. Exports use `.md` in Markdown mode and `.txt` in plain-text mode.

## Language

The interface follows your browser's primary language: **Chinese → Simplified Chinese; all other languages → English**. There is no language selector, and note content is never translated.

Browsers often follow the operating system language, but a webpage cannot directly read the Windows display-language setting. If you set a different browser language, that preference is used.

## Where your notes live

Notes are saved in **localStorage**, not in the project folder or a remote account. Publishing the code does not publish your notes.

- Use the same browser and file location or website address to return to your notes.
- Clearing browser data, private browsing, moving local files, or changing browsers may make previous notes unavailable.
- **Back up all** downloads a JSON file. **Restore backup replaces all current notes**—back up first.
- To move between folders or computers, back up on the old page and restore on the new one.
- Avoid editing in multiple windows. If another window changes the notes, export unsaved edits before reloading.

Editing works offline. Images referenced by a note and external links may access the network.

## Shortcuts

| Shortcut | Action |
| --- | --- |
| Ctrl / ⌘ + S | Export current note |
| Ctrl + Alt + N | New note |
| Ctrl + B / Ctrl + I | Bold / italic in the formatted editor |
| Ctrl / ⌘ + click a link | Open the link |
| Esc | Close a context menu or the mobile sidebar |

## Project files

```text
index.html          Layout and English fallback labels
style.css           Layout, themes, and responsive styles
app.js              Notes, autosave, Markdown editing, and menus
i18n.js             Automatic English / Chinese interface text
vendor/             Offline libraries and their licenses
README.md           English guide
README.zh-CN.md      Chinese guide
THIRD_PARTY.md      Library versions and sources
```

This is a static website: no package installation or compilation step. Edit the files directly or serve them with any static-file server. Each visitor's notes stay in their own browser.

## Current limits

- Editing formatted content normalizes Markdown spacing and delimiters. Switching views alone does not rewrite the source.
- Task-list checkboxes are read-only.
- LaTeX formulas, Mermaid diagrams, and syntax highlighting are not included.
- Text files are imported as UTF-8.
- No cross-device or cross-browser sync.

Third-party notices are in [THIRD_PARTY.md](THIRD_PARTY.md); original license files are included in `vendor/`.
