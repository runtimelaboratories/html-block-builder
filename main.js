import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';

import blocksBasic from 'grapesjs-blocks-basic';
import forms from 'grapesjs-plugin-forms';
import navbar from 'grapesjs-navbar';
import tabs from 'grapesjs-tabs';
import tooltip from 'grapesjs-tooltip';
import exportPlugin from 'grapesjs-plugin-export';

const editor = grapesjs.init({
  container: '#gjs',
  height: '100vh',

  storageManager: {
  type: 'local',
  autosave: true,
  autoload: true,
  stepsBeforeSave: 1, // save after every change
  },

  plugins: [
    exportPlugin,
    blocksBasic,
    forms,
    navbar,
    tabs,
    tooltip,
  ],

  pluginsOpts: {
    [blocksBasic]: {},
    [forms]: {},
    [navbar]: {},
  },

  canvas: {
    styles: [],
  },

  styleManager: {
  sectors: [
    {
      name: 'Layout',
      open: true,
      properties: [
        'display',
        'position',
        'top',
        'right',
        'left',
        'bottom',
        'width',
        'height',
        'margin',
        'padding',
      ]
    },
    {
      name: 'Typography',
      open: true,
      properties: [
        'font-size',
        'font-weight',
        'letter-spacing',
        'color',
        'line-height',
        'text-align',
      ]
    },
    {
      name: 'Decorations',
      open: false,
      properties: [
        'background-color',
        'border',
        'border-radius',
        'box-shadow',
        'opacity',
      ]
    },
    {
      name: 'Flex',
      open: false,
      properties: [
        'display',
        'flex-direction',
        'justify-content',
        'align-items',
        'gap',
      ]
    }
  ],

  selectorManager: {
  componentFirst: true
  }
},

  components: `
    <h1>Hello World 👋</h1>
    <p>This is your first GrapesJS page.</p>
  `,

  style: `
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
    }
  `,
});

const bm = editor.BlockManager;

// Header
bm.add('header', {
  label: 'Header',
  content: '<h1>Heading</h1>',
  category: 'Basic',
});

// Paragraph
bm.add('text', {
  label: 'Text',
  content: '<p>Insert your text here</p>',
  category: 'Basic',
});

// Section (container)
bm.add('section', {
  label: 'Section',
  content: `
    <section style="padding: 20px; border: 1px solid #ccc;">
      <h2>Section</h2>
      <p>Drop stuff inside me</p>
    </section>
  `,
  category: 'Layout',
});

// Image
bm.add('image', {
  label: 'Image',
  content: '<img src="https://via.placeholder.com/300" />',
  category: 'Basic',
});

bm.add('box', {
  label: 'Box',
  category: 'Layout',
  content: `
    <div style="
      padding: 20px;
      border: 1px dashed #999;
      min-height: 50px;
    ">
      Drop content here
    </div>
  `,
});

editor.DomComponents.addType('container', {
  model: {
    defaults: {
      droppable: true,   // 👈 key
      draggable: true,
    },
  },
});

editor.Panels.addButton('options', {
  id: 'export-zip',
  className: 'fa fa-download',
  command: 'gjs-export-zip',
  attributes: { title: 'Export ZIP' }
});

editor.DomComponents.addType('image', {
  model: {
    defaults: {
      traits: [
        {
          type: 'text',
          label: 'Image URL',
          name: 'src',
        },
        {
          type: 'text',
          label: 'Alt Text',
          name: 'alt',
        }
      ]
    }
  }
});

editor.BlockManager.add('button', {
  label: 'Button',
  content: `
    <a class="btn" href="#">Click me</a>
  `
});

editor.DomComponents.addType('link', {
  model: {
    defaults: {
      traits: [
        {
          type: 'text',
          label: 'URL',
          name: 'href',
        },
        {
          type: 'text',
          label: 'Target',
          name: 'target',
        }
      ]
    }
  }
});

editor.DomComponents.addType('box', {
  model: {
    defaults: {
      tagName: 'div',
      classes: ['box'],
      droppable: true,
      traits: [
        {
          type: 'text',
          label: 'Class',
          name: 'class',
        }
      ],
      style: {
        padding: '20px',
        border: '1px dashed #999',
      }
    }
  }
});

bm.add('box', {
  label: 'Box',
  content: { type: 'box' }
});

editor.Panels.addButton('options', {
  id: 'save-project',
  className: 'fa fa-save',
  command: 'save-project',
  attributes: { title: 'Save Project' }
});

editor.Panels.addButton('options', {
  id: 'load-project',
  className: 'fa fa-folder-open',
  command: 'load-project',
  attributes: { title: 'Load Project' }
});

editor.Commands.add('save-project', {
  run(editor) {
    const data = editor.getProjectData();
    const json = JSON.stringify(data, null, 2);

    downloadFile('project.json', json);
  }
});

editor.Commands.add('load-project', {
  run(editor) {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';

    input.onchange = (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onload = (event) => {
        const data = JSON.parse(event.target.result);
        editor.loadProjectData(data);
      };

      reader.readAsText(file);
    };

    input.click();
  }
});

function downloadFile(filename, content) {
  const a = document.createElement('a');
  a.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(content);
  a.download = filename;
  a.click();
}