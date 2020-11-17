<!DOCTYPE html>
<html lang="ua">
<header>
    <meta charset="UTF-16" name="viewport" content="width=device-width, initial-scale=1">
    <title>Title</title>
    <style>
        body {
            margin: 0px 40px 0px 40px;
        }
        #one {
            background-color: blue;
            float: bottom;
            width: 100%;
            height: 100px;
        }
        #two {
            background-color: yellow;
            height: 600px;
            width: 100%;
        }
        #three {
            background-color: blue;
            float: top;
            width: 100%;
            height: 60px;
        }
        #four {
            background-color: grey;
            height: 500px;
        }
        #five {
            background-color: yellow;
            height: 100px;
        }
        table{
            border-spacing: 0px;
            border-collapse: collapse;
        }
        td {
            padding: 0px
        }
    </style>
</header>
<body>
<div id="one">div 1</div>
<table width="100%" style="margin: 0px">
    <tr>
        <td rowspan="2" style="width: 30%">
            <div id="two">
                div 2
            </div>
        </td>
        <td>
            <div id="five">
                div 5
            </div>
        </td>
    </tr>
    <tr>
        <td>
        <div id="four">
            div 4
        </div>
        </td>
    </tr>
</table>
</body>
<footer id="three">
footer 3
</footer>
</html>