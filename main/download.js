document.getElementById('downloadButton').addEventListener('click', function()  {
    download();
});
function download()
{
    const timestamp = new Date().getTime();
    const fName = document.getElementById('fileName').value || 'output.txt';
    const content = document.getElementById('fileContent').value || ' ';
    const blob = new Blob([content], {type: 'text/plain'});
    const url = URL.createObjectURL(blob);      
    const downloadLink = document.createElement('a');
    downloadLink.href = url;
    downloadLink.download = fName;
    downloadLink.textContent = 'Download File';
    document.body.appendChild(downloadLink);
    downloadLink.click();
}