/**
 * NullOS Notepad Application
 */

import { Sound } from '../core/audio.js';
import { FileSystem } from '../core/fileSystem.js';
import { Dialog } from '../components/Dialog.js';

export class NotepadApp {
  constructor(initialData = null) {
    this.container = document.createElement('div');
    this.container.className = 'notepad-window';
    this.currentPath = initialData?.path || null;
    this.initialContent = initialData?.content || '';
    this.isDirty = false;
    this.render();
    this.bindEvents();

    if (this.currentPath && !this.initialContent) {
      const file = FileSystem.getFile(this.currentPath);
      if (file) {
        this.container.querySelector('#notepad-textarea').value = file.content;
      }
    } else if (this.initialContent) {
      this.container.querySelector('#notepad-textarea').value = this.initialContent;
    }
    this.updateStatus();
  }

  render() {
    this.container.innerHTML = `
      <div class="notepad-menubar">
        <div class="notepad-menu-item" id="npm-file">File</div>
        <div class="notepad-menu-item" id="npm-edit">Edit</div>
        <div class="notepad-menu-item" id="npm-view">View</div>
        <div class="notepad-menu-item" id="npm-help">Help</div>
      </div>

      <textarea class="notepad-editor" id="notepad-textarea" placeholder="Start typing thoughts, secrets, or meaningless musings..." spellcheck="false"></textarea>

      <div class="notepad-statusbar">
        <span id="np-pos">Ln 1, Col 1</span>
        <span id="np-chars">0 characters</span>
        <span id="np-words">0 words</span>
        <span>100%</span>
        <span>Windows (CRLF)</span>
        <span>UTF-8</span>
      </div>
    `;
  }

  bindEvents() {
    const textarea = this.container.querySelector('#notepad-textarea');

    textarea.addEventListener('input', () => {
      this.isDirty = true;
      this.updateStatus();
    });

    textarea.addEventListener('click', () => this.updateCursorPos());
    textarea.addEventListener('keyup', () => this.updateCursorPos());

    // File menu
    this.container.querySelector('#npm-file').addEventListener('click', () => {
      Sound.playClick();
      Dialog.show({
        title: 'Notepad - Save',
        message: 'Save document to storage?',
        subtext: 'Your text will be safely stored in the virtual cosmos.',
        type: 'info',
        buttons: [
          { text: 'Save', primary: true },
          { text: 'Cancel' }
        ]
      }).then(res => {
        if (res === 'Save') {
          const content = textarea.value;
          const path = this.currentPath || 'C:/Users/Aizen/Documents/untitled_document.txt';
          FileSystem.saveFile(path, content);
          this.isDirty = false;
          Dialog.show({
            title: 'File Saved',
            message: 'File saved successfully.',
            subtext: 'Location: ' + path,
            type: 'check'
          });
        }
      });
    });

    // Help menu
    this.container.querySelector('#npm-help').addEventListener('click', () => {
      Sound.playClick();
      Dialog.show({
        title: 'About Notepad',
        message: 'NullOS Text Editor v1.0.0',
        subtext: 'An authentic distraction-free text editor designed to document thoughts that will never be acted upon.',
        type: 'info'
      });
    });
  }

  updateStatus() {
    const textarea = this.container.querySelector('#notepad-textarea');
    const text = textarea.value;
    const chars = text.length;
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;

    this.container.querySelector('#np-chars').textContent = `${chars} characters`;
    this.container.querySelector('#np-words').textContent = `${words} words`;
    this.updateCursorPos();
  }

  updateCursorPos() {
    const textarea = this.container.querySelector('#notepad-textarea');
    const text = textarea.value.substr(0, textarea.selectionStart);
    const lines = text.split('\n');
    const lineNum = lines.length;
    const colNum = lines[lines.length - 1].length + 1;

    this.container.querySelector('#np-pos').textContent = `Ln ${lineNum}, Col ${colNum}`;
  }

  getElement() {
    return this.container;
  }
}
