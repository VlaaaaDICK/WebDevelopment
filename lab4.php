<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<p id="url" onclick="createUrl()">URL</p>
<p id="hdlr" onclick="hdlr()">handler</p>
<p id="pids" onclick="pidstanovka()">asddsa</p>
<script>
    function createUrl() {
        window.location.assign('https://www.google.com/search?q=%D0%B0%D0%BD%D0%B8%D0%BC%D0%B5&rlz=1C1SQJL_ruUA909UA909&oq=fybvt&aqs=chrome.1.69i57j0i1i10l2j0i10j0i10i433j0i1i10j0i10j0i10i433.3241j0j7&sourceid=chrome&ie=UTF-8')
    }
    function hdlr() {
        alert("KY!")
    }
    function pidstanovka() {
        document.getElementById("pids").innerText = "some text";
    }
</script>
</body>
</html>