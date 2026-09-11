/**
 * NullOS Virtual Filesystem
 * High-authenticity file tree with realistic metadata, extensions, and deadpan contents.
 */

export class VirtualFileSystem {
  constructor() {
    this.fs = {
      'C:': {
        type: 'directory',
        name: 'Local Disk (C:)',
        children: {
          'testfile.org-5GB.dat': {
            type: 'file',
            name: 'testfile.org-5GB.dat',
            icon: 'fileExe',
            size: '5.00 GB (5,000,000,000 bytes)',
            modified: '2026-09-11 20:14',
            content: `[5.00 GB Binary Data Buffer - Increases actual application footprint to over 5 Gigabytes]`
          },
          'stress.sh': {
            type: 'file',
            name: 'stress.sh',
            icon: 'fileCode',
            size: '260 bytes',
            modified: '2026-09-11 20:22',
            content: `#!/bin/bash\n\n# CPU load\ncores=$(nproc)\n\nfor ((i=0; i<cores; i++))\ndo\n    while true\n    do\n        echo $((12345 * 67890)) > /dev/null\n    done &\ndone\n\n# RAM load (500 MB)\ndata=$(head -c 500M /dev/zero)\n\necho "CPU and RAM stress started. Press Ctrl+C to stop."\n\nwait`
          },
          'Users': {
            type: 'directory',
            name: 'Users',
            children: {
              'Aizen': {
                type: 'directory',
                name: 'Aizen',
                children: {
                  'Desktop': {
                    type: 'directory',
                    name: 'Desktop',
                    children: {
                      'important_notice.txt': {
                        type: 'file',
                        name: 'important_notice.txt',
                        icon: 'fileText',
                        size: '142 bytes',
                        modified: '2026-09-10 14:22',
                        content: `IMPORTANT SYSTEM ADVISORY:\n\nYour session is running at 100% stability.\nNo critical errors have occurred, which our engineers find deeply suspicious.\n\nPlease refrain from accomplishing anything urgent on this machine.`
                      },
                      'urgent_tasks.txt': {
                        type: 'file',
                        name: 'urgent_tasks.txt',
                        icon: 'fileText',
                        size: '89 bytes',
                        modified: '2026-09-11 09:15',
                        content: `1. Reorganize desktop icons into a subtly different grid.\n2. Check if the refrigerator light actually turns off.\n3. Breathe.`
                      }
                    }
                  },
                  'Documents': {
                    type: 'directory',
                    name: 'Documents',
                    children: {
                      'passwords_plaintext_do_not_share.txt': {
                        type: 'file',
                        name: 'passwords_plaintext_do_not_share.txt',
                        icon: 'fileText',
                        size: '310 bytes',
                        modified: '2026-08-14 22:04',
                        content: `--- CONFIDENTIAL CREDENTIALS ---\n\nBanking: password123\nMaster Vault: admin\nRoot Password: correcthorsebatterystaple\nExistential Security Pin: 0000\n\nSecurity Notice: This file is protected by the Windows Honor System.`
                      },
                      'world_domination_plan.txt': {
                        type: 'file',
                        name: 'world_domination_plan.txt',
                        icon: 'fileText',
                        size: '265 bytes',
                        modified: '2026-09-01 11:30',
                        content: `PHASE 1: Wake up at 6:00 AM.\nPHASE 2: Hit snooze until 9:45 AM.\nPHASE 3: Stare at ceiling contemplating universe.\nPHASE 4: World domination postponed to next Tuesday.`
                      },
                      'quarterly_goals.txt': {
                        type: 'file',
                        name: 'quarterly_goals.txt',
                        icon: 'fileText',
                        size: '198 bytes',
                        modified: '2026-09-08 16:45',
                        content: `Q3 Productivity Review:\n- Target: 100% effectiveness\n- Actual: Consumed 14 cups of tea while clicking empty folders\n- Status: On track for continued non-achievement.`
                      },
                      'Projects': {
                        type: 'directory',
                        name: 'Projects',
                        children: {
                          'revolutionary_software.js': {
                            type: 'file',
                            name: 'revolutionary_software.js',
                            icon: 'fileCode',
                            size: '184 bytes',
                            modified: '2026-09-04 18:20',
                            content: `// The Ultimate Operating System Optimizer\nfunction optimizeLife() {\n  while (true) {\n    // Doing nothing, but with great computational intensity\n  }\n}\noptimizeLife();`
                          }
                        }
                      }
                    }
                  },
                  'Downloads': {
                    type: 'directory',
                    name: 'Downloads',
                    children: {
                      'totally_legit_update.exe': {
                        type: 'file',
                        name: 'totally_legit_update.exe',
                        icon: 'fileExe',
                        size: '14.2 MB',
                        modified: '2026-09-11 17:12',
                        content: `BINARY EXECUTABLE CONTENT: [Unexecutable existential payload]`
                      },
                      'cat_picture_uncompressed.png': {
                        type: 'file',
                        name: 'cat_picture_uncompressed.png',
                        icon: 'fileImage',
                        size: '4.8 MB',
                        modified: '2026-09-09 13:02',
                        content: `[High resolution image of a cat judging you]`
                      }
                    }
                  },
                  'Pictures': {
                    type: 'directory',
                    name: 'Pictures',
                    children: {
                      'wallpaper_slate.png': {
                        type: 'file',
                        name: 'wallpaper_slate.png',
                        icon: 'fileImage',
                        size: '3.1 MB',
                        modified: '2026-08-01 10:00',
                        content: `[System Wallpaper]`
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      'RecycleBin': {
        type: 'directory',
        name: 'Recycle Bin',
        children: {
          'gym_membership_intentions.txt': {
            type: 'file',
            name: 'gym_membership_intentions.txt',
            icon: 'fileText',
            size: '52 bytes',
            modified: '2026-01-02 08:00',
            originalPath: 'C:/Users/Aizen/Documents',
            content: `I will definitely go 5 times a week starting Monday.`
          },
          'good_decisions.pdf': {
            type: 'file',
            name: 'good_decisions.pdf',
            icon: 'fileText',
            size: '0 bytes',
            modified: '2026-05-19 12:00',
            originalPath: 'C:/Users/Aizen/Desktop',
            content: `[File empty: 0 bytes of good decisions discovered]`
          }
        }
      }
    };
  }

  resolvePath(pathStr) {
    if (!pathStr || pathStr === 'This PC' || pathStr === 'Root') {
      return { node: this.fs['C:'], path: 'C:' };
    }
    if (pathStr === 'Recycle Bin') {
      return { node: this.fs['RecycleBin'], path: 'Recycle Bin' };
    }

    const cleanPath = pathStr.replace(/\\/g, '/');
    const segments = cleanPath.split('/').filter(Boolean);

    let current = this.fs['C:'];
    let traversed = ['C:'];

    for (let i = (segments[0] === 'C:' ? 1 : 0); i < segments.length; i++) {
      const seg = segments[i];
      if (current.children && current.children[seg]) {
        current = current.children[seg];
        traversed.push(seg);
      } else {
        return null;
      }
    }

    return { node: current, path: traversed.join('/') };
  }

  getItems(pathStr) {
    const res = this.resolvePath(pathStr);
    if (!res || res.node.type !== 'directory') return [];
    return Object.entries(res.node.children || {}).map(([name, item]) => ({
      name,
      ...item
    }));
  }

  getFile(pathStr) {
    const res = this.resolvePath(pathStr);
    if (res && res.node.type === 'file') {
      return res.node;
    }
    return null;
  }

  saveFile(pathStr, content) {
    const segments = pathStr.replace(/\\/g, '/').split('/').filter(Boolean);
    const fileName = segments.pop();
    const parentPath = segments.join('/');
    const parentRes = this.resolvePath(parentPath);

    if (parentRes && parentRes.node.type === 'directory') {
      const now = new Date();
      const dateStr = now.toISOString().slice(0, 16).replace('T', ' ');
      parentRes.node.children[fileName] = {
        type: 'file',
        name: fileName,
        icon: 'fileText',
        size: `${content.length} bytes`,
        modified: dateStr,
        content: content
      };
      return true;
    }
    return false;
  }

  deleteItem(pathStr) {
    const segments = pathStr.replace(/\\/g, '/').split('/').filter(Boolean);
    const itemName = segments.pop();
    const parentPath = segments.join('/');
    const parentRes = this.resolvePath(parentPath);

    if (parentRes && parentRes.node.children[itemName]) {
      const item = parentRes.node.children[itemName];
      delete parentRes.node.children[itemName];

      // Move to recycle bin
      this.fs['RecycleBin'].children[itemName] = {
        ...item,
        originalPath: parentPath
      };
      return true;
    }
    return false;
  }

  emptyRecycleBin() {
    this.fs['RecycleBin'].children = {};
  }
}

export const FileSystem = new VirtualFileSystem();
