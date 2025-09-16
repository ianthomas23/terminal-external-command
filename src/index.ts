import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the terminal-external-command extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'terminal-external-command:plugin',
  description: 'A JupyterLite extension containing a terminal external command',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension terminal-external-command is activated!');
  }
};

export default plugin;
