#!/bin/bash

# CPU load on all cores
cores=$(nproc 2>/dev/null || echo 4)
echo "CPU cores detected: $cores"
echo "Allocating 500 MB RAM load..."

# Allocate 500 MB RAM in memory
if command -v python3 >/dev/null 2>&1; then
    python3 -c "
import time, os
cores = os.cpu_count() or 4
print('Allocating 500 MB RAM...')
buf = bytearray(500 * 1024 * 1024)
for i in range(0, len(buf), 4096):
    buf[i] = 1
print('CPU and RAM stress started. Press Ctrl+C to stop.')
while True:
    time.sleep(1)
" &
elif command -v python >/dev/null 2>&1; then
    python -c "
import time, os
cores = os.cpu_count() or 4
print('Allocating 500 MB RAM...')
buf = bytearray(500 * 1024 * 1024)
for i in range(0, len(buf), 4096):
    buf[i] = 1
print('CPU and RAM stress started. Press Ctrl+C to stop.')
while True:
    time.sleep(1)
" &
fi

# CPU workers
for ((i=0; i<cores; i++))
do
    (
        while true
        do
            calc=$((12345 * 67890))
        done
    ) &
done

echo "CPU and RAM stress started. Press Ctrl+C to stop."
wait
