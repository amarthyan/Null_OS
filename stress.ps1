# NullOS Real CPU & RAM Hardware Stress Engine
$host.UI.RawUI.WindowTitle = "NullOS Hardware Stress Engine"
$cores = [System.Environment]::ProcessorCount
Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "  NullOS Hardware Stress Engine" -ForegroundColor Cyan
Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "CPU cores detected: $cores" -ForegroundColor Yellow
Write-Host "Allocating 500 MB physical RAM load..." -ForegroundColor Yellow

# Allocate and touch memory to force full physical RAM working set commitment
$data = New-Object byte[] (500 * 1024 * 1024)
for ($i = 0; $i -lt $data.Length; $i += 4096) {
    $data[$i] = 1
}
$ws = [Math]::Round(((Get-Process -Id $PID).WorkingSet64 / (1024 * 1024)), 1)
Write-Host "Committed Working Set RAM: $ws MB" -ForegroundColor Green

Write-Host "Launching multi-threaded CPU stress across all $cores cores..." -ForegroundColor Yellow

$pool = [System.Management.Automation.Runspaces.RunspaceFactory]::CreateRunspacePool(1, $cores)
$pool.Open()
$tasks = @()

for ($i = 0; $i -lt $cores; $i++) {
    $ps = [powershell]::Create()
    $ps.RunspacePool = $pool
    [void]$ps.AddScript({
        while ($true) {
            $val = 12345 * 67890
        }
    })
    $tasks += @{ Pipe = $ps; Handle = $ps.BeginInvoke() }
}

Write-Host "==========================================================" -ForegroundColor Green
Write-Host "CPU and 500 MB RAM stress actively running." -ForegroundColor Green
Write-Host "Keep this window open or press Ctrl+C to halt stress." -ForegroundColor Gray
Write-Host "==========================================================" -ForegroundColor Green

try {
    while ($true) {
        Start-Sleep -Seconds 2
    }
} finally {
    Write-Host "`nStopping stress threads and releasing RAM..." -ForegroundColor Yellow
    foreach ($t in $tasks) {
        try {
            $t.Pipe.Stop()
            $t.Pipe.Dispose()
        } catch {}
    }
    $pool.Close()
    $pool.Dispose()
    $data = $null
    [System.GC]::Collect()
    Write-Host "Stress released." -ForegroundColor Green
}
