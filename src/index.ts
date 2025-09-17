import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { ExitCode, IExternalRunContext } from '@jupyterlite/cockle';
import { ILiteTerminalAPIClient } from '@jupyterlite/terminal';

async function myExternalCommand(context: IExternalRunContext): Promise<number> {
  const { args, stdout } = context;
  stdout.write("Running external command\n");
  if (args.length > 0) {
    stdout.write("  arguments: " + args.join(" ") + "\n");
  }
  return ExitCode.SUCCESS;
}

/**
 * Initialization data for the terminal-external-command extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'terminal-external-command:plugin',
  description: 'A JupyterLite extension containing a terminal external command',
  autoStart: true,
  requires: [ILiteTerminalAPIClient],
  activate: (
    _: JupyterFrontEnd,
    liteTerminalAPIClient: ILiteTerminalAPIClient
  ) => {
    console.log('JupyterLab extension terminal-extension-cmd is activated!');

    liteTerminalAPIClient.registerExternalCommand({
      name: 'my-ext',
      command: myExternalCommand
    })
  }
};

export default plugin;
