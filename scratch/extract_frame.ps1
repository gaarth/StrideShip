Add-Type -AssemblyName PresentationCore
Add-Type -AssemblyName PresentationFramework
Add-Type -AssemblyName WindowsBase

$player = New-Object System.Windows.Media.MediaPlayer
$player.ScrubbingEnabled = $true
$fileUri = [System.Uri]"c:\hackathon_prac\StrideShip\public\assets\hero-scrub.mp4"
$player.Open($fileUri)
Start-Sleep -Seconds 2

$drawingVisual = New-Object System.Windows.Media.DrawingVisual
$dc = $drawingVisual.RenderOpen()
$dc.DrawVideo($player, (New-Object System.Windows.Rect(0, 0, 1920, 1080)))
$dc.Close()

$bmp = New-Object System.Windows.Media.Imaging.RenderTargetBitmap(1920, 1080, 96, 96, [System.Windows.Media.PixelFormats]::Pbgra32)
$bmp.Render($drawingVisual)

$encoder = New-Object System.Windows.Media.Imaging.JpegBitmapEncoder
$encoder.Frames.Add([System.Windows.Media.Imaging.BitmapFrame]::Create($bmp))

$stream = [System.IO.File]::Create("c:\hackathon_prac\StrideShip\public\assets\hero-fallback.jpg")
$encoder.Save($stream)
$stream.Close()
$player.Close()
Write-Host "Poster frame updated!"
