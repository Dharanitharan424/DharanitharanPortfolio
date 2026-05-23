$path = 'C:\Users\dhara\OneDrive\Desktop\DHARANITHARAN RESUME.docx'
Add-Type -AssemblyName System.IO.Compression.FileSystem
$zip = [System.IO.Compression.ZipFile]::OpenRead($path)
$entry = $zip.GetEntry('word/document.xml')
$stream = $entry.Open()
$reader = New-Object System.IO.StreamReader($stream)
$xml = $reader.ReadToEnd()
$reader.Close()
$stream.Close()
$zip.Dispose()
$text = [regex]::Replace($xml, '<.*?>', ' ')
$text = $text -replace '\s+', ' '
Write-Output $text
