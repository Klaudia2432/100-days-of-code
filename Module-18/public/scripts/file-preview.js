const filePickerElement = document.getElementById('image');
const filePreviewElement = document.getElementById('image-preview');

function showPreview() {
    const files = filePickerElement.files;
    if(!files || files.length === 0) {
        filePreviewElement.style.display = 'none';
        return;
    }
    const pickedFile = files[0];
    filePreviewElement.src = URL.createObjectURL(pickedFile);
    filePreviewElement.style.display = 'block';
}
filePickerElement.addEventListener('change', showPreview)