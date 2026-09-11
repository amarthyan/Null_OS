using System;
using System.IO;
using System.Diagnostics;
using System.Windows.Forms;

class Launcher {
    [STAThread]
    static void Main(string[] args) {
        string baseDir = AppDomain.CurrentDomain.BaseDirectory;
        
        // Priority 1: Check NullOS-dist\NullOS-win32-x64\NullOS.exe
        string target = Path.Combine(baseDir, "NullOS-dist", "NullOS-win32-x64", "NullOS.exe");
        if (!File.Exists(target)) {
            // Priority 2: Check NullOS-app\NullOS-win32-x64\NullOS.exe
            target = Path.Combine(baseDir, "NullOS-app", "NullOS-win32-x64", "NullOS.exe");
        }
        if (!File.Exists(target)) {
            // Priority 3: Check adjacent resources or app
            target = Path.Combine(baseDir, "NullOS-win32-x64", "NullOS.exe");
        }

        if (!File.Exists(target)) {
            MessageBox.Show(
                "Could not find NullOS core binary at:\n" + target + 
                "\n\nPlease ensure NullOS-dist folder is present.",
                "NullOS Launcher Error",
                MessageBoxButtons.OK,
                MessageBoxIcon.Error
            );
            return;
        }

        ProcessStartInfo psi = new ProcessStartInfo();
        psi.FileName = target;
        psi.WorkingDirectory = Path.GetDirectoryName(target);
        psi.Arguments = string.Join(" ", args);
        psi.UseShellExecute = true;

        try {
            Process.Start(psi);
        } catch (Exception ex) {
            MessageBox.Show(
                "Failed to start NullOS:\n" + ex.Message,
                "NullOS Launch Error",
                MessageBoxButtons.OK,
                MessageBoxIcon.Error
            );
        }
    }
}
